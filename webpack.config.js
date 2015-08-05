//import path from 'path';
var path = require('path');

module.exports = {

  //context: __dirname + "/es6",

  entry: "./es6/app.js",

  output: {
    path    : "./es6/build",
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test  : /\.css$/,
        loader: "style!css"
      },
      {
        test  : /\.js$/,
        loader: 'babel-loader'
      }
    ],

    resolve: {
      extensions: ['.js', '.css']
    }
  }
};
