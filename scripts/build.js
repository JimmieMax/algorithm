require('esbuild').buildSync({
  entryPoints: [
  ],
  bundle: true,
  format: 'esm',
  splitting: true,
  minify: true,
  outdir: 'dist'
})