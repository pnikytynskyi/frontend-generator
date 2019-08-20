import React from 'react';
import renderer from 'react-test-renderer';
import reducers from 'src/reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { MemoryRouter } from 'react-router-dom';

export const history = createBrowserHistory()

const store = createStore(
  reducers(history)
);

const commonTestWrapper = (children, props = { locale: 'en' }) => {
  return renderer.create(
    <Provider store={store}>
      <IntlProvider {...props}>
        <MemoryRouter>
          {children}
        </MemoryRouter>
      </IntlProvider>
    </Provider>
  );
};

export default commonTestWrapper;
