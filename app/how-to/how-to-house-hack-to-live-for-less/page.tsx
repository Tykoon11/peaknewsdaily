import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to House Hack to Live for Less (Complete Guide)',
  description: 'Learn house hacking strategies to reduce housing costs while building wealth. Duplex, triplex, and roommate rental strategies with financing tips.',
}

export default function HouseHackingPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">House Hacking Guide</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-white text-xl">
            🏡
          </div>
          <div>
            <p className="text-sm text-purple-600 font-medium">Real Estate Investment</p>
            <h1 className="text-4xl font-bold text-gray-900">How to house hack to live for less</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Reduce your housing costs to near-zero while building equity and real estate experience.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>What is house hacking?</h2>
        <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
          <h3 className="text-lg font-semibold text-green-800 mb-3">House Hacking Definition</h3>
          <div className="text-green-700 space-y-3">
            <p><strong>Concept:</strong> Buy a multi-unit property, live in one unit, rent out the others</p>
            <p><strong>Goal:</strong> Rental income covers most/all of your housing expenses</p>
            <p><strong>Benefits:</strong> Owner-occupied financing, forced savings, real estate education</p>
            <p><strong>Timeline:</strong> Live there 1+ years (loan requirement), then repeat or convert to rental</p>
          </div>
        </div>

        <h2>House hacking strategies</h2>
        <div className="grid gap-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">Strategy 1: Multi-Unit Properties</h3>
            <div className="text-blue-700 space-y-3">
              <p><strong>Property types:</strong> Duplex, triplex, fourplex (2-4 units max for owner-occupied loans)</p>
              <p><strong>You live in:</strong> One unit (often the best or worst unit)</p>
              <p><strong>You rent out:</strong> 1-3 other units to cover mortgage</p>
              <p><strong>Best for:</strong> Higher income areas, established rental markets</p>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-orange-800 mb-4">Strategy 2: Single-Family Roommates</h3>
            <div className="text-orange-700 space-y-3">
              <p><strong>Property types:</strong> 3-5 bedroom single-family home</p>
              <p><strong>You live in:</strong> Master bedroom/suite</p>
              <p><strong>You rent out:</strong> Individual bedrooms to roommates</p>
              <p><strong>Best for:</strong> College towns, young professional areas</p>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-purple-800 mb-4">Strategy 3: ADU/Basement Conversion</h3>
            <div className="text-purple-700 space-y-3">
              <p><strong>Property types:</strong> Single-family with basement/garage/ADU potential</p>
              <p><strong>You live in:</strong> Main house</p>
              <p><strong>You rent out:</strong> Converted basement, garage apartment, or ADU</p>
              <p><strong>Best for:</strong> High-rent areas, zoning allows ADUs</p>
            </div>
          </div>
        </div>

        <h2>Financing your house hack</h2>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">Owner-Occupied Loan Benefits</h3>
          <div className="text-yellow-700 space-y-3">
            <p><strong>Down payment:</strong> 3-5% FHA/VA vs 20-25% investment property</p>
            <p><strong>Interest rates:</strong> 0.5-1% lower than investment property rates</p>
            <p><strong>PMI removal:</strong> Possible once you hit 20% equity</p>
            <p><strong>Commitment:</strong> Must live there at least 12 months</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-green-800 mb-4">FHA Loan (Most Popular)</h3>
            <div className="text-green-700 space-y-2">
              <p><strong>Down payment:</strong> 3.5%</p>
              <p><strong>Credit score:</strong> 580+ (3.5% down), 500+ (10% down)</p>
              <p><strong>Property limit:</strong> Up to 4 units</p>
              <p><strong>MIP:</strong> 0.85% annual + 1.75% upfront</p>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">VA Loan (Veterans)</h3>
            <div className="text-blue-700 space-y-2">
              <p><strong>Down payment:</strong> $0</p>
              <p><strong>Credit score:</strong> 620+ (most lenders)</p>
              <p><strong>Property limit:</strong> Up to 4 units</p>
              <p><strong>Funding fee:</strong> 2.15% (first-time), waived for disabled vets</p>
            </div>
          </div>
        </div>

        <h2>Financial analysis example</h2>
        <div className="bg-white border border-gray-300 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Duplex House Hack Example</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Property Details</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Purchase price: $320,000</li>
                <li>• Down payment (5%): $16,000</li>
                <li>• Loan amount: $304,000</li>
                <li>• Rate: 7.5%, 30-year</li>
                <li>• P&I payment: $2,126/month</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Monthly Cash Flow</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Rental income: $1,400</li>
                <li>• Property tax: $400</li>
                <li>• Insurance: $150</li>
                <li>• Maintenance reserve: $200</li>
                <li>• <strong className="text-green-600">Your net housing cost: $476</strong></li>
              </ul>
            </div>
          </div>
          <div className="bg-green-100 p-4 rounded mt-4">
            <p className="text-green-800"><strong>Result:</strong> Instead of paying $2,200/month rent, you pay $476 while building equity in a $320k asset.</p>
          </div>
        </div>

        <h2>Finding house hackable properties</h2>
        <div className="space-y-6 my-8">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Multi-Unit Property Search</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">✓ Look For</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Separate entrances</li>
                  <li>• Separate utilities/meters</li>
                  <li>• Similar-sized units</li>
                  <li>• Good rental comps nearby</li>
                  <li>• Established tenant base</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">✗ Avoid</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Shared utilities</li>
                  <li>• Extensive deferred maintenance</li>
                  <li>• Problematic existing tenants</li>
                  <li>• Illegal conversions</li>
                  <li>• Areas with declining rents</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">Single-Family House Hack Criteria</h3>
            <div className="text-blue-700 space-y-2">
              <p><strong>Bedrooms:</strong> 3+ bedrooms (4-5 optimal for room rental)</p>
              <p><strong>Bathrooms:</strong> 2+ baths minimum, 3+ preferred</p>
              <p><strong>Location:</strong> Near colleges, hospitals, downtown areas</p>
              <p><strong>Parking:</strong> Off-street parking for multiple cars</p>
              <p><strong>Layout:</strong> Private entrance to your suite if possible</p>
            </div>
          </div>
        </div>

        <h2>Managing your house hack</h2>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">Living with Tenants: Best Practices</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-red-800 mb-2">Professional Boundaries</h4>
              <ul className="text-red-700 text-sm space-y-1">
                <li>• Written lease agreements</li>
                <li>• Regular rent collection</li>
                <li>• Scheduled property inspections</li>
                <li>• Document all maintenance requests</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-red-800 mb-2">Personal Boundaries</h4>
              <ul className="text-red-700 text-sm space-y-1">
                <li>• Separate living spaces</li>
                <li>• Clear house rules</li>
                <li>• Emergency contact procedures</li>
                <li>• Respect for privacy (both ways)</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>Tenant screening for house hacks</h2>
        <div className="bg-orange-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-orange-800 mb-4">Extra Important When You Live There</h3>
          <div className="text-orange-700 space-y-3">
            <p><strong>Income verification:</strong> 3x rent in gross monthly income</p>
            <p><strong>Credit check:</strong> 650+ score, no recent evictions</p>
            <p><strong>Background check:</strong> Criminal history, especially violent crimes</p>
            <p><strong>References:</strong> Previous landlords, employers, personal references</p>
            <p><strong>In-person interview:</strong> Trust your gut about personality fit</p>
          </div>
        </div>

        <h2>Tax implications</h2>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-purple-800 mb-4">House Hacking Tax Strategy</h3>
          <div className="text-purple-700 space-y-3">
            <p><strong>Rental income:</strong> Report rental portions as business income</p>
            <p><strong>Expense allocation:</strong> Deduct percentage of expenses based on rental use</p>
            <p><strong>Depreciation:</strong> Depreciate rental portion of property value</p>
            <p><strong>Home office:</strong> May qualify if you manage the property from home</p>
            <p><strong>Professional advice:</strong> Consult CPA familiar with real estate</p>
          </div>
        </div>

        <h2>Exit strategies</h2>
        <div className="space-y-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Strategy 1: Convert to Full Rental</h4>
            <p className="text-green-700 text-sm mb-2">Move out after 1 year, rent your former unit</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs text-gray-700">Benefits: Full rental income, tax depreciation, potential appreciation</p>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h4 className="font-semibold text-yellow-800 mb-3">Strategy 2: Sell and Repeat</h4>
            <p className="text-yellow-700 text-sm mb-2">Sell after 2 years, use equity for next house hack</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs text-gray-700">Benefits: Primary residence capital gains exclusion, scaling opportunity</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Strategy 3: Refinance and Scale</h4>
            <p className="text-blue-700 text-sm mb-2">Cash-out refi to fund next investment</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs text-gray-700">Benefits: Keep the asset, extract equity, build portfolio faster</p>
            </div>
          </div>
        </div>

        <h2>Common house hacking mistakes</h2>
        <div className="space-y-4 my-8">
          <div className="border-l-4 border-red-400 pl-4">
            <h3 className="font-semibold text-red-800">Treating tenants like friends</h3>
            <p className="text-red-700 text-sm">Maintain professional relationships. Personal friendships can complicate business decisions and rent collection.</p>
          </div>
          
          <div className="border-l-4 border-red-400 pl-4">
            <h3 className="font-semibold text-red-800">Inadequate screening</h3>
            <p className="text-red-700 text-sm">Living with bad tenants is worse than regular landlording. Screen extra carefully since they'll be your neighbors.</p>
          </div>
          
          <div className="border-l-4 border-red-400 pl-4">
            <h3 className="font-semibold text-red-800">Ignoring local laws</h3>
            <p className="text-red-700 text-sm">Some areas restrict the number of unrelated adults in single-family homes. Check zoning and occupancy laws.</p>
          </div>
          
          <div className="border-l-4 border-red-400 pl-4">
            <h3 className="font-semibold text-red-800">Overpaying for the "perfect" house</h3>
            <p className="text-red-700 text-sm">The numbers must work. Don't pay extra because you "love" the house—it's an investment first, home second.</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I house hack with an FHA loan if I already used FHA?</h3>
              <p className="text-gray-700">You can only have one FHA loan at a time. You'd need to pay off the first FHA loan or use conventional financing for a second house hack.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if I can't find tenants right away?</h3>
              <p className="text-gray-700">Budget for 6 months of full mortgage payments. Market aggressively, price competitively, and consider short-term tenants while searching for long-term ones.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I handle repairs when I live there?</h3>
              <p className="text-gray-700">Establish normal business hours for non-emergency repairs. Keep receipts and track time spent—you may be able to deduct some costs and time as management expenses.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is house hacking worth it in expensive markets?</h3>
              <p className="text-gray-700">It's often the only way to break into real estate in high-cost areas. Even if cash flow is minimal, you're building equity and gaining experience with little money down.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-buy-your-first-rental-property-beginner-guide" 
              className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
            >
              <h3 className="font-semibold text-purple-900">← First Rental Property</h3>
              <p className="text-sm text-purple-700 mt-1">Complete beginner's guide</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-finance-investment-property" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Investment Property Financing →</h3>
              <p className="text-sm text-green-700 mt-1">Loan options and strategies</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}