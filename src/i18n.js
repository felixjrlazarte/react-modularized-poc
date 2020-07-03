import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import global from "locales";
import dashboard from 'scenes/Dashboard/locales';
import transactions from 'scenes/Transactions/locales';
import invoices from 'scenes/Invoices/locales';
import billsPay from 'scenes/BillsPay/locales';

// the translations
const resources = {
  en: { translation: {
    ...global,
    ...dashboard,
    ...transactions,
    ...invoices,
    ...billsPay,
  }}
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
