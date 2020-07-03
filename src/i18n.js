import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import global from "locales/en-US";
import dashboard from 'scenes/Dashboard/locales/en-US';
import transactions from 'scenes/Transactions/locales/en-US';
import invoices from 'scenes/Invoices/locales/en-US';
import billsPay_en_US from 'scenes/BillsPay/locales/en-US';

// the translations
const resources = {
  en: { translation: {
    ...global,
    ...dashboard,
    ...transactions,
    ...invoices,
    ...billsPay_en_US,
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
