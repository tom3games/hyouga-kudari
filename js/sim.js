// 物理（氷の上の舟）。DOM にも three.js にも依存しない。固定 60Hz で step() を呼ぶ。
// 舟は自動で進む。入力は steer（-1〜1。+1 が左）だけ。向き th が曲がり、速度は遅れて追いかける（氷なので横に滑る）
import { buildCourse, DS } from './course.js'

export const DT = 1 / 60
export const P = {
  gravity: 26,
  grip: 1.35,           // 横滑りが消える速さ（/秒）。小さいほど滑る
  wMax: 1.35,           // 最大の回頭（rad/秒）
  wLag: 0.15,           // 回頭が入力に追いつく時間（秒）
  accel: 9, brake: 18, vMin: 12,             // 前進の加速上限 m/s^2
  vt: [19, 21.5, 22.5, 25.5],   // 世界ごとの目標速度
  boostMul: 1.28, boostTime: 1.6,
  driftAngle: 0.38, driftNeed: 0.65,   // この角度より深い横滑りを何秒保てば加速するか
  edgeSlack: 0.32, fallDepth: 22, fallTime: 2.3,
  lives: 4,
}

export function makeSim(course = buildCourse()) {
  if (!course.jumps) course.jumps = []
  const c = course
  const FLOOR = new Float32Array(c.n)
  for (let i = c.n - 1, nextY = 0; i >= 0; i--) { if (c.SOL[i]) nextY = c.Y[i]; FLOOR[i] = c.SOL[i] ? c.Y[i] : nextY }
  const sim = {
    c, t: 0, ev: [],
    x: 0, z: 0, y: 0, vx: 0, vz: 0, vy: 0, th: 0, w: 0, hold: 0, steer: 0,
    s: 0, i: 0, d: 0, ground: true, mode: 'run', fallT: 0, charge: 0, boostT: 0, lives: P.lives, falls: 0,
    maxS: 0, runT: 0, cp: 0, world: 0, drift: 0, slip: 0, speed: 0, finished: false, edgeT: 0, airT: 0, perfect: 0,
    gatesPassed: 0, lastLand: 0,
  }
  sim.reset = (cpIdx = 0, keepStats = false) => {
    const i = c.cps[Math.min(cpIdx, c.cps.length - 1)] ?? 4
    sim.cp = cpIdx
    sim.x = c.X[i]; sim.z = c.Z[i]; sim.th = c.TH[i]; sim.y = c.Y[i]
    sim.vy = 0; sim.w = 0; sim.hold = 0; sim.steer = 0; sim.charge = 0; sim.boostT = 0; sim.ground = true; sim.mode = 'run'; sim.fallT = 0; sim.airT = 0
    const v0 = cpIdx === 0 ? 9 : P.vt[c.WLD[i]] * 0.85
    sim.vx = Math.sin(sim.th) * v0; sim.vz = Math.cos(sim.th) * v0
    sim.i = i; sim.s = i * DS; sim.d = 0; sim.world = c.WLD[i]; sim.finished = false; sim.invul = 0.8
    sim.gatesPassed = c.gates.filter(g => g < i).length
  }
  sim.reset(0)
  // 近い点を探す（前回の位置のまわりだけ）。戻り値は線分の番号と位置
  function locate() {
    const lo = Math.max(0, sim.i - 14), hi = Math.min(c.n - 2, sim.i + 30)
    let best = 1e18, bi = sim.i, bt = 0
    for (let i = lo; i <= hi; i++) {
      const ax = c.X[i], az = c.Z[i], bx = c.X[i + 1] - ax, bz = c.Z[i + 1] - az
      let t = ((sim.x - ax) * bx + (sim.z - az) * bz) / (bx * bx + bz * bz); t = Math.max(0, Math.min(1, t))
      const px = ax + bx * t - sim.x, pz = az + bz * t - sim.z, dd = px * px + pz * pz
      if (dd < best) { best = dd; bi = i; bt = t }
    }
    sim.i = bi
    sim.s = (bi + bt) * DS
    const th = c.TH[bi] + (c.TH[bi + 1] - c.TH[bi]) * bt
    const cx = c.X[bi] + (c.X[bi + 1] - c.X[bi]) * bt, cz = c.Z[bi] + (c.Z[bi + 1] - c.Z[bi]) * bt
    sim.d = (sim.x - cx) * Math.cos(th) - (sim.z - cz) * Math.sin(th)    // 左が正
    sim.hw = c.W[bi] + (c.W[bi + 1] - c.W[bi]) * bt
    sim.surf = c.SOL[bi] && c.SOL[bi + 1]
    sim.sy = c.Y[bi] + (c.Y[bi + 1] - c.Y[bi]) * bt
    sim.tth = th
    sim.floor = FLOOR[bi]
  }
  sim.locate = locate
  sim.step = (steerIn, brakeIn = 0) => {
    sim.t += DT; if (sim.mode === 'run' || sim.mode === 'air') sim.runT += DT
    if (sim.invul > 0) sim.invul -= DT
    const th0 = sim.th
    // 入力: 押している間は少しずつ最大へ（指で細かく曲げられる）
    const target = Math.max(-1, Math.min(1, steerIn))
    if (target === 0) sim.hold = 0
    else if (Math.sign(target) !== Math.sign(sim.hold)) sim.hold = 0.35 * target
    const want = Math.abs(target) < 0.999 ? target : Math.sign(target) * Math.min(1, Math.abs(sim.hold) + DT / 0.22)
    sim.hold = want
    sim.steer = want
    if (sim.mode === 'fall') return stepFall()
    if (sim.mode === 'done') return stepDone()
    const fwdx = Math.sin(sim.th), fwdz = Math.cos(sim.th), lx = Math.cos(sim.th), lz = -Math.sin(sim.th)
    // 回頭（慣性つき）
    const spd = Math.hypot(sim.vx, sim.vz), fast = Math.max(0, Math.min(1, (spd - 18) / 14))
    const brake = sim.ground ? Math.max(0, Math.min(1, brakeIn)) : 0; sim.brake = brake
    const wT = (sim.ground ? 1 : 0.35) * sim.steer * P.wMax * (1 - 0.3 * fast)
    sim.w += (wT - sim.w) * Math.min(1, DT / P.wLag)
    sim.th += sim.w * DT
    const f2x = Math.sin(sim.th), f2z = Math.cos(sim.th), l2x = Math.cos(sim.th), l2z = -Math.sin(sim.th)
    let vf = sim.vx * f2x + sim.vz * f2z, vl = sim.vx * l2x + sim.vz * l2z
    const w = sim.world, vt = P.vt[Math.min(3, w)] * (sim.boostT > 0 ? P.boostMul : 1)
    if (sim.ground) {
      vl *= Math.exp(-P.grip * (1 - 0.28 * fast + 0.35 * brake) * DT)
      if (brake > 0) vf = Math.max(P.vMin, vf - P.brake * brake * DT)
      else vf += Math.max(-P.accel * DT, Math.min(P.accel * DT, (vt - vf) * 0.9))
      if (sim.fixSpeed) vf = sim.fixSpeed
      // 真横を向くと削れて遅くなる
      const sa = Math.abs(Math.atan2(vl, Math.max(0.1, vf)))
      if (sa > 0.9) vf *= 1 - (sa - 0.9) * 0.6 * DT
    } else { vl *= Math.exp(-0.15 * DT) }
    sim.vx = f2x * vf + l2x * vl; sim.vz = f2z * vf + l2z * vl
    sim.x += sim.vx * DT; sim.z += sim.vz * DT
    sim.speed = Math.hypot(sim.vx, sim.vz)
    const alpha = Math.atan2(vl, Math.max(0.1, vf)); sim.slip = alpha
    locate()
    if (sim.s > sim.maxS) sim.maxS = sim.s
    // ---- 地面
    if (sim.ground) {
      sim.y = sim.sy; sim.vy = 0
      const off = Math.abs(sim.d) - sim.hw
      if (!sim.surf || off > P.edgeSlack) {
        sim.ground = false; sim.airT = 0
        const prev = Math.max(0, sim.i - 1), nxt = Math.min(c.n - 1, sim.i + 1)
        sim.vy = Math.min(0, (c.Y[nxt] - c.Y[prev]) / (2 * DS) * sim.speed)
        sim.ev.push({ t: 'leave', edge: !!sim.surf })
      } else {
        sim.edgeT = off > -0.7 ? sim.edgeT + DT : 0
        if (sim.edgeT > 0 && sim.edgeT < DT * 1.5) sim.ev.push({ t: 'edge' })
      }
      // 深く滑らせ続けると加速（ドリフト）
      const turning = Math.sign(alpha) === -Math.sign(sim.steer) && Math.abs(sim.steer) > 0.3
      if (Math.abs(alpha) > P.driftAngle && sim.speed > 12 && sim.boostT <= 0 && turning) {
        sim.charge += DT / P.driftNeed
        if (sim.charge >= 1) { sim.charge = 0; sim.boostT = P.boostTime; vf += 3; sim.vx = f2x * vf + l2x * vl; sim.vz = f2z * vf + l2z * vl; sim.ev.push({ t: 'boost', kind: 'drift' }) }
      } else sim.charge = Math.max(0, sim.charge - DT * 0.9)
      sim.drift = Math.abs(alpha) > 0.25 ? alpha : 0
    } else {
      sim.airT += DT; let continue_ = false
      sim.vy -= P.gravity * DT; sim.y += sim.vy * DT
      sim.charge = 0
      if (sim.surf && Math.abs(sim.d) < sim.hw + 0.05 && sim.vy <= 0 && sim.y <= sim.sy && sim.y > sim.sy - 1.4) {
        const imp = -sim.vy
        if (c.PAD[sim.i] && imp > 7 && !sim.fixNoBounce) {
          sim.y = sim.sy; sim.vy = Math.max(11, imp * 0.58); sim.airT = 0; sim.ev.push({ t: 'bounce', imp }); sim.padHit = (sim.padHit || 0) + 1
          sim.boostT = Math.max(sim.boostT, 0); continue_ = true
        } else { sim.ground = true; sim.y = sim.sy; sim.vy = 0 }
        if (continue_) { /* バウンド中 */ } else {
        // 着地: 進む向きと舟の向きがそろっているほど気持ちよく、ずれていると滑る
        const a = Math.abs(alpha)
        sim.lastLand = imp
        if (sim.airT > 0.35 && imp > 8) {
          if (a < 0.2 && Math.abs(sim.d) < sim.hw * 0.7) { sim.boostT = Math.max(sim.boostT, 1.0); sim.ev.push({ t: 'land', imp, perfect: true }) }
          else sim.ev.push({ t: 'land', imp, perfect: false })
        } else sim.ev.push({ t: 'touch' })
        }
      } else if (sim.y < sim.floor - 2.6) startFall()
    }
    if (sim.boostT > 0) sim.boostT -= DT
    // ---- 門・終点
    for (let g = sim.gatesPassed; g < c.gates.length; g++) {
      if (sim.i > c.gates[g]) { sim.gatesPassed = g + 1; sim.world = Math.min(3, g + 1); sim.ev.push({ t: 'gate', world: sim.world }) }
    }
    if (c.finishIdx > 0 && sim.i >= c.finishIdx && sim.mode === 'run' && sim.ground) { sim.mode = 'done'; sim.finished = true; sim.ev.push({ t: 'finish' }) }
    // 区切り（その先へ進んだら更新）
    for (let k = sim.cp + 1; k < c.cps.length; k++) if (sim.ground && sim.i >= c.cps[k] + 1 && sim.surf) { sim.cp = k; sim.ev.push({ t: 'cp', k }) }
    sim.mode = sim.mode === 'run' || sim.mode === 'air' ? (sim.ground ? 'run' : 'air') : sim.mode
  }
  function startFall() {
    if (sim.mode === 'fall') return
    sim.mode = 'fall'; sim.fallT = 0; sim.ev.push({ t: 'fall' })
    sim.falls++; sim.lives--
  }
  function stepFall() {
    sim.fallT += DT
    sim.vy -= P.gravity * DT * 0.9; sim.y += sim.vy * DT
    sim.x += sim.vx * DT; sim.z += sim.vz * DT
    sim.vx *= Math.exp(-0.25 * DT); sim.vz *= Math.exp(-0.25 * DT)
    sim.th += sim.w * DT * 0.5
    sim.w += (sim.w > 0 ? 1 : -1) * 0.04
    if (sim.fallT > P.fallTime && !sim.dead) { sim.dead = true; sim.ev.push({ t: 'dead' }) }
  }
  function stepDone() {
    // 終点: 広い所で自然に止まる
    const f = Math.sin(sim.th), g = Math.cos(sim.th)
    sim.vx *= Math.exp(-0.9 * DT); sim.vz *= Math.exp(-0.9 * DT)
    sim.x += sim.vx * DT; sim.z += sim.vz * DT; sim.th += sim.w * DT * 0.2; sim.w *= 0.95
    locate(); sim.y = sim.sy; sim.speed = Math.hypot(sim.vx, sim.vz)
  }
  // 落ちたあとの復帰（寿命が残っていれば）
  // 先読み用: 状態の控えと戻し（bot が数秒先を試し走りする）
  const KEYS = ['t','x','z','y','vx','vz','vy','th','w','hold','steer','s','i','d','ground','mode','fallT','charge','boostT','lives','falls','maxS','runT','cp','world','drift','slip','speed','finished','edgeT','airT','perfect','gatesPassed','lastLand','dead','invul','hw','surf','sy','tth','floor']
  sim.snapshot = () => { const o = {}; for (const k of KEYS) o[k] = sim[k]; o.evn = sim.ev.length; return o }
  sim.restore = (o) => { for (const k of KEYS) sim[k] = o[k]; sim.ev.length = o.evn }
  sim.respawn = () => { sim.dead = false; sim.reset(sim.cp) }
  return sim
}

