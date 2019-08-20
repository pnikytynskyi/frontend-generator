const merge = require('webpack-merge');

const createCommonPaths = require('./webpack/createCommonPaths');
const createCommonConfig = require('./webpack/createCommonConfig');

const env = {
  NODE_ENV: 'development',
  APP_CONFIG: 'development',
  ...process.env,
}

const paths = createCommonPaths(__dirname, env);

let config = createCommonConfig(env, paths);

if (env.NODE_ENV === 'development') {
  config = merge(
    config,
    require('./webpack/createDevConfig')(env, paths, 4000),
  );
} else if (env.NODE_ENV === 'production') {
  config = merge(
    config,
    require('./webpack/createProdConfig')(env, paths),
  );
}

module.exports = config;
