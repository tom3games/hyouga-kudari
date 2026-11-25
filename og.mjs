import './mute-auto.mjs'
import { chromium } from 'playwright'
import { spawn } from 'node:child_process'
const ROOT = import.meta.dirname, PORT = 5462
const server = spawn(process.execPath, ['server.mjs'], { cwd: ROOT, env: { ...process.env, PORT: String(PORT) } })
await new Promise(r => setTimeout(r, 500))
const b = await chromium.launch({ args: ['--mute-audio', '--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist'] })
const p = await (await b.newContext({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 })).newPage()
await p.goto(`http://localhost:${PORT}/`); await p.waitForFunction(() => window.__hkReady, null, { timeout: 30000 })
await p.evaluate(() => { hk.start(); hk.dbg.pause(true); hk.G.state = 'play'; const j = hk.jumps[1]; hk.teleport((j.from - 6) * 1.5, 21); hk.sim.fixSpeed = 21
  const s = hk.sim; let n = 0; while (n++ < 400) { hk.dbg.step(1, false); if (!s.ground && s.airT > 0.62 && s.mode === 'air') break } hk.sim.fixSpeed = null
  for (let i = 0; i < 3; i++) hk.dbg.step(0, true); hk.G.shake = 0; hk.dbg.step(0, true)
  document.getElementById('hud').hidden = true; document.getElementById('hWorld').classList.remove('on')
  const d = document.createElement('div'); d.style.cssText = 'position:fixed;inset:0;pointer-events:none;background:linear-gradient(90deg,rgba(7,20,32,.74),rgba(7,20,32,.35) 38%,rgba(7,20,32,0) 62%);z-index:40'
  d.innerHTML = `<div style="position:absolute;left:60px;top:44px;font:400 100px/1.08 'Hina Mincho','Hiragino Mincho ProN','Yu Mincho',serif;color:#eaf6ff;letter-spacing:.08em;writing-mode:vertical-rl;text-shadow:0 2px 30px rgba(7,20,32,.7)">氷河くだり</div>
  <div style="position:absolute;left:200px;top:56px;width:470px;font:400 25px/1.8 'Hina Mincho','Hiragino Mincho ProN',serif;letter-spacing:.12em;color:#eaf6ff;text-shadow:0 1px 14px rgba(7,20,32,.9)">空にかかる氷の道を、<br>桶の舟で滑り降りる。<br>跳んで、弾んで、次の世界へ。</div>
  <div style="position:absolute;left:200px;bottom:48px;border-bottom:4px solid #ff6a4d;padding:6px 0;font:400 18px 'Hiragino Sans',sans-serif;letter-spacing:.2em;color:#a9d4ee">ブラウザで遊べる3Dゲーム</div>`
  document.body.appendChild(d) })
await p.waitForTimeout(400)
await p.screenshot({ path: ROOT + '/og.png' })
await b.close(); server.kill()
