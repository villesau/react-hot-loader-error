'use strict'; // eslint-disable-line

module.exports = {
  entry: {
    app_build: './a.js'
  },
  output: {
    publicPath: '/app/',
    filename: '[name].js',
    pathinfo: false
  },
  stats: {
    colors: false,
    modules: true,
    reasons: true
  },
  watch: false,
  devtool: '#source-map',
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              cacheDirectory: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: []
  }
};
