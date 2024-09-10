import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json";
import ruTranslation from "./locales/ru.json";
import hiTranslation from "./locales/hi.json";

interface TranslationResources {
  [key: string]: string;
}

interface Resources {
  [key: string]: {
    translation: TranslationResources;
  };
}


const resources: Resources = {
  en: {
    translation: enTranslation as TranslationResources,
  },
  ru: {
    translation: ruTranslation as TranslationResources,
  },
};

const language = localStorage.getItem("language") || "en";

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
