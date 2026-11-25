// ジャンプの距離・滞空と、跳んだ後の曲がりを数える。node tools/metrics.mjs [jsのあるフォルダ]
const dir = process.argv[2] && process.argv[1].endsWith('metrics.mjs') ? new URL('file://' + process.argv[2] + '/') : new URL('../js/', import.meta.url)
const { buildCourse } = await import(new URL('course.js', dir))
const { makeSim, computeJumps } = await import(new URL('sim.js', dir))
export function metrics() {
  const c = buildCourse(), jumps = computeJumps(c), out = []
  for (const j of jumps) {
    const v = Math.round((j.lo + j.hi) / 2 * 2) / 2
    const sim = makeSim(c); sim.fixSpeed = v; sim.reset(0)
    const i = Math.max(2, j.from - 8); sim.x = c.X[i]; sim.z = c.Z[i]; sim.th = c.TH[i]; sim.y = c.Y[i]; sim.i = i; sim.vx = Math.sin(sim.th) * v; sim.vz = Math.cos(sim.th) * v; sim.invul = 0
    let air = 0, best = 0, cur = 0, leg1 = 0, t0 = null, bounced = false, x0, z0, x1, z1, ok = false
    for (let k = 0; k < 60 * 10; k++) {
      const wasGround = sim.ground; sim.ev.length = 0; sim.step(0, 0)
      if (wasGround && !sim.ground && t0 === null) { t0 = k; x0 = sim.x; z0 = sim.z }
      if (!sim.ground) { cur++; air++; best = Math.max(best, cur) } else cur = 0
      for (const e of sim.ev) if (e.t === 'bounce' && !bounced) { bounced = true; leg1 = cur / 60 }
      if (sim.ground && sim.i > j.end + 3) { x1 = sim.x; z1 = sim.z; ok = true; break }
      if (sim.mode === 'fall') break
    }
    const w = c.WLD[j.from]
    // 跳んだ後（着地から 75 サンプル以内）の曲がり: 同じ向きに曲がり続ける区間の角度
    let turn = 0, nt = 0, k = j.end
    while (k < Math.min(c.n - 2, j.end + 75)) { const d0 = c.TH[k + 1] - c.TH[k]; if (Math.abs(d0) < 0.004) { k++; continue } const sg = Math.sign(d0); let q = k; while (q < c.n - 2 && Math.sign(c.TH[q + 1] - c.TH[q]) === sg && Math.abs(c.TH[q + 1] - c.TH[q]) > 0.004) q++; const a = Math.abs(c.TH[q] - c.TH[k]) * 180 / Math.PI; if (a >= 60) { turn = Math.max(turn, a); nt++ } k = q + 1 }
    out.push({ w, ok, v, dist: Math.round(Math.hypot(x1 - x0, z1 - z0)), drop: Math.round(-(c.Y[j.end] - c.Y[j.from])), air: +(air / 60).toFixed(2), glide: +best.toFixed(0) / 60, leg1: +leg1.toFixed(2), turn: Math.round(turn), nt })
  }
  return out
}
if (process.argv[1] && process.argv[1].endsWith('metrics.mjs')) {
const r = metrics()
const f = (a, k) => Math.max(...a.map(o => o[k]))
console.log(JSON.stringify({ n: r.length, maxDist: f(r, 'dist'), maxAir: f(r, 'air'), maxLeg1: f(r, 'leg1'), maxDrop: f(r, 'drop'), perWorld: [0, 1, 2, 3].map(w => ({ jumps: r.filter(o => o.w === w).length, maxAir: Math.max(...r.filter(o => o.w === w).map(o => o.air)), turnsAfter: r.filter(o => o.w === w && o.turn >= 60).length, maxTurn: Math.max(...r.filter(o => o.w === w).map(o => o.turn)) })), all: r.map(o => `${o.w}:${o.dist}m/${o.air}s/t${o.turn}`) }))
}
