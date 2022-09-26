ts-mocha-boilerplate
====================

This repo is a little reproduction repo to illustrate [ts-mocha issue #74](https://github.com/piotrwitek/ts-mocha/issues/74#issuecomment-1111789872)

Aliasing of 'lib/*' to 'src/lib' is ok for the vite build, but I didn't find how to setup this alias in mocha config (or tsconfig ?).

I made a lot of tries in tsconfig without success.

Renaming `test/main.test.js` into `test/main.test.ts` doesn't works (=> "No test files found", and running explicitly `ts-mocha -p tsconfig.json --paths test/main.test.ts` throw an Unknown file extension ".ts" error), but it's not an alias related pb, let's see this later.
