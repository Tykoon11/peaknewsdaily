import { prisma } from '@/lib/prisma'
import Link from 'next/link'

export const revalidate = 300

interface Asset {
  id: string
  symbol: string
  name: string
  type: string
  market: {
    name: string
    currency: string
  }
  quotes: Array<{
    price: number
    change?: number
    changePercent?: number
    volume?: bigint
    marketCap?: bigint
    timestamp: Date
  }>
}

export default async function CryptoPage() {
  const cryptos = await prisma.asset.findMany({
    where: { 
      type: 'crypto',
      isActive: true 
    },
    include: {
      market: {
        select: { name: true, currency: true }
      },
      quotes: {
        orderBy: { timestamp: 'desc' },
        take: 1
      }
    },
    orderBy: { symbol: 'asc' }
  })

  const formatPrice = (price: number, currency: string = 'USD') => {
    if (price < 1) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
        minimumFractionDigits: 4,
        maximumFractionDigits: 6
      }).format(price)
    }
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price)
  }

  const formatChange = (change: number | null, changePercent: number | null) => {
    if (!change || !changePercent) return { text: 'N/A', positive: null }
    
    const isPositive = change > 0
    const changeText = `${isPositive ? '+' : ''}${change.toFixed(2)}`
    const percentText = `(${isPositive ? '+' : ''}${changePercent.toFixed(2)}%)`
    
    return {
      text: `${changeText} ${percentText}`,
      positive: isPositive
    }
  }

  const formatVolume = (volume: bigint | null) => {
    if (!volume) return 'N/A'
    const num = Number(volume)
    if (num >= 1000000000) {
      return `$${(num / 1000000000).toFixed(2)}B`
    } else if (num >= 1000000) {
      return `$${(num / 1000000).toFixed(2)}M`
    } else if (num >= 1000) {
      return `$${(num / 1000).toFixed(1)}K`
    }
    return `$${num.toLocaleString()}`
  }

  const formatMarketCap = (marketCap: bigint | null) => {
    if (!marketCap) return 'N/A'
    const num = Number(marketCap)
    if (num >= 1000000000000) {
      return `$${(num / 1000000000000).toFixed(2)}T`
    } else if (num >= 1000000000) {
      return `$${(num / 1000000000).toFixed(2)}B`
    } else if (num >= 1000000) {
      return `$${(num / 1000000).toFixed(2)}M`
    }
    return `$${num.toLocaleString()}`
  }

  const getCryptoIcon = (symbol: string) => {
    const cleanSymbol = symbol.replace('-USD', '').toLowerCase()
    const icons: { [key: string]: string } = {
      'btc': '₿',
      'eth': 'Ξ',
      'ada': '₳',
      'dot': '●',
      'sol': '◎',
      'matic': '⬟'
    }
    return icons[cleanSymbol] || '●'
  }

  return (
    <main className="container py-6">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Cryptocurrency Markets</h1>
            <p className="text-gray-600">
              Real-time cryptocurrency prices and market data
            </p>
          </div>
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-xl border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-900">Cryptocurrency</th>
                <th className="text-right p-4 font-semibold text-gray-900">Price</th>
                <th className="text-right p-4 font-semibold text-gray-900">24h Change</th>
                <th className="text-right p-4 font-semibold text-gray-900">24h Volume</th>
                <th className="text-right p-4 font-semibold text-gray-900">Market Cap</th>
                <th className="text-center p-4 font-semibold text-gray-900">Status</th>
              </tr>
            </thead>
            <tbody>
              {cryptos.map((crypto) => {
                const latestQuote = crypto.quotes[0]
                if (!latestQuote) return null
                
                const change = formatChange(
                  latestQuote.change ? Number(latestQuote.change) : null,
                  latestQuote.changePercent ? Number(latestQuote.changePercent) : null
                )
                
                const displaySymbol = crypto.symbol.replace('-USD', '')

                return (
                  <tr key={crypto.id} className="border-b hover:bg-gray-50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold">
                          {getCryptoIcon(crypto.symbol)}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">{displaySymbol}</div>
                          <div className="text-sm text-gray-600">{crypto.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="text-right p-4">
                      <div className="font-semibold text-gray-900">
                        {formatPrice(Number(latestQuote.price), crypto.market.currency)}
                      </div>
                    </td>
                    <td className="text-right p-4">
                      <div className={`font-medium ${
                        change.positive === true ? 'text-green-600' :
                        change.positive === false ? 'text-red-600' : 'text-gray-500'
                      }`}>
                        {change.text}
                      </div>
                    </td>
                    <td className="text-right p-4">
                      <div className="text-gray-900">
                        {formatVolume(latestQuote.volume)}
                      </div>
                    </td>
                    <td className="text-right p-4">
                      <div className="text-gray-900">
                        {formatMarketCap(latestQuote.marketCap)}
                      </div>
                    </td>
                    <td className="text-center p-4">
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                        24/7
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        
        {cryptos.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500">
              <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
              <p className="text-lg">No cryptocurrency data available</p>
              <p className="text-sm mt-2">Cryptocurrency prices will appear here when market data is available.</p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <div className="w-5 h-5 text-blue-600 mt-0.5">
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <h3 className="text-sm font-medium text-blue-800 mb-1">Cryptocurrency Trading Information</h3>
            <p className="text-sm text-blue-700">
              Cryptocurrency markets operate 24/7. Prices are highly volatile and can change rapidly. 
              Always do your own research before making investment decisions.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}