import * as THREE from 'three'
import { buildCourse, DS } from './course.js'
import { makeSim, computeJumps, P, DT } from './sim.js'
import { makeBot } from './bot.js'
import { createWorld, ATM, lerpAtm } from './world.js'
import { createBoat } from './boat.js'
import { createFx } from './fx.js'

const $ = id => document.getElementById(id)
const isTouch = matchMedia('(pointer: coarse)').matches
const low = isTouch && Math.min(screen.width, screen.height) < 900
let lang = (() => { try { return localStorage.getItem('hk_lang') || (/^ja/.test(navigator.language) ? 'ja' : 'en') } catch (e) { return 'ja' } })()
const T = k => (window.TXT[lang][k] ?? k)
const store = { get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v) } catch (e) { return d } }, set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)) } catch (e) {} } }

// ------------------------------------------------------------ 言語
function applyLang() {
  document.documentElement.lang = lang
  document.querySelectorAll('[data-t]').forEach(el => { el.textContent = T(el.dataset.t) })
  $('langBtn').textContent = lang === 'ja' ? 'English' : '日本語'
  $('muteBtn').textContent = Snd.muted ? T('sound_off') : T('sound_on')
  const b = store.get('hk_best', null); $('bestTxt').textContent = b ? `${T('best')} ${Math.round(b.dist)}m` : ''
  document.title = lang === 'ja' ? '氷河くだり｜空の氷の道を滑る3Dドリフトゲーム' : 'Glacier Descent | A 3D ice-drifting game'
}

// ------------------------------------------------------------ 音
Snd.def({
  land: ['snd/land1.mp3', 'snd/land2.mp3'], bounce: ['snd/bounce1.mp3', 'snd/bounce2.mp3'], tick: ['snd/ice_tick1.mp3', 'snd/ice_tick2.mp3'], crack: 'snd/ice_crack.mp3',
  gate: 'snd/gate.mp3', finish: 'snd/finish.mp3', cp: 'snd/cp.mp3', whoosh: 'snd/whoosh.mp3', fall: 'snd/fall_ahhh.mp3', squeak: 'snd/squeak.mp3',
})
const AMB = [null, ['snd/fire.mp3', 0.22], ['snd/cave.mp3', 0.5], ['snd/chime.mp3', 0.4]]
function setVol(slot, v) { const l = Snd.loops[slot]; if (!l) return; l.vol = v; if (l.g && Snd.ctx) l.g.gain.setTargetAtTime(Math.max(0.0001, v), Snd.ctx.currentTime, 0.12) }
let soundOn = false
function startAudio() {
  Snd.init(); if (soundOn) return; soundOn = true
  Snd.loop('wind', 'snd/wind.wav', 0.0001, 0.2); Snd.loop('slide', 'snd/slide.wav', 0.0001, 0.2)
  setAmb(sim.world)
}
function setAmb(w) { const a = AMB[w]; Snd.loop('amb', a ? a[0] : null, a ? a[1] : 0, 1.2); if (w === 2) Snd.loop('amb2', 'snd/drip.mp3', 0.08, 1.2); else Snd.loop('amb2', null, 0, 0.8) }

// ------------------------------------------------------------ シーン
const course = buildCourse(), sim = makeSim(course)
const renderer = new THREE.WebGLRenderer({ antialias: !low, powerPreference: 'high-performance', alpha: false })
let pr = Math.min(devicePixelRatio || 1, low ? 1.75 : 2), prMax = pr
renderer.setPixelRatio(pr)
$('view').appendChild(renderer.domElement)
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(70, 1, 0.3, 1800)
const world = createWorld(scene, renderer, course, { low })
const boat = createBoat(); scene.add(boat.root, boat.shadow)
const fx = createFx(scene, { low })
const lantLight = world.lantern
const keyLight = new THREE.PointLight(0xfff0dc, 3.5, 8, 1.8); scene.add(keyLight)
function resize() {
  const w = innerWidth, h = innerHeight; renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix()
}
addEventListener('resize', resize); resize()

