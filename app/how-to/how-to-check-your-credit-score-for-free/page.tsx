import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Check Your Credit Score Free (US & Canada)',
  description: 'Learn legit ways to check your credit score for free without hurting your credit. Includes US & Canada options, refresh rates, and privacy tips.',
}

export default function CheckCreditScoreFreePage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Check Credit Score Free</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-white text-xl">
            📊
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Credit Scores & Reports</p>
            <h1 className="text-4xl font-bold text-gray-900">How to check your credit score for free</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Learn legit ways to check your credit score for free without hurting your credit. Includes US & Canada options, refresh rates, and privacy tips.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-green-800 mb-2">The short answer</h2>
          <p className="text-green-700">You can see your score for free through your bank/credit card app, reputable score apps, or your credit bureau account. Soft pulls don't affect your score.</p>
        </div>

        <h2>What you'll use</h2>
        <ul>
          <li><strong>Banking apps</strong> (many show FICO®/VantageScore®)</li>
          <li><strong>Trusted apps</strong> (e.g., Credit Karma, Borrowell, etc.)</li>
          <li><strong>Credit bureau portals</strong> (US: Equifax/Experian/TransUnion; CA: Equifax Canada/TransUnion Canada)</li>
        </ul>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Step-by-step</h3>
          <ol className="text-blue-700 space-y-2">
            <li><strong>Pick a source:</strong> Start with your bank app; if not offered, use a trusted score app or bureau portal.</li>
            <li><strong>Verify identity:</strong> Provide legal name, DOB, address history, and answer KBA questions.</li>
            <li><strong>Read the model:</strong> Note whether it's FICO® or VantageScore® and the range (usually 300–850).</li>
            <li><strong>Check refresh cadence:</strong> Most free scores update weekly or monthly.</li>
            <li><strong>Turn on alerts:</strong> Get notified of major score changes or new accounts.</li>
            <li><strong>Compare across sources:</strong> Small differences are normal—models and bureaus vary. Track one source consistently.</li>
          </ol>
        </div>

        <h2>US vs Canada notes</h2>
        <ul>
          <li><strong>US:</strong> Multiple free options through card issuers; bureaus allow account creation for ongoing monitoring.</li>
          <li><strong>Canada:</strong> Common free options via major banks and apps; bureau portals also available.</li>
        </ul>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-purple-800 mb-4">Quick checklist</h3>
          <ul className="text-purple-700 space-y-1">
            <li>Soft pull only ✅</li>
            <li>Model + range noted ✅</li>
            <li>Alerts on ✅</li>
            <li>Recheck monthly ✅</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Does checking my own score lower it?</h3>
              <p className="text-gray-700">No—soft inquiry.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Why is my bank score different from Credit Karma?</h3>
              <p className="text-gray-700">Different models/bureaus.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How often should I check?</h3>
              <p className="text-gray-700">Monthly is fine; weekly if rebuilding.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-read-your-credit-report-line-by-line" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">Read Your Credit Report →</h3>
              <p className="text-sm text-blue-700 mt-1">Master every section line by line</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-improve-your-credit-score-in-30-90-days" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Improve Score Fast →</h3>
              <p className="text-sm text-green-700 mt-1">Quick wins in 30-90 days</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}