import '../mute-auto.mjs'
import { chromium } from 'playwright'
const b = await chromium.launch({ args: ['--mute-audio','--use-angle=metal','--enable-gpu','--ignore-gpu-blocklist'] })
const ctx = await b.newContext({ locale: 'ja-JP', viewport: { width: 390, height: 844 }, hasTouch: true })
const p = await ctx.newPage()
p.on('console', m => console.log('console', m.type(), m.text().slice(0,200))); p.on('pageerror', e => console.log('pageerror', e.message))
await p.goto('http://localhost:5414/'); await p.waitForTimeout(6000)
console.log(await p.evaluate(() => [typeof window.hk, window.__hkReady, document.getElementById('loading').hidden]))
await b.close()