// ------------------------------------------------------------ 状態
const G = { count: {}, state: 'title', t: 0, shake: 0, kick: 0, fall: { t: 0 }, camBlend: 0, yaw: 0, camPos: new THREE.Vector3(), look: new THREE.Vector3(), atm: {}, atmFrom: null, atmT: 1, paused: false, readyT: 0, wl: 0, fadeT: 0, sprayAcc: 0, lastBand: null, markT: 0, speedHist: [], newBest: false, finishT: 0 }
const prev = { x: 0, y: 0, z: 0, th: 0 }
let atmCur = lerpAtm(ATM[0], ATM[0], 0, {})
let bestInfo = store.get('hk_best', null)
const jumps = computeJumps(course)
const input = { steer: 0, brake: 0, padL: 0, padR: 0, padB: 0, dragX: 0, dragY: 0, dragging: false, keyL: 0, keyR: 0, keyB: 0 }
function curInput() {
  let s = 0, b = 0
  if (input.dragging) { s = Math.max(-1, Math.min(1, -input.dragX / 55)); b = Math.max(0, Math.min(1, (input.dragY - 14) / 60)) }
  else if (input.padL || input.padR) s = input.padL ? 1 : -1
  else s = (input.keyL ? 1 : 0) - (input.keyR ? 1 : 0)
  if (input.padB || input.keyB) b = 1
  if (Math.abs(s) < 0.08) s = 0
  return [s, b]
}
function setupInput() {
  const pad = (el, key) => {
    const on = e => { e.preventDefault(); startAudio(); input[key] = 1; el.classList.add('on'); try { el.setPointerCapture(e.pointerId) } catch (x) {} }
    const off = e => { input[key] = 0; el.classList.remove('on') }
    el.addEventListener('pointerdown', on); el.addEventListener('pointerup', off); el.addEventListener('pointercancel', off); el.addEventListener('lostpointercapture', off)
  }
  pad($('padL'), 'padL'); pad($('padR'), 'padR'); pad($('padB'), 'padB')
  const v = $('view'); let sx = 0, sy = 0, pid = -1
  v.addEventListener('pointerdown', e => { if (G.state !== 'play') return; startAudio(); pid = e.pointerId; sx = e.clientX; sy = e.clientY; input.dragging = true; input.dragX = 0; input.dragY = 0; try { v.setPointerCapture(pid) } catch (x) {} })
  v.addEventListener('pointermove', e => { if (e.pointerId !== pid || !input.dragging) return; input.dragX = e.clientX - sx; input.dragY = e.clientY - sy })
  const end = e => { if (e.pointerId !== pid) return; pid = -1; input.dragging = false; input.dragX = 0; input.dragY = 0 }
  v.addEventListener('pointerup', end); v.addEventListener('pointercancel', end)
  addEventListener('keydown', e => {
    if (e.repeat) return
    if (e.code === 'ArrowLeft' || e.code === 'KeyA') input.keyL = 1; if (e.code === 'ArrowRight' || e.code === 'KeyD') input.keyR = 1; if (e.code === 'ArrowDown' || e.code === 'KeyS') input.keyB = 1
    if (['ArrowLeft', 'ArrowRight', 'ArrowDown', 'ArrowUp', 'Space'].includes(e.code)) e.preventDefault()
    if ((e.code === 'Enter' || e.code === 'Space') && G.state === 'title') startGame()
    startAudio()
  })
  addEventListener('keyup', e => { if (e.code === 'ArrowLeft' || e.code === 'KeyA') input.keyL = 0; if (e.code === 'ArrowRight' || e.code === 'KeyD') input.keyR = 0; if (e.code === 'ArrowDown' || e.code === 'KeyS') input.keyB = 0 })
  addEventListener('blur', () => { input.keyL = input.keyR = input.keyB = 0 })
}

