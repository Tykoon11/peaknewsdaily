import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Open a High-Yield Savings Account Online (Step-by-Step)',
  description: 'Compare APYs, check fees, and open a high-yield savings account online in minutes. Keep your cash liquid and earning more.',
}

export default function OpenHighYieldSavingsOnlinePage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">High-Yield Savings Online</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white text-xl">
            🏦
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Banking & Accounts</p>
            <h1 className="text-4xl font-bold text-gray-900">How to open a high-yield savings account online</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Compare APYs, check fees, and open a high-yield savings account online in minutes. Keep your cash liquid and earning more.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>Compare rates the right way</h2>
        <p>Focus on the ongoing APY (not just promos), compounding frequency, and minimum balance rules.</p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Confirm accessibility</h3>
          <ul className="text-blue-700 space-y-1">
            <li>Free ACH transfers in/out</li>
            <li>Reasonable transfer limits & timelines</li>
            <li>No monthly fees or sneaky maintenance charges</li>
          </ul>
        </div>

        <h2>Open the account (typical steps)</h2>
        <ol>
          <li>Gather ID + SIN/SSN (or equivalent) and address.</li>
          <li>Complete the online application.</li>
          <li>Link your main bank via micro-deposits or instant verification.</li>
          <li>Fund and set nicknames/alerts.</li>
        </ol>

        <h2>Set your savings system</h2>
        <p>Automate weekly or payday transfers and separate buckets (emergency, taxes, travel).</p>

        <h2>Keep your APY competitive</h2>
        <p>Rates change—review quarterly and switch if your APY lags.</p>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is my money locked?</h3>
              <p className="text-gray-700">No—HYSAs are liquid, unlike GICs/CDs.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Will opening affect credit?</h3>
              <p className="text-gray-700">Usually a soft pull; impact is minimal to none.</p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-choose-the-best-checking-account-with-no-fees" 
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900">← Best No-Fee Checking Accounts</h3>
              <p className="text-sm text-blue-700 mt-1">Choose the right checking account</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-switch-banks-without-missing-payments" 
              className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <h3 className="font-semibold text-green-900">Switch Banks Smoothly →</h3>
              <p className="text-sm text-green-700 mt-1">Move without missing payments</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}