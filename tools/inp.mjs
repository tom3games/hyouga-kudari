// スマホ相当（CPU を遅くする）で、操作ボタンを押してから次の描画までの遅れ（INP と同じ測り方）と、1コマの時間を測る
// 使い方: node tools/inp.mjs [CPU倍率=6]
import '../mute-auto.mjs'
import { chromium } from 'playwright'
import { spawn } from 'node:child_process'
const ROOT = new URL('..', import.meta.url).pathname
const RATE = Number(process.argv[2] || 6), PORT = 5491 + Math.floor(Math.random() * 50)
const server = spawn(process.execPath, ['server.mjs'], { cwd: ROOT, env: { ...process.env, PORT: String(PORT) } })
await new Promise(r => setTimeout(r, 700))
const SOFT = process.env.SOFT === '1'
const b = await chromium.launch({ args: SOFT ? ['--mute-audio', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] : ['--mute-audio', '--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist'] })
const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true, deviceScaleFactor: 3 })
const p = await ctx.newPage(); const errs = []
p.on('pageerror', e => errs.push(e.message))
await p.addInitScript(() => {
  window.__ev = []; window.__lt = []
  new PerformanceObserver(l => { for (const e of l.getEntries()) window.__ev.push({ n: e.name, d: e.duration, wait: e.processingStart - e.startTime, t: e.target && e.target.id }) }).observe({ type: 'event', durationThreshold: 16, buffered: true })
  new PerformanceObserver(l => { for (const e of l.getEntries()) window.__lt.push(e.duration) }).observe({ type: 'longtask', buffered: true })
})
const cdp = await ctx.newCDPSession(p); await cdp.send('Emulation.setCPUThrottlingRate', { rate: RATE })
const t0 = Date.now()
await p.goto(`http://localhost:${PORT}/`)
// 読み込み中に画面をタップする（#loading の遅れ）
const bootTaps = []
for (let i = 0; i < 8; i++) { await p.waitForTimeout(300); if (await p.evaluate(() => !!window.__hkReady)) break; const s = Date.now(); await p.mouse.click(195, 400).catch(() => {}); bootTaps.push(Date.now() - s) }
await p.waitForFunction(() => window.__hkReady, null, { timeout: 120000 })
const bootMs = Date.now() - t0
const bootLT = await p.evaluate(() => { const a = window.__lt.slice(); window.__lt.length = 0; window.__ev.length = 0; return { max: Math.round(Math.max(0, ...a)), n: a.length } })
await p.tap('#bStart'); await p.waitForTimeout(2500)
await p.evaluate(() => { window.__fr = []; let l = performance.now(); const f = n => { window.__fr.push(n - l); l = n; if (window.__fr.length < 2000) requestAnimationFrame(f) }; requestAnimationFrame(f) })
const box = id => p.locator('#' + id).boundingBox()
const L = await box('padL'), R = await box('padR')
for (let i = 0; i < 24; i++) {
  const bx = i % 2 ? R : L, x = bx.x + bx.width / 2, y = bx.y + bx.height / 2
  await p.touchscreen.tap(x, y); await p.waitForTimeout(220)
  if (await p.evaluate(() => hk.G.state === 'wait')) await p.evaluate(() => { document.getElementById('bGo').click(); hk.G.countT = 3 })
}
const r = await p.evaluate(() => {
  const ev = window.__ev.filter(e => /pointer|touch|click/.test(e.n)).map(e => e.d).sort((a, b) => a - b)
  const fr = window.__fr.slice(5).sort((a, b) => a - b), q = (a, k) => a.length ? Math.round(a[Math.floor((a.length - 1) * k)]) : 0
  return { ev_n: ev.length, ev_p75: q(ev, 0.75), ev_max: q(ev, 1), fr_p50: q(fr, 0.5), fr_p90: q(fr, 0.9), lt_max: Math.round(Math.max(0, ...window.__lt)), pr: hk.pr ? hk.pr() : -1 }
})
console.log(JSON.stringify({ rate: RATE, bootMs, bootLT, bootTapMs: bootTaps, ...r, errs }))
await b.close(); server.kill()
