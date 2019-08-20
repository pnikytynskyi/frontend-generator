const path = require('path');

module.exports = (root, env) => ({
  root,

  // NOTE: Workaround for issue with Webpack 4
  deepmerge: path.join(
    root,
    'node_modules',
    'deepmerge',
    'dist',
    'umd.js'
  ),

  outputPath: path.join(root, 'public'),
  src: path.join(root, 'src'),
  appConfig: path.join(root, 'app-config'),
  staticConfig: path.join(root, 'app-config', 'static', `${env.APP_CONFIG}.js`),
  indexJs: path.join(root, 'src', 'index.js'),
  partials: [
    path.join(root, 'src', 'partials', '*.hbs'),
  ],

  faviconSrc: path.join(root, 'src', 'favicon.ico'),
  faviconDest: path.join(root, 'public', 'favicon.ico'),
  dynamicConfigSrc: path.join(root, 'app-config', 'dynamic', `${env.APP_CONFIG}.js`),
  dynamicConfigDest: path.join(root, 'public', 'config.js'),
  indexHtmlSrc: path.join(root, 'src', 'index.html.hbs'),
  indexHtmlDest: path.join(root, 'public', 'index.html'),
  imagesSrc: path.join(root, 'src', 'assets', 'images'),
  imagesDest: path.join(root, 'public', 'images'),
  robotsSrc: path.join(root, 'src', 'robots.txt'),
  robotsDest: path.join(root, 'public', 'robots.txt'),
});
