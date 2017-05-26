const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const NyanProgressPlugin = require('nyan-progress-webpack-plugin');
const HappyPack = require('happypack');
const happyThreadPool = require('./happypack/threadPool');
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
    new NyanProgressPlugin({ restoreCursorPosition: true }),
    new webpack.ContextReplacementPlugin(/moment[\\/]locale$/, /^\.\/(en)$/),
    new HappyPack({
      id: 'js',
      loaders: [
        {
          loader: 'babel-loader',
          options: { cacheDirectory: path.join(dir.TMP, 'babel') },
        },
      ],
      tempDir: path.resolve(dir.TMP, 'happypack'),
      threadPool: happyThreadPool,
    }),
    new HappyPack({
      id: 'css',
      loaders: [
        {
          loader: 'css-loader',
          options: {
            modules: true,
            camelCase: true,
            sourceMaps: true,
            importLoaders: 1,
            localIdentName: '[local]-[hash:base64:5]',
          },
        },
        { loader: 'postcss-loader' },
      ],
      tempDir: path.resolve(dir.TMP, 'happypack/css'),
      threadPool: happyThreadPool,
    }),
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(dir.BUILD, '[name].dll.manifest.json'),
    }),
    new ExtractTextPlugin({
      filename: '[name].[chunkhash].css',
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
