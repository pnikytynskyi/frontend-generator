import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import { messages } from 'src/utils/i18n';

addLocaleData([...en]);

class LocaleProvider extends React.Component {
  static propTypes = {
    locale: PropTypes.string.isRequired,
    children: PropTypes.node,
  };

  render () {
    const { locale, children } = this.props;

    return (
      <IntlProvider locale={locale} messages={messages[locale]}>
        {children}
      </IntlProvider>
    );
  }
}

export default LocaleProvider;