// ------------------------------------------------------------ HUD
const tubsEl = $('hTubs')
const TUB = '<svg viewBox="0 0 20 20"><ellipse cx="10" cy="11" rx="7" ry="6" fill="#b9854f" stroke="#4a2c14" stroke-width="1"/><ellipse cx="10" cy="7" rx="7" ry="2.4" fill="#6b4524"/></svg>'
const TUB0 = '<svg viewBox="0 0 20 20"><ellipse cx="10" cy="11" rx="7" ry="6" fill="none" stroke="#a9d4ee" stroke-width="1.3" stroke-dasharray="2 2"/></svg>'
function hudTubs() { const spare = Math.max(0, sim.lives - 1); tubsEl.innerHTML = Array.from({ length: P.lives - 1 }, (_, i) => i < spare ? TUB : TUB0).join('') }
function fmtTime(t) { const m = Math.floor(t / 60), s = t - m * 60; return `${m}:${s < 10 ? '0' : ''}${s.toFixed(1)}` }
let lastDist = -1, lastTime = ''
function hudUpdate() {
  const d = Math.round(sim.maxS); if (d !== lastDist) { lastDist = d; $('hDist').textContent = d }
  const tt = fmtTime(sim.runT); if (tt !== lastTime) { lastTime = tt; $('hTime').textContent = tt }
  $('hDrift').style.width = (sim.charge * 100).toFixed(0) + '%'
  // 見せ場の前だけ、ちょうどいい速さの帯を出す
  let jb = null
  if (sim.ground && sim.mode === 'run') for (const j of jumps) if (j.from > sim.i && j.from - sim.i < 120) { jb = j; break }
  const band = $('hBand')
  if (jb && jb.hi > 0) {
    band.hidden = false
    const lo = 8, hi = 34, f = v => Math.max(0, Math.min(100, (v - lo) / (hi - lo) * 100))
    $('bandOk').style.left = f(jb.lo) + '%'; $('bandOk').style.width = (f(jb.hi) - f(jb.lo)) + '%'; $('bandNow').style.left = f(sim.speed) + '%'
  } else if (!band.hidden) band.hidden = true
}
function showWorld(k) {
  const el = $('hWorld'); el.innerHTML = `<small>${T('world_n')} ${k + 1}</small>${T('world' + k)}`; el.classList.add('on'); clearTimeout(showWorld.t); showWorld.t = setTimeout(() => el.classList.remove('on'), 2200)
}

