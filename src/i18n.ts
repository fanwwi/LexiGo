import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import ruTranslation from './locales/ru.json';
import hiTranslation from './locales/hi.json';

// Интерфейс для переводов
interface TranslationResources {
  [key: string]: string;
}

interface Resources {
  [key: string]: {
    translation: TranslationResources;
  };
}

console.log('i18n configuration:', i18n);

const resources: Resources = {
  en: {
    translation: enTranslation as TranslationResources
  },
  ru: {
    translation: ruTranslation as TranslationResources
  },
  hi: {
    translation: hiTranslation as TranslationResources
  }
};

const language = localStorage.getItem('language') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Язык по умолчанию
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React уже защищает от XSS
    }
  });

export default i18n;
