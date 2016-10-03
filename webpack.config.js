const path = require('path');

module.exports = {
  entry: [
    './client/src/index.js',
  ],
  output: {
    path: path.join(__dirname, '/client/build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
    },
    {
      exclude: /node_modules/,
      loader: 'eslint-loader',
    },
    ],
  },
  eslint: {
    configFile: './.eslintrc.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devServer: {
    contentBase: './',
  },
};

