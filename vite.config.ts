import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  root: __dirname,
  build: {
    outDir: 'dist', // https://vitejs.dev/config/build-options.html#build-outdir
    assetsDir: 'build', // relatif au précédent, cf https://vitejs.dev/config/build-options.html#build-assetsdir
    target: 'modules' // https://vitejs.dev/config/build-options.html#build-target
  },
  // better to pick up our aliases from tsconfig (instead of duplicate aliases here, using resolve option)
  plugins: [
    tsconfigPaths()
  ],
  server: {
    open: true
  }
})
