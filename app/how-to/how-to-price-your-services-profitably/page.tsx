import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Price Your Services Profitably: Complete Pricing Guide',
  description: 'Set profitable service prices with cost-plus, value-based, and competitive pricing strategies. Calculate true costs, position against competitors, and communicate value.',
}

export default function HowToPriceServicesProfit() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
        <a href="/category/how-to" className="hover:text-pink-600">How-To Guides</a>
        <span>/</span>
        <span className="text-gray-900">Price Services Profitably</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center text-white mr-3">
            💵
          </div>
          <span className="text-pink-600 font-medium">Business & Startup Finance</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          How to Price Your Services Profitably: Complete Pricing Guide
        </h1>
        <p className="text-xl text-gray-600">
          Set profitable service prices with cost-plus, value-based, and competitive pricing strategies. Calculate true costs, position against competitors, and communicate value.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">
        <div className="bg-pink-50 border-l-4 border-pink-600 p-6 mb-8">
          <h3 className="text-lg font-semibold text-pink-800 mb-2">💰 Profitable Pricing Formula</h3>
          <p className="text-pink-700">
            Calculate true costs (direct + overhead + opportunity cost), add target profit margin, test against market rates, and communicate value clearly. Start with costs, validate with market, and price based on value delivered.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold mb-4">Pricing Determines Business Success or Failure</h3>
          <p className="mb-4">
            Pricing too low kills profitability and creates unsustainable business models. Pricing too high loses customers to competitors. The right pricing strategy balances profitability, competitiveness, and value perception to build a thriving service business.
          </p>
          <p>
            This guide walks you through calculating true service costs, evaluating pricing strategies, researching competitor rates, and presenting prices that customers accept while maintaining healthy margins.
          </p>
        </div>

        <h2>Calculate Your True Service Costs</h2>

        <p>Accurate cost calculation is the foundation of profitable pricing—many businesses underestimate hidden costs.</p>

        <h3>Direct Cost Components</h3>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-red-50 p-6 rounded-lg">
            <h4 className="font-semibold text-red-800 mb-3">Labor Costs</h4>
            <ul className="text-red-700 space-y-2">
              <li>• Your hourly rate (salary + benefits equivalent)</li>
              <li>• Employee wages and benefits</li>
              <li>• Contractor and freelancer payments</li>
              <li>• Payroll taxes and worker's comp</li>
              <li>• Training and development time</li>
            </ul>
          </div>
          
          <div className="bg-orange-50 p-6 rounded-lg">
            <h4 className="font-semibold text-orange-800 mb-3">Materials and Tools</h4>
            <ul className="text-orange-700 space-y-2">
              <li>• Software licenses and subscriptions</li>
              <li>• Equipment usage and depreciation</li>
              <li>• Supplies and consumables</li>
              <li>• Travel and transportation</li>
              <li>• Third-party services and subcontractors</li>
            </ul>
          </div>
        </div>

        <h3>Overhead Cost Allocation</h3>

        <div className="bg-yellow-50 p-6 rounded-lg my-8">
          <h4 className="font-semibold text-yellow-800 mb-4">Monthly Overhead Calculation</h4>
          <div className="space-y-3">
            <div className="bg-white p-4 rounded border">
              <p className="font-semibold mb-2">Fixed Overhead: $8,500/month</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Office rent: $2,000</li>
                <li>• Insurance: $500</li>
                <li>• Phone/Internet: $200</li>
                <li>• Accounting/Legal: $800</li>
                <li>• Marketing: $2,000</li>
                <li>• Administrative: $3,000</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded border">
              <p className="font-semibold mb-2">Billable Hours: 120 hours/month</p>
              <p className="text-pink-700"><strong>Overhead per hour: $8,500 ÷ 120 = $71/hour</strong></p>
            </div>
          </div>
        </div>

        <h3>Hidden Cost Categories</h3>

        <ul>
          <li><strong>Non-billable time:</strong> Admin, sales, training, breaks (30-50% of total time)</li>
          <li><strong>Bad debt and collections:</strong> 2-5% of revenue for payment issues</li>
          <li><strong>Rework and corrections:</strong> Time to fix mistakes or revisions</li>
          <li><strong>Opportunity cost:</strong> Lost income from other potential work</li>
          <li><strong>Growth investment:</strong> Time and money for business development</li>
        </ul>

        <h2>Pricing Strategy Options</h2>

        <p>Choose the pricing approach that aligns with your market position and customer expectations.</p>

        <h3>Cost-Plus Pricing</h3>

        <div className="space-y-4 my-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Simple Cost-Plus Formula</h4>
            <p className="text-gray-600 mb-2">Direct costs + overhead allocation + profit margin = service price</p>
            <div className="bg-gray-50 p-3 rounded text-sm">
              <p><strong>Example:</strong> $50 direct costs + $71 overhead + $36 profit (30%) = $157/hour</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Advantages</h4>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Ensures profitability if costs are accurate</li>
              <li>• Easy to calculate and justify</li>
              <li>• Works well for standardized services</li>
              <li>• Transparent pricing for cost-conscious clients</li>
            </ul>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Disadvantages</h4>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Ignores market rates and value delivered</li>
              <li>• May price out of market or leave money on table</li>
              <li>• Difficult to estimate costs for complex projects</li>
              <li>• Does not reward efficiency improvements</li>
            </ul>
          </div>
        </div>

        <h3>Value-Based Pricing</h3>

        <div className="bg-green-50 p-6 rounded-lg my-8">
          <h4 className="font-semibold text-green-800 mb-4">Value-Based Pricing Approach</h4>
          <p className="text-green-700 mb-3">
            Price based on the value delivered to the client, not your costs. If your service saves a client $100,000 annually, you can justify pricing that reflects a portion of that value.
          </p>
          <div className="space-y-2 text-green-700">
            <p><strong>Step 1:</strong> Quantify client benefits (cost savings, revenue increase, risk reduction)</p>
            <p><strong>Step 2:</strong> Position price as percentage of value created (10-30% typical)</p>
            <p><strong>Step 3:</strong> Present ROI case: "Investment of $X creates return of $Y"</p>
          </div>
        </div>

        <h3>Competitive Pricing Analysis</h3>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 mb-6">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Competitor Type</th>
                <th className="px-4 py-3 text-left font-semibold">Hourly Rate Range</th>
                <th className="px-4 py-3 text-left font-semibold">Service Level</th>
                <th className="px-4 py-3 text-left font-semibold">Target Market</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 font-medium">Low-cost providers</td>
                <td className="px-4 py-3">$50-$75</td>
                <td className="px-4 py-3">Basic service, limited support</td>
                <td className="px-4 py-3">Price-sensitive small businesses</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Mid-market firms</td>
                <td className="px-4 py-3">$100-$150</td>
                <td className="px-4 py-3">Full service, good expertise</td>
                <td className="px-4 py-3">Growing businesses</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Premium specialists</td>
                <td className="px-4 py-3">$200-$350</td>
                <td className="px-4 py-3">Specialized expertise, white-glove service</td>
                <td className="px-4 py-3">Large companies, complex needs</td>
              </tr>
              <tr className="bg-pink-50">
                <td className="px-4 py-3 font-medium">Your Position</td>
                <td className="px-4 py-3 font-semibold">$125-$175</td>
                <td className="px-4 py-3">Quality service + specialization</td>
                <td className="px-4 py-3">Mid-market with growth needs</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Project vs. Hourly Pricing</h2>

        <p>Choose pricing structure based on client preferences, project predictability, and risk tolerance.</p>

        <h3>Hourly Pricing</h3>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Best For</h4>
            <ul className="text-green-700 space-y-2">
              <li>• Undefined or evolving scope</li>
              <li>• Ongoing support and maintenance</li>
              <li>• Client-driven changes and revisions</li>
              <li>• Research or discovery phases</li>
              <li>• When effort is difficult to estimate</li>
            </ul>
          </div>
          
          <div className="bg-red-50 p-6 rounded-lg">
            <h4 className="font-semibold text-red-800 mb-3">Challenges</h4>
            <ul className="text-red-700 space-y-2">
              <li>• Clients fear unlimited costs</li>
              <li>• No incentive for efficiency</li>
              <li>• Difficult to budget for clients</li>
              <li>• Time tracking overhead</li>
              <li>• Scope creep management issues</li>
            </ul>
          </div>
        </div>

        <h3>Project-Based Pricing</h3>

        <div className="bg-pink-50 border-l-4 border-pink-500 p-6 my-8">
          <h3 className="font-semibold mb-2">📋 Project Pricing Calculation</h3>
          <ul className="mt-2 space-y-1">
            <li>☐ Estimate total hours needed (include buffer for revisions)</li>
            <li>☐ Multiply by target hourly rate</li>
            <li>☐ Add risk premium for scope uncertainty (10-20%)</li>
            <li>☐ Compare to value delivered and market rates</li>
            <li>☐ Define scope clearly with change order process</li>
            <li>☐ Structure payment milestones</li>
            <li>☐ Include assumptions and exclusions</li>
            <li>☐ Build in contingency for unexpected issues</li>
          </ul>
        </div>

        <h2>Package and Present Your Prices</h2>

        <p>How you present pricing affects client perception and acceptance rates.</p>

        <h3>Service Package Structure</h3>

        <div className="grid md:grid-cols-3 gap-4 my-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-3 text-center">Basic Package</h4>
            <p className="text-2xl font-bold text-center mb-3">$2,500</p>
            <ul className="text-sm space-y-2">
              <li>• Core service delivery</li>
              <li>• Standard timeline</li>
              <li>• Email support</li>
              <li>• Basic reporting</li>
              <li>• One revision round</li>
            </ul>
          </div>
          
          <div className="border-2 border-pink-600 rounded-lg p-4 bg-pink-50">
            <h4 className="font-semibold mb-3 text-center text-pink-800">Professional Package</h4>
            <p className="text-2xl font-bold text-center mb-3 text-pink-800">$4,500</p>
            <ul className="text-sm space-y-2">
              <li>• Everything in Basic</li>
              <li>• Priority timeline</li>
              <li>• Phone/video support</li>
              <li>• Detailed analytics</li>
              <li>• Three revision rounds</li>
              <li>• 30-day follow-up</li>
            </ul>
            <p className="text-center mt-3 text-sm font-semibold text-pink-800">MOST POPULAR</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-3 text-center">Premium Package</h4>
            <p className="text-2xl font-bold text-center mb-3">$7,500</p>
            <ul className="text-sm space-y-2">
              <li>• Everything in Professional</li>
              <li>• Rush delivery available</li>
              <li>• Dedicated project manager</li>
              <li>• Custom reporting</li>
              <li>• Unlimited revisions</li>
              <li>• 90-day support period</li>
            </ul>
          </div>
        </div>

        <h3>Price Communication Strategies</h3>

        <ul>
          <li><strong>Lead with value:</strong> Describe benefits before mentioning price</li>
          <li><strong>Anchor high:</strong> Present highest option first to make others seem reasonable</li>
          <li><strong>Bundle services:</strong> Packages seem more valuable than individual services</li>
          <li><strong>Payment terms:</strong> Break large amounts into installments</li>
          <li><strong>Comparison context:</strong> Position against alternatives (hiring, competitor costs)</li>
        </ul>

        <h2>Handle Price Objections</h2>

        <p>Prepare responses for common pricing concerns and objections.</p>

        <h3>Common Objections and Responses</h3>

        <div className="space-y-4 my-8">
          <div className="border-l-4 border-red-600 pl-6">
            <h4 className="font-semibold text-red-800 mb-2">"Your price is too high"</h4>
            <p className="text-gray-700">"I understand price is important. Let me show you the ROI calculation and compare this to the cost of not solving this problem. Which aspects of value are most important to you?"</p>
          </div>
          
          <div className="border-l-4 border-blue-600 pl-6">
            <h4 className="font-semibold text-blue-800 mb-2">"We need to think about it"</h4>
            <p className="text-gray-700">"Of course, this is an important decision. What specific concerns can I address? Would it help to break this into phases or adjust the payment schedule?"</p>
          </div>
          
          <div className="border-l-4 border-green-600 pl-6">
            <h4 className="font-semibold text-green-800 mb-2">"Can you do it for less?"</h4>
            <p className="text-gray-700">"I price based on the value delivered and quality you receive. If budget is a constraint, we could adjust the scope. What would you like to prioritize most?"</p>
          </div>
        </div>

        <h2>Related Guides</h2>
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <Link href="/how-to/how-to-write-a-simple-business-budget" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Write Simple Business Budget</h3>
            <p className="text-pink-600 text-sm mt-2">Budget planning supports pricing decisions</p>
          </Link>
          <Link href="/how-to/how-to-track-business-expenses-for-taxes" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Track Business Expenses</h3>
            <p className="text-pink-600 text-sm mt-2">Accurate cost tracking enables better pricing</p>
          </Link>
          <Link href="/how-to/how-to-separate-business-personal-finances" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Separate Business Personal Finances</h3>
            <p className="text-pink-600 text-sm mt-2">Clean accounting supports cost analysis</p>
          </Link>
          <Link href="/how-to/how-to-manage-cash-flow-for-seasonal-businesses" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Manage Cash Flow</h3>
            <p className="text-pink-600 text-sm mt-2">Pricing affects cash flow and sustainability</p>
          </Link>
        </div>
      </article>

      <section className="mt-12 border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">How do I know if my prices are too low?</h3>
            <p className="text-gray-600">
              Signs include: consistently winning all bids, clients accepting without negotiation, working long hours for low profit, or competitors charging significantly more for similar services.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Should I charge the same rate for all clients?</h3>
            <p className="text-gray-600">
              You can adjust pricing based on project complexity, timeline, client size, or relationship depth. However, maintain consistent base rates and transparent pricing criteria to avoid fairness issues.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">How often should I raise my prices?</h3>
            <p className="text-gray-600">
              Review annually and increase 3-10% based on inflation, skill improvements, or market changes. For existing clients, provide 30-60 days notice and justify increases with added value.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">What if a client wants to negotiate my price?</h3>
            <p className="text-gray-600">
              Be prepared to adjust scope rather than price. Offer a reduced-feature version, longer timeline, or phased approach. Avoid discounting without removing value or you train clients to always negotiate.
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
                  "name": "How do I know if my prices are too low?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Signs include consistently winning all bids and clients accepting without negotiation."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "Should I charge the same rate for all clients?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can adjust based on complexity, but maintain consistent base rates and criteria."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How often should I raise my prices?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "Review annually and increase 3-10% based on inflation and market changes."
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