import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: { translation: en }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,
    lng: "en",
    keySeparator: ".",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;