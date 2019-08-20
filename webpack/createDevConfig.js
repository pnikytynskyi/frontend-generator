const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (_env, paths, port = 4000, devServerOptions = {}) => ({
  devtool: 'inline-source-map',
  devServer: {
    port,
    host: '0.0.0.0',
    disableHostCheck: true,
    contentBase: paths.outputPath,
    compress: true,
    hot: false,
    historyApiFallback: {
      disableDotRule: true,
    },
    ...devServerOptions,
  },
  plugins: [
    new CopyPlugin(
      [
        // NOTE:
        // For a real production deployment you must put the appropriate
        // configuration file directly to the wwwroot of the server and name
        // it 'config.js' somewhere in your CD script
        {
          from: paths.dynamicConfigSrc,
          to: paths.dynamicConfigDest,
        },
      ],
      { debug: 'info' },
    ),
    new webpack.HotModuleReplacementPlugin(),
  ],
});
