import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Get a Business Loan or Line of Credit: Complete Guide',
  description: 'Qualify for business financing with strong credit, financial statements, and proper applications. Compare SBA loans, bank lines of credit, and alternative options.',
}

export default function HowToGetBusinessLoanOrLineOfCredit() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
        <a href="/category/how-to" className="hover:text-pink-600">How-To Guides</a>
        <span>/</span>
        <span className="text-gray-900">Get Business Loan or Line of Credit</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center text-white mr-3">
            💰
          </div>
          <span className="text-pink-600 font-medium">Business & Startup Finance</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          How to Get a Business Loan or Line of Credit: Complete Guide
        </h1>
        <p className="text-xl text-gray-600">
          Qualify for business financing with strong credit, financial statements, and proper applications. Compare SBA loans, bank lines of credit, and alternative options.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">
        <div className="bg-pink-50 border-l-4 border-pink-600 p-6 mb-8">
          <h3 className="text-lg font-semibold text-pink-800 mb-2">💡 Loan Approval Strategy</h3>
          <p className="text-pink-700">
            Lenders want to see strong credit (700+ personal, established business), consistent cash flow, collateral or strong financials, and a clear use of funds. Prepare comprehensive documentation and apply to multiple lenders for best terms.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold mb-4">Business Financing Fuels Growth and Stability</h3>
          <p className="mb-4">
            The right business loan or credit line can fund expansion, smooth cash flow gaps, purchase equipment, or provide working capital for growth opportunities. But qualification requirements are strict and terms vary widely between lenders and loan types.
          </p>
          <p>
            This guide covers loan types from SBA programs to bank lines of credit, qualification criteria, application processes, and strategies for getting approved with the best possible terms.
          </p>
        </div>

        <h2>Types of Business Financing</h2>

        <p>Different loan products serve different business needs and qualification requirements.</p>

        <h3>Traditional Bank Loans</h3>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 mb-6">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Loan Type</th>
                <th className="px-4 py-3 text-left font-semibold">Amount Range</th>
                <th className="px-4 py-3 text-left font-semibold">Interest Rates</th>
                <th className="px-4 py-3 text-left font-semibold">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 font-medium">Term Loan</td>
                <td className="px-4 py-3">$25,000-$500,000+</td>
                <td className="px-4 py-3">6-12%</td>
                <td className="px-4 py-3">Equipment, expansion, major purchases</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Line of Credit</td>
                <td className="px-4 py-3">$10,000-$250,000</td>
                <td className="px-4 py-3">8-15%</td>
                <td className="px-4 py-3">Working capital, seasonal cash flow</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Equipment Financing</td>
                <td className="px-4 py-3">$25,000-$1M+</td>
                <td className="px-4 py-3">7-20%</td>
                <td className="px-4 py-3">Machinery, vehicles, technology</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Real Estate Loan</td>
                <td className="px-4 py-3">$100,000-$5M+</td>
                <td className="px-4 py-3">6-10%</td>
                <td className="px-4 py-3">Purchase or refinance commercial property</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>SBA Loan Programs</h3>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">SBA 7(a) Loans</h4>
            <ul className="text-green-700 space-y-2">
              <li>• Up to $5 million</li>
              <li>• Government guarantee reduces lender risk</li>
              <li>• Lower rates than conventional loans</li>
              <li>• Flexible use of funds</li>
              <li>• Longer repayment terms (up to 25 years)</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-3">SBA 504 Loans</h4>
            <ul className="text-blue-700 space-y-2">
              <li>• Real estate and equipment only</li>
              <li>• Up to $5.5 million</li>
              <li>• Fixed rates, long terms</li>
              <li>• Low down payment (10%)</li>
              <li>• Must create/retain jobs</li>
            </ul>
          </div>
        </div>

        <h3>Alternative Financing Options</h3>

        <div className="space-y-4 my-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Online Lenders</h4>
            <p className="text-gray-600 mb-2">Faster approval, higher rates, more flexible qualification</p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Funding Circle, Kabbage, OnDeck, BlueVine</li>
              <li>• $5,000-$500,000 typical range</li>
              <li>• 10-35% interest rates</li>
              <li>• 1-5 year terms</li>
            </ul>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Merchant Cash Advances</h4>
            <p className="text-gray-600 mb-2">Cash advance against future credit card sales</p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Very fast funding (1-3 days)</li>
              <li>• High cost (20-50% factor rates)</li>
              <li>• Daily payment deductions</li>
              <li>• For businesses with consistent card sales</li>
            </ul>
          </div>
        </div>

        <h2>Qualification Requirements</h2>

        <p>Lenders evaluate creditworthiness, cash flow, collateral, and business stability.</p>

        <h3>Credit Score Requirements</h3>

        <div className="bg-red-50 p-6 rounded-lg my-8">
          <h4 className="font-semibold text-red-800 mb-4">Credit Score Benchmarks</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-red-700"><strong>SBA Loans:</strong></span>
              <span className="text-red-600">690+ personal, established business credit</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-red-700"><strong>Bank Term Loans:</strong></span>
              <span className="text-red-600">720+ personal, 2+ years business credit</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-red-700"><strong>Lines of Credit:</strong></span>
              <span className="text-red-600">680+ personal, strong cash flow</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-red-700"><strong>Online Lenders:</strong></span>
              <span className="text-red-600">580+ personal, 6+ months in business</span>
            </div>
          </div>
        </div>

        <h3>Financial Performance Standards</h3>

        <ul>
          <li><strong>Time in business:</strong> 2+ years preferred, 6 months minimum</li>
          <li><strong>Annual revenue:</strong> $100,000+ for traditional loans, $50,000+ online</li>
          <li><strong>Cash flow:</strong> 1.25x debt service coverage ratio minimum</li>
          <li><strong>Debt-to-income:</strong> Under 40% total business debt payments</li>
          <li><strong>Profitability:</strong> Positive net income, preferably growing</li>
        </ul>

        <h2>Prepare Your Loan Application</h2>

        <p>Comprehensive documentation demonstrates creditworthiness and professionalism.</p>

        <h3>Required Financial Documents</h3>

        <div className="bg-pink-50 border-l-4 border-pink-500 p-6 my-8">
          <h3 className="font-semibold mb-2">📋 Loan Application Checklist</h3>
          <ul className="mt-2 space-y-1">
            <li>☐ Business tax returns (2-3 years)</li>
            <li>☐ Personal tax returns for all owners (2 years)</li>
            <li>☐ Financial statements (P&L, balance sheet, cash flow)</li>
            <li>☐ Bank statements (12 months business, 3 months personal)</li>
            <li>☐ Business credit reports from all 3 bureaus</li>
            <li>☐ Personal credit reports for all owners</li>
            <li>☐ Business plan with financial projections</li>
            <li>☐ Use of funds statement (detailed breakdown)</li>
            <li>☐ Collateral documentation (if applicable)</li>
            <li>☐ Lease agreements, contracts, permits</li>
          </ul>
        </div>

        <h3>Business Plan Elements</h3>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Executive Summary</h4>
            <ul className="text-green-700 space-y-2">
              <li>• Business overview and history</li>
              <li>• Products/services offered</li>
              <li>• Target market and competitive advantage</li>
              <li>• Management team qualifications</li>
              <li>• Loan request summary</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-3">Financial Projections</h4>
            <ul className="text-blue-700 space-y-2">
              <li>• 3-year revenue and expense forecasts</li>
              <li>• Cash flow projections with loan payments</li>
              <li>• Break-even analysis</li>
              <li>• Sensitivity analysis (best/worst case)</li>
              <li>• Return on investment calculations</li>
            </ul>
          </div>
        </div>

        <h2>Application Strategy and Process</h2>

        <p>Strategic approach improves approval odds and helps secure better terms.</p>

        <h3>Lender Research and Selection</h3>

        <div className="space-y-4 my-8">
          <div className="border-l-4 border-pink-600 pl-6">
            <h4 className="font-semibold text-pink-800 mb-2">Community Banks</h4>
            <p className="text-gray-700">Local decision-making, relationship-based, SBA preferred lenders. Good for businesses with community ties.</p>
          </div>
          
          <div className="border-l-4 border-blue-600 pl-6">
            <h4 className="font-semibold text-blue-800 mb-2">Regional Banks</h4>
            <p className="text-gray-700">More resources, specialized programs, competitive rates. Balance of local service and larger institution capabilities.</p>
          </div>
          
          <div className="border-l-4 border-green-600 pl-6">
            <h4 className="font-semibold text-green-800 mb-2">Credit Unions</h4>
            <p className="text-gray-700">Member-owned, lower rates, flexible terms. Must qualify for membership, often easier approval process.</p>
          </div>
        </div>

        <h3>Application Timeline and Process</h3>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
          <h4 className="font-semibold text-yellow-800 mb-3">⏱️ Expected Timelines</h4>
          <div className="space-y-2 text-yellow-700">
            <p><strong>SBA 7(a) loans:</strong> 60-90 days from application to funding</p>
            <p><strong>Bank term loans:</strong> 30-60 days with complete documentation</p>
            <p><strong>Lines of credit:</strong> 2-4 weeks for established businesses</p>
            <p><strong>Online lenders:</strong> 1-7 days for approval and funding</p>
            <p><strong>Equipment financing:</strong> 1-3 weeks depending on equipment appraisal</p>
          </div>
        </div>

        <h3>Negotiating Terms</h3>

        <ul>
          <li><strong>Interest rates:</strong> Shop multiple lenders, use competing offers for leverage</li>
          <li><strong>Fees:</strong> Negotiate origination fees, prepayment penalties, and closing costs</li>
          <li><strong>Collateral requirements:</strong> Minimize personal guarantees when possible</li>
          <li><strong>Covenants:</strong> Financial reporting requirements, debt-to-equity ratios</li>
          <li><strong>Repayment terms:</strong> Longer terms lower payments but increase total cost</li>
        </ul>

        <h2>Managing Business Debt Responsibly</h2>

        <p>Proper debt management maintains creditworthiness and supports future financing needs.</p>

        <h3>Debt Management Best Practices</h3>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Payment Management</h4>
            <ul className="text-green-700 space-y-2">
              <li>• Set up automatic payments to avoid late fees</li>
              <li>• Pay extra principal when cash flow allows</li>
              <li>• Monitor debt service coverage ratio monthly</li>
              <li>• Communicate with lenders if problems arise</li>
              <li>• Keep detailed payment records</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-3">Credit Monitoring</h4>
            <ul className="text-blue-700 space-y-2">
              <li>• Review business credit reports quarterly</li>
              <li>• Maintain low utilization on credit lines</li>
              <li>• Request credit limit increases as business grows</li>
              <li>• Dispute any reporting errors immediately</li>
              <li>• Build relationships for future financing needs</li>
            </ul>
          </div>
        </div>

        <h2>Related Guides</h2>
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <Link href="/how-to/how-to-build-business-credit-from-scratch" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Build Business Credit from Scratch</h3>
            <p className="text-pink-600 text-sm mt-2">Strong credit improves loan qualification</p>
          </Link>
          <Link href="/how-to/how-to-prepare-financial-statements-for-investors" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Prepare Financial Statements</h3>
            <p className="text-pink-600 text-sm mt-2">Quality financials support loan applications</p>
          </Link>
          <Link href="/how-to/how-to-write-a-simple-business-budget" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Write Simple Business Budget</h3>
            <p className="text-pink-600 text-sm mt-2">Budget planning supports loan projections</p>
          </Link>
          <Link href="/how-to/how-to-manage-cash-flow-for-seasonal-businesses" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Manage Cash Flow for Seasonal Business</h3>
            <p className="text-pink-600 text-sm mt-2">Lines of credit help smooth seasonal gaps</p>
          </Link>
        </div>
      </article>

      <section className="mt-12 border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">What credit score do I need for a business loan?</h3>
            <p className="text-gray-600">
              Most traditional lenders prefer 700+ personal credit and established business credit. SBA loans may accept 690+, while online lenders often approve 580+ with strong cash flow and business performance.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I get a business loan for a new business?</h3>
            <p className="text-gray-600">
              It is challenging but possible. Focus on SBA microloans, online lenders, or equipment financing. Strong personal credit, industry experience, and substantial down payment improve approval odds.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Should I get a term loan or line of credit?</h3>
            <p className="text-gray-600">
              Term loans for specific purchases or expansion with predictable costs. Lines of credit for working capital, seasonal fluctuations, or opportunities requiring flexible access to funds.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">What happens if I cannot make loan payments?</h3>
            <p className="text-gray-600">
              Contact your lender immediately to discuss options like payment deferrals, loan modifications, or workout plans. Ignoring the problem damages credit and may trigger default proceedings.
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
                  "name": "What credit score do I need for a business loan?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most lenders prefer 700+ personal credit and established business credit."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "Can I get a business loan for a new business?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Challenging but possible with SBA microloans, online lenders, or equipment financing."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Should I get a term loan or line of credit?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "Term loans for specific purchases, lines of credit for flexible working capital."
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