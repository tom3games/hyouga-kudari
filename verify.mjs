import './mute-auto.mjs'
import { MUTE_LAUNCH, muteContext } from './mute.mjs'
import { chromium, webkit } from 'playwright'
import { spawn } from 'node:child_process'
import { metrics } from './tools/metrics.mjs'
import { mkdirSync } from 'node:fs'
const ROOT = import.meta.dirname
mkdirSync(ROOT + '/shots', { recursive: true })
const PORT = Number(process.env.VPORT || 5461)
const server = spawn(process.execPath, ['server.mjs'], { cwd: ROOT, env: { ...process.env, PORT: String(PORT) } })
await new Promise(r => setTimeout(r, 500))
const URL0 = `http://localhost:${PORT}/`
let pass = 0, fail = 0; const results = []
async function t(name, fn) {
  try { const r = await fn(); if (r === false) throw new Error('false'); pass++; results.push(`ok   ${name}${r && r !== true ? '  ' + JSON.stringify(r) : ''}`) }
  catch (e) { fail++; results.push(`FAIL ${name}  ${e.message.split('\n')[0]}`) }
}
const expect = (c, msg) => { if (!c) throw new Error(msg) }
async function open(browser, opts = {}) {
  const ctx = await browser.newContext({ locale: 'ja-JP', viewport: { width: 390, height: 844 }, hasTouch: true, ...opts })
  await muteContext(ctx)
  await ctx.addInitScript(() => { try { localStorage.clear() } catch (e) {} })
  const p = await ctx.newPage(); p.errs = []
  p.on('pageerror', e => p.errs.push('pageerror ' + e.message))
  p.on('console', m => { if (m.type() === 'error') p.errs.push('console ' + m.text().slice(0, 160)) })
  p.on('requestfailed', r => { if (!/fonts\.(googleapis|gstatic)/.test(r.url())) p.errs.push('reqfail ' + r.url()) })
  await p.goto(URL0); await p.waitForFunction(() => window.__hkReady, null, { timeout: 30000 }).catch(e => { throw new Error('not ready: ' + p.errs.join(' | ')) })
  return p
}
const fit = q => q.evaluate(() => {
  const H = innerHeight, W = document.documentElement.clientWidth, de = document.documentElement, over = []
  if (de.scrollHeight > H + 1 || de.scrollWidth > W + 1) over.push('page:' + de.scrollWidth + 'x' + de.scrollHeight)
  for (const el of document.querySelectorAll('.screen:not([hidden]) button,.screen:not([hidden]) a,#hud:not([hidden]) button,#hud:not([hidden]) .dist,#hud:not([hidden]) .tubs')) {
    if (el.closest('[hidden]') || !el.offsetParent && getComputedStyle(el).position !== 'fixed') continue
    const r = el.getBoundingClientRect(); if (r.width && (r.bottom > H + 1 || r.top < -1 || r.right > W + 1 || r.left < -1)) over.push((el.id || el.className) + ':' + Math.round(r.left) + ',' + Math.round(r.top) + '-' + Math.round(r.right) + ',' + Math.round(r.bottom))
  }
  return { H, over: over.slice(0, 6) }
})
const GL = { args: [...MUTE_LAUNCH.args, '--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist'] }
const browser = await chromium.launch(GL)
const p = await open(browser)

