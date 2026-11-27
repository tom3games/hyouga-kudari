// 人の指で通す: タップで始める → 操作せず落ちる → 「つづける」が出て止まる → タップで再開 … 桶が尽きたら結果 → もういちど
import '../mute-auto.mjs'
import { MUTE_LAUNCH, muteContext } from '../mute.mjs'
import { chromium, webkit } from 'playwright'
import { spawn } from 'node:child_process'
const ROOT = new URL('..', import.meta.url).pathname
const PORT = Number(process.env.VPORT || 5601)
const server = spawn(process.execPath, ['server.mjs'], { cwd: ROOT, env: { ...process.env, PORT: String(PORT) } })
await new Promise(r => setTimeout(r, 700))
const NG = []
const ok = (c, m) => { console.log((c ? 'OK ' : 'NG ') + m); if (!c) NG.push(m) }
for (const [name, bt] of [['chromium', chromium], ['webkit', webkit]]) {
  const b = await bt.launch(name === 'chromium' ? { args: [...MUTE_LAUNCH.args, '--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist'] } : {})
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, isMobile: name === 'webkit', hasTouch: true, deviceScaleFactor: 2 })
  await muteContext(ctx)
  const p = await ctx.newPage(); const errs = []
  p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()) })
  await p.goto(`http://localhost:${PORT}/`); await p.waitForFunction(() => window.__hkReady, null, { timeout: 30000 })
  await p.tap('#bStart')
  const st = () => p.evaluate(() => ({ s: hk.G.state, lives: hk.sim.lives, falls: hk.sim.falls, t: hk.sim.runT, mode: hk.sim.mode, dead: hk.sim.dead, go: !document.getElementById('bGo').hidden, res: !document.getElementById('result').hidden }))
  let shot = false
  for (let k = 0; k < 6; k++) {
    await p.waitForFunction(() => hk.G.state === 'wait' || hk.G.state === 'result', null, { timeout: 60000 })
    const a = await st()
    if (a.s === 'result') { ok(a.res && a.lives <= 0, `${name} 桶が尽きて結果 falls=${a.falls}`); break }
    ok(!a.go, `${name} ${k + 1}回目: 落ちている間はボタンが出ない`)
    await p.waitForFunction(() => !document.getElementById('bGo').hidden, null, { timeout: 5000 })
    await p.waitForTimeout(1200)
    const b2 = await st()
    ok(b2.s === 'wait' && b2.go && b2.t === a.t && b2.mode === 'run' && !b2.dead, `${name} ${k + 1}回目: コースの上に戻ってからボタン（mode=${b2.mode}・時間 ${a.t.toFixed(1)}→${b2.t.toFixed(1)}）`)
    if (!shot) { await p.screenshot({ path: ROOT + `shots/wait-${name}.png` }) }
    const pos0 = await p.evaluate(() => hk.sim.s)
    await p.tap('#bGo')
    await p.waitForTimeout(400)
    const c1 = await st(); const cnt = await p.evaluate(() => document.getElementById('hCount').textContent)
    if (!shot) { await p.screenshot({ path: ROOT + `shots/count-${name}.png` }); shot = true }
    await p.waitForTimeout(1800)
    const c2 = await st(); const pos1 = await p.evaluate(() => hk.sim.s)
    ok(c1.s === 'count' && cnt === '3' && c2.s === 'count' && pos1 === pos0 && c2.t === b2.t, `${name} タップで 3 から数え、その間は止まる（${cnt}・s ${pos0.toFixed(1)}→${pos1.toFixed(1)}）`)
    await p.waitForTimeout(1300)
    const c = await st(); const pos2 = await p.evaluate(() => hk.sim.s)
    ok(c.s === 'play' && !c.go && c.mode !== 'fall' && pos2 > pos0, `${name} 数え終わって進み始める mode=${c.mode} s ${pos0.toFixed(1)}→${pos2.toFixed(1)}`)
  }
  await p.tap('#bAgain'); await p.waitForTimeout(1500)
  const d = await st(); ok((d.s === 'play' || d.s === 'ready') && d.lives === 5 && !d.go, `${name} もういちどで最初から lives=${d.lives}`)
  // キーボードでも再開できる
  await p.waitForFunction(() => hk.G.state === 'wait' && !document.getElementById('bGo').hidden, null, { timeout: 60000 }); await p.keyboard.press('Space'); await p.waitForTimeout(3400)
  ok((await st()).s === 'play', `${name} スペースでも数えてから再開`)
  ok(errs.length === 0, `${name} エラー無し ${errs.join('|')}`)
  await b.close()
}
server.kill()
console.log(NG.length ? `NG ${NG.length}件` : 'NG 0件')
process.exit(NG.length ? 1 : 0)
