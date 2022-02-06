const path = require('path');
const isProduction = process.argv[process.argv.indexOf('--mode') + 1] === 'production';
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: isProduction ? 'https://qatihc.github.io/pomodoro/' : '/'
  },
  entry: './src/index.js',
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    alias: {
      react: path.join(__dirname, 'node_modules', 'react'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          }
        ],
      },
      {
        test: /\.(woff2?|jpe?g|png|gif|ico|mp3)$/, 
        use: 'file-loader?name=./assets/[name].[ext]'
      }
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      favicon: "./src/favicon.ico"
    }),
  ],
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
  }
};
