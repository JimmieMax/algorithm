require('esbuild').buildSync({
  entryPoints: [
    'lib/algorithm/sorting/bubble-sort/bubbleSort.ts',
    'lib/algorithm/sorting/quick-sort/quickSort.ts',
    'lib/algorithm/sorting/select-sort/selectSort.ts',
    'lib/algorithm/sorting/insert-sort/insertSort.ts'
  ],
  bundle: true,
  format: 'esm',
  splitting: true,
  minify: true,
  outdir: 'dist'
})