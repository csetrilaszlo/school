const path = require('path');

module.exports = {
  entry: ['./src/index.js', './src/utils/handleLogin.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  // module: {
  //     rules : [
  //         { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }
  //     ]
  // },
  mode: "development",
};