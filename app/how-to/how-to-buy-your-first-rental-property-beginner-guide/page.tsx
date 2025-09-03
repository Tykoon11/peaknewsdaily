import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Buy Your First Rental Property: Beginner Guide',
  description: 'Complete beginner guide to buying your first rental property. Learn market analysis, financing, cash flow calculations, and property management basics.',
}

export default function BuyFirstRentalPropertyPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">First Rental Property</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-white text-xl">
            🏠
          </div>
          <div>
            <p className="text-sm text-purple-600 font-medium">Real Estate Investment</p>
            <h1 className="text-4xl font-bold text-gray-900">How to buy your first rental property (beginner guide)</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Start building wealth through real estate with this complete beginner's guide to rental property investing.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>Before you start: prerequisites</h2>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">Financial Readiness Checklist</h3>
          <ul className="text-blue-700 space-y-2">
            <li>• <strong>Credit score:</strong> 640+ (720+ for best rates)</li>
            <li>• <strong>Cash reserves:</strong> 6+ months expenses + down payment</li>
            <li>• <strong>Stable income:</strong> W-2 or 2+ years self-employment</li>
            <li>• <strong>Down payment:</strong> 20-25% for investment properties</li>
          </ul>
        </div>

        <h2>Step 1: Define your investment strategy</h2>
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-green-800 mb-4">Buy-and-Hold Strategy</h3>
            <div className="text-green-700 space-y-2">
              <p><strong>Goal:</strong> Long-term cash flow and appreciation</p>
              <p><strong>Timeline:</strong> 5+ years</p>
              <p><strong>Best for:</strong> Stable markets, W-2 employees</p>
              <p><strong>Cashflow target:</strong> $200+ per month after expenses</p>
            </div>
          </div>
          
          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-orange-800 mb-4">BRRRR Method</h3>
            <div className="text-orange-700 space-y-2">
              <p><strong>Goal:</strong> Scale faster through refinancing</p>
              <p><strong>Timeline:</strong> 6-12 months per cycle</p>
              <p><strong>Best for:</strong> Hands-on investors, growing markets</p>
              <p><strong>ARV target:</strong> 70% purchase + rehab costs</p>
            </div>
          </div>
        </div>

        <h2>Step 2: Market analysis and location</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Research Framework</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Economic Indicators</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Job growth trends</li>
                <li>• Population growth</li>
                <li>• Major employers</li>
                <li>• Infrastructure projects</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Market Metrics</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Median home prices</li>
                <li>• Days on market</li>
                <li>• Price-to-rent ratios</li>
                <li>• Rental vacancy rates</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Neighborhood Factors</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• School ratings</li>
                <li>• Crime statistics</li>
                <li>• Walkability score</li>
                <li>• Future development</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>Step 3: Financial analysis</h2>
        <div className="bg-blue-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">The 1% Rule (Starting Point)</h3>
          <div className="text-blue-700 space-y-3">
            <p><strong>Rule:</strong> Monthly rent should equal 1% of purchase price</p>
            <p><strong>Example:</strong> $150,000 purchase → $1,500/month rent target</p>
            <p><strong>Reality:</strong> Harder to find in expensive markets (aim for 0.7-0.8%)</p>
          </div>
        </div>

        <div className="bg-white border border-gray-300 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Cash Flow Analysis Template</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-2 border border-gray-300">Income/Expense</th>
                  <th className="text-left p-2 border border-gray-300">Monthly Amount</th>
                  <th className="text-left p-2 border border-gray-300">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border border-gray-300 font-medium">Gross Rent</td>
                  <td className="p-2 border border-gray-300 text-green-600">+$1,500</td>
                  <td className="p-2 border border-gray-300 text-xs text-gray-600">Market rate research</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-gray-300">Vacancy (5-8%)</td>
                  <td className="p-2 border border-gray-300 text-red-600">-$105</td>
                  <td className="p-2 border border-gray-300 text-xs text-gray-600">Local vacancy rates</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-300">Property Tax</td>
                  <td className="p-2 border border-gray-300 text-red-600">-$250</td>
                  <td className="p-2 border border-gray-300 text-xs text-gray-600">County assessor</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-gray-300">Insurance</td>
                  <td className="p-2 border border-gray-300 text-red-600">-$125</td>
                  <td className="p-2 border border-gray-300 text-xs text-gray-600">Landlord policy quote</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-300">Maintenance (5-10%)</td>
                  <td className="p-2 border border-gray-300 text-red-600">-$112</td>
                  <td className="p-2 border border-gray-300 text-xs text-gray-600">Property age factor</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border border-gray-300">Property Management</td>
                  <td className="p-2 border border-gray-300 text-red-600">-$135</td>
                  <td className="p-2 border border-gray-300 text-xs text-gray-600">8-12% if outsourced</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-300">Mortgage Payment</td>
                  <td className="p-2 border border-gray-300 text-red-600">-$640</td>
                  <td className="p-2 border border-gray-300 text-xs text-gray-600">P&I only</td>
                </tr>
                <tr className="bg-blue-100 font-medium">
                  <td className="p-2 border border-gray-300">NET CASH FLOW</td>
                  <td className="p-2 border border-gray-300 text-green-600">+$133</td>
                  <td className="p-2 border border-gray-300 text-xs text-gray-600">Target: $200+ minimum</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2>Step 4: Financing options</h2>
        <div className="space-y-6 my-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-800 mb-4">Conventional Investment Loans</h3>
            <div className="text-yellow-700 space-y-2">
              <p><strong>Down payment:</strong> 20-25% minimum</p>
              <p><strong>Rates:</strong> 0.5-0.75% higher than owner-occupied</p>
              <p><strong>DTI limits:</strong> 43-45% including new rental income</p>
              <p><strong>Best for:</strong> Strong credit (740+) and stable income</p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-800 mb-4">Portfolio Lenders</h3>
            <div className="text-green-700 space-y-2">
              <p><strong>Down payment:</strong> 15-20% possible</p>
              <p><strong>Rates:</strong> Variable, often competitive</p>
              <p><strong>Benefits:</strong> Keep loans in-house, flexible underwriting</p>
              <p><strong>Best for:</strong> Local banks, credit unions in target area</p>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-purple-800 mb-4">Hard Money/Private Lending</h3>
            <div className="text-purple-700 space-y-2">
              <p><strong>Down payment:</strong> 10-20% of ARV</p>
              <p><strong>Rates:</strong> 8-15% short-term</p>
              <p><strong>Benefits:</strong> Fast closing, BRRRR strategy</p>
              <p><strong>Best for:</strong> Fix-and-flip or quick refinance plans</p>
            </div>
          </div>
        </div>

        <h2>Step 5: Property inspection and due diligence</h2>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">Critical Inspection Areas</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-red-800 mb-2">Structural Systems</h4>
              <ul className="text-red-700 text-sm space-y-1">
                <li>• Foundation and basement</li>
                <li>• Roof and gutters</li>
                <li>• HVAC systems (age/efficiency)</li>
                <li>• Electrical panel and wiring</li>
                <li>• Plumbing (materials, water pressure)</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-red-800 mb-2">Investment-Specific Issues</h4>
              <ul className="text-red-700 text-sm space-y-1">
                <li>• Lead paint (pre-1978)</li>
                <li>• Mold and moisture issues</li>
                <li>• Code compliance/permits</li>
                <li>• Rental income verification</li>
                <li>• Tenant lease review</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>Step 6: Property management basics</h2>
        <div className="bg-gray-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Self-Management vs Hiring</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-semibold text-green-800 mb-2">Self-Management</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• <strong>Cost:</strong> $0 monthly fees</li>
                <li>• <strong>Control:</strong> Direct tenant relationships</li>
                <li>• <strong>Learning:</strong> Hands-on experience</li>
                <li>• <strong>Time:</strong> 5-10 hours/month per unit</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded">
              <h4 className="font-semibold text-blue-800 mb-2">Professional Management</h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• <strong>Cost:</strong> 8-12% of gross rent</li>
                <li>• <strong>Benefits:</strong> 24/7 coverage, expertise</li>
                <li>• <strong>Scaling:</strong> Essential for multiple properties</li>
                <li>• <strong>Distance:</strong> Manage out-of-state properties</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>Common beginner mistakes to avoid</h2>
        <div className="space-y-4 my-8">
          <div className="border-l-4 border-red-400 pl-4">
            <h3 className="font-semibold text-red-800">Buying in the wrong neighborhood</h3>
            <p className="text-red-700 text-sm">Low prices often mean high vacancy, crime, or declining values. Focus on B and C+ areas with growth potential.</p>
          </div>
          
          <div className="border-l-4 border-red-400 pl-4">
            <h3 className="font-semibold text-red-800">Underestimating expenses</h3>
            <p className="text-red-700 text-sm">Budget 50% of gross rent for all expenses (taxes, insurance, maintenance, vacancy, management).</p>
          </div>
          
          <div className="border-l-4 border-red-400 pl-4">
            <h3 className="font-semibold text-red-800">Emotional decision making</h3>
            <p className="text-red-700 text-sm">Treat it as a business. If the numbers don't work, walk away regardless of how much you "love" the property.</p>
          </div>
          
          <div className="border-l-4 border-red-400 pl-4">
            <h3 className="font-semibold text-red-800">Insufficient cash reserves</h3>
            <p className="text-red-700 text-sm">Keep 6+ months of expenses per property. Major repairs and extended vacancies happen when you least expect them.</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How much money do I need to start?</h3>
              <p className="text-gray-700">Plan for 25% down payment plus 6 months reserves. For a $150K property: $37.5K down + $10K reserves + $5K closing costs = $52.5K minimum.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I buy locally or invest out-of-state?</h3>
              <p className="text-gray-700">Start local for your first 2-3 properties to learn the process. Out-of-state requires more research, professional management, and higher risk tolerance.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What's a good cap rate for rental properties?</h3>
              <p className="text-gray-700">Target 6-10% cap rates depending on market. Higher cap rates often mean higher risk/management intensive. Factor in appreciation potential, not just current yield.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I find good deals in competitive markets?</h3>
              <p className="text-gray-700">Build relationships with wholesalers, direct mail campaigns, drive for expired listings, and network with agents who understand investor criteria.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-house-hack-to-live-for-less" 
              className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
            >
              <h3 className="font-semibold text-purple-900">House Hacking →</h3>
              <p className="text-sm text-purple-700 mt-1">Live for free while building equity</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-analyze-rental-property-deals" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">← Deal Analysis</h3>
              <p className="text-sm text-green-700 mt-1">Advanced property evaluation</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}