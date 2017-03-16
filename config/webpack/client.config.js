const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const AssetsWebpackPlugin = require('assets-webpack-plugin');

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

    entry: {

      // vendors: [],

      main: [
        !options.optimize && 'react-hot-loader/patch',
        path.resolve(dir.SOURCE, 'entry-client.jsx'),
      ].filter(Boolean),

    },

    output: {
      filename: options.optimize ? '[name].[hash].js' : '[name].js',
      path: dir.BUILD,
      publicPath: '/assets/',
    },

    resolve: {
      extensions: ['.js', '.jsx', '.json', '.css'],
    },

    plugins: [
      !options.optimize && new webpack.HotModuleReplacementPlugin(),
      !options.optimize && new webpack.NamedModulesPlugin(),
      !options.optimize && new webpack.NoEmitOnErrorsPlugin(),
      new CircularDependencyPlugin({ failOnError: options.optimize }),
      new CaseSensitivePathsPlugin(),
      new webpack.DefinePlugin({
        'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) },
        ENVIRONMENT: process.env.ENVIRONMENT || 'development',
        DEVELOPMENT: !options.optimize,
      }),
      options.optimize && new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors',
        filename: options.optimize ? 'chunk.[name].[hash].js' : 'chunk.[name].js',
        minChunks: Infinity,
      }),
      !options.optimize && new webpack.DllReferencePlugin({
        context: process.cwd(),
        manifest: path.join(dir.TMP, 'vendors.manifest.json'),
      }),
      new ExtractTextPlugin({
        filename: 'styles.[hash].css',
        allChunks: true,
        disable: !options.optimize,
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
      options.optimize && new AssetsWebpackPlugin({
        filename: 'client.manifest.json',
        path: dir.BUILD,
        includeManifest: 'manifest',
        prettyPrint: true,
      }),
    ].filter(Boolean),

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          options: { cacheDirectory: path.join(dir.TMP, 'babel') },
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
