const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const path = require('path');
 
module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: './sw.bundle.js',
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/api-gunung.vercel.app\//,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'Gunungs',
            cacheableResponse: {
              statuses: [200],
            },
          },
        },
        {
          urlPattern: /^https:\/\/foto-gunung.vercel.app\//,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'img',
            cacheableResponse: {
              statuses: [200],
            },
          },
        },
        {
          urlPattern: /^https:\/\/foto-gunung.vercel.app\//,
          handler: 'CacheFirst',
          options: {
            cacheName: 'IMAGE-CACHE',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 30 * 24 * 60 * 60,
            },
          },
        },
      ],
    }),
  ],
};