// ------------------------------------------------------------ 進行
function setWorldVisual(k, instant) {
  G.wl = k
  G.atmFrom = Object.assign({}, atmCur); for (const key of ['top', 'mid', 'bot', 'fog', 'hemiS', 'hemiG', 'sun', 'emis', 'floorA', 'floorB', 'floorGC', 'mote', 'track']) G.atmFrom[key] = atmCur[key].clone()
  G.atmT = instant ? 1 : 0
  scene.environment = world.envs[k]
  setAmb(k)
}
function flash(on, color = '#fff') { const f = $('flash'); f.style.background = color; if (on) { f.classList.add('on') } else f.classList.remove('on') }
function startGame() {
  if (G.state !== 'title') return
  startAudio()
  G.state = 'ready'; G.readyT = 0; $('title').hidden = true; $('hud').hidden = false; document.body.classList.toggle('nopads', !isTouch && false)
  sim.reset(0); sim.lives = P.lives; sim.falls = 0; sim.runT = 0; sim.maxS = 0; sim.dead = false
  prev.x = sim.x; prev.y = sim.y; prev.z = sim.z; prev.th = sim.th
  setWorldVisual(0, true); hudTubs(); G.newBest = false
}
function toTitle() {
  G.state = 'title'; $('result').hidden = true; $('hud').hidden = true; $('title').hidden = false; sim.reset(0); sim.lives = P.lives; sim.falls = 0; sim.runT = 0; sim.maxS = 0; sim.dead = false; sim.mode = 'run'
  prev.x = sim.x; prev.y = sim.y; prev.z = sim.z; prev.th = sim.th; setWorldVisual(0, true); G.camBlend = 0; applyLang()
}
function showResult(done) {
  G.state = 'result'
  const dist = Math.round(sim.maxS), key = 'hk_best', b = store.get(key, null)
  let nb = !b || dist > b.dist || (done && sim.finished && (!b.time || sim.runT < b.time))
  if (nb) store.set(key, { dist: Math.max(dist, b ? b.dist : 0), time: done ? Math.min(sim.runT, b && b.time ? b.time : 1e9) : (b ? b.time : 0) })
  const nbv = store.get(key, null)
  $('rTitle').textContent = done ? T('r_title_done') : T('r_title_over'); $('rDist').textContent = dist
  $('rTime').textContent = fmtTime(sim.runT); $('rFalls').textContent = sim.falls; $('rBest').textContent = `${Math.round(nbv.dist)}m` + (nb && b ? ' ' + T('new') : '')
  $('rSteps').innerHTML = [0, 1, 2, 3].map(k => `<i class="${sim.maxS >= (k === 0 ? 0 : course.gates[k - 1] * DS) ? 'on' : ''}"></i>`).join('')
  const txt = T('tweet').replace('{d}', dist).replace('{t}', fmtTime(sim.runT))
  $('bShare').href = 'https://x.com/intent/post?text=' + encodeURIComponent(txt + ' #氷河くだり') + '&url=' + encodeURIComponent('https://tom3games.com/play/hyouga-kudari/')
  $('hud').hidden = true; $('result').hidden = false
}
function doRespawn() {
  sim.respawn(); sim.dead = false; prev.x = sim.x; prev.y = sim.y; prev.z = sim.z; prev.th = sim.th
  G.yaw = sim.th; G.camSnap = true; G.fall.t = 0; $('hFell').hidden = true; hudTubs()
  if (sim.world !== G.wl) setWorldVisual(sim.world, true)
}
function onEvents(evs) {
  for (const e of evs) {
    G.count[e.t] = (G.count[e.t] || 0) + 1; if (e.perfect) G.count.perfect = (G.count.perfect || 0) + 1
    switch (e.t) {
      case 'boost': Snd.play('whoosh', { vol: 0.85, rate: 1.1 }); G.kick = 1; G.shake = Math.max(G.shake, 0.5); break
      case 'land': G.push = 1; Snd.play('land', { vol: Math.min(1, 0.4 + e.imp / 30) }); G.shake = Math.max(G.shake, Math.min(1, e.imp / 26)); fx.burst(sim.x, sim.y, sim.z, 26, 5 + e.imp * 0.1); if (e.perfect) { Snd.play('cp', { vol: 0.5, rate: 1.3 }); G.kick = 1 } break
      case 'touch': break
      case 'bounce': {
        Snd.play('bounce', { vol: 1, rate: 1 }); Snd.play('squeak', { vol: 0.55, rate: 1.1, delay: 0.05 }); G.shake = 1; G.kick = 1.3
        fx.burst(sim.x, sim.y, sim.z, 46, 7, 0.55, 1, 0.85)
        const p = world.pads.find(p => sim.i >= p.i - 1 && sim.i <= p.j + 1); if (p) { p.hit = 1.4; p.squash = 0.65 }
        break }
      case 'edge': Snd.play('tick', { vol: 0.5, rate: 1.1 }); break
      case 'leave': if (!e.edge) break; Snd.play('crack', { vol: 0.7 }); break
      case 'gate': Snd.play('gate', { vol: 0.9 }); Snd.duck(0.5, 1.5); flash(true); setTimeout(() => flash(false), 140); setWorldVisual(e.world, false); showWorld(e.world); G.shake = 0.6; break
      case 'cp': Snd.play('cp', { vol: 0.35 }); break
      case 'fall': Snd.play('fall', { vol: 0.9, rate: 1.45 }); Snd.play('squeak', { vol: 0.5, rate: 0.8 }); G.fall.t = 0; G.fall.kind = sim.world; $('hFell').innerHTML = `${T('fell')}<small>${sim.lives > 0 ? T('cp') : ''}</small>`; $('hFell').hidden = false; hudTubs(); break
      case 'dead':
        if (sim.lives <= 0) { showResult(false); break }
        G.fadeT = 0.0001; break
      case 'finish': Snd.play('finish', { vol: 0.9 }); Snd.play('chime', { vol: 0.5 }); G.finishT = 0.0001; break
    }
  }
}

