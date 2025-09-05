import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Manage Cash Flow for Seasonal Businesses',
  description: 'Handle irregular income and expenses with cash reserves, credit lines, and seasonal budgeting. Plan for peak and off-season periods with working capital strategies.',
}

export default function HowToManageCashFlowSeasonalBusinesses() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
        <a href="/category/how-to" className="hover:text-pink-600">How-To Guides</a>
        <span>/</span>
        <span className="text-gray-900">Manage Cash Flow for Seasonal Businesses</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center text-white mr-3">
            📊
          </div>
          <span className="text-pink-600 font-medium">Business & Startup Finance</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          How to Manage Cash Flow for Seasonal Businesses
        </h1>
        <p className="text-xl text-gray-600">
          Handle irregular income and expenses with cash reserves, credit lines, and seasonal budgeting. Plan for peak and off-season periods with working capital strategies.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">
        <div className="bg-pink-50 border-l-4 border-pink-600 p-6 mb-8">
          <h3 className="text-lg font-semibold text-pink-800 mb-2">🌊 Seasonal Cash Flow Strategy</h3>
          <p className="text-pink-700">
            Build cash reserves during peak seasons to cover 6-12 months of expenses, secure credit lines before you need them, and adjust fixed costs to match seasonal revenue patterns. Plan spending around your cycle, not calendar year.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold mb-4">Seasonal Cash Flow Challenges Require Strategic Planning</h3>
          <p className="mb-4">
            Seasonal businesses face feast-or-famine cash flow that can be devastating without proper planning. Peak seasons generate most annual revenue in just a few months, while fixed expenses continue year-round. Many profitable seasonal businesses fail due to cash flow problems during slow periods.
          </p>
          <p>
            This guide shows you how to smooth cash flow volatility, build appropriate reserves, time expenses strategically, and use financing tools to bridge seasonal gaps successfully.
          </p>
        </div>

        <h2>Understand Your Seasonal Cash Flow Pattern</h2>

        <p>Analyze historical data to identify patterns and predict future cash needs accurately.</p>

        <h3>Cash Flow Analysis Framework</h3>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 mb-6">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Month</th>
                <th className="px-4 py-3 text-left font-semibold">Revenue</th>
                <th className="px-4 py-3 text-left font-semibold">Fixed Costs</th>
                <th className="px-4 py-3 text-left font-semibold">Variable Costs</th>
                <th className="px-4 py-3 text-left font-semibold">Net Cash Flow</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 font-medium">January</td>
                <td className="px-4 py-3 text-red-600">$5,000</td>
                <td className="px-4 py-3">($12,000)</td>
                <td className="px-4 py-3">($2,000)</td>
                <td className="px-4 py-3 text-red-600">($9,000)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">June</td>
                <td className="px-4 py-3 text-green-600">$45,000</td>
                <td className="px-4 py-3">($15,000)</td>
                <td className="px-4 py-3">($18,000)</td>
                <td className="px-4 py-3 text-green-600">$12,000</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">July</td>
                <td className="px-4 py-3 text-green-600">$52,000</td>
                <td className="px-4 py-3">($15,000)</td>
                <td className="px-4 py-3">($20,000)</td>
                <td className="px-4 py-3 text-green-600">$17,000</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">December</td>
                <td className="px-4 py-3 text-yellow-600">$8,000</td>
                <td className="px-4 py-3">($12,000)</td>
                <td className="px-4 py-3">($3,000)</td>
                <td className="px-4 py-3 text-red-600">($7,000)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Seasonal Business Types and Patterns</h3>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Summer Peak Businesses</h4>
            <ul className="text-green-700 space-y-2">
              <li>• Tourism and hospitality</li>
              <li>• Landscaping and lawn care</li>
              <li>• Pool and outdoor services</li>
              <li>• Summer camps and recreation</li>
              <li>• Ice cream and cold beverages</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-3">Winter Peak Businesses</h4>
            <ul className="text-blue-700 space-y-2">
              <li>• Snow removal and winter services</li>
              <li>• Ski resorts and winter sports</li>
              <li>• Holiday retail and gifts</li>
              <li>• Tax preparation services</li>
              <li>• Heating and HVAC services</li>
            </ul>
          </div>
        </div>

        <h2>Build Strategic Cash Reserves</h2>

        <p>Cash reserves are your lifeline during slow seasons and unexpected downturns.</p>

        <h3>Reserve Calculation Methods</h3>

        <div className="bg-pink-50 p-6 rounded-lg my-8">
          <h4 className="font-semibold text-pink-800 mb-4">Cash Reserve Target Calculation</h4>
          <div className="space-y-3">
            <div className="bg-white p-4 rounded border">
              <p className="font-semibold mb-2"><strong>Method 1: Expense Coverage</strong></p>
              <p>Monthly fixed expenses × length of slow season = minimum reserve</p>
              <p className="text-sm text-gray-600">Example: $15,000/month × 6 months = $90,000 reserve</p>
            </div>
            <div className="bg-white p-4 rounded border">
              <p className="font-semibold mb-2"><strong>Method 2: Percentage of Peak Revenue</strong></p>
              <p>Peak season revenue × 15-25% = target reserve</p>
              <p className="text-sm text-gray-600">Example: $300,000 peak revenue × 20% = $60,000 reserve</p>
            </div>
            <div className="bg-white p-4 rounded border">
              <p className="font-semibold mb-2"><strong>Method 3: Historical Maximum Deficit</strong></p>
              <p>Worst historical cash shortfall × 1.5 safety factor</p>
              <p className="text-sm text-gray-600">Example: $80,000 worst deficit × 1.5 = $120,000 reserve</p>
            </div>
          </div>
        </div>

        <h3>Reserve Building Strategy</h3>

        <ul>
          <li><strong>Peak season discipline:</strong> Set aside 30-50% of peak revenue for reserves</li>
          <li><strong>Automatic transfers:</strong> Move money to savings immediately upon receipt</li>
          <li><strong>Separate accounts:</strong> Keep reserves in high-yield savings, not checking</li>
          <li><strong>Gradual building:</strong> May take 2-3 seasons to reach full target</li>
          <li><strong>Investment laddering:</strong> CDs or short-term investments for portion of reserves</li>
        </ul>

        <h2>Establish Flexible Credit Facilities</h2>

        <p>Credit lines provide backup liquidity when reserves are insufficient or unexpected needs arise.</p>

        <h3>Business Credit Line Options</h3>

        <div className="space-y-4 my-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Traditional Bank Line of Credit</h4>
            <p className="text-gray-600 mb-2">Revolving credit secured by business assets or guarantees</p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• $25,000-$250,000+ typical limits</li>
              <li>• Prime + 2-6% interest rates</li>
              <li>• Annual review and renewal</li>
              <li>• May require cash flow projections</li>
            </ul>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">SBA Seasonal Lines of Credit</h4>
            <p className="text-gray-600 mb-2">Government-backed financing for seasonal working capital</p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Lower rates due to government guarantee</li>
              <li>• Designed specifically for seasonal businesses</li>
              <li>• Requires demonstrated seasonal pattern</li>
              <li>• More flexible terms and covenants</li>
            </ul>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Asset-Based Lending</h4>
            <p className="text-gray-600 mb-2">Credit secured by inventory, accounts receivable, or equipment</p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Higher advance rates (70-90% of collateral value)</li>
              <li>• Fluctuates with asset levels</li>
              <li>• Good for inventory-heavy businesses</li>
              <li>• Monthly reporting requirements</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
          <h4 className="font-semibold text-yellow-800 mb-3">⏰ Apply During Strong Seasons</h4>
          <p className="text-yellow-700 mb-3">
            Apply for credit lines when your business is performing well, not when you need the money. Lenders prefer to see strong cash flow and full financial statements from peak operating periods.
          </p>
          <p className="text-yellow-700">
            <strong>Strategy:</strong> Apply in late peak season or early shoulder season when financials are strong but before you actually need to draw on the credit.
          </p>
        </div>

        <h2>Optimize Expense Timing</h2>

        <p>Strategic expense timing can significantly improve cash flow during challenging periods.</p>

        <h3>Fixed Cost Management</h3>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-red-50 p-6 rounded-lg">
            <h4 className="font-semibold text-red-800 mb-3">Reduce Fixed Costs</h4>
            <ul className="text-red-700 space-y-2">
              <li>• Convert salary to salary + performance bonus</li>
              <li>• Negotiate seasonal rent reductions</li>
              <li>• Use temporary/seasonal staffing</li>
              <li>• Lease equipment instead of buying</li>
              <li>• Outsource non-core functions</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Time Major Expenses</h4>
            <ul className="text-green-700 space-y-2">
              <li>• Schedule maintenance during slow seasons</li>
              <li>• Time equipment purchases with cash flow</li>
              <li>• Defer non-critical projects to peak season</li>
              <li>• Prepay annual expenses when cash is strong</li>
              <li>• Negotiate payment terms with vendors</li>
            </ul>
          </div>
        </div>

        <h3>Revenue Smoothing Strategies</h3>

        <div className="space-y-4 my-8">
          <div className="border-l-4 border-pink-600 pl-6">
            <h4 className="font-semibold text-pink-800 mb-2">Off-Season Services</h4>
            <p className="text-gray-700">Develop complementary services for slow seasons. Landscapers offer snow removal, pool companies provide hot tub maintenance, tax preparers offer bookkeeping.</p>
          </div>
          
          <div className="border-l-4 border-blue-600 pl-6">
            <h4 className="font-semibold text-blue-800 mb-2">Advance Bookings</h4>
            <p className="text-gray-700">Offer early booking discounts to generate off-season cash flow. Hotels, tour operators, and service businesses can secure deposits months in advance.</p>
          </div>
          
          <div className="border-l-4 border-green-600 pl-6">
            <h4 className="font-semibold text-green-800 mb-2">Annual Contracts</h4>
            <p className="text-gray-700">Convert seasonal customers to annual service contracts with monthly payments. Provides steady cash flow and customer retention.</p>
          </div>
        </div>

        <h2>Monitor and Forecast Cash Flow</h2>

        <p>Regular monitoring and forecasting help you anticipate problems and make proactive decisions.</p>

        <h3>Cash Flow Forecasting Tools</h3>

        <div className="bg-pink-50 border-l-4 border-pink-500 p-6 my-8">
          <h3 className="font-semibold mb-2">📈 Weekly Cash Flow Forecast</h3>
          <ul className="mt-2 space-y-1">
            <li>☐ Update 13-week rolling forecast weekly</li>
            <li>☐ Track actual vs. forecast variance</li>
            <li>☐ Include confirmed bookings and deposits</li>
            <li>☐ Model different scenarios (best/worst case)</li>
            <li>☐ Flag weeks with negative cash flow</li>
            <li>☐ Plan credit line draws in advance</li>
            <li>☐ Schedule major payments around cash flow</li>
            <li>☐ Communicate forecast to key stakeholders</li>
          </ul>
        </div>

        <h3>Key Performance Indicators</h3>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 mb-6">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">KPI</th>
                <th className="px-4 py-3 text-left font-semibold">Calculation</th>
                <th className="px-4 py-3 text-left font-semibold">Target Range</th>
                <th className="px-4 py-3 text-left font-semibold">Warning Signs</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 font-medium">Cash Runway</td>
                <td className="px-4 py-3">Cash balance ÷ monthly burn rate</td>
                <td className="px-4 py-3">6-12 months</td>
                <td className="px-4 py-3 text-red-600">Under 3 months</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Peak to Trough Ratio</td>
                <td className="px-4 py-3">Peak month revenue ÷ lowest month</td>
                <td className="px-4 py-3">3-10x</td>
                <td className="px-4 py-3 text-red-600">Over 15x</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Credit Utilization</td>
                <td className="px-4 py-3">Used credit ÷ available credit</td>
                <td className="px-4 py-3">Under 50%</td>
                <td className="px-4 py-3 text-red-600">Over 80%</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Reserve Adequacy</td>
                <td className="px-4 py-3">Cash reserves ÷ off-season expenses</td>
                <td className="px-4 py-3">1.0-1.5x</td>
                <td className="px-4 py-3 text-red-600">Under 0.8x</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Related Guides</h2>
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <Link href="/how-to/how-to-write-a-simple-business-budget" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Write Simple Business Budget</h3>
            <p className="text-pink-600 text-sm mt-2">Seasonal budgets require different approaches</p>
          </Link>
          <Link href="/how-to/how-to-get-a-business-loan-or-line-of-credit" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Get Business Loan or Line of Credit</h3>
            <p className="text-pink-600 text-sm mt-2">Credit facilities smooth seasonal gaps</p>
          </Link>
          <Link href="/how-to/how-to-choose-business-banking-and-credit-cards" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Choose Business Banking</h3>
            <p className="text-pink-600 text-sm mt-2">Seasonal businesses need flexible banking</p>
          </Link>
          <Link href="/how-to/how-to-separate-business-personal-finances" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Separate Business Personal Finances</h3>
            <p className="text-pink-600 text-sm mt-2">Clean separation supports cash flow planning</p>
          </Link>
        </div>
      </article>

      <section className="mt-12 border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">How much should I save during peak season?</h3>
            <p className="text-gray-600">
              Aim to save 30-50% of peak season revenue to cover off-season expenses and build reserves. The exact percentage depends on your expense structure and length of slow periods.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">When should I apply for a credit line?</h3>
            <p className="text-gray-600">
              Apply during your strongest financial period, typically late in peak season. Lenders want to see strong cash flow and complete financial statements before approving credit facilities.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Should I close my business during slow seasons?</h3>
            <p className="text-gray-600">
              Consider temporary closure only if revenue cannot cover variable costs. Factor in customer retention, employee availability, and startup costs when making this decision.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">How can I smooth revenue throughout the year?</h3>
            <p className="text-gray-600">
              Develop complementary off-season services, offer annual contracts with monthly payments, create advance booking programs, and explore counter-seasonal revenue opportunities.
            </p>
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How much should I save during peak season?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Aim to save 30-50% of peak season revenue to cover off-season expenses."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "When should I apply for a credit line?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Apply during your strongest financial period, typically late in peak season."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I smooth revenue throughout the year?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "Develop complementary services, offer annual contracts, and create advance booking programs."
                  }
                }
              ]
            })
          }}
        />
      </section>
    </div>
  )
}