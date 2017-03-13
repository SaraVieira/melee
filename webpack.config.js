const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const toBoolean = x =>
  x === 'true' ? true :
  x === 'false' ? false :
  Boolean(x);

const dir = {
  SOURCE: path.resolve('./src'),
  BUILD: path.resolve('./build')
};

module.exports = (opts) => {

  const options = Object.assign({}, opts, {
    env: process.env.NODE_ENV || 'development',
    optimize: toBoolean(opts.optimize)
  });

  return {

    entry: {
      vendors: [
        'react',
        'lodash',
        'react-router',
        'babel-polyfill'
      ],
      main: [
        './src/index.js',
      ]
    },

    output: {
      filename: '[name].[hash].js',
      path: dir.BUILD
    },

    resolve: {
      extensions: ['.js', '.jsx']
    },

    plugins: [
      !options.optimize && new webpack.NamedModulesPlugin(),
      options.optimize && new webpack.NoEmitOnErrorsPlugin(),
      new CleanWebpackPlugin(['build']),
      new CaseSensitivePathsPlugin(),
      new webpack.DefinePlugin({
        'process.env': { 'NODE_ENV': JSON.stringify(options.env) },
        'PRODUCTION': options.optimize
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors',
        filename: '[name].[hash].js',
        minChunks: Infinity,
      }),
      new ExtractTextPlugin({
        filename: 'style.[chunkhash].css',
        allChunks: true,
        disable: !options.optimize
      }),
      options.optimize && new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true, // React doesn't support IE8
          warnings: false,
          global_defs: { PRODUCTION: options.optimize }
        },
        mangle: { screw_ie8: true },
        output: {
          comments: false,
          screw_ie8: true
        }
      }),
    ].filter(Boolean),

    module:{
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          include: dir.SOURCE,
          options: { cacheDirectory: true }
        },
        {
          test: /\.(css|less)?$/,
          include: dir.SOURCE,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {}
              },
              { loader: 'postcss-loader'}
            ]
          })
        },
      ].filter(Boolean)
    },

    devtool: options.optimize ?
      'source-map' :
      'cheap-eval-source-map',

    cache: true,

    bail: true
  };
};
