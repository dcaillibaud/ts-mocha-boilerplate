import { resolve } from 'path'
import { defineConfig } from 'vite'

const srcDir = resolve(__dirname, 'src')

export default defineConfig({
  root: __dirname,
  build: {
    outDir: 'dist', // https://vitejs.dev/config/build-options.html#build-outdir
    assetsDir: 'build', // relatif au précédent, cf https://vitejs.dev/config/build-options.html#build-assetsdir
    target: 'modules' // https://vitejs.dev/config/build-options.html#build-target
  },
  // cf https://vitejs.dev/config/shared-options.html#resolve-alias
  resolve: {
    alias: {
      lib: resolve(srcDir, 'lib'),
    }
  },
  server: {
    open: true
  }
})
