import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Enable Margin—And 7 Times You Shouldn\'t',
  description: 'Steps to enable margin plus risk rules, maintenance calls, and safer alternatives.',
}

export default function EnableMarginPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Enable Margin Account</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-slate-600 rounded-xl flex items-center justify-center text-white text-xl">
            🏛️
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Brokers & Exchanges</p>
            <h1 className="text-4xl font-bold text-gray-900">How to Enable Margin—And 7 Times You Shouldn't</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Steps to enable margin plus risk rules, maintenance calls, and safer alternatives.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h2 className="text-xl font-bold text-red-900 mb-2">⚠️ Margin Warning</h2>
          <p className="text-red-700">
            Margin trading amplifies both gains and losses. You can lose more than your initial investment. Only use margin if you fully understand the risks.
          </p>
        </div>

        <h2>Margin basics</h2>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 mb-3">Initial vs Maintenance</h3>
            <ul className="text-blue-700 text-sm space-y-2">
              <li>• <strong>Initial margin:</strong> 50% minimum (Reg T)</li>
              <li>• <strong>Maintenance:</strong> 25% minimum (can be higher)</li>
              <li>• <strong>House requirements:</strong> Often stricter than regulatory minimums</li>
              <li>• <strong>Margin call:</strong> When equity falls below maintenance</li>
            </ul>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="font-semibold text-purple-900 mb-3">Interest & Costs</h3>
            <ul className="text-purple-700 text-sm space-y-2">
              <li>• Interest rates: Typically 6-12% annually</li>
              <li>• Daily compounding on borrowed amounts</li>
              <li>• Rate tiers: Higher balances get better rates</li>
              <li>• Additional fees may apply</li>
            </ul>
          </div>
        </div>

        <h2>How to enable</h2>
        
        <div className="space-y-4 my-8">
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
            <div>
              <p className="text-gray-700 font-medium">Meet eligibility requirements</p>
              <p className="text-gray-600 text-sm">Minimum $2,000 account value, investment experience, financial stability.</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
            <div>
              <p className="text-gray-700 font-medium">Complete margin application</p>
              <p className="text-gray-600 text-sm">Provide income, net worth, investment objectives, and experience details.</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
            <div>
              <p className="text-gray-700 font-medium">Read and sign disclosures</p>
              <p className="text-gray-600 text-sm">Margin agreement, risk disclosure document, and credit terms.</p>
            </div>
          </div>
        </div>

        <h2>When not to use margin</h2>
        
        <div className="space-y-4 my-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-700"><strong>1. Volatile earnings plays:</strong> Overnight gaps can trigger immediate margin calls.</p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-700"><strong>2. Illiquid microcaps:</strong> Hard to exit positions when margin calls hit.</p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-700"><strong>3. Concentrated bets:</strong> Single-stock risk amplified by leverage.</p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-700"><strong>4. Overnight gaps:</strong> Market closures prevent immediate risk management.</p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-700"><strong>5. When emotions run high:</strong> Fear and greed lead to poor margin decisions.</p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-700"><strong>6. Without stop-loss discipline:</strong> No exit strategy amplifies losses.</p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-700"><strong>7. As your only strategy:</strong> Margin should enhance, not replace, solid fundamentals.</p>
          </div>
        </div>

        <h2>Safer alternatives</h2>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-semibold text-green-900 mb-3">Options Strategies</h3>
            <ul className="text-green-700 text-sm space-y-2">
              <li>• <strong>Cash-secured puts:</strong> Generate income while waiting to buy</li>
              <li>• <strong>Covered calls:</strong> Add income to existing positions</li>
              <li>• <strong>Defined risk spreads:</strong> Limited downside exposure</li>
              <li>• <strong>Protective puts:</strong> Hedge existing positions</li>
            </ul>
          </div>
          <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
            <h3 className="font-semibold text-teal-900 mb-3">Position Sizing</h3>
            <ul className="text-teal-700 text-sm space-y-2">
              <li>• <strong>Smaller positions:</strong> Avoid need for leverage</li>
              <li>• <strong>Sector diversification:</strong> Spread risk across industries</li>
              <li>• <strong>Time diversification:</strong> Dollar-cost averaging</li>
              <li>• <strong>Cash reserves:</strong> Opportunities without borrowed funds</li>
            </ul>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 my-8">
          <p className="text-orange-800">
            <strong>Remember:</strong> Margin is a tool, not a strategy. It should enhance well-researched positions, not compensate for poor analysis or inadequate capital.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What happens if I can't meet a margin call?</h3>
              <p className="text-gray-700">Your broker will liquidate positions to bring the account into compliance. You may have no control over which stocks are sold.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I lose more money than I invested?</h3>
              <p className="text-gray-700">Yes—if positions move against you faster than you can react, you may owe money beyond your initial investment.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How is margin interest calculated?</h3>
              <p className="text-gray-700">Daily on the amount borrowed, typically 6-12% annually. Rates vary by account size and broker.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-set-up-paper-trading-to-practice" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">← Practice with Paper Trading</h3>
              <p className="text-sm text-green-700 mt-1">Test strategies risk-free first</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-choose-a-stock-broker-fees-tools-support" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">Choose the Right Broker →</h3>
              <p className="text-sm text-blue-700 mt-1">Margin rates and requirements vary</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}