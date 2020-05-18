const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: "file-loader",
        options: {
          outputPath: 'images',
          publicPath: 'dist/images',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          { 
            loader: 'css-loader', 
            options: { 
              importLoaders: 1 
            } 
          },
          'postcss-loader',
          'sass-loader',
        ]
      }
    ]
  },
  plugins: [
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: 3000,
    })
  ]
};