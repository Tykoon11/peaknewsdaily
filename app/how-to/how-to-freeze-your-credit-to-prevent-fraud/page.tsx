import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Freeze Your Credit (Stop Fraud Fast)',
  description: 'Place and lift a credit freeze with each bureau to block new-account fraud. Includes US & Canada instructions.',
}

export default function FreezeCreditPreventFraudPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Freeze Credit</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-white text-xl">
            📊
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Credit Scores & Reports</p>
            <h1 className="text-4xl font-bold text-gray-900">How to freeze your credit to prevent fraud</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Place and lift a credit freeze with each bureau to block new-account fraud. Includes US & Canada instructions.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">What a freeze does</h2>
          <p className="text-blue-700">It blocks new creditors from pulling your file—stopping most new-account fraud. It doesn't affect existing accounts or your score.</p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">How to freeze</h3>
          <ul className="text-green-700 space-y-2">
            <li><strong>US:</strong> Place freezes at Equifax, Experian, TransUnion individually.</li>
            <li><strong>Canada:</strong> Place freezes/alerts at Equifax Canada and TransUnion Canada.</li>
            <li>Keep PINs/passwords safe.</li>
            <li>Temporarily lift (thaw) when you apply for credit.</li>
          </ul>
        </div>

        <h2>When to use</h2>
        <p>After data breaches, lost ID, or suspicious inquiries. Pair with account alerts and strong passwords.</p>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Does a freeze cost money?</h3>
              <p className="text-gray-700">Free in the US and Canada for consumers.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How long does it take to lift a freeze?</h3>
              <p className="text-gray-700">Usually immediate online, up to 24 hours by phone.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Will it affect my current accounts?</h3>
              <p className="text-gray-700">No, only blocks new credit applications. Existing accounts work normally.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-get-a-secured-credit-card-and-upgrade-later" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">← Get Secured Card</h3>
              <p className="text-sm text-blue-700 mt-1">Build credit safely</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/category/how-to" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">More How-To Guides →</h3>
              <p className="text-sm text-green-700 mt-1">Explore all financial topics</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}