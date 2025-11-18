import { COOKIE_NAMES } from '../constants'
import type { ModifierProps } from './modifier-core'

import { NextResponse, userAgent } from 'next/server'

export async function userAgentModifier({ response, request }: ModifierProps) {
  const { device } = userAgent(request)
  const viewport = device.type || 'desktop'

  const res = response instanceof NextResponse ? response : NextResponse.next()

  res.cookies.set(COOKIE_NAMES.viewport, viewport)

  return res
}