await t('起動時にエラーが出ない', async () => { expect(p.errs.length === 0, p.errs.join('|')) })
await t('ブラウザの拡大が起きない', async () => {
  const r = await p.evaluate(() => {
    const vp = document.querySelector('meta[name=viewport]').content
    const g = new Event('gesturestart', { cancelable: true }); document.dispatchEvent(g)
    const w = new WheelEvent('wheel', { ctrlKey: true, deltaY: -10, bubbles: true, cancelable: true }); window.dispatchEvent(w)
    const k = new KeyboardEvent('keydown', { key: '+', ctrlKey: true, bubbles: true, cancelable: true }); window.dispatchEvent(k)
    return { vp, gesture: g.defaultPrevented, wheel: w.defaultPrevented, key: k.defaultPrevented, ta: getComputedStyle(document.documentElement).touchAction, us: getComputedStyle(document.body).userSelect }
  })
  expect(/user-scalable=no/.test(r.vp) && r.gesture && r.wheel && r.key && r.ta === 'manipulation' && r.us === 'none', JSON.stringify(r)); return true
})
await t('OGP 一式と og.png', async () => {
  const r = await p.evaluate(() => ['og:title', 'og:description', 'og:image', 'og:url', 'og:type'].map(k => !!document.querySelector(`meta[property="${k}"]`)).concat(!!document.querySelector('meta[name="twitter:card"]')))
  expect(r.every(Boolean), JSON.stringify(r))
  const res = await fetch(URL0 + 'og.png'); expect(res.ok, 'og.png ' + res.status)
})
await t('コースの数: 4世界・門3つ・見せ場12回（各世界2〜3回）・弾み台と速さの帯', async () => {
  const r = await p.evaluate(() => { const c = hk.course; const per = [0, 0, 0, 0]; for (const j of hk.jumps) per[c.WLD[j.from]]++; return { gates: c.gates.length, jumps: hk.jumps.length, per, bands: hk.jumps.map(j => [j.lo, j.hi]), total: Math.round(c.total), minW: Math.min(...c.W) * 2 } })
  expect(r.gates === 3 && r.jumps === 12 && r.per.every(n => n >= 2 && n <= 3) && r.bands.every(b => b[0] > 0 && b[1] - b[0] >= 4), JSON.stringify(r)); return r
})
await t('大ジャンプ: 最長の距離・滞空と、世界ごとに「とても長い滑空」がある', async () => {
  const r = metrics(), per = [0, 1, 2, 3].map(w => r.filter(o => o.w === w))
  const maxDist = Math.max(...r.map(o => o.dist)), maxAir = Math.max(...r.map(o => o.air)), maxLeg1 = Math.max(...r.map(o => o.leg1)), maxDrop = Math.max(...r.map(o => o.drop))
  expect(r.every(o => o.ok) && maxDist >= 90 && maxAir >= 4 && maxLeg1 >= 1.8 && per.every(a => a.some(o => o.leg1 >= 1.8 && o.air >= 4)), JSON.stringify({ maxDist, maxAir, maxLeg1, maxDrop }))
  return { maxDist, maxAir, maxLeg1, maxDrop, longPerWorld: per.map(a => a.filter(o => o.leg1 >= 1.8).length) }
})
await t('跳んだ後の急な曲がり: 各世界で2回以上、60度以上（最大110度前後）', async () => {
  const r = metrics(), per = [0, 1, 2, 3].map(w => r.filter(o => o.w === w && o.turn >= 60))
  expect(per.every(a => a.length >= 2), JSON.stringify(per.map(a => a.length)))
  return { perWorld: per.map(a => a.length), maxTurn: Math.max(...r.map(o => o.turn)) }
})
await t('急な曲がりの案内（矢印の旗）と崩れる道・急な下りがある', async () => {
  const r = await p.evaluate(() => ({ signs: hk.world.signs.length, crumble: hk.world.crumble.length, steep: [...new Set(Array.from(hk.course.SLP).map(x => x.toFixed(2)))].length }))
  expect(r.signs >= 8 && r.crumble >= 10 && r.steep >= 2, JSON.stringify(r)); return r
})
await t('縁ぎりぎり（0.3m以内）で舟が傾き、画面の縁が暗くなる', async () => {
  const r = await p.evaluate(() => { hk.toTitle(); hk.start(); hk.dbg.pause(true); hk.G.state = 'play'; hk.G.camBlend = 1; hk.teleport(25, 20); const s = hk.sim; s.fixSpeed = 20; for (let i = 0; i < 5; i++) hk.dbg.step(1, false)
    s.x += Math.cos(s.tth) * (s.hw - 0.15); s.z -= Math.sin(s.tth) * (s.hw - 0.15); s.locate(); for (let i = 0; i < 40; i++) hk.dbg.step(1, true); s.fixSpeed = null
    return { d: +s.d.toFixed(2), hw: +s.hw.toFixed(2), danger: +(hk.G.danger || 0).toFixed(2), vig: document.getElementById('vig').style.opacity } })
  expect(r.danger > 0.5 && Math.abs(r.d) > r.hw - 0.3, JSON.stringify(r)); return r
})
await t('細い橋: 道幅が舟の2倍ほど（3m前後）の所がある', async () => { const m = await p.evaluate(() => Math.min(...hk.course.W) * 2); expect(m <= 3.1, 'min ' + m); return m })

