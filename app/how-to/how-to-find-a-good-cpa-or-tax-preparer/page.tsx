import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Find a Good CPA or Tax Preparer (Red Flags & Questions to Ask)',
  description: 'Credentials to look for, fee structures, red flags, interview questions, and when to switch preparers.',
}

export default function FindGoodCPAPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Find a Good CPA</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white text-xl">
            📋
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Taxes & Accounting</p>
            <h1 className="text-4xl font-bold text-gray-900">How to Find a Good CPA or Tax Preparer (Red Flags & Questions to Ask)</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Credentials to look for, fee structures, red flags, interview questions, and when to switch preparers.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>When you need professional help</h2>
        
        <p>Consider professional tax help if potential savings exceed the cost, or if your situation is complex enough to create audit risk.</p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">✅ Good Candidates for Professional Help</h4>
            <ul className="text-green-700 text-sm space-y-2">
              <li>• Self-employment or business income</li>
              <li>• Rental property ownership</li>
              <li>• Complex investment transactions</li>
              <li>• Multiple states or international income</li>
              <li>• Major life changes (marriage, divorce, death)</li>
              <li>• Large charitable donations or deductions</li>
              <li>• Previous IRS audits or problems</li>
              <li>• High income with complex deductions</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">📱 May Be Fine with Software</h4>
            <ul className="text-blue-700 text-sm space-y-2">
              <li>• W-2 income only</li>
              <li>• Simple investment income</li>
              <li>• Standard or basic itemized deductions</li>
              <li>• No significant life changes</li>
              <li>• Comfortable with tax concepts</li>
              <li>• Limited time or budget</li>
              <li>• Straightforward tax situation</li>
            </ul>
          </div>
        </div>

        <h2>Types of tax professionals</h2>
        
        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Type</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Education/Credentials</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Services</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Typical Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">CPA</td>
                <td className="border border-gray-300 px-3 py-2">Bachelor's + CPA exam + continuing education</td>
                <td className="border border-gray-300 px-3 py-2">Full service, audits, business consulting</td>
                <td className="border border-gray-300 px-3 py-2">$200-500+</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">EA (Enrolled Agent)</td>
                <td className="border border-gray-300 px-3 py-2">IRS exam + continuing education</td>
                <td className="border border-gray-300 px-3 py-2">Tax prep, IRS representation</td>
                <td className="border border-gray-300 px-3 py-2">$150-400</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Tax Attorney</td>
                <td className="border border-gray-300 px-3 py-2">Law degree + tax specialization</td>
                <td className="border border-gray-300 px-3 py-2">Complex legal issues, disputes</td>
                <td className="border border-gray-300 px-3 py-2">$300-800+/hr</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">CTEC (CA only)</td>
                <td className="border border-gray-300 px-3 py-2">60 hours education + exam</td>
                <td className="border border-gray-300 px-3 py-2">Basic tax prep (California)</td>
                <td className="border border-gray-300 px-3 py-2">$100-300</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Unenrolled Preparer</td>
                <td className="border border-gray-300 px-3 py-2">Varies (no federal requirement)</td>
                <td className="border border-gray-300 px-3 py-2">Basic returns only</td>
                <td className="border border-gray-300 px-3 py-2">$75-250</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Questions to ask potential preparers</h2>
        
        <div className="space-y-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Qualifications & Experience</h4>
            <ul className="text-blue-700 text-sm space-y-2">
              <li>• What are your credentials? (CPA, EA, etc.)</li>
              <li>• How long have you been preparing taxes?</li>
              <li>• Do you handle situations like mine regularly?</li>
              <li>• What continuing education do you complete annually?</li>
              <li>• Are you licensed in my state?</li>
              <li>• Can you represent me before the IRS?</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Process & Communication</h4>
            <ul className="text-green-700 text-sm space-y-2">
              <li>• How do you typically communicate with clients?</li>
              <li>• What's your process for preparing returns?</li>
              <li>• Do you review returns before I sign them?</li>
              <li>• How do you stay current on tax law changes?</li>
              <li>• What software do you use?</li>
              <li>• Can you handle electronic filing?</li>
            </ul>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="font-semibold text-purple-800 mb-3">Fees & Services</h4>
            <ul className="text-purple-700 text-sm space-y-2">
              <li>• What are your fees for someone like me?</li>
              <li>• Do you charge extra for e-filing or state returns?</li>
              <li>• What's included in your base fee?</li>
              <li>• Do you offer year-round tax planning?</li>
              <li>• What if I get audited—will you represent me?</li>
              <li>• Can you provide a written fee agreement?</li>
            </ul>
          </div>
        </div>

        <h2>Major red flags to avoid</h2>
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">⚠️ Warning Signs</h3>
          <ul className="text-red-700 space-y-2">
            <li>• <strong>Promises unrealistic refunds:</strong> "I'll get you a bigger refund than anyone else"</li>
            <li>• <strong>Bases fees on refund size:</strong> Percentage-based fees are unethical</li>
            <li>• <strong>Won't sign returns:</strong> All paid preparers must sign and include PTIN</li>
            <li>• <strong>Suggests fake deductions:</strong> Claims you can deduct things you clearly cannot</li>
            <li>• <strong>Refuses to provide credentials:</strong> Won't show licenses or certifications</li>
            <li>• <strong>Deposit refund into their account:</strong> Your refund should never go to preparer</li>
            <li>• <strong>Guarantees "no audit":</strong> No one can guarantee audit immunity</li>
            <li>• <strong>Won't give you copies:</strong> You should have all tax documents</li>
          </ul>
        </div>

        <h2>Fee structures and what to expect</h2>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Reasonable Fee Expectations</h4>
            <ul className="text-green-700 text-sm space-y-2">
              <li>• <strong>Simple 1040:</strong> $150-350</li>
              <li>• <strong>Itemized deductions:</strong> +$50-100</li>
              <li>• <strong>Schedule C (business):</strong> +$150-300</li>
              <li>• <strong>Rental property:</strong> +$75-150 each</li>
              <li>• <strong>Complex returns:</strong> $400-1,000+</li>
              <li>• <strong>State returns:</strong> $50-150 each</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Fee Structure Types</h4>
            <ul className="text-blue-700 text-sm space-y-2">
              <li>• <strong>Flat fee:</strong> Fixed price for your situation</li>
              <li>• <strong>Hourly rate:</strong> $100-400/hour depending on credentials</li>
              <li>• <strong>Form-based:</strong> Per form pricing (avoid for complex returns)</li>
              <li>• <strong>Value-based:</strong> Based on complexity and service level</li>
              <li>• <strong>Never acceptable:</strong> Percentage of refund</li>
            </ul>
          </div>
        </div>

        <h2>Finding candidates</h2>
        
        <div className="space-y-4 my-8">
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
            <div>
              <p className="text-gray-700 font-medium">Professional referrals</p>
              <p className="text-gray-600 text-sm">Ask lawyers, financial advisors, business owners with similar situations</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
            <div>
              <p className="text-gray-700 font-medium">Professional associations</p>
              <p className="text-gray-600 text-sm">AICPA, NAEA, state CPA societies have "find a professional" tools</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
            <div>
              <p className="text-gray-700 font-medium">Online directories</p>
              <p className="text-gray-600 text-sm">IRS directory of preparers, Better Business Bureau, Google reviews</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
            <div>
              <p className="text-gray-700 font-medium">Local small businesses</p>
              <p className="text-gray-600 text-sm">Solo practitioners or small firms often provide more personal service</p>
            </div>
          </div>
        </div>

        <h2>Working effectively with your preparer</h2>
        
        <div className="space-y-6 my-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h4 className="font-semibold text-yellow-800 mb-3">What to Bring</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-yellow-700 text-sm space-y-2">
                <li>• All tax documents (W-2, 1099s, K-1s)</li>
                <li>• Prior year tax return</li>
                <li>• Receipts for deductible expenses</li>
                <li>• Mileage logs and business records</li>
              </ul>
              <ul className="text-yellow-700 text-sm space-y-2">
                <li>• Bank statements for large transactions</li>
                <li>• Closing statements for real estate</li>
                <li>• Investment account statements</li>
                <li>• List of questions or concerns</li>
              </ul>
            </div>
          </div>

          <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
            <h4 className="font-semibold text-cyan-800 mb-3">Communication Best Practices</h4>
            <div className="space-y-2">
              <p className="text-cyan-700 text-sm">Be upfront about your situation and any concerns</p>
              <p className="text-cyan-700 text-sm">Ask questions if you don't understand something</p>
              <p className="text-cyan-700 text-sm">Review your return carefully before signing</p>
              <p className="text-cyan-700 text-sm">Keep copies of everything they provide</p>
            </div>
          </div>
        </div>

        <h2>When to switch preparers</h2>
        
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-orange-900 mb-4">Time to Find Someone New</h3>
          <ul className="text-orange-700 text-sm space-y-2">
            <li>• Consistent errors on your returns</li>
            <li>• Poor communication or responsiveness</li>
            <li>• Significantly higher fees without added value</li>
            <li>• Unwillingness to explain their work</li>
            <li>• Aggressive tax positions you're uncomfortable with</li>
            <li>• Major changes in your tax situation they can't handle</li>
            <li>• Retirement or leaving the profession</li>
            <li>• Loss of professional credentials or licensing issues</li>
          </ul>
        </div>

        <h2>Regional considerations</h2>
        
        <div className="space-y-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 mb-4">🇺🇸 United States</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-blue-800">IRS requirements</p>
                <p className="text-blue-700 text-sm">All paid preparers need PTIN (Preparer Tax Identification Number)</p>
              </div>
              <div>
                <p className="font-medium text-blue-800">State licensing</p>
                <p className="text-blue-700 text-sm">Some states (CA, OR, NY) have additional licensing requirements</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="font-semibold text-purple-900 mb-4">🇨🇦 Canada</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-purple-800">Professional designations</p>
                <p className="text-purple-700 text-sm">CPA, professional accountant licenses by province</p>
              </div>
              <div>
                <p className="font-medium text-purple-800">Tax preparation</p>
                <p className="text-purple-700 text-sm">Anyone can prepare taxes, but credentials matter for complex situations</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-semibold text-green-900 mb-4">🇬🇧 UK</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-green-800">Qualified professionals</p>
                <p className="text-green-700 text-sm">Chartered accountants, ACCA members, tax advisors</p>
              </div>
              <div>
                <p className="font-medium text-green-800">Self Assessment help</p>
                <p className="text-purple-700 text-sm">Agent services for HMRC representation and filing</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">💡 Pro Tip</h3>
          <p className="text-blue-700">
            Interview 2-3 preparers before making a decision. Ask the same questions to each and compare their 
            responses, communication style, and fee structures. The cheapest option isn't always the best value, 
            especially if it leads to errors or missed deductions.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do I really need a CPA, or is an EA sufficient?</h3>
              <p className="text-gray-700">
                For most tax situations, an EA is perfectly qualified. CPAs have broader training but EAs specialize 
                specifically in tax matters. Choose based on your needs: EA for tax-only work, CPA for business 
                consulting or complex financial planning.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I use a big chain like H&R Block or a local preparer?</h3>
              <p className="text-gray-700">
                Chains offer convenience and standardized processes but may lack personalized service. Local preparers 
                often provide better relationships and specialized knowledge. For complex returns, experienced local 
                professionals are usually better.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if my preparer makes a mistake on my return?</h3>
              <p className="text-gray-700">
                You're ultimately responsible for accuracy, but good preparers carry professional liability insurance 
                and will help correct errors. Ask about their error policy upfront and ensure they're willing to 
                represent you if problems arise.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How early should I start looking for a tax preparer?</h3>
              <p className="text-gray-700">
                Start your search in summer or fall, before tax season gets busy. Good preparers may not accept new 
                clients during peak season (January-April), and you'll have more time to research and interview candidates.
              </p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-claim-home-office-deductions-properly" 
              className="block p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors"
            >
              <h3 className="font-semibold text-emerald-900">← Home Office Deductions</h3>
              <p className="text-sm text-emerald-700 mt-1">Properly claim home office expenses</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-file-your-taxes-online-checklist" 
              className="block p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors"
            >
              <h3 className="font-semibold text-emerald-900">File Taxes Online →</h3>
              <p className="text-sm text-emerald-700 mt-1">Complete checklist for online filing</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}