// ------------------------------------------------------------ 描画の組み立て
const tmpV = new THREE.Vector3()
function updateAtm(dt) {
  if (G.atmT < 1) { G.atmT = Math.min(1, G.atmT + dt / 0.9); const k = G.atmT * G.atmT * (3 - 2 * G.atmT); lerpAtm(G.atmFrom, ATM[G.wl], k, atmCur) }
  else lerpAtm(ATM[G.wl], ATM[G.wl], 0, atmCur)
}
let floorY = 0
function frame(rdt, alpha) {
  G.t += rdt
  const x = prev.x + (sim.x - prev.x) * alpha, y = prev.y + (sim.y - prev.y) * alpha, z = prev.z + (sim.z - prev.z) * alpha
  let thd = sim.th - prev.th; thd = Math.atan2(Math.sin(thd), Math.cos(thd)); const th = prev.th + thd * alpha
  const speed = sim.speed
  // 舟
  boat.root.position.set(x, y, z); boat.root.rotation.y = th
  const air = !sim.ground && sim.mode !== 'fall'
  const lean = Math.max(-0.6, Math.min(0.6, sim.slip)) * (sim.ground ? 1 : 0.3) + (sim.mode === 'fall' ? Math.sin(G.t * 9) * 0.5 : 0)
  const pitch = air ? Math.max(-0.5, Math.min(0.5, -sim.vy * 0.025)) : -0.04
  const scared = sim.mode === 'fall' ? 1 : sim.ground && Math.abs(sim.d) > sim.hw - 0.7 ? 0.8 : 0
  // 縁ぎりぎり（0.3m以内）: 舟が縁へ傾き、火花・きしみ・画面の縁の暗さ
  const nearEdge = sim.ground && sim.mode === 'run' && sim.surf && Math.abs(sim.d) > sim.hw - 0.3
  G.danger = (G.danger || 0) + ((nearEdge ? 1 : 0) - (G.danger || 0)) * (1 - Math.exp(-rdt * (nearEdge ? 10 : 3)))
  const dg = G.danger
  boat.animate(G.t, speed, lean, pitch, Math.max(scared, dg > 0.4 ? 0.8 : 0), sim.brake || 0, -Math.sign(sim.d || 1) * 0.42 * dg)
  if (nearEdge && G.state === 'play') {
    const th0 = sim.tth || th, sg = Math.sign(sim.d), ex = x + Math.cos(th0) * sg * 0.9, ez = z - Math.sin(th0) * sg * 0.9
    if (Math.random() < 0.8) fx.emit(ex, y + 0.15, ez, -sim.vx * 0.15 + (Math.random() - 0.5) * 2, 1 + Math.random() * 2.5, -sim.vz * 0.15 + (Math.random() - 0.5) * 2, 0.35, 1, 0.75, 0.35)
    G.creakT = (G.creakT || 0) - rdt; if (G.creakT <= 0) { G.creakT = 0.28; Snd.play('tick', { vol: 0.45, rate: 1.15 }) }
  }
  const vg = $('vig'); if (vg) vg.style.opacity = G.state === 'play' ? String(Math.min(1, dg * (0.5 + 0.4 * Math.max(0, Math.sin(G.t * 11)))) + (sim.mode === 'fall' ? 0.5 : 0)) : '0'
  if (G.state === 'play' && course.CRM[sim.i] && sim.ground) { G.shake = Math.max(G.shake, 0.22); if (Math.random() < 0.5) fx.emit(x - Math.sin(th) * 2, y - 0.2, z - Math.cos(th) * 2, (Math.random() - 0.5) * 3, 2 + Math.random() * 3, (Math.random() - 0.5) * 3, 0.8, 0.8, 0.9, 1) }
  if (sim.mode === 'fall') { boat.body.rotation.x += rdt * 3.5; boat.body.rotation.z += rdt * 1.6 }
  // 接地影（床が見えている間だけ）
  boat.shadow.visible = sim.ground && sim.mode !== 'fall'
  boat.shadow.position.set(x, y + 0.08, z); boat.shadow.rotation.y = th
  // カメラ
  const vyaw = speed > 4 ? Math.atan2(sim.vx, sim.vz) : th
  if (G.camSnap) { G.yaw = vyaw; G.camSnap = false; G.snapPos = true }
  const dy = Math.atan2(Math.sin(vyaw - G.yaw), Math.cos(vyaw - G.yaw))
  G.yaw += dy * (1 - Math.exp(-rdt * (sim.mode === 'fall' ? 0.5 : 4)))
  G.af = (G.af || 0) + (((air && sim.airT > 0.3 && sim.mode !== 'fall') ? 1 : 0) - (G.af || 0)) * (1 - Math.exp(-rdt * 2.2)); G.push = Math.max(0, (G.push || 0) - rdt * 1.6); const af = G.af
  let jt = 0
  if (G.state === 'play' && sim.mode !== 'fall') for (const j of jumps) if (sim.i >= j.from - 55 && sim.i <= j.end + 2) { jt = 1; break }
  G.jc = (G.jc || 0) + (jt - (G.jc || 0)) * (1 - Math.exp(-rdt * 2.2)); const jc = G.jc
  const tun = sim.world === 2 ? 1 : 0
  const dist = (11.2 - tun * 1.6) + speed * 0.06 + (air ? 1.4 : 0) + (sim.boostT > 0 ? 0.8 : 0) + jc * 2.6 + af * 5.5 - G.push * 2.4, hgt = (6.8 - tun * 1.4) + (air ? 1.4 : 0) + jc * 3.4 + af * 4.2
  let cx, cy, cz, lx, ly, lz
  const fx_ = Math.sin(G.yaw), fz_ = Math.cos(G.yaw)
  if (G.state === 'title' || G.camBlend < 1) {
    // 前から見るカメラ（舟の顔が見える）から、うしろへ回り込む
    const a = th + 0.62 + Math.sin(G.t * 0.35) * 0.18
    const tx = x + Math.sin(a) * 6.2, ty = y + 2.6, tz = z + Math.cos(a) * 6.2
    const bx = x - fx_ * dist, by = y + hgt, bz = z - fz_ * dist
    const k = G.state === 'title' ? 0 : G.camBlend, e = k * k * (3 - 2 * k)
    cx = tx + (bx - tx) * e; cy = ty + (by - ty) * e; cz = tz + (bz - tz) * e
    const ax = x, ay = y + 1.0, az = z, bx2 = x + fx_ * 7, by2 = y + 0.6, bz2 = z + fz_ * 7
    lx = ax + (bx2 - ax) * e; ly = ay + (by2 - ay) * e; lz = az + (bz2 - az) * e
    if (G.state === 'ready') G.camBlend = Math.min(1, G.camBlend + rdt / 1.3)
  } else if (sim.mode === 'fall') {
    // 落ちる所を見せる: 追うのをやめ、落ちる舟を見下ろす
    cx = G.camPos.x + (x - G.camPos.x) * 0.02; cz = G.camPos.z + (z - G.camPos.z) * 0.02
    cy = Math.max(G.camPos.y, y + 7 + G.fall.t * 3.2)
    lx = x; ly = y; lz = z; G.look.set(x, y, z)
  } else {
    cx = x - fx_ * dist; cy = y + hgt; cz = z - fz_ * dist
    lx = x + fx_ * (7 + jc * 13); ly = y + 0.7 - (air ? 1.5 : 0) - jc * 2.5 - af * 3.5; lz = z + fz_ * (7 + jc * 13)
  }
  const snapped = !!G.snapPos
  if (G.snapPos) { G.camPos.set(cx, cy, cz); G.look.set(lx, ly, lz); G.snapPos = false }
  const kp = 1 - Math.exp(-rdt * (sim.mode === 'fall' ? 3 : 12)), ky = 1 - Math.exp(-rdt * (air ? 4 : 8))
  G.camPos.x += (cx - G.camPos.x) * kp; G.camPos.z += (cz - G.camPos.z) * kp; G.camPos.y += (cy - G.camPos.y) * ky
  G.look.x += (lx - G.look.x) * kp; G.look.z += (lz - G.look.z) * kp; G.look.y += (ly - G.look.y) * ky
  G.shake = Math.max(0, G.shake - rdt * 2.2); G.kick = Math.max(0, G.kick - rdt * 2)
  const sh = G.shake * 0.35 + (sim.boostT > 0 ? 0.07 : 0) + Math.max(0, (speed - 20) / 30) * 0.04
  camera.position.set(G.camPos.x + (Math.random() - 0.5) * sh, G.camPos.y + (Math.random() - 0.5) * sh, G.camPos.z + (Math.random() - 0.5) * sh)
  camera.up.set(0, 1, 0); camera.lookAt(G.look)
  // 横滑りぶんカメラを傾ける
  camera.rotateZ(-Math.max(-0.35, Math.min(0.35, sim.slip)) * 0.18 * (sim.ground ? 1 : 0) - Math.sign(sim.d || 1) * 0.09 * dg)
  const asp = camera.aspect, baseFov = asp < 0.8 ? 78 : asp < 1.2 ? 66 : 58
  const tf = baseFov + Math.min(20, Math.max(0, speed - 14) * 1.0) + G.kick * 6 + (sim.boostT > 0 ? 5 : 0) + jc * 5 + af * 7 - G.push * 4
  if (Math.abs(camera.fov - tf) > 0.05) { camera.fov += (tf - camera.fov) * Math.min(1, rdt * 6); camera.updateProjectionMatrix() }
  // 空気（門で切り替わる）
  updateAtm(rdt)
  const refY = sim.mode === 'fall' || air ? (sim.floor ?? y) : y
  floorY += (refY - floorY) * Math.min(1, rdt * 2.5); if (snapped) floorY = refY
  world.setAtm(atmCur, G.t, camera, { sy: 1, floor: floorY, y: floorY })
  keyLight.position.set(x - Math.sin(G.yaw) * 2.2, y + 3.2, z - Math.cos(G.yaw) * 2.2)
  lantLight.position.set(x + Math.sin(th) * 1.0, y + 1.4, z + Math.cos(th) * 1.0)
  world.update({ i: sim.i, world: sim.world }, rdt, G.t, camera)
  // 飛沫・風切り
  if (sim.ground && Math.abs(sim.slip) > 0.22 && speed > 10 && sim.mode === 'run') {
    G.sprayAcc += rdt * (30 + Math.abs(sim.slip) * 90); const n = Math.floor(G.sprayAcc); G.sprayAcc -= n
    if (n > 0) fx.sprayAt(x, y, z, Math.sin(th), Math.cos(th), Math.sign(sim.slip), n, Math.abs(sim.slip))
  }
  if (sim.boostT > 0 && Math.random() < 0.7) fx.emit(x - Math.sin(th) * 1.4, y + 0.5, z - Math.cos(th) * 1.4, -sim.vx * 0.2 + (Math.random() - 0.5) * 2, 0.5 + Math.random(), -sim.vz * 0.2 + (Math.random() - 0.5) * 2, 0.45, 1, 0.8, 0.5)
  fx.update(rdt, G.t, camera, { x, y, z }, [sim.vx, sim.vz], speed, atmCur, sim.boostT > 0)
  // 着地の目印（空中のとき、止まらずにこのまま行くとどこに着くか）
  const m = world.mark
  if (air && G.state === 'play') {
    G.markT -= rdt
    if (G.markT <= 0) {
      G.markT = 0.05
      const snap = sim.snapshot(); let hit = null
      for (let k = 0; k < 220; k++) { sim.step(0, 0); const ev = sim.ev.slice(snap.evn); if (sim.mode === 'fall') break; if (ev.some(e => e.t === 'bounce' || e.t === 'land' || e.t === 'touch')) { hit = [sim.x, sim.sy, sim.z]; break } }
      sim.restore(snap); G.mark = hit
    }
    if (G.mark) { m.visible = true; m.position.set(G.mark[0], G.mark[1] + 0.45, G.mark[2]); m.material.opacity = 0.65 + 0.3 * Math.sin(G.t * 9); const s = 3.2 + 0.4 * Math.sin(G.t * 9); m.scale.setScalar(s) } else m.visible = false
  } else m.visible = false
  // 音
  if (soundOn && Snd.ctx) {
    setVol('wind', Math.min(0.5, Math.max(0, (speed - 8) / 36)) * (sim.world === 2 ? 0.5 : 1))
    setVol('slide', sim.ground && sim.mode === 'run' ? Math.min(0.5, Math.max(0, (Math.abs(sim.slip) - 0.1) * 1.1) + Math.max(0, (speed - 22) * 0.01)) : 0)
  }
}

