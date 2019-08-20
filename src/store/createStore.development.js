import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { apiMiddleware } from 'redux-api-middleware';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { composeWithDevTools } from 'redux-devtools-extension';

import { restMiddleware } from '../middlewares/restMiddleware';
import reducers from '../reducers';

const middleware = [
  logger,
  thunk,
  restMiddleware,
  apiMiddleware,
  reduxImmutableStateInvariant(),
];

export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);
