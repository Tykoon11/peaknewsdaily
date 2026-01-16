import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Get Startup Funding (Grants, Loans, Investors)',
  description: 'Comprehensive guide to startup funding sources: grants, SBA loans, angel investors, VCs, crowdfunding. Learn how to prepare, pitch, and secure funding.',
}

export default function HowToGetStartupFunding() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Get Startup Funding</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-rose-600 rounded-xl flex items-center justify-center text-white text-xl">
            🚀
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Business & Startup Finance</p>
            <h1 className="text-4xl font-bold text-gray-900">How to get startup funding (grants, loans, investors)</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Comprehensive guide to startup funding sources: grants, SBA loans, angel investors, VCs, crowdfunding. Learn how to prepare, pitch, and secure funding.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-rose-50 border border-rose-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-rose-900 mb-4">💰 Funding Strategy Overview</h3>
          <p className="text-rose-700 text-sm">
            Start with personal funds and bootstrapping, explore grants and competitions, consider SBA loans for established businesses, and pursue investors only when you have proven traction and clear growth plans.
          </p>
        </div>

        <h2>Funding sources by stage</h2>
        
        <p>Different funding sources work better at different stages of business development. Match your funding strategy to your business maturity.</p>

        <div className="space-y-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Pre-Launch (Idea Stage)</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-blue-800 mb-2">Best Sources</p>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Personal savings</li>
                  <li>• Friends and family</li>
                  <li>• Business plan competitions</li>
                  <li>• Small grants ($1K-$25K)</li>
                  <li>• Crowdfunding pre-orders</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-blue-800 mb-2">Typical Amount</p>
                <p className="text-blue-700 text-sm">$5,000 - $50,000</p>
                <p className="font-medium text-blue-800 mb-2 mt-3">Focus</p>
                <p className="text-blue-700 text-sm">Product development, market validation</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Early Stage (MVP/First Customers)</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-green-800 mb-2">Best Sources</p>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• SBA microloans</li>
                  <li>• Angel investors</li>
                  <li>• Accelerator programs</li>
                  <li>• Revenue-based financing</li>
                  <li>• Equipment financing</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-green-800 mb-2">Typical Amount</p>
                <p className="text-green-700 text-sm">$25,000 - $500,000</p>
                <p className="font-medium text-green-800 mb-2 mt-3">Focus</p>
                <p className="text-green-700 text-sm">Customer acquisition, team building</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="font-semibold text-purple-800 mb-3">Growth Stage (Proven Business Model)</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-purple-800 mb-2">Best Sources</p>
                <ul className="text-purple-700 text-sm space-y-1">
                  <li>• Venture capital</li>
                  <li>• SBA loans</li>
                  <li>• Bank term loans</li>
                  <li>• Asset-based lending</li>
                  <li>• Private equity</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-purple-800 mb-2">Typical Amount</p>
                <p className="text-purple-700 text-sm">$500,000 - $10M+</p>
                <p className="font-medium text-purple-800 mb-2 mt-3">Focus</p>
                <p className="text-purple-700 text-sm">Scaling operations, market expansion</p>
              </div>
            </div>
          </div>
        </div>

        <h2>Grants and competitions</h2>
        
        <p>Free money that doesn't require repayment or equity, but often highly competitive and restrictive.</p>

        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Source</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Amount Range</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Requirements</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Timeline</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">SBIR/STTR</td>
                <td className="border border-gray-300 px-3 py-2">$50K - $1.5M</td>
                <td className="border border-gray-300 px-3 py-2">R&D focus, tech innovation</td>
                <td className="border border-gray-300 px-3 py-2">6-12 months</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">State/Local Grants</td>
                <td className="border border-gray-300 px-3 py-2">$5K - $100K</td>
                <td className="border border-gray-300 px-3 py-2">Local impact, job creation</td>
                <td className="border border-gray-300 px-3 py-2">3-6 months</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Industry Competitions</td>
                <td className="border border-gray-300 px-3 py-2">$10K - $250K</td>
                <td className="border border-gray-300 px-3 py-2">Industry-specific criteria</td>
                <td className="border border-gray-300 px-3 py-2">2-4 months</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">University Programs</td>
                <td className="border border-gray-300 px-3 py-2">$5K - $50K</td>
                <td className="border border-gray-300 px-3 py-2">Student or alumni status</td>
                <td className="border border-gray-300 px-3 py-2">2-3 months</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>SBA loans and traditional lending</h2>
        
        <p>Debt financing that must be repaid but doesn't require giving up equity in your business.</p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">SBA Loan Advantages</h4>
            <ul className="text-green-700 text-sm space-y-2">
              <li>• Lower down payments (10-15%)</li>
              <li>• Longer repayment terms</li>
              <li>• Government guarantee reduces lender risk</li>
              <li>• Competitive interest rates</li>
              <li>• Can be used for most business purposes</li>
              <li>• No prepayment penalties</li>
            </ul>
          </div>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="font-semibold text-red-800 mb-3">SBA Loan Requirements</h4>
            <ul className="text-red-700 text-sm space-y-2">
              <li>• Personal credit score 680+</li>
              <li>• Business operational 2+ years</li>
              <li>• Strong cash flow and financials</li>
              <li>• Personal guarantee required</li>
              <li>• Detailed business plan</li>
              <li>• Collateral may be required</li>
            </ul>
          </div>
        </div>

        <h2>Angel investors and venture capital</h2>
        
        <p>Professional investors who provide capital in exchange for equity ownership in your business.</p>

        <div className="space-y-6 my-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h4 className="font-semibold text-yellow-800 mb-3">Angel Investors</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-yellow-800 mb-2">Characteristics</p>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Individual wealthy investors</li>
                  <li>• Often industry experience</li>
                  <li>• Provide mentorship and connections</li>
                  <li>• Less formal process</li>
                  <li>• Faster decision-making</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-yellow-800 mb-2">Investment Details</p>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Amount: $25K - $500K</li>
                  <li>• Equity: 10-25%</li>
                  <li>• Stage: Pre-seed to Series A</li>
                  <li>• Timeline: 2-6 months</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Venture Capital</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-blue-800 mb-2">Characteristics</p>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Professional investment firms</li>
                  <li>• Manage institutional money</li>
                  <li>• Board seats and oversight</li>
                  <li>• Formal due diligence process</li>
                  <li>• Expect high growth/returns</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-blue-800 mb-2">Investment Details</p>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Amount: $1M - $100M+</li>
                  <li>• Equity: 15-50%</li>
                  <li>• Stage: Series A and beyond</li>
                  <li>• Timeline: 6-18 months</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h2>Alternative funding sources</h2>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
            <h4 className="font-semibold text-cyan-800 mb-3">Crowdfunding</h4>
            <ul className="text-cyan-700 text-sm space-y-2">
              <li>• <strong>Reward-based:</strong> Kickstarter, Indiegogo</li>
              <li>• <strong>Equity-based:</strong> SeedInvest, StartEngine</li>
              <li>• <strong>Donation-based:</strong> GoFundMe for social causes</li>
              <li>• <strong>Pros:</strong> Market validation, customer base</li>
              <li>• <strong>Cons:</strong> Public failure risk, fulfillment challenges</li>
            </ul>
          </div>
          
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
            <h4 className="font-semibold text-indigo-800 mb-3">Revenue-Based Financing</h4>
            <ul className="text-indigo-700 text-sm space-y-2">
              <li>• <strong>Structure:</strong> % of monthly revenue until cap</li>
              <li>• <strong>Amount:</strong> $50K - $5M typically</li>
              <li>• <strong>Term:</strong> 2-5 years usually</li>
              <li>• <strong>Pros:</strong> No equity dilution, flexible payments</li>
              <li>• <strong>Cons:</strong> Higher total cost, revenue requirements</li>
            </ul>
          </div>
        </div>

        <h2>Preparing for funding</h2>
        
        <div className="bg-rose-50 border border-rose-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-rose-900 mb-4">📋 Funding Readiness Checklist</h3>
          <ul className="text-rose-700 text-sm space-y-2">
            <li>• Comprehensive business plan with financial projections</li>
            <li>• Clear value proposition and market opportunity</li>
            <li>• Proven business model or strong validation</li>
            <li>• Strong management team and advisory board</li>
            <li>• Clean legal structure and intellectual property</li>
            <li>• Organized financial records and reporting</li>
            <li>• Realistic use of funds and growth plan</li>
            <li>• Professional pitch deck (10-12 slides)</li>
            <li>• Customer testimonials and case studies</li>
            <li>• Financial statements and tax returns</li>
          </ul>
        </div>

        <h2>Pitch deck essentials</h2>
        
        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Slide</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Content</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Key Message</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">1. Problem</td>
                <td className="border border-gray-300 px-3 py-2">Customer pain point you solve</td>
                <td className="border border-gray-300 px-3 py-2">This problem is worth solving</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">2. Solution</td>
                <td className="border border-gray-300 px-3 py-2">Your product/service overview</td>
                <td className="border border-gray-300 px-3 py-2">We have a better way</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">3. Market</td>
                <td className="border border-gray-300 px-3 py-2">TAM, SAM, SOM analysis</td>
                <td className="border border-gray-300 px-3 py-2">Big market opportunity</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">4. Traction</td>
                <td className="border border-gray-300 px-3 py-2">Customer growth, revenue, metrics</td>
                <td className="border border-gray-300 px-3 py-2">People want this</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">5. Business Model</td>
                <td className="border border-gray-300 px-3 py-2">How you make money</td>
                <td className="border border-gray-300 px-3 py-2">Sustainable and scalable</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">6. Financials</td>
                <td className="border border-gray-300 px-3 py-2">3-year projections</td>
                <td className="border border-gray-300 px-3 py-2">Path to profitability</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">⚠️ Common Funding Mistakes</h3>
          <ul className="text-yellow-700 space-y-2">
            <li>• <strong>Raising too early:</strong> Seeking funding before proving market fit</li>
            <li>• <strong>Unrealistic valuations:</strong> Overestimating company worth</li>
            <li>• <strong>Wrong investor type:</strong> Mismatching investor stage with business stage</li>
            <li>• <strong>No clear use of funds:</strong> Vague plans for investment money</li>
            <li>• <strong>Weak financial projections:</strong> Unrealistic or poorly researched numbers</li>
            <li>• <strong>Ignoring due diligence:</strong> Not researching investors thoroughly</li>
          </ul>
        </div>

        <div className="bg-rose-50 border border-rose-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-rose-800 mb-4">💡 Pro Tips</h3>
          <ul className="text-rose-700 space-y-2">
            <li>• <strong>Bootstrap as long as possible:</strong> Raise money to accelerate, not to survive</li>
            <li>• <strong>Network before you need money:</strong> Build relationships early</li>
            <li>• <strong>Focus on metrics that matter:</strong> Revenue, customers, growth rate</li>
            <li>• <strong>Have multiple funding options:</strong> Don't rely on a single source</li>
            <li>• <strong>Negotiate terms carefully:</strong> Valuation isn't everything</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How much funding should I raise?</h3>
              <p className="text-gray-700">
                Raise enough to reach your next major milestone plus 6-12 months runway. 
                Typically 12-24 months of operating expenses, but varies by business model and growth rate.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">When is the right time to seek investor funding?</h3>
              <p className="text-gray-700">
                When you have proven product-market fit, clear growth trajectory, and need capital to scale faster. 
                Investors want to see traction and a path to significant returns.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How long does the funding process typically take?</h3>
              <p className="text-gray-700">
                Grants: 3-12 months, Angel investors: 2-6 months, VCs: 6-18 months, SBA loans: 2-6 months. 
                Start the process well before you need the money.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I give up equity or take on debt?</h3>
              <p className="text-gray-700">
                Depends on your growth plans and cash flow. Debt preserves ownership but requires repayment. 
                Equity brings expertise and connections but dilutes ownership. Consider your long-term goals.
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
              <p className="text-sm text-rose-700 mt-1">Essential financial planning foundation</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-prepare-for-a-bank-loan-interview" 
              className="block p-4 bg-rose-50 rounded-lg hover:bg-rose-100 transition-colors"
            >
              <h3 className="font-semibold text-rose-900">Bank Loan Interview →</h3>
              <p className="text-sm text-rose-700 mt-1">Prepare for loan discussions</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}