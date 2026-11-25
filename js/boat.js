// 主人公: 桶の舟に乗ったカワウソ。丸みのある形だけで組む（角ばった物・既存キャラに似せない）
import * as THREE from 'three'
import { fbm3 } from './noise.js'

function woodTexture() {
  const cv = document.createElement('canvas'); cv.width = 256; cv.height = 128; const g = cv.getContext('2d')
  g.fillStyle = '#b8824a'; g.fillRect(0, 0, 256, 128)
  for (let x = 0; x < 256; x += 32) { g.fillStyle = `rgba(60,30,10,${0.35})`; g.fillRect(x, 0, 2, 128); g.fillStyle = `rgba(255,220,160,.12)`; g.fillRect(x + 2, 0, 4, 128) }
  for (let k = 0; k < 160; k++) { g.strokeStyle = `rgba(80,40,15,${Math.random() * 0.25})`; g.lineWidth = 1; const x = Math.random() * 256; g.beginPath(); g.moveTo(x, 0); g.lineTo(x + (Math.random() - 0.5) * 6, 128); g.stroke() }
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = THREE.RepeatWrapping; t.repeat.set(2, 1); return t
}

export function createBoat() {
  const root = new THREE.Group(), body = new THREE.Group(); root.add(body)
  // 桶（楕円）
  const prof = []; for (let i = 0; i <= 10; i++) { const t = i / 10; prof.push(new THREE.Vector2(0.62 + 0.18 * Math.sin(t * Math.PI * 0.9) - 0.05 * (1 - t), -0.28 + t * 0.78)) }
  const tubGeo = new THREE.LatheGeometry(prof, 28)
  const wood = new THREE.MeshStandardMaterial({ map: woodTexture(), roughness: 0.65, metalness: 0, side: THREE.DoubleSide, emissive: 0x3a2008, emissiveIntensity: 0.45 })
  const tub = new THREE.Mesh(tubGeo, wood); tub.scale.set(0.9, 1, 1.3); body.add(tub)
  const hoopM = new THREE.MeshStandardMaterial({ color: 0x6b7a86, roughness: 0.35, metalness: 0.8 })
  for (const y of [-0.05, 0.36]) { const h = new THREE.Mesh(new THREE.TorusGeometry(0.76 + (y < 0 ? 0.01 : 0.02), 0.03, 8, 40), hoopM); h.rotation.x = Math.PI / 2; h.position.y = y; h.scale.set(0.9, 1.3, 1); body.add(h) }
  const rim = new THREE.Mesh(new THREE.TorusGeometry(0.74, 0.05, 8, 40), wood); rim.rotation.x = Math.PI / 2; rim.position.y = 0.5; rim.scale.set(0.9, 1.3, 1); body.add(rim)
  const inner = new THREE.Mesh(new THREE.CircleGeometry(0.62, 24), new THREE.MeshStandardMaterial({ color: 0x5a3a20, roughness: 0.9 })); inner.rotation.x = -Math.PI / 2; inner.position.y = 0.0; inner.scale.set(0.9, 1.3, 1); body.add(inner)
  // カワウソ
  const fur = new THREE.MeshStandardMaterial({ color: 0x93653f, roughness: 0.85, emissive: 0x4a2c16, emissiveIntensity: 0.7 })
  const belly = new THREE.MeshStandardMaterial({ color: 0xd6b48a, roughness: 0.9, emissive: 0x6a5238, emissiveIntensity: 0.4 })
  const dark = new THREE.MeshStandardMaterial({ color: 0x16100c, roughness: 0.4 })
  const otter = new THREE.Group(); otter.position.set(0, 0.2, 0.05); body.add(otter)
  const torso = new THREE.Mesh(new THREE.SphereGeometry(0.42, 20, 14), fur); torso.scale.set(0.95, 1.1, 1.0); torso.position.y = 0.4; otter.add(torso)
  const bel = new THREE.Mesh(new THREE.SphereGeometry(0.33, 16, 12), belly); bel.scale.set(0.9, 1.0, 0.6); bel.position.set(0, 0.38, 0.22); otter.add(bel)
  const head = new THREE.Group(); head.position.set(0, 0.98, 0.1); otter.add(head)
  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.34, 22, 16), fur); skull.scale.set(1.05, 0.92, 1); head.add(skull)
  const muzzle = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 12), belly); muzzle.scale.set(1.15, 0.8, 1.0); muzzle.position.set(0, -0.07, 0.27); head.add(muzzle)
  const nose = new THREE.Mesh(new THREE.SphereGeometry(0.07, 10, 8), dark); nose.scale.set(1.3, 0.85, 1); nose.position.set(0, 0.0, 0.45); head.add(nose)
  for (const s of [-1, 1]) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.058, 12, 10), dark); eye.position.set(s * 0.15, 0.07, 0.3); head.add(eye)
    const hl = new THREE.Mesh(new THREE.SphereGeometry(0.02, 6, 6), new THREE.MeshBasicMaterial({ color: 0xffffff })); hl.position.set(s * 0.15 + 0.015, 0.095, 0.345); head.add(hl)
    const ear = new THREE.Mesh(new THREE.SphereGeometry(0.075, 10, 8), fur); ear.position.set(s * 0.25, 0.27, -0.02); ear.scale.set(1, 0.8, 0.7); head.add(ear)
    const paw = new THREE.Mesh(new THREE.CapsuleGeometry(0.075, 0.28, 6, 10), fur); paw.position.set(s * 0.52, 0.38, 0.28); paw.rotation.set(0.9, 0, s * 0.35); otter.add(paw)
    for (const w of [-1, 1]) { const wh = new THREE.Mesh(new THREE.CylinderGeometry(0.004, 0.004, 0.3, 4), new THREE.MeshBasicMaterial({ color: 0xf4eadb })); wh.position.set(s * 0.22, -0.06 + w * 0.025, 0.4); wh.rotation.z = Math.PI / 2 + w * 0.12 + 0; head.add(wh) }
  }
  // しっぽ
  const tail = new THREE.Group(); tail.position.set(0, 0.28, -0.4); otter.add(tail)
  const tailM = new THREE.Mesh(new THREE.CapsuleGeometry(0.1, 0.62, 6, 12), fur); tailM.rotation.x = Math.PI / 2 + 0.4; tailM.position.set(0, 0.0, -0.4); tail.add(tailM)
  // 赤いマフラー（後ろへなびく。形は毎フレーム動かす）
  const SCW = 0.3, SEG = 14
  const scGeo = new THREE.PlaneGeometry(SCW, 2.6, 1, SEG)
  const scarf = new THREE.Mesh(scGeo, new THREE.MeshStandardMaterial({ color: 0xff5a3c, roughness: 0.7, side: THREE.DoubleSide, emissive: 0x401008, emissiveIntensity: 0.4 }))
  scarf.frustumCulled = false; head.add(scarf); scarf.position.set(0, -0.28, -0.05)
  const knot = new THREE.Mesh(new THREE.TorusGeometry(0.33, 0.07, 8, 24), scarf.material); knot.rotation.x = Math.PI / 2; knot.position.set(0, -0.3, 0.0); knot.scale.set(1.05, 0.95, 1); head.add(knot)
  // ランタン（船首）
  const lant = new THREE.Group(); lant.position.set(0, 0.62, 0.95); body.add(lant)
  const post = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.5, 6), hoopM); post.position.y = -0.1; lant.add(post)
  const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.14, 12, 10), new THREE.MeshBasicMaterial({ color: 0xffd890 })); lamp.position.y = 0.2; lant.add(lamp)
  const lg = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 10), new THREE.MeshBasicMaterial({ color: 0xffc060, transparent: true, opacity: 0.3, blending: THREE.AdditiveBlending, depthWrite: false })); lg.position.y = 0.2; lant.add(lg)
  // 接地影
  const sc = document.createElement('canvas'); sc.width = sc.height = 64; const sg = sc.getContext('2d'); const gr = sg.createRadialGradient(32, 32, 2, 32, 32, 32); gr.addColorStop(0, 'rgba(0,10,30,.55)'); gr.addColorStop(1, 'rgba(0,10,30,0)'); sg.fillStyle = gr; sg.fillRect(0, 0, 64, 64)
  const shadow = new THREE.Mesh(new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(sc), transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4 }))
  shadow.scale.set(2.3, 1, 3.0); shadow.renderOrder = 5
  const API = {
    root, body, shadow, head, tail, otter, scarf, lant,
    // t: 時間, speed: 速さ, lean: 横滑り(rad), pitch: 前後の傾き, scared: 0..1（怖がる顔の傾き）
    animate(t, speed, lean, pitch, scared, brake) {
      body.rotation.z = THREE.MathUtils.lerp(body.rotation.z, -lean * 0.55, 0.2)
      body.rotation.x = THREE.MathUtils.lerp(body.rotation.x, pitch + brake * 0.12, 0.2)
      otter.rotation.z = -lean * 0.4
      head.rotation.x = -0.12 - scared * 0.25 + Math.sin(t * 8) * 0.01 * speed * 0.1
      head.rotation.z = lean * 0.3
      tail.rotation.y = Math.sin(t * 6) * 0.25 + lean * 0.8
      // マフラー: 後ろへ。速いほど真っ直ぐ、横滑りで流される
      const p = scGeo.attributes.position, ext = 0.9 + Math.min(1, speed / 28) * 1.7
      for (let i = 0; i <= SEG; i++) {
        const k = i / SEG, z = -k * ext, wave = Math.sin(t * 14 - k * 9) * 0.14 * k * (0.4 + speed / 30) + lean * 0.9 * k * k, y = -k * 0.22 + Math.sin(t * 9 - k * 6) * 0.06 * k
        for (let j = 0; j < 2; j++) { const o = i * 2 + j; p.setXYZ(o, (j ? 1 : -1) * SCW / 2 + wave, y, z) }
      }
      p.needsUpdate = true
    },
  }
  return API
}
