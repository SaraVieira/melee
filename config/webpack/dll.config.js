const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const NyanProgressPlugin = require('nyan-progress-webpack-plugin');
const HappyPack = require('happypack');
const clientConfig = require('./client.config');

const dir = {
  BUILD: path.resolve(__dirname, '../../build'),
  TMP: path.resolve(__dirname, '../../.tmp'),
};

module.exports = () => ({
  entry: {
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

  output: {
    filename: '[name].dll.js',
    path: dir.BUILD,
    library: 'vendors',
    libraryTarget: 'umd',
  },

  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css'],
  },

  plugins: [
    new NyanProgressPlugin({ }),
    new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(en)$/),
    new HappyPack({
      id: 'js',
      loaders: [{
        loader: 'babel-loader',
        options: { cacheDirectory: path.join(dir.TMP, 'babel') },
      }],
      tempDir: path.resolve(dir.TMP, 'happypack'),
      enabled: true,
    }),
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(dir.BUILD, '[name].dll.manifest.json'),
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
