import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Prepare Financial Statements for Investors',
  description: 'Create professional financial statements with accurate P&L, balance sheet, cash flow, and projections. Present financial data that investors trust and understand.',
}

export default function HowToPrepareFinancialStatementsForInvestors() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
        <a href="/category/how-to" className="hover:text-pink-600">How-To Guides</a>
        <span>/</span>
        <span className="text-gray-900">Prepare Financial Statements for Investors</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center text-white mr-3">
            📈
          </div>
          <span className="text-pink-600 font-medium">Business & Startup Finance</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          How to Prepare Financial Statements for Investors
        </h1>
        <p className="text-xl text-gray-600">
          Create professional financial statements with accurate P&L, balance sheet, cash flow, and projections. Present financial data that investors trust and understand.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">
        <div className="bg-pink-50 border-l-4 border-pink-600 p-6 mb-8">
          <h3 className="text-lg font-semibold text-pink-800 mb-2">💼 Investor-Ready Financial Package</h3>
          <p className="text-pink-700">
            Prepare audited or reviewed statements when possible, include 3-5 years of historical data plus 3-year projections, present monthly detail for recent periods, and clearly explain assumptions and methodologies. Professional presentation builds credibility.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold mb-4">Financial Statements Make or Break Investment Deals</h3>
          <p className="mb-4">
            Investors make decisions based on financial data quality, accuracy, and presentation. Poor financial statements signal management problems, lack of controls, and higher investment risk. Professional statements demonstrate credibility, planning capability, and business maturity.
          </p>
          <p>
            This guide walks you through preparing investor-grade financial statements, required components, presentation standards, and common pitfalls that kill investment opportunities.
          </p>
        </div>

        <h2>Core Financial Statement Components</h2>

        <p>Investors expect comprehensive financial statements that tell your complete business story.</p>

        <h3>Income Statement (Profit & Loss)</h3>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 mb-6">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Line Item</th>
                <th className="px-4 py-3 text-left font-semibold">2022</th>
                <th className="px-4 py-3 text-left font-semibold">2023</th>
                <th className="px-4 py-3 text-left font-semibold">2024 YTD</th>
                <th className="px-4 py-3 text-left font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-blue-50">
                <td className="px-4 py-3 font-semibold">Revenue</td>
                <td className="px-4 py-3">$1,250,000</td>
                <td className="px-4 py-3">$1,875,000</td>
                <td className="px-4 py-3">$1,500,000</td>
                <td className="px-4 py-3">50% YoY growth</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Cost of Goods Sold</td>
                <td className="px-4 py-3">($375,000)</td>
                <td className="px-4 py-3">($562,500)</td>
                <td className="px-4 py-3">($450,000)</td>
                <td className="px-4 py-3">30% of revenue</td>
              </tr>
              <tr className="bg-green-50">
                <td className="px-4 py-3 font-semibold">Gross Profit</td>
                <td className="px-4 py-3">$875,000</td>
                <td className="px-4 py-3">$1,312,500</td>
                <td className="px-4 py-3">$1,050,000</td>
                <td className="px-4 py-3">70% gross margin</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Sales & Marketing</td>
                <td className="px-4 py-3">($187,500)</td>
                <td className="px-4 py-3">($281,250)</td>
                <td className="px-4 py-3">($225,000)</td>
                <td className="px-4 py-3">15% of revenue</td>
              </tr>
              <tr>
                <td className="px-4 py-3">General & Administrative</td>
                <td className="px-4 py-3">($312,500)</td>
                <td className="px-4 py-3">($375,000)</td>
                <td className="px-4 py-3">($300,000)</td>
                <td className="px-4 py-3">Scaling efficiency</td>
              </tr>
              <tr className="bg-yellow-50">
                <td className="px-4 py-3 font-semibold">EBITDA</td>
                <td className="px-4 py-3">$375,000</td>
                <td className="px-4 py-3">$656,250</td>
                <td className="px-4 py-3">$525,000</td>
                <td className="px-4 py-3">35% EBITDA margin</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Balance Sheet Essentials</h3>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Assets</h4>
            <ul className="text-green-700 space-y-2">
              <li>• Cash and cash equivalents</li>
              <li>• Accounts receivable (with aging)</li>
              <li>• Inventory (if applicable)</li>
              <li>• Property, plant & equipment</li>
              <li>• Intangible assets (IP, goodwill)</li>
              <li>• Other current and long-term assets</li>
            </ul>
          </div>
          
          <div className="bg-red-50 p-6 rounded-lg">
            <h4 className="font-semibold text-red-800 mb-3">Liabilities & Equity</h4>
            <ul className="text-red-700 space-y-2">
              <li>• Accounts payable</li>
              <li>• Accrued expenses</li>
              <li>• Short-term and long-term debt</li>
              <li>• Deferred revenue</li>
              <li>• Stockholder equity</li>
              <li>• Retained earnings</li>
            </ul>
          </div>
        </div>

        <h3>Cash Flow Statement</h3>

        <div className="space-y-4 my-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Operating Cash Flow</h4>
            <p className="text-gray-600 mb-2">Net income adjusted for non-cash items and working capital changes</p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Shows cash generated from core business operations</li>
              <li>• Key metric for sustainable profitability</li>
              <li>• Should trend positively over time</li>
              <li>• Quality of earnings indicator</li>
            </ul>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Investing Cash Flow</h4>
            <p className="text-gray-600 mb-2">Capital expenditures, acquisitions, and asset dispositions</p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Reflects investment in business growth</li>
              <li>• Equipment, technology, and facility investments</li>
              <li>• Should align with business strategy</li>
              <li>• Negative flow often indicates growth phase</li>
            </ul>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 bg-pink-50">
            <h4 className="font-semibold mb-2">Financing Cash Flow</h4>
            <p className="text-gray-600 mb-2">Debt borrowing/repayment, equity transactions, dividend payments</p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Shows how business is funded</li>
              <li>• Debt capacity and equity dilution</li>
              <li>• Investor returns and reinvestment patterns</li>
              <li>• Capital structure decisions</li>
            </ul>
          </div>
        </div>

        <h2>Financial Projections and Forecasts</h2>

        <p>Investors need realistic projections that demonstrate growth potential and capital requirements.</p>

        <h3>Three-Year Financial Projections</h3>

        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h4 className="font-semibold text-blue-800 mb-4">Projection Components</h4>
          <div className="space-y-3">
            <div className="bg-white p-4 rounded border">
              <p className="font-semibold mb-2"><strong>Revenue Model:</strong></p>
              <p className="text-sm text-gray-600">Unit economics, customer acquisition, pricing strategy, market penetration assumptions</p>
            </div>
            <div className="bg-white p-4 rounded border">
              <p className="font-semibold mb-2"><strong>Expense Scaling:</strong></p>
              <p className="text-sm text-gray-600">Cost structure evolution, operational leverage, investment timing, efficiency gains</p>
            </div>
            <div className="bg-white p-4 rounded border">
              <p className="font-semibold mb-2"><strong>Capital Requirements:</strong></p>
              <p className="text-sm text-gray-600">Equipment needs, working capital, facility expansion, technology investments</p>
            </div>
          </div>
        </div>

        <h3>Scenario Analysis</h3>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 mb-6">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Scenario</th>
                <th className="px-4 py-3 text-left font-semibold">Revenue Growth</th>
                <th className="px-4 py-3 text-left font-semibold">Year 3 Revenue</th>
                <th className="px-4 py-3 text-left font-semibold">EBITDA Margin</th>
                <th className="px-4 py-3 text-left font-semibold">Cash Need</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 font-medium text-red-600">Conservative</td>
                <td className="px-4 py-3">25% annually</td>
                <td className="px-4 py-3">$3.9M</td>
                <td className="px-4 py-3">25%</td>
                <td className="px-4 py-3">$500K</td>
              </tr>
              <tr className="bg-green-50">
                <td className="px-4 py-3 font-medium text-green-600">Base Case</td>
                <td className="px-4 py-3">40% annually</td>
                <td className="px-4 py-3">$5.5M</td>
                <td className="px-4 py-3">30%</td>
                <td className="px-4 py-3">$1.2M</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-blue-600">Optimistic</td>
                <td className="px-4 py-3">60% annually</td>
                <td className="px-4 py-3">$8.2M</td>
                <td className="px-4 py-3">35%</td>
                <td className="px-4 py-3">$2.5M</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Key Financial Metrics and KPIs</h2>

        <p>Highlight the metrics most relevant to your business model and industry.</p>

        <h3>Universal Business Metrics</h3>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Profitability Metrics</h4>
            <ul className="text-green-700 space-y-2">
              <li>• Gross margin (70%)</li>
              <li>• EBITDA margin (35%)</li>
              <li>• Net profit margin (25%)</li>
              <li>• Return on equity (ROE)</li>
              <li>• Return on assets (ROA)</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-3">Growth & Efficiency</h4>
            <ul className="text-blue-700 space-y-2">
              <li>• Revenue growth rate (50% YoY)</li>
              <li>• Customer acquisition cost (CAC)</li>
              <li>• Customer lifetime value (LTV)</li>
              <li>• LTV/CAC ratio (&gt;3x)</li>
              <li>• Revenue per employee</li>
            </ul>
          </div>
        </div>

        <h3>Industry-Specific Metrics</h3>

        <div className="space-y-4 my-8">
          <div className="border-l-4 border-pink-600 pl-6">
            <h4 className="font-semibold text-pink-800 mb-2">SaaS Businesses</h4>
            <p className="text-gray-700">Monthly recurring revenue (MRR), annual recurring revenue (ARR), churn rate, net revenue retention, months to payback CAC</p>
          </div>
          
          <div className="border-l-4 border-blue-600 pl-6">
            <h4 className="font-semibold text-blue-800 mb-2">E-commerce</h4>
            <p className="text-gray-700">Average order value (AOV), conversion rate, repeat purchase rate, inventory turnover, gross merchandise value (GMV)</p>
          </div>
          
          <div className="border-l-4 border-green-600 pl-6">
            <h4 className="font-semibold text-green-800 mb-2">Service Businesses</h4>
            <p className="text-gray-700">Utilization rate, billing realization, project margin, client retention rate, revenue per consultant</p>
          </div>
        </div>

        <h2>Professional Presentation Standards</h2>

        <p>Format and present financial statements that meet investor expectations.</p>

        <h3>Statement Preparation Standards</h3>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
          <h4 className="font-semibold text-yellow-800 mb-3">⚡ Professional Standards</h4>
          <ul className="text-yellow-700 space-y-2">
            <li>• <strong>GAAP compliance:</strong> Use Generally Accepted Accounting Principles</li>
            <li>• <strong>Consistent formatting:</strong> Same periods, units, and presentation style</li>
            <li>• <strong>Monthly detail:</strong> Show recent 12-24 months monthly data</li>
            <li>• <strong>Comparative periods:</strong> 3-5 years of historical data when available</li>
            <li>• <strong>Notes and assumptions:</strong> Explain methodologies and key assumptions</li>
            <li>• <strong>Supporting schedules:</strong> Detailed breakouts of major line items</li>
          </ul>
        </div>

        <h3>Common Presentation Errors</h3>

        <ul>
          <li><strong>Inconsistent periods:</strong> Mixing fiscal and calendar years, irregular periods</li>
          <li><strong>Rounded numbers:</strong> Overly rounded figures suggest imprecise accounting</li>
          <li><strong>Missing context:</strong> No explanation of unusual items or one-time events</li>
          <li><strong>Poor formatting:</strong> Unprofessional appearance undermines credibility</li>
          <li><strong>Unrealistic projections:</strong> Hockey stick growth without supporting logic</li>
        </ul>

        <h2>Supporting Documentation</h2>

        <p>Provide additional documentation that supports and validates your financial statements.</p>

        <h3>Required Supporting Documents</h3>

        <div className="bg-pink-50 border-l-4 border-pink-500 p-6 my-8">
          <h3 className="font-semibold mb-2">📋 Financial Due Diligence Package</h3>
          <ul className="mt-2 space-y-1">
            <li>☐ Audited or reviewed financial statements (if available)</li>
            <li>☐ Monthly management reports (trailing 24 months)</li>
            <li>☐ Tax returns for business and principals (3 years)</li>
            <li>☐ Aged accounts receivable and payable reports</li>
            <li>☐ Bank statements and reconciliations</li>
            <li>☐ Customer concentration analysis</li>
            <li>☐ Revenue recognition policies and procedures</li>
            <li>☐ Management letter from accountants (if applicable)</li>
            <li>☐ Board resolutions and meeting minutes</li>
            <li>☐ Insurance policies and coverage summaries</li>
          </ul>
        </div>

        <h2>Related Guides</h2>
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <Link href="/how-to/how-to-write-a-simple-business-budget" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Write Simple Business Budget</h3>
            <p className="text-pink-600 text-sm mt-2">Budgeting supports financial projections</p>
          </Link>
          <Link href="/how-to/how-to-track-business-expenses-for-taxes" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Track Business Expenses</h3>
            <p className="text-pink-600 text-sm mt-2">Good records create accurate statements</p>
          </Link>
          <Link href="/how-to/how-to-separate-business-personal-finances" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Separate Business Personal Finances</h3>
            <p className="text-pink-600 text-sm mt-2">Clean separation enables accurate reporting</p>
          </Link>
          <Link href="/how-to/how-to-get-a-business-loan-or-line-of-credit" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Get Business Loan</h3>
            <p className="text-pink-600 text-sm mt-2">Quality statements support all financing</p>
          </Link>
        </div>
      </article>

      <section className="mt-12 border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Do I need audited financial statements for investors?</h3>
            <p className="text-gray-600">
              Not always required but strongly preferred for larger investments. Reviewed statements by CPAs are often acceptable for smaller deals. Quality and credibility matter more than audit status.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">How far back should historical financials go?</h3>
            <p className="text-gray-600">
              Provide 3-5 years if available, minimum 2-3 years for established businesses. For startups, show from inception with detailed monthly data for the most recent 12-24 months.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Should I hire a CPA to prepare investor statements?</h3>
            <p className="text-gray-600">
              Strongly recommended for significant fundraising. CPAs ensure GAAP compliance, professional presentation, and provide credibility that DIY statements often lack. Cost is worth the credibility gained.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">How detailed should financial projections be?</h3>
            <p className="text-gray-600">
              Monthly detail for first year, quarterly for years 2-3. Include unit economics, key assumptions, scenario analysis, and sensitivity testing. Back up projections with market research and operational plans.
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
                  "name": "Do I need audited financial statements for investors?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Not always required but strongly preferred for larger investments."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "How far back should historical financials go?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Provide 3-5 years if available, minimum 2-3 years for established businesses."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Should I hire a CPA to prepare investor statements?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "Strongly recommended for significant fundraising to ensure compliance and credibility."
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