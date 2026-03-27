import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to File Your Taxes Online: Step-by-Step Checklist',
  description: 'File your taxes online fast and accurately. See the exact documents to gather, pick the right software, avoid mistakes, and submit with confidence.',
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is online tax filing safe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes—use reputable software with encryption and multi-factor authentication."
      }
    },
    {
      "@type": "Question",
      "name": "How long do refunds take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Refund timing varies by country and whether you use direct deposit or cheque."
      }
    }
  ]
}

export default function FileTaxesOnlinePage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">File Taxes Online</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white text-xl">
            📋
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Taxes & Accounting</p>
            <h1 className="text-4xl font-bold text-gray-900">How to File Your Taxes Online: Step-by-Step Checklist</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Filing your taxes online doesn't need to be stressful. Use this simple checklist to gather the right documents, pick secure software, and e-file accurately. You'll see which forms to import, how to claim the deductions you qualify for, and what to do after you click "submit."
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>What you need before you start (Master Checklist)</h2>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">📋 Master Checklist</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-green-800 mb-2">Essential Documents</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>✓ Government-issued ID and last year's return</li>
                <li>✓ Employer income forms (T4/W-2)</li>
                <li>✓ Self-employment summaries</li>
                <li>✓ Investment slips</li>
                <li>✓ Benefits statements</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-green-800 mb-2">Supporting Materials</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>✓ Receipts for deductions/credits</li>
                <li>✓ Direct deposit info for refunds</li>
                <li>✓ Multi-factor authentication enabled</li>
                <li>✓ Secure internet connection</li>
              </ul>
            </div>
          </div>
        </div>

        <h3>Personal info & IDs</h3>
        
        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Document</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Why You Need It</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Where to Find</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Previous Year's Return</td>
                <td className="border border-gray-300 px-3 py-2">AGI verification, carryovers</td>
                <td className="border border-gray-300 px-3 py-2">Your files or tax software</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Government ID</td>
                <td className="border border-gray-300 px-3 py-2">Identity verification</td>
                <td className="border border-gray-300 px-3 py-2">Driver's license, passport</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">SSN/SIN</td>
                <td className="border border-gray-300 px-3 py-2">Tax ID matching</td>
                <td className="border border-gray-300 px-3 py-2">Social Security card, prior returns</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Spouse/Dependents Info</td>
                <td className="border border-gray-300 px-3 py-2">Filing status, credits</td>
                <td className="border border-gray-300 px-3 py-2">SSN/SIN cards, birth certificates</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Income forms (employment, self-employment, investments)</h3>
        
        <div className="grid md:grid-cols-3 gap-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Employment Income</h4>
            <ul className="text-blue-700 text-sm space-y-2">
              <li>• <strong>W-2 (US):</strong> Wages, tips, taxes withheld</li>
              <li>• <strong>T4 (Canada):</strong> Employment income</li>
              <li>• <strong>P60 (UK):</strong> End of year certificate</li>
              <li>• <strong>1099s:</strong> Contract/freelance work</li>
              <li>• <strong>Unemployment benefits:</strong> 1099-G, T4E</li>
            </ul>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="font-semibold text-purple-800 mb-3">Investment Income</h4>
            <ul className="text-purple-700 text-sm space-y-2">
              <li>• <strong>1099-DIV:</strong> Dividends received</li>
              <li>• <strong>1099-INT:</strong> Interest income</li>
              <li>• <strong>1099-B:</strong> Stock/bond sales</li>
              <li>• <strong>T5 (Canada):</strong> Investment income</li>
              <li>• <strong>T3:</strong> Trust distributions</li>
            </ul>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h4 className="font-semibold text-orange-800 mb-3">Self-Employment</h4>
            <ul className="text-orange-700 text-sm space-y-2">
              <li>• <strong>1099-NEC:</strong> Non-employee compensation</li>
              <li>• <strong>Business records:</strong> Income/expense summary</li>
              <li>• <strong>Receipts:</strong> Deductible expenses</li>
              <li>• <strong>Mileage logs:</strong> Business travel</li>
              <li>• <strong>Bank statements:</strong> Business account</li>
            </ul>
          </div>
        </div>

        <h3>Deductions & credits docs</h3>
        
        <div className="space-y-4 my-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h4 className="font-semibold text-yellow-800 mb-3">Common Deductions & Credits</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-yellow-800 mb-2">Education</p>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Tuition statements (1098-T, T2202)</li>
                  <li>• Student loan interest (1098-E)</li>
                  <li>• Educational expenses receipts</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-yellow-800 mb-2">Healthcare</p>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Medical expense receipts</li>
                  <li>• Health insurance premiums</li>
                  <li>• Prescription receipts</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-yellow-800 mb-2">Charitable Giving</p>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Donation receipts</li>
                  <li>• Non-cash donation records</li>
                  <li>• Volunteer mileage logs</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-yellow-800 mb-2">Homeownership</p>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Mortgage interest (1098)</li>
                  <li>• Property tax statements</li>
                  <li>• PMI premium records</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h3>Banking details for refunds</h3>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h4 className="font-semibold text-green-800 mb-3">Direct Deposit Setup</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="font-medium text-green-800 mb-2">Required Information</p>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• Bank routing number</li>
                <li>• Account number</li>
                <li>• Account type (checking/savings)</li>
                <li>• Bank name and address</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-green-800 mb-2">Where to Find It</p>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• Bottom of personal checks</li>
                <li>• Online banking portal</li>
                <li>• Bank statements</li>
                <li>• Call your bank directly</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>Choose the right online filing method</h2>

        <h3>Free vs paid software</h3>
        
        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Option</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Best For</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Features</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Limitations</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Government Free File</td>
                <td className="border border-gray-300 px-3 py-2">Simple returns, income limits</td>
                <td className="border border-gray-300 px-3 py-2">Basic forms, free e-file</td>
                <td className="border border-gray-300 px-3 py-2">Income caps, limited support</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Free Tax Software</td>
                <td className="border border-gray-300 px-3 py-2">W-2 only, standard deduction</td>
                <td className="border border-gray-300 px-3 py-2">Import W-2, basic deductions</td>
                <td className="border border-gray-300 px-3 py-2">No complex situations</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Paid Software</td>
                <td className="border border-gray-300 px-3 py-2">Self-employed, investments</td>
                <td className="border border-gray-300 px-3 py-2">All forms, audit support</td>
                <td className="border border-gray-300 px-3 py-2">$50-150+ cost</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">CPA/Preparer</td>
                <td className="border border-gray-300 px-3 py-2">Complex situations, high income</td>
                <td className="border border-gray-300 px-3 py-2">Expert guidance, planning</td>
                <td className="border border-gray-300 px-3 py-2">$200-500+ cost</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Security & data privacy features</h3>
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h4 className="font-semibold text-red-800 mb-3">🔒 Security Checklist</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="font-medium text-red-800 mb-2">Must-Have Features</p>
              <ul className="text-red-700 text-sm space-y-1">
                <li>✓ 256-bit SSL encryption</li>
                <li>✓ Multi-factor authentication</li>
                <li>✓ Automatic logout</li>
                <li>✓ Secure data centers</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-red-800 mb-2">Red Flags to Avoid</p>
              <ul className="text-red-700 text-sm space-y-1">
                <li>✗ No encryption mentioned</li>
                <li>✗ Suspicious pricing/offers</li>
                <li>✗ Poor reviews/ratings</li>
                <li>✗ No customer support</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>Step-by-step: Filing your return online</h2>

        <h3>Create an account & import forms</h3>
        
        <div className="space-y-4 my-8">
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
            <div>
              <p className="text-gray-700 font-medium">Choose your software and create account</p>
              <p className="text-gray-600 text-sm">Use strong password and enable 2FA immediately</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
            <div>
              <p className="text-gray-700 font-medium">Import prior year return</p>
              <p className="text-gray-600 text-sm">Upload PDF or connect to last year's software</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
            <div>
              <p className="text-gray-700 font-medium">Connect to employers/financial institutions</p>
              <p className="text-gray-600 text-sm">Auto-import W-2s, 1099s, and investment forms</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
            <div>
              <p className="text-gray-700 font-medium">Manual entry for missing forms</p>
              <p className="text-gray-600 text-sm">Type in information from paper forms carefully</p>
            </div>
          </div>
        </div>

        <h3>Enter income, deductions, credits</h3>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h4 className="font-semibold text-blue-800 mb-3">💡 Pro Tips</h4>
          <ul className="text-blue-700 space-y-2">
            <li>• <strong>Double-check all numbers:</strong> Match exactly to your forms</li>
            <li>• <strong>Don't skip prompts:</strong> Software may find credits you missed</li>
            <li>• <strong>Save frequently:</strong> Don't lose your progress</li>
            <li>• <strong>Use help features:</strong> Most software has good guidance</li>
            <li>• <strong>Review unusual changes:</strong> Big differences from last year</li>
          </ul>
        </div>

        <h3>Review, optimize, and e-file</h3>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Final Review Checklist</h4>
            <ul className="text-green-700 text-sm space-y-2">
              <li>□ Names and SSNs correct</li>
              <li>□ Filing status appropriate</li>
              <li>□ All income sources included</li>
              <li>□ Bank info for direct deposit</li>
              <li>□ Signature and date</li>
              <li>□ Print copy for records</li>
            </ul>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h4 className="font-semibold text-orange-800 mb-3">Before You Submit</h4>
            <ul className="text-orange-700 text-sm space-y-2">
              <li>• Check refund/owe amount makes sense</li>
              <li>• Review error messages carefully</li>
              <li>• Save electronic copy</li>
              <li>• Note confirmation number</li>
              <li>• Keep all supporting documents</li>
            </ul>
          </div>
        </div>

        <h2>Common mistakes to avoid</h2>
        
        <div className="space-y-4 my-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-700"><strong>Typos in names/IDs or bank numbers:</strong> Can delay refunds or cause rejections</p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-700"><strong>Missing forms (especially investment or gig income):</strong> Triggers notices and penalties</p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-700"><strong>Ignoring software prompts for credits you qualify for:</strong> Leaves money on the table</p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-700"><strong>Filing late or forgetting estimated taxes if self-employed:</strong> Results in penalties and interest</p>
          </div>
        </div>

        <h2>After you file: What happens next</h2>

        <h3>Refund timelines, transcript access, amendments</h3>
        
        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Timeline</th>
                <th className="border border-gray-300 px-3 py-2 text-left">What Happens</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Your Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">24-48 hours</td>
                <td className="border border-gray-300 px-3 py-2">Return accepted or rejected</td>
                <td className="border border-gray-300 px-3 py-2">Check email/software for status</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">7-21 days</td>
                <td className="border border-gray-300 px-3 py-2">Refund processed (if direct deposit)</td>
                <td className="border border-gray-300 px-3 py-2">Monitor bank account</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">4-6 weeks</td>
                <td className="border border-gray-300 px-3 py-2">Paper check arrives (if applicable)</td>
                <td className="border border-gray-300 px-3 py-2">Watch for mail</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">3+ months</td>
                <td className="border border-gray-300 px-3 py-2">Account transcript available</td>
                <td className="border border-gray-300 px-3 py-2">Download for records</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Regional notes (US / Canada / UK)</h2>
        
        <div className="grid md:grid-cols-3 gap-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">🇺🇸 United States</h4>
            <ul className="text-blue-700 text-sm space-y-2">
              <li>• e-File supported by IRS-authorized providers</li>
              <li>• Consider Free File if eligible</li>
              <li>• Due date: April 15 (usually)</li>
              <li>• Extensions available to October 15</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">🇨🇦 Canada</h4>
            <ul className="text-green-700 text-sm space-y-2">
              <li>• NETFILE-certified software</li>
              <li>• CRA My Account for slips</li>
              <li>• Due date: April 30</li>
              <li>• Self-employed: June 15</li>
            </ul>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="font-semibold text-purple-800 mb-3">🇬🇧 United Kingdom</h4>
            <ul className="text-purple-700 text-sm space-y-2">
              <li>• HMRC Self Assessment online</li>
              <li>• Register for Government Gateway</li>
              <li>• Due date: January 31</li>
              <li>• Paper deadline: October 31</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Need Help?</h3>
          <p className="text-blue-700 mb-2">Talk to a tax pro about your specific situation.</p>
          <Link href="/how-to/how-to-find-a-good-cpa-or-tax-preparer" className="text-blue-600 hover:underline font-medium">
            Get matched to a vetted preparer in minutes →
          </Link>
        </div>

        <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 my-8">
          <p className="text-gray-700 text-sm">
            <strong>Disclaimer:</strong> This article is for general education only and not tax or legal advice. 
            Tax rules change and vary by region—consult a professional about your situation.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is online tax filing safe?</h3>
              <p className="text-gray-700">
                Yes—use reputable software with encryption and multi-factor authentication. 
                Stick to well-known providers and avoid suspicious offers.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How long do refunds take?</h3>
              <p className="text-gray-700">
                Refund timing varies by country and whether you use direct deposit or cheque. 
                Direct deposit is typically 1-3 weeks, while paper checks take 4-6 weeks.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I start and finish later?</h3>
              <p className="text-gray-700">
                Yes—save progress and resume. Most online software automatically saves your work 
                and lets you log back in to continue where you left off.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if I made a mistake after filing?</h3>
              <p className="text-gray-700">
                You can file an amended return to correct errors. Small math mistakes are often 
                corrected automatically by the tax authority.
              </p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-choose-standard-vs-itemized-deductions" 
              className="block p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors"
            >
              <h3 className="font-semibold text-yellow-900">Standard vs Itemized →</h3>
              <p className="text-sm text-yellow-700 mt-1">Maximize your deductions</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-reduce-taxes-legally-credits-and-deductions" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Reduce Taxes Legally →</h3>
              <p className="text-sm text-green-700 mt-1">Credits and deduction strategies</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}