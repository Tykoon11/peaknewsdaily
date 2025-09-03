import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Buy a House with Bad Credit: A Realistic 6-Step Plan',
  description: 'Yes, it\'s possible. Improve credit, increase down payment, use co-borrowers, and explore insured/alt-A options—without wrecking your finances.',
}

export default function BuyHouseBadCreditPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Buy House Bad Credit</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white text-xl">
            🏠
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Mortgages &amp; Real Estate</p>
            <h1 className="text-4xl font-bold text-gray-900">How to buy a house with bad credit (realistic plan)</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Yes, it's possible. Improve credit, increase down payment, use co-borrowers, and explore insured/alt-A options—without wrecking your finances.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Quick Answer</h2>
          <p className="text-blue-700">
            With bad credit, focus on (1) fixing report errors, (2) paying down revolving balances, (3) proving income stability, (4) increasing down payment/savings, (5) considering insured or alternative programs, and (6) adding a strong co-borrower. Aim for DTI/GDS-TDS that fits guidelines and build 3–6 months of reserves.
          </p>
        </div>

        <h2>What "bad credit" means (score bands; recent delinquencies)</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Credit Range</th>
                <th className="border border-gray-300 px-4 py-2">FICO Score</th>
                <th className="border border-gray-300 px-4 py-2">Options</th>
                <th className="border border-gray-300 px-4 py-2">Typical Requirements</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium text-green-700">Fair</td>
                <td className="border border-gray-300 px-4 py-2">580-669</td>
                <td className="border border-gray-300 px-4 py-2">FHA, VA, some conventional</td>
                <td className="border border-gray-300 px-4 py-2">3.5-10% down, stable income</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-medium text-yellow-700">Poor</td>
                <td className="border border-gray-300 px-4 py-2">500-579</td>
                <td className="border border-gray-300 px-4 py-2">FHA (10% down), portfolio lenders</td>
                <td className="border border-gray-300 px-4 py-2">10%+ down, compensating factors</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium text-red-700">Very Poor</td>
                <td className="border border-gray-300 px-4 py-2">&lt;500</td>
                <td className="border border-gray-300 px-4 py-2">Portfolio/alternative lenders</td>
                <td className="border border-gray-300 px-4 py-2">20%+ down, co-signer often needed</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>Recent negatives hurt most:</strong></p>
        <ul>
          <li>30+ day late payments in last 12 months</li>
          <li>Collections, charge-offs in last 24 months</li>
          <li>Foreclosure, bankruptcy in last 2-7 years</li>
          <li>High credit utilization (&gt;30%)</li>
        </ul>

        <h2>Clean-up sprint: dispute errors, lower utilization, add positive history</h2>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">60-Day Credit Sprint</h3>
          <ol className="text-green-700 space-y-2">
            <li><strong>Week 1-2:</strong> Pull all 3 credit reports, dispute any errors</li>
            <li><strong>Week 3-4:</strong> Pay down credit cards to &lt;10% utilization</li>
            <li><strong>Week 5-6:</strong> Add authorized user accounts, ask for goodwill deletions</li>
            <li><strong>Week 7-8:</strong> Apply for secured card if needed, monitor score changes</li>
          </ol>
        </div>

        <h2>Income stability and down-payment strategies</h2>
        <p><strong>Strengthen your income profile:</strong></p>
        <ul>
          <li>Stay in same job for at least 2 years before applying</li>
          <li>Document all income sources (overtime, bonuses, side work)</li>
          <li>If self-employed: 2+ years of tax returns, business bank statements</li>
          <li>Avoid job changes during mortgage process</li>
        </ul>

        <p><strong>Down payment strategies:</strong></p>
        <ul>
          <li>Higher down payment = lower lender risk = easier approval</li>
          <li>Consider gifts from family (follow gift letter requirements)</li>
          <li>Use first-time buyer programs (down payment assistance)</li>
          <li>Save 3-6 months of reserves beyond down payment</li>
        </ul>

        <h2>Programs &amp; paths: insured/alt-A, co-signers, rent-to-own cautions</h2>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Government-Backed Programs</h4>
            <ul className="text-blue-700 space-y-1 text-sm">
              <li><strong>FHA:</strong> 580+ score, 3.5% down</li>
              <li><strong>VA:</strong> No min score, no down payment</li>
              <li><strong>USDA:</strong> 640+ typically, rural areas</li>
              <li><strong>Canada:</strong> Insured mortgages &lt;20% down</li>
            </ul>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="font-semibold text-purple-800 mb-3">Alternative Options</h4>
            <ul className="text-purple-700 space-y-1 text-sm">
              <li><strong>Portfolio lenders:</strong> Keep loans in-house</li>
              <li><strong>Credit unions:</strong> Member-focused lending</li>
              <li><strong>Non-QM lenders:</strong> Alt-doc programs</li>
              <li><strong>Seller financing:</strong> Owner carries note</li>
            </ul>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">Rent-to-Own Cautions</h3>
          <ul className="text-red-700 space-y-1">
            <li>Often targets people with poor credit at inflated prices</li>
            <li>Most rent-to-own agreements favor the seller heavily</li>
            <li>High fees, little equity building, easy to lose deposit</li>
            <li><strong>Better alternative:</strong> Work on credit for 6-12 months instead</li>
          </ul>
        </div>

        <h2>Underwriting with compensating factors (reserves, LTV)</h2>
        <p><strong>Compensating factors lenders consider:</strong></p>
        <ul>
          <li><strong>Large down payment:</strong> 20%+ shows financial commitment</li>
          <li><strong>Cash reserves:</strong> 3-6 months of mortgage payments saved</li>
          <li><strong>Low debt-to-income:</strong> &lt;30% total monthly obligations</li>
          <li><strong>Stable employment:</strong> Same job/field for 2+ years</li>
          <li><strong>Co-borrower:</strong> Strong credit score and income</li>
          <li><strong>Rent history:</strong> 12+ months of on-time rent payments</li>
        </ul>

        <h2>90-day action plan with milestones</h2>
        <div className="space-y-4 my-8">
          <div className="bg-gray-100 border-l-4 border-gray-400 p-4">
            <h4 className="font-semibold text-gray-800">Days 1-30: Foundation</h4>
            <ul className="text-gray-700 text-sm space-y-1 mt-2">
              <li>Pull credit reports and dispute errors</li>
              <li>Pay down credit cards to &lt;10% utilization</li>
              <li>Start saving for down payment aggressively</li>
              <li>Research lenders and programs</li>
            </ul>
          </div>

          <div className="bg-blue-100 border-l-4 border-blue-400 p-4">
            <h4 className="font-semibold text-blue-800">Days 31-60: Building</h4>
            <ul className="text-blue-700 text-sm space-y-1 mt-2">
              <li>Monitor credit score improvements</li>
              <li>Continue income documentation gathering</li>
              <li>Build 3-6 months reserves</li>
              <li>Consider secured credit card for history</li>
            </ul>
          </div>

          <div className="bg-green-100 border-l-4 border-green-400 p-4">
            <h4 className="font-semibold text-green-800">Days 61-90: Application Ready</h4>
            <ul className="text-green-700 text-sm space-y-1 mt-2">
              <li>Apply for pre-approval with 2-3 lenders</li>
              <li>Compare loan offers and terms</li>
              <li>Start house hunting within approved range</li>
              <li>Have co-signer ready if needed</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What's the minimum credit score to qualify?</h3>
              <p className="text-gray-700">FHA allows 500+ with 10% down, 580+ with 3.5% down. Some portfolio lenders go lower with strong compensating factors.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Will I pay much higher rates?</h3>
              <p className="text-gray-700">Yes, expect 1-3% higher than prime rates. However, you can refinance to better rates once credit improves.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What are the risks of using a co-signer?</h3>
              <p className="text-gray-700">Co-signer is equally liable for the debt. Late payments hurt both credit scores. Consider impact on their debt ratios for future loans.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I consider rent-to-own?</h3>
              <p className="text-gray-700">Generally no. High fees, inflated prices, and terms favor sellers. Better to improve credit and save for conventional purchase.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-improve-your-credit-score-in-30-90-days" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">← Improve Credit Score Fast</h3>
              <p className="text-sm text-blue-700 mt-1">30-90 day action plan</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-save-for-a-down-payment-fast" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Save for Down Payment Fast →</h3>
              <p className="text-sm text-green-700 mt-1">9 proven tactics to hit your goal</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}