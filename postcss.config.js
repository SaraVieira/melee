/* eslint-disable global-require */

module.exports = {
  plugins: [
    require('postcss-smart-import'),
    require('postcss-less-vars'),
    require('postcss-cssnext')(),
    require('postcss-nested'),
  ],
};
