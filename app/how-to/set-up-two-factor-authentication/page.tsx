import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Set Up Two-Factor Authentication the Right Way (Apps, Keys, Backups)',
  description: 'Use phishing-resistant MFA where possible. Authenticator apps/hardware keys > SMS. Backup codes and recovery.',
}

export default function SetUpTwoFactorAuthenticationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">
              📊 Brokers & Exchanges
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Set Up Two-Factor Authentication the Right Way
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use phishing-resistant MFA where possible. Authenticator apps/hardware keys &gt; SMS. Backup codes and recovery.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Choose the Strongest Available Method</h2>
              
              <div className="space-y-4">
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                  <h3 className="font-semibold text-green-900 mb-2">🏆 Best: Phishing-Resistant MFA</h3>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• <strong>FIDO2/WebAuthn:</strong> Hardware keys (YubiKey, Titan Security Key)</li>
                    <li>• <strong>Passkeys:</strong> Built into iOS/Android/Windows</li>
                    <li>• <strong>Platform authenticators:</strong> Face ID, Touch ID, Windows Hello</li>
                    <li>• <strong>Protection:</strong> Nearly immune to phishing attacks</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                  <h3 className="font-semibold text-blue-900 mb-2">🥈 Good: Authenticator Apps</h3>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• <strong>Examples:</strong> Google Authenticator, Microsoft Authenticator, Authy</li>
                    <li>• <strong>How it works:</strong> Time-based codes (TOTP)</li>
                    <li>• <strong>Pros:</strong> Works offline, more secure than SMS</li>
                    <li>• <strong>Cons:</strong> Vulnerable to sophisticated phishing</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
                  <h3 className="font-semibold text-red-900 mb-2">⚠️ Weakest: SMS/Voice</h3>
                  <ul className="text-red-700 text-sm space-y-1">
                    <li>• <strong>Risks:</strong> SIM swapping, interception, social engineering</li>
                    <li>• <strong>When to use:</strong> Only if no other options available</li>
                    <li>• <strong>Mitigation:</strong> Add SIM PIN, use carrier security features</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 text-xs space-y-1">
                <div><a href="https://pages.nist.gov/800-63-3/sp800-63b.html" target="_blank" rel="noopener" className="text-indigo-600 hover:underline">NIST Authentication Guidelines</a></div>
                <div><a href="https://csrc.nist.gov" target="_blank" rel="noopener" className="text-indigo-600 hover:underline">NIST Computer Security Resource Center</a></div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Setup Steps</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
                  <div>
                    <p className="text-gray-700 font-medium">Enable 2FA in your broker account settings</p>
                    <p className="text-gray-600 text-sm">Look for "Security," "Two-Factor Authentication," or "Multi-Factor Authentication."</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
                  <div>
                    <p className="text-gray-700 font-medium">Choose your method (prioritize strongest available)</p>
                    <p className="text-gray-600 text-sm">Hardware key &gt; authenticator app &gt; SMS (as last resort).</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
                  <div>
                    <p className="text-gray-700 font-medium">Scan QR code or register hardware key</p>
                    <p className="text-gray-600 text-sm">For apps: scan with Google Authenticator or similar. For hardware: follow pairing instructions.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
                  <div>
                    <p className="text-gray-700 font-medium">Save backup/recovery codes</p>
                    <p className="text-gray-600 text-sm">Print and store securely—these let you regain access if your device is lost.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">5</span>
                  <div>
                    <p className="text-gray-700 font-medium">Test the setup</p>
                    <p className="text-gray-600 text-sm">Log out and log back in to verify everything works properly.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">6</span>
                  <div>
                    <p className="text-gray-700 font-medium">Add second method if supported</p>
                    <p className="text-gray-600 text-sm">Hardware key + authenticator app provides redundancy.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Authenticator App Setup</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">Popular Apps</h3>
                  <ul className="text-blue-700 text-sm space-y-2">
                    <li>• <strong>Google Authenticator:</strong> Simple, widely supported</li>
                    <li>• <strong>Microsoft Authenticator:</strong> Push notifications, cloud backup</li>
                    <li>• <strong>Authy:</strong> Multi-device sync, encrypted backups</li>
                    <li>• <strong>1Password:</strong> Integrated with password manager</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3">Setup Process</h3>
                  <ol className="text-green-700 text-sm space-y-1">
                    <li>1. Install authenticator app on phone</li>
                    <li>2. In broker settings, choose "Authenticator App"</li>
                    <li>3. Scan QR code with app camera</li>
                    <li>4. Enter the 6-digit code to verify</li>
                    <li>5. Save backup codes provided</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hardware Key Advantages</h2>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-purple-900 mb-3">Why Hardware Keys Are Superior</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <ul className="text-purple-700 text-sm space-y-2">
                      <li>• <strong>Phishing resistance:</strong> Won't work on fake sites</li>
                      <li>• <strong>No shared secrets:</strong> Can't be intercepted</li>
                      <li>• <strong>Physical possession:</strong> Attacker needs device</li>
                      <li>• <strong>Works offline:</strong> No network dependency</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="text-purple-700 text-sm space-y-2">
                      <li>• <strong>Popular options:</strong> YubiKey 5 series, Google Titan</li>
                      <li>• <strong>Connections:</strong> USB-A, USB-C, NFC, Lightning</li>
                      <li>• <strong>Cost:</strong> $25-70 for most models</li>
                      <li>• <strong>Durability:</strong> Waterproof, crushproof</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Recovery Planning</h2>
              <div className="space-y-4">
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-yellow-900 mb-3">Backup Strategy</h3>
                  <ul className="text-yellow-700 space-y-2">
                    <li>• <strong>Backup codes:</strong> Print and store in safe or bank deposit box</li>
                    <li>• <strong>Second device:</strong> Set up authenticator on backup phone/tablet</li>
                    <li>• <strong>Multiple hardware keys:</strong> Keep second key in secure location</li>
                    <li>• <strong>Recovery contacts:</strong> Some services allow trusted contacts</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-orange-900 mb-3">If You Lose Access</h3>
                  <ol className="text-orange-700 space-y-2">
                    <li>1. Try backup codes first</li>
                    <li>2. Use secondary authentication method</li>
                    <li>3. Contact broker customer support</li>
                    <li>4. Be prepared for identity verification process</li>
                    <li>5. May require account freeze until resolved</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">SMS Security Warnings</h2>
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <p className="text-red-700"><strong>SIM Swapping:</strong> Attackers convince carriers to transfer your number to their SIM.</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <p className="text-red-700"><strong>SS7 Attacks:</strong> Network-level interception of SMS messages.</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <p className="text-red-700"><strong>Social Engineering:</strong> Fake customer service calls to reset phone service.</p>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3">If You Must Use SMS</h3>
                <ul className="text-blue-700 text-sm space-y-2">
                  <li>• Add a SIM PIN to prevent unauthorized swaps</li>
                  <li>• Enable carrier security features and account PINs</li>
                  <li>• Use a dedicated phone number for financial accounts</li>
                  <li>• Monitor your phone service for unexpected outages</li>
                  <li>• Upgrade to app-based 2FA as soon as possible</li>
                </ul>
              </div>
              
              <div className="mt-4 text-xs">
                <a href="https://nist.gov/blogs/cybersecurity-insights/back-basics-whats-multi-factor-authentication-and-why-should-i-care" target="_blank" rel="noopener" className="text-red-600 hover:underline">NIST: Why SMS 2FA Is Problematic</a>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Best Practices</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
                  <div>
                    <p className="text-gray-700 font-medium">Use unique authentication for financial accounts</p>
                    <p className="text-gray-600 text-sm">Don't reuse the same 2FA method across all important accounts.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
                  <div>
                    <p className="text-gray-700 font-medium">Keep backup codes offline and secure</p>
                    <p className="text-gray-600 text-sm">Don't store them in cloud drives or email—print and secure physically.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
                  <div>
                    <p className="text-gray-700 font-medium">Update contact info when you change phones</p>
                    <p className="text-gray-600 text-sm">Notify your broker before switching phone numbers.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
                  <div>
                    <p className="text-gray-700 font-medium">Test recovery process annually</p>
                    <p className="text-gray-600 text-sm">Make sure you can still access backup codes and recovery methods.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8 bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
              <p className="text-green-800">
                <strong>Security Note:</strong> Many security organizations increasingly warn against SMS-only 2FA due to SIM-swap and interception risks. Choose app-based or hardware where possible.
              </p>
              <div className="mt-2 text-xs">
                <a href="https://wired.com/story/how-to-use-a-security-key/" target="_blank" rel="noopener" className="text-green-600 hover:underline">WIRED: How to Use a Security Key</a>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">What if I lose my phone?</h3>
                  <p className="text-gray-600">Use your printed backup codes or secondary hardware key. Contact your broker if you don't have backups.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Can I use the same authenticator app for multiple brokers?</h3>
                  <p className="text-gray-600">Yes—most apps can store multiple accounts. Each will have its own unique code.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Are hardware keys worth the cost?</h3>
                  <p className="text-gray-600">For financial accounts with significant balances, absolutely. They provide the strongest protection available.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">What happens if my broker doesn't support good 2FA?</h3>
                  <p className="text-gray-600">Consider switching to a broker with better security. This is a red flag for overall security practices.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Guides</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/how-to/verify-broker-regulated" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to verify if a broker is regulated
                </a>
                <a href="/how-to/avoid-bank-scams-phishing-investors" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to spot and avoid bank scams & phishing
                </a>
                <a href="/how-to/choose-stock-broker-fees-tools-support" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to choose a stock broker (fees, tools, support)
                </a>
                <a href="/how-to/export-statements-taxes" className="text-indigo-600 hover:text-indigo-700 hover:underline">
                  How to export account statements for taxes
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}