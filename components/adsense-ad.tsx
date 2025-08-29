"use client"
import { useEffect } from 'react'

declare global { interface Window { adsbygoogle?: any[] } }

export default function AdSenseAd({ slot, layout = 'in-article', format = 'fluid', className }: { slot: string; layout?: string; format?: string; className?: string }) {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT
  useEffect(() => {
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}) } catch {}
  }, [slot])
  if (!client) return null
  return (
    <ins
      className={`adsbygoogle ${className || ''}`}
      style={{ display: 'block' }}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format={format}
      data-ad-layout={layout}
    />
  )
}

