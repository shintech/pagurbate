const webpack = require('webpack')
const path = require('path')

const paths = {
  ENTRY: path.join(__dirname, 'app', 'main.js'),
  OUTPUT_FILENAME: 'bundle.js',
  OUTPUT: path.join(__dirname, 'build', 'static'),
  APP: path.join(__dirname, 'app')
}

module.exports = {
  entry: [
    paths.ENTRY
  ],
  resolve: {
    alias: {
      'marionette': 'backbone.marionette',
      'underscor': 'lodash'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        include: paths.APP,
        exclude: [/node_modules/, path.join(__dirname, 'build'), paths.OUTPUT],
        loaders: ['babel-loader', 'standard-loader']
      },
      { test: /\.html/, include: path.join(paths.APP, 'templates'), loader: 'underscore-template-loader' }
    ]
  },
  output: {
    filename: paths.OUTPUT_FILENAME,
    path: paths.OUTPUT,
    chunkFilename: '[id].js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      _: 'lodash'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}
