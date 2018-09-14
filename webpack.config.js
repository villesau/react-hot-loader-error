'use strict';

module.exports = {
  entry: {
    app_build: './a.js'
  },
  output: {
    publicPath: '/app/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
    modules: ['node_modules']
  }
};
