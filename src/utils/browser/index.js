import config from 'config';

const allowedLocales = config.get('locales.allowed');
const defaultLocale = config.get('locales.default');

export const getBrowserLanguages = () => {
  if (navigator.languages) {
    return navigator.languages;
  }

  if (navigator.language) {
    return [navigator.language];
  }

  if (navigator.userLanguage) {
    return [navigator.userLanguage];
  }

  return [];
};

export const getBrowserLocale = () =>
  getBrowserLanguages()
    .map(locale => locale.split('-')[0])
    .find(locale => allowedLocales.includes(locale));

export const getInitialLocale = () => getBrowserLocale() || defaultLocale;
