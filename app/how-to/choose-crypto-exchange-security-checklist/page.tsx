import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Crypto Exchange: A Practical Security Checklist',
  description: 'Use this 12-point checklist to choose a safe crypto exchange—security, transparency, fees, liquidity, and withdrawal reliability.',
}

export default function ChooseCryptoExchangePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">
              ₿ Crypto & Web3
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Best Crypto Exchange: A Practical Security Checklist
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use this 12-point checklist to choose a safe crypto exchange—security, transparency, fees, liquidity, and withdrawal reliability.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Checklist (12 Points)</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
                  <p className="text-gray-700">Licensing & compliance in your country/region.</p>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
                  <p className="text-gray-700">Security transparency: cold-storage % disclosed, bug bounty, SOC/ISO audits.</p>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
                  <p className="text-gray-700">Proof-of-reserves + liabilities explained in plain English.</p>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
                  <p className="text-gray-700">Withdrawal reliability & speed (user reports, status pages).</p>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">5</span>
                  <p className="text-gray-700">Incident history & response (breach disclosures, remediation).</p>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">6</span>
                  <p className="text-gray-700">2FA options (TOTP, hardware key), anti-phishing code, address allowlists.</p>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">7</span>
                  <p className="text-gray-700">Segregated customer funds; clear terms on custody & insurance (what's actually covered).</p>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">8</span>
                  <p className="text-gray-700">Liquidity & spreads (tight spreads = better execution).</p>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">9</span>
                  <p className="text-gray-700">Transparent fees (maker/taker, funding, withdrawal).</p>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">10</span>
                  <p className="text-gray-700">Supported fiat rails you actually use.</p>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">11</span>
                  <p className="text-gray-700">Customer support SLAs and response channels.</p>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">12</span>
                  <p className="text-gray-700">Jurisdictional fit (tax, reporting, and availability).</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Test</h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-blue-800">
                  Open account → enable 2FA → deposit a tiny amount → execute a small buy → withdraw to your wallet. Time it.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Are proof-of-reserves enough?</h3>
                  <p className="text-gray-600">No—look for liabilities, audits, and holistic governance.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Should I spread funds across exchanges?</h3>
                  <p className="text-gray-600">Yes, if you actively trade; still favor self-custody.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Do fees matter?</h3>
                  <p className="text-gray-600">Yes—high-volume users should optimize for maker rates and VIP tiers.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Guides</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/how-to/buy-bitcoin-safely-step-by-step" className="text-orange-600 hover:text-orange-700 hover:underline">
                  How to buy Bitcoin safely (step by step)
                </a>
                <a href="/how-to/setup-hardware-wallet-cold-storage" className="text-orange-600 hover:text-orange-700 hover:underline">
                  How to set up a hardware wallet (cold storage)
                </a>
                <a href="/how-to/avoid-crypto-rug-pulls-scams" className="text-orange-600 hover:text-orange-700 hover:underline">
                  How to avoid crypto rug pulls and scams
                </a>
                <a href="/how-to/use-defi-safely-wallet-hygiene" className="text-orange-600 hover:text-orange-700 hover:underline">
                  How to use DeFi safely (wallet hygiene)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}