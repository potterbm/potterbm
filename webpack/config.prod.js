const path = require('path');
const base = require('./config.base');

const rootPath = path.resolve(__dirname, '../');

const config = {
  ...base,

  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    contentBase: path.join(rootPath, 'dist'),
    port: 3000,
    publicPath: '/dist',
  },
};

module.exports = config;
