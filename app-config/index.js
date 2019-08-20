import getValue from 'get-value';
import merge from 'deepmerge';

import defaultConfig from './default';
import staticConfig from 'static-config';

const dynamicConfig = window.CONFIG || {};
const appConfig = merge.all([defaultConfig, staticConfig, dynamicConfig]);

export default {
  get: key => getValue(appConfig, key),
};
