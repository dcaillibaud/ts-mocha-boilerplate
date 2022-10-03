ts-mocha-boilerplate
====================

This repo is a little reproduction repo to illustrate [ts-mocha issue #74](https://github.com/piotrwitek/ts-mocha/issues/74#issuecomment-1111789872)

Aliasing of 'lib/*' to 'src/lib' is ok for the vite build, but I didn't find how to setup this alias in mocha config (or tsconfig ?).

I made a lot of tries in tsconfig without success.

Renaming `test/main.test.js` into `test/main.test.ts` doesn't works (=> "No test files found", and running explicitly `ts-mocha -p tsconfig.json --paths test/main.test.ts` throw an Unknown file extension ".ts" error), but it's not an alias related pb, let's see this later.

Others tests
------------

1) without ts-mocha (with ts-node & tsconfig-paths)

in package.json
```json
  "mocha": {
    "require": [
      "ts-node/register",
      "tsconfig-paths/register"
    ],
    "recursive": true,
    "reporter": "spec",
    "extensions": ["js", "ts"]
  }
```
then `mocha test/main.test.js` => `Error: Cannot find package 'lib' imported from /{absRootDir}/test/main.test.js
Did you mean to import lib/counter.ts?`

2) with manual run in `test/init.js`

```js
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

const mocha = new Mocha({loader: 'ts-node/esm'});
mocha.addFile(resolve(__dirname, 'main.test.js'))
mocha.run((failures) => {
  process.on('exit', () => {
    process.exit(failures) // exit with non-zero status if there were failures
  })
})
```
running `node test/init.js` throws `require() of ES Module /{absRootDir}/test/main.test.js from /{absRootDir}/node_modules/.pnpm/mocha@10.0.0/node_modules/mocha/lib/mocha.js not supported.`
(adding `loader: "ts-node/esm"` doesn't solve this pb)

3) with a specific `tsconfig.test.json` (with cjs as compilerOptions), running `TS_NODE_PROJECT=tsconfig.test.json mocha test/main.test.js` also throws `Cannot find package 'lib' imported from /{absRootDir}/test/main.test.js`
