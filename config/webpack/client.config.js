const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const HappyPack = require('happypack');
const StatsWriterPlugin = require('webpack-stats-plugin').StatsWriterPlugin;

const toBoolean = (x) => {
  if (x === 'true') { return true; }
  if (x === 'false') { return false; }
  return Boolean(x);
};

const dir = {
  SOURCE: path.resolve(__dirname, '../../src'),
  BUILD: path.resolve(__dirname, '../../build'),
  TMP: path.resolve(__dirname, '../../.tmp'),
};

module.exports = (opts = { optimize: false }) => {
  const options = Object.assign({}, opts, {
    optimize: toBoolean(opts.optimize) || process.env.NODE_ENV === 'production',
  });

  return {

    name: 'client',

    target: 'web',

    entry: Object.assign({}, (options.optimize ? {
      vendors: options.optimize && [
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
    } : {}), {
      main: [
        !options.optimize && 'react-hot-loader/patch',
        !options.optimize && 'webpack-hot-middleware/client',
        path.resolve(dir.SOURCE, 'entry-client.jsx'),
      ].filter(Boolean),
    }),

    output: {
      filename: options.optimize ? '[name].[hash].js' : '[name].js',
      path: dir.BUILD,
      publicPath: '/assets/',
    },

    recordsPath: path.join(dir.BUILD, 'client.recordsPath.json'),

    resolve: {
      extensions: ['.js', '.jsx', '.json', '.css'],
    },

    plugins: [
      !options.optimize && new webpack.HotModuleReplacementPlugin(),
      !options.optimize && new webpack.NamedModulesPlugin(),
      !options.optimize && new webpack.NoEmitOnErrorsPlugin(),
      !options.optimize && new webpack.DllReferencePlugin({
        context: process.cwd(),
        manifest: path.join(dir.BUILD, 'vendors.dll.manifest.json'),
      }),

      new CircularDependencyPlugin({ failOnError: options.optimize }),
      new CaseSensitivePathsPlugin(),
      new HappyPack({
        id: 'js',
        loaders: [{
          loader: 'babel-loader',
          options: { cacheDirectory: path.join(dir.TMP, 'babel') },
        }],
        tempDir: path.resolve(dir.TMP, 'happypack'),
        enabled: true,
      }),
      new webpack.DefinePlugin({
        'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) },
        ENVIRONMENT: process.env.ENVIRONMENT || 'development',
        DEVELOPMENT: !options.optimize,
      }),
      new ExtractTextPlugin({
        filename: 'styles.[hash].css',
        allChunks: true,
        disable: !options.optimize,
      }),

      options.optimize && new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors',
        filename: options.optimize ? 'chunk.[name].[hash].js' : 'chunk.[name].js',
        minChunks: Infinity,
      }),

      options.optimize && new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true, // React doesn't support IE8
          warnings: false,
          global_defs: { DEVELOPMENT: !options.optimize },
        },
        mangle: { screw_ie8: true },
        output: { comments: false, screw_ie8: true },
      }),

      new StatsWriterPlugin({
        filename: 'client.manifest.json',
      }),
    ].filter(Boolean),

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'happypack/loader?id=js',
        },
        {
          test: /\.svg$/,
          loaders: ['babel-loader', 'svg-react-loader'],
        },
        {
          test: /\.(jpe?g|png|gif)/,
          loader: 'url-loader',
          options: { limit: 10000 },
        },
        {
          test: /\.(css|less)?$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  camelCase: true,
                  sourceMaps: true,
                  localIdentName: '[local]-[hash:base64:5]',
                },
              },
              { loader: 'postcss-loader' },
            ],
          }),
        },
      ].filter(Boolean),
    },

    devtool: options.optimize ?
      'source-map' :
      'cheap-eval-source-map',

    cache: !options.optimize,

    bail: true,

  };
};
