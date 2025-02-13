const { override, babelInclude } = require('customize-cra')
const path = require('path')

module.exports = override(
  babelInclude([
    path.resolve('src'),        // make sure you link your own source
    path.resolve('../../libs'),  // your shared module to transpile
  ]),
)