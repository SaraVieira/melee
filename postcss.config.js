const smartImport = require('postcss-smart-import');
const lessVars = require('postcss-less-vars');
const cssNext = require('postcss-cssnext')({ /* ...options */ });
const nested = require('postcss-nested');

module.exports = {
  plugins: [
    smartImport,
    lessVars,
    cssNext,
    nested
  ]
};
