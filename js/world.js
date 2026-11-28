// 世界: 空・霧・光・氷の道・門・弾み台・各世界の遠景。すべて three.js のコードと GLSL で作る（画像素材なし）
import * as THREE from 'three'
import { DS } from './course.js'
import { noise3, fbm3, rng } from './noise.js'

const C = h => new THREE.Color(h)
// 世界ごとの空気。top/mid/bot は空、fog は霧、emis は氷の内側の光
export const ATM = [
  { top: C(0x0f3f9c), mid: C(0x3c86dc), bot: C(0xcfe6fb), fog: C(0xa9cdee), fogD: 0.0021, hemiS: C(0xcfe6ff), hemiG: C(0x8fb0d0), hemiI: 0.95, sun: C(0xfff0d8), sunI: 1.5, sunDir: [0.5, 0.42, 0.75], expo: 1.0, stars: 0, aur: 0, ember: 0, emis: C(0x5a9fd0), emisI: 0.10, lant: 0, floorA: C(0xe9f3ff), floorB: C(0x8fb4dc), floorGlow: 0, floorGC: C(0xffffff), floorDrop: 62, floorScale: 0.012, flow: 0.01, env: 0.95, mote: C(0xffffff), moteRise: -0.6, moteN: 0.5, track: C(0xc2e0fa) },
  { top: C(0x150807), mid: C(0x5c1d10), bot: C(0xff7a28), fog: C(0x8a3016), fogD: 0.0048, hemiS: C(0xffb080), hemiG: C(0x5a2210), hemiI: 1.0, sun: C(0xff8a3a), sunI: 2.0, sunDir: [-0.4, 0.16, 0.9], expo: 1.05, stars: 0, aur: 0, ember: 1, emis: C(0x2f86b0), emisI: 0.26, lant: 0.5, floorA: C(0x5a1808), floorB: C(0xff8a24), floorGlow: 2.0, floorGC: C(0xffc050), floorDrop: 34, floorScale: 0.045, flow: 0.07, env: 0.55, mote: C(0xff9a40), moteRise: 2.2, moteN: 1, track: C(0x9fd8f4) },
  { top: C(0x04070e), mid: C(0x08101c), bot: C(0x0c1c2c), fog: C(0x0a1c30), fogD: 0.0085, hemiS: C(0x6aa6d8), hemiG: C(0x2a3a4a), hemiI: 1.1, sun: C(0x7fb8ff), sunI: 0.3, sunDir: [0.2, 0.8, 0.3], expo: 1.15, stars: 0, aur: 0, ember: 0, emis: C(0x2f9fd0), emisI: 0.22, lant: 1, floorA: C(0x02060c), floorB: C(0x0a2236), floorGlow: 0.25, floorGC: C(0x3ad0e0), floorDrop: 50, floorScale: 0.02, flow: 0.012, env: 0.55, mote: C(0x8ff0ff), moteRise: 0.3, moteN: 0.7, track: C(0xa8e4ff) },
  { top: C(0x050a26), mid: C(0x1b2b6b), bot: C(0x5b4a98), fog: C(0x24246a), fogD: 0.0032, hemiS: C(0x8aa8ff), hemiG: C(0x2a2450), hemiI: 0.7, sun: C(0xcfd8ff), sunI: 1.1, sunDir: [-0.55, 0.38, 0.7], expo: 1.1, stars: 1, aur: 1, ember: 0, emis: C(0x56d6c2), emisI: 0.2, lant: 0.7, floorA: C(0x060d28), floorB: C(0x123a62), floorGlow: 0.45, floorGC: C(0x3fc8a0), floorDrop: 58, floorScale: 0.03, flow: 0.02, env: 0.85, mote: C(0xdff6ff), moteRise: -0.3, moteN: 0.8, track: C(0xcdf4ee) },
]
export const NAMES = ['world0', 'world1', 'world2', 'world3']
const NUM = ['fogD', 'hemiI', 'sunI', 'expo', 'stars', 'aur', 'ember', 'emisI', 'lant', 'floorGlow', 'floorDrop', 'floorScale', 'flow', 'env', 'moteRise', 'moteN']
const COL = ['top', 'mid', 'bot', 'fog', 'hemiS', 'hemiG', 'sun', 'emis', 'floorA', 'floorB', 'floorGC', 'mote', 'track']
export function lerpAtm(a, b, t, out = {}) {
  for (const k of NUM) out[k] = a[k] + (b[k] - a[k]) * t
  for (const k of COL) { out[k] = out[k] || new THREE.Color(); out[k].copy(a[k]).lerp(b[k], t) }
  out.sunDir = [0, 1, 2].map(i => a.sunDir[i] + (b.sunDir[i] - a.sunDir[i]) * t)
  return out
}

const SKY_FRAG = `
varying vec3 vDir;
uniform vec3 uTop,uMid,uBot,uSunC,uSunDir; uniform float uStars,uAur,uEmber,uTime;
float hash(vec3 p){p=fract(p*0.3183099+.1);p*=17.;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
float hash2(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float vn(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash2(i),hash2(i+vec2(1,0)),f.x),mix(hash2(i+vec2(0,1)),hash2(i+vec2(1,1)),f.x),f.y);}
void main(){
  vec3 d=normalize(vDir); float h=d.y;
  vec3 col=mix(uBot,uMid,smoothstep(-0.3,0.10,h)); col=mix(col,uTop,smoothstep(0.05,0.8,h));
  float sd=max(dot(d,normalize(uSunDir)),0.);
  col+=uSunC*(smoothstep(0.9990,0.9996,sd)*2.2+pow(sd,14.)*0.30+pow(sd,3.)*0.07);
  col+=vec3(1.,.35,.08)*uEmber*smoothstep(0.30,-0.12,h)*0.75;
  if(uStars>0.01&&h>0.02){vec3 p=d*150.;vec3 ip=floor(p);float r=hash(ip);float st=step(0.9955,r);vec3 fr=fract(p)-.5;float m=smoothstep(0.38,0.0,length(fr));col+=vec3(.9,.95,1.)*st*m*uStars*smoothstep(0.02,0.25,h)*(0.55+0.45*sin(uTime*2.+r*60.));}
  if(uAur>0.01){float x=atan(d.z,d.x);float c=0.34+0.10*sin(x*2.+uTime*0.08)+0.05*sin(x*5.-uTime*0.12);float band=exp(-pow((h-c)*5.2,2.));float str=0.45+0.55*vn(vec2(x*7.,uTime*0.12));float up=smoothstep(c-0.06,c+0.35,h);
    vec3 ac=mix(vec3(0.15,1.0,0.55),vec3(0.2,0.55,1.0),smoothstep(0.1,0.6,h)); ac=mix(ac,vec3(0.7,0.3,0.9),smoothstep(0.5,0.85,h)*0.6);
    col+=ac*band*str*uAur*(0.3+0.7*up)*0.55*smoothstep(0.02,0.14,h);}
  gl_FragColor=vec4(col,1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`
