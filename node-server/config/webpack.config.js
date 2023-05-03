let path = require('path')
let nodeExternals = require('webpack-node-externals')
module.exports = {
  target: 'node',
  mode: 'development',
  entry: './src/server/index.js',
  output: {
    filename: 'server_bundle.js',
    path: path.resolve(__dirname, '../build/server')
  },
  externals: [nodeExternals()] // node环境
}
