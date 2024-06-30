const path = require('path');

module.exports = {
  entry: {
    worker: './src/worker.js',
    app: './src/app.js', // Add your app.js entry point
  },
  output: {
    filename: '[name].js', // Output file name based on entry point name
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  mode: 'production', // Set the mode to 'production' or 'development'
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
  target: 'webworker', // Ensures the output is compatible with Cloudflare Workers
};