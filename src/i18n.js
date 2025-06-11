"use client"

import i18n from "i18next"
import { initReactI18next } from "react-i18next"

// Import your translations
import translationEN from "./locales/en/translation.json"
import translationAM from "./locales/am/translation.json"
import translationOR from "./locales/or/translation.json"

// the translations
const resources = {
  en: { translation: translationEN },
  am: { translation: translationAM },
  or: { translation: translationOR },
}

// Initialize i18n immediately
i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  fallbackLng: "en",

  interpolation: {
    escapeValue: false, // React already does escaping
  },

  // Add these options for better Next.js compatibility
  react: {
    useSuspense: false,
  },

  // Add debug mode to see what's happening
  debug: false,
})

export default i18n
