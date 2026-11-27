// 弱い描画（swiftshader）で、部品を1つずつ消して1コマの時間を比べる
import '../mute-auto.mjs'
import { chromium } from 'playwright'
import { spawn } from 'node:child_process'
const ROOT = new URL('..', import.meta.url).pathname, PORT = 5561
const server = spawn(process.execPath, ['server.mjs'], { cwd: ROOT, env: { ...process.env, PORT: String(PORT) } })
await new Promise(r => setTimeout(r, 700))
const b = await chromium.launch({ args: ['--mute-audio', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] })
const p = await (await b.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true, deviceScaleFactor: 3 })).newPage()
await p.goto(`http://localhost:${PORT}/`); await p.waitForFunction(() => window.__hkReady, null, { timeout: 120000 })
await p.evaluate(() => { hk.start(); hk.botOn({ delay: 0.2, every: 0.2, seed: 2 }) }); await p.waitForTimeout(3000)
const meas = () => p.evaluate(() => new Promise(res => setTimeout(() => { const a = []; let l = performance.now(); const f = n => { a.push(n - l); l = n; if (a.length < 70) requestAnimationFrame(f); else res(Math.round(a.slice(10).reduce((x, y) => x + y, 0) / 60)) }; requestAnimationFrame(f) }, 800)))
const run = async (name, on, off) => { await p.evaluate(on); const v = await meas(); await p.evaluate(off || '0'); console.log(name, v) }
const PR = v => `hk.renderer.setPixelRatio(${v}); dispatchEvent(new Event('resize'))`
for (const pr of [0.6]) {
  await p.evaluate(PR(pr)); console.log('--- pr', pr)
  await run('全部', '0')
  await run('床なし', 'hk.world.floor.visible=false', 'hk.world.floor.visible=true')
  await run('空なし', 'hk.world.dome.visible=false', 'hk.world.dome.visible=true')
  await run('灯りの点光源なし', 'window.__pl=[];hk.scene.traverse(o=>{if(o.isPointLight&&o.visible){o.visible=false;__pl.push(o)}})', '__pl.forEach(o=>o.visible=true)')
  await run('道より外の飾りなし', `window.__gr=[];hk.scene.children.forEach(o=>{if(o.isGroup&&o.visible&&o!==hk.world.track){o.visible=false;__gr.push(o)}})`, '__gr.forEach(o=>o.visible=true)')
  await run('点・光の玉なし', `window.__vis=[];hk.scene.traverse(o=>{if((o.isPoints||o.isSprite)&&o.visible){o.visible=false;__vis.push(o)}})`, '__vis.forEach(o=>o.visible=true)')
}
await p.evaluate(PR(0.75)); await run('pr0.75 全部', '0')
console.log(await p.evaluate(() => JSON.stringify(hk.renderer.info.render)))
await b.close(); server.kill()
