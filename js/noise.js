// 値ノイズ・fbm・乱数（地形や雲の形づくり用）
export function rng(seed) { let s = seed >>> 0 || 1; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296 } }
function h3(x, y, z) { let h = (x * 374761393 + y * 668265263 + z * 2147483647) | 0; h = (h ^ (h >>> 13)) * 1274126177 | 0; return ((h ^ (h >>> 16)) >>> 0) / 4294967296 }
const sm = t => t * t * (3 - 2 * t)
export function noise3(x, y, z) {
  const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z), xf = sm(x - xi), yf = sm(y - yi), zf = sm(z - zi)
  const l = (a, b, t) => a + (b - a) * t
  return l(l(l(h3(xi, yi, zi), h3(xi + 1, yi, zi), xf), l(h3(xi, yi + 1, zi), h3(xi + 1, yi + 1, zi), xf), yf),
    l(l(h3(xi, yi, zi + 1), h3(xi + 1, yi, zi + 1), xf), l(h3(xi, yi + 1, zi + 1), h3(xi + 1, yi + 1, zi + 1), xf), yf), zf)
}
export function fbm3(x, y, z, o = 4) { let a = 0.5, s = 0, f = 1; for (let i = 0; i < o; i++) { s += a * noise3(x * f, y * f, z * f); f *= 2.03; a *= 0.5 } return s }
