import '../mute-auto.mjs'
import { chromium } from 'playwright'
import { spawn } from 'node:child_process'
const ROOT = new URL('..', import.meta.url).pathname
const server = spawn(process.execPath, ['server.mjs'], { cwd: ROOT, env: { ...process.env, PORT: '5599' } })
await new Promise(r => setTimeout(r, 500))
const b = await chromium.launch({ args: ['--mute-audio', '--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist'] })
const p = await (await b.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true, locale: 'ja-JP' })).newPage()
await p.goto('http://localhost:5599/'); await p.waitForFunction(() => window.__hkReady)
const J = +(process.argv[2] || 1), N = +(process.argv[3] || 8)
await p.evaluate(j => { hk.start(); hk.dbg.pause(true); hk.G.state = 'play'; hk.G.camBlend = 1; const jj = hk.jumps[j]; hk.teleport((jj.from - 17) * 1.5, 20); hk.sim.fixSpeed = 20; document.getElementById('hWorld').classList.remove('on') }, J)
const frames = [0, 44, 30, 22, 22, 22, 26, 34]
for (let k = 0; k < N; k++) { await p.evaluate(n => { for (let i = 0; i < n; i++) hk.dbg.step(1, i > n - 30) ; if (n === 0) for (let i = 0; i < 40; i++) hk.dbg.step(0, true) }, frames[k]); await p.waitForTimeout(80); await p.screenshot({ path: `${ROOT}shots/jj${k}.png` }) }
console.log(JSON.stringify(await p.evaluate(() => ({ cnt: hk.G.count, fell: hk.sim.mode, i: hk.sim.i }))))
await b.close(); server.kill()
