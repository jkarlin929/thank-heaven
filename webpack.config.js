const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');


const config = {
  entry: [
    './src/index.js'

  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/
      },
      // {
      //   use: ExtractTextWebpackPlugin.extract({
      //     use: 'css-loader'
      //   }),
      //   test: /\.css$/
      // },
      {
        test:/\.(s*)css$/,
        use: ExtractTextWebpackPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader']
        })
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
            loader: 'url-loader',
            options: {
                limit: 8000, // Convert images < 8kb to base64 strings
                name: 'images/[hash]-[name].[ext]'
            }
        }]
      }
    ]
  },
  plugins: [
  new ExtractTextWebpackPlugin('style.css')
  ]
};

module.exports = config
