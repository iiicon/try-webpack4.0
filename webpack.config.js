var webpack = require('webpack')
var cleanWebpackPlugin = require('clean-webpack-plugin')
var path = require('path')

module.exports = {
  entry: {
    pagea: './src/pagea.js',
    pageb: './src/pageb.js'
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js'
  },
  optimization: {
    minimize: false,
    occurrenceOrder: true,
    splitChunks: {
      name: true,
      cacheGroups: {
        default: false,
        commons: {
          name: 'common',
          chunks: 'initial',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0
        },
        asyncommon: {
          name: 'async-common',
          minChunks: 2,
          chunks: 'async',
          maxInitialRequests: 5,
          minSize: 0
        },
        vendors: {
          chunks: 'initial',
          test: /node_modules/,
          priority: 10,
          enforce: true
        }
      }
    }
  },
  plugins: [
    new cleanWebpackPlugin('dist'),

    new webpack.ProvidePlugin({
      $: 'jquery'
    })
  ],
  resolve: {
    alias: {
      jquery$: path.resolve(__dirname, './src/js/jquery.js')
    }
  }
}
