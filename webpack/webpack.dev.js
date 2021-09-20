const path = require('path');
const rootDir = process.cwd();
const webpackBaseConfig = require('./base.config');

module.exports = Object.assign({}, webpackBaseConfig, {
  mode: 'development',
  output: {
    path: path.join(rootDir, 'dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  devServer: {
    port: 9000,
    static: {
      directory: path.join(rootDir, 'public'),
      staticOptions: {},
    },
    devMiddleware: {
      stats: 'minimal',
    }
  },
  optimization: {
    minimize: false,
  },
  devtool: 'eval-source-map'
});
