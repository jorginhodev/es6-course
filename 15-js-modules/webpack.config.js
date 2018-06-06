const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    filename: './app.js'
  },
  output: {
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            ['es2015', { modules: false}]
          ]
        }
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true,
      uglifyOptions: {
        compress: { warnings: false },
        output: {
          comments: false
        },
      },
    })
  ]
};