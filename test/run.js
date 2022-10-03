import tsNodeRegister from 'ts-node/register'
import tsConfigPaths from 'tsconfig-paths'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

import Mocha from 'mocha'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);
const srcDir = resolve(__dirname, 'src')

tsConfigPaths.register({
  baseUrl: srcDir,
  paths: {
    'lib/*': ['./lib/*']
  }
})

const mocha = new Mocha({ require: ['ts-node/register'], loader: 'ts-node/esm' });
mocha.addFile(resolve(__dirname, 'main.test.js'))
mocha.run((failures) => {
  // require() of ES Module … not supported.
  process.on('exit', () => {
    process.exit(failures) // exit with non-zero status if there were failures
  })
})
