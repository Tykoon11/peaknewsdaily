import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Open a Business Bank Account: Requirements & Steps',
  description: 'What you need to open a business bank account—documents, entity info, and smart setup tips.',
}

export default function OpenBusinessBankAccountPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Open Business Bank Account</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white text-xl">
            🏦
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Banking & Accounts</p>
            <h1 className="text-4xl font-bold text-gray-900">How to open a business bank account (requirements)</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          What you need to open a business bank account—documents, entity info, and smart setup tips.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-orange-800 mb-2">Gather documents</h2>
          <ul className="text-orange-700 space-y-1">
            <li>Government-issued ID for owners</li>
            <li>Business registration/incorporation docs</li>
            <li>EIN/BN/Tax ID, operating name, address</li>
            <li>Partnership/operating agreement (if applicable)</li>
          </ul>
        </div>

        <h2>Choose the right account</h2>
        <p>Match your transaction volume and cash-deposit needs; confirm monthly fees, e-transfer limits, and merchant services options.</p>

        <h2>Apply online or in-branch</h2>
        <p>Complete the application, verify ownership, add authorized signers, and connect accounting software.</p>

        <h2>Separate business & personal</h2>
        <p>Use dedicated cards and accounts to keep books clean and protect liability status.</p>

        <h2>Add tools</h2>
        <p>Consider merchant accounts, expense cards for team members, and integrated invoicing.</p>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can sole proprietors open one?</h3>
              <p className="text-gray-700">Yes—bring your registration and tax ID (or SIN/SSN where allowed).</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do I need a business address?</h3>
              <p className="text-gray-700">Most banks require a legal address; some allow virtual offices with documentation.</p>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}