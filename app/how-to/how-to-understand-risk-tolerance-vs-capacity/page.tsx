import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Risk Tolerance vs. Risk Capacity (Know the Difference)',
  description: 'Your emotions and your finances aren\'t the same—learn to measure both and set the right asset mix.',
}

export default function RiskToleranceVsCapacityPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Risk Tolerance vs Capacity</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-xl">
            📊
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Investing Basics</p>
            <h1 className="text-4xl font-bold text-gray-900">How to understand risk tolerance vs capacity</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Your emotions and your finances aren't the same—learn to measure both and set the right asset mix.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>Definitions</h2>
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">Risk Tolerance</h3>
            <p className="text-blue-700 mb-4">Emotional ability to handle volatility and drawdowns.</p>
            <div className="bg-white rounded p-4">
              <h4 className="font-medium text-gray-800 text-sm mb-2">Psychological factors:</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• How you react to losses</li>
                <li>• Sleep-at-night comfort level</li>
                <li>• Experience with volatility</li>
                <li>• Stress from market swings</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-800 mb-4">Risk Capacity</h3>
            <p className="text-green-700 mb-4">Financial ability to take risk based on your situation.</p>
            <div className="bg-white rounded p-4">
              <h4 className="font-medium text-gray-800 text-sm mb-2">Financial factors:</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Time horizon to goal</li>
                <li>• Job stability & income</li>
                <li>• Emergency fund size</li>
                <li>• Debt levels</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>Quick framework</h2>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">Decision Framework</h3>
          <ol className="text-yellow-700 space-y-3">
            <li>
              <strong>Time horizon:</strong> Longer = more capacity for equities
              <div className="text-sm mt-1 pl-4">
                <li>20+ years: 80-100% stocks possible</li>
                <li>10-20 years: 60-80% stocks</li>
                <li>5-10 years: 40-60% stocks</li>
                <li>&lt;5 years: Focus on bonds/cash</li>
              </div>
            </li>
            <li>
              <strong>Cash buffer:</strong> 3–6 months emergency fund first
              <div className="text-sm mt-1 pl-4">Larger emergency fund = higher risk capacity</div>
            </li>
            <li>
              <strong>Debt situation:</strong> High-interest debt reduces capacity
              <div className="text-sm mt-1 pl-4">Pay off &gt;6% debt before investing in stocks</div>
            </li>
            <li>
              <strong>Sleep test:</strong> If 30–40% drop keeps you up, lower equity
              <div className="text-sm mt-1 pl-4">Tolerance limits trump capacity calculations</div>
            </li>
          </ol>
        </div>

        <h2>Risk tolerance assessment</h2>
        <div className="space-y-4 my-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="font-semibold text-red-800 mb-3">Low Risk Tolerance</h4>
            <div className="text-red-700 text-sm space-y-1">
              <li>• Lose sleep over 10-15% portfolio drops</li>
              <li>• Check portfolio daily during volatility</li>
              <li>• Strong urge to sell during crashes</li>
              <li>• New to investing or bad past experience</li>
            </div>
            <p className="text-red-600 font-medium mt-3">Suggested allocation: 20-40% stocks, 60-80% bonds</p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h4 className="font-semibold text-yellow-800 mb-3">Moderate Risk Tolerance</h4>
            <div className="text-yellow-700 text-sm space-y-1">
              <li>• Uncomfortable with 20-30% drops but can handle</li>
              <li>• Check portfolio weekly/monthly</li>
              <li>• Some anxiety but won't panic sell</li>
              <li>• Understand volatility is normal</li>
            </div>
            <p className="text-yellow-600 font-medium mt-3">Suggested allocation: 50-70% stocks, 30-50% bonds</p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">High Risk Tolerance</h4>
            <div className="text-green-700 text-sm space-y-1">
              <li>• Can handle 40%+ drops without panic</li>
              <li>• Check portfolio rarely, focus on long-term</li>
              <li>• Might buy more during crashes</li>
              <li>• Experienced with market cycles</li>
            </div>
            <p className="text-green-600 font-medium mt-3">Suggested allocation: 80-100% stocks, 0-20% bonds</p>
          </div>
        </div>

        <h2>Risk capacity factors</h2>
        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Factor</th>
                <th className="border border-gray-300 px-3 py-2">Lower Capacity</th>
                <th className="border border-gray-300 px-3 py-2">Higher Capacity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Age/Timeline</td>
                <td className="border border-gray-300 px-3 py-2">&lt;10 years to goal</td>
                <td className="border border-gray-300 px-3 py-2">20+ years to goal</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Job Security</td>
                <td className="border border-gray-300 px-3 py-2">Unstable, commission</td>
                <td className="border border-gray-300 px-3 py-2">Stable, tenure, pension</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Emergency Fund</td>
                <td className="border border-gray-300 px-3 py-2">&lt;3 months expenses</td>
                <td className="border border-gray-300 px-3 py-2">6+ months expenses</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Debt Level</td>
                <td className="border border-gray-300 px-3 py-2">High-interest debt</td>
                <td className="border border-gray-300 px-3 py-2">Low/no debt</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Other Assets</td>
                <td className="border border-gray-300 px-3 py-2">Only retirement account</td>
                <td className="border border-gray-300 px-3 py-2">Multiple accounts, real estate</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Dependents</td>
                <td className="border border-gray-300 px-3 py-2">Supporting family</td>
                <td className="border border-gray-300 px-3 py-2">Single, no dependents</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>When tolerance and capacity conflict</h2>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-purple-800 mb-4">Resolution Strategy</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-purple-700">Rule: Use the lower of the two</h4>
              <p className="text-purple-600 text-sm">If capacity says 80% stocks but tolerance says 40%, go with 40%.</p>
            </div>
            <div>
              <h4 className="font-medium text-purple-700">Example scenarios:</h4>
              <ul className="text-purple-600 text-sm space-y-2">
                <li><strong>High capacity, low tolerance:</strong> Young person who panics during drops → Start conservative and increase exposure gradually</li>
                <li><strong>Low capacity, high tolerance:</strong> Older person comfortable with risk → Stick to age-appropriate allocation despite comfort</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>How to improve over time</h2>
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Building Risk Capacity</h4>
            <ul className="text-blue-700 text-sm space-y-2">
              <li>• Build larger emergency fund</li>
              <li>• Pay down high-interest debt</li>
              <li>• Increase job skills/stability</li>
              <li>• Diversify income sources</li>
              <li>• Build non-investment assets</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Building Risk Tolerance</h4>
            <ul className="text-green-700 text-sm space-y-2">
              <li>• Education about market history</li>
              <li>• Start with small amounts</li>
              <li>• Experience market cycles</li>
              <li>• Focus on long-term goals</li>
              <li>• Avoid checking daily prices</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if tolerance and capacity conflict?</h3>
              <p className="text-gray-700">Use the lower of the two. It's better to invest conservatively and stay invested than to take too much risk and panic sell.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can risk tolerance improve over time?</h3>
              <p className="text-gray-700">Yes—education and experience help. Start conservative and gradually increase stock allocation as you get comfortable.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I take a risk tolerance quiz?</h3>
              <p className="text-gray-700">Quizzes are a starting point but often oversimplified. Consider your real financial situation and how you actually react to losses.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How often should I reassess?</h3>
              <p className="text-gray-700">Annually or after major life changes (job change, marriage, kids, approaching retirement).</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-build-a-simple-three-fund-portfolio" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">← Three-Fund Portfolio</h3>
              <p className="text-sm text-blue-700 mt-1">Simple, diversified setup</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-dollar-cost-average-and-when-not-to" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Dollar-Cost Averaging →</h3>
              <p className="text-sm text-green-700 mt-1">How it works and when not to</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}