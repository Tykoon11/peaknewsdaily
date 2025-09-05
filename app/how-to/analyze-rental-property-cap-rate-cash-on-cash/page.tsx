import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Rental Property Analysis: Cap Rate & Cash-on-Cash Return Calculator',
  description: 'Learn cap rate vs cash-on-cash return, see formulas, and run a real example to analyze any rental in minutes.',
  keywords: 'cap rate, cash on cash return, rental analysis, NOI, DSCR, rental property calculator, real estate investing',
};

export default function AnalyzeRentalPropertyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between cap rate and cash-on-cash return?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cap rate measures property performance ignoring financing (NOI ÷ Purchase Price). Cash-on-cash measures investor return with financing (Annual Cash Flow ÷ Total Cash Invested). Use both together for complete analysis."
        }
      },
      {
        "@type": "Question", 
        "name": "Is the 1% rule still valid for rental properties?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The 1% rule (monthly rent = 1% of purchase price) should only be used as an initial screen. Always run a full pro-forma analysis with actual numbers to make investment decisions."
        }
      },
      {
        "@type": "Question",
        "name": "What is a good cap rate for rental property?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Cap rates vary by market and property type. Generally, 4-6% in expensive markets, 8-12% in lower-cost areas. Compare to local market averages and consider the risk-return profile."
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
          <span className="text-pink-600">Rental Property Analysis</span>
        </div>
      </nav>

      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How to Analyze a Rental Property: Cap Rate & Cash-on-Cash Calculator
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Master rental property analysis with cap rate and cash-on-cash return formulas. Learn to evaluate any investment property in minutes with real examples.
          </p>
        </header>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">📊 TL;DR Quick Reference</h2>
          <p className="text-blue-700 mb-2">
            <strong>Cap rate = NOI ÷ Purchase Price.</strong> <strong>Cash-on-cash = Annual Pre-Tax Cash Flow ÷ Total Cash Invested.</strong>
          </p>
          <p className="text-blue-700">
            Use both: cap rate for asset yield; cash-on-cash for investor yield.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Data Collection Checklist</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Numbers to Gather</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Property Costs</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>✓ Asking price / all-in cost (price + closing + initial rehab)</li>
                  <li>✓ Closing costs (2-3% of purchase price)</li>
                  <li>✓ Initial rehab/repair costs</li>
                  <li>✓ Inspection fees and due diligence costs</li>
                </ul>
                
                <h4 className="font-semibold text-gray-900 mb-2 mt-4">Financing Details</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>✓ Debt terms (rate, amortization, points)</li>
                  <li>✓ Down payment amount</li>
                  <li>✓ Loan fees and origination costs</li>
                  <li>✓ Private lending terms if applicable</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Income Sources</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>✓ Market rent (verified comps)</li>
                  <li>✓ Conservative rent estimate</li>
                  <li>✓ Other income (parking, laundry, storage)</li>
                  <li>✓ Vacancy percentage (use 5% baseline minimum)</li>
                </ul>
                
                <h4 className="font-semibold text-gray-900 mb-2 mt-4">Operating Expenses</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>✓ Property taxes and insurance</li>
                  <li>✓ Maintenance (8–10% of rent typically)</li>
                  <li>✓ Management (8–10% of rent if hired)</li>
                  <li>✓ Utilities (if landlord-paid)</li>
                  <li>✓ HOA/condo fees</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Formulas & Calculations</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Step-by-Step Calculation Process</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">1. Gross Scheduled Rent (GSR)</h4>
                <p className="text-gray-700 text-sm mb-1">Formula: Monthly Rent × 12</p>
                <p className="text-gray-600 text-sm">This is your maximum potential rental income</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">2. Effective Gross Income (EGI)</h4>
                <p className="text-gray-700 text-sm mb-1">Formula: (GSR + Other Income) × (1 − Vacancy %)</p>
                <p className="text-gray-600 text-sm">Accounts for vacancy and additional income sources</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">3. Operating Expenses (OpEx)</h4>
                <p className="text-gray-700 text-sm mb-1">Sum of: taxes, insurance, management, maintenance, utilities, HOA</p>
                <p className="text-gray-600 text-sm">Excludes debt service (principal and interest)</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">4. Net Operating Income (NOI)</h4>
                <p className="text-gray-700 text-sm mb-1">Formula: EGI − OpEx</p>
                <p className="text-gray-600 text-sm">The property's income before debt service</p>
              </div>
              
              <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
                <h4 className="font-semibold text-pink-900 mb-2">5. Cap Rate</h4>
                <p className="text-pink-800 text-sm mb-1 font-semibold">Formula: NOI ÷ All-in Price</p>
                <p className="text-pink-700 text-sm">Measures property return without financing</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">6. Annual Cash Flow (Pre-tax)</h4>
                <p className="text-gray-700 text-sm mb-1">Formula: NOI − Debt Service (P&I)</p>
                <p className="text-gray-600 text-sm">Money left after all expenses and loan payments</p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-900 mb-2">7. Cash-on-Cash Return</h4>
                <p className="text-green-800 text-sm mb-1 font-semibold">Formula: Annual Cash Flow ÷ Total Cash Invested</p>
                <p className="text-green-700 text-sm">Return on your actual cash investment</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Worked Example (Conservative Analysis)</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Sample Property Analysis</h3>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-blue-900 mb-2">Property Details</h4>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• Purchase Price: $300,000</li>
                <li>• Closing/Rehab: $15,000 → All-in Cost: $315,000</li>
                <li>• Monthly Rent: $2,400</li>
                <li>• Other Income: $50/month (laundry)</li>
                <li>• Vacancy Rate: 5%</li>
              </ul>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Operating Expenses (Annual)</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Property Taxes: $3,000</li>
                  <li>• Insurance: $1,400</li>
                  <li>• Maintenance (10%): $2,880</li>
                  <li>• Management (8%): $2,304</li>
                  <li>• Water/Sewer: $900</li>
                  <li><strong>Total OpEx: $10,484</strong></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Step-by-Step Calculation</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• GSR: $2,400 × 12 = $28,800</li>
                  <li>• Other: $50 × 12 = $600</li>
                  <li>• EGI: ($28,800 + $600) × 0.95 = $27,957</li>
                  <li>• NOI: $27,957 − $10,484 = $17,473</li>
                  <li><strong className="text-pink-600">Cap Rate: $17,473 ÷ $315,000 = 5.55%</strong></li>
                </ul>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg mt-4">
              <h4 className="font-semibold text-yellow-900 mb-2">Financing & Cash-on-Cash</h4>
              <ul className="text-yellow-800 text-sm space-y-1">
                <li>• Loan: 20% down ($60,000), 30-year at 6.5%</li>
                <li>• Monthly P&I: ~$1,517 → Annual: $18,204</li>
                <li>• Cash Flow: $17,473 − $18,204 = <span className="text-red-600 font-semibold">−$731/year</span></li>
                <li>• Total Cash Invested: $60,000 + $15,000 = $75,000</li>
                <li><strong className="text-red-600">Cash-on-Cash: −$731 ÷ $75,000 = −1.02%</strong></li>
              </ul>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg mt-4">
              <h4 className="font-semibold text-orange-800 mb-2">💡 Analysis Insight</h4>
              <p className="text-orange-700 text-sm">
                Decent cap rate (5.55%) but negative cash-on-cash return (-1.02%). This suggests the price is too high for current financing terms, or rent/expenses need improvement.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Red Flags & Pro Tips</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-800 mb-3">🚩 Red Flags to Avoid</h3>
              <ul className="text-red-700 space-y-2 text-sm">
                <li>• <strong>Tax reassessment jumps:</strong> Verify with county/municipality</li>
                <li>• <strong>Insurance estimates:</strong> Never guess—get actual quotes</li>
                <li>• <strong>Zero vacancy assumptions:</strong> Always use minimum 5%</li>
                <li>• <strong>Seller's rent claims:</strong> Verify with actual lease and comps</li>
                <li>• <strong>Hidden fees:</strong> HOA special assessments, utilities</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-3">💡 Pro Tips</h3>
              <ul className="text-green-700 space-y-2 text-sm">
                <li>• <strong>Stress-test scenarios:</strong> +1% interest, +10% expenses, −5% rent</li>
                <li>• <strong>Market research:</strong> Drive comps, talk to local agents</li>
                <li>• <strong>Conservative estimates:</strong> Better to be surprised positively</li>
                <li>• <strong>Multiple offers:</strong> Analyze several properties simultaneously</li>
                <li>• <strong>Exit strategy:</strong> Know your hold period and sale assumptions</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">When to Use Each Metric</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-pink-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-pink-900 mb-3">Cap Rate Best For:</h3>
                <ul className="text-pink-800 space-y-1 text-sm">
                  <li>• Comparing properties across markets</li>
                  <li>• Evaluating asset performance</li>
                  <li>• All-cash purchase decisions</li>
                  <li>• Market benchmarking</li>
                  <li>• Portfolio-level analysis</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3">Cash-on-Cash Best For:</h3>
                <ul className="text-green-800 space-y-1 text-sm">
                  <li>• Leveraged investment decisions</li>
                  <li>• Personal ROI analysis</li>
                  <li>• Comparing financing options</li>
                  <li>• Cash flow planning</li>
                  <li>• Individual investor returns</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Quick Screening Tools</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Investment Property Screeners</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">1% Rule (Initial Screen Only)</h4>
                  <p className="text-gray-700 text-sm">Monthly rent ≥ 1% of purchase price. Use to narrow down prospects, but always run full analysis.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">50% Rule (Quick OpEx Estimate)</h4>
                  <p className="text-gray-700 text-sm">Operating expenses ≈ 50% of gross rent. Useful for quick calculations, but verify with actual numbers.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">2% Rule (Exceptional Deals)</h4>
                  <p className="text-gray-700 text-sm">Monthly rent ≥ 2% of purchase price. Rare in most markets but indicates strong cash flow potential.</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What is the difference between cap rate and cash-on-cash return?</h3>
              <p className="text-gray-700">
                Cap rate measures property performance ignoring financing (NOI ÷ Purchase Price). Cash-on-cash measures investor return with financing (Annual Cash Flow ÷ Total Cash Invested). Use both together for complete analysis.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Is the 1% rule still valid for rental properties?</h3>
              <p className="text-gray-700">
                The 1% rule (monthly rent = 1% of purchase price) should only be used as an initial screen. Always run a full pro-forma analysis with actual numbers to make investment decisions.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What is a good cap rate for rental property?</h3>
              <p className="text-gray-700">
                Cap rates vary by market and property type. Generally, 4-6% in expensive markets, 8-12% in lower-cost areas. Compare to local market averages and consider the risk-return profile.
              </p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">🎯 Key Takeaways</h3>
            <ul className="text-green-700 space-y-1">
              <li>• Use both cap rate and cash-on-cash for complete analysis</li>
              <li>• Always verify rent comps and get actual expense quotes</li>
              <li>• Never assume 0% vacancy—use 5% minimum</li>
              <li>• Stress-test with higher expenses and lower rents</li>
              <li>• The 1% rule is just a screen—run full pro-forma analysis</li>
            </ul>
          </div>
        </div>
      </article>

      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-wrap gap-4">
          <Link href="/how-to/finance-investment-properties-dscr-hard-money" className="text-pink-600 hover:text-pink-700 underline">
            Investment Property Financing
          </Link>
          <Link href="/how-to/brrrr-method-guide" className="text-pink-600 hover:text-pink-700 underline">
            BRRRR Strategy Guide
          </Link>
          <Link href="/how-to/estimate-rehab-renovation-costs" className="text-pink-600 hover:text-pink-700 underline">
            Rehab Cost Estimation
          </Link>
          <Link href="/category/how-to" className="text-pink-600 hover:text-pink-700 underline">
            All How-To Guides
          </Link>
        </div>
      </footer>
    </div>
  );
}