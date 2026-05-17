// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vi', 'es', 'pt-BR', 'th', 'id', 'ko', 'ja', 'ar', 'tr', 'zh-TW'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
