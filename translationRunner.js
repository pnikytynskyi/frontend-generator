const manageTranslations = require('react-intl-translations-manager').default;

manageTranslations({
  messagesDirectory: 'src/translations/extractedMessages',
  translationsDirectory: 'src/translations',
  languages: ['en', 'de'],
});
