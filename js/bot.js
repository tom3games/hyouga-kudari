// bot: 人の速さで遊ぶ。決めてから指が動くまで delay 秒かかる（反応 0.3〜0.6 秒）。先を試し走りして舟の行き先を読む
// 反応の遅れぶんは「その間の自分の動き」を見込んで決める（人も先を読む）。ずれと迷いは noise で入れる
import { DT, P } from './sim.js'
const U = [-1, -0.5, 0, 0.5, 1]
const wrap = a => { while (a > Math.PI) a -= 2 * Math.PI; while (a < -Math.PI) a += 2 * Math.PI; return a }
// 道なり運転（試し走りの後半に使う）。速度の向きを道の向きに合わせ、横滑りぶんを先に切る
function follow(sim, kpsi) {
  const c = sim.c, i = sim.i, j = Math.min(c.n - 1, i + Math.round(Math.max(10, sim.speed * 0.7) / 1.5))
  const tang = c.TH[Math.min(c.n - 1, i + 6)], psi = Math.atan2(sim.vx, sim.vz)
  const tgt = tang + Math.max(-0.5, Math.min(0.5, -sim.d * 0.16))
  const wDes = wrap(c.TH[j] - c.TH[i]) / Math.max(1, (j - i) * 1.5) * sim.speed
  const e = wrap(tgt - psi)
  const thStar = psi + Math.max(-0.95, Math.min(0.95, (kpsi * e + wDes) / P.grip))
  return Math.max(-1, Math.min(1, wrap(thStar - sim.th) * 4 / P.wMax))
}
export function makeBot(sim, o = {}) {
  let seed = (o.seed ?? 1) >>> 0
  const rnd = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296 }
  const gauss = () => { let s = 0; for (let i = 0; i < 4; i++) s += rnd(); return (s - 2) * 1.73 }
  const delay = o.delay ?? 0.4, every = o.every ?? 0.16, noise = o.noise ?? 0.0, horizon = o.horizon ?? 1.5, t1 = o.t1 ?? 0.35
  const q = []; let applied = 0, appliedB = 0, nextDecide = 0, held = 0
  function cost(u1, u2, b, horizon) {   // u2 が 100 以上なら道なり運転（kpsi = u2 - 100）
    let c = 0, dead = false
    const n1 = Math.round(t1 / DT), n = Math.round(horizon / DT)
    const ev0 = sim.ev.length
    for (let k = 0; k < n; k++) {
      sim.step(k < n1 ? u1 : (u2 >= 50 ? follow(sim, u2 - 100 + 1.4) : u2), b)
      for (let e = sim.ev.length - 1; e >= ev0; e--) if (sim.ev[e].t === 'bounce') { let a = sim.i, z = sim.i; while (sim.c.PAD[a - 1]) a--; while (sim.c.PAD[z + 1]) z++; c += Math.abs(sim.i - (a + z) / 2) * 0.35 + Math.abs(sim.d) * 0.5; sim.ev.length = ev0 + 0; break }
      if (sim.mode === 'fall') { c += 4000 + 2000 * (n - k) / n; dead = true; break }
      if (sim.mode === 'done') break
      const hw = Math.max(1.5, sim.hw), r = Math.abs(sim.d) / hw
      if (sim.ground || sim.surf) c += r * r * 6 + (r > 0.8 ? (r - 0.8) * 80 : 0)
      c += Math.abs(sim.slip) > 0.9 ? 3 : 0
    }
    c += Math.max(0, P.vt[Math.min(3, sim.world)] * 0.92 - sim.speed) * 1.6
    return c
  }
  return {
    act() {
      const t = sim.t
      if (t >= nextDecide && sim.mode !== 'fall') {
        nextDecide = t + every
        const snap = sim.snapshot()
        // 反応の遅れのあいだに入る予定の入力で先へ進めた状態から考える
        const pending = q.slice()
        let a = applied, qi = 0
        const nd = Math.round(delay / DT)
        let ab = appliedB
        for (let k = 0; k < nd; k++) { while (qi < pending.length && pending[qi][0] <= t + k * DT) { a = pending[qi][1]; ab = pending[qi][2]; qi++ } sim.step(a, ab) }
        // 目で見た位置・向きの読み違い（人は数十cmずれて見る）
        if (o.eye) { const e1 = gauss() * o.eye, e2 = gauss() * (o.eyeTh ?? 0.04); sim.x += Math.cos(sim.th) * e1; sim.z -= Math.sin(sim.th) * e1; sim.th += e2; sim.locate() }
        const base = sim.snapshot()
        let best = 1e18, bu = 0, bb = 0
        // 見せ場が近い間は長めに先を読み、ブレーキも試す
        const c0 = sim.c; let near = false
        for (const g of c0.gaps) if (sim.i < g.from + 2 && g.from - sim.i < 90) { near = true; break }
        const hz = near ? 4.4 : horizon, BR = near || sim.speed > 22 ? [0, 1] : [0]
        for (const b of BR) for (const u1 of U) for (const u2 of [-1, 0, 1, 100.0 - 0.4, 100.6]) {
          const c = cost(u1, u2, b, hz) + Math.abs(u1 - held) * 0.15 + b * 2.5 + (noise ? gauss() * noise : 0)
          sim.restore(base)
          if (c < best) { best = c; bu = u1; bb = b }
        }
        sim.restore(snap)
        held = bu
        q.push([t + delay, bu, bb])
      }
      while (q.length && q[0][0] <= t) { const e = q.shift(); applied = e[1]; appliedB = e[2] }
      return [applied, appliedB]
    },
  }
}
