'use client'

import { useEffect, useState } from 'react'

interface PriceData {
  symbol: string
  price: number
  change: number
  changePercent: number
  volume?: number
  marketCap?: number
  timestamp: string
  marketState: string
}

export function useRealTimePrice(symbol: string) {
  const [priceData, setPriceData] = useState<PriceData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!symbol) return

    const fetchPrice = async () => {
      try {
        const response = await fetch(`/api/prices/${symbol}`)
        
        if (response.ok) {
          const data = await response.json()
          setPriceData(data)
          setError(null)
        } else {
          setError('Failed to fetch price')
        }
      } catch (err) {
        setError('Network error')
        console.error('Price fetch error:', err)
      } finally {
        setLoading(false)
      }
    }

    // Fetch immediately
    fetchPrice()

    // Set up polling every 30 seconds for real-time updates
    const interval = setInterval(fetchPrice, 30000)

    return () => clearInterval(interval)
  }, [symbol])

  return { priceData, loading, error }
}

export function useRealTimePrices(symbols: string[]) {
  const [pricesData, setPricesData] = useState<{ [symbol: string]: PriceData }>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!symbols.length) return

    const fetchPrices = async () => {
      try {
        const promises = symbols.map(symbol => 
          fetch(`/api/prices/${symbol}`).then(res => res.ok ? res.json() : null)
        )
        
        const results = await Promise.allSettled(promises)
        const newPricesData: { [symbol: string]: PriceData } = {}
        
        results.forEach((result, index) => {
          if (result.status === 'fulfilled' && result.value) {
            newPricesData[symbols[index]] = result.value
          }
        })
        
        setPricesData(newPricesData)
        setError(null)
      } catch (err) {
        setError('Failed to fetch prices')
        console.error('Prices fetch error:', err)
      } finally {
        setLoading(false)
      }
    }

    // Fetch immediately
    fetchPrices()

    // Set up polling every 30 seconds
    const interval = setInterval(fetchPrices, 30000)

    return () => clearInterval(interval)
  }, [symbols])

  return { pricesData, loading, error }
}