export function skyMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: { uTop: { value: new THREE.Color() }, uMid: { value: new THREE.Color() }, uBot: { value: new THREE.Color() }, uSunC: { value: new THREE.Color() }, uSunDir: { value: new THREE.Vector3(0, 1, 0) }, uStars: { value: 0 }, uAur: { value: 0 }, uEmber: { value: 0 }, uTime: { value: 0 } },
    vertexShader: 'varying vec3 vDir;void main(){vDir=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader: SKY_FRAG, side: THREE.BackSide, depthWrite: false, fog: false,
  })
}
function applySky(m, a, t) {
  const u = m.uniforms; u.uTop.value.copy(a.top); u.uMid.value.copy(a.mid); u.uBot.value.copy(a.bot); u.uSunC.value.copy(a.sun); u.uSunDir.value.set(...a.sunDir); u.uStars.value = a.stars; u.uAur.value = a.aur; u.uEmber.value = a.ember; u.uTime.value = t
}

const FLOOR_FRAG = `
varying vec3 vW;
uniform vec3 uA,uB,uG,uFogC; uniform float uGlow,uFogD,uTime,uFlow,uScale;
float hash2(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float vn(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash2(i),hash2(i+vec2(1,0)),f.x),mix(hash2(i+vec2(0,1)),hash2(i+vec2(1,1)),f.x),f.y);}
float fbm(vec2 p){float a=.5,s=0.;for(int i=0;i<4;i++){s+=a*vn(p);p*=2.07;a*=.5;}return s;}
void main(){
  vec2 p=vW.xz*uScale; vec2 q=p+vec2(uTime*uFlow,uTime*uFlow*.6);
#ifdef LOWQ
  float n=fbm(q+vn(q*1.7+3.)*0.65);
#else
  float n=fbm(q+fbm(q*1.7+3.)*1.3);
#endif
  vec3 col=mix(uA,uB,smoothstep(0.3,0.7,n));
  float crack=smoothstep(0.045,0.0,abs(n-0.52));
  col+=uG*uGlow*(crack*1.6+smoothstep(0.55,0.35,n)*0.55);
  float dd=length(vW-cameraPosition); float f=1.-exp(-pow(dd*uFogD,2.));
  col=mix(col,uFogC,clamp(f,0.,1.));
  gl_FragColor=vec4(col,1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`

// ------------------------------------------------------------------ 氷の道
async function iceTexture(Y) {
  const W = 256, H = 512, cv = document.createElement('canvas'); cv.width = W; cv.height = H
  const g = cv.getContext('2d'), img = g.createImageData(W, H), d = img.data
  for (let y = 0; y < H; y++) { if ((y & 15) === 0) await Y(); for (let x = 0; x < W; x++) {
    const n = fbm3(x / 38, y / 38, 1.7, 4), m = fbm3(x / 9, y / 70, 5.1, 3)
    let v = 0.80 + 0.14 * n + 0.06 * m
    const i = (y * W + x) * 4
    d[i] = 214 * v; d[i + 1] = 236 * v; d[i + 2] = 255 * Math.min(1, v + 0.05); d[i + 3] = 255
  } }
  g.putImageData(img, 0, 0)
  const r = rng(11)
  g.lineCap = 'round'
  for (let k = 0; k < 26; k++) { g.strokeStyle = `rgba(255,255,255,${0.18 + r() * 0.3})`; g.lineWidth = 0.7 + r() * 1.3; g.beginPath(); let x = r() * W, y = r() * H; g.moveTo(x, y); for (let j = 0; j < 5; j++) { x += (r() - 0.5) * 60; y += (r() - 0.2) * 70; g.lineTo(x, y) } g.stroke() }
  for (let k = 0; k < 70; k++) { g.strokeStyle = `rgba(120,170,215,${0.12 + r() * 0.2})`; g.lineWidth = 0.6 + r(); g.beginPath(); const x = r() * W, y = r() * H; g.arc(x, y, 1 + r() * 4, 0, 7); g.stroke() }
  // 縁の光る線（道の端が読めるように）
  const lg = g.createLinearGradient(0, 0, W, 0)
  lg.addColorStop(0, 'rgba(10,50,120,0.95)'); lg.addColorStop(0.07, 'rgba(25,85,160,0.8)'); lg.addColorStop(0.115, 'rgba(235,248,255,0.55)'); lg.addColorStop(0.15, 'rgba(255,255,255,0)'); lg.addColorStop(0.85, 'rgba(255,255,255,0)'); lg.addColorStop(0.885, 'rgba(235,248,255,0.55)'); lg.addColorStop(0.93, 'rgba(25,85,160,0.8)'); lg.addColorStop(1, 'rgba(10,50,120,0.95)')
  g.fillStyle = lg; g.fillRect(0, 0, W, H)
  const t = new THREE.CanvasTexture(cv); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4
  return t
}
const PROF_TOP = [-1, -0.66, -0.33, 0, 0.33, 0.66, 1].map(u => [u, 0.07 * (1 - u * u)])
const PROF_BOT = [[1.04, -0.12], [1.02, -0.4], [0.88, -0.8], [0.62, -1.2], [0.3, -1.5], [0, -1.6], [-0.3, -1.5], [-0.62, -1.2], [-0.88, -0.8], [-1.02, -0.4], [-1.04, -0.12]]
const PROF = PROF_TOP.concat(PROF_BOT)

