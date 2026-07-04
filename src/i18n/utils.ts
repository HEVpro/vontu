import es from './es.json';
import ca from './ca.json';

export const languages = {
  es: 'Castellano',
  ca: 'Català',
};

export const defaultLang = 'es';

export const ui = {
  es,
  ca,
} as const;

export type Language = keyof typeof ui;
export type TranslationKey = keyof typeof es;

/**
 * Get language from URL pathname
 */
export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Language;
  return defaultLang;
}

/**
 * Returns a translation function for a specific language
 */
export function useTranslations(lang: Language) {
  return function t(key: TranslationKey) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
