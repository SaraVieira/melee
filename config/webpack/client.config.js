const path = require('path');
const webpack = require('webpack');
const config = require('config');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const HappyPack = require('happypack');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const StatsWriterPlugin = require('webpack-stats-plugin').StatsWriterPlugin;
const happyThreadPool = require('./happypack/threadPool');

const toBoolean = x => {
  if (x === 'true') {
    return true;
  }
  if (x === 'false') {
    return false;
  }
  return Boolean(x);
};

const dir = {
  SOURCE: path.resolve(__dirname, '../../src'),
  BUILD: path.resolve(__dirname, '../../build'),
  TMP: path.resolve(__dirname, '../../.tmp'),
  REPORTS: path.resolve(__dirname, '../../reports'),
};

module.exports = (opts = { optimize: false }) => {
  const options = Object.assign({}, opts, {
    optimize: toBoolean(opts.optimize) || process.env.NODE_ENV === 'production',
  });

  return {
    name: 'client',
    entry: {
      main: [
        !options.optimize && 'react-hot-loader/patch',
        !options.optimize && 'webpack-hot-middleware/client',
        path.resolve(dir.SOURCE, 'entry-client.jsx'),
      ].filter(Boolean),
    },

    output: {
      filename: options.optimize ? '[name].[hash].js' : '[name].js',
      path: dir.BUILD,
      publicPath: config.get('publicPath'),
    },

    recordsPath: path.join(dir.BUILD, 'client.recordsPath.json'),

    resolve: {
      extensions: ['.js', '.jsx', '.json', '.css'],
    },

    plugins: [
      !options.optimize && new webpack.HotModuleReplacementPlugin(),
      !options.optimize && new webpack.NamedModulesPlugin(),
      !options.optimize && new webpack.NoEmitOnErrorsPlugin(),
      !options.optimize &&
        new webpack.DllReferencePlugin({
          context: process.cwd(),
          manifest: path.join(dir.BUILD, 'vendors.dll.manifest.json'),
        }),
      new CircularDependencyPlugin({ failOnError: options.optimize }),
      new CaseSensitivePathsPlugin(),
      new webpack.ContextReplacementPlugin(/moment[\\/]locale$/, /^\.\/(en)$/),
      new HappyPack({
        id: 'js',
        loaders: [
          {
            loader: 'babel-loader',
            options: { cacheDirectory: path.join(dir.TMP, 'babel') },
          },
        ],
        threadPool: happyThreadPool,
        tempDir: path.resolve(dir.TMP, 'happypack/js'),
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
        threadPool: happyThreadPool,
        tempDir: path.resolve(dir.TMP, 'happypack/css'),
      }),
      new webpack.DefinePlugin({
        'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) },
        ENVIRONMENT: process.env.ENVIRONMENT || 'development',
        DEVELOPMENT: !options.optimize,
      }),
      new ExtractTextPlugin({
        filename: '[name].[chunkhash].css',
        allChunks: true,
        disable: !options.optimize,
      }),
      options.optimize && new LodashModuleReplacementPlugin(),
      options.optimize &&
        new webpack.optimize.CommonsChunkPlugin({
          name: 'vendors',
          filename: options.optimize
            ? 'chunk.[name].[hash].js'
            : 'chunk.[name].js',
          minChunks: module => /node_modules/.test(module.resource),
        }),
      options.optimize &&
        new webpack.optimize.UglifyJsPlugin({
          sourceMap: true,
          compress: {
            screw_ie8: true, // React doesn't support IE8
            warnings: false,
            global_defs: { DEVELOPMENT: !options.optimize },
          },
          mangle: { screw_ie8: true },
          output: { comments: false, screw_ie8: true },
        }),

      options.optimize &&
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: path.resolve(dir.REPORTS, 'bundle/index.html'),
          openAnalyzer: false,
        }),

      new StatsWriterPlugin({ filename: 'client.manifest.json' }),
    ].filter(Boolean),

    module: {
      rules: [
        {
          test: /\.json$/,
          loader: 'json-loader',
        },
        { test: /\.jsx?$/, loader: 'happypack/loader?id=js' },
        { test: /\.svg$/, loader: 'file-loader', issuer: /\.css$/ },
        {
          test: /\.svg$/,
          loaders: ['babel-loader', 'react-svg-loader'],
          issuer: /\.jsx?$/,
        },
        {
          test: /\.(jpe?g|png|gif)/,
          loader: 'url-loader',
          options: { limit: 10000 },
        },
        { test: /\.(eot|ttf|woff2?)/, loader: 'file-loader' },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['happypack/loader?id=css'],
          }),
        },
      ].filter(Boolean),
    },

    devtool: options.optimize ? 'source-map' : 'cheap-eval-source-map',

    cache: !options.optimize,

    bail: true,
  };
};
