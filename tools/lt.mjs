import { spawn, spawnSync } from 'node:child_process'
const ROOT = new URL('..', import.meta.url).pathname
const s = spawn(process.execPath, ['server.mjs'], { cwd: ROOT, env: { ...process.env, PORT: '5463' } })
await new Promise(r => setTimeout(r, 500))
const r = spawnSync(process.execPath, ['loadtime.mjs', 'http://localhost:5463/', 'window.__hkReady', '3'], { cwd: ROOT, encoding: 'utf8' })
console.log(r.stdout, r.stderr.slice(0, 500)); s.kill()
