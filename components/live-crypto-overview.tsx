'use client'

import { useEffect, useState } from 'react'

interface LiveMarketData {
  activeCryptocurrencies: number
  totalMarketCap: number
  gainers24h: number
  formatting: {
    totalMarketCapFormatted: string
  }
}

interface LiveCryptoOverviewProps {
  fallbackActiveCryptos: number
  fallbackTotalMarketCap: number
  fallbackGainers: number
}

export default function LiveCryptoOverview({ 
  fallbackActiveCryptos, 
  fallbackTotalMarketCap, 
  fallbackGainers 
}: LiveCryptoOverviewProps) {
  const [liveData, setLiveData] = useState<LiveMarketData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log('🔥 LiveCryptoOverview useEffect triggered!')
    
    async function fetchLiveData() {
      try {
        console.log('🔄 Fetching live market data...')
        const response = await fetch('/api/market-analytics', {
          headers: {
            'Accept': 'application/json',
          },
          cache: 'no-cache' // Ensure fresh data
        })
        
        console.log('📊 API Response status:', response.status)
        
        if (response.ok) {
          const data = await response.json()
          console.log('🔍 Raw API data:', {
            activeCryptocurrencies: data.activeCryptocurrencies,
            gainers24h: data.gainers24h,
            totalMarketCap: data.totalMarketCap,
            marketCapFormatted: data.formatting?.totalMarketCapFormatted,
            status: data.status
          })
          
          setLiveData(data)
          console.log('✅ Live crypto data updated in state!')
        } else {
          console.warn('❌ API response not ok:', response.status, response.statusText)
        }
      } catch (error) {
        console.error('❌ Error fetching live data:', error)
      } finally {
        setLoading(false)
        console.log('⏹️ Loading finished')
      }
    }

    // Initial fetch
    fetchLiveData()
    
    // Update every 2 minutes for more frequent updates
    const interval = setInterval(fetchLiveData, 2 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  // Use live data if available, fallback to props
  const activeCryptos = liveData?.activeCryptocurrencies || fallbackActiveCryptos
  const totalMarketCap = liveData?.formatting?.totalMarketCapFormatted || 
    (fallbackTotalMarketCap >= 1000000000000 
      ? `$${(fallbackTotalMarketCap / 1000000000000).toFixed(2)}T` 
      : `$${(fallbackTotalMarketCap / 1000000000).toFixed(0)}B`)
  const gainers = liveData?.gainers24h || fallbackGainers

  // Debug logging
  console.log('🎯 Component render values:', {
    hasLiveData: !!liveData,
    activeCryptos: activeCryptos,
    totalMarketCap: totalMarketCap,
    gainers: gainers,
    fallbackActiveCryptos,
    fallbackTotalMarketCap,
    fallbackGainers,
    loading
  })

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl shadow-black/10 group hover:scale-105 transition-transform">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
        <div className="relative">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L15.09 8.26L22 9L18 13.14L19.09 21L12 17.77L4.91 21L6 13.14L2 9L8.91 8.26L12 2Z"/>
              </svg>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white whitespace-nowrap">
              {activeCryptos.toLocaleString()}
              {loading && (
                <span className="ml-2 inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              )}
            </div>
          </div>
          <div className="text-slate-300 font-medium">Tracked Assets</div>
          {liveData && (
            <div className="text-xs text-green-400 mt-1 opacity-75">● Live</div>
          )}
        </div>
      </div>
      
      <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl shadow-black/10 group hover:scale-105 transition-transform">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
        <div className="relative">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-green-400 whitespace-nowrap">
              {totalMarketCap}
              {loading && (
                <span className="ml-2 inline-block w-4 h-4 border-2 border-green-400/30 border-t-green-400 rounded-full animate-spin"></span>
              )}
            </div>
          </div>
          <div className="text-slate-300 font-medium">Market Cap</div>
          {liveData && (
            <div className="text-xs text-green-400 mt-1 opacity-75">● Live</div>
          )}
        </div>
      </div>
      
      <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl shadow-black/10 group hover:scale-105 transition-transform">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
        <div className="relative">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-blue-400 whitespace-nowrap">
              {gainers.toLocaleString()}
              {loading && (
                <span className="ml-2 inline-block w-4 h-4 border-2 border-blue-400/30 border-t-blue-400 rounded-full animate-spin"></span>
              )}
            </div>
          </div>
          <div className="text-slate-300 font-medium">24h Gainers</div>
          {liveData && (
            <div className="text-xs text-green-400 mt-1 opacity-75">● Live</div>
          )}
        </div>
      </div>
      
      <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl shadow-black/10 group hover:scale-105 transition-transform">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
        <div className="relative">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-orange-400 whitespace-nowrap">24/7</div>
          </div>
          <div className="text-slate-300 font-medium">Always Open</div>
        </div>
      </div>
    </div>
  )
}