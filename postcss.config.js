/* eslint-disable global-require */

module.exports = webpack => ({
  plugins: [
    require('postcss-smart-import')({ addDependencyTo: webpack }),
    require('postcss-cssnext')(),
  ],
});
