import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Track Business Expenses for Taxes: Complete Guide',
  description: 'Organize deductible expenses with proper documentation, categorization, and record-keeping. Maximize tax savings while staying compliant with IRS requirements.',
}

export default function HowToTrackBusinessExpensesForTaxes() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
        <a href="/category/how-to" className="hover:text-pink-600">How-To Guides</a>
        <span>/</span>
        <span className="text-gray-900">Track Business Expenses for Taxes</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center text-white mr-3">
            📊
          </div>
          <span className="text-pink-600 font-medium">Business & Startup Finance</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          How to Track Business Expenses for Taxes: Complete Guide
        </h1>
        <p className="text-xl text-gray-600">
          Organize deductible expenses with proper documentation, categorization, and record-keeping. Maximize tax savings while staying compliant with IRS requirements.
        </p>
      </div>

      <article className="prose prose-lg max-w-none">
        <div className="bg-pink-50 border-l-4 border-pink-600 p-6 mb-8">
          <h3 className="text-lg font-semibold text-pink-800 mb-2">📋 Tax-Ready Expense Tracking</h3>
          <p className="text-pink-700">
            Track every business expense with receipts, categorize by tax purpose, document business purpose clearly, and maintain organized digital records. Set up systems that capture expenses automatically when possible.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold mb-4">Good Records Save Taxes and Prevent Audit Problems</h3>
          <p className="mb-4">
            Proper expense tracking can save thousands in taxes through legitimate deductions while protecting you during IRS audits. Poor records lead to disallowed deductions, penalties, and unnecessary stress. The IRS requires contemporaneous records with specific documentation standards.
          </p>
          <p>
            This guide shows you exactly how to track expenses, what documentation the IRS requires, how to categorize expenses for maximum deductions, and which tools make the process easiest.
          </p>
        </div>

        <h2>Deductible Business Expense Categories</h2>

        <p>Understanding expense categories helps ensure you capture all legitimate deductions.</p>

        <h3>Common Business Deductions</h3>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Operating Expenses</h4>
            <ul className="text-green-700 space-y-2">
              <li>• Rent and utilities</li>
              <li>• Office supplies and equipment</li>
              <li>• Software and subscriptions</li>
              <li>• Phone and internet</li>
              <li>• Marketing and advertising</li>
              <li>• Professional services</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-3">Travel and Transportation</h4>
            <ul className="text-blue-700 space-y-2">
              <li>• Business vehicle expenses</li>
              <li>• Airfare and lodging</li>
              <li>• Business meals (50% deductible)</li>
              <li>• Client entertainment</li>
              <li>• Conference and training costs</li>
              <li>• Parking and tolls</li>
            </ul>
          </div>
        </div>

        <h3>Special Deduction Categories</h3>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 mb-6">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Expense Type</th>
                <th className="px-4 py-3 text-left font-semibold">Deduction %</th>
                <th className="px-4 py-3 text-left font-semibold">Documentation Required</th>
                <th className="px-4 py-3 text-left font-semibold">Special Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 font-medium">Business meals</td>
                <td className="px-4 py-3">50%</td>
                <td className="px-4 py-3">Receipt + business purpose + attendees</td>
                <td className="px-4 py-3">Must be ordinary and necessary</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Home office</td>
                <td className="px-4 py-3">Business use %</td>
                <td className="px-4 py-3">Square footage calculation</td>
                <td className="px-4 py-3">Exclusive business use required</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Vehicle expenses</td>
                <td className="px-4 py-3">Business use %</td>
                <td className="px-4 py-3">Mileage log or actual expenses</td>
                <td className="px-4 py-3">Choose standard mileage or actual method</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Equipment purchases</td>
                <td className="px-4 py-3">100% or depreciated</td>
                <td className="px-4 py-3">Receipt + business use %</td>
                <td className="px-4 py-3">Section 179 deduction available</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Required Documentation Standards</h2>

        <p>IRS has specific requirements for expense documentation that must be met to claim deductions.</p>

        <h3>Receipt and Record Requirements</h3>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
          <h4 className="font-semibold text-red-800 mb-3">⚠️ IRS Documentation Rules</h4>
          <div className="space-y-3 text-red-700">
            <p><strong>All expenses over $75:</strong> Must have receipt or invoice</p>
            <p><strong>All expenses regardless of amount:</strong> Must document business purpose</p>
            <p><strong>Travel and entertainment:</strong> Requires who, what, when, where, why, and how much</p>
            <p><strong>Vehicle expenses:</strong> Contemporaneous mileage log required</p>
            <p><strong>Record retention:</strong> Keep records for 3-7 years depending on circumstances</p>
          </div>
        </div>

        <h3>Essential Information for Each Expense</h3>

        <div className="space-y-4 my-8">
          <div className="border-l-4 border-pink-600 pl-6">
            <h4 className="font-semibold text-pink-800 mb-2">Receipt Information</h4>
            <p className="text-gray-700">Date, amount, vendor name, description of goods/services, payment method. Digital photos acceptable if clear and complete.</p>
          </div>
          
          <div className="border-l-4 border-blue-600 pl-6">
            <h4 className="font-semibold text-blue-800 mb-2">Business Purpose</h4>
            <p className="text-gray-700">Specific business reason, client or project related, how expense benefits the business. Generic descriptions like "business meeting" are insufficient.</p>
          </div>
          
          <div className="border-l-4 border-green-600 pl-6">
            <h4 className="font-semibold text-green-800 mb-2">Supporting Details</h4>
            <p className="text-gray-700">For meals: attendees and business topics discussed. For travel: destination, business purpose, duration. For equipment: business use percentage.</p>
          </div>
        </div>

        <h2>Expense Tracking Systems and Tools</h2>

        <p>Choose tools that match your business size and complexity while ensuring compliance.</p>

        <h3>Digital Expense Tracking Options</h3>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Accounting Software</h4>
            <ul className="text-green-700 space-y-2">
              <li>• QuickBooks Online/Desktop</li>
              <li>• Xero (cloud-based)</li>
              <li>• FreshBooks (service businesses)</li>
              <li>• Wave (free for small businesses)</li>
              <li>• Sage Business Cloud</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-3">Mobile Expense Apps</h4>
            <ul className="text-blue-700 space-y-2">
              <li>• Expensify (receipt scanning)</li>
              <li>• Receipt Bank/Dext</li>
              <li>• Shoeboxed (outsourced data entry)</li>
              <li>• MileIQ (mileage tracking)</li>
              <li>• Bank mobile apps with expense coding</li>
            </ul>
          </div>
        </div>

        <h3>Automated Expense Capture</h3>

        <div className="bg-pink-50 border-l-4 border-pink-500 p-6 my-8">
          <h3 className="font-semibold mb-2">🔄 Automation Setup Checklist</h3>
          <ul className="mt-2 space-y-1">
            <li>☐ Connect business bank accounts to accounting software</li>
            <li>☐ Link business credit cards for automatic transaction import</li>
            <li>☐ Set up receipt forwarding email (receipts@expensify.com)</li>
            <li>☐ Install mobile apps for immediate receipt capture</li>
            <li>☐ Configure expense categories and tax codes</li>
            <li>☐ Set up approval workflows if needed</li>
            <li>☐ Create recurring entries for regular expenses</li>
            <li>☐ Enable mileage tracking for business vehicles</li>
          </ul>
        </div>

        <h2>Mixed Personal/Business Expenses</h2>

        <p>Handle expenses that serve both business and personal purposes carefully to maintain compliance.</p>

        <h3>Home Office Deduction</h3>

        <div className="space-y-4 my-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Simplified Method</h4>
            <p className="text-gray-600 mb-2">$5 per square foot up to 300 sq ft (maximum $1,500 deduction)</p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Easier calculation and record keeping</li>
              <li>• No depreciation recapture on home sale</li>
              <li>• Cannot deduct actual home expenses</li>
              <li>• Good for occasional home office use</li>
            </ul>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 bg-pink-50">
            <h4 className="font-semibold mb-2">Actual Expense Method</h4>
            <p className="text-gray-600 mb-2">Deduct percentage of home expenses equal to office percentage of home</p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Can deduct mortgage interest, property taxes, utilities</li>
              <li>• Requires detailed record keeping</li>
              <li>• May trigger depreciation recapture</li>
              <li>• Better for dedicated home offices</li>
            </ul>
          </div>
        </div>

        <h3>Vehicle Expense Tracking</h3>

        <div className="bg-yellow-50 p-6 rounded-lg my-8">
          <h4 className="font-semibold text-yellow-800 mb-4">Mileage Log Requirements</h4>
          <p className="text-yellow-700 mb-3">
            IRS requires contemporaneous records of business mileage. You cannot recreate logs from memory after the fact. Each business trip must include: date, destination, business purpose, odometer readings, total miles.
          </p>
          <div className="bg-white p-4 rounded border">
            <p className="font-semibold mb-2">Sample Entry:</p>
            <p className="text-sm text-gray-600">3/15/2024 - Client meeting at ABC Corp, 123 Main St - Start: 45,678 End: 45,698 - 20 miles - Business purpose: Quarterly review meeting</p>
          </div>
        </div>

        <h2>Organizing Records for Tax Time</h2>

        <p>Systematic organization makes tax preparation easier and audit defense stronger.</p>

        <h3>Filing System Organization</h3>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Digital Organization</h4>
            <ul className="text-green-700 space-y-2">
              <li>• Folder structure by tax year and category</li>
              <li>• Cloud storage with automatic backup</li>
              <li>• Consistent file naming conventions</li>
              <li>• OCR for searchable documents</li>
              <li>• Regular exports from accounting software</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-3">Physical Backup</h4>
            <ul className="text-blue-700 space-y-2">
              <li>• Store original receipts for major purchases</li>
              <li>• Monthly filing of important documents</li>
              <li>• Separate binder/folder for each tax year</li>
              <li>• Multiple storage locations for security</li>
              <li>• Annual archive of closed tax years</li>
            </ul>
          </div>
        </div>

        <h3>Year-End Tax Preparation</h3>

        <div className="bg-pink-50 border-l-4 border-pink-500 p-6 my-8">
          <h3 className="font-semibold mb-2">📅 Year-End Tax Prep Checklist</h3>
          <ul className="mt-2 space-y-1">
            <li>☐ Run detailed expense reports by category</li>
            <li>☐ Reconcile credit card and bank statements</li>
            <li>☐ Verify all receipts are captured and categorized</li>
            <li>☐ Calculate home office and vehicle percentages</li>
            <li>☐ Gather 1099s and tax forms from vendors</li>
            <li>☐ Review depreciation schedules for equipment</li>
            <li>☐ Document any cash transactions</li>
            <li>☐ Prepare summary reports for tax preparer</li>
            <li>☐ Archive completed tax year records</li>
          </ul>
        </div>

        <h2>Audit Defense and Compliance</h2>

        <p>Proper documentation and record-keeping provide strong audit protection.</p>

        <h3>Common Audit Triggers</h3>

        <ul>
          <li><strong>Excessive deductions:</strong> Deductions far above industry averages</li>
          <li><strong>Home office claims:</strong> Especially if large percentage of income</li>
          <li><strong>Travel and entertainment:</strong> High amounts without clear business purpose</li>
          <li><strong>Vehicle expenses:</strong> 100% business use claims are scrutinized</li>
          <li><strong>Cash transactions:</strong> Large cash expenses without documentation</li>
          <li><strong>Round numbers:</strong> Estimated amounts rather than actual receipts</li>
        </ul>

        <h2>Related Guides</h2>
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <Link href="/how-to/how-to-separate-business-personal-finances" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Separate Business Personal Finances</h3>
            <p className="text-pink-600 text-sm mt-2">Clean separation simplifies expense tracking</p>
          </Link>
          <Link href="/how-to/how-to-choose-business-banking-and-credit-cards" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Choose Business Banking</h3>
            <p className="text-pink-600 text-sm mt-2">Right accounts support expense tracking</p>
          </Link>
          <Link href="/how-to/how-to-write-a-simple-business-budget" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Write Simple Business Budget</h3>
            <p className="text-pink-600 text-sm mt-2">Budgeting helps plan and track expenses</p>
          </Link>
          <Link href="/how-to/how-to-choose-business-entity-llc-corp-sole-prop" 
                className="block p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors">
            <h3 className="font-semibold text-pink-800">Choose Business Entity</h3>
            <p className="text-pink-600 text-sm mt-2">Entity type affects tax deduction rules</p>
          </Link>
        </div>
      </article>

      <section className="mt-12 border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">What happens if I lose a receipt?</h3>
            <p className="text-gray-600">
              For expenses under $75, you can recreate reasonable documentation. For larger expenses, try to get a duplicate receipt from the vendor, check bank/credit card records, or create a written explanation with supporting evidence.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I deduct meals with no one else present?</h3>
            <p className="text-gray-600">
              Generally no, unless you are traveling overnight on business. Business meals typically require business discussion with clients, customers, or business associates to be deductible.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">How long should I keep expense records?</h3>
            <p className="text-gray-600">
              Keep records for at least 3 years from the tax return due date. For substantial underreporting (25%+), keep records 6 years. For fraud or no return filed, there is no statute of limitations.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Are digital receipts acceptable to the IRS?</h3>
            <p className="text-gray-600">
              Yes, as long as they contain all required information (date, amount, vendor, description). Take clear photos immediately and store in organized digital filing system with proper backups.
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
                  "name": "What happens if I lose a receipt?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For expenses under $75, recreate documentation. For larger amounts, get duplicate receipts or create written explanations."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "Can I deduct meals with no one else present?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Generally no, unless traveling overnight on business. Meals typically require business discussion."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long should I keep expense records?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "At least 3 years from tax return due date, or 6 years for substantial underreporting."
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