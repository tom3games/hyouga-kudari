import '../mute-auto.mjs'
import { chromium } from 'playwright'
import { spawn } from 'node:child_process'
const ROOT = new URL('..', import.meta.url).pathname
const server = spawn(process.execPath, ['server.mjs'], { cwd: ROOT, env: { ...process.env, PORT: '5413' } })
await new Promise(r => setTimeout(r, 500))
const b = await chromium.launch({ args: ['--mute-audio', '--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist'] })
const p = await (await b.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true })).newPage()
p.on('pageerror', e => console.log('pageerror', e.message))
await p.goto('http://localhost:5413/'); await p.waitForFunction(() => window.__hkReady, null, { timeout: 30000 })
console.log(JSON.stringify(await p.evaluate(process.argv[2])))
await b.close(); server.kill()
