import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to File Amended Tax Returns If You Made a Mistake',
  description: 'Form 1040X process, common amendments, deadlines, and when professional help is needed for tax corrections.',
}

export default function FileAmendedReturnsPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">File Amended Returns</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white text-xl">
            📋
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Taxes & Accounting</p>
            <h1 className="text-4xl font-bold text-gray-900">How to File Amended Tax Returns If You Made a Mistake</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Form 1040X process, common amendments, deadlines, and when professional help is needed for tax corrections.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>When to file an amended return</h2>
        
        <p>File Form 1040X if you discover errors that affect your tax liability or refund. Don't amend for minor clerical errors—the IRS will usually correct these automatically.</p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="font-semibold text-red-800 mb-3">Requires Amendment</h4>
            <ul className="text-red-700 text-sm space-y-2">
              <li>• Missing income (W-2, 1099, etc.)</li>
              <li>• Incorrect filing status</li>
              <li>• Claiming dependents you forgot</li>
              <li>• Missing deductions or credits</li>
              <li>• Wrong cost basis on investments</li>
              <li>• Incorrect business income/expenses</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">IRS Will Fix Automatically</h4>
            <ul className="text-green-700 text-sm space-y-2">
              <li>• Math errors in calculations</li>
              <li>• Missing signatures (they'll request)</li>
              <li>• Incorrect SSN formatting</li>
              <li>• Minor name/address errors</li>
              <li>• Standard deduction amounts</li>
              <li>• Missing forms they have on file</li>
            </ul>
          </div>
        </div>

        <h2>Form 1040X step-by-step</h2>
        
        <div className="space-y-4 my-8">
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
            <div>
              <p className="text-gray-700 font-medium">Gather your original return</p>
              <p className="text-gray-600 text-sm">Need the as-filed version, not just your records or software files</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
            <div>
              <p className="text-gray-700 font-medium">Identify all changes needed</p>
              <p className="text-gray-600 text-sm">Don't file multiple amendments—include all corrections on one 1040X</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
            <div>
              <p className="text-gray-700 font-medium">Complete Form 1040X</p>
              <p className="text-gray-600 text-sm">Show original amounts, correct amounts, and net change for each line</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
            <div>
              <p className="text-gray-700 font-medium">Explain the changes</p>
              <p className="text-gray-600 text-sm">Part III requires detailed explanation of what you're changing and why</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">5</span>
            <div>
              <p className="text-gray-700 font-medium">Attach supporting documents</p>
              <p className="text-gray-600 text-sm">New forms, schedules, or documentation supporting your changes</p>
            </div>
          </div>
        </div>

        <h2>Common amendment scenarios</h2>
        
        <div className="space-y-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Missing Income Document</h4>
            <div className="space-y-2">
              <p className="text-blue-700 text-sm"><strong>Situation:</strong> Received 1099 after filing, or found overlooked income</p>
              <p className="text-blue-700 text-sm"><strong>Process:</strong> Report additional income, recalculate tax owed</p>
              <p className="text-blue-700 text-sm"><strong>Timeline:</strong> File ASAP to minimize interest and penalties</p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Forgotten Deductions/Credits</h4>
            <div className="space-y-2">
              <p className="text-green-700 text-sm"><strong>Situation:</strong> Eligible for credits you didn't claim, missed itemized deductions</p>
              <p className="text-green-700 text-sm"><strong>Process:</strong> Add the deductions/credits, attach supporting schedules</p>
              <p className="text-green-700 text-sm"><strong>Result:</strong> Usually results in additional refund</p>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="font-semibold text-purple-800 mb-3">Incorrect Filing Status</h4>
            <div className="space-y-2">
              <p className="text-purple-700 text-sm"><strong>Situation:</strong> Should have filed jointly instead of separately, or vice versa</p>
              <p className="text-purple-700 text-sm"><strong>Process:</strong> Complete new return with correct status, both spouses sign</p>
              <p className="text-purple-700 text-sm"><strong>Note:</strong> Can change from separate to joint anytime, joint to separate only until due date</p>
            </div>
          </div>
        </div>

        <h2>Deadlines and processing times</h2>
        
        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Amendment Type</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Deadline</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Processing Time</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Interest/Penalties</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Claiming refund</td>
                <td className="border border-gray-300 px-3 py-2">3 years from filing date</td>
                <td className="border border-gray-300 px-3 py-2">12-16 weeks (paper)</td>
                <td className="border border-gray-300 px-3 py-2">None if filed timely</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Reducing refund</td>
                <td className="border border-gray-300 px-3 py-2">3 years from filing date</td>
                <td className="border border-gray-300 px-3 py-2">8-12 weeks</td>
                <td className="border border-gray-300 px-3 py-2">Interest from due date</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Owing additional tax</td>
                <td className="border border-gray-300 px-3 py-2">ASAP (no statutory limit)</td>
                <td className="border border-gray-300 px-3 py-2">12-16 weeks</td>
                <td className="border border-gray-300 px-3 py-2">Interest + failure to pay penalties</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Carryback claims</td>
                <td className="border border-gray-300 px-3 py-2">Varies by type</td>
                <td className="border border-gray-300 px-3 py-2">6-8 months</td>
                <td className="border border-gray-300 px-3 py-2">May earn interest</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-yellow-900 mb-3">Electronic vs Paper Filing</h3>
          <div className="space-y-2">
            <p className="text-yellow-700 text-sm"><strong>Electronic (new):</strong> Some software supports e-filing 1040X, faster processing</p>
            <p className="text-yellow-700 text-sm"><strong>Paper (traditional):</strong> Mail to address in instructions, longer processing times</p>
            <p className="text-yellow-700 text-sm"><strong>Certified mail recommended</strong> for paper filing to prove receipt date</p>
          </div>
        </div>

        <h2>State amended returns</h2>
        
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-orange-900 mb-4">State Tax Considerations</h3>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-orange-800">Generally required</p>
              <p className="text-orange-700 text-sm">Most states require amended returns if you amend federal, but timing varies</p>
            </div>
            <div>
              <p className="font-medium text-orange-800">Separate deadlines</p>
              <p className="text-orange-700 text-sm">State deadlines may differ from federal 3-year rule</p>
            </div>
            <div>
              <p className="font-medium text-orange-800">Different forms</p>
              <p className="text-orange-700 text-sm">Each state has its own amended return form and process</p>
            </div>
            <div>
              <p className="font-medium text-orange-800">Conformity issues</p>
              <p className="text-orange-700 text-sm">Some changes affect federal but not state taxes, or vice versa</p>
            </div>
          </div>
        </div>

        <h2>When to get professional help</h2>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="font-semibold text-red-800 mb-3">Complex Situations</h4>
            <ul className="text-red-700 text-sm space-y-2">
              <li>• Multiple year corrections needed</li>
              <li>• Business income/expense errors</li>
              <li>• Investment cost basis problems</li>
              <li>• Foreign income reporting issues</li>
              <li>• Potential audit triggers</li>
              <li>• Penalties could be significant</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">DIY-Friendly Amendments</h4>
            <ul className="text-green-700 text-sm space-y-2">
              <li>• Simple missing deductions</li>
              <li>• Additional dependents</li>
              <li>• Missed education credits</li>
              <li>• Incorrect standard deduction</li>
              <li>• Single document corrections</li>
              <li>• Low dollar amounts involved</li>
            </ul>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">⚠️ Common Amendment Mistakes</h3>
          <ul className="text-red-700 space-y-2">
            <li>• <strong>Filing multiple amendments:</strong> Wait for first to process, then amend again if needed</li>
            <li>• <strong>Not explaining changes clearly:</strong> Part III explanation is crucial for processing</li>
            <li>• <strong>Missing supporting documents:</strong> Attach any new forms or schedules</li>
            <li>• <strong>Forgetting state returns:</strong> Most states require corresponding amendments</li>
            <li>• <strong>Not keeping copies:</strong> Always keep complete records of what you sent</li>
          </ul>
        </div>

        <h2>Tracking your amendment</h2>
        
        <div className="space-y-4 my-8">
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
            <div>
              <p className="text-gray-700 font-medium">Use "Where's My Amended Return?"</p>
              <p className="text-gray-600 text-sm">IRS online tool to track processing status after 3 weeks</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
            <div>
              <p className="text-gray-700 font-medium">Keep detailed records</p>
              <p className="text-gray-600 text-sm">Date sent, tracking numbers, copies of all documents</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
            <div>
              <p className="text-gray-700 font-medium">Respond promptly to IRS notices</p>
              <p className="text-gray-600 text-sm">May request additional information or clarification</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">💡 Pro Tip</h3>
          <p className="text-blue-700">
            Before filing an amended return, calculate the potential refund or additional tax owed. If the net change is 
            minimal (under $100), consider whether the time and complexity is worth it, especially for older tax years.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I e-file an amended return?</h3>
              <p className="text-gray-700">
                Yes, for tax years 2019 and later. Most tax software now supports electronic filing of Form 1040X, 
                which processes faster than paper filing. Check if your software or tax preparer offers this option.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if I need to amend multiple years?</h3>
              <p className="text-gray-700">
                File separate Form 1040X for each tax year. Process them simultaneously, but don't reference other years 
                on each form. Consider professional help for multi-year corrections.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Will filing an amendment trigger an audit?</h3>
              <p className="text-gray-700">
                Amended returns have slightly higher audit rates, but it's still very low. Filing accurate amendments with 
                proper documentation and clear explanations minimizes audit risk. Don't avoid filing legitimate corrections.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I amend my return if I used the wrong tax preparer?</h3>
              <p className="text-gray-700">
                You can amend regardless of who prepared the original return. However, if the preparer made errors, 
                they may be responsible for penalties and interest. Discuss this with them before filing the amendment yourself.
              </p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-handle-side-hustle-taxes-self-employment" 
              className="block p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors"
            >
              <h3 className="font-semibold text-emerald-900">← Side Hustle Taxes</h3>
              <p className="text-sm text-emerald-700 mt-1">Self-employment tax strategies</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-estimate-quarterly-taxes-and-avoid-penalties" 
              className="block p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors"
            >
              <h3 className="font-semibold text-emerald-900">Estimate Quarterly Taxes →</h3>
              <p className="text-sm text-emerald-700 mt-1">Avoid underpayment penalties</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}