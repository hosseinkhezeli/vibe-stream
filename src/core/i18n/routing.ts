import type { AppMessages } from './messages/fa'
import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'fa'] as const,
  defaultLocale: 'fa',
  localePrefix: 'as-needed',
  localeDetection: false,
})

export type Locale = (typeof routing.locales)[number]

type NestedKeys<T>
  = T extends Record<string, any>
    ? {
        [K in keyof T & string]:
        T[K] extends Record<string, any>
          ? `${K}.${keyof T[K] & string}`
          : never
      }[keyof T & string]
    : never

export type ValidMessageKey = keyof AppMessages | NestedKeys<AppMessages>
