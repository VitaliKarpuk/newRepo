const webpack = require('webpack');
const merge = require('webpack-merge')
const common = require('./webpack.common.config')
const devWebpackConfig = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      port: 8081,
      hot: true,
      contentBase: './dist',
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ]
}
module.exports = merge(common, devWebpackConfig);