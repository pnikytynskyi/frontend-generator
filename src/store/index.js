const storeEnv = process.env.NODE_ENV === 'production'
  ? 'production'
  : 'development';

module.exports = require(`./createStore.${storeEnv}.js`);