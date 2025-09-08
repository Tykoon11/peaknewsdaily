import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Set Up Two-Factor Authentication the Right Way (Apps, Keys, Backups)',
  description: 'Use phishing-resistant MFA where possible. Authenticator apps/hardware keys > SMS. Backup codes and recovery.',
}

export default function SetUpTwoFactorPage() {
  return (
    <main className="container py-8 max-w-4xl mx-auto">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
        <span className="mx-2 text-gray-500">→</span>
        <Link href="/category/how-to" className="text-blue-600 hover:text-blue-800">How-To Guides</Link>
        <span className="mx-2 text-gray-500">→</span>
        <span className="text-gray-700">Two-Factor Authentication</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-slate-600 rounded-xl flex items-center justify-center text-white text-xl">
            🏛️
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Brokers & Exchanges</p>
            <h1 className="text-4xl font-bold text-gray-900">Set Up Two-Factor Authentication the Right Way</h1>
          </div>
        </div>
        <p className="text-xl text-gray-600 leading-relaxed">
          Use phishing-resistant MFA where possible. Authenticator apps/hardware keys &gt; SMS. Backup codes and recovery.
        </p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2>Choose the strongest available method</h2>
        
        <p>Prefer phishing-resistant MFA (FIDO2/passkeys) or app-based codes over SMS where possible.</p>

        <div className="overflow-x-auto my-8">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Method</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Security Level</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Pros</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Cons</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-green-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Hardware Keys</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Highest</td>
                <td className="border border-gray-300 px-3 py-2">Phishing-resistant, offline</td>
                <td className="border border-gray-300 px-3 py-2">Can lose device, limited support</td>
              </tr>
              <tr className="bg-blue-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Authenticator Apps</td>
                <td className="border border-gray-300 px-3 py-2 text-blue-700">High</td>
                <td className="border border-gray-300 px-3 py-2">Works offline, widely supported</td>
                <td className="border border-gray-300 px-3 py-2">Phone dependent, can be phished</td>
              </tr>
              <tr className="bg-yellow-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Push Notifications</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Medium</td>
                <td className="border border-gray-300 px-3 py-2">Convenient, fast approval</td>
                <td className="border border-gray-300 px-3 py-2">Notification fatigue, can be tricked</td>
              </tr>
              <tr className="bg-red-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">SMS</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Lowest</td>
                <td className="border border-gray-300 px-3 py-2">Universal, no apps needed</td>
                <td className="border border-gray-300 px-3 py-2">SIM swap, interception, delays</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <p className="text-red-700">
            <strong>Important:</strong> Many security organizations increasingly warn against SMS-only 2FA due to SIM-swap/interception risks. 
            Choose app or hardware where possible.
          </p>
          <div className="mt-3 text-xs">
            <a href="https://pages.nist.gov/800-63-3/sp800-63b.html" className="text-red-600 hover:underline" target="_blank" rel="noopener">NIST Authentication Guidelines</a>
          </div>
        </div>

        <h2>Setup steps</h2>
        
        <div className="space-y-4 my-8">
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1"&gt;1</span>
            <div>
              <p className="text-gray-700 font-medium">Turn on 2FA in broker settings</p>
              <p className="text-gray-600 text-sm">Usually found under "Security" or "Account Settings"</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1"&gt;2</span>
            <div>
              <p className="text-gray-700 font-medium">Scan QR code in authenticator app</p>
              <p className="text-gray-600 text-sm">Google Authenticator, Authy, Microsoft Authenticator, or 1Password</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1"&gt;3</span>
            <div>
              <p className="text-gray-700 font-medium">Save backup codes</p>
              <p className="text-gray-600 text-sm">Print them or store in a password manager—not just screenshots</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1"&gt;4</span>
            <div>
              <p className="text-gray-700 font-medium">Add second method (if available)</p>
              <p className="text-gray-600 text-sm">Hardware key as backup to authenticator app</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1"&gt;5</span>
            <div>
              <p className="text-gray-700 font-medium">Test the setup</p>
              <p className="text-gray-600 text-sm">Log out and log back in to verify it works</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Recommended Authenticator Apps</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-blue-700 text-sm space-y-2">
                <li>• <strong>Google Authenticator:</strong> Simple, reliable</li>
                <li>• <strong>Authy:</strong> Cloud backup, multi-device</li>
                <li>• <strong>Microsoft Authenticator:</strong> Push notifications</li>
                <li>• <strong&gt;1Password:</strong> Integrated with password manager</li>
              </ul>
            </div>
            <div>
              <ul className="text-blue-700 text-sm space-y-2">
                <li>• <strong>Bitwarden:</strong> Open source option</li>
                <li>• <strong>LastPass Authenticator:</strong> Backup features</li>
                <li>• <strong>Duo Mobile:</strong> Enterprise-focused</li>
                <li>• <strong>andOTP:</strong> Android open source</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>Recovery planning</h2>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Backup Strategies</h4>
            <ul className="text-green-700 text-sm space-y-2">
              <li>• Second device with authenticator app</li>
              <li>• Hardware key as alternate method</li>
              <li>• Printed backup codes in safe place</li>
              <li>• Password manager with 2FA storage</li>
              <li>• Recovery email/phone up to date</li>
            </ul>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h4 className="font-semibold text-orange-800 mb-3">What Can Go Wrong</h4>
            <ul className="text-orange-700 text-sm space-y-2">
              <li>• Lost or broken phone</li>
              <li>• Authenticator app deleted</li>
              <li>• Hardware key lost/damaged</li>
              <li>• Phone number changed</li>
              <li>• App factory reset without backup</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-4">⚠️ Common Mistakes</h3>
          <ul className="text-yellow-700 space-y-2">
            <li>• <strong>No backup method:</strong> Only one way to authenticate</li>
            <li>• <strong>Screenshot only:</strong> Backup codes saved as photos that can be lost</li>
            <li>• <strong>Same device dependency:</strong> 2FA and password manager on same phone</li>
            <li>• <strong>Ignoring recovery info:</strong> Old phone numbers/emails still on file</li>
            <li>• <strong>Not testing:</strong> Discovering problems only when locked out</li>
          </ul>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
          <h3 className="font-semibold text-gray-900 mb-4">Additional Reading</h3>
          <p className="text-gray-700 text-sm mb-2">
            For more information on multi-factor authentication best practices:
          </p>
          <div className="text-xs space-y-1">
            <div><a href="https://www.wired.com/story/how-to-get-started-using-a-password-manager/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">WIRED: Password Manager Guide</a></div>
            <div><a href="https://pages.nist.gov/800-63-3/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">NIST Digital Identity Guidelines</a></div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">💡 Pro Tip</h3>
          <p className="text-blue-700">
            Enable 2FA on your email accounts first—they're often the recovery method for your brokerage accounts. 
            A compromised email can lead to compromised investment accounts even with 2FA enabled.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What happens if I lose my phone with the authenticator app?</h3>
              <p className="text-gray-700">
                Use your backup codes or alternate authentication method. If you have neither, you'll need to contact 
                your broker's support with identity verification to regain access.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I use the same authenticator app for all accounts?</h3>
              <p className="text-gray-700">
                Yes, it's more convenient and you're less likely to lose access. Just ensure you have proper backups 
                and recovery methods in place for that app.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is SMS 2FA better than nothing?</h3>
              <p className="text-gray-700">
                Yes, SMS 2FA is still much better than no 2FA at all. But upgrade to app-based or hardware keys 
                when possible, especially for financial accounts.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I use the same hardware key for multiple accounts?</h3>
              <p className="text-gray-700">
                Yes, most hardware keys can store credentials for multiple accounts. This is actually convenient 
                and more secure than having separate keys for each account.
              </p>
            </div>
          </div>
        </div>
      </article>

      <nav className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link 
              href="/how-to/how-to-verify-if-a-broker-is-regulated" 
              className="block p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
            >
              <h3 className="font-semibold text-red-900">← Verify Broker Safety</h3>
              <p className="text-sm text-red-700 mt-1">Check regulation before setting up security</p>
            </Link>
          </div>
          
          <div>
            <Link 
              href="/how-to/how-to-file-complaints-against-a-broker" 
              className="block p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
            >
              <h3 className="font-semibold text-orange-900">File Broker Complaints →</h3>
              <p className="text-sm text-orange-700 mt-1">What to do when problems arise</p>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  )
}