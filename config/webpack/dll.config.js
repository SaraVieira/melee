const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const NyanProgressPlugin = require('nyan-progress-webpack-plugin');
const pkg = require('../../package.json');
const clientConfig = require('./client.config');

const dir = {
  TMP: path.resolve('./.tmp'),
};

// ifNotMatches :: Array String => String => Boolean
const ifNotMatches = list => entry => (list.indexOf(entry) === -1);

module.exports = () => ({
  entry: {
    vendors: Object
      .keys(pkg.dependencies)
      .filter(ifNotMatches(['express'])),
  },
  output: {
    filename: '[name].DllBundle.js',
    path: dir.TMP,
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
  plugins: [
    new NyanProgressPlugin({ }),
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(dir.TMP, '[name].manifest.json'),
    }),
    new ExtractTextPlugin({
      filename: 'styles.[hash].css',
      allChunks: true,
      disable: true,
    }),
  ],
  module: clientConfig().module,
  performance: { hints: false },
  profile: false,
  stats: 'errors-only',
  bail: true,
  cache: true,

});