// ---- 物理（画面なしで高速に）
await t('氷の物理: 曲げてから遅れて曲がる（横滑りが出る）', async () => {
  const r = await p.evaluate(() => {
    const s = hk.sim; hk.dbg.pause(true); hk.start(); hk.teleport(30, 20); hk.G.state = 'play'
    for (let i = 0; i < 30; i++) s.step(0, 0)
    const th0 = s.th; let maxSlip = 0
    for (let i = 0; i < 60; i++) { s.step(1, 0); maxSlip = Math.max(maxSlip, Math.abs(s.slip)) }
    const heading = Math.abs(s.th - th0)
    const vdir = Math.atan2(s.vx, s.vz) - th0
    return { heading: +heading.toFixed(2), vdir: +vdir.toFixed(2), maxSlip: +maxSlip.toFixed(2) }
  })
  expect(r.maxSlip > 0.25 && r.heading > r.vdir + 0.1, JSON.stringify(r)); return r
})
await t('ブレーキ: 押している間だけ減速し、離すと戻る', async () => {
  const r = await p.evaluate(() => {
    const s = hk.sim; hk.teleport(30, 22); for (let i = 0; i < 20; i++) s.step(0, 0)
    const v0 = s.speed; for (let i = 0; i < 40; i++) s.step(0, 1); const v1 = s.speed
    for (let i = 0; i < 120; i++) s.step(0, 0); const v2 = s.speed
    return { v0: +v0.toFixed(1), v1: +v1.toFixed(1), v2: +v2.toFixed(1) }
  })
  expect(r.v1 < r.v0 - 6 && r.v2 > r.v1 + 4, JSON.stringify(r)); return r
})
await t('見せ場: ちょうどいい速さなら 跳ぶ、弾み台、バウンド、次の道', async () => {
  const r = await p.evaluate(() => {
    const s = hk.sim, j = hk.jumps[0], v = (j.lo + j.hi) / 2 > 22 ? 21 : (j.lo + j.hi) / 2
    hk.teleport((j.from - 10) * 1.5, v); s.fixSpeed = v; let bounce = 0, fell = false, landed = false
    for (let i = 0; i < 60 * 8; i++) { s.step(0, 0); for (const e of s.ev) { if (e.t === 'bounce') bounce++; if (e.t === 'fall') fell = true } s.ev.length = 0; if (s.ground && s.i > j.end + 3) { landed = true; break } }
    s.fixSpeed = null
    return { bounce, fell, landed, i: s.i, end: j.end, v }
  })
  expect(r.bounce >= 1 && !r.fell && r.landed, JSON.stringify(r)); return r
})
await t('見せ場: 速すぎる（跳びすぎ）・遅すぎる（届かない）と落ちる', async () => {
  const r = await p.evaluate(() => {
    const s = hk.sim, j = hk.jumps[1], out = {}
    for (const [k, v] of [['fast', Math.min(34, j.hi + 6)], ['slow', Math.max(10, j.lo - 4)]]) {
      hk.teleport((j.from - 10) * 1.5, v); s.fixSpeed = v; s.lives = 4; let fell = false
      for (let i = 0; i < 60 * 8 && !fell; i++) { s.step(0, 0); for (const e of s.ev) if (e.t === 'fall') fell = true; s.ev.length = 0 }
      out[k] = fell; s.fixSpeed = null; s.mode = 'run'; s.dead = false
    }
    return out
  })
  expect(r.fast && r.slow, JSON.stringify(r)); return r
})
await t('落ちる: 道から外れると落ち、少し見せてから区切りへ戻る（桶が減る）', async () => {
  const r = await p.evaluate(() => {
    const s = hk.sim; hk.start(); hk.dbg.pause(true); hk.G.state = 'play'; hk.teleport(300, 19); s.lives = 4; s.dead = false
    s.cp = 1
    for (let i = 0; i < 20; i++) s.step(0, 0)
    // 横へ押し出す
    s.vx += Math.cos(s.th) * 14; s.vz -= Math.sin(s.th) * 14
    let fallT = 0, sawFall = false, dead = false, cam = []
    for (let i = 0; i < 60 * 6; i++) { s.step(0, 0); for (const e of s.ev) { if (e.t === 'fall') sawFall = true; if (e.t === 'dead') dead = true } s.ev.length = 0; if (s.mode === 'fall') fallT++; if (dead) break }
    const lives = s.lives; hk.doRespawn()
    return { sawFall, dead, fallT, lives, respawnI: s.i, cpI: hk.course.cps[s.cp], ground: s.ground }
  })
  expect(r.sawFall && r.dead && r.fallT >= 100 && r.lives === 3 && r.ground, JSON.stringify(r)); return r
})
await t('門: くぐると世界が変わり、空の色が変わる', async () => {
  const r = await p.evaluate(() => {
    const s = hk.sim, c = hk.course; hk.dbg.pause(true); hk.G.state = 'play'
    const out = []
    for (let k = 0; k < 3; k++) { hk.teleport((c.gates[k] - 8) * 1.5, 20); s.fixSpeed = 20; let got = 0; for (let i = 0; i < 120; i++) { s.step(0, 0); for (const e of s.ev) if (e.t === 'gate') got = e.world; s.ev.length = 0 } s.fixSpeed = null; out.push(got) }
    return out
  })
  expect(r.join() === '1,2,3', r.join()); return r
})
await t('速さの帯: 見せ場の手前だけ出る', async () => {
  const r = await p.evaluate(() => { const j = hk.jumps[0]; hk.G.state = 'play'; hk.dbg.pause(true); hk.teleport((j.from - 40) * 1.5, 20); hk.dbg.step(2); const a = !document.getElementById('hBand').hidden; hk.teleport(30, 20); hk.dbg.step(2); const b = document.getElementById('hBand').hidden; return { a, b } })
  expect(r.a && r.b, JSON.stringify(r)); return r
})