export async function buildTrack(c, mat, Y = () => {}) {
  const group = new THREE.Group(), n = c.n
  const tints = ATM.map(a => a.track)
  const tintAt = i => {
    const w = c.WLD[i]; let col = tints[w].clone()
    const g = c.gates[w]
    if (g !== undefined && g - i < 40 && g - i > -2) col.lerp(tints[Math.min(3, w + 1)], 0.7 * (1 - (g - i) / 40))
    return col
  }
  const runs = []; let a = -1
  for (let i = 0; i < n; i++) { if (c.SOL[i] && a < 0) a = i; if (a >= 0 && (!c.SOL[i + 1] || i === n - 1) && c.SOL[i]) { runs.push([a, i]); a = -1 } }
  const deep = new THREE.Color(0x4a8fd0)
  group.userData.crumble = []
  for (const [ra, rb] of runs) {
    for (let ca = ra; ca <= rb; ) {
      await Y()
      const crm = c.CRM[ca], lim = crm ? 8 : 56; let cb = ca
      while (cb < rb && cb - ca < lim && c.CRM[cb + 1] === crm) cb++
      if (cb === ca) cb = Math.min(rb, ca + 1)
      const rings = []   // {i, scaleW, scaleV, off}
      if (ca === ra) rings.push({ i: ca, w: 0.6, v: 0.1, off: -0.9 }, { i: ca, w: 0.96, v: 0.75, off: -0.4 })
      for (let i = ca; i <= cb; i++) rings.push({ i, w: 1, v: 1, off: 0 })
      if (cb === rb) rings.push({ i: cb, w: 0.96, v: 0.75, off: 0.4 }, { i: cb, w: 0.6, v: 0.1, off: 0.9 })
      const R = rings.length, P = PROF.length
      const pos = new Float32Array((R * P + 2) * 3), nor = new Float32Array((R * P + 2) * 3), col = new Float32Array((R * P + 2) * 3), uv = new Float32Array((R * P + 2) * 2)
      const idx = []
      const tmp = new THREE.Color()
      for (let r = 0; r < R; r++) {
        const rg = rings[r], i = rg.i, th = c.TH[i], hw = c.W[i] * rg.w
        const Lx = Math.cos(th), Lz = -Math.sin(th), Fx = Math.sin(th), Fz = Math.cos(th)
        const cx = c.X[i] + Fx * rg.off, cz = c.Z[i] + Fz * rg.off, cy = c.Y[i]
        const base = tintAt(i)
        for (let k = 0; k < P; k++) {
          const [u, v0] = PROF[k], v = v0 * (Math.abs(v0) > 0.07 ? 1.0 : 1) * rg.v * (c.PAD[i] ? 1.1 : 1)
          const o = (r * P + k) * 3, X = u * hw
          pos[o] = cx + Lx * X; pos[o + 1] = cy + v; pos[o + 2] = cz + Lz * X
          const kp = PROF[(k + 1) % P], km = PROF[(k - 1 + P) % P]
          const tx = (kp[0] - km[0]) * c.W[i], ty = (kp[1] - km[1]) * rg.v, l = Math.hypot(tx, ty) || 1
          const nx = -ty / l, ny = tx / l
          nor[o] = Lx * nx; nor[o + 1] = ny; nor[o + 2] = Lz * nx
          tmp.copy(base).lerp(deep, Math.min(1, Math.max(0, -v0 / 1.7)) * 0.85)
          if (k < 7) tmp.multiplyScalar((0.9 + 0.05 * Math.sin(i * 0.37 + u * 3)) * (1 - 0.35 * Math.abs(u) ** 3))
          col[o] = tmp.r; col[o + 1] = tmp.g; col[o + 2] = tmp.b
          const uo = (r * P + k) * 2; uv[uo] = k < 7 ? (u + 1) / 2 : 0.5 + u * 0.5; uv[uo + 1] = i * DS / 7 + rg.off / 7
        }
      }
      for (let r = 0; r < R - 1; r++) for (let k = 0; k < P; k++) {
        const a0 = r * P + k, b0 = r * P + (k + 1) % P, a1 = (r + 1) * P + k, b1 = (r + 1) * P + (k + 1) % P
        idx.push(a0, a1, b0, b0, a1, b1)
      }
      // 端のふた
      const capFan = (r, flip) => {
        const vi = R * P + (r === 0 ? 0 : 1); const rg = rings[r], i = rg.i, th = c.TH[i]
        let sx = 0, sy = 0, sz = 0
        for (let k = 0; k < P; k++) { const o = (r * P + k) * 3; sx += pos[o]; sy += pos[o + 1]; sz += pos[o + 2] }
        pos[vi * 3] = sx / P; pos[vi * 3 + 1] = sy / P; pos[vi * 3 + 2] = sz / P
        const f = flip ? -1 : 1; nor[vi * 3] = Math.sin(th) * f; nor[vi * 3 + 1] = 0; nor[vi * 3 + 2] = Math.cos(th) * f
        col[vi * 3] = 0.8; col[vi * 3 + 1] = 0.92; col[vi * 3 + 2] = 1
        for (let k = 0; k < P; k++) { const a0 = r * P + k, b0 = r * P + (k + 1) % P; if (flip) idx.push(vi, b0, a0); else idx.push(vi, a0, b0) }
      }
      if (ca === ra) capFan(0, true); if (cb === rb) capFan(R - 1, false)
      const geo = new THREE.BufferGeometry()
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3)); geo.setAttribute('normal', new THREE.BufferAttribute(nor, 3)); geo.setAttribute('color', new THREE.BufferAttribute(col, 3)); geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2))
      geo.setIndex(idx)
      if (crm) {
        let mx = 0, my = 0, mz = 0; const nv = pos.length / 3
        for (let q = 0; q < nv; q++) { mx += pos[q * 3]; my += pos[q * 3 + 1]; mz += pos[q * 3 + 2] }
        mx /= nv; my /= nv; mz /= nv
        for (let q = 0; q < nv; q++) { pos[q * 3] -= mx; pos[q * 3 + 1] -= my; pos[q * 3 + 2] -= mz }
        geo.computeBoundingSphere(); const m = new THREE.Mesh(geo, mat); m.position.set(mx, my, mz); group.add(m)
        group.userData.crumble.push({ m, a: ca, b: cb, home: new THREE.Vector3(mx, my, mz), fall: 0, spin: [(Math.random() - 0.5) * 1.6, (Math.random() - 0.5) * 1.2, (Math.random() - 0.5) * 1.6] })
      } else { geo.computeBoundingSphere(); group.add(new THREE.Mesh(geo, mat)) }
      if (cb >= rb) break
      ca = cb
    }
  }
  return group
}

