import { IntlProvider } from 'react-intl';
import enMessages from 'src/translations/en.json';
import { getPartnerFromUrl } from 'src/utils/partner';
import * as deepmerge from 'deepmerge';

let enMessagesList = enMessages;
const partner = getPartnerFromUrl();

if (partner) {
  const en = require(`src/translations/${partner}-en.json`);
  enMessagesList = deepmerge(enMessages, en);
}

export const messages = {
  en: enMessagesList,
};

let cachedIntl = null;
let prevLocale = '';

export const getIntl = ({ locale }) => {
  if (!cachedIntl || locale !== prevLocale) {
    let messagesByLocale = messages[locale];
    cachedIntl = (new IntlProvider({ locale, messages: messagesByLocale })).getChildContext().intl;
    prevLocale = locale;
  }
  return cachedIntl;
};
