const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
  entry: './js/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    clean: true,
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    open: true,
    watchFiles: 'index.html',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'keyboard',
      template: './index.html',
      inject: 'body',
    }),
    new MiniCssExtractPlugin({ filename: 'style.css' }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  devtool: 'source-map',
  mode: 'development',
  optimization: {
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
}
