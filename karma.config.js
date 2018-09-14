'use strict'; // eslint-disable-line
process.env.BABEL_ENV = 'test';

const webpackConfig = require('./webpack.config');

webpackConfig.output.path = './tmp/build';

module.exports = function(config) {
  config.set({
    plugins: ['karma-webpack'],
    // list of files / patterns to load in the browser
    webpack: webpackConfig,
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'index.js': ['webpack']
    }
  });
};
