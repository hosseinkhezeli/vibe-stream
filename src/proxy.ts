import type { NextRequest } from 'next/server'
import { i18nModifier } from './config/middleware/i18n-modifier'
import { userAgentModifier } from './config/middleware/user-agent-modifier'
import { createModifiersChain } from './config/middleware/modifier-core'


const modifiers = [i18nModifier, userAgentModifier]

export async function proxy(request: NextRequest) {
  return createModifiersChain(request, modifiers)
}

export const config = {
  matcher: [
    '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
  ],
}
