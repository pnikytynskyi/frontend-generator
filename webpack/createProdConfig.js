const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env, _paths) => ({
  devtool: 'source-map',
  output: {
    publicPath: env.APP_VERSION ? `/${env.APP_VERSION}/` : '/',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        options: {
          failOnWarning: true,
          failOnError: true,
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true,
    }),
  ],
});
