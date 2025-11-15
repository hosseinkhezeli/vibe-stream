import type { Formats } from 'next-intl'
import type { Locale } from './routing'
import { hasLocale } from 'next-intl'
import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

const MESSAGE_MANIFEST: Record<
  Locale,
  () => Promise<Record<string, unknown>>
> = {
  en: async () => ({
    ...(await import('./messages/en').then(m => m.defaultEnMessages)),
  }),
  fa: async () => ({
    ...(await import('./messages/fa').then(m => m.defaultFaMessages)),
  }),
}

export const formats: Formats = { dateTime: {
  short: { day: 'numeric', month: 'short', year: 'numeric' },
}, number: {
  precise: { maximumFractionDigits: 5 },
}, list: {
  enumeration: { style: 'long', type: 'conjunction' },
} }

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale
  const messages = await MESSAGE_MANIFEST[locale]()

  return {
    locale,
    messages,
    formats,
    timeZone: 'Asia/Tehran',
    now: new Date(),
  }
})
