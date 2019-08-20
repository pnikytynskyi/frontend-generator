const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HandlebarsPlugin = require('handlebars-webpack-plugin');

module.exports = (env, paths) => {
  plugins = env.WEBPACK_PLUGINS
    ? env.WEBPACK_PLUGINS
        .split(',')
        .filter(plugin => Boolean(plugin))
        .map(plugin => require(`./plugins/webpack.${plugin}`))
    : [];

  return {
    mode: env.NODE_ENV,
    entry: {
      main: [
        paths.indexJs,
      ],
    },
    output: {
      publicPath: '/',
      filename: '[name].js',
      path: paths.outputPath,
    },
    resolve: {
      alias: {
        config: paths.appConfig,
        deepmerge$: paths.deepmerge,
        src: paths.src,
        'static-config': paths.staticConfig,
      },
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          exclude: /\.(js|jsx|css|html|scss|sass)$/,
          loader: 'file-loader',
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'images/[name].[ext]',
              },
            },
          ],
          exclude: /node_modules/,
        },
      ],
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new CleanPlugin([paths.outputPath], { allowExternal: true }),
      new HandlebarsPlugin({
        entry: paths.indexHtmlSrc,
        output: paths.indexHtmlDest,
        partials: paths.partials,
        data: {
          version: env.APP_VERSION ? `${env.APP_VERSION}/` : '',
        },
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV),
        'process.env.APP_CONFIG': JSON.stringify(env.APP_CONFIG),
        'process.env.APP_VERSION': JSON.stringify(env.APP_VERSION),
      }),
      new CopyPlugin(
        [
          {
            from: paths.faviconSrc,
            to: paths.faviconDest,
          },
          {
            from: paths.imagesSrc,
            to: paths.imagesDest,
          },
          {
            from: paths.robotsSrc,
            to: paths.robotsDest,
          },
        ],
        { debug: 'info' },
      ),
      ...plugins,
    ],
  };
};
