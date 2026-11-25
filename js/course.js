// コース: 中心線の点列（1.5m間隔）を部品の並びから作る。three.js に依存しない（Node の bot も同じ物を読む）
// 向き th: 前向き f = (sin th, cos th)、左向き l = (cos th, -sin th)。左に曲がる = th が増える
export const DS = 1.5
export const SLOPE = 0.065               // くだりの傾き（m 進むごとに下がる m）
export const WORLD_NAMES = ['雲海の氷河', '溶鉄の川', '水晶の洞窟', 'オーロラの夜']
export const WORLD_NAMES_EN = ['Glacier above the clouds', 'River of molten iron', 'Crystal cave', 'Aurora night']

const S = (L, w) => ({ t: 'S', L, w })
const T = (deg, r, w) => ({ t: 'T', deg, r, w })
const D = (gap, dy, w) => ({ t: 'D', gap, dy, w })
const P = (L, w) => ({ t: 'P', L, w })        // 弾み台（着地するとバウンドする足場）
const G = () => ({ t: 'G' })
const C = () => ({ t: 'C' })
const F = () => ({ t: 'F' })
// 見せ場: 跳ぶ、弾み台に着地、バウンド、次の道。g1: 弾み台までの谷、g2: 弾み台から次の道までの谷
const J = (g1, dy1, pad, g2, dy2, w) => [D(g1, dy1, 6.6), P(pad, 6.6), D(g2, dy2, w)]

// 幅は全幅（m）。舟の幅は 1.4。ほぼ同じ幅の橋（1.9〜2.4）から広い所（6.4）まで
export const PIECES = [
  // ---- 世界1 雲海の氷河: 広めの道から始まり、最後に細い橋と3回の見せ場
  S(46, 6.4), C(), T(34, 70, 6.2), S(30, 6.2), T(-44, 62, 6.0), S(26, 6.0), T(52, 55, 5.8), S(26, 5.8),
  ...J(14, -12, 9, 22, -7, 5.8), S(36, 5.8), C(), T(-62, 46, 5.4), S(18, 5.4), T(70, 44, 5.2), T(-70, 44, 5.0),
  S(10, 2.8), S(42, 2.6), S(10, 5.4), T(54, 52, 5.4), S(22, 5.4),
  ...J(16, -14, 9, 24, -8, 5.4), S(34, 5.4), C(), T(-84, 40, 5.2), S(18, 5.2), T(40, 56, 5.0), S(14, 5.0),
  ...J(15, -13, 9, 22, -7, 5.0), S(30, 5.0), G(),
  // ---- 世界2 溶鉄の川: 曲がりが続く・ヘアピン・細い橋
  S(34, 5.0), T(-46, 50, 4.9), T(46, 50, 4.9), S(24, 4.8), T(-54, 44, 4.7), S(12, 3.2), S(34, 2.6), S(12, 4.6), C(), T(64, 40, 4.6),
  S(22, 4.6), ...J(16, -14, 9, 26, -8, 4.6), S(30, 4.6), T(-70, 38, 4.5), T(70, 38, 4.5), S(20, 4.5), T(-100, 34, 4.4),
  S(22, 4.4), C(), ...J(18, -16, 10, 26, -9, 4.4), S(24, 4.4), T(58, 42, 4.3), S(20, 4.3), T(-60, 40, 4.2), S(24, 4.2), T(90, 32, 4.2), S(22, 4.2), G(),
  // ---- 世界3 水晶の洞窟: 狭い通路・つづら折り・大きな空洞での見せ場
  S(26, 4.4), T(-52, 30, 4.2), T(48, 34, 4.2), T(-48, 34, 4.1), S(18, 4.1), T(64, 33, 4.0), S(14, 4.0), C(),
  ...J(16, -14, 9, 26, -8, 4.0), S(24, 4.0), T(-92, 31, 3.9), S(10, 2.8), S(30, 2.4), S(10, 3.8), T(60, 32, 3.8), T(-60, 32, 3.7), S(18, 3.7), C(),
  T(68, 32, 3.6), T(-68, 32, 3.6), S(14, 3.6), ...J(17, -15, 9, 26, -8, 3.6), S(22, 3.6), T(104, 30, 3.6), S(18, 3.6), T(-54, 34, 3.5), S(22, 3.5), G(),
  // ---- 世界4 オーロラの夜: いちばん細い・見せ場3回・長い曲がり
  S(28, 4.0), T(-60, 36, 3.8), S(14, 3.8), T(60, 36, 3.6), S(12, 2.6), S(34, 2.2), S(10, 3.8),
  ...J(16, -15, 9, 26, -8, 3.8), S(28, 3.8), C(), T(-80, 34, 3.6), T(70, 34, 3.5), S(16, 3.5),
  ...J(18, -17, 10, 27, -9, 3.5), S(28, 3.5), T(-90, 30, 3.4), S(10, 2.5), S(26, 2.2), S(8, 3.4), C(),
  T(56, 40, 3.3), T(-56, 40, 3.3), S(18, 3.3), ...J(17, -16, 9, 26, -8, 3.3), S(24, 3.3), T(110, 30, 3.2), S(16, 3.2), T(-70, 38, 3.2), S(24, 3.2), T(50, 52, 3.2), S(60, 3.2), F(),
  S(60, 14),
]

