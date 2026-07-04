import { getLangFromUrl, useTranslations } from '../i18n/utils';

describe('i18n Utils', () => {
  describe('getLangFromUrl', () => {
    it('returns default language if no lang in url', () => {
      const url = new URL('http://localhost/');
      expect(getLangFromUrl(url)).toBe('es');
    });

    it('returns catalan if /ca/ in url', () => {
      const url = new URL('http://localhost/ca/');
      expect(getLangFromUrl(url)).toBe('ca');
    });

    it('returns default language for unknown languages', () => {
      const url = new URL('http://localhost/en/');
      expect(getLangFromUrl(url)).toBe('es');
    });
  });

  describe('useTranslations', () => {
    it('translates to spanish by default', () => {
      const t = useTranslations('es');
      expect(t('nav.features')).toBe('Características');
    });

    it('translates to catalan', () => {
      const t = useTranslations('ca');
      expect(t('nav.features')).toBe('Característiques');
    });

    it('fallbacks to default language if key does not exist', () => {
      const t = useTranslations('ca');
      // Typescript will complain about this in strict mode, so we cast it for testing
      expect(t('non.existent.key' as any)).toBeUndefined();
    });
  });
});
