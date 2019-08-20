import {
  addLocaleData, intlShape, injectIntl,
  defineMessages, IntlProvider, FormattedDate,
  FormattedTime, FormattedRelative, FormattedNumber,
  FormattedPlural, FormattedHTMLMessage, FormattedMessage,
} from 'react-intl';

import { enhanceFormattedMessage } from './enhanceFormattedMessage';
const formattedMessage = enhanceFormattedMessage(FormattedMessage);

export {
  addLocaleData, intlShape, injectIntl,
  defineMessages, IntlProvider, FormattedDate,
  FormattedTime, FormattedRelative, FormattedNumber,
  FormattedPlural, FormattedHTMLMessage, formattedMessage as FormattedMessage,
};
