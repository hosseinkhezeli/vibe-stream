import type { NextRequest, NextResponse } from 'next/server'

export type ModifierProps = {
  request: NextRequest
  response?: NextResponse<unknown>
}

export async function createModifiersChain(
  request: NextRequest,
  modifiers: Array<(props: ModifierProps) => Promise<any>>,
): Promise<any> {
  let response: any

  for (const modifier of modifiers) {
    response = await modifier({ request, response })
  }

  return response
}
