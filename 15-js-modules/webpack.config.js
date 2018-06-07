const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

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
    }),
    new HtmlWebpackPlugin({template: './index.html'})
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  }
};