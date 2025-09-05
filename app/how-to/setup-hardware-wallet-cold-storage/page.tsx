import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hardware Wallet Setup: Secure Cold Storage in 10 Steps',
  description: 'A safe, vendor-verified process for initializing a hardware wallet, backing up your seed, and testing restores.',
}

export default function SetupHardwareWalletPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">
              ₿ Crypto & Web3
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Hardware Wallet Setup: Secure Cold Storage in 10 Steps
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A safe, vendor-verified process for initializing a hardware wallet, backing up your seed, and testing restores.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Steps</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Buy direct from the manufacturer</h3>
                    <p className="text-gray-600 text-sm">Avoid third-party resellers when possible.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Check integrity</h3>
                    <p className="text-gray-600 text-sm">Verify tamper seals/serial; install official app only.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Offline initialization</h3>
                    <p className="text-gray-600 text-sm">Generate seed on device, not on a computer/phone.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Record seed phrase</h3>
                    <p className="text-gray-600 text-sm">Write it down legibly; no photos/cloud copies.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">5</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Optional passphrase (BIP39)</h3>
                    <p className="text-gray-600 text-sm">Adds a "25th word"—great for privacy (don't forget it).</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">6</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Update firmware</h3>
                    <p className="text-gray-600 text-sm">Through the official app; verify device ID.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">7</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Create a receive address</h3>
                    <p className="text-gray-600 text-sm">And verify it on the device screen.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">8</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Send a test transaction</h3>
                    <p className="text-gray-600 text-sm">Confirm on device.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">9</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Backup hardening</h3>
                    <p className="text-gray-600 text-sm">Consider a steel plate; split storage locations.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-orange-100 text-orange-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">10</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Disaster rehearsal</h3>
                    <p className="text-gray-600 text-sm">Wipe a spare device (or software wallet) and restore from seed to confirm it works.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">What if I lose the device?</h3>
                  <p className="text-gray-600">Funds are recoverable with the seed (and passphrase).</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Can I store multiple coins?</h3>
                  <p className="text-gray-600">Yes—install relevant apps; confirm chains.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Is a passphrase risky?</h3>
                  <p className="text-gray-600">Only if you forget it—document securely.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Guides</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/how-to/buy-bitcoin-safely-step-by-step" className="text-orange-600 hover:text-orange-700 hover:underline">
                  How to buy Bitcoin safely (step by step)
                </a>
                <a href="/how-to/recover-lost-seed-phrase-what-possible" className="text-orange-600 hover:text-orange-700 hover:underline">
                  How to recover from a lost seed phrase
                </a>
                <a href="/how-to/use-defi-safely-wallet-hygiene" className="text-orange-600 hover:text-orange-700 hover:underline">
                  How to use DeFi safely (wallet hygiene)
                </a>
                <a href="/how-to/avoid-crypto-rug-pulls-scams" className="text-orange-600 hover:text-orange-700 hover:underline">
                  How to avoid crypto rug pulls and scams
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}