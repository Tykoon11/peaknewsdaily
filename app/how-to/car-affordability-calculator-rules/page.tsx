import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Much Car Can I Afford? Simple Rules of Thumb',
  description: 'Learn exactly how much car you can afford using proven rules of thumb (20/4/10), budgeting tips, and total cost of ownership so you don\'t overpay.',
}

export default function CarAffordabilityPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Car Affordability Calculator</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-xl">
            🚗
          </div>
          <div>
            <p className="text-sm text-indigo-600 font-medium">Car Buying & Auto Loans</p>
            <h1 className="text-4xl font-bold text-gray-900">How much car can you afford? (Rules of thumb that actually work)</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Use proven financial rules to determine your car budget and avoid overpaying for transportation.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>Start with the 20/4/10 rule</h2>
        <div className="bg-indigo-50 border-l-4 border-indigo-400 p-6 mb-8">
          <h3 className="text-lg font-semibold text-indigo-800 mb-3">The Gold Standard for Car Buying</h3>
          <ul className="text-indigo-700 space-y-2">
            <li>• <strong>20% down payment:</strong> Reduces loan amount and monthly payment</li>
            <li>• <strong>4-year maximum loan term:</strong> Minimizes interest and keeps you out of negative equity</li>
            <li>• <strong>10% of gross income:</strong> Total car costs including insurance, fuel, maintenance</li>
            <li>• <strong>When to adjust:</strong> High insurance areas, long commutes, or expensive repairs</li>
          </ul>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">When to Use 8% Instead of 10%</h3>
          <div className="text-yellow-700 space-y-2">
            <p><strong>Long commutes:</strong> High mileage = more fuel, maintenance, and depreciation</p>
            <p><strong>High insurance costs:</strong> Young drivers, expensive cars, or high-crime areas</p>
            <p><strong>Luxury vehicles:</strong> Premium parts, specialized service, and higher registration fees</p>
            <p><strong>Tight budget:</strong> Other financial priorities like debt payoff or emergency fund building</p>
          </div>
        </div>

        <h2>Don't forget total cost of ownership (TCO)</h2>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">Hidden Costs That Destroy Budgets</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-red-800 mb-2">Fixed Monthly Costs</h4>
              <ul className="text-red-700 text-sm space-y-1">
                <li>• Loan payment (P&I)</li>
                <li>• Insurance premium</li>
                <li>• Registration/taxes</li>
                <li>• Extended warranty (optional)</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-red-800 mb-2">Variable Operating Costs</h4>
              <ul className="text-red-700 text-sm space-y-1">
                <li>• Fuel (based on MPG + mileage)</li>
                <li>• Maintenance and repairs</li>
                <li>• Tire replacements</li>
                <li>• Depreciation loss</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">TCO Comparison: Two $25,000 Cars</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border border-gray-300 px-3 py-2 text-left">Cost Category</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Honda Civic</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">BMW 330i</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Difference</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Monthly payment</td>
                  <td className="border border-gray-300 px-3 py-2">$450</td>
                  <td className="border border-gray-300 px-3 py-2">$450</td>
                  <td className="border border-gray-300 px-3 py-2">$0</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Insurance</td>
                  <td className="border border-gray-300 px-3 py-2">$120</td>
                  <td className="border border-gray-300 px-3 py-2">$280</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">+$160</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Fuel (15k mi/yr)</td>
                  <td className="border border-gray-300 px-3 py-2">$150</td>
                  <td className="border border-gray-300 px-3 py-2">$200</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">+$50</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Maintenance/repairs</td>
                  <td className="border border-gray-300 px-3 py-2">$80</td>
                  <td className="border border-gray-300 px-3 py-2">$180</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">+$100</td>
                </tr>
                <tr className="font-medium bg-blue-100">
                  <td className="border border-gray-300 px-3 py-2">Total monthly TCO</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-600">$800</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">$1,110</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">+$310</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 mt-2">Same purchase price, $310/month difference in real cost over 5 years = $18,600 extra</p>
        </div>

        <h2>Check your monthly budget</h2>
        <div className="space-y-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-800 mb-4">50/30/20 Budget Method</h3>
            <div className="text-green-700 space-y-2">
              <p><strong>50% Needs:</strong> Housing, utilities, groceries, minimum debt payments</p>
              <p><strong>30% Wants:</strong> Car payment fits here (along with dining, entertainment)</p>
              <p><strong>20% Savings:</strong> Emergency fund, retirement, debt payoff</p>
              <p><strong>Car allocation:</strong> 10-15% of wants budget (3-4.5% of gross income)</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">Zero-Based Budget Method</h3>
            <div className="text-blue-700 space-y-2">
              <p><strong>Step 1:</strong> List all fixed expenses (rent, insurance, debt minimums)</p>
              <p><strong>Step 2:</strong> Subtract from take-home income</p>
              <p><strong>Step 3:</strong> Allocate remaining to savings, fun money, and car payment</p>
              <p><strong>Car priority:</strong> Should come after emergency fund basics</p>
            </div>
          </div>
        </div>

        <h2>Down payment targets & APR reality check</h2>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-purple-800 mb-4">Down Payment Strategy</h3>
          <div className="text-purple-700 space-y-3">
            <p><strong>20% minimum:</strong> Avoids negative equity, lowers payment and interest</p>
            <p><strong>More than 20%:</strong> Consider if the extra money could earn more invested elsewhere</p>
            <p><strong>Less than 20%:</strong> Only if 0-3% APR financing or you need the cash for emergencies</p>
            <p><strong>Trade-in value:</strong> Can count toward down payment if you're not underwater</p>
          </div>
        </div>

        <div className="bg-orange-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-orange-800 mb-4">APR Impact on Affordability</h3>
          <div className="text-orange-700 space-y-3">
            <p><strong>Excellent credit (740+):</strong> 4-7% APR, qualify for promotional rates</p>
            <p><strong>Good credit (670-739):</strong> 7-10% APR, shop multiple lenders</p>
            <p><strong>Fair credit (580-669):</strong> 10-15% APR, consider waiting to improve credit</p>
            <p><strong>Poor credit (&lt;580):</strong> 15%+ APR, buy cheaper car or improve credit first</p>
          </div>
        </div>

        <h2>Affordability examples by income level</h2>
        <div className="grid gap-6 my-8">
          <div className="bg-white border border-gray-300 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">$40K Annual Income Example</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Budget Calculation</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Gross monthly: $3,333</li>
                  <li>• 10% rule: $333/month max</li>
                  <li>• Less insurance/fuel: ~$200 payment</li>
                  <li>• With 20% down, 48 months, 8% APR</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Recommended Target</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Max vehicle price: ~$12,000</li>
                  <li>• Down payment: $2,400</li>
                  <li>• Loan amount: $9,600</li>
                  <li>• <strong>Focus:</strong> Reliable used cars, Honda/Toyota</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-300 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">$70K Annual Income Example</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Budget Calculation</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Gross monthly: $5,833</li>
                  <li>• 10% rule: $583/month max</li>
                  <li>• Less insurance/fuel: ~$400 payment</li>
                  <li>• With 20% down, 48 months, 6% APR</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Recommended Target</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Max vehicle price: ~$25,000</li>
                  <li>• Down payment: $5,000</li>
                  <li>• Loan amount: $20,000</li>
                  <li>• <strong>Options:</strong> Certified pre-owned, new economy cars</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-300 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">$120K Annual Income Example</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Budget Calculation</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Gross monthly: $10,000</li>
                  <li>• 10% rule: $1,000/month max</li>
                  <li>• Less insurance/fuel: ~$700 payment</li>
                  <li>• With 20% down, 48 months, 5% APR</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Recommended Target</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Max vehicle price: ~$45,000</li>
                  <li>• Down payment: $9,000</li>
                  <li>• Loan amount: $36,000</li>
                  <li>• <strong>Options:</strong> New mid-size cars, luxury CPO</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h2>Quick checklist before you shop</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Pre-Shopping Action Items</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">✓ Financial Prep</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>□ Check credit score</li>
                <li>□ Calculate maximum monthly payment</li>
                <li>□ Save down payment + sales tax</li>
                <li>□ Get pre-approved for financing</li>
                <li>□ Research insurance quotes</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">✓ Car Research</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>□ Compare total cost of ownership</li>
                <li>□ Read reliability ratings</li>
                <li>□ Check average maintenance costs</li>
                <li>□ Research resale values</li>
                <li>□ Factor in your driving habits</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-indigo-100 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-indigo-800 mb-4">Bottom Line Decision Framework</h3>
          <div className="text-indigo-700 space-y-2">
            <p><strong>Let the 20/4/10 rule guide your ceiling</strong> — don't exceed it unless you have compelling reasons</p>
            <p><strong>Validate with total cost of ownership</strong> — two cars with the same price can have vastly different operating costs</p>
            <p><strong>Lock your insurance quote before you shop</strong> — surprises after purchase are expensive and stressful</p>
            <p><strong>Remember:</strong> A car is transportation, not an investment. Buy the least expensive vehicle that reliably meets your needs.</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What is the 20/4/10 rule for car buying?</h3>
              <p className="text-gray-700">Put down 20%, finance for no more than 4 years, and keep total car costs (payment + insurance + fuel + maintenance) under 10% of your gross monthly income.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is 10% of income realistic in high-insurance areas?</h3>
              <p className="text-gray-700">In areas with expensive insurance (young drivers, urban areas, luxury cars), aim for 8% of income instead. This leaves room for higher insurance premiums without breaking your budget.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I buy used to hit affordability targets?</h3>
              <p className="text-gray-700">Yes, if new cars push you over your budget. A 2-4 year old car avoids the steepest depreciation while still offering reliability and warranty coverage.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How does APR change what I can afford?</h3>
              <p className="text-gray-700">Higher APR means less car for the same payment. If you can't get under 10% APR, consider improving your credit first or buying a less expensive car to minimize interest costs.</p>
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
              <h3 className="font-semibold text-indigo-900">Get Best Auto Loan Rate →</h3>
              <p className="text-sm text-indigo-700 mt-1">Lower your APR with smart shopping</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/lease-vs-finance-cheaper" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">← Lease vs Finance</h3>
              <p className="text-sm text-green-700 mt-1">Which option saves money?</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}