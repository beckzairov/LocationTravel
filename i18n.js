"use client"; // Ensures this runs on the client side

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import ru from "./locales/ru.json";
import uz from "./locales/uz.json";

if (!i18n.isInitialized) { // Prevent multiple initializations
  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
      uz: { translation: uz },
    },
    lng: "uz", // Default language
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });
}

export default i18n;