// ------------------------------------------------------------------ 小物の素材
function glowTex(size = 64, stops) {
  const cv = document.createElement('canvas'); cv.width = cv.height = size; const g = cv.getContext('2d'), r = size / 2
  const gr = g.createRadialGradient(r, r, 0, r, r, r); for (const [o, c] of stops) gr.addColorStop(o, c)
  g.fillStyle = gr; g.fillRect(0, 0, size, size)
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; return t
}
export const GLOW = () => glowTex(64, [[0, 'rgba(255,255,255,1)'], [0.25, 'rgba(255,255,255,.55)'], [1, 'rgba(255,255,255,0)']])
function ringTex() {
  const cv = document.createElement('canvas'); cv.width = cv.height = 256; const g = cv.getContext('2d')
  g.clearRect(0, 0, 256, 256)
  for (const [r, a, w] of [[118, 1, 8], [88, 0.8, 6], [58, 0.7, 6], [28, 0.9, 10]]) { g.strokeStyle = `rgba(190,255,235,${a})`; g.lineWidth = w; g.beginPath(); g.arc(128, 128, r, 0, 7); g.stroke() }
  const gr = g.createRadialGradient(128, 128, 0, 128, 128, 128); gr.addColorStop(0, 'rgba(140,255,220,.35)'); gr.addColorStop(1, 'rgba(140,255,220,0)'); g.fillStyle = gr; g.fillRect(0, 0, 256, 256)
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; return t
}
const dummy = new THREE.Object3D()
function inst(geo, mat, count, fn) {
  const m = new THREE.InstancedMesh(geo, mat, count), col = new THREE.Color()
  for (let i = 0; i < count; i++) {
    dummy.position.set(0, 0, 0); dummy.rotation.set(0, 0, 0); dummy.scale.set(1, 1, 1); dummy.quaternion.identity()
    const c = fn(i, dummy); dummy.updateMatrix(); m.setMatrixAt(i, dummy.matrix)
    if (c !== undefined) m.setColorAt(i, col.set(c))
  }
  m.instanceMatrix.needsUpdate = true; if (m.instanceColor) m.instanceColor.needsUpdate = true
  m.computeBoundingSphere(); return m
}
function displaced(geo, fn) {
  const p = geo.attributes.position, v = new THREE.Vector3()
  for (let i = 0; i < p.count; i++) { v.fromBufferAttribute(p, i); fn(v, i); p.setXYZ(i, v.x, v.y, v.z) }
  geo.computeVertexNormals(); return geo
}
function mergeSmooth(geo) { geo.deleteAttribute('normal'); geo.deleteAttribute('uv'); return geo }
function indexedSphere(r, w, h) { return new THREE.SphereGeometry(r, w, h) }
function peakGeo(seed, snow = 0.55, rock = [0.34, 0.38, 0.5], snowC = [0.95, 0.97, 1.0], ridge = 0.34) {
  const g = new THREE.SphereGeometry(1, 40, 28), p = g.attributes.position, v = new THREE.Vector3()
  const col = new Float32Array(p.count * 3)
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i)
    let y = v.y; const up = Math.max(0, y)
    const sh = 1 - 0.7 * up   // 上へいくほど細く
    v.x *= sh; v.z *= sh; v.y = up > 0 ? up * 1.9 : y * 0.35
    const r = fbm3(v.x * 2.1 + seed, v.y * 1.6, v.z * 2.1 + seed, 4)
    const rid = 1 - Math.abs(fbm3(v.x * 3.4 + seed * 2, v.y * 2.2, v.z * 3.4, 3) * 2 - 1)
    const k = 1 + (r - 0.5) * 0.55 + rid * ridge * 0.6
    v.x *= k; v.z *= k; v.y += (r - 0.5) * 0.25
    p.setXYZ(i, v.x, v.y, v.z)
    const h = v.y / 1.9, s = Math.min(1, Math.max(0, (h - snow + (r - 0.5) * 0.35) * 7))
    const dark = 0.55 + 0.45 * Math.min(1, h * 1.5 + 0.2)
    col[i * 3] = (rock[0] * (1 - s) + snowC[0] * s) * dark; col[i * 3 + 1] = (rock[1] * (1 - s) + snowC[1] * s) * dark; col[i * 3 + 2] = (rock[2] * (1 - s) + snowC[2] * s) * dark
  }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3)); g.computeVertexNormals(); return g
}
function boulderGeo(seed) {
  return displaced(new THREE.IcosahedronGeometry(1, 3), (v) => { const n = fbm3(v.x * 1.4 + seed, v.y * 1.4, v.z * 1.4 + seed, 3); v.multiplyScalar(0.75 + n * 0.55) })
}
function spireGeo(seed) {
  const pts = []; const N = 14
  for (let i = 0; i <= N; i++) { const t = i / N; const rr = (1.0 - 0.55 * t) * (1 + 0.28 * Math.sin(t * 7 + seed)) * (t > 0.92 ? Math.sqrt(Math.max(0, 1 - (t - 0.92) / 0.08)) : 1); pts.push(new THREE.Vector2(Math.max(0.02, rr), t * 5 - 1)) }
  const g = new THREE.LatheGeometry(pts, 14)
  const p = g.attributes.position, v = new THREE.Vector3(), col = new Float32Array(p.count * 3)
  for (let i = 0; i < p.count; i++) { v.fromBufferAttribute(p, i); const k = 1 + (fbm3(v.x * 2 + seed, v.y, v.z * 2, 3) - 0.5) * 0.5; v.x *= k; v.z *= k; p.setXYZ(i, v.x, v.y, v.z); const h = (v.y + 1) / 5; const heat = Math.max(0, 0.35 - h) * 2.6; col[i * 3] = 0.3 + heat * 0.9; col[i * 3 + 1] = 0.16 + heat * 0.3; col[i * 3 + 2] = 0.12 + heat * 0.05 }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3)); g.computeVertexNormals(); return g
}
function gearGeo(teeth, r0, r1, depth) {
  const s = new THREE.Shape(), n = teeth * 4
  for (let i = 0; i < n; i++) { const a = i / n * Math.PI * 2, k = (i % 4 === 1 || i % 4 === 2) ? r1 : r0; const x = Math.cos(a) * k, y = Math.sin(a) * k; if (i) s.lineTo(x, y); else s.moveTo(x, y) }
  const hole = new THREE.Path(); hole.absarc(0, 0, r0 * 0.55, 0, Math.PI * 2, true); s.holes.push(hole)
  return new THREE.ExtrudeGeometry(s, { depth, bevelEnabled: true, bevelSize: 0.5, bevelThickness: 0.5, bevelSegments: 2, curveSegments: 8 })
}

