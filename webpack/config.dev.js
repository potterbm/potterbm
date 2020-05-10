const path = require('path');
const base = require('./config.base');

const rootPath = path.resolve(__dirname, '../');

const config = {
  ...base,

  entry: ['react-hot-loader/patch', ...base.entry],

  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    contentBase: [path.resolve(rootPath, './dist'), path.resolve(rootPath, './public')],
    contentBasePublicPath: ['/dist', '/'],
    index: path.resolve(rootPath, './public/index.html'),
    historyApiFallback: true,
    hot: true,
    port: 3000,
    proxy: {
      path: '^/dist',
      target: 'http://localhost:3001',
    },
  },
};

module.exports = config;