// 見せ場ごとの「ちょうどいい速さ」を、まっすぐ進む舟を速さ別に試し走りして求める（画面の速さ帯の元）
export function computeJumps(c) {
  if (c.jumps && c.jumps.length) return c.jumps
  const out = []
  for (let gi = 0; gi < c.gaps.length; gi++) {
    const g = c.gaps[gi]
    if (!c.PAD[g.to]) continue
    const g2 = c.gaps[gi + 1]; if (!g2) continue
    const ok = []
    for (let v = 8; v <= 36; v += 0.5) {
      const sim = makeSim(c); sim.fixSpeed = v
      sim.reset(0)
      const i = Math.max(2, g.from - 8)
      sim.x = c.X[i]; sim.z = c.Z[i]; sim.th = c.TH[i]; sim.y = c.Y[i]; sim.i = i; sim.vx = Math.sin(sim.th) * v; sim.vz = Math.cos(sim.th) * v; sim.invul = 0
      let good = false
      for (let k = 0; k < 60 * 9; k++) {
        sim.step(0, 0)
        if (sim.mode === 'fall') break
        if (sim.ground && sim.i > g2.to + 4) { good = true; break }
      }
      if (good) ok.push(v)
    }
    out.push({ from: g.from, to: g.to, end: g2.to, lo: ok.length ? ok[0] : 0, hi: ok.length ? ok[ok.length - 1] : 0 })
  }
  c.jumps = out
  return out
}
