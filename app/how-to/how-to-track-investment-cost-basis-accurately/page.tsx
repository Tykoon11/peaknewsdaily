import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Track Investment Cost Basis Accurately (Avoid Tax Errors)',
  description: 'Track cost basis for stocks, mutual funds, and crypto. Handle splits, dividends, DRIP, and transfers properly.',
}

export default function TrackInvestmentCostBasisPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Track Investment Cost Basis</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white text-xl">
            📋
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Taxes & Accounting</p>
            <h1 className="text-4xl font-bold text-gray-900">How to Track Investment Cost Basis Accurately (Avoid Tax Errors)</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Track cost basis for stocks, mutual funds, and crypto. Handle splits, dividends, DRIP, and transfers properly.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>Why cost basis matters</h2>
        
        <p>Cost basis determines your capital gains or losses when selling investments. Inaccurate tracking can lead to overpaying taxes or IRS problems.</p>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-red-900 mb-3">Common Cost Basis Errors</h3>
          <ul className="text-red-700 text-sm space-y-2">
            <li>• Using purchase price instead of adjusted basis after stock splits</li>
            <li>• Not tracking dividend reinvestments as new tax lots</li>
            <li>• Missing step-up in basis from inherited assets</li>
            <li>• Forgetting return of capital adjustments from mutual funds</li>
            <li>• Losing records from brokerage account transfers</li>
          </ul>
        </div>

        <h2>Basic tracking system</h2>
        
        <div className="space-y-4 my-8">
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
            <div>
              <p className="text-gray-700 font-medium">Record every purchase</p>
              <p className="text-gray-600 text-sm">Date, quantity, price per share, total cost including commissions</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
            <div>
              <p className="text-gray-700 font-medium">Track each tax lot separately</p>
              <p className="text-gray-600 text-sm">Different purchase dates = different tax lots with their own cost basis</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
            <div>
              <p className="text-gray-700 font-medium">Choose accounting method</p>
              <p className="text-gray-600 text-sm">FIFO, LIFO, specific identification, or average cost (mutual funds)</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
            <div>
              <p className="text-gray-700 font-medium">Adjust for corporate actions</p>
              <p className="text-gray-600 text-sm">Stock splits, mergers, spin-offs, and return of capital distributions</p>
            </div>
          </div>
        </div>

        <h2>Handling complex situations</h2>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Stock Splits & Dividends</h4>
            <div className="space-y-2">
              <p className="text-blue-700 text-sm"><strong>Stock splits:</strong> Divide original cost basis by split ratio</p>
              <p className="text-blue-700 text-sm"><strong>Stock dividends:</strong> Allocate cost between old and new shares</p>
              <p className="text-blue-700 text-sm"><strong>Spin-offs:</strong> Allocate original basis based on fair market values</p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">DRIP & Mutual Funds</h4>
            <div className="space-y-2">
              <p className="text-green-700 text-sm"><strong>DRIP:</strong> Each reinvested dividend creates new tax lot</p>
              <p className="text-green-700 text-sm"><strong>Average cost:</strong> Allowed for mutual fund shares</p>
              <p className="text-green-700 text-sm"><strong>Return of capital:</strong> Reduces cost basis, not taxable income</p>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-purple-900 mb-4">Cryptocurrency Complexity</h3>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-purple-800">Every transaction is taxable</p>
              <p className="text-purple-700 text-sm">Buying coffee with Bitcoin = sale at fair market value vs cost basis</p>
            </div>
            <div>
              <p className="font-medium text-purple-800">DeFi complications</p>
              <p className="text-purple-700 text-sm">Staking rewards, liquidity pool tokens, airdrops - all need basis tracking</p>
            </div>
            <div>
              <p className="font-medium text-purple-800">Exchange transfers</p>
              <p className="text-purple-700 text-sm">Moving crypto between wallets/exchanges isn't taxable but basis stays with coins</p>
            </div>
          </div>
        </div>

        <h2>Tools and software</h2>
        
        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Tool Type</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Best For</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Cost</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Limitations</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Broker provided</td>
                <td className="border border-gray-300 px-3 py-2">Single account tracking</td>
                <td className="border border-gray-300 px-3 py-2">Free</td>
                <td className="border border-gray-300 px-3 py-2">Lost on transfer</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Excel/Sheets</td>
                <td className="border border-gray-300 px-3 py-2">Simple portfolios</td>
                <td className="border border-gray-300 px-3 py-2">Free</td>
                <td className="border border-gray-300 px-3 py-2">Manual updates</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">TurboTax/TaxAct</td>
                <td className="border border-gray-300 px-3 py-2">Tax season imports</td>
                <td className="border border-gray-300 px-3 py-2">$50-200</td>
                <td className="border border-gray-300 px-3 py-2">Tax season only</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Portfolio trackers</td>
                <td className="border border-gray-300 px-3 py-2">Multiple accounts</td>
                <td className="border border-gray-300 px-3 py-2">$100-300/yr</td>
                <td className="border border-gray-300 px-3 py-2">Learning curve</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Crypto tools</td>
                <td className="border border-gray-300 px-3 py-2">DeFi tracking</td>
                <td className="border border-gray-300 px-3 py-2">$200-500/yr</td>
                <td className="border border-gray-300 px-3 py-2">Still evolving</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Record retention</h2>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-yellow-900 mb-4">What to Keep</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-yellow-700 text-sm space-y-2">
                <li>• <strong>Brokerage statements:</strong> Monthly/quarterly</li>
                <li>• <strong>Trade confirmations:</strong> Every buy/sell</li>
                <li>• <strong>Dividend statements:</strong> All distributions</li>
                <li>• <strong>Corporate action notices:</strong> Splits, mergers</li>
              </ul>
            </div>
            <div>
              <ul className="text-yellow-700 text-sm space-y-2">
                <li>• <strong>Form 1099-B:</strong> Annual broker reports</li>
                <li>• <strong>ACATS transfer records:</strong> Account transfers</li>
                <li>• <strong>Gift/inheritance docs:</strong> Stepped-up basis</li>
                <li>• <strong>Crypto transaction logs:</strong> All DeFi activity</li>
              </ul>
            </div>
          </div>
          <p className="text-yellow-700 text-sm mt-3">
            <strong>Retention period:</strong> 7 years after sale, or indefinitely for assets still held
          </p>
        </div>

        <h2>Tax optimization strategies</h2>
        
        <div className="space-y-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Tax-Loss Harvesting</h4>
            <div className="space-y-2">
              <p className="text-green-700 text-sm">Sell losing positions to offset gains, but watch wash sale rules</p>
              <p className="text-green-700 text-sm">Specific lot identification lets you choose high-basis shares to sell</p>
              <p className="text-green-700 text-sm">$3,000 annual limit on net losses against ordinary income</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Long-term vs Short-term</h4>
            <div className="space-y-2">
              <p className="text-blue-700 text-sm">Hold investments over 1 year for preferential capital gains rates</p>
              <p className="text-blue-700 text-sm">Track purchase dates carefully—even a day can matter</p>
              <p className="text-blue-700 text-sm">Consider timing of sales to optimize tax brackets</p>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-orange-800 mb-4">⚠️ Red Flags for IRS</h3>
          <ul className="text-orange-700 space-y-2">
            <li>• <strong>Inconsistent cost basis:</strong> Different amounts reported to IRS vs your return</li>
            <li>• <strong>Missing 1099-B forms:</strong> Failing to report all brokerage transactions</li>
            <li>• <strong>Impossible basis:</strong> Cost higher than historical stock prices</li>
            <li>• <strong>Zero basis crypto:</strong> Not tracking acquisition costs properly</li>
            <li>• <strong>Round numbers:</strong> Obviously estimated rather than actual costs</li>
          </ul>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">💡 Pro Tip</h3>
          <p className="text-blue-700">
            Set up automatic downloads from your broker to export trade data monthly. Most brokers provide CSV exports 
            that can be imported into spreadsheets or tax software. Don't wait until tax season to organize this data.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What happens if I lose my cost basis records?</h3>
              <p className="text-gray-700">
                You can reconstruct basis using old brokerage statements, tax returns, and historical price data. 
                For inherited assets, get a date-of-death valuation. Some online services help reconstruct missing data for a fee.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I handle employer stock options?</h3>
              <p className="text-gray-700">
                For ISOs, basis is the exercise price. For NQSOs, basis includes the exercise price plus the amount 
                reported as ordinary income. RSUs have basis equal to fair market value when they vest.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do I need to track cost basis in tax-advantaged accounts?</h3>
              <p className="text-gray-700">
                Not for tax purposes since gains/losses aren't taxable inside 401(k)s, IRAs, etc. But tracking helps 
                with rebalancing decisions and understanding your portfolio performance.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if the IRS cost basis doesn't match mine?</h3>
              <p className="text-gray-700">
                File Form 8949 to report the correct cost basis with explanation code. Common reasons include 
                inherited assets, wash sales, or missing corporate action adjustments from your broker.
              </p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-choose-standard-vs-itemized-deductions" 
              className="block p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors"
            >
              <h3 className="font-semibold text-emerald-900">← Standard vs Itemized Deductions</h3>
              <p className="text-sm text-emerald-700 mt-1">Choose the right deduction strategy</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-reduce-taxes-legally-credits-and-deductions" 
              className="block p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors"
            >
              <h3 className="font-semibold text-emerald-900">Reduce Taxes Legally →</h3>
              <p className="text-sm text-emerald-700 mt-1">Credits and deduction strategies</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}