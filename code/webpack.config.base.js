const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  // relative path to source file
  entry: './src/index.js',

  // abs path to location of files
  output: {
    // __dirname is a global in NODE
    path: path.join(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },

  module: {
    rules: [
      // integrate babel into webpack for transpiling and down-shifting javascript through babel
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,

        // we can also pass in options presets, but it can be placed inside .bablerc file as well
        // options: {}
      },
      // transform css files through babel as well with these 2 loaders
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    // clean build folder
    new CleanWebpackPlugin(),
    // let webpack generate production HTML from our build step
    new HTMLWebpackPlugin({
      // provide a template that will be used to create the public/index.html file
      template: './src/index.html',
      favicon: 'favicon.ico',
    }),
    new CopyPlugin([
      {
        from: './public/images',
        to: 'images',
      },
    ]),
  ],
};