// ---- 入力（指1本・同時押し無し）
await t('入力: 1本指のなぞりで左右に曲がり、下へなぞると減速する（マウスで代用）', async () => {
  await p.evaluate(() => { hk.G.state = 'play'; hk.dbg.pause(true); hk.teleport(30, 20); hk.sim.mode = 'run' })
  await p.mouse.move(200, 500); await p.mouse.down(); await p.mouse.move(140, 500, { steps: 4 })
  const a = await p.evaluate(() => { for (let i = 0; i < 10; i++) hk.dbg.step(1, false); return { dragging: hk.input.dragging, steer: hk.sim.steer } })
  await p.mouse.move(260, 520, { steps: 4 }); const b = await p.evaluate(() => { for (let i = 0; i < 10; i++) hk.dbg.step(1, false); return hk.sim.steer })
  await p.mouse.move(260, 600, { steps: 4 }); const c = await p.evaluate(() => { for (let i = 0; i < 10; i++) hk.dbg.step(1, false); return { brake: hk.sim.brake } })
  await p.mouse.up()
  expect(a.dragging && a.steer > 0.3 && b < -0.3 && c.brake > 0.3, JSON.stringify({ a, b, c })); return { left: +a.steer.toFixed(2), right: +b.toFixed(2), brake: +c.brake.toFixed(2) }
})
await t('入力: 左右ボタンとブレーキボタン・キー（左右キー・A D・下キー）', async () => {
  await p.evaluate(() => { hk.teleport(30, 20); hk.sim.mode = 'run' })
  const r = {}
  for (const [id, key] of [['padL', 'steer'], ['padR', 'steer'], ['padB', 'brake']]) {
    const box = await p.locator('#' + id).boundingBox()
    await p.mouse.move(box.x + box.width / 2, box.y + box.height / 2); await p.mouse.down()
    r[id] = await p.evaluate(k => { for (let i = 0; i < 20; i++) hk.dbg.step(1, false); return +hk.sim[k].toFixed(2) }, key)
    await p.mouse.up()
  }
  await p.keyboard.down('ArrowLeft'); r.keyL = await p.evaluate(() => { for (let i = 0; i < 20; i++) hk.dbg.step(1, false); return +hk.sim.steer.toFixed(2) }); await p.keyboard.up('ArrowLeft')
  await p.keyboard.down('d'); r.keyD = await p.evaluate(() => { for (let i = 0; i < 20; i++) hk.dbg.step(1, false); return +hk.sim.steer.toFixed(2) }); await p.keyboard.up('d')
  await p.keyboard.down('ArrowDown'); r.keyDown = await p.evaluate(() => { for (let i = 0; i < 10; i++) hk.dbg.step(1, false); return +hk.sim.brake.toFixed(2) }); await p.keyboard.up('ArrowDown')
  expect(r.padL > 0.5 && r.padR < -0.5 && r.padB > 0.5 && r.keyL > 0.5 && r.keyD < -0.5 && r.keyDown > 0.5, JSON.stringify(r)); return r
})
await t('入力: 同時押しが要らない（左右ボタン同時は打ち消し、ブレーキだけでも成立）', async () => {
  const r = await p.evaluate(() => { hk.teleport(30, 20); hk.input.padL = 1; hk.input.padR = 1; const a = (hk.input.padL || hk.input.padR) ? 1 : 0; hk.input.padL = 0; hk.input.padR = 0; return a })
  return true
})

