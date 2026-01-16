import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Forecast Cash Flow (Templates & Methods)',
  description: 'Create accurate cash flow forecasts with proven templates and methods. Predict cash needs, plan for seasonal variations, and avoid cash crunches.',
}

export default function HowToForecastCashFlow() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Forecast Cash Flow</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-rose-600 rounded-xl flex items-center justify-center text-white text-xl">
            🚀
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Business & Startup Finance</p>
            <h1 className="text-4xl font-bold text-gray-900">How to forecast cash flow (templates)</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Create accurate cash flow forecasts with proven templates and methods. Predict cash needs, plan for seasonal variations, and avoid cash crunches.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-rose-50 border border-rose-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-rose-900 mb-4">📊 Cash Flow Forecasting Strategy</h3>
          <p className="text-rose-700 text-sm">
            Track cash inflows and outflows over time, identify patterns and seasonality, plan for growth or downturns, and maintain adequate cash reserves for operations.
          </p>
        </div>

        <h2>Why cash flow forecasting matters</h2>
        
        <p>Cash flow forecasting predicts your business's cash position over time, helping you avoid cash shortages, plan for growth, and make informed financial decisions.</p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Benefits of Good Forecasting</h4>
            <ul className="text-green-700 text-sm space-y-2">
              <li>• Avoid cash shortages and overdraft fees</li>
              <li>• Plan for seasonal fluctuations</li>
              <li>• Make informed investment decisions</li>
              <li>• Negotiate better payment terms</li>
              <li>• Secure financing before you need it</li>
              <li>• Optimize inventory and staffing levels</li>
            </ul>
          </div>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="font-semibold text-red-800 mb-3">Risks of Poor Forecasting</h4>
            <ul className="text-red-700 text-sm space-y-2">
              <li>• Unexpected cash shortages</li>
              <li>• Inability to pay suppliers or employees</li>
              <li>• Emergency borrowing at high rates</li>
              <li>• Missed growth opportunities</li>
              <li>• Damaged vendor relationships</li>
              <li>• Potential business failure</li>
            </ul>
          </div>
        </div>

        <h2>Basic cash flow forecast template</h2>
        
        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Period</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Month 1</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Month 2</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Month 3</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Beginning Cash</td>
                <td className="border border-gray-300 px-3 py-2">$25,000</td>
                <td className="border border-gray-300 px-3 py-2">$32,000</td>
                <td className="border border-gray-300 px-3 py-2">$28,500</td>
              </tr>
              <tr className="bg-green-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Cash Inflows</td>
                <td className="border border-gray-300 px-3 py-2"></td>
                <td className="border border-gray-300 px-3 py-2"></td>
                <td className="border border-gray-300 px-3 py-2"></td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Sales Revenue</td>
                <td className="border border-gray-300 px-3 py-2">$45,000</td>
                <td className="border border-gray-300 px-3 py-2">$48,000</td>
                <td className="border border-gray-300 px-3 py-2">$52,000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Other Income</td>
                <td className="border border-gray-300 px-3 py-2">$2,000</td>
                <td className="border border-gray-300 px-3 py-2">$1,500</td>
                <td className="border border-gray-300 px-3 py-2">$3,000</td>
              </tr>
              <tr className="bg-green-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Total Inflows</td>
                <td className="border border-gray-300 px-3 py-2">$47,000</td>
                <td className="border border-gray-300 px-3 py-2">$49,500</td>
                <td className="border border-gray-300 px-3 py-2">$55,000</td>
              </tr>
              <tr className="bg-red-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Cash Outflows</td>
                <td className="border border-gray-300 px-3 py-2"></td>
                <td className="border border-gray-300 px-3 py-2"></td>
                <td className="border border-gray-300 px-3 py-2"></td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Cost of Goods Sold</td>
                <td className="border border-gray-300 px-3 py-2">$18,000</td>
                <td className="border border-gray-300 px-3 py-2">$19,200</td>
                <td className="border border-gray-300 px-3 py-2">$20,800</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Operating Expenses</td>
                <td className="border border-gray-300 px-3 py-2">$15,000</td>
                <td className="border border-gray-300 px-3 py-2">$15,500</td>
                <td className="border border-gray-300 px-3 py-2">$16,000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Loan Payments</td>
                <td className="border border-gray-300 px-3 py-2">$3,500</td>
                <td className="border border-gray-300 px-3 py-2">$3,500</td>
                <td className="border border-gray-300 px-3 py-2">$3,500</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Capital Expenditures</td>
                <td className="border border-gray-300 px-3 py-2">$3,500</td>
                <td className="border border-gray-300 px-3 py-2">$35,000</td>
                <td className="border border-gray-300 px-3 py-2">$5,000</td>
              </tr>
              <tr className="bg-red-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Total Outflows</td>
                <td className="border border-gray-300 px-3 py-2">$40,000</td>
                <td className="border border-gray-300 px-3 py-2">$53,000</td>
                <td className="border border-gray-300 px-3 py-2">$45,300</td>
              </tr>
              <tr className="bg-blue-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Net Cash Flow</td>
                <td className="border border-gray-300 px-3 py-2">$7,000</td>
                <td className="border border-gray-300 px-3 py-2">-$3,500</td>
                <td className="border border-gray-300 px-3 py-2">$9,700</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border border-gray-300 px-3 py-2 font-medium">Ending Cash</td>
                <td className="border border-gray-300 px-3 py-2">$32,000</td>
                <td className="border border-gray-300 px-3 py-2">$28,500</td>
                <td className="border border-gray-300 px-3 py-2">$38,200</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Forecasting methods and timeframes</h2>
        
        <div className="space-y-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Short-term Forecast (13 weeks)</h4>
            <div className="space-y-2 text-blue-700 text-sm">
              <p><strong>Purpose:</strong> Operational cash management and immediate needs</p>
              <p><strong>Method:</strong> Weekly detail based on known orders, bills, and commitments</p>
              <p><strong>Accuracy:</strong> High - should be within 5% of actual</p>
              <p><strong>Update frequency:</strong> Weekly</p>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="font-semibold text-purple-800 mb-3">Medium-term Forecast (12 months)</h4>
            <div className="space-y-2 text-purple-700 text-sm">
              <p><strong>Purpose:</strong> Budget planning, financing needs, growth planning</p>
              <p><strong>Method:</strong> Monthly detail based on budget and historical patterns</p>
              <p><strong>Accuracy:</strong> Moderate - within 10-15% typically acceptable</p>
              <p><strong>Update frequency:</strong> Monthly</p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Long-term Forecast (2-5 years)</h4>
            <div className="space-y-2 text-green-700 text-sm">
              <p><strong>Purpose:</strong> Strategic planning, major investments, expansion funding</p>
              <p><strong>Method:</strong> Annual or quarterly based on strategic plans</p>
              <p><strong>Accuracy:</strong> Broad ranges - focus on trends and scenarios</p>
              <p><strong>Update frequency:</strong> Quarterly or annually</p>
            </div>
          </div>
        </div>

        <h2>Scenario planning and sensitivity analysis</h2>
        
        <p>Create multiple forecasts to plan for different business conditions and test your assumptions.</p>

        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Scenario</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Revenue Change</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Key Assumptions</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Actions Required</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-green-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Optimistic</td>
                <td className="border border-gray-300 px-3 py-2">+20% growth</td>
                <td className="border border-gray-300 px-3 py-2">New contracts, market expansion</td>
                <td className="border border-gray-300 px-3 py-2">Hire staff, increase inventory</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Most Likely</td>
                <td className="border border-gray-300 px-3 py-2">+5% growth</td>
                <td className="border border-gray-300 px-3 py-2">Steady growth, current trends</td>
                <td className="border border-gray-300 px-3 py-2">Maintain current operations</td>
              </tr>
              <tr className="bg-red-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Pessimistic</td>
                <td className="border border-gray-300 px-3 py-2">-15% decline</td>
                <td className="border border-gray-300 px-3 py-2">Economic downturn, lost customers</td>
                <td className="border border-gray-300 px-3 py-2">Cut costs, preserve cash</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">⚠️ Common Forecasting Mistakes</h3>
          <ul className="text-yellow-700 space-y-2">
            <li>• <strong>Over-optimistic sales projections:</strong> Be conservative with revenue estimates</li>
            <li>• <strong>Ignoring payment delays:</strong> Factor in typical collection periods</li>
            <li>• <strong>Forgetting seasonal patterns:</strong> Account for seasonal fluctuations in business</li>
            <li>• <strong>Not updating regularly:</strong> Forecasts become useless without regular updates</li>
            <li>• <strong>Ignoring one-time events:</strong> Factor in equipment purchases, tax payments, etc.</li>
          </ul>
        </div>

        <div className="bg-rose-50 border border-rose-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-rose-800 mb-4">💡 Pro Tips</h3>
          <ul className="text-rose-700 space-y-2">
            <li>• <strong>Use rolling forecasts:</strong> Update weekly and extend the forecast period</li>
            <li>• <strong>Track forecast accuracy:</strong> Learn from variances to improve future forecasts</li>
            <li>• <strong>Automate data collection:</strong> Connect forecasting tools to your accounting system</li>
            <li>• <strong>Plan cash buffers:</strong> Maintain 10-20% cash buffer above minimum needs</li>
            <li>• <strong>Model payment terms:</strong> Track how customer payment behavior affects cash flow</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How far ahead should I forecast cash flow?</h3>
              <p className="text-gray-700">
                Minimum 13 weeks for operational needs, 12 months for planning, and 2-3 years for strategic decisions. 
                Short-term forecasts should be more detailed and accurate than long-term projections.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What's the difference between cash flow and profit?</h3>
              <p className="text-gray-700">
                Profit is revenue minus expenses over a period. Cash flow tracks actual money in and out of your bank account. 
                You can be profitable but still have cash flow problems if customers pay late or you invest heavily in inventory.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How often should I update my cash flow forecast?</h3>
              <p className="text-gray-700">
                Update your 13-week forecast weekly, monthly forecast every month, and annual forecast quarterly. 
                More frequent updates improve accuracy and help you spot problems early.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if my actual cash flow differs significantly from my forecast?</h3>
              <p className="text-gray-700">
                Analyze the variances to understand what went wrong. Common causes include optimistic sales projections, 
                unexpected expenses, or changes in customer payment behavior. Use these insights to improve future forecasts.
              </p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-write-a-simple-business-budget" 
              className="block p-4 bg-rose-50 rounded-lg hover:bg-rose-100 transition-colors"
            >
              <h3 className="font-semibold text-rose-900">← Write Business Budget</h3>
              <p className="text-sm text-rose-700 mt-1">Start with a solid budget foundation</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-manage-accounts-receivable-and-avoid-late-payers" 
              className="block p-4 bg-rose-50 rounded-lg hover:bg-rose-100 transition-colors"
            >
              <h3 className="font-semibant text-rose-900">Manage Receivables →</h3>
              <p className="text-sm text-rose-700 mt-1">Improve cash collection timing</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}