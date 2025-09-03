import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Pick ETFs: A Beginner\'s Guide',
  description: 'Learn the 4 rules for picking beginner-friendly ETFs—broad exposure, low fees, liquidity, and simplicity.',
}

export default function PickETFsBeginnersPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Pick ETFs Beginners</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-xl">
            📊
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Investing Basics</p>
            <h1 className="text-4xl font-bold text-gray-900">How to pick ETFs for beginners</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Learn the 4 rules for picking beginner-friendly ETFs—broad exposure, low fees, liquidity, and simplicity.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>The 4 rules</h2>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xl mb-4">
              1
            </div>
            <h3 className="text-lg font-semibold text-blue-800 mb-3">Broad exposure</h3>
            <p className="text-blue-700 text-sm mb-3">Total-market or S&P 500; global if you want extra diversification.</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs font-medium text-gray-800">Good Examples:</p>
              <ul className="text-xs text-gray-700 space-y-1 mt-1">
                <li>• VTI (Total US Stock Market)</li>
                <li>• VT (Total World Stock Market)</li>
                <li>• VEQT (Global All-Equity)</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white text-xl mb-4">
              2
            </div>
            <h3 className="text-lg font-semibold text-green-800 mb-3">Low fees</h3>
            <p className="text-green-700 text-sm mb-3">Expense ratio matters—under 0.20% is a good rule of thumb.</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs font-medium text-gray-800">Fee Comparison:</p>
              <ul className="text-xs text-gray-700 space-y-1 mt-1">
                <li>• Great: 0.03-0.05% (VTI, VOO)</li>
                <li>• Good: 0.05-0.20% (Most index ETFs)</li>
                <li>• Avoid: 0.50%+ (Active funds)</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white text-xl mb-4">
              3
            </div>
            <h3 className="text-lg font-semibold text-purple-800 mb-3">Liquidity</h3>
            <p className="text-purple-700 text-sm mb-3">Higher assets/volume = tighter spreads.</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs font-medium text-gray-800">Look For:</p>
              <ul className="text-xs text-gray-700 space-y-1 mt-1">
                <li>• Assets: $1B+ preferred</li>
                <li>• Volume: 100k+ shares/day</li>
                <li>• Spread: &lt;0.05% bid-ask</li>
              </ul>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white text-xl mb-4">
              4
            </div>
            <h3 className="text-lg font-semibold text-orange-800 mb-3">Simplicity</h3>
            <p className="text-orange-700 text-sm mb-3">Fewer funds, clearer strategy.</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs font-medium text-gray-800">Start Simple:</p>
              <ul className="text-xs text-gray-700 space-y-1 mt-1">
                <li>• 1 fund: Total market</li>
                <li>• 3 funds: US/Intl/Bonds</li>
                <li>• Avoid: 10+ thematic ETFs</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>Beginner-friendly ETF examples</h2>
        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">ETF</th>
                <th className="border border-gray-300 px-3 py-2">Expense Ratio</th>
                <th className="border border-gray-300 px-3 py-2">What It Holds</th>
                <th className="border border-gray-300 px-3 py-2">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-blue-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">VTI</td>
                <td className="border border-gray-300 px-3 py-2">0.03%</td>
                <td className="border border-gray-300 px-3 py-2">Total US stock market</td>
                <td className="border border-gray-300 px-3 py-2">US-focused beginners</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">VOO</td>
                <td className="border border-gray-300 px-3 py-2">0.03%</td>
                <td className="border border-gray-300 px-3 py-2">S&P 500 companies</td>
                <td className="border border-gray-300 px-3 py-2">Large-cap focus</td>
              </tr>
              <tr className="bg-blue-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">VT</td>
                <td className="border border-gray-300 px-3 py-2">0.08%</td>
                <td className="border border-gray-300 px-3 py-2">Global stocks (US+Intl)</td>
                <td className="border border-gray-300 px-3 py-2">Global diversification</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">VEQT (CA)</td>
                <td className="border border-gray-300 px-3 py-2">0.24%</td>
                <td className="border border-gray-300 px-3 py-2">Global equity allocation</td>
                <td className="border border-gray-300 px-3 py-2">Canadian one-ticket</td>
              </tr>
              <tr className="bg-blue-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">VFV (CA)</td>
                <td className="border border-gray-300 px-3 py-2">0.09%</td>
                <td className="border border-gray-300 px-3 py-2">S&P 500 in CAD</td>
                <td className="border border-gray-300 px-3 py-2">Canadian S&P exposure</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Red flags to avoid</h2>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">Complex/Risky ETFs for Beginners</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-red-700 mb-2">❌ Leveraged/Inverse ETFs</h4>
              <ul className="text-red-600 text-sm space-y-1">
                <li>• 2x/3x daily leverage</li>
                <li>• Complex decay over time</li>
                <li>• Examples: TQQQ, SQQQ</li>
                <li>• For day traders, not investors</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-red-700 mb-2">❌ Niche Thematic ETFs</h4>
              <ul className="text-red-600 text-sm space-y-1">
                <li>• Single industry/trend focus</li>
                <li>• High fees (0.50-0.95%)</li>
                <li>• Examples: Cannabis, robotics</li>
                <li>• Speculation, not core holdings</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>How to research an ETF</h2>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">Quick Research Checklist</h3>
          <ol className="text-yellow-700 space-y-2">
            <li><strong>1. Check the expense ratio</strong> – Find on fund company website or broker</li>
            <li><strong>2. Look at the holdings</strong> – What companies/sectors are in it?</li>
            <li><strong>3. Review total assets</strong> – Prefer $500M+ in assets</li>
            <li><strong>4. Read the fact sheet</strong> – One-page summary of strategy</li>
            <li><strong>5. Compare alternatives</strong> – Similar ETFs from other providers</li>
          </ol>
        </div>

        <h2>Building your first ETF portfolio</h2>
        <div className="space-y-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Ultra Simple (1 Fund)</h4>
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                100%
              </div>
              <div>
                <p className="font-medium text-green-800">VTI or VT or VEQT</p>
                <p className="text-sm text-green-700">Total market exposure in one fund</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Simple Balanced (3 Funds)</h4>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2">
                  60%
                </div>
                <p className="font-medium text-blue-800 text-sm">US Stocks</p>
                <p className="text-xs text-blue-700">VTI/VOO</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2">
                  30%
                </div>
                <p className="font-medium text-blue-800 text-sm">Intl Stocks</p>
                <p className="text-xs text-blue-700">VTIAX</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-blue-300 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2">
                  10%
                </div>
                <p className="font-medium text-blue-800 text-sm">Bonds</p>
                <p className="text-xs text-blue-700">BND</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How many ETFs do I need?</h3>
              <p className="text-gray-700">1–3 for most beginners. One broad market fund gives you thousands of stocks. More funds = more complexity without much benefit.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Dividends or accumulation ETFs?</h3>
              <p className="text-gray-700">Either works—focus on total return. In taxable accounts, accumulating (reinvesting) can be more tax-efficient.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I pick ETFs based on past performance?</h3>
              <p className="text-gray-700">No. Past performance doesn't predict future returns. Focus on low fees, broad exposure, and consistency with your plan.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What's the difference between ETFs and index funds?</h3>
              <p className="text-gray-700">Both track an index, but ETFs trade like stocks (intraday) while mutual funds price once daily. ETFs often have lower minimums.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-choose-a-brokerage-account-checklist" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">← Choose a Brokerage</h3>
              <p className="text-sm text-blue-700 mt-1">Complete selection checklist</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-build-a-simple-three-fund-portfolio" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibant text-green-900">Build Three-Fund Portfolio →</h3>
              <p className="text-sm text-green-700 mt-1">Simple, diversified setup</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}