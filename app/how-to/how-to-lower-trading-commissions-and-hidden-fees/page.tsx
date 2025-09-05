import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '17 Ways to Lower Trading Commissions & Hidden Fees',
  description: 'Practical tactics: order types, routing, data packages, FX, and statement audits.',
}

export default function LowerTradingFeesPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Lower Trading Fees</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-slate-600 rounded-xl flex items-center justify-center text-white text-xl">
            🏛️
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Brokers & Exchanges</p>
            <h1 className="text-4xl font-bold text-gray-900">17 Ways to Lower Trading Commissions & Hidden Fees</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Practical tactics: order types, routing, data packages, FX, and statement audits.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>Know your fee map</h2>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="font-semibold text-red-900 mb-3">Direct Trading Costs</h3>
            <ul className="text-red-700 text-sm space-y-1">
              <li>• Stock commissions ($0-$7 typical)</li>
              <li>• Options per-contract fees ($0.50-$1.25)</li>
              <li>• Exchange/regulatory fees</li>
              <li>• ECN access/removal fees</li>
              <li>• Order routing costs</li>
            </ul>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h3 className="font-semibold text-orange-900 mb-3">Hidden & Ancillary Costs</h3>
            <ul className="text-orange-700 text-sm space-y-1">
              <li>• Market data subscriptions</li>
              <li>• Foreign exchange spreads</li>
              <li>• Wire transfer fees</li>
              <li>• Account maintenance charges</li>
              <li>• Statement/confirm delivery</li>
            </ul>
          </div>
        </div>

        <h2>Tactics</h2>
        
        <div className="space-y-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-semibold text-green-900 mb-4">Order Management (5 tactics)</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-green-800">1. Use appropriate order types</p>
                <p className="text-green-700 text-sm">Limit orders can earn rebates vs market orders paying fees.</p>
              </div>
              <div>
                <p className="font-medium text-green-800">2. Aggregate smaller fills</p>
                <p className="text-green-700 text-sm">Batch orders to reduce per-transaction costs.</p>
              </div>
              <div>
                <p className="font-medium text-green-800">3. Choose smart routing</p>
                <p className="text-green-700 text-sm">Let the broker find the best execution venue.</p>
              </div>
              <div>
                <p className="font-medium text-green-800">4. Time your trades</p>
                <p className="text-green-700 text-sm">Avoid opening/closing auctions if you don't need immediacy.</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 mb-4">Data & Platform Optimization (4 tactics)</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-blue-800">5. Audit market data subscriptions</p>
                <p className="text-blue-700 text-sm">Cancel unused Level 2 or TotalView if you don't actively trade.</p>
              </div>
              <div>
                <p className="font-medium text-blue-800">6. Use free alternatives</p>
                <p className="text-blue-700 text-sm">Many brokers offer basic Level 2 data with active accounts.</p>
              </div>
              <div>
                <p className="font-medium text-blue-800">7. Bundle platform features</p>
                <p className="text-blue-700 text-sm">Combined packages often cost less than individual subscriptions.</p>
              </div>
              <div>
                <p className="font-medium text-blue-800">8. Negotiate professional data rates</p>
                <p className="text-blue-700 text-sm">Higher-volume traders can request institutional pricing.</p>
              </div>
            </div>
            <div className="mt-3 text-xs">
              <a href="https://nasdaq.com/market-activity/quotes/nasdaq-totalview" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Nasdaq TotalView Pricing</a>
            </div>
          </div>
        </div>

        <h2>Negotiate & optimize</h2>
        
        <div className="space-y-4 my-8">
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
            <div>
              <p className="text-gray-700 font-medium">Request detailed fee schedules</p>
              <p className="text-gray-600 text-sm">Many brokers have negotiable rates for active traders.</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
            <div>
              <p className="text-gray-700 font-medium">Ask about volume discounts</p>
              <p className="text-gray-600 text-sm">Quarterly reviews can unlock better pricing tiers.</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
            <div>
              <p className="text-gray-700 font-medium">Compare total cost of ownership</p>
              <p className="text-gray-600 text-sm">Include data, platform, and administrative costs in broker comparisons.</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <p className="text-blue-800">
            <strong>Pro Tip:</strong> The cheapest broker isn't always the best value. Factor in execution quality, platform reliability, and customer service when calculating total cost.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do zero-commission brokers really cost nothing?</h3>
              <p className="text-gray-700">No—they typically make money through payment for order flow, wider spreads, or premium services.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I pay for Level 2 market data?</h3>
              <p className="text-gray-700">Only if you're an active trader who needs real-time order book information for entry timing.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I negotiate trading fees?</h3>
              <p className="text-gray-700">Yes, especially with higher account balances or trading volume. Many brokers have tiered pricing.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-choose-a-stock-broker-fees-tools-support" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">← Choose a Stock Broker</h3>
              <p className="text-sm text-blue-700 mt-1">Compare fees upfront</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-use-level-2-quotes-and-time-sales" 
              className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
            >
              <h3 className="font-semibold text-purple-900">Level 2 Data →</h3>
              <p className="text-sm text-purple-700 mt-1">Is the cost worth it?</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}