import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Track Income and Expenses for Your Side Gig - Tax-Ready System',
  description: 'Master expense tracking and income recording for your side hustle. Learn tax-deductible categories, bookkeeping basics, and systems that save money at tax time.',
}

export default function TrackIncomeExpensesSideGig() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Track Income and Expenses for Side Gig</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center text-white text-xl">
            💼
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Side Hustles & Income</p>
            <h1 className="text-4xl font-bold text-gray-900">How to Track Income and Expenses for Your Side Gig</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Build a bulletproof expense tracking system that maximizes tax deductions, simplifies bookkeeping, and gives you clear insights into your side hustle profitability.
        </p>
      </header>

      <article>

        <div className="prose prose-lg max-w-none">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-8">
            <h2 className="text-lg font-semibold text-amber-800 mb-2">Tax Savings Alert</h2>
            <p className="text-amber-700 mb-0">
              Proper expense tracking can save you 25-40% on taxes. If you earn $20,000 from your 
              side hustle and track $6,000 in legitimate expenses, you could save $1,500-2,400 
              in taxes annually. The system pays for itself immediately.
            </p>
          </div>

          <h2>The Complete Side Gig Financial Tracking System</h2>
          
          <h3>1. Essential Tracking Categories</h3>
          <p>
            <strong>Know exactly what to track from day one.</strong> The IRS allows specific 
            business expense deductions, but you must have proper documentation. Missing receipts 
            = lost money.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-4">100% Tax-Deductible Business Expenses:</h4>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <strong>Equipment & Supplies:</strong>
                <ul className="mt-2 space-y-1">
                  <li>Computer, tablet, phone (business use %)</li>
                  <li>Software subscriptions & apps</li>
                  <li>Office supplies & materials</li>
                  <li>Tools specific to your work</li>
                  <li>Furniture (desk, chair) for work area</li>
                </ul>
              </div>
              
              <div>
                <strong>Services & Operations:</strong>
                <ul className="mt-2 space-y-1">
                  <li>Internet & phone bills (business %)</li>
                  <li>Professional services (lawyer, accountant)</li>
                  <li>Marketing & advertising costs</li>
                  <li>Website hosting & domain fees</li>
                  <li>Banking & payment processing fees</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg my-6">
            <h4 className="font-semibold text-blue-800 mb-3">Transportation & Travel:</h4>
            <ul className="text-blue-700 space-y-2">
              <li><strong>Vehicle expenses:</strong> Mileage (65.5¢/mile in 2023) OR actual expenses</li>
              <li><strong>Travel costs:</strong> Hotels, flights for business purposes</li>
              <li><strong>Local transportation:</strong> Uber, taxi, parking for business</li>
              <li><strong>Meals:</strong> 50% deductible for business meals with clients</li>
            </ul>
          </div>

          <h3>2. The Three-Tier Tracking System</h3>

          <h4>Tier 1: Real-Time Expense Capture (Mobile Apps)</h4>
          <p>
            <strong>Photograph every receipt immediately.</strong> Use your phone to capture 
            expenses the moment they happen. This eliminates the dreaded "shoebox full of 
            receipts" problem.
          </p>

          <div className="space-y-4 my-6">
            <div className="border-l-4 border-green-500 pl-4">
              <strong>Expensify (Free tier available):</strong> Photo receipt scanning, automatic categorization, mileage tracking
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <strong>Receipt Bank (now part of Dext):</strong> Bank integration, QuickBooks sync, receipt storage
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <strong>QuickBooks Self-Employed:</strong> All-in-one solution with tax preparation integration
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <strong>Wave Accounting:</strong> Completely free with receipt scanning and reporting
            </div>
          </div>

          <h4>Tier 2: Organized Categorization (Weekly Review)</h4>
          <p>
            Every Friday, spend 15 minutes reviewing and categorizing your captured expenses. 
            This prevents year-end panic and ensures nothing falls through the cracks.
          </p>

          <h4>Tier 3: Financial Analysis (Monthly Reports)</h4>
          <p>
            Monthly profit/loss statements help you understand which aspects of your side 
            hustle are most profitable and where you're overspending.
          </p>

          <h3>3. Income Tracking That Works</h3>

          <p>
            Track every dollar that comes in, not just payments from major clients. Small 
            payments add up and failing to report them can trigger IRS audits.
          </p>

          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg my-6">
            <h4 className="font-semibold text-yellow-800 mb-3">Income Sources to Track:</h4>
            <ul className="text-yellow-700 space-y-2">
              <li><strong>Direct client payments:</strong> Invoices, contracts, retainer fees</li>
              <li><strong>Platform earnings:</strong> Upwork, Fiverr, Uber, DoorDash, etc.</li>
              <li><strong>Digital product sales:</strong> Courses, ebooks, templates</li>
              <li><strong>Affiliate commissions:</strong> Referral income, partnership payments</li>
              <li><strong>Cash payments:</strong> Document immediately with written receipts</li>
              <li><strong>Bartering/trade:</strong> Value of services received in exchange</li>
            </ul>
          </div>

          <h3>4. The Separate Bank Account Strategy</h3>

          <p>
            <strong>Open a dedicated business checking account immediately.</strong> Mixing 
            personal and business finances is the #1 mistake that complicates taxes and 
            reduces credibility with the IRS.
          </p>

          <h4>Bank Account Setup Rules:</h4>
          <ul>
            <li><strong>Business checking:</strong> All income goes here first</li>
            <li><strong>Business savings:</strong> Set aside 25-30% for taxes immediately</li>
            <li><strong>Business credit card:</strong> Use only for business expenses</li>
            <li><strong>Personal transfers:</strong> Pay yourself officially with documented transfers</li>
          </ul>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6">
            <h4 className="font-semibold text-green-800 mb-3">Recommended Business Banking:</h4>
            <ul className="text-green-700 space-y-2">
              <li><strong>Chase Business Complete:</strong> No monthly fee with $2,000 minimum balance</li>
              <li><strong>Capital One Spark Classic:</strong> No monthly fees, good mobile app</li>
              <li><strong>Novo:</strong> Free business banking designed for freelancers</li>
              <li><strong>Azlo (now part of BBVA):</strong> No-fee digital business banking</li>
            </ul>
          </div>

          <h3>5. Mileage Tracking That Saves Money</h3>

          <p>
            Vehicle expenses are often the largest deduction for service-based side hustles. 
            In 2023, you can deduct 65.5¢ per business mile, which adds up quickly.
          </p>

          <h4>Automatic Mileage Tracking Apps:</h4>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="bg-gray-50 p-4 rounded">
              <h5 className="font-semibold mb-2">MileIQ</h5>
              <p className="text-sm text-gray-600">
                Automatic drive detection, easy swipe classification, 
                IRS-compliant reports. Premium: $5.99/month for unlimited tracking.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded">
              <h5 className="font-semibold mb-2">Everlance</h5>
              <p className="text-sm text-gray-600">
                GPS tracking, expense capture, multiple vehicle support. 
                Free version tracks 30 trips/month.
              </p>
            </div>
          </div>

          <h4>Manual Mileage Log Requirements:</h4>
          <p>For each business trip, document:</p>
          <ul>
            <li>Date and time</li>
            <li>Starting location and destination</li>
            <li>Business purpose</li>
            <li>Odometer readings (start/end)</li>
            <li>Total miles driven</li>
          </ul>

          <h3>6. Home Office Deduction Strategy</h3>

          <p>
            If you use part of your home exclusively for business, you can deduct home 
            office expenses. This is one of the most valuable deductions for side hustlers.
          </p>

          <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg my-6">
            <h4 className="font-semibold text-blue-800 mb-3">Two Home Office Deduction Methods:</h4>
            
            <div className="space-y-4">
              <div>
                <strong className="text-blue-800">Simplified Method:</strong>
                <p className="text-blue-700">$5 per square foot of home office space (max 300 sq ft = $1,500 deduction)</p>
              </div>
              
              <div>
                <strong className="text-blue-800">Actual Expense Method:</strong>
                <p className="text-blue-700">Calculate business percentage of home (office sq ft ÷ total home sq ft) × total home expenses</p>
              </div>
            </div>
          </div>

          <h4>What Qualifies for Home Office:</h4>
          <ul>
            <li>Used exclusively for business (not dual-purpose)</li>
            <li>Used regularly (not just occasionally)</li>
            <li>Either principal place of business OR used to meet clients</li>
          </ul>

          <h3>7. Quarterly Tax Planning</h3>

          <p>
            <strong>Don't wait until April to think about taxes.</strong> Side hustlers 
            earning over $400 annually must pay quarterly estimated taxes or face penalties.
          </p>

          <h4>Quarterly Tax Schedule for 2024:</h4>
          <div className="space-y-2 my-6">
            <div className="bg-gray-100 p-3 rounded">
              <strong>Q1 (Jan-Mar):</strong> Due April 15, 2024
            </div>
            <div className="bg-gray-100 p-3 rounded">
              <strong>Q2 (Apr-Jun):</strong> Due June 17, 2024
            </div>
            <div className="bg-gray-100 p-3 rounded">
              <strong>Q3 (Jul-Sep):</strong> Due September 16, 2024
            </div>
            <div className="bg-gray-100 p-3 rounded">
              <strong>Q4 (Oct-Dec):</strong> Due January 15, 2025
            </div>
          </div>

          <h4>Simple Tax Saving Formula:</h4>
          <p className="bg-gray-50 p-4 rounded-lg font-mono">
            (Total Income - Total Expenses) × Tax Rate = Tax Owed<br/>
            Example: ($15,000 - $4,000) × 25% = $2,750 tax liability
          </p>

          <h3>8. Record Keeping Best Practices</h3>

          <h4>The IRS 7-Year Rule</h4>
          <p>
            Keep all business records for at least 3 years (7 years if you underreported 
            income by 25%+). Store both physical and digital copies in organized systems.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-4">Essential Documents to Maintain:</h4>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <strong>Income Records:</strong>
                <ul className="mt-2 space-y-1">
                  <li>1099 forms from clients</li>
                  <li>Bank deposit records</li>
                  <li>PayPal/Venmo statements</li>
                  <li>Cash payment receipts</li>
                  <li>Invoice copies</li>
                </ul>
              </div>
              
              <div>
                <strong>Expense Documentation:</strong>
                <ul className="mt-2 space-y-1">
                  <li>Receipts (physical or digital)</li>
                  <li>Credit card statements</li>
                  <li>Bank statements</li>
                  <li>Mileage logs</li>
                  <li>Home office measurements</li>
                </ul>
              </div>
            </div>
          </div>

          <h3>9. Technology Stack for Effortless Tracking</h3>

          <h4>The Complete Free Solution:</h4>
          <ul>
            <li><strong>Wave Accounting:</strong> Free bookkeeping, invoicing, receipt scanning</li>
            <li><strong>Google Sheets:</strong> Custom expense tracking templates</li>
            <li><strong>Google Drive:</strong> Cloud storage for receipt photos</li>
            <li><strong>Built-in phone camera:</strong> Receipt capture on the go</li>
          </ul>

          <h4>The Premium Professional Stack:</h4>
          <ul>
            <li><strong>QuickBooks Self-Employed ($15/month):</strong> Full business accounting</li>
            <li><strong>Expensify ($9/month):</strong> Advanced receipt management</li>
            <li><strong>MileIQ ($5.99/month):</strong> Automatic mileage tracking</li>
            <li><strong>TaxAct or TurboTax:</strong> Tax preparation integration</li>
          </ul>

          <h3>10. Common Tracking Mistakes That Cost Money</h3>

          <div className="bg-red-50 border border-red-200 p-6 rounded-lg my-6">
            <h4 className="font-semibold text-red-800 mb-3">Expensive Mistakes to Avoid:</h4>
            <ul className="text-red-700 space-y-2">
              <li><strong>Mixing personal/business expenses:</strong> Makes taxes complex and reduces credibility</li>
              <li><strong>Not tracking small purchases:</strong> $5-20 expenses add up to hundreds in deductions</li>
              <li><strong>Forgetting to log mileage:</strong> Often the biggest deduction opportunity</li>
              <li><strong>No receipt backup system:</strong> Lost receipts = lost deductions</li>
              <li><strong>Year-end panic organization:</strong> Leads to missed deductions and errors</li>
              <li><strong>Not separating business percentage:</strong> Home office, vehicle use must be calculated properly</li>
            </ul>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
            <h3 className="text-lg font-semibold text-green-800 mb-2">Your 30-Day Action Plan</h3>
            <ol className="text-green-700 space-y-2">
              <li><strong>Week 1:</strong> Open business checking account and install expense tracking app</li>
              <li><strong>Week 2:</strong> Set up automatic mileage tracking and photograph all existing receipts</li>
              <li><strong>Week 3:</strong> Create organized filing system (digital and physical)</li>
              <li><strong>Week 4:</strong> Calculate quarterly tax estimate and set up automatic savings</li>
            </ol>
          </div>

          <p className="text-lg font-medium text-gray-800 mt-8">
            Remember: Every expense you don't track is money left on the table. A systematic 
            approach to financial tracking isn't just good business practice - it's a profit center 
            that pays you back in tax savings and business insights.
          </p>
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Related Side Hustle Guides</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/how-to/how-to-send-invoices-that-get-paid-fast" className="text-amber-600 hover:text-amber-700 hover:underline">
              → How to Send Invoices That Get Paid Fast
            </Link>
            <Link href="/how-to/how-to-save-for-taxes-as-a-freelancer" className="text-amber-600 hover:text-amber-700 hover:underline">
              → How to Save for Taxes as a Freelancer
            </Link>
            <Link href="/how-to/how-to-open-separate-bank-account-for-hustle" className="text-amber-600 hover:text-amber-700 hover:underline">
              → How to Open a Separate Bank Account for Your Hustle
            </Link>
            <Link href="/how-to/how-to-scale-side-hustle-into-business" className="text-amber-600 hover:text-amber-700 hover:underline">
              → How to Scale Your Side Hustle Into a Business
            </Link>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Do I need to track expenses under $25?</h3>
              <p className="text-gray-700">
                Yes, all business expenses are deductible regardless of amount. Small expenses 
                like coffee, parking fees, and office supplies add up to significant deductions 
                over time. Track everything.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Can I deduct meals when working from home?</h3>
              <p className="text-gray-700">
                Regular meals while working from home are not deductible. However, meals with 
                clients, business travel meals, and office snacks for client meetings may be 
                50% deductible. Keep detailed records of business purpose.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">What if I lose receipts or they fade?</h3>
              <p className="text-gray-700">
                Photograph receipts immediately after purchase using your phone. Store digital 
                copies in cloud storage. For faded receipts, you can sometimes recreate documentation 
                using bank/credit card statements plus business logs.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">How do I handle cash payments from clients?</h3>
              <p className="text-gray-700">
                Deposit all cash payments into your business bank account immediately. Create 
                written receipts documenting the date, amount, client name, and services provided. 
                Never mix cash payments with personal money.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Should I hire an accountant for my side hustle?</h3>
              <p className="text-gray-700">
                Consider hiring an accountant if you're earning over $25,000 annually from your 
                side hustle, have complex deductions, or feel overwhelmed by tax requirements. 
                The cost often pays for itself in tax savings and peace of mind.
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
                    "name": "Do I need to track expenses under $25?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, all business expenses are deductible regardless of amount. Small expenses like coffee, parking fees, and office supplies add up to significant deductions over time. Track everything."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I deduct meals when working from home?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Regular meals while working from home are not deductible. However, meals with clients, business travel meals, and office snacks for client meetings may be 50% deductible. Keep detailed records of business purpose."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What if I lose receipts or they fade?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Photograph receipts immediately after purchase using your phone. Store digital copies in cloud storage. For faded receipts, you can sometimes recreate documentation using bank/credit card statements plus business logs."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do I handle cash payments from clients?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Deposit all cash payments into your business bank account immediately. Create written receipts documenting the date, amount, client name, and services provided. Never mix cash payments with personal money."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Should I hire an accountant for my side hustle?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Consider hiring an accountant if you're earning over $25,000 annually from your side hustle, have complex deductions, or feel overwhelmed by tax requirements. The cost often pays for itself in tax savings and peace of mind."
                    }
                  }
                ]
              })
            }}
          />
        </section>
      </article>
    </main>
  )
}