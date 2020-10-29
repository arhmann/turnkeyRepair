const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/js/main.js',
    admin: './src/js/admin.js'
  },
  output: {
    path: path.resolve(__dirname, './assets/dist'),
    filename: './js/[name].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      // include: path.resolve(__dirname, 'js'),
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        }
      }
    }
    ]
  },
  performance: {
    hints: false
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new webpack.IgnorePlugin(/\.\/locale$/)
  ],
  mode: 'development'
};