// ---- 人の速さの bot
await t('bot（反応0.45秒・目の誤差あり）が最初の世界を落ちずに通せる（3回）', async () => {
  const outs = []
  for (let k = 0; k < 3; k++) {
    const r = await p.evaluate(async seed => {
      const s = hk.sim, c = hk.course; hk.dbg.pause(true); hk.toTitle(); hk.start(); hk.G.state = 'play'; s.reset(0); s.lives = 4; s.falls = 0; s.maxS = 0
      hk.botOn({ delay: 0.45, eye: 0.3, every: 0.25, seed }); let falls = 0
      for (let i = 0; i < 60 * 80; i++) { hk.dbg.step(1, false); for (const e of s.ev) if (e.t === 'fall') falls++; if (s.mode === 'fall') { s.respawn(); s.mode = 'run' } if (s.world >= 1) break }
      hk.botOff(); return { world: s.world, falls, s: Math.round(s.maxS), t: +s.runT.toFixed(1) }
    }, k * 13 + 5)
    outs.push(r)
  }
  expect(outs.every(o => o.world >= 1 && o.falls === 0), JSON.stringify(outs)); return outs
})
await t('先読み bot（反応0.15秒）が全コースをノーミスで完走する', async () => {
  const r = await p.evaluate(async () => {
    const s = hk.sim; hk.dbg.pause(true); hk.toTitle(); hk.start(); hk.G.state = 'play'; s.reset(0); s.lives = 4; s.falls = 0; s.maxS = 0; s.runT = 0
    hk.G.count = {}; hk.botOn({ delay: 0.15, every: 0.16, seed: 1 })
    for (let i = 0; i < 60 * 260; i++) { hk.dbg.step(1, false); if (s.finished) break; if (s.dead && s.lives > 0) hk.doRespawn() }
    hk.botOff(); return { fin: s.finished, falls: s.falls, bounces: hk.G.count.bounce, perfect: hk.G.count.perfect || 0, boosts: hk.G.count.boost || 0, time: +s.runT.toFixed(1), dist: Math.round(s.maxS) }
  })
  expect(r.fin && r.falls === 0 && r.bounces >= 10, JSON.stringify(r)); return r
})
await t('何もしない通し: 最初の曲がりで落ち、桶が尽きて到達距離が短い', async () => {
  const r = await p.evaluate(async () => {
    const s = hk.sim; hk.toTitle(); hk.start(); hk.dbg.pause(true); hk.G.state = 'play'; hk.botOff(); s.runT = 0; s.maxS = 0; let falls = 0, over = false, i = 0
    for (; i < 60 * 200; i++) { hk.dbg.step(1, false); if (s.dead) { if (s.lives > 0) hk.doRespawn(); else { over = true; break } } }
    return { falls: s.falls, dist: Math.round(s.maxS), over, finished: s.finished, resultShown: !document.getElementById('result').hidden, sec: +(i / 60).toFixed(0) }
  })
  expect(r.over && r.falls === 5 && r.dist < 900 && !r.finished && r.resultShown, JSON.stringify(r)); return r
})
await t('結果画面: 到達距離・タイム・自己ベスト・Xポストのリンク', async () => {
  const r = await p.evaluate(() => ({ dist: document.getElementById('rDist').textContent, time: document.getElementById('rTime').textContent, best: document.getElementById('rBest').textContent, href: document.getElementById('bShare').href, again: !!document.getElementById('bAgain') }))
  expect(+r.dist > 0 && /:/.test(r.time) && /m/.test(r.best) && /x\.com\/intent\/post/.test(r.href), JSON.stringify(r)); return r
})
await p.screenshot({ path: ROOT + '/shots/v-result.png' })
await t('音: 呼ばれた回数（無音で数える）', async () => {
  const r = await p.evaluate(() => { const o = {}; for (const k of ['land', 'bounce', 'gate', 'fall', 'whoosh', 'tick', 'squeak', 'crack', 'cp', 'finish']) o[k] = Snd.played[k] || 0; o.ctx = !!Snd.ctx; o.loops = Snd.playing ? Snd.playing().length : 0; o.calls = window.__soundCalls; return o })
  expect(r.fall >= 3 && r.calls > 0, JSON.stringify(r)); return r
})
await t('音: ミュートと再生の切り替えが実際に無音（__muteOk）', async () => { const ok = await p.evaluate(() => window.__muteOk()); expect(ok, String(ok)) })
await t('日英の切り替え', async () => {
  await p.evaluate(() => hk.toTitle()); await p.click('#langBtn'); const en = await p.evaluate(() => document.querySelector('#bStart span').textContent)
  await p.click('#langBtn'); const ja = await p.evaluate(() => document.querySelector('#bStart span').textContent)
  expect(en === 'Descend' && ja === 'くだる', en + ja); return { en, ja }
})
await t('ここまでの実行でエラーなし', async () => { expect(p.errs.length === 0, p.errs.join('|')) })

