const path = require('path');

module.exports = {
  entry: './worker.js', // Entry point
  output: {
    filename: 'worker.js',
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  target: 'webworker', // Ensures compatibility with Cloudflare Workers
};