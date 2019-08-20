import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import debug from './debug';
import locale from './locale';

const dev = process.env.NODE_ENV !== 'production';

export default (history) => combineReducers({
  router: connectRouter(history),
  locale,
  debug: dev ? debug : undefined,
});