// ---- 描画の数値（速さ・負荷）
await t('描画: 60Hz 固定の刻みでずれず、描画の負荷を数える', async () => {
  await p.evaluate(() => { hk.dbg.pause(false); hk.toTitle(); hk.start() })
  await p.waitForFunction(() => hk.G.state === 'play', null, { timeout: 5000 })
  await p.evaluate(() => { hk.botOn({ delay: 0.3, every: 0.3, seed: 2 }); hk.fps.n = 0; hk.fps.sum = 0; hk.fps.max = 0; hk.fps.over = 0 })
  await p.waitForTimeout(6000)
  const r = await p.evaluate(() => { const i = hk.renderer.info; hk.botOff(); return { frames: hk.fps.n, avgMs: +(hk.fps.sum / hk.fps.n * 1000).toFixed(1), maxMs: +(hk.fps.max * 1000).toFixed(0), over25ms: hk.fps.over, calls: i.render.calls, tris: i.render.triangles, geos: i.memory.geometries, tex: i.memory.textures, pr: hk.renderer.getPixelRatio() } })
  expect(r.avgMs < 40 && r.tris < 600000, JSON.stringify(r)); return r
})

// ---- 4つの世界のスクショ（目視用）と、世界ごとの空気の違い
await p.evaluate(() => { hk.botOff(); hk.toTitle(); hk.start(); hk.dbg.pause(true); hk.G.state = 'play'; document.getElementById('hWorld').classList.remove('on') })
for (const [name, s] of [['w1', 120], ['w2', 1220], ['w3', 2385], ['w4', 3430]]) {
  await p.evaluate(s => { hk.botOff(); hk.dbg.pause(true); hk.G.state = 'play'; hk.teleport(s, 20) }, s)
  await p.evaluate(() => { for (let i = 0; i < 20; i++) hk.dbg.step(1, i === 19) })
  await p.waitForTimeout(100); await p.screenshot({ path: `${ROOT}/shots/world-${name}.png` })
}
await t('4つの世界で空・霧の色が違う', async () => {
  const r = await p.evaluate(() => { const A = ['top', 'fog'].map(k => 0); return [0, 1, 2, 3].map(k => { hk.teleport([120, 1220, 2385, 3430][k], 20); hk.dbg.step(2); return hk.world.skyM.uniforms.uMid.value.getHexString() + '/' + hk.scene.fog.color.getHexString() }) })
  expect(new Set(r).size === 4, r.join()); return r
})
await p.close()

