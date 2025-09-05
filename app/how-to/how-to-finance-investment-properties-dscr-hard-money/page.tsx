import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Investment Property Financing: DSCR, Hard Money & Portfolio Loans',
  description: 'Complete guide to financing investment properties with DSCR loans, hard money, portfolio lenders, and creative financing strategies for real estate investors.',
  keywords: 'investment property loans, DSCR loans, hard money lending, portfolio lenders, real estate financing, investor loans, creative financing',
};

export default function InvestmentPropertyFinancingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the minimum DSCR ratio lenders require?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most DSCR lenders require a minimum ratio of 1.00-1.25, meaning the property's net operating income covers 100-125% of the mortgage payment. Higher ratios get better rates."
        }
      },
      {
        "@type": "Question", 
        "name": "How much down payment is required for investment properties?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Conventional loans typically require 20-25% down for investment properties. Hard money and private lenders may accept 10-20% down but at higher interest rates."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use rental income to qualify for investment property loans?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Yes, with DSCR loans and some portfolio lenders. They use the property's rental income rather than your personal income for qualification, making them ideal for investors."
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
            How to Finance Investment Properties: DSCR, Hard Money & Portfolio Loans
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Master investment property financing with comprehensive coverage of DSCR loans, hard money lending, portfolio lenders, and creative financing strategies for building your real estate portfolio.
          </p>
        </header>

        <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-green-800 mb-2">💰 Financing Options Expand Opportunities</h2>
          <p className="text-green-700">
            Understanding various financing options allows investors to acquire more properties with less personal capital while optimizing cash flow and tax benefits through strategic leverage.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Investment Property Loan Types</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Primary Financing Options</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-400 bg-blue-50 p-4">
                <h4 className="text-xl font-semibold text-blue-900 mb-2">DSCR Loans (Debt Service Coverage Ratio)</h4>
                <p className="text-blue-800 mb-3">Qualification based on property cash flow, not personal income. Ideal for investors with multiple properties.</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-blue-800 mb-1">Key Features:</h5>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• No income documentation required</li>
                      <li>• 75-80% LTV typical</li>
                      <li>• 20-25% down payment</li>
                      <li>• 30-year amortization available</li>
                      <li>• Rates: 7-10% APR (2024)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-800 mb-1">Requirements:</h5>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• DSCR ratio 1.00-1.25 minimum</li>
                      <li>• 6-12 month reserves required</li>
                      <li>• 740+ credit score preferred</li>
                      <li>• Lease agreements or rent rolls</li>
                      <li>• Property appraisal and inspection</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="border-l-4 border-orange-400 bg-orange-50 p-4">
                <h4 className="text-xl font-semibold text-orange-900 mb-2">Hard Money Loans</h4>
                <p className="text-orange-800 mb-3">Short-term, asset-based financing for quick acquisitions and rehab projects. Fast funding but higher costs.</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-orange-800 mb-1">Key Features:</h5>
                    <ul className="text-orange-700 text-sm space-y-1">
                      <li>• 65-80% LTV based on ARV</li>
                      <li>• 6-24 month terms typical</li>
                      <li>• Rates: 8-15% APR + points</li>
                      <li>• 1-4 week funding timeline</li>
                      <li>• Interest-only payments common</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-orange-800 mb-1">Best For:</h5>
                    <ul className="text-orange-700 text-sm space-y-1">
                      <li>• Fix-and-flip projects</li>
                      <li>• BRRRR strategy initial purchase</li>
                      <li>• Quick competitive offers</li>
                      <li>• Bridge financing needs</li>
                      <li>• Distressed property acquisitions</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="border-l-4 border-green-400 bg-green-50 p-4">
                <h4 className="text-xl font-semibold text-green-900 mb-2">Portfolio Lenders</h4>
                <p className="text-green-800 mb-3">Banks and credit unions that keep loans in-house, offering more flexible underwriting for investors.</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-green-800 mb-1">Advantages:</h5>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• Flexible underwriting guidelines</li>
                      <li>• Relationship-based lending</li>
                      <li>• Can finance multiple properties</li>
                      <li>• Competitive rates for good clients</li>
                      <li>• Local market knowledge</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-800 mb-1">Typical Terms:</h5>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• 75-80% LTV on investment properties</li>
                      <li>• 20-25% down payment required</li>
                      <li>• 15-30 year amortization</li>
                      <li>• May require business relationship</li>
                      <li>• Often adjustable rate mortgages</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">DSCR Calculation & Requirements</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Understanding Debt Service Coverage Ratio</h3>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">DSCR Formula</h4>
                <p className="text-blue-800 text-sm mb-2">
                  <strong>DSCR = Net Operating Income (NOI) ÷ Total Debt Service</strong>
                </p>
                <div className="text-blue-700 text-sm">
                  <p><strong>Where:</strong></p>
                  <p>• NOI = Gross Rental Income - Operating Expenses</p>
                  <p>• Total Debt Service = Annual mortgage payments (P&I)</p>
                  <p>• Ratio above 1.25 is considered strong</p>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">DSCR Calculation Example</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h5 className="font-semibold text-green-800 mb-1">Property Income & Expenses:</h5>
                    <div className="space-y-1 text-green-700">
                      <div className="flex justify-between">
                        <span>Gross Rental Income:</span>
                        <span>$24,000/year</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Property Taxes:</span>
                        <span>-$3,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Insurance:</span>
                        <span>-$1,200</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Management (8%):</span>
                        <span>-$1,920</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Maintenance & Repairs:</span>
                        <span>-$2,400</span>
                      </div>
                      <div className="border-t pt-1 font-semibold">
                        <div className="flex justify-between">
                          <span>Net Operating Income:</span>
                          <span>$15,480</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-800 mb-1">Loan Details:</h5>
                    <div className="space-y-1 text-green-700">
                      <div className="flex justify-between">
                        <span>Loan Amount:</span>
                        <span>$160,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Interest Rate:</span>
                        <span>7.5%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Term:</span>
                        <span>30 years</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Monthly Payment:</span>
                        <span>$1,119</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Annual Debt Service:</span>
                        <span>$13,428</span>
                      </div>
                      <div className="border-t pt-1 font-semibold text-green-800">
                        <div className="flex justify-between">
                          <span>DSCR Ratio:</span>
                          <span>1.15 ($15,480÷$13,428)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Creative Financing Strategies</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Alternative Financing Methods</h3>
            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-2">Private Money Lending</h4>
                <p className="text-purple-800 text-sm mb-2">
                  Individual investors providing capital for real estate deals. Often more flexible than institutional lenders.
                </p>
                <ul className="text-purple-700 text-sm space-y-1">
                  <li>• Rates typically 6-12% depending on relationship and risk</li>
                  <li>• Terms negotiable (often 1-5 years)</li>
                  <li>• Can fund purchase and rehab costs</li>
                  <li>• Faster approval and funding process</li>
                  <li>• May accept lower credit scores or income documentation</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-900 mb-2">Seller Financing</h4>
                <p className="text-yellow-800 text-sm mb-2">
                  Owner acts as bank, accepting payments over time instead of full cash at closing.
                </p>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• No traditional loan qualification required</li>
                  <li>• Negotiable down payment (often 10-20%)</li>
                  <li>• Interest rates below market possible</li>
                  <li>• Faster closing process</li>
                  <li>• Best with motivated sellers (retirement, estate sales)</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">Subject To Acquisitions</h4>
                <p className="text-red-800 text-sm mb-2">
                  <strong>⚠️ Advanced Strategy:</strong> Taking ownership while leaving existing mortgage in place. Legal and ethical considerations apply.
                </p>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Requires sophisticated legal documentation</li>
                  <li>• Due-on-sale clause risk</li>
                  <li>• Best for distressed situations</li>
                  <li>• Requires insurance and liability management</li>
                  <li>• Consult real estate attorney before proceeding</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Loan Application Process</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Step-by-Step Application</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Pre-Qualification & Lender Research</h4>
                  <p className="text-gray-700 mb-2">Shop multiple lenders to compare terms and find the best fit for your investment strategy.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Research local portfolio lenders and credit unions</li>
                    <li>• Compare DSCR lenders for investor-friendly terms</li>
                    <li>• Get pre-qualification letters for serious offers</li>
                    <li>• Understand each lender's specific requirements</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Documentation Preparation</h4>
                  <p className="text-gray-700 mb-2">Organize comprehensive financial documentation for smooth underwriting process.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Personal financial statements and tax returns (2 years)</li>
                    <li>• Bank statements and asset documentation</li>
                    <li>• Existing property rent rolls and lease agreements</li>
                    <li>• Insurance declarations pages</li>
                    <li>• Purchase contract and property details</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Property Analysis & Underwriting</h4>
                  <p className="text-gray-700 mb-2">Lender evaluates property cash flow potential and borrower qualification.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Property appraisal and inspection</li>
                    <li>• Rental market analysis and income verification</li>
                    <li>• Title search and insurance</li>
                    <li>• Final underwriting and approval</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Closing & Funding</h4>
                  <p className="text-gray-700 mb-2">Final document review, wire transfers, and property transfer completion.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Final walkthrough and condition verification</li>
                    <li>• Closing disclosure review</li>
                    <li>• Wire transfer coordination for down payment</li>
                    <li>• Document signing and key transfer</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What is the minimum DSCR ratio lenders require?</h3>
              <p className="text-gray-700">
                Most DSCR lenders require a minimum ratio of 1.00-1.25, meaning the property's net operating income covers 100-125% of the mortgage payment. Higher ratios get better rates.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How much down payment is required for investment properties?</h3>
              <p className="text-gray-700">
                Conventional loans typically require 20-25% down for investment properties. Hard money and private lenders may accept 10-20% down but at higher interest rates.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I use rental income to qualify for investment property loans?</h3>
              <p className="text-gray-700">
                Yes, with DSCR loans and some portfolio lenders. They use the property's rental income rather than your personal income for qualification, making them ideal for investors.
              </p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">🎯 Key Takeaways</h3>
            <ul className="text-green-700 space-y-1">
              <li>• DSCR loans enable qualification based on property cash flow, not personal income</li>
              <li>• Hard money provides speed but at higher costs—ideal for competitive markets</li>
              <li>• Build relationships with portfolio lenders for flexible, long-term partnerships</li>
              <li>• Maintain strong credit and cash reserves for best loan terms</li>
              <li>• Consider creative financing when traditional loans don't fit the deal</li>
            </ul>
          </div>
        </div>
      </article>

      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-wrap gap-4">
          <Link href="/how-to/how-to-use-brrrr-buy-rehab-rent-refinance-repeat" className="text-pink-600 hover:text-pink-700 underline">
            BRRRR Method Guide
          </Link>
          <Link href="/how-to/how-to-analyze-a-rental-property-cap-rate-cash-on-cash" className="text-pink-600 hover:text-pink-700 underline">
            Rental Property Analysis
          </Link>
          <Link href="/how-to/how-to-manage-rentals-remotely-systems-tools" className="text-pink-600 hover:text-pink-700 underline">
            Remote Rental Management
          </Link>
          <Link href="/category/how-to" className="text-pink-600 hover:text-pink-700 underline">
            All How-To Guides
          </Link>
        </div>
      </footer>
    </div>
  );
}