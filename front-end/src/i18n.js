import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import enTranslations from './locales/en/translation.json' // Import existing translations
import frTranslations from './locales/fr/translation.json' // Import existing translations
import trTranslations from './locales/tr/translation.json' // Import existing translations

i18n.use(Backend).use(LanguageDetector).use(initReactI18next)

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: { ...enTranslations } // Merge with existing translations
      },
      fr: {
        translation: { ...frTranslations } // Merge with existing translations
      },
      tr: {
        translation: { ...trTranslations } // Merge with existing translations
      }
    },
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  })

export default i18n
