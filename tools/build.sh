#!/bin/sh
# js/ を three.js ごと1ファイルにまとめる（使わない部分は削る）。出力 dist/main.js。esbuild は mini-piyofit の物を借りる
cd "$(dirname "$0")/.." && ~/Desktop/claudecode/mini-piyofit/node_modules/.bin/esbuild js/main.js --bundle --minify --format=esm --target=safari14 --alias:three=./vendor/three.module.js --outfile=dist/main.js --legal-comments=none
