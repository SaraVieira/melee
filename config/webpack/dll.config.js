const path = require('path');
const webpack = require('webpack');
const NyanProgressPlugin = require('nyan-progress-webpack-plugin');
const pkg = require('../../package.json');

const dir = {
  TMP: path.resolve('./.tmp')
};

module.exports = (opts) => ({
  entry: {
    vendors: Object.keys(pkg.dependencies)
  },
  output: {
    filename: '[name].DllBundle.js',
    path: path.resolve('./build')
  },
  plugins: [
    new NyanProgressPlugin({ }),
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(dir.TMP, '[name].manifest.json')
    })
  ],
  performance: {
    hints: false
  },

  profile: false,
  stats: 'errors-only',
  bail: true,
  cache: true
});
