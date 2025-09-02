import { prisma } from '@/lib/prisma'
import Link from 'next/link'

export const revalidate = 300

interface Asset {
  id: string
  symbol: string
  name: string
  type: string
  sector?: string
  industry?: string
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
    pe?: number
    dividendYield?: number
    timestamp: Date
  }>
}

export default async function StocksPage() {
  const stocks = await prisma.asset.findMany({
    where: { 
      type: 'stock',
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
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`
    }
    return num.toLocaleString()
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

  return (
    <main className="container py-6">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Stock Markets</h1>
            <p className="text-gray-600">
              Real-time stock prices and market data
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
                <th className="text-left p-4 font-semibold text-gray-900">Symbol</th>
                <th className="text-left p-4 font-semibold text-gray-900">Company</th>
                <th className="text-right p-4 font-semibold text-gray-900">Price</th>
                <th className="text-right p-4 font-semibold text-gray-900">Change</th>
                <th className="text-right p-4 font-semibold text-gray-900">Volume</th>
                <th className="text-right p-4 font-semibold text-gray-900">Market Cap</th>
                <th className="text-right p-4 font-semibold text-gray-900">P/E</th>
                <th className="text-right p-4 font-semibold text-gray-900">Div Yield</th>
              </tr>
            </thead>
            <tbody>
              {stocks.map((stock) => {
                const latestQuote = stock.quotes[0]
                if (!latestQuote) return null
                
                const change = formatChange(
                  latestQuote.change ? Number(latestQuote.change) : null,
                  latestQuote.changePercent ? Number(latestQuote.changePercent) : null
                )

                return (
                  <tr key={stock.id} className="border-b hover:bg-gray-50 transition-colors">
                    <td className="p-4">
                      <div>
                        <div className="font-bold text-gray-900">{stock.symbol}</div>
                        <div className="text-xs text-gray-500">{stock.market.name}</div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div>
                        <div className="font-medium text-gray-900">{stock.name}</div>
                        <div className="text-xs text-gray-500">
                          {stock.sector && stock.industry ? `${stock.sector} • ${stock.industry}` : stock.sector || stock.industry || '—'}
                        </div>
                      </div>
                    </td>
                    <td className="text-right p-4">
                      <div className="font-semibold text-gray-900">
                        {formatPrice(Number(latestQuote.price), stock.market.currency)}
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
                    <td className="text-right p-4">
                      <div className="text-gray-900">
                        {latestQuote.pe ? Number(latestQuote.pe).toFixed(2) : '—'}
                      </div>
                    </td>
                    <td className="text-right p-4">
                      <div className="text-gray-900">
                        {latestQuote.dividendYield ? `${Number(latestQuote.dividendYield).toFixed(2)}%` : '—'}
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        
        {stocks.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500">
              <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 00-2-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h2a2 2 0 01-2-2z" />
              </svg>
              <p className="text-lg">No stock data available</p>
              <p className="text-sm mt-2">Stock prices will appear here when market data is available.</p>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}