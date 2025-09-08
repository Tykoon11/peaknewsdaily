import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lease vs Finance: Which Is Cheaper for You?',
  description: 'Compare leasing vs financing by total cost, mileage, and flexibility. See when leasing wins, when buying beats it, and the math to decide in minutes.',
}

export default function LeaseVsFinancePage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Lease vs Finance</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-xl">
            ⚖️
          </div>
          <div>
            <p className="text-sm text-indigo-600 font-medium">Car Buying & Auto Loans</p>
            <h1 className="text-4xl font-bold text-gray-900">Lease vs finance: the real cost breakdown</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Cut through the confusion with actual math to find the cheapest way to drive the car you want.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>Key differences at a glance</h2>
        <div className="bg-gray-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Leasing vs Financing Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border border-gray-300 px-3 py-2 text-left">Factor</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Leasing</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Financing</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Ownership</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">No - return at end</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-600">Yes - build equity</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Monthly payment</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-600">Lower</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">Higher</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Mileage limits</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">10-15K/year + fees</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-600">Unlimited</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Wear & tear</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">Charged for excess</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-600">Your problem</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Modifications</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">Not allowed</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-600">Fully allowed</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Early exit</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">Expensive penalties</td>
                  <td className="border border-gray-300 px-3 py-2 text-yellow-600">Sell anytime</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2>How lease payments are calculated</h2>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">The Three Key Numbers</h3>
          <div className="text-blue-700 space-y-3">
            <p><strong>Capitalized Cost (Cap Cost):</strong> The negotiated price of the car (like purchase price)</p>
            <p><strong>Residual Value:</strong> What the car will be worth at lease end (set by manufacturer)</p>
            <p><strong>Money Factor:</strong> The interest rate (multiply by 2,400 to get equivalent APR)</p>
            <p><strong>Formula:</strong> You pay for depreciation (Cap Cost - Residual) + interest over the term</p>
          </div>
        </div>

        <div className="bg-green-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Lease Payment Breakdown Example</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-green-800 mb-2">Car Details</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• MSRP: $35,000</li>
                <li>• Negotiated price: $32,000</li>
                <li>• 36-month lease</li>
                <li>• Residual: 60% ($21,000)</li>
                <li>• Money factor: 0.00125 (3% APR)</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-800 mb-2">Payment Calculation</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• Depreciation: $32,000 - $21,000 = $11,000</li>
                <li>• Monthly depreciation: $11,000 ÷ 36 = $306</li>
                <li>• Monthly interest: $53,000 × 0.00125 = $66</li>
                <li>• <strong>Base payment: $306 + $66 = $372</strong></li>
                <li>• Plus tax and fees</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>When leasing can be cheaper</h2>
        <div className="space-y-6 my-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-800 mb-4">High Residual Values + Low Money Factor</h3>
            <div className="text-yellow-700 space-y-2">
              <p><strong>Luxury cars:</strong> Mercedes, BMW, Lexus often have 60%+ residuals</p>
              <p><strong>Brand subsidies:</strong> Manufacturers offer promotional money factors (0.5-1%)</p>
              <p><strong>Model popularity:</strong> High-demand cars retain value better</p>
              <p><strong>New releases:</strong> First-year models often have aggressive lease terms</p>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-purple-800 mb-4">Business Tax Write-offs</h3>
            <div className="text-purple-700 space-y-2">
              <p><strong>Section 179:</strong> Up to 100% deduction for business vehicles over 6,000 lbs</p>
              <p><strong>Standard method:</strong> $0.67/mile for business use (2024)</p>
              <p><strong>Actual expense:</strong> Deduct percentage of lease payment for business use</p>
              <p><strong>Luxury limit:</strong> $19,200 annual deduction cap for cars under 6,000 lbs</p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-800 mb-4">Always Want Latest Features</h3>
            <div className="text-green-700 space-y-2">
              <p><strong>Tech upgrades:</strong> New safety features, infotainment systems every 3 years</p>
              <p><strong>Warranty coverage:</strong> Always under manufacturer warranty</p>
              <p><strong>No repair surprises:</strong> Most major issues covered during lease term</p>
              <p><strong>Predictable costs:</strong> No unexpected maintenance or depreciation hits</p>
            </div>
          </div>
        </div>

        <h2>When buying wins</h2>
        <div className="space-y-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">Long-term Ownership Plans</h3>
            <div className="text-blue-700 space-y-2">
              <p><strong>Keep cars 6+ years:</strong> Financing almost always wins on total cost</p>
              <p><strong>Drive them into ground:</strong> 10+ year ownership maximizes value per dollar</p>
              <p><strong>Reliability priority:</strong> Honda, Toyota, Mazda hold up well long-term</p>
              <p><strong>No payment period:</strong> Years 5-10 with no monthly payment build wealth</p>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-orange-800 mb-4">High Mileage or Hard Use</h3>
            <div className="text-orange-700 space-y-2">
              <p><strong>Over 15K miles/year:</strong> Excess mileage fees ($0.20-0.30/mile) add up fast</p>
              <p><strong>Rough conditions:</strong> Construction, frequent road trips, pets, kids</p>
              <p><strong>Modification needs:</strong> Towing packages, lift kits, performance upgrades</p>
              <p><strong>Freedom to sell:</strong> Can sell anytime without lease-end penalties</p>
            </div>
          </div>
        </div>

        <h2>Example math: $32k vehicle comparison</h2>
        <div className="bg-white border border-gray-300 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Toyota Camry XLE: 6-Year Total Cost</h3>
          <div className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded">
                <h4 className="font-semibold text-blue-800 mb-3">Leasing Path (2 consecutive 3-year leases)</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Down payment: $2,000 (each lease)</li>
                  <li>• Monthly payment: $349</li>
                  <li>• 72 months of payments: $25,128</li>
                  <li>• Total down payments: $4,000</li>
                  <li>• <strong>Total cost: $29,128</strong></li>
                  <li>• <strong>Asset value: $0</strong></li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded">
                <h4 className="font-semibold text-green-800 mb-3">Financing Path (5-year loan + 1 year owned)</h4>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Down payment: $6,400 (20%)</li>
                  <li>• Monthly payment: $481 (60 months)</li>
                  <li>• 60 months of payments: $28,860</li>
                  <li>• Insurance/maintenance: $3,600</li>
                  <li>• <strong>Total cost: $38,860</strong></li>
                  <li>• <strong>Asset value: ~$15,000</strong></li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-100 p-4 rounded">
              <h4 className="font-semibold text-gray-800 mb-2">Net Cost Comparison</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-700 text-sm"><strong>Leasing net cost:</strong> $29,128 (no asset)</p>
                  <p className="text-gray-700 text-sm"><strong>Financing net cost:</strong> $38,860 - $15,000 = $23,860</p>
                </div>
                <div>
                  <p className="text-green-600 text-sm font-medium"><strong>Winner: Financing saves $5,268</strong></p>
                  <p className="text-gray-600 text-xs">Plus you own an asset worth $15,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2>Decision checklist</h2>
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-indigo-800 mb-4">Choose Leasing If...</h3>
          <ul className="text-indigo-700 space-y-2">
            <li>□ You want a new car every 2-3 years</li>
            <li>□ You drive less than 12,000 miles per year</li>
            <li>□ You take good care of vehicles</li>
            <li>□ You can write off the expense for business</li>
            <li>□ You get a high residual value (55%+) and low money factor</li>
            <li>□ You prioritize lower monthly payments over ownership</li>
          </ul>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Choose Financing If...</h3>
          <ul className="text-green-700 space-y-2">
            <li>□ You plan to keep the car 5+ years</li>
            <li>□ You drive more than 15,000 miles per year</li>
            <li>□ You want to modify or customize the vehicle</li>
            <li>□ You're hard on cars (kids, pets, rough use)</li>
            <li>□ You want to build equity and own an asset</li>
            <li>□ You want the freedom to sell anytime</li>
          </ul>
        </div>

        <h2>Advanced lease strategies</h2>
        <div className="space-y-6 my-8">
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="font-semibold text-purple-800 mb-3">Multiple Security Deposit (MSD)</h4>
            <p className="text-purple-700 text-sm mb-2">Put down extra security deposits to reduce money factor</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs text-gray-700">Example: 9 MSDs ($4,500) might reduce money factor from 0.00200 to 0.00050, saving $50+/month</p>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h4 className="font-semibold text-yellow-800 mb-3">Lease Transfer/Assumption</h4>
            <p className="text-yellow-700 text-sm mb-2">Take over someone else's lease to avoid down payment</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs text-gray-700">Websites: SwapALease, LeaseTrader — inspect vehicle carefully before assuming</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Lease-End Buy Option</h4>
            <p className="text-blue-700 text-sm mb-2">Purchase at residual value if market value is higher</p>
            <div className="bg-white rounded p-3">
              <p className="text-xs text-gray-700">If residual is $18K but car is worth $22K, buy and immediately sell for $4K profit</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What is a money factor and how do I convert it to APR?</h3>
              <p className="text-gray-700">Money factor is the lease interest rate in decimal form. Multiply by 2,400 to get the equivalent APR. Example: 0.00125 money factor = 3.0% APR.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I negotiate a lease like a purchase?</h3>
              <p className="text-gray-700">Yes! You can negotiate the cap cost (sale price), but residual value and money factor are usually set by the manufacturer. Focus on getting the lowest cap cost.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What happens if I exceed mileage?</h3>
              <p className="text-gray-700">You pay excess mileage charges, typically $0.20-0.30 per mile. Going over by 5,000 miles could cost $1,000-1,500. Buy extra miles upfront if you're close to the limit.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is leasing good for business owners?</h3>
              <p className="text-gray-700">Often yes, due to tax benefits. You can deduct the business percentage of lease payments, and luxury vehicle deduction limits are less restrictive than purchase depreciation limits.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/get-best-auto-loan-rate" 
              className="block p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors"
            >
              <h3 className="font-semibold text-indigo-900">← Best Auto Loan Rate</h3>
              <p className="text-sm text-indigo-700 mt-1">Lock in the lowest APR</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/refinance-car-loan-lower-payment" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Refinance Car Loan →</h3>
              <p className="text-sm text-green-700 mt-1">Lower your monthly payment</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}