const path = require('path');

module.exports = {
  build: {
    publicPath: '/assets',
    output: path.resolve(__dirname, '../target/build'),
    reports: path.resolve(__dirname, '../target/reports'),
    vendors: [
      'babel-polyfill',
      'lodash',
      'react',
      'react-dom',
      'react-router',
      'react-router-dom',
      'redux',
      'tvg-conf',
      'tvg-mediator',
      'tvg-ui-bootstrap',
    ],
  },
};
