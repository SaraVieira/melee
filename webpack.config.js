const path = require('path');
const webpack = require('webpack');

module.exports = (options) => {

  const opts = Object.assign({},
    options,
    {env: process.env.ENVIRONMENT},
    {env: 'qa'}
  );

  const build = {
    optimize: process.env.NODE_ENV === 'production'
  }

  return {

    entry: './index.js',

    output: {
      filename: '[name].[hash].js',
      path: './build'
    },

    plugins: [
      build.optimize || new webpack.NamedModulesPlugin(),
      new webpack.DefinePlugin({
        'process.env' : process.env.NODE_ENV,
        environment: JSON.stringify(opts.env)
      })
    ],

    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          include: path.resolve('./src')
        }
      ]
    }
  }
};
