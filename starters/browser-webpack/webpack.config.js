const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  output: {
    publicPath: '/',
  },
  devServer: {
    stats: 'errors-only',
    host: process.env.HOST,
    port: process.env.PORT,
    open: true,
    overlay: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Todo App',
      template: 'public/index.html',
    }),
  ],
  module: {
    rules: [
      // CSS
      {
        test: /\.css$/,
        include: path.resolve('./src/styles/main.css'),
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
