const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

const pkg = require('../../package.json');

const toBoolean = x =>
  x === 'true' ? true :
  x === 'false' ? false :
  Boolean(x);

const dir = {
  SOURCE: path.resolve('./src'),
  BUILD: path.resolve('./build'),
  TMP: path.resolve('./.tmp')
};

module.exports = (opts) => {

  const options = Object.assign({}, opts, {
    env: process.env.NODE_ENV || 'development',
    optimize: toBoolean(opts.optimize)
  });

  return {

    entry: {

      vendors: Object.keys(pkg.dependencies),

      main: [
        !options.optimize && 'react-hot-loader/patch',
        './src/index.js',
      ].filter(Boolean)

    },

    output: {
      filename: '[name].[hash].js',
      path: dir.BUILD
    },

    resolve: {
      extensions: ['.js', '.jsx']
    },

    plugins: [
      !options.optimize && new webpack.HotModuleReplacementPlugin(),
      !options.optimize && new webpack.NamedModulesPlugin(),
      !options.optimize && new webpack.NoEmitOnErrorsPlugin(),
      new CircularDependencyPlugin({ failOnError: options.optimize }),
      new CleanWebpackPlugin(['build']),
      new CaseSensitivePathsPlugin(),
      new webpack.DefinePlugin({
        'process.env': { 'NODE_ENV': JSON.stringify(options.env) },
        'PRODUCTION': options.optimize
      }),
      options.optimize && new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors',
        filename: '[name].[hash].js',
        minChunks: Infinity,
      }),
      !options.optimize && new webpack.DllReferencePlugin({
        context: process.cwd(),
        manifest: path.join(dir.TMP, 'vendors.manifest.json')
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
        output: { comments: false, screw_ie8: true }
      }),
    ].filter(Boolean),

    module:{
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          options: { cacheDirectory: true }
        },
        {
          test: /\.svg$/,
          loaders: ['babel-loader', 'svg-react-loader']
        },
        {
          test: /\.(jpe?g|png|gif)/,
          loader: 'url-loader',
          options: { limit: 10000 }
        },
        {
          test: /\.(css|less)?$/,
          include: dir.SOURCE,
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
                }
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
