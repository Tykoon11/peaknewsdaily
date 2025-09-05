import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Handle Side Hustle Taxes (Self-Employment Guide)',
  description: 'Self-employment tax, quarterly payments, business deductions, and record-keeping for freelancers and side hustles.',
}

export default function SideHustleTaxesPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Side Hustle Taxes</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white text-xl">
            📋
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Taxes & Accounting</p>
            <h1 className="text-4xl font-bold text-gray-900">How to Handle Side Hustle Taxes (Self-Employment Guide)</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Self-employment tax, quarterly payments, business deductions, and record-keeping for freelancers and side hustles.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>When you need to pay self-employment tax</h2>
        
        <p>If you earn $400+ from self-employment (US), you must pay self-employment tax and file Schedule C.</p>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-yellow-900 mb-3">Self-Employment Tax Breakdown (US 2024)</h3>
          <ul className="text-yellow-700 text-sm space-y-2">
            <li>• <strong>Social Security:</strong> 12.4% on first $168,600 of net earnings</li>
            <li>• <strong>Medicare:</strong> 2.9% on all net earnings</li>
            <li>• <strong>Additional Medicare:</strong> 0.9% on earnings over $200K (single) / $250K (married)</li>
            <li>• <strong>Total rate:</strong> 15.3% for most side hustlers</li>
            <li>• <strong>Deduction:</strong> Can deduct half of SE tax as above-the-line deduction</li>
          </ul>
        </div>

        <h2>Record-keeping essentials</h2>
        
        <div className="space-y-4 my-8">
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
            <div>
              <p className="text-gray-700 font-medium">Separate business banking</p>
              <p className="text-gray-600 text-sm">Open dedicated business checking/savings accounts, use business credit card</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
            <div>
              <p className="text-gray-700 font-medium">Track all income sources</p>
              <p className="text-gray-600 text-sm">1099-NEC, cash payments, app-based earnings (Uber, Etsy, etc.)</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
            <div>
              <p className="text-gray-700 font-medium">Document deductible expenses</p>
              <p className="text-gray-600 text-sm">Keep receipts, categorize expenses, track mileage and home office use</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
            <div>
              <p className="text-gray-700 font-medium">Quarterly tax estimates</p>
              <p className="text-gray-600 text-sm">Set aside 25-30% of profits for taxes, make estimated payments</p>
            </div>
          </div>
        </div>

        <h2>Major business deductions</h2>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Direct Business Expenses</h4>
            <ul className="text-green-700 text-sm space-y-2">
              <li>• <strong>Equipment & supplies:</strong> Computer, software, tools</li>
              <li>• <strong>Marketing & advertising:</strong> Website, business cards</li>
              <li>• <strong>Professional services:</strong> Legal, accounting, consulting</li>
              <li>• <strong>Travel & meals:</strong> Business-related, 50% limit on meals</li>
              <li>• <strong>Education:</strong> Courses, certifications to improve skills</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Home Office & Vehicle</h4>
            <ul className="text-blue-700 text-sm space-y-2">
              <li>• <strong>Home office:</strong> $5/sq ft (max $1,500) or actual expenses</li>
              <li>• <strong>Vehicle expenses:</strong> 67¢/mile (2024) or actual costs</li>
              <li>• <strong>Internet & phone:</strong> Business portion of bills</li>
              <li>• <strong>Insurance:</strong> Business liability, equipment coverage</li>
              <li>• <strong>Subscriptions:</strong> Business-related software, memberships</li>
            </ul>
          </div>
        </div>

        <h2>Quarterly estimated payments</h2>
        
        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Quarter</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Period Covered</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Due Date</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Payment Method</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Q1</td>
                <td className="border border-gray-300 px-3 py-2">Jan 1 - Mar 31</td>
                <td className="border border-gray-300 px-3 py-2">April 15</td>
                <td className="border border-gray-300 px-3 py-2">IRS Direct Pay, EFTPS</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Q2</td>
                <td className="border border-gray-300 px-3 py-2">Apr 1 - May 31</td>
                <td className="border border-gray-300 px-3 py-2">June 17</td>
                <td className="border border-gray-300 px-3 py-2">Form 1040ES voucher</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Q3</td>
                <td className="border border-gray-300 px-3 py-2">Jun 1 - Aug 31</td>
                <td className="border border-gray-300 px-3 py-2">September 16</td>
                <td className="border border-gray-300 px-3 py-2">Online payment portals</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Q4</td>
                <td className="border border-gray-300 px-3 py-2">Sep 1 - Dec 31</td>
                <td className="border border-gray-300 px-3 py-2">January 15</td>
                <td className="border border-gray-300 px-3 py-2">Can file return instead</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-red-900 mb-3">Estimated Payment Safe Harbor</h3>
          <ul className="text-red-700 text-sm space-y-2">
            <li>• Pay 90% of current year tax owed, OR</li>
            <li>• Pay 100% of last year's tax (110% if AGI > $150K)</li>
            <li>• Underpayment penalty applies if you miss these targets</li>
            <li>• Exception: If you owe less than $1,000 at filing</li>
          </ul>
        </div>

        <h2>Regional considerations</h2>
        
        <div className="space-y-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 mb-4">🇺🇸 United States</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-blue-800">State tax obligations</p>
                <p className="text-blue-700 text-sm">Most states require quarterly estimates if you owe $500+, some have different rates</p>
              </div>
              <div>
                <p className="font-medium text-blue-800">City/local taxes</p>
                <p className="text-blue-700 text-sm">Some cities (NYC, Philadelphia) have separate business income taxes</p>
              </div>
              <div>
                <p className="font-medium text-blue-800">Business licenses</p>
                <p className="text-blue-700 text-sm">May need local business licenses even for small side hustles</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="font-semibold text-purple-900 mb-4">🇨🇦 Canada</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-purple-800">Self-employment threshold</p>
                <p className="text-purple-700 text-sm">Report all self-employment income, no minimum threshold</p>
              </div>
              <div>
                <p className="font-medium text-purple-800">CPP contributions</p>
                <p className="text-purple-700 text-sm">Must pay both employee and employer portions (10.9% combined in 2024)</p>
              </div>
              <div>
                <p className="font-medium text-purple-800">HST/GST registration</p>
                <p className="text-purple-700 text-sm">Required if earnings exceed $30,000 over 4 quarters</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-semibold text-green-900 mb-4">🇬🇧 UK</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-green-800">Class 2 & 4 NICs</p>
                <p className="text-green-700 text-sm">Class 2: £3.45/week if profits > £6,725. Class 4: 9% on £12,570-£50,270</p>
              </div>
              <div>
                <p className="font-medium text-green-800">Self Assessment</p>
                <p className="text-green-700 text-sm">Must register and file if self-employment income > £1,000</p>
              </div>
            </div>
          </div>
        </div>

        <h2>Common side hustle scenarios</h2>
        
        <div className="space-y-6 my-8">
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h4 className="font-semibold text-orange-800 mb-3">Freelance/Consulting Work</h4>
            <ul className="text-orange-700 text-sm space-y-2">
              <li>• <strong>Income:</strong> 1099-NEC from clients, track cash/check payments</li>
              <li>• <strong>Deductions:</strong> Home office, equipment, professional development</li>
              <li>• <strong>Quarterly taxes:</strong> Essential since no withholding</li>
              <li>• <strong>Business structure:</strong> Consider LLC for liability protection</li>
            </ul>
          </div>

          <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
            <h4 className="font-semibold text-cyan-800 mb-3">Gig Economy (Uber, DoorDash, etc.)</h4>
            <ul className="text-cyan-700 text-sm space-y-2">
              <li>• <strong>Income:</strong> 1099-K or 1099-NEC, track all platforms</li>
              <li>• <strong>Vehicle expenses:</strong> Mileage deduction usually better than actual</li>
              <li>• <strong>Phone & data:</strong> Business portion of cell phone bills</li>
              <li>• <strong>Supplies:</strong> Insulated bags, car cleaning, phone mounts</li>
            </ul>
          </div>

          <div className="bg-pink-50 border border-pink-200 rounded-lg p-6">
            <h4 className="font-semibold text-pink-800 mb-3">Online Sales (Etsy, eBay, Amazon)</h4>
            <ul className="text-pink-700 text-sm space-y-2">
              <li>• <strong>Income:</strong> 1099-K for payment processor transactions</li>
              <li>• <strong>COGS:</strong> Cost of materials, inventory, shipping supplies</li>
              <li>• <strong>Platform fees:</strong> Etsy fees, Amazon FBA costs, eBay final value fees</li>
              <li>• <strong>Storage:</strong> Home office space used for inventory</li>
            </ul>
          </div>
        </div>

        <h2>Tax planning strategies</h2>
        
        <div className="space-y-4 my-8">
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
            <div>
              <p className="text-gray-700 font-medium">Time deductible expenses</p>
              <p className="text-gray-600 text-sm">Buy equipment in high-income years, bunch expenses to maximize deductions</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
            <div>
              <p className="text-gray-700 font-medium">Contribute to SEP-IRA</p>
              <p className="text-gray-600 text-sm">Up to 25% of net self-employment income, maximum $69,000 (2024)</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
            <div>
              <p className="text-gray-700 font-medium">Consider business entity</p>
              <p className="text-gray-600 text-sm">S-Corp election can save on self-employment tax for higher earners</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
            <div>
              <p className="text-gray-700 font-medium">Track everything digitally</p>
              <p className="text-gray-600 text-sm">Use apps like QuickBooks Self-Employed, MileIQ, or Keeper for automation</p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">⚠️ Common Mistakes</h3>
          <ul className="text-yellow-700 space-y-2">
            <li>• <strong>Not making quarterly payments:</strong> Underpayment penalties can be significant</li>
            <li>• <strong>Mixing personal and business:</strong> Makes record-keeping and audits much harder</li>
            <li>• <strong>Overstating deductions:</strong> Home office and vehicle expenses are audit triggers</li>
            <li>• <strong>Not tracking mileage:</strong> Forgetting to log business miles throughout the year</li>
            <li>• <strong>Ignoring state obligations:</strong> Focusing only on federal tax requirements</li>
          </ul>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">💡 Pro Tip</h3>
          <p className="text-blue-700">
            Set up a separate "tax savings" account and automatically transfer 25-30% of each payment you receive. 
            This ensures you have money set aside for quarterly payments and won't be scrambled come tax time.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do I need to file taxes if I only made $200 from my side hustle?</h3>
              <p className="text-gray-700">
                In the US, you must file Schedule C if you had net earnings of $400+ from self-employment. 
                Even below that threshold, you should report the income as other income on your tax return.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I deduct my entire home internet bill?</h3>
              <p className="text-gray-700">
                Only the business portion is deductible. If you use internet 30% for business, you can deduct 30% 
                of the bill. Keep records showing your business usage percentage.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if my side hustle operates at a loss?</h3>
              <p className="text-gray-700">
                You can generally deduct business losses against other income, but the IRS has "hobby loss" rules. 
                You need to show profit motive and can't have losses more than 3 out of 5 years without scrutiny.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I form an LLC for my side hustle?</h3>
              <p className="text-gray-700">
                LLCs provide liability protection but don't change your tax obligations (still file Schedule C). 
                Consider if you have liability concerns, want to appear more professional, or plan to scale significantly.
              </p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-reduce-taxes-legally-credits-and-deductions" 
              className="block p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors"
            >
              <h3 className="font-semibold text-emerald-900">← Reduce Taxes Legally</h3>
              <p className="text-sm text-emerald-700 mt-1">Credits and deduction strategies</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-file-amended-returns-if-you-made-a-mistake" 
              className="block p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors"
            >
              <h3 className="font-semibold text-emerald-900">File Amended Returns →</h3>
              <p className="text-sm text-emerald-700 mt-1">Fix mistakes on filed tax returns</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}