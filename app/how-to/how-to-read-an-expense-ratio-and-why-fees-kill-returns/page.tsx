import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Expense Ratios Explained: Why Fees Matter So Much',
  description: 'A 1% fee can erase six figures over decades—learn to compare expense ratios and lower your costs.',
}

export default function ExpenseRatioExplainedPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Expense Ratio Explained</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-xl">
            📊
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Investing Basics</p>
            <h1 className="text-4xl font-bold text-gray-900">How to read an expense ratio (and why fees kill returns)</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          A 1% fee can erase six figures over decades—learn to compare expense ratios and lower your costs.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>What is an expense ratio?</h2>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <p className="text-blue-700 mb-3">
            <strong>Expense ratio:</strong> Annual fund operating cost, expressed as a % of assets (e.g., 0.05%).
          </p>
          <p className="text-blue-600 text-sm">
            This fee is automatically deducted from your returns—you never see a separate bill. A 0.50% expense ratio means you pay $5 annually for every $1,000 invested.
          </p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibant text-yellow-800 mb-4">Example: How Expense Ratios Work</h3>
          <div className="space-y-2 text-yellow-700">
            <p><strong>Your investment:</strong> $10,000 in Fund ABC</p>
            <p><strong>Fund's expense ratio:</strong> 0.75% per year</p>
            <p><strong>Annual fee:</strong> $10,000 × 0.0075 = $75</p>
            <p><strong>How you pay:</strong> Automatically deducted from fund returns</p>
            <p><strong>What you see:</strong> Slightly lower returns than the gross fund performance</p>
          </div>
        </div>

        <h2>Why fees matter so much</h2>
        <p>Small fee differences compound dramatically over decades:</p>
        
        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Expense Ratio</th>
                <th className="border border-gray-300 px-3 py-2">10 Years</th>
                <th className="border border-gray-300 px-3 py-2">20 Years</th>
                <th className="border border-gray-300 px-3 py-2">30 Years</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-green-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">0.05% (Low-cost index)</td>
                <td className="border border-gray-300 px-3 py-2">$25,937</td>
                <td className="border border-gray-300 px-3 py-2">$67,275</td>
                <td className="border border-gray-300 px-3 py-2">$174,494</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">0.50% (Average fund)</td>
                <td className="border border-gray-300 px-3 py-2">$25,270</td>
                <td className="border border-gray-300 px-3 py-2">$63,742</td>
                <td className="border border-gray-300 px-3 py-2">$160,769</td>
              </tr>
              <tr className="bg-red-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">1.50% (High-cost fund)</td>
                <td className="border border-gray-300 px-3 py-2">$23,674</td>
                <td className="border border-gray-300 px-3 py-2">$56,044</td>
                <td className="border border-gray-300 px-3 py-2">$132,683</td>
              </tr>
              <tr className="bg-gray-100 font-semibold">
                <td className="border border-gray-300 px-3 py-2">Cost of high fees</td>
                <td className="border border-gray-300 px-3 py-2">-$2,263</td>
                <td className="border border-gray-300 px-3 py-2">-$11,231</td>
                <td className="border border-gray-300 px-3 py-2">-$41,811</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600">*$10,000 initial investment, 7% gross annual return before fees</p>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibant text-red-800 mb-4">The Real Cost</h3>
          <p className="text-red-700 mb-3">
            A 1.45% fee difference (1.50% vs 0.05%) costs you <strong>$41,811</strong> over 30 years on just a $10,000 investment.
          </p>
          <p className="text-red-600 text-sm">
            That's nearly 24% of your final balance eaten by fees alone!
          </p>
        </div>

        <h2>Expense ratio categories</h2>
        <div className="grid md:grid-cols-3 gap-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibant text-green-800 mb-3">Excellent (0.00-0.10%)</h4>
            <div className="space-y-2 text-green-700 text-sm">
              <p><strong>Examples:</strong></p>
              <ul className="space-y-1">
                <li>• FZROX: 0.00%</li>
                <li>• VTI: 0.03%</li>
                <li>• SWTSX: 0.03%</li>
                <li>• VOO: 0.03%</li>
              </ul>
              <p className="text-xs text-green-600 mt-2">Large index funds with massive scale</p>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h4 className="font-semibant text-yellow-800 mb-3">Good (0.10-0.25%)</h4>
            <div className="space-y-2 text-yellow-700 text-sm">
              <p><strong>Examples:</strong></p>
              <ul className="space-y-1">
                <li>• Most index ETFs</li>
                <li>• Target-date funds</li>
                <li>• VEQT: 0.24%</li>
                <li>• Bond index funds</li>
              </ul>
              <p className="text-xs text-yellow-600 mt-2">Acceptable for broad diversification</p>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="font-semibant text-red-800 mb-3">Avoid (0.50%+)</h4>
            <div className="space-y-2 text-red-700 text-sm">
              <p><strong>Examples:</strong></p>
              <ul className="space-y-1">
                <li>• Most active mutual funds</li>
                <li>• Sector-specific ETFs</li>
                <li>• Complex structured products</li>
                <li>• Some target-date funds</li>
              </ul>
              <p className="text-xs text-red-600 mt-2">High fees rarely justify performance</p>
            </div>
          </div>
        </div>

        <h2>How to find expense ratios</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibant text-blue-800 mb-4">Where to Look</h3>
          <ol className="text-blue-700 space-y-2">
            <li><strong>Fund company website</strong> – Usually on the main fund page</li>
            <li><strong>Your brokerage platform</strong> – Listed in fund details</li>
            <li><strong>Prospectus/fact sheet</strong> – Official documents (search "expense ratio")</li>
            <li><strong>Financial websites</strong> – Morningstar, Yahoo Finance, etc.</li>
            <li><strong>Fund ticker lookup</strong> – Google "[ticker] expense ratio"</li>
          </ol>
        </div>

        <h2>Other fees to watch</h2>
        <p>Expense ratios aren't the only costs:</p>
        
        <div className="space-y-4 my-8">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h4 className="font-semibant text-gray-800 mb-3">Additional Costs</h4>
            <ul className="text-gray-700 space-y-2">
              <li><strong>Bid-ask spreads:</strong> Difference between buy/sell price (usually 0.01-0.10% for popular ETFs)</li>
              <li><strong>Trading commissions:</strong> Brokerage fees per trade ($0 at most major brokers now)</li>
              <li><strong>Account fees:</strong> Monthly maintenance, inactivity fees (avoid these)</li>
              <li><strong>Load fees:</strong> Sales charges on some mutual funds (avoid these entirely)</li>
              <li><strong>12b-1 fees:</strong> Marketing fees in some funds (included in expense ratio)</li>
            </ul>
          </div>
        </div>

        <h2>How to minimize fees</h2>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibant text-green-800 mb-4">Fee Reduction Strategy</h3>
          <ol className="text-green-700 space-y-3">
            <li>
              <strong>Choose broad index funds</strong>
              <div className="text-sm mt-1">Lower costs due to passive management and scale</div>
            </li>
            <li>
              <strong>Stick to major fund families</strong>
              <div className="text-sm mt-1">Vanguard, Fidelity, Schwab compete on low fees</div>
            </li>
            <li>
              <strong>Avoid actively managed funds</strong>
              <div className="text-sm mt-1">85%+ fail to beat their benchmark after fees</div>
            </li>
            <li>
              <strong>Check total cost of ownership</strong>
              <div className="text-sm mt-1">Include bid-ask spreads, account fees, etc.</div>
            </li>
            <li>
              <strong>Use fee-free brokerages</strong>
              <div className="text-sm mt-1">$0 commissions are now standard</div>
            </li>
          </ol>
        </div>

        <h2>When higher fees might be worth it</h2>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibant text-purple-800 mb-4">Rare Exceptions</h3>
          <ul className="text-purple-700 space-y-2">
            <li><strong>Unique asset classes:</strong> REITs, international small-cap, emerging markets may justify 0.3-0.5%</li>
            <li><strong>Tax-managed funds:</strong> Tax efficiency may offset higher fees in taxable accounts</li>
            <li><strong>Target-date convenience:</strong> Auto-rebalancing worth 0.1-0.2% to some investors</li>
          </ul>
          <p className="text-purple-600 text-sm mt-4">
            <strong>Rule:</strong> Higher fees should provide clear, measurable benefits that outweigh the cost.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibant text-gray-900 mb-2">Are zero-fee funds real?</h3>
              <p className="text-gray-700">Yes, but marketing budgets may offset costs elsewhere. Fidelity's FZROX is genuinely 0.00% but available only at Fidelity.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibant text-gray-900 mb-2">Is a higher fee ever worth it for core holdings?</h3>
              <p className="text-gray-700">Rarely. For core equity exposure, it's hard to justify paying &gt;0.20% when excellent options exist at 0.03-0.10%.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibant text-gray-900 mb-2">Do expense ratios change?</h3>
              <p className="text-gray-700">Yes, but slowly. Fund companies may reduce fees to stay competitive or raise them due to regulatory changes. Check annually.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibant text-gray-900 mb-2">What about performance vs. fees?</h3>
              <p className="text-gray-700">Past performance doesn't predict future returns, but high fees are permanent drags. Focus on low fees and broad diversification.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-avoid-common-beginner-investing-mistakes" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibant text-blue-900">← Avoid Investing Mistakes</h3>
              <p className="text-sm text-blue-700 mt-1">12 mistakes beginners make</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-invest-for-the-long-term-evidence-based" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibant text-green-900">Long-Term Investing →</h3>
              <p className="text-sm text-green-700 mt-1">Evidence-based playbook</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}