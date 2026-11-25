// 指定秒だけ配信して自分で終わる（シミュレーター確認用）
import { spawn } from 'node:child_process'
const ROOT = new URL('..', import.meta.url).pathname
const s = spawn(process.execPath, ['server.mjs'], { cwd: ROOT, env: { ...process.env, PORT: process.argv[3] || '5612' } })
setTimeout(() => { s.kill(); process.exit(0) }, (+process.argv[2] || 240) * 1000)
