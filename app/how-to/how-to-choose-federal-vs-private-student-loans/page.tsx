import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Federal vs Private Student Loans—Which to Choose?',
  description: 'Compare federal/government vs private student loans: rates, protections, forgiveness, cosigners, and when each makes sense.',
}
const createSlug = (text: string): string => {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

export default function HowToChooseFederalVsPrivateStudentLoans() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
        <a href="/category/how-to" className="hover:text-violet-600">How-To Guides</a>
        <span>/</span>
        <span className="text-gray-900">Choose Federal vs Private Student Loans</span>
      </nav>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center text-white mr-3">
            🎓
          </div>
          <span className="text-violet-600 font-medium">Student Loans & Education</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Federal vs Private Student Loans: How to Choose
        </h1>
        <p className="text-xl text-gray-600">
          Compare federal/government vs private student loans: rates, protections, forgiveness, cosigners, and when each makes sense.
        </p>
      </div>
      {/* Article Content */}
      <article className="prose prose-lg max-w-none">
        <div className="bg-violet-50 border-l-4 border-violet-600 p-6 mb-8">
          <h3 className="text-lg font-semibold text-violet-800 mb-2">🔄 Federal-First Strategy</h3>
          <p className="text-violet-700">
            Start with federal/government loans (U.S. Direct Loans) which offer fixed rates, income-driven repayment, and forgiveness programs. Private loans may offer lower rates with excellent credit but lack guaranteed safety nets.
          </p>
        </div>
            <h2>Federal Loans: Your Safety Net Foundation</h2>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
              <h3 className="text-lg font-semibold mb-4">Why Federal Loans Should Be Your First Choice</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-800 mb-3">Financial Protections</h4>
                  <ul className="text-green-700 space-y-2">
                    <li>• Fixed interest rates (never increase)</li>
                    <li>• Income-driven repayment plans</li>
                    <li>• Loan forgiveness programs</li>
                    <li>• Flexible deferment/forbearance</li>
                    <li>• Death/disability discharge</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-800 mb-3">Easy Qualification</h4>
                  <ul className="text-green-700 space-y-2">
                    <li>• No credit check for most loans</li>
                    <li>• No cosigner required</li>
                    <li>• No income verification</li>
                    <li>• Based on financial need (FAFSA)</li>
                    <li>• Available to most citizens/residents</li>
                  </ul>
                </div>
              </div>
            </div>
            <h3>Types of Federal Student Loans</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 mb-6">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Loan Type</th>
                    <th className="px-4 py-3 text-left font-semibold">Interest Rate (2024-25)</th>
                    <th className="px-4 py-3 text-left font-semibold">Who Qualifies</th>
                    <th className="px-4 py-3 text-left font-semibold">Key Feature</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 font-medium">Direct Subsidized</td>
                    <td className="px-4 py-3">5.50%</td>
                    <td className="px-4 py-3">Undergrads with financial need</td>
                    <td className="px-4 py-3">Gov't pays interest while in school</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Direct Unsubsidized</td>
                    <td className="px-4 py-3">5.50% (undergrad)<br/>7.05% (grad)</td>
                    <td className="px-4 py-3">All students</td>
                    <td className="px-4 py-3">Interest accrues from disbursement</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Direct PLUS</td>
                    <td className="px-4 py-3">8.05%</td>
                    <td className="px-4 py-3">Parents/grad students</td>
                    <td className="px-4 py-3">Credit check required, higher limits</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3>Federal Loan Repayment Flexibility</h3>
            <p>Federal loans offer multiple repayment plans you can switch between:</p>
            <ul>
              <li><strong>Standard Repayment:</strong> Fixed payments over 10 years</li>
              <li><strong>Graduated Repayment:</strong> Payments start low, increase every 2 years</li>
              <li><strong>Extended Repayment:</strong> Up to 25 years with lower payments</li>
              <li><strong>Income-Driven Repayment (IDR):</strong> Payments based on income/family size</li>
            </ul>
            <h2>Private Loans: Higher Risk, Potential Rewards</h2>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8">
              <h3 className="text-lg font-semibold mb-4">Private Loans: Pros and Cons</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-800 mb-3">Potential Advantages</h4>
                  <ul className="text-green-700 space-y-2">
                    <li>• Lower rates with excellent credit</li>
                    <li>• Higher borrowing limits</li>
                    <li>• Faster processing</li>
                    <li>• Competitive shopping opportunities</li>
                    <li>• Some offer career-specific benefits</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-red-800 mb-3">Major Drawbacks</h4>
                  <ul className="text-red-700 space-y-2">
                    <li>• No federal loan forgiveness</li>
                    <li>• Limited repayment flexibility</li>
                    <li>• Credit-based approval</li>
                    <li>• Variable rates can increase</li>
                    <li>• Fewer consumer protections</li>
                  </ul>
                </div>
              </div>
            </div>
            <h3>When Private Loans Make Sense</h3>
            <p>Consider private loans only in these specific situations:</p>
            <ol>
              <li><strong>Maxed out federal limits:</strong> You've borrowed up to federal caps</li>
              <li><strong>Excellent credit profile:</strong> You or cosigner has 750+ credit score</li>
              <li><strong>Stable income/employment:</strong> Low risk of income disruption</li>
              <li><strong>No forgiveness plans:</strong> You won't pursue PSLF or other programs</li>
              <li><strong>Significant rate advantage:</strong> Private rate is 2+ points lower</li>
            </ol>
            <h2>Decision Framework: Federal First Strategy</h2>
            <div className="bg-violet-50 border-l-4 border-violet-500 p-6 my-8">
              <h3 className="text-lg font-semibold mb-4">Smart Borrowing Sequence</h3>
              <ol className="space-y-3">
                <li><strong>1. Maximize federal aid:</strong> Exhaust subsidized, then unsubsidized loans</li>
                <li><strong>2. Evaluate remaining gap:</strong> Calculate true need after federal loans</li>
                <li><strong>3. Consider alternatives:</strong> Work-study, part-time jobs, family help</li>
                <li><strong>4. Shop private carefully:</strong> Only if gap remains and you qualify</li>
                <li><strong>5. Borrow conservatively:</strong> Take only what you truly need</li>
              </ol>
            </div>
            <h3>Three Key Questions</h3>
            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-3">Do I need payment flexibility?</h4>
                <p className="text-blue-700 text-sm">If yes → Choose federal loans for IDR plans and forgiveness options</p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-3">Do I have elite credit?</h4>
                <p className="text-purple-700 text-sm">If yes → Consider private for potentially lower rates, but only for the last dollar</p>
              </div>
              
              <div className="bg-teal-50 p-6 rounded-lg">
                <h4 className="font-semibold text-teal-800 mb-3">Will I pursue forgiveness?</h4>
                <p className="text-teal-700 text-sm">If yes → Don't jeopardize eligibility with private loans</p>
              </div>
            </div>
            <h2>Rate Comparison Reality Check</h2>
            <h3>Federal vs Private Rate Analysis</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 mb-6">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Credit Profile</th>
                    <th className="px-4 py-3 text-left font-semibold">Federal Rate</th>
                    <th className="px-4 py-3 text-left font-semibold">Private Rate Range</th>
                    <th className="px-4 py-3 text-left font-semibold">Recommendation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3">No/Limited Credit</td>
                    <td className="px-4 py-3">5.50% (fixed)</td>
                    <td className="px-4 py-3">8-15% (variable)</td>
                    <td className="px-4 py-3">Federal clearly better</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Good Credit (700-750)</td>
                    <td className="px-4 py-3">5.50% (fixed)</td>
                    <td className="px-4 py-3">4-8% (variable)</td>
                    <td className="px-4 py-3">Compare carefully, lean federal</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Excellent Credit (750+)</td>
                    <td className="px-4 py-3">5.50% (fixed)</td>
                    <td className="px-4 py-3">2-6% (variable)</td>
                    <td className="px-4 py-3">Private may be competitive</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Cosigner (750+)</td>
                    <td className="px-4 py-3">5.50% (fixed)</td>
                    <td className="px-4 py-3">2-5% (variable)</td>
                    <td className="px-4 py-3">Consider private for gap only</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3>The Variable Rate Risk</h3>
            <p>Most competitive private loan rates are variable, meaning they can increase:</p>
            <ul>
              <li><strong>Starting rate:</strong> May be 2-3% today</li>
              <li><strong>Rate cap:</strong> Could reach 10-15% over loan life</li>
              <li><strong>Fed influence:</strong> Rates rise with Federal Reserve increases</li>
              <li><strong>Fixed alternatives:</strong> Usually 1-2% higher than variable start rate</li>
            </ul>
            <h2>Key Features Comparison</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 mb-6">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Feature</th>
                    <th className="px-4 py-3 text-left font-semibold">Federal Loans</th>
                    <th className="px-4 py-3 text-left font-semibold">Private Loans</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 font-medium">Credit Check</td>
                    <td className="px-4 py-3">None (except PLUS)</td>
                    <td className="px-4 py-3">Required</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Cosigner Required</td>
                    <td className="px-4 py-3">No</td>
                    <td className="px-4 py-3">Often yes</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Rate Type</td>
                    <td className="px-4 py-3">Fixed only</td>
                    <td className="px-4 py-3">Fixed or variable</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Income-Driven Repayment</td>
                    <td className="px-4 py-3">Yes (multiple options)</td>
                    <td className="px-4 py-3">Rarely</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Loan Forgiveness</td>
                    <td className="px-4 py-3">Multiple programs</td>
                    <td className="px-4 py-3">None</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Deferment Options</td>
                    <td className="px-4 py-3">Guaranteed situations</td>
                    <td className="px-4 py-3">Lender discretion</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Death/Disability Discharge</td>
                    <td className="px-4 py-3">Automatic</td>
                    <td className="px-4 py-3">Varies by lender</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2>Private Loan Shopping Strategy</h2>
            <h3>Top Private Student Loan Lenders</h3>
            <ul>
              <li><strong>SoFi:</strong> No fees, member benefits, competitive rates</li>
              <li><strong>Earnest:</strong> Precision pricing, skip-a-payment option</li>
              <li><strong>College Ave:</strong> Multiple repayment options</li>
              <li><strong>Sallie Mae:</strong> Large market presence, various terms</li>
              <li><strong>CommonBond:</strong> Social mission, MBA focus</li>
              <li><strong>Citizens Bank:</strong> Multi-year approval, rate discounts</li>
            </ul>
            <h3>What to Compare When Shopping</h3>
            <ul>
              <li><strong>APR (not just rate):</strong> Includes all fees for true cost</li>
              <li><strong>Origination fees:</strong> Many charge 1-5% upfront</li>
              <li><strong>Repayment terms:</strong> 5-20 years typically</li>
              <li><strong>Cosigner release:</strong> Requirements and timeline</li>
              <li><strong>Hardship options:</strong> Forbearance, unemployment protection</li>
              <li><strong>Autopay discounts:</strong> Usually 0.25% rate reduction</li>
            </ul>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
              <h4 className="font-semibold mb-2">⚠️ Private Loan Shopping Tips</h4>
              <ul className="space-y-2">
                <li>• Shop rates within 14-45 days to minimize credit impact</li>
                <li>• Get quotes from 3-5 lenders minimum</li>
                <li>• Read the fine print, not just marketing materials</li>
                <li>• Understand cosigner responsibilities fully</li>
                <li>• Never borrow more than federal + private combined limits</li>
              </ul>
            </div>
            <h2>Cosigner Considerations</h2>
            <h3>How Cosigners Affect Private Loans</h3>
            <ul>
              <li><strong>Rate impact:</strong> Can lower rate by 1-4 percentage points</li>
              <li><strong>Approval odds:</strong> Significantly improve qualification chances</li>
              <li><strong>Shared liability:</strong> Both parties fully responsible for debt</li>
              <li><strong>Credit impact:</strong> Affects both borrower and cosigner credit</li>
              <li><strong>Release options:</strong> Some lenders allow cosigner removal after payments</li>
            </ul>
            <h3>Cosigner Release Requirements</h3>
            <p>Typical requirements to release a cosigner:</p>
            <ul>
              <li>24-48 consecutive on-time payments</li>
              <li>Credit score improvement to 650-700+</li>
              <li>Income verification showing ability to pay</li>
              <li>Request process through lender</li>
              <li>Underwriting review and approval</li>
            </ul>
            <h2>Special Situations</h2>
            <h3>Graduate Students</h3>
            <ul>
              <li><strong>Higher federal limits:</strong> Up to $20,500/year unsubsidized</li>
              <li><strong>Grad PLUS loans:</strong> Up to cost of attendance</li>
              <li><strong>Professional programs:</strong> May have higher private limits</li>
              <li><strong>Career considerations:</strong> Expected income affects borrowing strategy</li>
            </ul>
            <h3>International Students</h3>
            <ul>
              <li><strong>Federal aid:</strong> Generally not available</li>
              <li><strong>Private options:</strong> Very limited, usually require U.S. cosigner</li>
              <li><strong>School-specific aid:</strong> Institutional scholarships and grants</li>
              <li><strong>Alternative funding:</strong> Country-specific loan programs</li>
            </ul>
            <h3>Parent Borrowing Strategy</h3>
            <ul>
              <li><strong>Student federal first:</strong> Exhaust student limits before parent borrowing</li>
              <li><strong>Parent PLUS vs. private:</strong> Compare rates and terms</li>
              <li><strong>Who should borrow:</strong> Consider tax benefits and forgiveness options</li>
              <li><strong>Credit impact:</strong> Parent borrowing affects parent credit</li>
            </ul>
            <h2>Long-term Strategic Thinking</h2>
            <h3>Career Path Considerations</h3>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-3">Public Service Careers</h4>
                <ul className="text-green-700 space-y-2">
                  <li>• Teaching, government, nonprofits</li>
                  <li>• Federal loans strongly preferred</li>
                  <li>• PSLF eligibility crucial</li>
                  <li>• IDR plans essential</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-3">High-Earning Careers</h4>
                <ul className="text-blue-700 space-y-2">
                  <li>• Finance, tech, medicine, law</li>
                  <li>• Private loans may be viable</li>
                  <li>• Refinancing options later</li>
                  <li>• Focus on lowest total cost</li>
                </ul>
              </div>
            </div>
            <h3>Refinancing Considerations</h3>
            <p>You can refinance later, but understand the tradeoffs:</p>
            <ul>
              <li><strong>Federal to private:</strong> Lose all federal protections permanently</li>
              <li><strong>Private to private:</strong> May get better rates with improved credit</li>
              <li><strong>Timing:</strong> Wait until you have stable income and good credit</li>
              <li><strong>Rate environment:</strong> Consider rate trends</li>
            </ul>
            <div className="bg-violet-50 border-l-4 border-violet-500 p-6 my-8">
              <h3 className="font-semibold mb-2">💡 Pro Strategy</h3>
              <p><strong>The Hybrid Approach:</strong> Max out federal loans first for their protections, then use private loans only for the final gap if you have excellent credit. This gives you safety nets on most of your debt while potentially saving money on the margin.</p>
            </div>
        </article>
        {/* Related Guides */}
        <section className="mt-12 border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/how-to/how-to-apply-for-student-loans-without-overborrowing" 
                  className="group block p-6 bg-violet-50 rounded-xl border border-violet-200 hover:border-violet-300 hover:shadow-md transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center group-hover:bg-violet-200 transition-colors">
                  📊
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-violet-800 mb-2 group-hover:text-violet-900">Apply for Student Loans Without Overborrowing</h3>
                  <p className="text-violet-600 text-sm">Calculate your true need before choosing loan types</p>
                </div>
              </div>
            </Link>
            <Link href="/how-to/how-to-consolidate-or-refinance-student-debt" 
                  className="group block p-6 bg-violet-50 rounded-xl border border-violet-200 hover:border-violet-300 hover:shadow-md transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center group-hover:bg-violet-200 transition-colors">
                  🔄
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-violet-800 mb-2 group-hover:text-violet-900">Consolidate or Refinance Student Debt</h3>
                  <p className="text-violet-600 text-sm">Learn when to combine loans and when to refinance</p>
                </div>
              </div>
            </Link>
            <Link href="/how-to/how-to-qualify-for-loan-forgiveness-programs" 
                  className="group block p-6 bg-violet-50 rounded-xl border border-violet-200 hover:border-violet-300 hover:shadow-md transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center group-hover:bg-violet-200 transition-colors">
                  🎯
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-violet-800 mb-2 group-hover:text-violet-900">Qualify for Loan Forgiveness Programs</h3>
                  <p className="text-violet-600 text-sm">Understand federal loan forgiveness opportunities</p>
                </div>
              </div>
            </Link>
            <Link href="/how-to/how-to-pick-a-repayment-plan-that-fits-your-budget" 
                  className="group block p-6 bg-violet-50 rounded-xl border border-violet-200 hover:border-violet-300 hover:shadow-md transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center group-hover:bg-violet-200 transition-colors">
                  💰
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-violet-800 mb-2 group-hover:text-violet-900">Pick a Repayment Plan That Fits Your Budget</h3>
                  <p className="text-violet-600 text-sm">Choose the right federal repayment strategy</p>
                </div>
              </div>
            </Link>
          </div>
        </section>
      {/* FAQ Section */}
      <section className="mt-12 border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I mix both federal and private student loans?</h3>
            <p className="text-gray-600">
              Yes—use federal loans first up to their limits, then private loans only for the remaining shortfall. This gives you maximum federal protections while filling gaps with potentially lower-rate private loans if you qualify.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Do private student loans have income-driven repayment?</h3>
            <p className="text-gray-600">
              Rarely—private lenders set their own hardship options which are typically more limited. Some offer temporary forbearance or interest-only payments, but nothing like federal IDR plans that adjust with your income permanently.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Will having a cosigner help with private loans?</h3>
            <p className="text-gray-600">
              Often significantly. A cosigner with excellent credit can lower your rate by 1-4 percentage points and improve approval odds. However, both you and the cosigner are fully responsible for the debt.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I refinance federal loans into private loans later?</h3>
            <p className="text-gray-600">
              Yes, but you'll permanently lose all federal protections including IDR plans, forgiveness programs, and flexible deferment options. Only refinance if you're certain you won't need these protections.
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
                  "name": "Can I mix both federal and private student loans?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes—use federal loans first up to their limits, then private loans only for the remaining shortfall. This gives you maximum federal protections."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "Do private student loans have income-driven repayment?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Rarely—private lenders set their own hardship options which are typically more limited than federal IDR plans."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Will having a cosigner help with private loans?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "Often significantly. A cosigner with excellent credit can lower your rate by 1-4 percentage points and improve approval odds."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I refinance federal loans into private loans later?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, but you'll permanently lose all federal protections including IDR plans, forgiveness programs, and flexible deferment options."
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
