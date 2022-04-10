const { build } = require('esbuild')

build({
  entryPoints: ['./src/index.ts'],
  outdir: './dist',
  bundle: true,
  sourcemap: 'inline',
})
  .then(() => {
    console.log('')
    console.log('----------------- esbuild completed -----------------')
    console.log('')
  })
  // スタックトレースが邪魔なので非表示にする
  .catch(() => {})
