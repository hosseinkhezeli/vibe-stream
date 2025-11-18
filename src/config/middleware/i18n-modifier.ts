import { routing } from '@/core/i18n/routing'
import type { ModifierProps } from './modifier-core'

import createMiddleware from 'next-intl/middleware'

const intlMiddleware = createMiddleware(routing)

export async function i18nModifier(props: ModifierProps) {
  return intlMiddleware(props.request)
}
