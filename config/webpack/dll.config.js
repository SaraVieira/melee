const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const NyanProgressPlugin = require('nyan-progress-webpack-plugin');
const clientConfig = require('./client.config');

const dir = {
  BUILD: path.resolve(__dirname, '../../build'),
  TMP: path.resolve(__dirname, '../../.tmp'),
};

module.exports = () => ({
  entry: {
    vendors: clientConfig().entry.vendors,
  },
  output: {
    filename: '[name].DllBundle.js',
    path: dir.TMP,
    libraryTarget: 'commonjs2',
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
