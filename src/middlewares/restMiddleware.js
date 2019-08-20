import { RSAA } from 'redux-api-middleware';
import qs from 'qs';
import config from 'config';

const gateway = config.get('api.domain');

/**
 * Redux middleware, that transform actions with `api` property into RSAA
 * actions, that could be consumed by `redux-api-middleware`
 *
 * Populate each request with default headers like
 * - Content-Type
 * - token
 *
 * Any headers, that need to be populated for each request (or many of them)
 * should be populated here
 */
export const restMiddleware = () => next => async action => {
  if (!action.api) {
    return next(action);
  }

  const {
    api: { params, ...api },
    ...rest
  } = action;

  let endpoint = api.endpoint && `${gateway}/${api.endpoint}`;
  if (endpoint != null) {
    const queryString =
      typeof params === 'string'
        ? params
        : qs.stringify(params, { format: 'RFC1738' });
    if (queryString) {
      endpoint += (endpoint.indexOf('?') === -1 ? '?' : '&') + queryString;
    }
  }


  const authHeader = {};

  const newAction = {
    [RSAA]: {
      ...api,
      endpoint,
      method: api.method || 'GET',
      credentials: api.credentials || 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        ...authHeader,
        ...api.headers,
      },
    },
    ...rest,
  };

  return next(newAction);
};
