import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Long-Term Investing: An Evidence-Based Playbook',
  description: 'Simple rules backed by data—diversify, lower fees, automate, rebalance, and stay invested through cycles.',
}

export default function LongTermInvestingEvidenceBasedPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Long-Term Evidence-Based Investing</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-xl">
            📊
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Investing Basics</p>
            <h1 className="text-4xl font-bold text-gray-900">How to invest for the long term (evidence-based)</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Simple rules backed by data—diversify, lower fees, automate, rebalance, and stay invested through cycles.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>Core principles backed by research</h2>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibant text-blue-800 mb-3">1. Own the market</h4>
            <p className="text-blue-700 text-sm mb-3">Broad, low-cost index funds outperform 85%+ of active managers long-term</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs font-medium text-gray-800">Research:</p>
              <p className="text-xs text-gray-700">SPIVA reports consistently show active fund underperformance after fees</p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibant text-green-800 mb-3">2. Lower costs</h4>
            <p className="text-green-700 text-sm mb-3">Fees and taxes compound against you over decades</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs font-medium text-gray-800">Research:</p>
              <p className="text-xs text-gray-700">Morningstar studies show expense ratio is the best predictor of fund performance</p>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="font-semibant text-purple-800 mb-3">3. Automate</h4>
            <p className="text-purple-700 text-sm mb-3">Systematic investing removes emotion and timing errors</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs font-medium text-gray-800">Research:</p>
              <p className="text-xs text-gray-700">DALBAR studies show average investor underperforms market due to poor timing</p>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h4 className="font-semibant text-yellow-800 mb-3">4. Behavior &gt; brilliance</h4>
            <p className="text-yellow-700 text-sm mb-3">Avoiding panic selling beats trying to pick winners</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs font-medium text-gray-800">Research:</p>
              <p className="text-xs text-gray-700">Nobel Prize research shows behavioral biases destroy returns more than bad picks</p>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="font-semibant text-red-800 mb-3">5. Time in &gt; timing</h4>
            <p className="text-red-700 text-sm mb-3">Missing best days drastically reduces returns</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs font-medium text-gray-800">Research:</p>
              <p className="text-xs text-gray-700">Missing the 10 best S&P 500 days over 20 years cuts returns in half</p>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h4 className="font-semibant text-gray-800 mb-3">6. Stay diversified</h4>
            <p className="text-gray-700 text-sm mb-3">Broad exposure reduces risk without sacrificing returns</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs font-medium text-gray-800">Research:</p>
              <p className="text-xs text-gray-700">Modern Portfolio Theory shows diversification is the only "free lunch"</p>
            </div>
          </div>
        </div>

        <h2>The evidence for passive investing</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibant text-blue-800 mb-4">SPIVA Scorecard Results</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-blue-100">
                <tr>
                  <th className="text-left p-2">Time Period</th>
                  <th className="text-left p-2">% of Active Funds Beat Index</th>
                </tr>
              </thead>
              <tbody className="text-blue-700">
                <tr className="bg-white">
                  <td className="p-2">1 Year</td>
                  <td className="p-2">~35%</td>
                </tr>
                <tr>
                  <td className="p-2">5 Years</td>
                  <td className="p-2">~20%</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-2">10 Years</td>
                  <td className="p-2">~15%</td>
                </tr>
                <tr>
                  <td className="p-2">20 Years</td>
                  <td className="p-2">~10%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-blue-600 text-sm mt-3">The longer the period, the fewer active funds beat simple index investing.</p>
        </div>

        <h2>Historical market performance</h2>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibant text-green-800 mb-4">S&P 500 Rolling Returns</h3>
          <div className="space-y-3 text-green-700">
            <div className="flex justify-between">
              <span>1-year periods (1950-2023):</span>
              <span>74% positive</span>
            </div>
            <div className="flex justify-between">
              <span>5-year periods:</span>
              <span>88% positive</span>
            </div>
            <div className="flex justify-between">
              <span>10-year periods:</span>
              <span>94% positive</span>
            </div>
            <div className="flex justify-between">
              <span>20-year periods:</span>
              <span>100% positive</span>
            </div>
          </div>
          <p className="text-green-600 text-sm mt-3">Time dramatically improves your odds of positive returns.</p>
        </div>

        <h2>The cost of market timing</h2>
        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Scenario (1993-2013)</th>
                <th className="border border-gray-300 px-3 py-2">Annualized Return</th>
                <th className="border border-gray-300 px-3 py-2">$10k Becomes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-green-50">
                <td className="border border-gray-300 px-3 py-2">Stayed invested</td>
                <td className="border border-gray-300 px-3 py-2">9.2%</td>
                <td className="border border-gray-300 px-3 py-2">$58,352</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Missed 10 best days</td>
                <td className="border border-gray-300 px-3 py-2">5.4%</td>
                <td className="border border-gray-300 px-3 py-2">$28,723</td>
              </tr>
              <tr className="bg-red-50">
                <td className="border border-gray-300 px-3 py-2">Missed 20 best days</td>
                <td className="border border-gray-300 px-3 py-2">2.5%</td>
                <td className="border border-gray-300 px-3 py-2">$16,505</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Missed 30 best days</td>
                <td className="border border-gray-300 px-3 py-2">0.1%</td>
                <td className="border border-gray-300 px-3 py-2">$10,197</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Practical long-term workflow</h2>
        <div className="bg-gray-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibant text-gray-800 mb-4">The Simple System</h3>
          <ol className="text-gray-700 space-y-3">
            <li>
              <strong>Choose a simple portfolio</strong>
              <div className="text-sm mt-1 ml-4">
                <li>• One-ticket: Target-date fund or balanced fund</li>
                <li>• Three-fund: US/International/Bonds</li>
                <li>• Two-fund: Total world stocks + bonds</li>
              </div>
            </li>
            <li>
              <strong>Automate contributions</strong>
              <div className="text-sm mt-1 ml-4">
                <li>• Set up automatic transfers from checking</li>
                <li>• Auto-invest in same funds every time</li>
                <li>• Enable dividend reinvestment</li>
              </div>
            </li>
            <li>
              <strong>Set rebalancing rules</strong>
              <div className="text-sm mt-1 ml-4">
                <li>• Annual rebalancing or ±5% drift bands</li>
                <li>• Use new contributions first</li>
                <li>• Rebalance in tax-advantaged accounts</li>
              </div>
            </li>
            <li>
              <strong>Review once per year</strong>
              <div className="text-sm mt-1 ml-4">
                <li>• Check allocation drift</li>
                <li>• Increase contribution if possible</li>
                <li>• Otherwise, ignore daily noise</li>
              </div>
            </li>
          </ol>
        </div>

        <h2>Behavioral rules for success</h2>
        <div className="space-y-4 my-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h4 className="font-semibant text-yellow-800 mb-3">During Bull Markets</h4>
            <ul className="text-yellow-700 space-y-1 text-sm">
              <li>• Don't get overconfident or chase hot sectors</li>
              <li>• Stick to your rebalancing plan (take profits)</li>
              <li>• Resist urge to become more aggressive</li>
              <li>• Keep contributing consistently</li>
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="font-semibant text-red-800 mb-3">During Bear Markets</h4>
            <ul className="text-red-700 space-y-1 text-sm">
              <li>• Don't panic sell (hardest rule to follow)</li>
              <li>• Continue regular contributions (buy low)</li>
              <li>• Avoid financial news/social media</li>
              <li>• Remember: this too shall pass</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibant text-blue-800 mb-3">Always</h4>
            <ul className="text-blue-700 space-y-1 text-sm">
              <li>• Focus on savings rate, not investment returns</li>
              <li>• Increase income and reduce expenses</li>
              <li>• Stay diversified globally</li>
              <li>• Trust the process and compound interest</li>
            </ul>
          </div>
        </div>

        <h2>The power of compound interest</h2>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibant text-green-800 mb-4">Einstein's "8th Wonder"</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-green-700 font-medium mb-2">Starting at age 25:</p>
              <ul className="text-green-600 text-sm space-y-1">
                <li>• $500/month for 40 years</li>
                <li>• Total contributions: $240,000</li>
                <li>• Final value at 7%: $1,310,000</li>
                <li>• <strong>Growth: $1,070,000</strong></li>
              </ul>
            </div>
            <div>
              <p className="text-green-700 font-medium mb-2">Starting at age 35:</p>
              <ul className="text-green-600 text-sm space-y-1">
                <li>• $500/month for 30 years</li>
                <li>• Total contributions: $180,000</li>
                <li>• Final value at 7%: $612,000</li>
                <li>• <strong>Growth: $432,000</strong></li>
              </ul>
            </div>
          </div>
          <p className="text-green-600 text-sm mt-4 font-medium">
            Starting 10 years earlier with the same monthly amount results in $698,000 more!
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibant text-gray-900 mb-2">What return should I expect long-term?</h3>
              <p className="text-gray-700">No guarantees, but US stocks have averaged ~10% before inflation since 1950. Plan conservatively for 6-8% after inflation.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibant text-gray-900 mb-2">When should I change my investment strategy?</h3>
              <p className="text-gray-700">Only after major life changes (marriage, kids, job loss, nearing retirement)—not because of market headlines or performance.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibant text-gray-900 mb-2">How do I stay motivated during 20+ year journey?</h3>
              <p className="text-gray-700">Focus on the process (saving rate, automation) not daily results. Celebrate milestones like first $10k, $100k, etc.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibant text-gray-900 mb-2">Should I try to beat the market?</h3>
              <p className="text-gray-700">The evidence says no. Even professional fund managers struggle to beat index funds consistently after fees. Focus on saving more instead.</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibant text-blue-800 mb-2">Remember This</h3>
          <p className="text-blue-700">
            "Time in the market beats timing the market. Your behavior matters more than your brilliance. The best investment strategy is the one you can stick with for decades."
          </p>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-read-an-expense-ratio-and-why-fees-kill-returns" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibant text-blue-900">← Understand Expense Ratios</h3>
              <p className="text-sm text-blue-700 mt-1">Why fees matter so much</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-spot-and-avoid-bank-scams-and-phishing" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              <h3 className="font-semibant text-green-900">Avoid Bank Scams →</h3>
              <p className="text-sm text-green-700 mt-1">Protect your investments</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}