// ------------------------------------------------------------------ 世界の組み立て
// 読み込み中の画面操作を止めないよう、区切りごとに await Y() で画面へ処理を返す（2026-11-28）
export async function createWorld(scene, renderer, c, opts = {}) {
  const lowEnd = !!opts.low
  const Y = opts.yield || (() => {})
  const W = { c, atm: {}, groups: [] }
  // 空
  const skyM = skyMaterial(); const dome = new THREE.Mesh(new THREE.SphereGeometry(700, 32, 16), skyM); dome.renderOrder = -10; dome.frustumCulled = false; scene.add(dome)
  W.dome = dome; W.skyM = skyM
  await Y()
  // 床（雲海・溶鉄・闇・夜の海）
  const floorM = new THREE.ShaderMaterial({ uniforms: { uA: { value: new THREE.Color() }, uB: { value: new THREE.Color() }, uG: { value: new THREE.Color() }, uFogC: { value: new THREE.Color() }, uGlow: { value: 0 }, uFogD: { value: 0.004 }, uTime: { value: 0 }, uFlow: { value: 0.01 }, uScale: { value: 0.018 } }, vertexShader: 'varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}', fragmentShader: FLOOR_FRAG , defines: lowEnd ? { LOWQ: 1 } : {} })
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(3200, 3200, 1, 1).rotateX(-Math.PI / 2), floorM); floor.frustumCulled = false; scene.add(floor); W.floor = floor
  // 光
  const hemi = new THREE.HemisphereLight(0xffffff, 0x888888, 1); const sun = new THREE.DirectionalLight(0xffffff, 2); const sunT = new THREE.Object3D(); sun.target = sunT
  scene.add(hemi, sun, sunT); W.hemi = hemi; W.sun = sun; W.sunT = sunT
  scene.fog = new THREE.FogExp2(0xffffff, 0.004)
  const lantern = new THREE.PointLight(0xffc880, 0, 34, 1.4); scene.add(lantern); W.lantern = lantern
  await Y()
  // 環境マップ（世界ごと。門をくぐる時に入れ替える）
  const pm = new THREE.PMREMGenerator(renderer), envs = []
  for (let k = 0; k < 4; k++) {
    const es = new THREE.Scene(), m = skyMaterial(); applySky(m, ATM[k], 3); es.add(new THREE.Mesh(new THREE.SphereGeometry(10, 24, 12), m))
    // 足元の暗さ（下から反射が白くならないように）
    const rt = pm.fromScene(es, 0.02, 0.1, 100); envs.push(rt.texture)
    await Y()
  }
  W.envs = envs; scene.environment = envs[0]
  await Y()
  // 氷の道
  const iceMat = new THREE.MeshStandardMaterial({ vertexColors: true, map: await iceTexture(Y), roughness: 0.62, metalness: 0.0, envMapIntensity: 0.6, emissive: new THREE.Color(0x3a7fb0), emissiveIntensity: 0.1 })
  W.iceMat = iceMat
  const track = await buildTrack(c, iceMat, Y); scene.add(track); W.track = track

  await Y()
  // ---- 門（3つの光の輪）と区切りの小さな輪、弾み台
  W.gates = []
  const gateGeo = new THREE.TorusGeometry(1, 0.045, 10, 72)
  const beamGeo = new THREE.CylinderGeometry(0.09, 0.09, 46, 8, 1, true)
  const glowT = GLOW()
  c.gates.forEach((gi, k) => {
    const nextCol = ATM[Math.min(3, k + 1)].emis.clone().lerp(new THREE.Color(0xffffff), 0.55)
    const g = new THREE.Group(), th = c.TH[gi], hw = c.W[gi], R = hw + 2.4
    g.position.set(c.X[gi], c.Y[gi] + R * 0.78, c.Z[gi]); g.rotation.y = th
    const mat = new THREE.MeshBasicMaterial({ color: nextCol, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false })
    const rings = []
    for (let r = 0; r < 3; r++) { const m = new THREE.Mesh(gateGeo, mat); m.scale.setScalar(R * (1 - r * 0.07)); m.rotation.set(0, 0, 0); m.userData = { axis: r }; g.add(m); rings.push(m) }
    rings[1].rotation.x = Math.PI / 3; rings[2].rotation.x = -Math.PI / 3
    const beamM = new THREE.MeshBasicMaterial({ color: nextCol, transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide })
    for (const s of [-1, 1]) { const b = new THREE.Mesh(beamGeo, beamM); b.position.set(s * (R + 0.2), 14, 0); g.add(b) }
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowT, color: nextCol, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false })); sp.scale.setScalar(R * 2.6); g.add(sp)
    g.userData = { rings, k }
    scene.add(g); W.gates.push(g)
  })
  // ゴール: 金色の大きな光の輪と、空へ伸びる光の柱
  if (c.finishIdx > 0) {
    const gi = c.finishIdx, gold = new THREE.Color(0xffd98a), g = new THREE.Group(), R = c.W[gi] + 5.5
    g.position.set(c.X[gi], c.Y[gi] + R * 0.8, c.Z[gi]); g.rotation.y = c.TH[gi]
    const mat = new THREE.MeshBasicMaterial({ color: gold, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false })
    const rings = []
    for (let r = 0; r < 3; r++) { const m = new THREE.Mesh(new THREE.TorusGeometry(1, 0.05, 10, 80), mat); m.scale.setScalar(R * (1 - r * 0.08)); g.add(m); rings.push(m) }
    rings[1].rotation.x = Math.PI / 3; rings[2].rotation.x = -Math.PI / 3
    const bm = new THREE.MeshBasicMaterial({ color: gold, transparent: true, opacity: 0.3, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide })
    for (const s of [-1, 1]) { const b = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 220, 10, 1, true), bm); b.position.set(s * (R + 0.4), 90, 0); g.add(b) }
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowT, color: gold, transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending, depthWrite: false })); sp.scale.setScalar(R * 3.2); g.add(sp)
    g.userData = { rings, k: 9 }; scene.add(g); W.gates.push(g)
  }
  W.cps = c.cps.map((ci, k) => {
    const g = new THREE.Group(); const th = c.TH[ci], hw = c.W[ci]
    const post = (s) => { const p = new THREE.Group(); p.add(new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.08, 2.2, 8), new THREE.MeshStandardMaterial({ color: 0x20384f, roughness: 0.6 }))); p.children[0].position.y = 1.1; const l = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 8), new THREE.MeshBasicMaterial({ color: 0xffd27a })); l.position.y = 2.35; p.add(l); const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowT, color: 0xffc060, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false })); sp.scale.setScalar(2.2); sp.position.y = 2.35; p.add(sp); p.position.set(s * (hw + 0.5), -0.1, 0); return p }
    g.add(post(1), post(-1)); g.position.set(c.X[ci], c.Y[ci], c.Z[ci]); g.rotation.y = th; scene.add(g); return g
  })
  await Y()
  // 急な曲がりの手前の案内（外側に立つ矢印の旗。向きが道の曲がる向き）
  W.signs = []
  {
    const plateM = new THREE.MeshStandardMaterial({ color: 0x0f2438, roughness: 0.6, emissive: 0x08141f, emissiveIntensity: 0.6 })
    const chevM = new THREE.MeshBasicMaterial({ color: 0xff7a4d, side: THREE.DoubleSide })
    const poleM = new THREE.MeshStandardMaterial({ color: 0x20384f, roughness: 0.6 })
    const chev = (dirx) => { const sh = new THREE.Shape(); sh.moveTo(-0.22 * dirx, 0.5); sh.lineTo(0.18 * dirx, 0); sh.lineTo(-0.22 * dirx, -0.5); sh.lineTo(-0.02 * dirx, -0.5); sh.lineTo(0.38 * dirx, 0); sh.lineTo(-0.02 * dirx, 0.5); return new THREE.ShapeGeometry(sh) }
    const cl = chev(-1), cr = chev(1)
    let i = 1
    while (i < c.n - 2) {
      const d0 = c.TH[i + 1] - c.TH[i]
      if (Math.abs(d0) < 0.004 || !c.SOL[i]) { i++; continue }
      const sg = Math.sign(d0); let j = i; while (j < c.n - 2 && Math.sign(c.TH[j + 1] - c.TH[j]) === sg && Math.abs(c.TH[j + 1] - c.TH[j]) > 0.004) j++
      const ang = Math.abs(c.TH[j] - c.TH[i])
      if (ang >= 1.0) {
        let si = Math.max(1, i - 40); while (si < i && !c.SOL[si]) si++
        const th = c.TH[si], hw = c.W[si], off = -sg * (hw + 1.7)
        const g = new THREE.Group(); g.scale.setScalar(1.5); g.position.set(c.X[si] + Math.cos(th) * off, c.Y[si], c.Z[si] - Math.sin(th) * off); g.rotation.y = th + Math.PI
        const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.09, 2.6, 8), poleM); pole.position.y = 1.3; g.add(pole)
        const plate = new THREE.Mesh(new THREE.BoxGeometry(1.7, 1.2, 0.1), plateM); plate.position.y = 2.7; g.add(plate)
        for (const dx of [-0.42, 0.34]) { const m = new THREE.Mesh(sg > 0 ? cl : cr, chevM); m.position.set(dx, 2.7, 0.07); g.add(m) }
        const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.13, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffa060 })); lamp.position.y = 3.5; g.add(lamp)
        const spr = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowT, color: 0xff8a50, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false })); spr.scale.setScalar(2.4); spr.position.y = 3.5; g.add(spr)
        scene.add(g); W.signs.push({ g, i: si, ang, dir: sg })
      }
      i = j + 1
    }
  }
  await Y()
  // 弾み台（クッションと的）
  W.pads = []
  const rt = ringTex(); const padRings = []
  for (let i = 0; i < c.n; i++) if (c.PAD[i] && !c.PAD[i - 1]) {
    let j = i; while (c.PAD[j + 1]) j++
    const mid = (i + j) / 2, i0 = Math.floor(mid), L = (j - i) * DS + 2, w = c.W[i0] * 2
    const g = new THREE.Group(); g.position.set((c.X[i] + c.X[j]) / 2, (c.Y[i] + c.Y[j]) / 2, (c.Z[i] + c.Z[j]) / 2); g.rotation.y = c.TH[i0]
    const cush = new THREE.Mesh(new THREE.SphereGeometry(1, 28, 12), new THREE.MeshStandardMaterial({ color: 0x9fe8d8, roughness: 0.35, emissive: 0x2ad0a8, emissiveIntensity: 0.5, transparent: true, opacity: 0.92 }))
    cush.scale.set(w / 2 * 0.96, 0.5, L / 2); cush.position.y = -0.18; g.add(cush)
    const decal = new THREE.Mesh(new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ map: rt, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.95 }))
    decal.scale.set(Math.min(w, L) * 0.95, 1, Math.min(w, L) * 0.95); decal.position.y = 0.36; g.add(decal)
    scene.add(g); W.pads.push({ g, cush, decal, i, j })
  }
  // 着地の目印（空中で出す）
  W.mark = new THREE.Mesh(new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ map: rt, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, depthTest: false, opacity: 0.0, color: 0xffffff }))
  W.mark.scale.setScalar(2.6); W.mark.renderOrder = 20; W.mark.visible = false; scene.add(W.mark)

  await Y()
  // ---- 遠景
  const R = rng(7)
  const worldRange = k => [k === 0 ? 0 : c.gates[k - 1], k === 3 ? c.n - 1 : c.gates[k]]
  const pickSide = (idx, off, up = 0) => { const th = c.TH[idx], s = R() < 0.5 ? -1 : 1; return [c.X[idx] + Math.cos(th) * off * s, c.Y[idx] + up, c.Z[idx] - Math.sin(th) * off * s, s] }
  W.zones = []   // {g, i} 近くだけ表示
  let zoneWorld = 0
  const addZone = (g, mid) => { scene.add(g); W.zones.push({ g, i: mid, k: zoneWorld }) }
  const ZN = 230   // 1ゾーンのサンプル数（≈345m）
  const peakVars = [peakGeo(1, 0.5, [0.22, 0.28, 0.42]), peakGeo(5.5, 0.55, [0.26, 0.24, 0.34]), peakGeo(9.2, 0.45, [0.2, 0.3, 0.44])]
  const peakMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9, metalness: 0 })
  const peakGeos4 = [peakGeo(2, 0.35, [0.3, 0.34, 0.6], [0.8, 0.9, 1.0], 0.4), peakGeo(7.1, 0.4, [0.26, 0.34, 0.55], [0.75, 0.95, 0.95], 0.4)]
  // 雲がコースと後ろのカメラの通り道をふさがないように、近くを通る一番低い道より下へ沈める
  const clearY = (x, y, z, r, ry) => { let low = 1e9; for (let i = 0; i < c.n; i += 3) { const dx = c.X[i] - x, dz = c.Z[i] - z; if (dx * dx + dz * dz < (r + 26) * (r + 26) && c.Y[i] < low) low = c.Y[i] } return low < 1e9 ? Math.min(y, low - ry - 16) : y }
  const cloudGeo = indexedSphere(1, 12, 8)
  const cloudMat = new THREE.MeshLambertMaterial({ color: 0xffffff, emissive: 0x6d8fb4, emissiveIntensity: 0.55 })
  const iceBoulderMat = new THREE.MeshStandardMaterial({ color: 0xcfe9ff, roughness: 0.25, emissive: 0x3a7fb0, emissiveIntensity: 0.15 })
  const boulders = [boulderGeo(1), boulderGeo(4)]
  const pillarGeo = new THREE.CylinderGeometry(1.5, 4.2, 70, 12, 1, true)
  const spires = [spireGeo(1), spireGeo(3.3)]
  const basaltMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85, emissive: 0x401006, emissiveIntensity: 0.6 })
  const ironMat = new THREE.MeshStandardMaterial({ color: 0x2a2220, roughness: 0.6, metalness: 0.6 })
  const bandMat = new THREE.MeshBasicMaterial({ color: 0xff8a30 })
  const rockMat = new THREE.MeshStandardMaterial({ color: 0x3c4658, roughness: 0.95, vertexColors: true, side: THREE.BackSide })
  const crystalGeo = new THREE.OctahedronGeometry(1, 0).scale(0.22, 1.0, 0.22)
  const crystalMat = new THREE.MeshBasicMaterial({ color: 0xffffff })
  const stalGeo = new THREE.ConeGeometry(1, 1, 7, 1, false).translate(0, -0.5, 0)
  const stalMat = new THREE.MeshStandardMaterial({ color: 0x4a6a8a, roughness: 0.9 })
  const lanternGeo = indexedSphere(0.35, 8, 6)
  const lanternMat = new THREE.MeshBasicMaterial({ color: 0xffe0a0 })
  const ringGeo = new THREE.TorusGeometry(1, 0.035, 8, 64)
  const spinners = []
  const cnt = (n) => lowEnd ? Math.ceil(n * 0.6) : n

  for (let k = 0; k < 4; k++) {
    const [wa, wb] = worldRange(k); zoneWorld = k
    for (let za = wa; za < wb; za += ZN) {
      await Y()
      const zb = Math.min(wb, za + ZN), mid = Math.round((za + zb) / 2), g = new THREE.Group()
      const ri = () => za + Math.floor(R() * (zb - za))
      const rr = (a, b) => a + R() * (b - a)
      if (k === 0) {
        // 山・雲海・浮かぶ氷の丸い岩・氷の柱
        for (let v = 0; v < 3; v++) g.add(inst(peakVars[v], peakMat, cnt(4), (i, d) => { const idx = ri(), [x, y, z] = pickSide(idx, rr(230, 760)); d.position.set(x, y - 95, z); const s = rr(70, 190); d.scale.set(s, s * rr(0.8, 1.2), s); d.rotation.y = R() * 6; return 0xffffff }))
        g.add(inst(cloudGeo, cloudMat, cnt(260), (i, d) => { const idx = ri(), [x, y, z] = pickSide(idx, rr(-30, 420)); const s = rr(14, 40), sy = s * rr(0.28, 0.45); const px = x + rr(-30, 30), pz = z + rr(-30, 30); d.position.set(px, clearY(px, y - rr(32, 70), pz, s * 1.2, sy), pz); d.scale.set(s, sy, s * rr(0.8, 1.2)); d.rotation.y = R() * 6; const t = rr(0.9, 1); return new THREE.Color(t, t, 1).getHex() }))
        g.add(inst(boulders[0], iceBoulderMat, cnt(10), (i, d) => { const idx = ri(), [x, y, z] = pickSide(idx, rr(24, 130)); d.position.set(x, y + rr(-28, 14), z); const s = rr(2.5, 9); d.scale.set(s, s * 0.8, s); d.rotation.set(R() * 6, R() * 6, R() * 6) }))
        const pil = inst(pillarGeo, iceBoulderMat, Math.floor((zb - za) / 36), (i, d) => { const idx = za + i * 36; d.position.set(c.X[idx], c.Y[idx] - 38, c.Z[idx]) }); g.add(pil)
      } else if (k === 1) {
        g.add(inst(spires[0], basaltMat, cnt(14), (i, d) => { const idx = ri(), [x, y, z] = pickSide(idx, rr(60, 360)); d.position.set(x, y - rr(48, 64), z); const s = rr(3, 8); d.scale.set(s, s * rr(5, 11), s); d.rotation.y = R() * 6; return 0xffffff }))
        g.add(inst(spires[1], basaltMat, cnt(8), (i, d) => { const idx = ri(), [x, y, z] = pickSide(idx, rr(90, 420)); d.position.set(x, y - rr(48, 64), z); const s = rr(5, 11); d.scale.set(s, s * rr(7, 14), s); d.rotation.y = R() * 6; return 0xffffff }))
        const towers = [], bands = []
        for (let i = 0; i < cnt(6); i++) { const idx = ri(), [x, y, z] = pickSide(idx, rr(90, 260)); towers.push([x, y - 52, z, rr(5, 9), rr(70, 130)]) }
        g.add(inst(new THREE.CylinderGeometry(0.8, 1, 1, 14), ironMat, towers.length, (i, d) => { const t = towers[i]; d.position.set(t[0], t[1] + t[4] / 2, t[2]); d.scale.set(t[3], t[4], t[3]) }))
        g.add(inst(new THREE.CylinderGeometry(0.83, 1.03, 1, 14), bandMat, towers.length * 3, (i, d) => { const t = towers[Math.floor(i / 3)], h = [0.25, 0.5, 0.97][i % 3]; d.position.set(t[0], t[1] + t[4] * h, t[2]); d.scale.set(t[3] * (1 + (0.1 - h * 0.1)) , 3.2, t[3] * (1 + (0.1 - h * 0.1))) }))
        for (let i = 0; i < 2; i++) { const idx = ri(), [x, y, z] = pickSide(idx, rr(120, 220)); const gear = new THREE.Mesh(gearGeo(22, 26, 31, 7), ironMat); gear.position.set(x, y - 8, z); gear.rotation.y = c.TH[idx] + Math.PI / 2 + rr(-0.5, 0.5); gear.scale.setScalar(rr(1, 1.6)); g.add(gear); spinners.push([gear, rr(-0.18, 0.18)]) }
        // 溶けた鉄の滝
        for (let i = 0; i < cnt(7); i++) { const idx = ri(), [x, y, z] = pickSide(idx, rr(70, 200)); const f = new THREE.Mesh(new THREE.PlaneGeometry(rr(4, 9), 100), new THREE.MeshBasicMaterial({ color: 0xff7a22, transparent: true, opacity: 0.72, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide })); f.position.set(x, y + 4, z); f.rotation.y = c.TH[idx] + Math.PI / 2; g.add(f) }
      } else if (k === 2) {
        // 洞窟は別処理（トンネル）。遠くの水晶の光だけ
      } else {
        for (let v = 0; v < 2; v++) g.add(inst(peakGeos4[v], peakMat, cnt(3), (i, d) => { const idx = ri(), [x, y, z] = pickSide(idx, rr(300, 700)); d.position.set(x, y - 100, z); const s = rr(90, 170); d.scale.set(s, s * rr(0.9, 1.4), s); d.rotation.y = R() * 6; return 0xffffff }))
        g.add(inst(lanternGeo, lanternMat, cnt(90), (i, d) => { const idx = ri(), [x, y, z] = pickSide(idx, rr(8, 90)); d.position.set(x, y + rr(-6, 28), z); const s = rr(0.6, 1.6); d.scale.setScalar(s) }))
        g.add(inst(boulders[1], new THREE.MeshStandardMaterial({ color: 0x9fc8ee, roughness: 0.2, emissive: 0x2a6a9a, emissiveIntensity: 0.3 }), cnt(10), (i, d) => { const idx = ri(), [x, y, z] = pickSide(idx, rr(30, 150)); d.position.set(x, y + rr(-30, 10), z); const s = rr(3, 11); d.scale.set(s, s * 0.8, s); d.rotation.set(R() * 6, R() * 6, R() * 6) }))
        for (let i = 0; i < 3; i++) { const idx = ri(), [x, y, z] = pickSide(idx, rr(70, 150)); const m = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: 0x9ff0e0, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false })); m.position.set(x, y + rr(18, 50), z); m.scale.setScalar(rr(14, 34)); m.rotation.set(R() * 3, R() * 3, 0); g.add(m); spinners.push([m, rr(-0.1, 0.1), 'x']) }
      }
      addZone(g, mid)
    }
  }
  await Y()
  // ---- 世界3: 洞窟のトンネル（下だけ開いている）
  {
    const [wa, wb] = worldRange(2), step = 3, rings = []
    // 空洞（見せ場の前後で大きく広げる）
    const chamber = new Float32Array(c.n), rad0 = 5.3
    for (const g1 of c.gaps) if (c.PAD[g1.to]) { const g2 = c.gaps.find(q => q.from > g1.to); if (!g2) continue; const a = g1.from - 16, b = g2.to + 16; for (let i = Math.max(0, a); i <= Math.min(c.n - 1, b); i++) { const t = Math.min(1, Math.min(i - a, b - i) / 14); chamber[i] = Math.max(chamber[i], t * t * (3 - 2 * t)) } }
    const A0 = -0.95, A1 = Math.PI + 0.95, NA = 26
    const pos = [], col = [], idx = [], stalag = [], crys = []
    let nRing = 0
    for (let i = wa; i <= wb; i += step) {
      const th = c.TH[i], Lx = Math.cos(th), Lz = -Math.sin(th), ch = chamber[i]
      // 見せ場では上下の高さの中間に中心を寄せる
      let cyOff = 2.9
      if (ch > 0) { let lowest = c.Y[i]; for (let q = i; q < Math.min(c.n, i + 90); q++) lowest = Math.min(lowest, c.Y[q]); let up = c.Y[i]; for (let q = Math.max(0, i - 60); q <= i; q++) up = Math.max(up, c.Y[q]); cyOff = 2.9 + ch * ((up - c.Y[i]) * 0.5 + (lowest - c.Y[i]) * 0.5 - (up - lowest) * 0.0 + (up - lowest) * 0.38) }
      const Rr = rad0 + ch * 9.5
      for (let a = 0; a <= NA; a++) {
        const ang = A0 + (A1 - A0) * a / NA, n = fbm3(i * 0.06, ang * 1.3, 2.2, 4), rid = fbm3(i * 0.15, ang * 2.5, 7.7, 3)
        const rd = Rr * (0.86 + n * 0.5) + (rid - 0.5) * 1.6
        pos.push(c.X[i] + Lx * Math.cos(ang) * rd, c.Y[i] + cyOff + Math.sin(ang) * rd * (1 + ch * 0.25), c.Z[i] + Lz * Math.cos(ang) * rd)
        const m = 0.5 + rid * 0.5; col.push(0.3 * m + 0.04 + (rid > 0.62 ? 0.25 : 0), 0.55 * m + 0.08 + (rid > 0.62 ? 0.3 : 0), 0.95 * m + 0.12)
        if (R() < 0.13 && ang > 0.3 && ang < Math.PI - 0.4) stalag.push([pos[pos.length - 3], pos[pos.length - 2], pos[pos.length - 1], Rr])
        if (R() < 0.22) crys.push([pos.length - 3, th, ang])
      }
      nRing++
    }
    const NP = NA + 1
    for (let r = 0; r < nRing - 1; r++) for (let a = 0; a < NA; a++) { const p0 = r * NP + a, p1 = p0 + 1, p2 = p0 + NP, p3 = p2 + 1; idx.push(p0, p2, p1, p1, p2, p3) }
    const tg = new THREE.BufferGeometry(); tg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); tg.setAttribute('color', new THREE.Float32BufferAttribute(col, 3)); tg.setIndex(idx); tg.computeVertexNormals(); tg.computeBoundingSphere()
    const tube = new THREE.Mesh(tg, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.92, metalness: 0, side: THREE.DoubleSide, flatShading: false, emissive: 0x0e2a48, emissiveIntensity: 1.2 })); W.tube = tube; scene.add(tube)
    const g = new THREE.Group()
    g.add(inst(stalGeo, stalMat, stalag.length, (i, d) => { const s = stalag[i]; d.position.set(s[0], s[1], s[2]); const w = R() * 0.5 + 0.35; d.scale.set(w, 1.5 + R() * 5.5, w) }))
    const palette = [0x58e6ff, 0x7affd8, 0x9fb0ff, 0x58e6ff, 0xb0f0ff]
    const cmesh = inst(crystalGeo, crystalMat, crys.length * 3, (i, d) => {
      const q = crys[Math.floor(i / 3)], o = q[0]; d.position.set(pos[o], pos[o + 1], pos[o + 2]); const toward = new THREE.Vector3(c.X[wa] * 0, 0, 0)
      d.lookAt(d.position.x + (Math.random() - 0.5), d.position.y - 1, d.position.z + (Math.random() - 0.5)); d.rotateX(Math.PI / 2 * (R() - 0.5)); d.rotateZ(R() * 1.5)
      const s = 0.5 + R() * 1.1; d.scale.set(s, s * (1.3 + R() * 1.6), s); return palette[Math.floor(R() * palette.length)]
    }); g.add(cmesh)
    // 光のにじみ（水晶のまわり）
    const gp = new Float32Array(crys.length * 3), gc = new Float32Array(crys.length * 3), tmpc = new THREE.Color()
    crys.forEach((q, i) => { gp[i * 3] = pos[q[0]]; gp[i * 3 + 1] = pos[q[0] + 1]; gp[i * 3 + 2] = pos[q[0] + 2]; tmpc.setHex(palette[i % palette.length]); gc[i * 3] = tmpc.r; gc[i * 3 + 1] = tmpc.g; gc[i * 3 + 2] = tmpc.b })
    const gg = new THREE.BufferGeometry(); gg.setAttribute('position', new THREE.BufferAttribute(gp, 3)); gg.setAttribute('color', new THREE.BufferAttribute(gc, 3))
    g.add(new THREE.Points(gg, new THREE.PointsMaterial({ size: 5, map: glowT, vertexColors: true, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true })))
    // 世界の入口は全部見えると重いので、世界3の間だけ表示
    // 道の脇に立つ岩の柱（天井から下の闇まで）
    const colG = new THREE.CylinderGeometry(0.8, 1.3, 1, 9, 1, true)
    const cols = []; for (let i = wa + 6; i < wb - 4; i += 10) { const th = c.TH[i], sd = R() < 0.5 ? -1 : 1, off = sd * (c.W[i] + 1.6 + R() * 1.2); cols.push([c.X[i] + Math.cos(th) * off, c.Y[i], c.Z[i] - Math.sin(th) * off, 1.4 + R() * 0.9]) }
    g.add(inst(colG, new THREE.MeshStandardMaterial({ color: 0x35506e, roughness: 0.9, emissive: 0x0a1a2c, emissiveIntensity: 0.8 }), cols.length, (i, d) => { const q = cols[i]; d.position.set(q[0], q[1] + 3, q[2]); d.scale.set(q[3], 34, q[3]) }))
    const shaftM = new THREE.MeshBasicMaterial({ color: 0x7fd8ff, transparent: true, opacity: 0.13, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide })
    for (let i = wa + 8; i < wb; i += 14) { const th = c.TH[i], off = (R() - 0.5) * 7; const sh = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 1.7 + R(), 16, 10, 1, true), shaftM); sh.position.set(c.X[i] + Math.cos(th) * off, c.Y[i] + 11, c.Z[i] - Math.sin(th) * off); sh.rotation.z = (R() - 0.5) * 0.3; g.add(sh) }
    W.cave = g; scene.add(g)
  }
  W.spinners = spinners
  W.crumble = track.userData.crumble
  W.update = (st, dt, t, cam) => {
    for (const q of W.crumble) {
      if (q.fall === 0 && st.i > q.b + 4) q.fall = 0.001
      if (q.fall > 0) { q.fall += dt; const f = q.fall; q.m.position.y = q.home.y - 7 * f * f; q.m.rotation.x = q.spin[0] * f; q.m.rotation.y = q.spin[1] * f; q.m.rotation.z = q.spin[2] * f; q.m.visible = f < 2.6 && st.i > q.a - 4 }
      else { q.m.position.copy(q.home); q.m.rotation.set(0, 0, 0); q.m.visible = true; if (st.i >= q.a - 2 && st.i <= q.b + 3) q.m.position.y += Math.sin(t * 70 + q.a) * 0.05 }
      if (q.fall > 0 && st.i < q.a - 30) { q.fall = 0; q.m.visible = true }
    }
    for (const [m, sp, ax] of spinners) { if (ax === 'x') m.rotation.y += sp * dt; else m.rotation.z += sp * dt }
    for (const g of W.gates) { const r = g.userData.rings; r[0].rotation.z += dt * 0.7; r[1].rotation.z -= dt * 1.1; r[2].rotation.y += dt * 0.9 }
    for (const z of W.zones) z.g.visible = Math.abs(z.i - st.i) < 520 && (z.k === (st.world ?? z.k) || (z.k === (st.world ?? 0) + 1 && c.gates[st.world] - st.i < 130))
    W.tube.visible = W.cave.visible = st.i > c.gates[1] - 260 && st.i < c.gates[2] + 120
    for (const p of W.pads) { const k = 1 + Math.sin(t * 4 + p.i) * 0.05; p.decal.scale.set(p.decal.scale.x, 1, p.decal.scale.z); p.decal.material.opacity = 0.7 + 0.3 * Math.sin(t * 5 + p.i); p.cush.material.emissiveIntensity = 0.45 + 0.25 * Math.sin(t * 4 + p.i) + (p.hit ? p.hit : 0); if (p.hit) p.hit = Math.max(0, p.hit - dt * 2.2); p.cush.scale.y = 0.5 * (1 - (p.squash || 0)); if (p.squash) p.squash = Math.max(0, p.squash - dt * 4) }
  }
  W.setAtm = (a, t, cam, sim) => {
    scene.fog.color.copy(a.fog); scene.fog.density = a.fogD
    hemi.color.copy(a.hemiS); hemi.groundColor.copy(a.hemiG); hemi.intensity = a.hemiI
    sun.color.copy(a.sun); sun.intensity = a.sunI
    renderer.toneMappingExposure = a.expo
    applySky(skyM, a, t)
    const u = floorM.uniforms; u.uA.value.copy(a.floorA); u.uB.value.copy(a.floorB); u.uG.value.copy(a.floorGC); u.uGlow.value = a.floorGlow; u.uFogC.value.copy(a.fog); u.uFogD.value = a.fogD; u.uTime.value = t; u.uFlow.value = a.flow; u.uScale.value = a.floorScale
    iceMat.emissive.copy(a.emis); iceMat.emissiveIntensity = a.emisI
    scene.environmentIntensity = a.env
    lantern.intensity = a.lant * 16
    dome.position.copy(cam.position); sun.position.set(cam.position.x + a.sunDir[0] * 60, cam.position.y + a.sunDir[1] * 60, cam.position.z + a.sunDir[2] * 60); sunT.position.copy(cam.position)
    W.floor.position.set(cam.position.x, sim.sy !== undefined ? Math.min(sim.floor ?? 0, sim.y) - a.floorDrop : -a.floorDrop, cam.position.z)
  }
  W.pmrem = pm
  return W
}
