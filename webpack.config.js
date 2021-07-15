const path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'myBundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: 
      }
    ]
  }
  devServer: {
    before: function(src, server){
      server.__watch('./src/*.html')
    },
    contentBase: path.join(__dirname, 'src'),
    hot: true,
    port: 3000,
  },


}