export function buildCourse() {
  const X = [], Z = [], Y = [], TH = [], W = [], SOL = [], WLD = [], PAD = []
  const gates = [], cps = [], marks = []
  let x = 0, z = 0, th = 0, y = 0, w = PIECES[0].w, world = 0, finishIdx = -1
  const push = (solid, pad = 0) => { PAD.push(pad); X.push(x); Z.push(z); Y.push(y); TH.push(th); W.push(w / 2); SOL.push(solid ? 1 : 0); WLD.push(world) }
  push(1)
  let pendingDrop = 0
  for (const p of PIECES) {
    if (p.t === 'G') { gates.push(X.length - 1); world++; WLD[WLD.length - 1] = world - 1; continue }
    if (p.t === 'C') { cps.push(X.length - 1); continue }
    if (p.t === 'F') { finishIdx = X.length - 1; continue }
    const L = p.t === 'T' ? Math.abs(p.deg) * Math.PI / 180 * p.r : p.t === 'D' ? p.gap : p.L
    if (p.t === 'P') PAD[PAD.length - 1] = 1
    const n = Math.max(1, Math.round(L / DS)), w0 = w, w1 = p.w
    const dth = p.t === 'T' ? Math.sign(p.deg) * (Math.abs(p.deg) * Math.PI / 180) / n : 0
    for (let i = 1; i <= n; i++) {
      const mid = th + dth * 0.5
      x += Math.sin(mid) * DS; z += Math.cos(mid) * DS; th += dth
      y -= SLOPE * DS
      const k = i / n; w = w0 + (w1 - w0) * k
      if (p.t === 'D' && i === n) { y += p.dy; push(1); marks.push({ at: X.length - 1, dy: p.dy }) }
      else push(p.t !== 'D', p.t === 'P' ? 1 : 0)
    }
    if (p.t === 'D') { /* 谷の向こう側の先頭は少し広い着地面 */ }
  }
  const n = X.length
  const dx = (i) => Math.sin(TH[i]), dz = (i) => Math.cos(TH[i])
  // 谷の手前の最後の固体点 / 谷のあとの最初の固体点
  const gaps = []
  for (let i = 1; i < n; i++) if (SOL[i - 1] && !SOL[i]) { let j = i; while (j < n && !SOL[j]) j++; gaps.push({ from: i - 1, to: j }) }
  // 世界の切り替わりは門の位置。門のあとが次の世界
  const worldAt = (i) => { let k = 0; for (const g of gates) if (i > g) k++; return k }
  for (let i = 0; i < n; i++) WLD[i] = worldAt(i)
  for (let i = 0; i < n; i++) if (WLD[i] === 2 && W[i] < 2.5) W[i] += 0.12   // 洞窟の細い橋だけ少し余裕
  for (let i = 0; i < n; i++) if (WLD[i] === 2) W[i] += 0.1
  // 区切り（復帰地点）: 先頭 + C + 各門のあと + 谷の着地後
  const cpList = [{ i: 4 }].concat(cps.map(i => ({ i }))).concat(gates.map(i => ({ i: i + 3 }))).sort((a, b) => a.i - b.i)
  return { n, X: Float32Array.from(X), Z: Float32Array.from(Z), Y: Float32Array.from(Y), TH: Float32Array.from(TH), W: Float32Array.from(W), SOL: Uint8Array.from(SOL), PAD: Uint8Array.from(PAD), WLD: Uint8Array.from(WLD), gates, cps: cpList.map(c => c.i), gaps, finishIdx, total: (n - 1) * DS, DS }
}
