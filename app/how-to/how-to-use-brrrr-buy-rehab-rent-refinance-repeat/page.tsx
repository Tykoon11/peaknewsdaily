import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'BRRRR Method Guide: Buy, Rehab, Rent, Refinance, Repeat',
  description: 'Master the BRRRR real estate strategy with step-by-step execution, financing options, and risk management for building wealth through rental properties.',
  keywords: 'BRRRR method, real estate investing, rental properties, refinancing, property flipping, cash-out refinance, investment strategy',
};

export default function BRRRRMethodPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What loan-to-value ratio is needed for BRRRR refinancing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most lenders offer 70-80% LTV on investment property refinances. You need enough equity post-rehab to pull out your initial capital while maintaining positive cash flow with the new mortgage payment."
        }
      },
      {
        "@type": "Question", 
        "name": "How long should I wait before refinancing in BRRRR?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wait 6-12 months after rehab completion before refinancing. This seasoning period allows the property to establish rental history and ensures the appraisal reflects your improvements' full value."
        }
      },
      {
        "@type": "Question",
        "name": "What's the minimum cash flow for a successful BRRRR deal?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Target $200+ monthly cash flow per unit after refinancing to account for vacancies, repairs, and market fluctuations. Factor in all expenses including property management, maintenance reserves, and capex."
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
            How to Use BRRRR Method: Buy, Rehab, Rent, Refinance, Repeat Strategy
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Master the BRRRR real estate investment strategy to build wealth through rental properties. Learn step-by-step execution, financing tactics, and risk management for sustainable portfolio growth.
          </p>
        </header>

        <div className="bg-purple-50 border-l-4 border-purple-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-purple-800 mb-2">🔄 Wealth Building Strategy</h2>
          <p className="text-purple-700">
            BRRRR allows investors to recycle capital repeatedly, building substantial real estate portfolios with limited initial investment. Each successful cycle generates cash flow and forces appreciation.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The BRRRR Method Breakdown</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">5-Step BRRRR Process</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">B</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-600 mb-2">BUY - Acquire Below-Market Properties</h4>
                  <p className="text-gray-700 mb-2">Purchase distressed properties at significant discounts using cash or hard money loans.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Target 60-70% of ARV (After Repair Value)</li>
                    <li>• Focus on distressed, dated, or motivated seller situations</li>
                    <li>• Use cash for speed and negotiation power</li>
                    <li>• Verify repair estimates and ARV projections carefully</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-lg">R</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-green-600 mb-2">REHAB - Renovate for Maximum Value</h4>
                  <p className="text-gray-700 mb-2">Complete strategic renovations that maximize rental income and property value.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Focus on functional improvements (kitchens, baths, systems)</li>
                    <li>• Budget 15-25% contingency for unexpected issues</li>
                    <li>• Manage timeline to minimize carrying costs</li>
                    <li>• Document all improvements for appraisal purposes</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-yellow-600 font-bold text-lg">R</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-yellow-600 mb-2">RENT - Secure Quality Tenants</h4>
                  <p className="text-gray-700 mb-2">Market property for optimal rental income with thorough tenant screening.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Research comparable rents in area</li>
                    <li>• Screen tenants using consistent, legal criteria</li>
                    <li>• Execute strong lease agreements</li>
                    <li>• Establish 3-6 months of rental history before refinancing</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold text-lg">R</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-purple-600 mb-2">REFINANCE - Extract Capital</h4>
                  <p className="text-gray-700 mb-2">Refinance based on improved value to pull out initial investment capital.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Target 70-80% LTV on new appraised value</li>
                    <li>• Shop multiple lenders for best terms</li>
                    <li>• Ensure cash flow remains positive after new payment</li>
                    <li>• Consider portfolio lenders for investor-friendly terms</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-bold text-lg">R</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-pink-600 mb-2">REPEAT - Scale the Process</h4>
                  <p className="text-gray-700 mb-2">Use extracted capital to acquire the next property and repeat the cycle.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Reinvest refinance proceeds into next property</li>
                    <li>• Build systems and team for efficient scaling</li>
                    <li>• Track metrics and optimize process over time</li>
                    <li>• Consider portfolio diversification as you grow</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">BRRRR Deal Example Walkthrough</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Real Numbers Case Study</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Initial Acquisition</h4>
                <div className="bg-gray-50 p-4 rounded-lg text-sm">
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span>Purchase Price:</span>
                      <span className="font-semibold">$80,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rehab Costs:</span>
                      <span className="font-semibold">$25,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Closing Costs:</span>
                      <span className="font-semibold">$3,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Carrying Costs (6 mo):</span>
                      <span className="font-semibold">$4,000</span>
                    </div>
                    <div className="border-t pt-1 mt-2">
                      <div className="flex justify-between font-bold">
                        <span>Total Investment:</span>
                        <span>$112,000</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h4 className="font-semibold text-gray-900 mb-3 mt-6">Post-Rehab Position</h4>
                <div className="bg-blue-50 p-4 rounded-lg text-sm">
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span>Appraised Value (ARV):</span>
                      <span className="font-semibold">$150,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly Rent:</span>
                      <span className="font-semibold">$1,400</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Gross Rent Multiplier:</span>
                      <span className="font-semibold">8.9</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Equity Created:</span>
                      <span className="font-semibold text-green-600">$38,000</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Refinance Analysis</h4>
                <div className="bg-green-50 p-4 rounded-lg text-sm">
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span>Appraised Value:</span>
                      <span className="font-semibold">$150,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Loan Amount (75% LTV):</span>
                      <span className="font-semibold">$112,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Refinance Costs:</span>
                      <span className="font-semibold">-$3,500</span>
                    </div>
                    <div className="border-t pt-1 mt-2">
                      <div className="flex justify-between font-bold text-green-700">
                        <span>Cash Extracted:</span>
                        <span>$109,000</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h4 className="font-semibold text-gray-900 mb-3 mt-6">Monthly Cash Flow</h4>
                <div className="bg-yellow-50 p-4 rounded-lg text-sm">
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span>Gross Rent:</span>
                      <span className="font-semibold">$1,400</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Mortgage Payment (P&I):</span>
                      <span className="font-semibold">-$565</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Insurance:</span>
                      <span className="font-semibold">-$85</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Property Taxes:</span>
                      <span className="font-semibold">-$190</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Property Management:</span>
                      <span className="font-semibold">-$140</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Maintenance Reserve:</span>
                      <span className="font-semibold">-$140</span>
                    </div>
                    <div className="border-t pt-1 mt-2">
                      <div className="flex justify-between font-bold text-green-700">
                        <span>Monthly Cash Flow:</span>
                        <span>$280</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-green-100 p-4 rounded-lg mt-6">
              <h4 className="font-semibold text-green-800 mb-2">🎯 BRRRR Success Metrics</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-green-700">Capital Recovered:</span>
                  <div className="font-bold text-green-800">97.3% ($109k/$112k)</div>
                </div>
                <div>
                  <span className="text-green-700">Cash-on-Cash ROI:</span>
                  <div className="font-bold text-green-800">112% ($3,360/$3,000)</div>
                </div>
                <div>
                  <span className="text-green-700">Equity Position:</span>
                  <div className="font-bold text-green-800">$37,500 (25%)</div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Financing Options for BRRRR</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Initial Purchase Financing</h3>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Cash Purchase (Optimal)</h4>
                <p className="text-blue-800 text-sm mb-2">Fastest, strongest offers with immediate access to property for rehab.</p>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• No financing contingencies or delays</li>
                  <li>• Stronger negotiating position with sellers</li>
                  <li>• Can close in 7-14 days</li>
                  <li>• Requires significant liquid capital or investors</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-900 mb-2">Hard Money Loans</h4>
                <p className="text-orange-800 text-sm mb-2">Short-term financing based on property value, not income.</p>
                <ul className="text-orange-700 text-sm space-y-1">
                  <li>• Rates: 8-15% APR, 6-18 month terms</li>
                  <li>• 70-80% LTV based on ARV</li>
                  <li>• Fast approval and funding (1-2 weeks)</li>
                  <li>• Higher costs but enables leverage</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Private Money Lenders</h4>
                <p className="text-green-800 text-sm mb-2">Individual investors lending on real estate projects.</p>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Rates: 6-12% APR, flexible terms</li>
                  <li>• More flexible underwriting</li>
                  <li>• Relationship-based lending</li>
                  <li>• Can fund rehab costs in addition to purchase</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Refinancing Strategies</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Refinance Preparation & Execution</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Pre-Refinance Requirements</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• 6+ months of rental history and lease agreements</li>
                  <li>• Complete renovation documentation and receipts</li>
                  <li>• Property management or rent roll statements</li>
                  <li>• Updated property insurance and tax assessments</li>
                  <li>• Clean title and no outstanding liens</li>
                  <li>• Strong personal financial position</li>
                </ul>
                
                <h4 className="font-semibold text-gray-900 mb-2 mt-4">Lender Types</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Portfolio lenders (keep loans in-house)</li>
                  <li>• Credit unions (relationship-based)</li>
                  <li>• Community banks (local market knowledge)</li>
                  <li>• DSCR lenders (income-based qualification)</li>
                  <li>• Broker networks (access to multiple lenders)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Loan Terms to Target</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• 70-80% LTV on appraised value</li>
                  <li>• 20-30 year amortization</li>
                  <li>• Fixed rates when possible</li>
                  <li>• No prepayment penalties</li>
                  <li>• Reasonable closing costs (2-3% of loan)</li>
                  <li>• Non-recourse preferred but rare</li>
                </ul>
                
                <h4 className="font-semibold text-gray-900 mb-2 mt-4">Appraisal Optimization</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Provide comparable sales (renovated properties)</li>
                  <li>• Document all improvements with before/after photos</li>
                  <li>• Present rental comps to support income approach</li>
                  <li>• Ensure property is clean and well-presented</li>
                  <li>• Be present during appraisal if possible</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What loan-to-value ratio is needed for BRRRR refinancing?</h3>
              <p className="text-gray-700">
                Most lenders offer 70-80% LTV on investment property refinances. You need enough equity post-rehab to pull out your initial capital while maintaining positive cash flow with the new mortgage payment.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How long should I wait before refinancing in BRRRR?</h3>
              <p className="text-gray-700">
                Wait 6-12 months after rehab completion before refinancing. This seasoning period allows the property to establish rental history and ensures the appraisal reflects your improvements' full value.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What's the minimum cash flow for a successful BRRRR deal?</h3>
              <p className="text-gray-700">
                Target $200+ monthly cash flow per unit after refinancing to account for vacancies, repairs, and market fluctuations. Factor in all expenses including property management, maintenance reserves, and capex.
              </p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">🎯 Key Takeaways</h3>
            <ul className="text-green-700 space-y-1">
              <li>• Buy at 60-70% of ARV to create sufficient equity for refinancing</li>
              <li>• Focus on cash flow positive properties after refinance</li>
              <li>• Build relationships with portfolio lenders for easier refinancing</li>
              <li>• Document all improvements thoroughly for appraisal purposes</li>
              <li>• Scale systematically while maintaining quality standards</li>
            </ul>
          </div>
        </div>
      </article>

      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-wrap gap-4">
          <Link href="/how-to/how-to-estimate-rehab-renovation-costs-accurately" className="text-pink-600 hover:text-pink-700 underline">
            Rehab Cost Estimation
          </Link>
          <Link href="/how-to/how-to-analyze-a-rental-property-cap-rate-cash-on-cash" className="text-pink-600 hover:text-pink-700 underline">
            Rental Property Analysis
          </Link>
          <Link href="/how-to/how-to-finance-investment-properties-dscr-hard-money" className="text-pink-600 hover:text-pink-700 underline">
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