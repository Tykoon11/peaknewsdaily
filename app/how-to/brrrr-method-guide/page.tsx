import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'BRRRR Method: Step-by-Step Guide with Real Numbers',
  description: 'Execute BRRRR safely—deal criteria, rehab, lease-up, refi math, and pitfalls to avoid in real estate investing.',
  keywords: 'BRRRR strategy, cash-out refinance, after repair value, buy rehab rent refinance repeat, real estate investing',
};

export default function BRRRRMethodGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can BRRRR work in high-price markets?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, but margins are tighter—focus on heavy value-add properties or smaller assets like condos and townhomes. Consider multi-family properties for better economies of scale."
        }
      },
      {
        "@type": "Question", 
        "name": "What is the biggest risk with BRRRR investing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Over-estimating ARV (After Repair Value) and under-budgeting rehab costs. This can leave you unable to refinance out your capital, trapping funds in the deal."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need seasoning for BRRRR refinancing?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Most lenders require 6-12 months of seasoning (ownership) before allowing cash-out refinancing. DSCR lenders may have more flexible seasoning requirements."
        }
      }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <nav className="mb-8">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-pink-600">Home</Link>
          <span>→</span>
          <Link href="/category/how-to" className="hover:text-pink-600">How-To Guides</Link>
          <span>→</span>
          <span className="text-pink-600">BRRRR Method Guide</span>
        </div>
      </nav>

      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            BRRRR Method: Step-by-Step Guide with Real Numbers
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Master the Buy-Rehab-Rent-Refinance-Repeat strategy with deal criteria, execution steps, and advanced pitfalls to avoid for successful real estate investing.
          </p>
        </header>

        <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-green-800 mb-2">🔄 BRRRR Strategy Overview</h2>
          <p className="text-green-700">
            BRRRR allows you to recycle capital by refinancing improved properties, pulling out most or all of your invested cash to repeat the process. Done correctly, it accelerates portfolio growth significantly.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The 5 BRRRR Steps Explained</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Step-by-Step Process</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-bold text-lg">1</span>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg flex-1">
                  <h4 className="font-semibold text-pink-900 mb-2">BUY Below Market Value</h4>
                  <p className="text-pink-800 text-sm mb-2">
                    Target properties at 75-80% of After Repair Value (ARV) including all costs.
                  </p>
                  <ul className="text-pink-700 text-sm space-y-1">
                    <li>• Find distressed properties or motivated sellers</li>
                    <li>• Calculate maximum offer: (ARV × 0.75) - Rehab Costs - Holding Costs</li>
                    <li>• Use hard money or cash for quick closings</li>
                    <li>• Focus on good neighborhoods with rental demand</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">2</span>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg flex-1">
                  <h4 className="font-semibold text-blue-900 mb-2">REHAB for Maximum Value</h4>
                  <p className="text-blue-800 text-sm mb-2">
                    Focus on improvements that increase both rental income and appraised value.
                  </p>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Kitchen and bathroom updates for highest ROI</li>
                    <li>• Fresh paint, flooring, and fixtures throughout</li>
                    <li>• Address all major systems (HVAC, plumbing, electrical)</li>
                    <li>• Stay on schedule to minimize holding costs</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-lg">3</span>
                </div>
                <div className="bg-green-50 p-4 rounded-lg flex-1">
                  <h4 className="font-semibold text-green-900 mb-2">RENT to Quality Tenants</h4>
                  <p className="text-green-800 text-sm mb-2">
                    Secure strong tenants with long-term leases to stabilize the property.
                  </p>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Price competitively for quick lease-up</li>
                    <li>• Screen tenants thoroughly for quality and stability</li>
                    <li>• Prefer 12-month or longer leases</li>
                    <li>• Document rental comps for appraisal support</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold text-lg">4</span>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg flex-1">
                  <h4 className="font-semibold text-purple-900 mb-2">REFINANCE to Pull Capital</h4>
                  <p className="text-purple-800 text-sm mb-2">
                    Refinance based on improved value to extract invested capital.
                  </p>
                  <ul className="text-purple-700 text-sm space-y-1">
                    <li>• Wait for any required seasoning period (6-12 months)</li>
                    <li>• Target 75% LTV refinancing to new appraised value</li>
                    <li>• Ensure DSCR ≥ 1.20-1.25 for approval</li>
                    <li>• Consider DSCR loans for easier qualification</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-lg">5</span>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg flex-1">
                  <h4 className="font-semibold text-orange-900 mb-2">REPEAT the Process</h4>
                  <p className="text-orange-800 text-sm mb-2">
                    Use extracted capital as down payment for the next BRRRR property.
                  </p>
                  <ul className="text-orange-700 text-sm space-y-1">
                    <li>• Maintain cash reserves for unexpected expenses</li>
                    <li>• Keep detailed records for portfolio management</li>
                    <li>• Scale systematically to avoid overextension</li>
                    <li>• Reinvest profits to accelerate growth</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">BRRRR Deal Example with Numbers</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Complete Deal Walkthrough</h3>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-semibold text-blue-900 mb-2">Property Details & Analysis</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <ul className="text-blue-800 space-y-1">
                  <li>• <strong>Purchase Price:</strong> $180,000</li>
                  <li>• <strong>Estimated Rehab:</strong> $40,000</li>
                  <li>• <strong>Closing Costs:</strong> $5,000</li>
                  <li>• <strong>Total Investment:</strong> $225,000</li>
                </ul>
                <ul className="text-blue-800 space-y-1">
                  <li>• <strong>ARV (After Repair Value):</strong> $320,000</li>
                  <li>• <strong>Monthly Rent:</strong> $2,200</li>
                  <li>• <strong>Market Cap Rate:</strong> 6.5%</li>
                  <li>• <strong>Buy Price vs ARV:</strong> 70.3%</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Step 1: Initial Purchase & Costs</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-700 mb-1"><strong>Cash Required:</strong></p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Down payment (25%): $45,000</li>
                      <li>• Rehab costs: $40,000</li>
                      <li>• Closing costs: $5,000</li>
                      <li>• <strong>Total Cash In: $90,000</strong></li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-700 mb-1"><strong>Financing:</strong></p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Initial loan: $135,000 (75% LTV)</li>
                      <li>• Interest rate: 7.5%</li>
                      <li>• Term: 30 years</li>
                      <li>• Monthly P&I: $944</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Step 2-3: Rehab & Rent (3-4 months)</h4>
                <div className="text-sm text-gray-700">
                  <p className="mb-2">Execute $40,000 rehab focusing on kitchen ($15k), bathrooms ($12k), flooring ($8k), and paint/fixtures ($5k).</p>
                  <p>Lease to qualified tenant at $2,200/month with 12-month lease and strong rental comps.</p>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-900 mb-2">Step 4: Refinance Analysis (6-12 months later)</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-green-800 mb-1"><strong>New Appraisal:</strong></p>
                    <ul className="text-green-700 space-y-1">
                      <li>• ARV achieved: $320,000</li>
                      <li>• New loan (75% LTV): $240,000</li>
                      <li>• Pay off original loan: $133,000</li>
                      <li>• <strong>Cash Out: $107,000</strong></li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-green-800 mb-1"><strong>New Loan Terms:</strong></p>
                    <ul className="text-green-700 space-y-1">
                      <li>• Loan amount: $240,000</li>
                      <li>• Rate: 6.5% (investment property)</li>
                      <li>• New monthly P&I: $1,517</li>
                      <li>• DSCR: 1.25 (qualifies)</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-semibold text-yellow-900 mb-2">Final Position Analysis</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-yellow-800 mb-1"><strong>Cash Recovery:</strong></p>
                    <ul className="text-yellow-700 space-y-1">
                      <li>• Original cash invested: $90,000</li>
                      <li>• Cash out at refinance: $107,000</li>
                      <li>• <strong>Net cash recovered: $17,000 profit</strong></li>
                      <li>• Capital available for next deal</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-yellow-800 mb-1"><strong>Ongoing Cash Flow:</strong></p>
                    <ul className="text-yellow-700 space-y-1">
                      <li>• Monthly rent: $2,200</li>
                      <li>• Monthly P&I: $1,517</li>
                      <li>• Est. expenses: $550</li>
                      <li>• <strong>Monthly cash flow: +$133</strong></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">BRRRR Success Criteria</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Deal Selection Guidelines</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">✅ Ideal BRRRR Properties</h4>
                <ul className="text-green-800 text-sm space-y-1">
                  <li>• <strong>All-in ≤ 75-80% of ARV:</strong> Ensures refinance success</li>
                  <li>• <strong>Strong rental demand:</strong> Quick lease-up crucial</li>
                  <li>• <strong>Value-add potential:</strong> Cosmetic to moderate rehab</li>
                  <li>• <strong>Good neighborhoods:</strong> Support both rent and values</li>
                  <li>• <strong>Multiple exit strategies:</strong> Rent, sell, or hold</li>
                  <li>• <strong>Positive cash flow:</strong> After refinance P&I payment</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">❌ Properties to Avoid</h4>
                <ul className="text-red-800 text-sm space-y-1">
                  <li>• <strong>Major structural issues:</strong> Unpredictable costs</li>
                  <li>• <strong>Environmental problems:</strong> Mold, asbestos, lead</li>
                  <li>• <strong>Declining neighborhoods:</strong> ARV and rent risk</li>
                  <li>• <strong>Over-improved for area:</strong> Won't appraise to ARV</li>
                  <li>• <strong>Unusual properties:</strong> Hard to appraise/rent</li>
                  <li>• <strong>High crime areas:</strong> Tenant and financing challenges</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg mt-4">
              <h4 className="font-semibold text-blue-900 mb-2">💡 BRRRR Formula for Success</h4>
              <p className="text-blue-800 text-sm">
                <strong>Maximum Offer = (ARV × 0.75) - Rehab Costs - Holding Costs - Profit Margin</strong>
              </p>
              <p className="text-blue-700 text-xs mt-1">
                This ensures you can refinance out most capital while maintaining positive cash flow.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Common BRRRR Pitfalls</h2>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-red-800 mb-4">🚫 Major Mistakes to Avoid</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-900 mb-2">Over-Estimating ARV</h4>
                <p className="text-red-800 text-sm mb-2">
                  <strong>Problem:</strong> Property doesn't appraise high enough for planned refinance amount.
                </p>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• <strong>Solution:</strong> Use conservative comps, get pre-appraisal opinions</li>
                  <li>• <strong>Buffer:</strong> Target 70-75% of ARV for more safety margin</li>
                  <li>• <strong>Validation:</strong> Get multiple realtor and appraiser opinions</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-900 mb-2">Under-Budgeting Rehab</h4>
                <p className="text-red-800 text-sm mb-2">
                  <strong>Problem:</strong> Rehab costs exceed budget, killing deal profitability.
                </p>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• <strong>Solution:</strong> Get detailed contractor bids before purchase</li>
                  <li>• <strong>Contingency:</strong> Add 15-20% buffer for unexpected issues</li>
                  <li>• <strong>Scope control:</strong> Stick to value-adding improvements only</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-900 mb-2">Seasoning Requirements</h4>
                <p className="text-red-800 text-sm mb-2">
                  <strong>Problem:</strong> Lender requires 6-12 months ownership before cash-out refi.
                </p>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• <strong>Solution:</strong> Research lender policies before starting</li>
                  <li>• <strong>Alternative:</strong> Use DSCR lenders with flexible seasoning</li>
                  <li>• <strong>Planning:</strong> Budget for longer hold periods and carrying costs</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">BRRRR Financing Options</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Funding Your BRRRR Deals</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Initial Purchase Financing</h4>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded">
                    <h5 className="font-semibold text-blue-800 mb-1">Hard Money Loans</h5>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• Fast closing (7-14 days)</li>
                      <li>• Asset-based underwriting</li>
                      <li>• Higher rates (10-15%)</li>
                      <li>• 6-24 month terms</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded">
                    <h5 className="font-semibold text-green-800 mb-1">Private Money</h5>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• Flexible terms</li>
                      <li>• Competitive rates (6-12%)</li>
                      <li>• Relationship-based</li>
                      <li>• Quick decisions</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 p-3 rounded">
                    <h5 className="font-semibold text-purple-800 mb-1">Cash/HELOC</h5>
                    <ul className="text-purple-700 text-sm space-y-1">
                      <li>• Strongest negotiating position</li>
                      <li>• No financing contingencies</li>
                      <li>• Requires significant capital</li>
                      <li>• Fast closing advantage</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-green-900 mb-3">Refinance Options</h4>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded">
                    <h5 className="font-semibold text-green-800 mb-1">DSCR Loans</h5>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• Qualify based on property cash flow</li>
                      <li>• No personal income verification</li>
                      <li>• Flexible seasoning (sometimes 0-6 months)</li>
                      <li>• Higher rates than conventional</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded">
                    <h5 className="font-semibold text-blue-800 mb-1">Conventional Investment Loans</h5>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• Lower rates when qualified</li>
                      <li>• Requires income/asset documentation</li>
                      <li>• 6-12 month seasoning typically</li>
                      <li>• DTI and reserve requirements</li>
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-50 p-3 rounded">
                    <h5 className="font-semibold text-yellow-800 mb-1">Portfolio Lenders</h5>
                    <ul className="text-yellow-700 text-sm space-y-1">
                      <li>• Keep loans in-house</li>
                      <li>• Flexible underwriting</li>
                      <li>• Relationship-based decisions</li>
                      <li>• Vary widely in terms</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">BRRRR in Different Markets</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Market-Specific Strategies</h3>
            
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">High-Price Markets ($400k+ average)</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-blue-800 mb-1"><strong>Challenges:</strong></p>
                    <ul className="text-blue-700 space-y-1">
                      <li>• Higher capital requirements</li>
                      <li>• Lower cap rates and cash flow</li>
                      <li>• More competition for deals</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-blue-800 mb-1"><strong>Adaptations:</strong></p>
                    <ul className="text-blue-700 space-y-1">
                      <li>• Focus on condos/townhomes</li>
                      <li>• Target heavy value-add properties</li>
                      <li>• Consider multi-family for scale</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Mid-Tier Markets ($150k-400k average)</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-green-800 mb-1"><strong>Advantages:</strong></p>
                    <ul className="text-green-700 space-y-1">
                      <li>• Better cash flow potential</li>
                      <li>• More deals available</li>
                      <li>• Lower capital requirements</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-green-800 mb-1"><strong>Strategy:</strong></p>
                    <ul className="text-green-700 space-y-1">
                      <li>• Standard BRRRR approach works well</li>
                      <li>• Focus on growing neighborhoods</li>
                      <li>• Build relationships with wholesalers</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-900 mb-2">Lower-Cost Markets (under $150k average)</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-yellow-800 mb-1"><strong>Opportunities:</strong></p>
                    <ul className="text-yellow-700 space-y-1">
                      <li>• High cap rates possible</li>
                      <li>• Lower competition</li>
                      <li>• Strong rental yields</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-yellow-800 mb-1"><strong>Considerations:</strong></p>
                    <ul className="text-yellow-700 space-y-1">
                      <li>• Research economic stability</li>
                      <li>• Verify rental demand depth</li>
                      <li>• Consider property management needs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Can BRRRR work in high-price markets?</h3>
              <p className="text-gray-700">
                Yes, but margins are tighter—focus on heavy value-add properties or smaller assets like condos and townhomes. Consider multi-family properties for better economies of scale.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What is the biggest risk with BRRRR investing?</h3>
              <p className="text-gray-700">
                Over-estimating ARV (After Repair Value) and under-budgeting rehab costs. This can leave you unable to refinance out your capital, trapping funds in the deal.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do I need seasoning for BRRRR refinancing?</h3>
              <p className="text-gray-700">
                Most lenders require 6-12 months of seasoning (ownership) before allowing cash-out refinancing. DSCR lenders may have more flexible seasoning requirements.
              </p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">🎯 Key Takeaways</h3>
            <ul className="text-green-700 space-y-1">
              <li>• Target properties at 75-80% of ARV all-in for refinance success</li>
              <li>• Focus on value-add improvements that boost both rent and appraisal</li>
              <li>• Research lender seasoning requirements before starting</li>
              <li>• Maintain cash reserves—BRRRR ties up capital temporarily</li>
              <li>• Start with one deal to learn the process before scaling</li>
            </ul>
          </div>
        </div>
      </article>

      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-wrap gap-4">
          <Link href="/how-to/analyze-rental-property-cap-rate-cash-on-cash" className="text-pink-600 hover:text-pink-700 underline">
            Rental Property Analysis
          </Link>
          <Link href="/how-to/estimate-rehab-renovation-costs" className="text-pink-600 hover:text-pink-700 underline">
            Rehab Cost Estimation
          </Link>
          <Link href="/how-to/finance-investment-properties-dscr-hard-money" className="text-pink-600 hover:text-pink-700 underline">
            Investment Property Financing
          </Link>
          <Link href="/category/how-to" className="text-pink-600 hover:text-pink-700 underline">
            All How-To Guides
          </Link>
        </div>
      </footer>
    </div>
  );
}