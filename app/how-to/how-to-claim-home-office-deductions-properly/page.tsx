import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Claim Home Office Deductions Properly (Avoid Audit Triggers)',
  description: 'Regular use, exclusive use rules, simplified vs actual methods, record-keeping, and audit protection.',
}

export default function ClaimHomeOfficeDeductionsPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Home Office Deductions</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white text-xl">
            📋
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Taxes & Accounting</p>
            <h1 className="text-4xl font-bold text-gray-900">How to Claim Home Office Deductions Properly (Avoid Audit Triggers)</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Regular use, exclusive use rules, simplified vs actual methods, record-keeping, and audit protection.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>Qualification requirements</h2>
        
        <p>The home office deduction has strict IRS requirements. Meeting both "exclusive use" and "regular use" tests is critical for audit protection.</p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">✅ Qualifies for Deduction</h4>
            <ul className="text-green-700 text-sm space-y-2">
              <li>• Dedicated room used only for business</li>
              <li>• Section of room with clear business boundary</li>
              <li>• Separate entrance used only for business</li>
              <li>• Storage area for business inventory/supplies</li>
              <li>• Your principal place of business</li>
              <li>• Used regularly for client/customer meetings</li>
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="font-semibold text-red-800 mb-3">❌ Does NOT Qualify</h4>
            <ul className="text-red-700 text-sm space-y-2">
              <li>• Kitchen table used occasionally for work</li>
              <li>• Bedroom corner with no clear separation</li>
              <li>• Living room where TV is also watched</li>
              <li>• Guest room bed doubles as filing space</li>
              <li>• Any space with personal/family use</li>
              <li>• Office used only a few times per month</li>
            </ul>
          </div>
        </div>

        <h2>Two calculation methods</h2>
        
        <div className="space-y-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Simplified Method (Form 8829 not required)</h4>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-blue-800">Calculation</p>
                <p className="text-blue-700 text-sm">$5 per square foot, up to 300 square feet maximum</p>
              </div>
              <div>
                <p className="font-medium text-blue-800">Maximum deduction</p>
                <p className="text-blue-700 text-sm">$1,500 per year (300 sq ft × $5)</p>
              </div>
              <div>
                <p className="font-medium text-blue-800">Benefits</p>
                <p className="text-blue-700 text-sm">No depreciation recapture, simpler record-keeping</p>
              </div>
              <div>
                <p className="font-medium text-blue-800">Best for</p>
                <p className="text-blue-700 text-sm">Small offices, minimal home expenses, occasional use</p>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h4 className="font-semibold text-orange-800 mb-3">Actual Expense Method (Form 8829 required)</h4>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-orange-800">Calculation</p>
                <p className="text-orange-700 text-sm">(Office sq ft ÷ Total home sq ft) × Home expenses</p>
              </div>
              <div>
                <p className="font-medium text-orange-800">Deductible expenses</p>
                <p className="text-orange-700 text-sm">Mortgage interest, property tax, utilities, repairs, depreciation</p>
              </div>
              <div>
                <p className="font-medium text-orange-800">Complexity</p>
                <p className="text-orange-700 text-sm">Detailed records required, depreciation recapture on sale</p>
              </div>
              <div>
                <p className="font-medium text-orange-800">Best for</p>
                <p className="text-orange-700 text-sm">Large offices, high home expenses, significant business use</p>
              </div>
            </div>
          </div>
        </div>

        <h2>Actual expense deductions breakdown</h2>
        
        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Expense Category</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Deduction Method</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Direct expenses</td>
                <td className="border border-gray-300 px-3 py-2">100% deductible</td>
                <td className="border border-gray-300 px-3 py-2">Office repairs, painting office only</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Indirect expenses</td>
                <td className="border border-gray-300 px-3 py-2">Business percentage</td>
                <td className="border border-gray-300 px-3 py-2">Utilities, insurance, mortgage interest</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Unrelated expenses</td>
                <td className="border border-gray-300 px-3 py-2">Not deductible</td>
                <td className="border border-gray-300 px-3 py-2">Lawn care, bedroom repairs</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Depreciation</td>
                <td className="border border-gray-300 px-3 py-2">Business percentage × rate</td>
                <td className="border border-gray-300 px-3 py-2">Home value × 2.564% × business use</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Record-keeping essentials</h2>
        
        <div className="space-y-4 my-8">
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
            <div>
              <p className="text-gray-700 font-medium">Document office space</p>
              <p className="text-gray-600 text-sm">Photos of office setup, floor plan with measurements, exclusive use proof</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
            <div>
              <p className="text-gray-700 font-medium">Track business use percentage</p>
              <p className="text-gray-600 text-sm">Hours worked from home, business vs personal usage logs</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
            <div>
              <p className="text-gray-700 font-medium">Save all receipts</p>
              <p className="text-gray-600 text-sm">Utilities, repairs, office supplies, internet, phone bills</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
            <div>
              <p className="text-gray-700 font-medium">Maintain business calendar</p>
              <p className="text-gray-600 text-sm">Client meetings, work hours, business activities in home office</p>
            </div>
          </div>
        </div>

        <h2>Special considerations for employees</h2>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-yellow-900 mb-4">W-2 Employees: Limited Options</h3>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-yellow-800">TCJA impact (2018-2025)</p>
              <p className="text-yellow-700 text-sm">Miscellaneous itemized deductions suspended, including unreimbursed employee expenses</p>
            </div>
            <div>
              <p className="font-medium text-yellow-800">Exceptions</p>
              <p className="text-yellow-700 text-sm">Armed forces reservists, qualified performing artists, fee-basis state/local officials</p>
            </div>
            <div>
              <p className="font-medium text-yellow-800">Employer reimbursement</p>
              <p className="text-yellow-700 text-sm">Ask employer for accountable plan reimbursement instead</p>
            </div>
          </div>
        </div>

        <h2>Regional differences</h2>
        
        <div className="space-y-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 mb-4">🇺🇸 United States</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-blue-800">Self-employed only</p>
                <p className="text-blue-700 text-sm">Schedule C filers, partners, S-corp owners (with restrictions)</p>
              </div>
              <div>
                <p className="font-medium text-blue-800">Depreciation recapture</p>
                <p className="text-blue-700 text-sm">Must recapture depreciation when home is sold (actual expense method)</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="font-semibold text-purple-900 mb-4">🇨🇦 Canada</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-purple-800">Employees & self-employed</p>
                <p className="text-purple-700 text-sm">Both can claim if working from home regularly</p>
              </div>
              <div>
                <p className="font-medium text-purple-800">Temporary flat rate</p>
                <p className="text-purple-700 text-sm">$2/day up to $500 (simplified method for COVID period)</p>
              </div>
              <div>
                <p className="font-medium text-purple-800">Detailed method</p>
                <p className="text-purple-700 text-sm">Reasonable percentage of home expenses</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-semibold text-green-900 mb-4">🇬🇧 UK</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-green-800">Working from home allowance</p>
                <p className="text-green-700 text-sm">£6 per week tax-free without receipts</p>
              </div>
              <div>
                <p className="font-medium text-green-800">Actual costs method</p>
                <p className="text-green-700 text-sm">Claim higher amounts with proper documentation</p>
              </div>
            </div>
          </div>
        </div>

        <h2>Audit protection strategies</h2>
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">⚠️ Common Audit Triggers</h3>
          <ul className="text-red-700 space-y-2">
            <li>• <strong>Claiming entire home:</strong> Unreasonable business percentage (over 30% of home)</li>
            <li>• <strong>Mixed-use spaces:</strong> Claiming living room, bedroom, or kitchen as office</li>
            <li>• <strong>Excessive utilities:</strong> 100% of internet, phone bills for partial business use</li>
            <li>• <strong>No business income:</strong> Large home office deduction with minimal earnings</li>
            <li>• <strong>Inconsistent years:</strong> Claiming different square footage year to year</li>
          </ul>
        </div>

        <div className="space-y-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Documentation Best Practices</h4>
            <div className="space-y-2">
              <p className="text-green-700 text-sm">Take photos showing exclusive business use</p>
              <p className="text-green-700 text-sm">Maintain detailed calendar of business activities</p>
              <p className="text-green-700 text-sm">Save all receipts with clear business purpose</p>
              <p className="text-green-700 text-sm">Keep consistent square footage measurements</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Conservative Approach</h4>
            <div className="space-y-2">
              <p className="text-blue-700 text-sm">Use simplified method if close to $1,500 limit</p>
              <p className="text-blue-700 text-sm">Claim reasonable percentage of home (10-25%)</p>
              <p className="text-blue-700 text-sm">Avoid round numbers (exactly 20%, 25%, etc.)</p>
              <p className="text-blue-700 text-sm">Don't claim every possible expense</p>
            </div>
          </div>
        </div>

        <h2>Calculation example</h2>
        
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-gray-900 mb-4">Sample Calculation (Actual Expense Method)</h3>
          <div className="space-y-2 text-sm">
            <p><strong>Home details:</strong> 2,000 sq ft total, 200 sq ft dedicated office (10%)</p>
            <p><strong>Annual expenses:</strong></p>
            <ul className="ml-4 space-y-1">
              <li>• Mortgage interest: $12,000 × 10% = $1,200</li>
              <li>• Property taxes: $6,000 × 10% = $600</li>
              <li>• Utilities: $2,400 × 10% = $240</li>
              <li>• Home insurance: $1,200 × 10% = $120</li>
              <li>• Depreciation: $300,000 × 2.564% × 10% = $769</li>
            </ul>
            <p><strong>Total deduction: $2,929</strong></p>
            <p className="text-gray-600">Note: Compare to $1,000 simplified method (200 sq ft × $5)</p>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">💡 Pro Tip</h3>
          <p className="text-blue-700">
            If you move or change your home office setup, document the change immediately. Take photos, update measurements, 
            and note the date. This shows the IRS you're maintaining accurate records and not inflating deductions.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I claim a home office if I'm employed by someone else?</h3>
              <p className="text-gray-700">
                For tax years 2018-2025, W-2 employees generally cannot deduct home office expenses due to TCJA changes. 
                Exceptions include armed forces reservists and certain performing artists. Check with your employer about 
                reimbursement instead.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if I use my home office for both business and personal activities?</h3>
              <p className="text-gray-700">
                You cannot claim the home office deduction if the space has any personal use. The "exclusive use" test 
                requires the space to be used ONLY for business. Consider dedicating a specific area exclusively for work.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I choose simplified or actual expense method?</h3>
              <p className="text-gray-700">
                Calculate both methods annually and choose the higher deduction. Generally, actual expense method provides 
                larger deductions for offices over 300 sq ft or homes with high expenses, but requires more documentation.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What happens to my deduction if I sell my home?</h3>
              <p className="text-gray-700">
                If you used the actual expense method and claimed depreciation, you must "recapture" that depreciation 
                when you sell, paying taxes on it. The simplified method avoids this complication entirely.
              </p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-maximize-rrsp-401k-isa-tax-shelters" 
              className="block p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors"
            >
              <h3 className="font-semibold text-emerald-900">← Maximize Tax Shelters</h3>
              <p className="text-sm text-emerald-700 mt-1">RRSP, 401(k), and ISA strategies</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-find-a-good-cpa-or-tax-preparer" 
              className="block p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors"
            >
              <h3 className="font-semibold text-emerald-900">Find a Good CPA →</h3>
              <p className="text-sm text-emerald-700 mt-1">Choose the right tax professional</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}