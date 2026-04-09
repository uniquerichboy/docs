export const defaultLocale = 'en';

export const locales = [
  { locale: 'en', name: 'English' },
  { locale: 'ru', name: 'Русский' },
] as const;

export type Locale = (typeof locales)[number]['locale'];
