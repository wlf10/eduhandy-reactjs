const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "app.js"
  },
  resolve: {
    alias: {
      components: path.join(__dirname, 'src/components'),
      routers: path.join(__dirname, 'src/routers'),
      store: path.join(__dirname, 'src/store'),
      styles: path.join(__dirname, 'src/styles'),
    },
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};