"use client"
import { ReactNode, useEffect } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Avoid caching dev chunks with a SW; only register in production
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {})
    } else if ('serviceWorker' in navigator) {
      // Best-effort unregister any existing dev SW to prevent chunk load errors
      navigator.serviceWorker.getRegistrations?.().then((regs) => regs.forEach((r) => r.unregister())).catch(() => {})
    }
  }, [])
  return <>{children}</>
}
