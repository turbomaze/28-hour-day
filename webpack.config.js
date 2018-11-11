const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    'assets/js/bundle': './lib/index.js',
  },
  output: {
    path: path.join(__dirname, '/'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
