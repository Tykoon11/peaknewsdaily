import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Financing Investment Properties: DSCR Loans, Hard Money & More',
  description: 'Compare DSCR, conventional, HELOCs, and hard money. See docs needed, rates, and when to use each financing option.',
  keywords: 'DSCR loan, hard money, investment property mortgage, rental property financing, real estate lending',
};

export default function FinanceInvestmentPropertiesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are points worth it for a lower interest rate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Calculate breakeven months: points cost ÷ monthly payment savings. If you'll hold the property longer than the breakeven period, points can be worthwhile."
        }
      },
      {
        "@type": "Question", 
        "name": "Do DSCR loans have prepayment penalties?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many DSCR loans include prepayment penalties, often with step-downs over 3-5 years or yield-maintenance calculations. Review terms carefully before signing."
        }
      },
      {
        "@type": "Question",
        "name": "What DSCR ratio do I need to qualify?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Most lenders require DSCR ≥ 1.20-1.25. DSCR = Net Operating Income ÷ Annual Debt Service. Higher ratios may get better rates."
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
          <span className="text-pink-600">Investment Property Financing</span>
        </div>
      </nav>

      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How to Finance Investment Properties: DSCR, Hard Money & More
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Master investment property financing with comprehensive comparison of DSCR loans, conventional mortgages, hard money, and alternative funding sources.
          </p>
        </header>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">🏦 Financing Strategy Overview</h2>
          <p className="text-blue-700">
            Investment property financing differs significantly from owner-occupied mortgages. Higher rates, larger down payments, and stricter qualification requirements are the norm, but multiple options exist for different investor needs.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Financing Options at a Glance</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Quick Comparison Matrix</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">Loan Type</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">Qualification</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">Rate Range</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">Down Payment</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-green-600">Conventional</td>
                    <td className="px-4 py-3 text-gray-700">DTI, income docs, reserves</td>
                    <td className="px-4 py-3 text-gray-700">6.5-8.5%</td>
                    <td className="px-4 py-3 text-gray-700">20-25%</td>
                    <td className="px-4 py-3 text-gray-700">Best rates, W-2 income</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-blue-600">DSCR Loans</td>
                    <td className="px-4 py-3 text-gray-700">Property cash flow</td>
                    <td className="px-4 py-3 text-gray-700">7.5-10%</td>
                    <td className="px-4 py-3 text-gray-700">20-25%</td>
                    <td className="px-4 py-3 text-gray-700">Self-employed, no income docs</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-red-600">Hard Money</td>
                    <td className="px-4 py-3 text-gray-700">Asset-based</td>
                    <td className="px-4 py-3 text-gray-700">10-15%</td>
                    <td className="px-4 py-3 text-gray-700">10-30%</td>
                    <td className="px-4 py-3 text-gray-700">Speed, rehab, BRRRR</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-purple-600">HELOC/HELOAN</td>
                    <td className="px-4 py-3 text-gray-700">Home equity</td>
                    <td className="px-4 py-3 text-gray-700">6-9%</td>
                    <td className="px-4 py-3 text-gray-700">100% (of equity)</td>
                    <td className="px-4 py-3 text-gray-700">Down payments, flexibility</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-orange-600">Portfolio/CU</td>
                    <td className="px-4 py-3 text-gray-700">Relationship-based</td>
                    <td className="px-4 py-3 text-gray-700">6.5-9%</td>
                    <td className="px-4 py-3 text-gray-700">15-25%</td>
                    <td className="px-4 py-3 text-gray-700">Flexible underwriting</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">DSCR Loans Deep Dive</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Debt Service Coverage Ratio Financing</h3>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-semibold text-blue-900 mb-2">💡 DSCR Formula</h4>
              <p className="text-blue-800 text-sm">
                <strong>DSCR = Net Operating Income (NOI) ÷ Annual Debt Service</strong>
              </p>
              <p className="text-blue-700 text-xs mt-1">
                Example: Property NOI of $24,000 ÷ Annual debt service of $20,000 = DSCR of 1.20
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-900 mb-3">✅ DSCR Advantages</h4>
                <ul className="text-green-800 text-sm space-y-1">
                  <li>• No personal income verification required</li>
                  <li>• Qualify based on property performance</li>
                  <li>• Great for self-employed investors</li>
                  <li>• Faster processing than conventional</li>
                  <li>• Can close multiple properties simultaneously</li>
                  <li>• No DTI (debt-to-income) calculations</li>
                </ul>
                
                <h4 className="font-semibold text-blue-900 mb-3 mt-4">📋 DSCR Requirements</h4>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• DSCR typically ≥ 1.20-1.25</li>
                  <li>• 20-25% down payment minimum</li>
                  <li>• 2-6 months reserves (PITI)</li>
                  <li>• Credit score 620+ (higher for better rates)</li>
                  <li>• Property must cash flow positively</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-red-900 mb-3">❌ DSCR Disadvantages</h4>
                <ul className="text-red-800 text-sm space-y-1">
                  <li>• Higher interest rates (0.5-1.5% premium)</li>
                  <li>• Prepayment penalties common</li>
                  <li>• Limited lender options</li>
                  <li>• Higher closing costs and fees</li>
                  <li>• Property must meet DSCR requirements</li>
                  <li>• Some lenders require rental experience</li>
                </ul>
                
                <h4 className="font-semibold text-purple-900 mb-3 mt-4">🎯 Best DSCR Candidates</h4>
                <ul className="text-purple-800 text-sm space-y-1">
                  <li>• Self-employed or business owners</li>
                  <li>• High-net-worth individuals</li>
                  <li>• Investors scaling quickly</li>
                  <li>• Complex income situations</li>
                  <li>• Privacy-focused borrowers</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg mt-6">
              <h4 className="font-semibold text-yellow-900 mb-2">💰 DSCR Calculation Example</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-yellow-800 mb-1"><strong>Property Details:</strong></p>
                  <ul className="text-yellow-700 space-y-1">
                    <li>• Monthly rent: $2,500</li>
                    <li>• Annual gross income: $30,000</li>
                    <li>• Operating expenses: $6,000</li>
                    <li>• Net Operating Income: $24,000</li>
                  </ul>
                </div>
                <div>
                  <p className="text-yellow-800 mb-1"><strong>Loan Terms:</strong></p>
                  <ul className="text-yellow-700 space-y-1">
                    <li>• Loan amount: $320,000</li>
                    <li>• Rate: 8.0%, 30-year</li>
                    <li>• Monthly P&I: $2,348</li>
                    <li>• Annual debt service: $28,176</li>
                    <li>• <strong>DSCR: 0.85 (doesn't qualify)</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Conventional Investment Property Loans</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Traditional Financing Route</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-900 mb-3">✅ Conventional Advantages</h4>
                <ul className="text-green-800 text-sm space-y-1">
                  <li>• Lowest interest rates available</li>
                  <li>• No prepayment penalties</li>
                  <li>• Wide lender availability</li>
                  <li>• Standardized underwriting</li>
                  <li>• Can finance up to 10 properties</li>
                  <li>• Predictable qualification process</li>
                </ul>
                
                <h4 className="font-semibold text-blue-900 mb-3 mt-4">📋 Documentation Required</h4>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• 2 years tax returns</li>
                  <li>• Recent pay stubs (W-2 income)</li>
                  <li>• 2 months bank statements</li>
                  <li>• Asset verification</li>
                  <li>• Current rental leases (if applicable)</li>
                  <li>• Property management agreements</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-red-900 mb-3">❌ Conventional Challenges</h4>
                <ul className="text-red-800 text-sm space-y-1">
                  <li>• Strict DTI requirements (typically ≤ 45%)</li>
                  <li>• Full income documentation required</li>
                  <li>• 2-6 months reserves needed</li>
                  <li>• Rental income haircuts (75% typically)</li>
                  <li>• Longer processing times</li>
                  <li>• Self-employed borrowers face scrutiny</li>
                </ul>
                
                <h4 className="font-semibold text-purple-900 mb-3 mt-4">📊 Qualification Metrics</h4>
                <ul className="text-purple-800 text-sm space-y-1">
                  <li>• DTI ≤ 43-45% (including new payment)</li>
                  <li>• Credit score 620+ (740+ for best rates)</li>
                  <li>• 20-25% down payment required</li>
                  <li>• 2-6 months PITI reserves per property</li>
                  <li>• Stable employment history (2+ years)</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Hard Money & Bridge Loans</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Short-Term Asset-Based Financing</h3>
            
            <div className="space-y-6">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">⚡ Hard Money Characteristics</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-red-800 mb-1"><strong>Speed & Flexibility:</strong></p>
                    <ul className="text-red-700 space-y-1">
                      <li>• 7-14 day closing possible</li>
                      <li>• Minimal documentation</li>
                      <li>• Asset-based underwriting</li>
                      <li>• No income verification</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-red-800 mb-1"><strong>Cost Structure:</strong></p>
                    <ul className="text-red-700 space-y-1">
                      <li>• 10-15% interest rates</li>
                      <li>• 2-5 points origination</li>
                      <li>• 6-24 month terms</li>
                      <li>• Interest-only payments</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">🎯 Best Use Cases</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h5 className="font-semibold text-blue-800 mb-1">BRRRR Strategy</h5>
                    <p className="text-blue-700">Buy and rehab quickly, then refinance to permanent financing</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-800 mb-1">Fix & Flip</h5>
                    <p className="text-blue-700">Short-term financing for renovation and resale projects</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-800 mb-1">Auction Properties</h5>
                    <p className="text-blue-700">Fast closing for courthouse or online auction purchases</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-900 mb-2">💰 Hard Money Cost Example</h4>
                <div className="text-sm text-yellow-800">
                  <p className="mb-2"><strong>Scenario:</strong> $200,000 loan, 12% rate, 3 points, 12 months</p>
                  <ul className="space-y-1">
                    <li>• Origination points: $200,000 × 3% = $6,000</li>
                    <li>• Monthly interest: $200,000 × 12% ÷ 12 = $2,000</li>
                    <li>• Total 12-month cost: $6,000 + ($2,000 × 12) = $30,000</li>
                    <li>• <strong>All-in cost: 15% annualized</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">HELOC & Home Equity Financing</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Leveraging Primary Residence Equity</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-900 mb-3">HELOC (Home Equity Line of Credit)</h4>
                <div className="bg-green-50 p-3 rounded mb-3">
                  <h5 className="font-semibold text-green-800 mb-1">Features:</h5>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Variable interest rate</li>
                    <li>• Draw period (5-10 years)</li>
                    <li>• Interest-only payments during draw</li>
                    <li>• Repayment period (10-20 years)</li>
                    <li>• Can borrow up to 80-85% CLTV</li>
                  </ul>
                </div>
                
                <h5 className="font-semibold text-green-800 mb-1">Best For:</h5>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Multiple property purchases</li>
                  <li>• Flexible funding needs</li>
                  <li>• Down payments and rehab costs</li>
                  <li>• Lower initial costs</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">HELOAN (Home Equity Loan)</h4>
                <div className="bg-blue-50 p-3 rounded mb-3">
                  <h5 className="font-semibold text-blue-800 mb-1">Features:</h5>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Fixed interest rate</li>
                    <li>• Lump sum disbursement</li>
                    <li>• Fixed monthly payments</li>
                    <li>• 10-30 year terms available</li>
                    <li>• Can borrow up to 80-90% CLTV</li>
                  </ul>
                </div>
                
                <h5 className="font-semibold text-blue-800 mb-1">Best For:</h5>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Single large purchase</li>
                  <li>• Predictable payment preferred</li>
                  <li>• Rate stability important</li>
                  <li>• Debt consolidation</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg mt-4">
              <h4 className="font-semibold text-orange-900 mb-2">⚠️ Equity Financing Risks</h4>
              <ul className="text-orange-800 text-sm space-y-1">
                <li>• Primary residence is collateral—foreclosure risk if investments fail</li>
                <li>• Variable rates on HELOCs can increase payments</li>
                <li>• Reduced equity cushion in your home</li>
                <li>• May impact ability to refinance primary residence</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Alternative Financing Sources</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Creative Financing Options</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-purple-900 mb-3">Portfolio Lenders</h4>
                <div className="bg-purple-50 p-3 rounded mb-2">
                  <ul className="text-purple-800 text-sm space-y-1">
                    <li>• Keep loans on their books</li>
                    <li>• Flexible underwriting guidelines</li>
                    <li>• Relationship-based decisions</li>
                    <li>• Can exceed conventional limits</li>
                    <li>• Often local/regional banks</li>
                  </ul>
                </div>
                
                <h4 className="font-semibold text-green-900 mb-3 mt-4">Credit Unions</h4>
                <div className="bg-green-50 p-3 rounded">
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>• Member-owned, often better rates</li>
                    <li>• Personal service and flexibility</li>
                    <li>• Lower fees than banks</li>
                    <li>• May have membership requirements</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Private Money</h4>
                <div className="bg-blue-50 p-3 rounded mb-2">
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• Individual investors or funds</li>
                    <li>• Negotiable terms and rates</li>
                    <li>• Faster decisions than banks</li>
                    <li>• May require personal guarantees</li>
                    <li>• Network and referral-based</li>
                  </ul>
                </div>
                
                <h4 className="font-semibold text-orange-900 mb-3 mt-4">Seller Financing</h4>
                <div className="bg-orange-50 p-3 rounded">
                  <ul className="text-orange-800 text-sm space-y-1">
                    <li>• Owner carries note/mortgage</li>
                    <li>• Flexible terms possible</li>
                    <li>• Lower closing costs</li>
                    <li>• Motivated sellers only</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Financing Strategy by Investment Type</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Matching Financing to Strategy</h3>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-400 pl-4">
                <h4 className="font-semibold text-blue-900 mb-2">💰 Buy & Hold Rentals</h4>
                <p className="text-gray-700 text-sm mb-2">
                  <strong>Best Options:</strong> Conventional loans (lowest rates) or DSCR loans (easier qualification)
                </p>
                <p className="text-gray-600 text-sm">
                  Focus on long-term, fixed-rate financing to maximize cash flow and build equity over time.
                </p>
              </div>
              
              <div className="border-l-4 border-green-400 pl-4">
                <h4 className="font-semibold text-green-900 mb-2">🔄 BRRRR Strategy</h4>
                <p className="text-gray-700 text-sm mb-2">
                  <strong>Best Options:</strong> Hard money (acquisition) → DSCR or conventional (refinance)
                </p>
                <p className="text-gray-600 text-sm">
                  Use short-term financing for speed, then refinance to permanent loan after improvements.
                </p>
              </div>
              
              <div className="border-l-4 border-red-400 pl-4">
                <h4 className="font-semibold text-red-900 mb-2">🔨 Fix & Flip</h4>
                <p className="text-gray-700 text-sm mb-2">
                  <strong>Best Options:</strong> Hard money, private money, or business lines of credit
                </p>
                <p className="text-gray-600 text-sm">
                  Short-term, interest-only financing minimizes carrying costs during renovation and sale.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-400 pl-4">
                <h4 className="font-semibold text-purple-900 mb-2">🏢 Multi-Family</h4>
                <p className="text-gray-700 text-sm mb-2">
                  <strong>Best Options:</strong> Commercial loans, portfolio lenders, or agency debt (5+ units)
                </p>
                <p className="text-gray-600 text-sm">
                  Larger properties often require commercial financing with different underwriting standards.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Rate Shopping & Optimization</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibond text-gray-900 mb-4">Getting the Best Terms</h3>
            
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">💡 Rate Shopping Tips</h4>
                <ul className="text-green-800 text-sm space-y-1">
                  <li>• Shop rates within 14-45 day window to minimize credit impact</li>
                  <li>• Compare APR, not just interest rate</li>
                  <li>• Negotiate origination fees and points</li>
                  <li>• Consider rate locks during volatile periods</li>
                  <li>• Factor in prepayment penalties</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">📊 Points Break-Even Analysis</h4>
                <div className="text-sm text-blue-800">
                  <p className="mb-2"><strong>Formula:</strong> Points Cost ÷ Monthly Payment Savings = Break-even (months)</p>
                  <p className="mb-1"><strong>Example:</strong></p>
                  <ul className="space-y-1">
                    <li>• 1 point costs $3,000 on $300k loan</li>
                    <li>• Reduces payment by $75/month</li>
                    <li>• Break-even: $3,000 ÷ $75 = 40 months</li>
                    <li>• <strong>Worth it if holding &gt;40 months</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Are points worth it for a lower interest rate?</h3>
              <p className="text-gray-700">
                Calculate breakeven months: points cost ÷ monthly payment savings. If you'll hold the property longer than the breakeven period, points can be worthwhile.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do DSCR loans have prepayment penalties?</h3>
              <p className="text-gray-700">
                Many DSCR loans include prepayment penalties, often with step-downs over 3-5 years or yield-maintenance calculations. Review terms carefully before signing.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What DSCR ratio do I need to qualify?</h3>
              <p className="text-gray-700">
                Most lenders require DSCR ≥ 1.20-1.25. DSCR = Net Operating Income ÷ Annual Debt Service. Higher ratios may get better rates.
              </p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">🎯 Key Takeaways</h3>
            <ul className="text-green-700 space-y-1">
              <li>• Match financing type to your investment strategy and timeline</li>
              <li>• DSCR loans offer flexibility but cost more than conventional</li>
              <li>• Hard money enables speed but requires exit strategy</li>
              <li>• Shop multiple lenders within a short timeframe</li>
              <li>• Factor in all costs, not just interest rates</li>
            </ul>
          </div>
        </div>
      </article>

      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-wrap gap-4">
          <Link href="/how-to/analyze-rental-property-cap-rate-cash-on-cash" className="text-pink-600 hover:text-pink-700 underline">
            Rental Property Analysis
          </Link>
          <Link href="/how-to/brrrr-method-guide" className="text-pink-600 hover:text-pink-700 underline">
            BRRRR Strategy Guide
          </Link>
          <Link href="/how-to/manage-rentals-remotely" className="text-pink-600 hover:text-pink-700 underline">
            Remote Property Management
          </Link>
          <Link href="/category/how-to" className="text-pink-600 hover:text-pink-700 underline">
            All How-To Guides
          </Link>
        </div>
      </footer>
    </div>
  );
}