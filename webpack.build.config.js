const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.common.config')
const buildWebpackConfig = {
    mode: 'production',
}
module.exports = merge(baseWebpackConfig,buildWebpackConfig);