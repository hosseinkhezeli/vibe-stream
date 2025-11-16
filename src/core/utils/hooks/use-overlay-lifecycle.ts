'use client'

import { PROCESS_DELAY, ANIMATION_DELAY } from '@/config/constants'
import { useEffect, useState } from 'react'

export type OverlayLifecycleOptions = {
  open: boolean
  onMount?: () => void
  onUnmount?: () => void
  mountDelay?: number
  unmountDelay?: number
}

export function useOverlayLifecycle({
  open,
  onMount,
  onUnmount,
  mountDelay = PROCESS_DELAY,
  unmountDelay = ANIMATION_DELAY,
}: OverlayLifecycleOptions) {
  const [isMounted, setIsMounted] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    let openTimer: ReturnType<typeof setTimeout> | null = null
    let closeTimer: ReturnType<typeof setTimeout> | null = null

    if (open) {
      setIsMounted(true)
      openTimer = setTimeout(() => {
        setIsAnimating(true)
        onMount?.()
      }, mountDelay)
    } else {
      setIsAnimating(false)
      onUnmount?.()
      closeTimer = setTimeout(() => {
        setIsMounted(false)
      }, unmountDelay)
    }

    return () => {
      if (openTimer)
        clearTimeout(openTimer)
      if (closeTimer)
        clearTimeout(closeTimer)
    }
  }, [open, mountDelay, unmountDelay, onMount, onUnmount])

  return { isMounted, isAnimating }
}