// ------------------------------------------------------------ ループ
let acc = 0, last = performance.now(), dbgPause = false, frames = 0, slowT = 0, fpsStat = { n: 0, sum: 0, max: 0, over: 0 }
const bot = { on: false, b: null }
function stepOnce() {
  prev.x = sim.x; prev.y = sim.y; prev.z = sim.z; prev.th = sim.th
  let s, b
  if (bot.on) { const r = bot.b.act(); s = r[0]; b = r[1] } else [s, b] = curInput()
  if (G.state !== 'play') { s = 0; b = 0 }
  sim.step(s, b)
  if (sim.ev.length) { const e = sim.ev.slice(); sim.ev.length = 0; onEvents(e) }
}
function tick(now) {
  requestAnimationFrame(tick)
  let dt = (now - last) / 1000; last = now
  if (dt > 0.1) dt = 0.1
  if (document.hidden) return
  fpsStat.n++; fpsStat.sum += dt; fpsStat.max = Math.max(fpsStat.max, dt); if (dt > 1 / 40) fpsStat.over++
  // 動的な解像度（遅い端末では下げる）
  if (G.state === 'play') { slowT += dt > 1 / 36 ? dt : -dt * 0.5; if (slowT < 0) slowT = 0; if (slowT > 1.2 && pr > 1) { pr = Math.max(1, pr - 0.25); renderer.setPixelRatio(pr); resize(); slowT = 0 } }
  if (!dbgPause) {
    if (G.state === 'ready') { G.readyT += dt; if (G.readyT > 1.1) { G.state = 'play'; showWorld(0) } }
    if (G.state === 'play' || G.state === 'ready' || G.state === 'result' || G.state === 'title') {
      acc += dt
      while (acc >= DT) { acc -= DT; if (G.state === 'play') stepOnce(); else { prev.x = sim.x; prev.y = sim.y; prev.z = sim.z; prev.th = sim.th; if (G.state === 'result' && sim.mode === 'done') sim.step(0, 0) } }
    }
    // 落ちた後の暗転と復帰
    if (G.fadeT > 0) {
      G.fadeT += dt; const f = $('flash'); f.style.background = '#06101c'; f.style.opacity = String(Math.min(1, G.fadeT / 0.35)); f.style.transition = 'none'
      if (G.fadeT > 0.5) { doRespawn(); G.fadeT = 0; f.style.transition = 'opacity .5s'; f.style.opacity = '0'; setTimeout(() => { f.style.background = '#fff'; f.style.transition = '' }, 600) }
    }
    if (sim.mode === 'fall') G.fall.t += dt
    if (G.finishT > 0) { G.finishT += dt; if (G.finishT > 2.4) { G.finishT = 0; showResult(true) } }
  }
  frame(dt, G.state === 'play' ? Math.min(1, acc / DT) : 1)
  if (G.state === 'play' || G.state === 'ready') hudUpdate()
  renderer.render(scene, camera)
  frames++
}

