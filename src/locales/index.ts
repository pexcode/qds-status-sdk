import en from './en.json'
import ar from './ar.json'

export type SupportedLocale = 'en' | 'ar'

const messages: Record<SupportedLocale, Record<string, string>> = {
  en: en as Record<string, string>,
  ar: ar as Record<string, string>,
}

const defaultLocale: SupportedLocale = 'en'

export function getLabel(locale: SupportedLocale | undefined, key: string): string {
  const lang = locale && (locale === 'en' || locale === 'ar') ? locale : defaultLocale
  const dict = messages[lang]
  return dict[key] ?? key
}

export { en, ar }
