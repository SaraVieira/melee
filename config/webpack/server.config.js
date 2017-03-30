const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const HappyPack = require('happypack');

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

    name: 'server',

    target: 'node',

    entry: {
      server: [
        path.resolve(dir.SOURCE, 'entry-server.jsx'),
      ].filter(Boolean),

    },

    output: {
      filename: '[name].js',
      path: dir.BUILD,
      libraryTarget: 'commonjs2',
      publicPath: '/assets/',
    },

    recordsPath: path.join(dir.BUILD, 'server.recordsPath.json'),

    resolve: {
      extensions: ['.js', '.jsx', '.json', '.css'],
    },

    plugins: [
      !options.optimize && new webpack.NamedModulesPlugin(),
      !options.optimize && new webpack.NoEmitOnErrorsPlugin(),
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
      }),

      // !options.optimize && new webpack.DllReferencePlugin({
      //   context: process.cwd(),
      //   manifest: path.join(dir.BUILD, 'vendors.dll.manifest.json'),
      // }),

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
