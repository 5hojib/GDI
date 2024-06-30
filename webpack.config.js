const path = require('path');

module.exports = {
  entry: './src/worker.js', // Adjust the path as per your actual file structure
  output: {
    filename: 'worker.js', // Output file name
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