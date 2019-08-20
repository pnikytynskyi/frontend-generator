import React from 'react';

const messages = require('../src/translations/en.json');
const reactIntlComponentNames = [
  'FormattedDate',
  'FormattedTime',
  'FormattedRelative',
  'FormattedNumber',
  'FormattedPlural',
  'FormattedMessage',
  'FormattedHTMLMessage',
];

const Intl = require('react-intl');
const { IntlProvider } = Intl;
const defaultProps = {
  locale: 'en',
  defaultLocale: 'en',
  messages,
};

const intlProvider = new Intl.IntlProvider(defaultProps, {});
const { intl } = intlProvider.getChildContext();
Intl.injectIntl = Node => props => <Node {...props} intl={intl} />;

reactIntlComponentNames.forEach(componentName => {
  const Component = Intl[componentName];

  Intl[componentName] = props =>
    <IntlProvider {...defaultProps}>
      <Component {...props} />
    </IntlProvider>;

  Intl[componentName].displayName = componentName;
});

Intl.intl = intl;

module.exports = Intl;