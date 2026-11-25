import '../mute-auto.mjs'
import { chromium } from 'playwright'
import { spawn } from 'node:child_process'
const ROOT = new URL('..', import.meta.url).pathname
const PORT = 5412
const server = spawn(process.execPath, ['server.mjs'], { cwd: ROOT, env: { ...process.env, PORT: String(PORT) } })
await new Promise(r => setTimeout(r, 500))
const [out, ...cmds] = process.argv.slice(2)   // 例: out.png "tp:100:20" "w:60" "shot:name"
const b = await chromium.launch({ args: ['--mute-audio', '--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist'] })
const W = +(process.env.W || 390), H = +(process.env.H || 844)
const ctx = await b.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: 1, hasTouch: true, isMobile: true, locale: 'ja-JP' })
const p = await ctx.newPage(); const errs = []
p.on('pageerror', e => errs.push('pageerror ' + e.message)); p.on('console', m => { if (m.type() === 'error' || m.type() === 'warning') errs.push(m.type() + ' ' + m.text().slice(0, 200)) })
await p.goto(`http://localhost:${PORT}/`); await p.waitForFunction(() => window.__hkReady, null, { timeout: 30000 }).catch(async e => { console.log('NOT READY', errs.join('\n')); await b.close(); server.kill(); process.exit(1) })
for (const c of cmds) {
  const [k, a, bb] = c.split(':')
  if (k === 'tp') await p.evaluate(([s, v]) => { hk.teleport(+s, +v) }, [a, bb])
  else if (k === 'start') await p.evaluate(() => { hk.start() })
  else if (k === 'bot') await p.evaluate(d => { hk.botOn({ delay: +d, seed: 3 }) }, a)
  else if (k === 'w') await p.waitForTimeout(+a)
  else if (k === 'step') await p.evaluate(n => { hk.dbg.pause(true); hk.dbg.step(+n) }, a)
  else if (k === 'shot') await p.screenshot({ path: `${ROOT}shots/${a}.png` })
  else if (k === 'eval') await p.evaluate(a)
}
console.log('errs', errs.slice(0, 8).join('\n') || 'none')
await b.close(); server.kill()
