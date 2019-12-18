const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const basePath = __dirname;

module.exports = {
  context: path.join(basePath, 'src'),
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  entry: ['@babel/polyfill', './index.tsx'],
  output: {
    path: path.join(basePath, 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    inline: true,
    host: 'localhost',
    port: 3000,
    stats: 'errors-only',
    proxy: {
      '**': 'http://localhost:4000/',
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
        options: {
          useBabel: true,
          babelCore: '@babel/core',
        },
      },
      {
        test: /\.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/img/[name].[ext]?[hash]',
          esModule: false,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', //Name of file in ./dist/
      template: '../public/index.html', //Name of template in ./src
      hash: true,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
