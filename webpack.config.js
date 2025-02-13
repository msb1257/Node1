const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './public/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  target: 'web',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: 'body',
    }),
  ],
  externals: [webpackNodeExternals()], // Don't bundle node_modules for server-side code
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 8080,
    open: true,
    hot: true,
  },
};