// ------------------------------------------------------------ 起動
function boot() {
  applyLang(); setupInput()
  $('bStart').onclick = () => { startGame() }
  $('howBtn').onclick = () => { $('how').hidden = false }
  $('howClose').onclick = () => { $('how').hidden = true }
  $('langBtn').onclick = () => { lang = lang === 'ja' ? 'en' : 'ja'; store.set('hk_lang', lang); try { localStorage.setItem('hk_lang', lang) } catch (e) {} applyLang() }
  const muteToggle = () => { startAudio(); Snd.setMute(!Snd.muted); applyLang(); $('muteX').hidden = !Snd.muted; $('muteW').hidden = Snd.muted }
  $('muteBtn').onclick = muteToggle; $('hMute').onclick = muteToggle
  $('bAgain').onclick = () => { toTitle(); startGame() }
  document.body.classList.toggle('nopads', !isTouch)
  sim.reset(0); prev.x = sim.x; prev.y = sim.y; prev.z = sim.z; prev.th = sim.th; G.yaw = sim.th; G.snapPos = true
  setWorldVisual(0, true); hudTubs()
  // 事前に1回描いてシェーダーを作る
  for (let i = 0; i < 2; i++) { frame(0.016, 1); renderer.render(scene, camera) }
  $('ldFill').style.width = '100%'
  setTimeout(() => { $('loading').hidden = true; $('title').hidden = false; window.__hkReady = true }, 150)
  requestAnimationFrame(tick)
  if (/[?&]auto=1/.test(location.search)) setTimeout(() => { startGame(); hk.botOn({ delay: 0.3, eye: 0.2, every: 0.25, seed: 3 }) }, 600)
}
// 検証用の窓口
window.hk = {
  sim, course, G, input, jumps, world, fx, scene, camera, renderer, fps: fpsStat,
  dbg: { pause(v = true) { dbgPause = v }, step(n = 1, render = true) { for (let i = 0; i < n; i++) { if (G.state === 'play') stepOnce(); else if (sim.mode === 'done') sim.step(0, 0) } if (render) { frame(1 / 60, 1); hudUpdate(); renderer.render(scene, camera) } } },
  start: startGame, toTitle,
  botOn(o = {}) { bot.b = makeBot(sim, o); bot.on = true }, botOff() { bot.on = false },
  teleport(s, speed) { const i = Math.round(s / DS); sim.x = course.X[i]; sim.z = course.Z[i]; sim.th = course.TH[i]; sim.y = course.Y[i]; sim.i = i; sim.s = s; sim.vx = Math.sin(sim.th) * (speed || 20); sim.vz = Math.cos(sim.th) * (speed || 20); sim.ground = true; sim.mode = 'run'; sim.world = course.WLD[i]; sim.gatesPassed = course.gates.filter(g => g < i).length; sim.maxS = Math.max(sim.maxS, s); prev.x = sim.x; prev.y = sim.y; prev.z = sim.z; prev.th = sim.th; G.camSnap = true; if (sim.world !== G.wl) setWorldVisual(sim.world, true) },
  showResult, doRespawn,
}
boot()
