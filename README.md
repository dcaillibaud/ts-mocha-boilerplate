ts-mocha-boilerplate
====================

This repo is a little reproduction repo to illustrate [ts-mocha issue #74](https://github.com/piotrwitek/ts-mocha/issues/74#issuecomment-1111789872)

Aliasing of 'lib/*' to 'src/lib' is ok for the vite build, but I didn't find how to setup this alias in mocha config (or tsconfig ?).

The branch `solved` show a working solution, either with [node subpath imports](https://nodejs.org/dist/latest/docs/api/packages.html#subpath-imports), or with the link protocol, but it's still broken when importing js file into a ts file (within this aliased lib directory) 