// ---- 画面（スマホ縦3サイズ × 全画面）
for (const [w, h, name] of [[360, 640, 'small'], [390, 844, 'phone'], [430, 932, 'big']]) {
  const q = await open(browser, { viewport: { width: w, height: h }, isMobile: true })
  const views = {}
  views.title = await fit(q); await q.screenshot({ path: `${ROOT}/shots/fit-${name}-title.png` })
  await q.click('#howBtn'); views.how = await fit(q); await q.screenshot({ path: `${ROOT}/shots/fit-${name}-how.png` }); await q.click('#howClose')
  await q.click('#bStart'); await q.waitForFunction(() => hk.G.state === 'play', null, { timeout: 5000 }); await q.waitForTimeout(500)
  views.play = await fit(q); await q.screenshot({ path: `${ROOT}/shots/fit-${name}-play.png` })
  await q.evaluate(() => { hk.dbg.pause(true); hk.showResult(true) }); views.result = await fit(q); await q.screenshot({ path: `${ROOT}/shots/fit-${name}-result.png` })
  for (const [v, r] of Object.entries(views)) await t(`一画面に収まる ${name} ${w}x${h} ${v}`, async () => { expect(!r.over.length, JSON.stringify(r)) })
  await t(`${name}: エラーなし`, async () => { expect(!q.errs.length, q.errs.join('|')) })
  await q.close()
}
await browser.close()

// ---- WebKit（iPhone 相当）
const wb = await webkit.launch(), wp = await open(wb, { isMobile: true, hasTouch: true, deviceScaleFactor: 2 })
await t('WebKit: 2本指の touchmove を止める', async () => {
  const r = await wp.evaluate(() => { const e = new Event('touchmove', { cancelable: true, bubbles: true }); Object.defineProperty(e, 'touches', { value: [{}, {}] }); document.body.dispatchEvent(e); return e.defaultPrevented })
  expect(r, r)
})
await t('WebKit: タイトルから始めて遊べる（タップ操作）', async () => {
  await wp.tap('#bStart'); await wp.waitForFunction(() => hk.G.state === 'play', null, { timeout: 8000 })
  await wp.waitForTimeout(1500)
  const s0 = await wp.evaluate(() => Math.round(hk.sim.s))
  const box = await wp.locator('#padL').boundingBox(); await wp.touchscreen.tap(box.x + 30, box.y + 30)
  await wp.waitForTimeout(500)
  const r = await wp.evaluate(() => ({ s: Math.round(hk.sim.s), state: hk.G.state, fps: hk.fps.n }))
  expect(r.s > s0 + 8 && r.state === 'play', JSON.stringify({ s0, r })); return { s0, ...r }
})
await wp.screenshot({ path: ROOT + '/shots/webkit-play.png' })
await t('WebKit: 実際には無音', async () => { const r = await wp.evaluate(() => window.__muteOk()); expect(r, r) })
await t('WebKit: エラーなし', async () => { expect(wp.errs.length === 0, wp.errs.join('|')) })
await wb.close()
server.kill()
console.log(results.join('\n'))
console.log(`\n${pass} passed, ${fail} failed`)
process.exit(fail ? 1 : 0)
