import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware  } from 'redux';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { apiMiddleware } from 'redux-api-middleware';
import { createLogger } from 'redux-logger';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { restMiddleware } from './middlewares/restMiddleware';
import reducers from './reducers';
import { Container as LocaleProvider } from './components/LocaleProvider';
import { ThemeProvider } from 'styled-components';
import { Component as App } from './screens/App';
import { createTheme } from './styles/themes';

const dev = process.env.NODE_ENV !== 'production';
const devMiddleware = [createLogger(), reduxImmutableStateInvariant()];
const history = createBrowserHistory();

const store = createStore(
  reducers(history),
  applyMiddleware(
    routerMiddleware(history),
    thunk,
    restMiddleware,
    apiMiddleware,
    logger,
    ...(dev ? devMiddleware : [])
  )
);


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <LocaleProvider>
        <ThemeProvider theme={createTheme()}>
          <App />
        </ThemeProvider>
      </LocaleProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
