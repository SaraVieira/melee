onst smartImport = require('postcss-smart-import');
const lessVars = require('postcss-less-vars');
const cssNext = require('postcss-cssnext')({ /* ...options */ });

module.exports = {
  plugins: [
    smartImport,
    lessVars,
    cssNext
  ]
};
