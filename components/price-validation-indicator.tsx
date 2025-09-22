'use client'

import { useState, useEffect } from 'react'

interface PriceValidationProps {
  lastUpdate?: Date
  source?: string
  symbol?: string
}

export default function PriceValidationIndicator({ lastUpdate, source, symbol }: PriceValidationProps) {
  const [isStale, setIsStale] = useState(false)
  const [ageInMinutes, setAgeInMinutes] = useState(0)

  useEffect(() => {
    if (!lastUpdate) return

    const checkFreshness = () => {
      const now = new Date()
      const updateTime = new Date(lastUpdate)
      const diffMs = now.getTime() - updateTime.getTime()
      const diffMinutes = Math.floor(diffMs / (1000 * 60))
      
      setAgeInMinutes(diffMinutes)
      
      // Consider data stale if older than 5 minutes for crypto, 15 minutes for stocks
      const staleThreshold = symbol?.includes('USD') ? 5 : 15
      setIsStale(diffMinutes > staleThreshold)
    }

    checkFreshness()
    const interval = setInterval(checkFreshness, 30000) // Check every 30 seconds
    
    return () => clearInterval(interval)
  }, [lastUpdate, symbol])

  if (!lastUpdate) return null

  return (
    <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
      isStale 
        ? 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400' 
        : 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400'
    }`}>
      <div className={`w-2 h-2 rounded-full ${
        isStale ? 'bg-red-500' : 'bg-green-500'
      } ${isStale ? '' : 'animate-pulse'}`} />
      
      {isStale ? (
        <span title={`Data is ${ageInMinutes} minutes old - may be outdated`}>
          ⚠️ {ageInMinutes}m old
        </span>
      ) : (
        <span title={`Live data from ${source || 'exchange'}`}>
          ✅ Live {source && `(${source})`}
        </span>
      )}
    </div>
  )
}