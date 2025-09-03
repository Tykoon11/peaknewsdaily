import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Negotiate Bills & Subscriptions (Pro Scripts)',
  description: 'Lower your phone, internet, and subscription costs with proven call scripts and email templates. Save in 15 minutes.',
}

export default function NegotiateBillsScriptsPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Negotiate Bills Scripts</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white text-xl">
            💰
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Budgeting & Saving</p>
            <h1 className="text-4xl font-bold text-gray-900">How to negotiate bills and subscriptions (scripts)</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Lower your phone, internet, and subscription costs with proven call scripts and email templates. Save in 15 minutes.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>Before you call</h2>
        <ul>
          <li>Check your usage and contract terms.</li>
          <li>Gather competitor offers.</li>
          <li>Decide your "walk‑away" threshold.</li>
        </ul>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Phone/Internet script (call)</h3>
          <div className="text-blue-700 space-y-4">
            <p><strong>You:</strong> "Hi, I've been a customer for __ years. My bill is $**. I saw promos at $**. I want to stay, but the price no longer works for me. Can you review my account for a loyalty discount or match that rate?"</p>
            
            <p><strong>If no:</strong> "Could you connect me with Customer Retentions? I'd like to explore plans that fit my budget."</p>
            
            <p><strong>With Retentions:</strong> "I value your service, but I need to get to $__ all‑in. What options or credits can we apply today?"</p>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Subscription cancellation‑save script (chat/email)</h3>
          <p className="text-green-700">"Hi, I'd like to cancel my subscription effective today. I've enjoyed the service but am cutting expenses. If there's a lower tier or discount you can offer to keep me at $__/month, I'm open to staying."</p>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-orange-800 mb-4">Medical/dental payment plan</h3>
          <p className="text-orange-700">"I can pay $__ today and $__ monthly. Can we set a 0% plan and remove late fees if I pay on time?"</p>
        </div>

        <h2>After the call</h2>
        <ul>
          <li>Ask them to confirm new price, term, fees via email.</li>
          <li>Set a reminder 11 months later to renegotiate again.</li>
        </ul>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How often does this work?</h3>
              <p className="text-gray-700">Often‑providers prefer discounts over losing you.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Will my speed/features change?</h3>
              <p className="text-gray-700">Confirm before accepting any new plan.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I stack offers?</h3>
              <p className="text-gray-700">Try: loyalty credit + promo plan + equipment fee waiver.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-save-money-on-a-low-income-practical-steps" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">← Save Money on Low Income</h3>
              <p className="text-sm text-blue-700 mt-1">Practical money-saving strategies</p>
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