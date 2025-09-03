import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Get Pre-Approved for a Mortgage (Documents & Timeline)',
  description: 'See the exact documents, credit & income checks, and timeline lenders use to issue a reliable mortgage pre-approval—plus how to avoid common pitfalls.',
}

export default function MortgagePreApprovalPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Mortgage Pre-Approval</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white text-xl">
            🏠
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Mortgages &amp; Real Estate</p>
            <h1 className="text-4xl font-bold text-gray-900">How to get pre-approved for a mortgage</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          See the exact documents, credit &amp; income checks, and timeline lenders use to issue a reliable mortgage pre-approval—plus how to avoid common pitfalls.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Quick Answer</h2>
          <p className="text-blue-700">
            To get pre-approved, gather ID, recent pay stubs, T4/W-2, tax returns (2 years), bank statements (60–90 days), proof of down payment, and debt statements. Lenders check your credit, DTI/GDS-TDS, employment, and savings. A strong pre-approval letter states your max purchase price, loan type, and rate/term, usually valid 60–120 days.
          </p>
        </div>

        <h2>Prequalification vs. pre-approval (what sellers care about)</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Feature</th>
                <th className="border border-gray-300 px-4 py-2">Prequalification</th>
                <th className="border border-gray-300 px-4 py-2">Pre-Approval</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Credit Check</td>
                <td className="border border-gray-300 px-4 py-2">Soft pull or none</td>
                <td className="border border-gray-300 px-4 py-2">Hard credit pull</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-medium">Documentation</td>
                <td className="border border-gray-300 px-4 py-2">Self-reported info</td>
                <td className="border border-gray-300 px-4 py-2">Full document review</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Seller Confidence</td>
                <td className="border border-gray-300 px-4 py-2">Low (estimate only)</td>
                <td className="border border-gray-300 px-4 py-2">High (conditional commitment)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-medium">Time Required</td>
                <td className="border border-gray-300 px-4 py-2">5-10 minutes</td>
                <td className="border border-gray-300 px-4 py-2">1-3 business days</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Checklist: documents you'll need</h2>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Income &amp; Employment</h3>
          <ul className="text-green-700 space-y-1">
            <li>Recent pay stubs (30-60 days)</li>
            <li>W-2/T4 forms (2 years)</li>
            <li>Tax returns with all schedules (2 years)</li>
            <li>Employment verification letter</li>
            <li>If self-employed: business tax returns, P&L statements, bank statements</li>
          </ul>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Assets &amp; Down Payment</h3>
          <ul className="text-blue-700 space-y-1">
            <li>Bank statements (60-90 days, all accounts)</li>
            <li>Investment account statements</li>
            <li>Retirement account statements (401k, RRSP)</li>
            <li>Gift letters (if down payment includes gifts)</li>
            <li>Proof of sale (if selling current home)</li>
          </ul>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-purple-800 mb-4">Debts &amp; Credit</h3>
          <ul className="text-purple-700 space-y-1">
            <li>Credit card statements</li>
            <li>Auto loan statements</li>
            <li>Student loan statements</li>
            <li>Other loan documentation</li>
            <li>Court documents (alimony, child support)</li>
          </ul>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Personal Information</h3>
          <ul className="text-gray-700 space-y-1">
            <li>Government-issued photo ID</li>
            <li>Social Security card / Social Insurance Number</li>
            <li>Divorce decree (if applicable)</li>
            <li>Green card or work visa (if applicable)</li>
          </ul>
        </div>

        <h2>Credit &amp; income requirements (DTI / GDS-TDS)</h2>
        <p><strong>Credit Score Minimums:</strong></p>
        <ul>
          <li>Conventional loans: 620+ (US), varies by lender (Canada)</li>
          <li>FHA/Insured loans: 580+ (US), varies (Canada)</li>
          <li>Higher scores = better rates and terms</li>
        </ul>

        <p><strong>Debt-to-Income Ratios:</strong></p>
        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-2">US (DTI)</h4>
            <ul className="text-blue-700 space-y-1 text-sm">
              <li>Front-end: ≤28% (housing costs only)</li>
              <li>Back-end: ≤36% (all monthly debts)</li>
              <li>Some programs allow up to 43-50%</li>
            </ul>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-800 mb-2">Canada (GDS/TDS)</h4>
            <ul className="text-green-700 space-y-1 text-sm">
              <li>GDS: ≤32% (housing costs)</li>
              <li>TDS: ≤40% (all debts)</li>
              <li>Must qualify at stress test rate</li>
            </ul>
          </div>
        </div>

        <h2>How long it lasts; when to refresh</h2>
        <p>Pre-approval letters typically last:</p>
        <ul>
          <li><strong>60-90 days</strong> – Most common validity period</li>
          <li><strong>Up to 120 days</strong> – Some lenders offer longer terms</li>
          <li><strong>Rate locks separate</strong> – Usually 30-60 days when you find a home</li>
        </ul>

        <p>Refresh your pre-approval if:</p>
        <ul>
          <li>It expires before you find a home</li>
          <li>Your financial situation changes significantly</li>
          <li>Interest rates change substantially</li>
          <li>You want to increase your home price range</li>
        </ul>

        <h2>Rate holds and locking later</h2>
        <p><strong>Pre-approval vs. Rate Lock:</strong></p>
        <ul>
          <li>Pre-approval = approval to borrow up to X amount</li>
          <li>Rate lock = securing specific rate for specific property</li>
          <li>You'll lock your rate when you have a purchase contract</li>
        </ul>

        <p><strong>Canada Rate Holds:</strong></p>
        <ul>
          <li>Some lenders offer 90-120 day rate holds during pre-approval</li>
          <li>Protects against rate increases while house hunting</li>
          <li>Can usually get lower rate if rates drop</li>
        </ul>

        <h2>Red flags and how to fix them fast</h2>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">Common Issues</h3>
          <ul className="text-red-700 space-y-2">
            <li><strong>Recent credit inquiries</strong> – Wait 30-45 days between applications</li>
            <li><strong>High credit utilization</strong> – Pay down cards before applying</li>
            <li><strong>Irregular income</strong> – Provide 2+ years of tax returns</li>
            <li><strong>Job change</strong> – Wait until after probation period if possible</li>
            <li><strong>Large recent deposits</strong> – Document source (bonus, gift, sale)</li>
            <li><strong>Collections or charge-offs</strong> – Pay off or get payment plan</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What credit score do I need minimum?</h3>
              <p className="text-gray-700">Conventional: 620+, FHA/Insured: 580+, but higher scores get better rates. Some portfolio lenders go lower with compensating factors.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I switch lenders after pre-approval?</h3>
              <p className="text-gray-700">Yes, but you'll need a new pre-approval from the new lender. Consider timing and whether you want another credit pull.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Does pre-approval hurt my credit score?</h3>
              <p className="text-gray-700">The hard pull may lower your score by 2-5 points temporarily. Multiple mortgage inquiries within 14-45 days count as one for scoring.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How often should I update my pre-approval?</h3>
              <p className="text-gray-700">Refresh when it expires, after significant financial changes, or if rates change substantially in your favor.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-calculate-your-mortgage-payment-piti-explained" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">← Calculate Mortgage Payment</h3>
              <p className="text-sm text-blue-700 mt-1">PITI explained with examples</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-compare-lenders-and-lock-your-rate" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Compare Lenders &amp; Lock Rate →</h3>
              <p className="text-sm text-green-700 mt-1">Shop multiple quotes without overpaying</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}