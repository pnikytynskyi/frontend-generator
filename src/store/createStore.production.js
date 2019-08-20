import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';

import { restMiddleware } from '../middlewares/restMiddleware';
import reducers from '../reducers';

const middleware = [thunk, restMiddleware, apiMiddleware];

export default createStore(reducers, applyMiddleware(...middleware));
