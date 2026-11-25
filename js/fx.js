// 疾走感の演出: 氷の粒（ドリフトの飛沫・着地の粒）、風切りの筋、漂う粒（雪・火の粉・蛍・光の粉）
import * as THREE from 'three'
import { GLOW } from './world.js'

export function createFx(scene, opts = {}) {
  const glow = GLOW()
  // ---- 飛沫（プール）
  const N = opts.low ? 160 : 320
  const pos = new Float32Array(N * 3), vel = new Float32Array(N * 3), life = new Float32Array(N), age = new Float32Array(N), sizeA = new Float32Array(N), colA = new Float32Array(N * 3)
  for (let i = 0; i < N; i++) { life[i] = 0; pos[i * 3 + 1] = -9999 }
  const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.BufferAttribute(pos, 3)); sg.setAttribute('color', new THREE.BufferAttribute(colA, 3))
  const spray = new THREE.Points(sg, new THREE.PointsMaterial({ size: 0.3, map: glow, vertexColors: true, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true }))
  spray.frustumCulled = false; scene.add(spray)
  let head = 0
  const emit = (x, y, z, vx, vy, vz, l, r = 0.85, g = 0.95, b = 1) => {
    const i = head; head = (head + 1) % N
    pos[i * 3] = x; pos[i * 3 + 1] = y; pos[i * 3 + 2] = z; vel[i * 3] = vx; vel[i * 3 + 1] = vy; vel[i * 3 + 2] = vz; life[i] = l; age[i] = 0; colA[i * 3] = r; colA[i * 3 + 1] = g; colA[i * 3 + 2] = b
  }
  // ---- 風切り（カメラのまわりの線）
  const SN = opts.low ? 36 : 70
  const sp = new Float32Array(SN * 6), seed = []
  for (let i = 0; i < SN; i++) seed.push([Math.random(), Math.random(), Math.random()])
  const lg = new THREE.BufferGeometry(); lg.setAttribute('position', new THREE.BufferAttribute(sp, 3))
  const streakM = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false })
  const streaks = new THREE.LineSegments(lg, streakM); streaks.frustumCulled = false; scene.add(streaks)
  // ---- 漂う粒
  const MN = opts.low ? 120 : 240
  const mp = new Float32Array(MN * 3), ms = []
  for (let i = 0; i < MN; i++) { mp[i * 3] = (Math.random() - 0.5) * 60; mp[i * 3 + 1] = (Math.random() - 0.3) * 30; mp[i * 3 + 2] = (Math.random() - 0.3) * 80; ms.push(Math.random()) }
  const mg = new THREE.BufferGeometry(); mg.setAttribute('position', new THREE.BufferAttribute(mp, 3))
  const moteM = new THREE.PointsMaterial({ size: 0.28, map: glow, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false, color: 0xffffff })
  const motes = new THREE.Points(mg, moteM); motes.frustumCulled = false; scene.add(motes)
  const API = {
    emit,
    // 飛沫の発生元（舟の横）
    sprayAt(x, y, z, fx, fz, side, amount, slip) {
      const n = Math.floor(amount)
      for (let k = 0; k < n; k++) {
        const lx = fz, lz = -fx    // 左向き
        const s = side * (0.5 + Math.random() * 0.9)
        emit(x + lx * side * 0.6, y + 0.1, z + lz * side * 0.6, lx * s * (2 + slip * 4) - fx * 3 + (Math.random() - 0.5) * 1.5, 1.5 + Math.random() * 3, lz * s * (2 + slip * 4) - fz * 3 + (Math.random() - 0.5) * 1.5, 0.5 + Math.random() * 0.45)
      }
    },
    burst(x, y, z, n, power, r = 0.8, g = 0.95, b = 1) { for (let k = 0; k < n; k++) { const a = Math.random() * 6.28, p = power * (0.3 + Math.random()); emit(x, y + 0.1, z, Math.cos(a) * p, 2 + Math.random() * power * 0.7, Math.sin(a) * p, 0.6 + Math.random() * 0.7, r, g, b) } },
    update(dt, t, cam, boatPos, vel2, speed, atm, boosting) {
      for (let i = 0; i < N; i++) {
        if (life[i] <= 0) { pos[i * 3 + 1] = -9999; continue }
        age[i] += dt; if (age[i] > life[i]) { life[i] = 0; pos[i * 3 + 1] = -9999; continue }
        vel[i * 3 + 1] -= 9 * dt; pos[i * 3] += vel[i * 3] * dt; pos[i * 3 + 1] += vel[i * 3 + 1] * dt; pos[i * 3 + 2] += vel[i * 3 + 2] * dt
        const k = 1 - age[i] / life[i]; colA[i * 3] *= 1; // 薄くしたいので加算の色を減らす
        colA[i * 3 + 0] = Math.max(0, colA[i * 3 + 0] - dt * 0.6); colA[i * 3 + 1] = Math.max(0, colA[i * 3 + 1] - dt * 0.6); colA[i * 3 + 2] = Math.max(0, colA[i * 3 + 2] - dt * 0.5)
      }
      sg.attributes.position.needsUpdate = true; sg.attributes.color.needsUpdate = true
      // 風切りの筋: 舟の進行方向の逆へ流れる。速いほど長く濃い
      const sdx = vel2[0] / Math.max(1, speed), sdz = vel2[1] / Math.max(1, speed)
      const op = Math.max(0, (speed - 14) / 18) * 0.55 + (boosting ? 0.25 : 0)
      streakM.opacity = Math.min(0.8, op); streakM.color.copy(atm.bot).lerp(new THREE.Color(0xffffff), 0.6)
      const len = speed * 0.05 * (boosting ? 1.5 : 1)
      for (let i = 0; i < SN; i++) {
        const s = seed[i], ph = (s[0] + t * (0.9 + s[1])) % 1
        const fwd = -10 + ph * 70, lat = (s[1] - 0.5) * 26, up = (s[2] - 0.35) * 14
        const px = boatPos.x + sdx * fwd + sdz * lat, py = boatPos.y + 3 + up, pz = boatPos.z + sdz * fwd - sdx * lat
        sp[i * 6] = px; sp[i * 6 + 1] = py; sp[i * 6 + 2] = pz; sp[i * 6 + 3] = px - sdx * len; sp[i * 6 + 4] = py; sp[i * 6 + 5] = pz - sdz * len
      }
      lg.attributes.position.needsUpdate = true
      // 漂う粒: カメラのまわりの箱を回す
      moteM.color.copy(atm.mote); moteM.opacity = 0.35 + 0.5 * atm.moteN
      for (let i = 0; i < MN; i++) {
        const s = ms[i]
        mp[i * 3 + 1] += (atm.moteRise * (0.5 + s) - 0.2) * dt
        mp[i * 3] += Math.sin(t * 0.7 + s * 20) * 0.4 * dt
        // 舟からの相対で箱に収める（箱の外へ出たら反対側へ）
        const rx = mp[i * 3] + 0 - 0, dx = boatPos.x
        // ワールド座標で持たず、舟中心の相対座標で持つ
        const bx = -vel2[0] * dt, bz = -vel2[1] * dt
        mp[i * 3] += bx; mp[i * 3 + 2] += bz
        if (mp[i * 3] > 30) mp[i * 3] -= 60; if (mp[i * 3] < -30) mp[i * 3] += 60
        if (mp[i * 3 + 2] > 50) mp[i * 3 + 2] -= 80; if (mp[i * 3 + 2] < -30) mp[i * 3 + 2] += 80
        if (mp[i * 3 + 1] > 22) mp[i * 3 + 1] -= 34; if (mp[i * 3 + 1] < -12) mp[i * 3 + 1] += 34
      }
      mg.attributes.position.needsUpdate = true
      motes.position.set(boatPos.x, boatPos.y, boatPos.z)
    },
  }
  return API
}
