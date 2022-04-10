import { build } from 'esbuild'
import esbuildSvelte from 'esbuild-svelte'
import sveltePreprocess from 'svelte-preprocess'

build({
  entryPoints: ['./src/index.ts'],
  outdir: './dist',
  bundle: true,
  plugins: [
    esbuildSvelte({
      preprocess: sveltePreprocess(),
    }),
  ],
  sourcemap: 'inline',
})
  .then(() => {
    console.log('')
    console.log('----------------- esbuild completed -----------------')
    console.log('')
  })
  // スタックトレースが邪魔なので非表示にする
  .catch(() => {})
