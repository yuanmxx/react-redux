const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({template: './index.html'})
  ],
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ['@babel/plugin-proposal-class-properties']
                }
            }
        },
    ]}
}