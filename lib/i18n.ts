/**
 * @file i18n.ts
 * @description Centralized configuration for the `i18next` internationalization engine.
 * Handles the registration of translation bundles, browser language detection,
 * and integration with React.
 */

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import raw JSON translation bundles
import en from '../locales/en.json';
import ar from '../locales/ar.json';
import hi from '../locales/hi.json';

/**
 * The unified resource map containing all supported languages.
 * Extracted into a constant to maintain clean structure.
 */
const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
  hi: {
    translation: hi,
  },
};

// Initialize the i18next instance
i18n
  // Inject the language detection plugin (checks localStorage, navigator.language, etc.)
  .use(LanguageDetector)
  // Inject the React binding for seamless use with hooks like `useTranslation`
  .use(initReactI18next)
  .init({
    resources,
    // Provide a fallback language if the detected language is not available
    fallbackLng: 'en',
    interpolation: {
      // Disable escapeValue since React naturally prevents XSS vulnerabilities
      // by automatically escaping interpolated values in JSX
      escapeValue: false, 
    },
  });

export default i18n;
