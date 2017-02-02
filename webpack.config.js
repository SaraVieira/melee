module.exports = {
  entry: './index.js',
  output: {
    filename: '[name].[hash].js',
    path: './build'
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader' }
    ]
  }
}
