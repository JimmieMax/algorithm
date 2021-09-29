require('esbuild').buildSync({
  entryPoints: ['lib/KML.ts'],
  bundle: true,
  minify: true,
  outdir: 'dist'
})
