import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Protect Yourself on Public Wi-Fi | Complete Security Guide',
  description: 'Stay safe on public Wi-Fi networks. Learn VPN setup, secure browsing practices, and protection strategies against hackers and data theft.',
  keywords: 'public wifi security, VPN protection, secure browsing, wifi safety, network security, public hotspot safety',
};

export default function HowToProtectYourselfOnPublicWifiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes public Wi-Fi dangerous?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Public Wi-Fi networks are often unsecured, allowing hackers to intercept data, create fake networks, perform man-in-the-middle attacks, and steal personal information including passwords and financial data."
        }
      },
      {
        "@type": "Question", 
        "name": "Do I need a VPN on public Wi-Fi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, a VPN is essential on public Wi-Fi. It encrypts all your internet traffic, making it unreadable to hackers even if they intercept it. Choose a reputable VPN service with strong encryption."
        }
      },
      {
        "@type": "Question",
        "name": "What should I avoid doing on public Wi-Fi?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Avoid online banking, shopping, entering passwords, accessing sensitive work documents, or any activity involving personal or financial information unless using a secure VPN connection."
        }
      }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <nav className="mb-8">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-pink-600">Home</Link>
          <span>→</span>
          <Link href="/category/how-to" className="hover:text-pink-600">How-To Guides</Link>
          <span>→</span>
          <span className="text-pink-600">Public Wi-Fi Protection</span>
        </div>
      </nav>

      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How to Protect Yourself on Public Wi-Fi: Complete Security Guide
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Master public Wi-Fi security to protect your personal and financial data. Learn VPN setup, safe browsing practices, and threat prevention strategies.
          </p>
        </header>

        <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-red-800 mb-2">🚨 Critical Security Warning</h2>
          <p className="text-red-700">
            Public Wi-Fi networks are hunting grounds for cybercriminals. Never access sensitive information without proper protection. Your financial security depends on following these guidelines.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Public Wi-Fi Threats</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Common Attack Methods</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Man-in-the-Middle Attacks</h4>
                <p className="text-gray-700 text-sm mb-3">Hackers intercept communication between you and websites, stealing passwords and data.</p>
                
                <h4 className="font-semibold text-gray-900 mb-2">Evil Twin Networks</h4>
                <p className="text-gray-700 text-sm mb-3">Fake Wi-Fi hotspots designed to look legitimate but controlled by criminals.</p>
                
                <h4 className="font-semibold text-gray-900 mb-2">Packet Sniffing</h4>
                <p className="text-gray-700 text-sm">Capturing and analyzing all data transmitted over the network.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Session Hijacking</h4>
                <p className="text-gray-700 text-sm mb-3">Stealing your login sessions to access your accounts without passwords.</p>
                
                <h4 className="font-semibold text-gray-900 mb-2">Malware Distribution</h4>
                <p className="text-gray-700 text-sm mb-3">Injecting malicious software through compromised network connections.</p>
                
                <h4 className="font-semibold text-gray-900 mb-2">SSL Stripping</h4>
                <p className="text-gray-700 text-sm">Forcing connections to downgrade from secure HTTPS to insecure HTTP.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential VPN Protection</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Choosing the Right VPN</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">No-Logs Policy</h4>
                  <p className="text-gray-700">Choose VPNs that don't store your browsing data or connection logs.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Strong Encryption</h4>
                  <p className="text-gray-700">Ensure AES-256 encryption or equivalent security standards.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Kill Switch Feature</h4>
                  <p className="text-gray-700">Automatically disconnects internet if VPN connection drops.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold text-sm">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Reputable Provider</h4>
                  <p className="text-gray-700">Use established services with transparent privacy policies and security audits.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Recommended VPNs</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• ExpressVPN - Fast and reliable</li>
                <li>• NordVPN - Strong security features</li>
                <li>• Surfshark - Budget-friendly option</li>
                <li>• ProtonVPN - Privacy-focused</li>
                <li>• CyberGhost - User-friendly interface</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">VPN Setup Steps</h3>
              <ol className="space-y-2 text-gray-700 text-sm">
                <li>1. Download from official source</li>
                <li>2. Create account and subscribe</li>
                <li>3. Install on all devices</li>
                <li>4. Configure auto-connect</li>
                <li>5. Test connection security</li>
              </ol>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Free VPN Warnings</h3>
              <ul className="space-y-2 text-red-600 text-sm">
                <li>• Often sell your data</li>
                <li>• Weak encryption</li>
                <li>• Limited bandwidth</li>
                <li>• Potential malware</li>
                <li>• Unreliable connections</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Safe Browsing Practices</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">HTTPS-Only Browsing</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Always Check for HTTPS</h4>
                  <p className="text-gray-700">Look for the lock icon in your browser's address bar. Never enter sensitive information on HTTP sites.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Enable HTTPS-Only Mode</h4>
                  <p className="text-gray-700">Configure your browser to automatically upgrade to HTTPS when available.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Use HTTPS Everywhere Extension</h4>
                  <p className="text-gray-700">Install browser extensions that force HTTPS connections when possible.</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Device Security Configuration</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Wi-Fi Settings</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Disable auto-connect to open networks</li>
                <li>✓ Turn off Wi-Fi sharing features</li>
                <li>✓ Forget untrusted networks</li>
                <li>✓ Use manual network selection</li>
                <li>✓ Enable "Ask to join networks"</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Device Security</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Enable device encryption</li>
                <li>✓ Set screen lock timeouts</li>
                <li>✓ Keep software updated</li>
                <li>✓ Enable firewall protection</li>
                <li>✓ Disable file sharing</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">What to Avoid on Public Wi-Fi</h2>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-red-800 mb-4">🚫 Never Do These Activities</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Financial Activities</h4>
                <ul className="text-red-600 space-y-1 text-sm">
                  <li>• Online banking or bill payments</li>
                  <li>• Shopping with credit cards</li>
                  <li>• Investment account access</li>
                  <li>• Cryptocurrency transactions</li>
                  <li>• Tax preparation software</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-2">Personal Information</h4>
                <ul className="text-red-600 space-y-1 text-sm">
                  <li>• Entering passwords</li>
                  <li>• Accessing work documents</li>
                  <li>• Personal email accounts</li>
                  <li>• Social media management</li>
                  <li>• Medical record portals</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Identifying Safe vs. Dangerous Networks</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Network Assessment Checklist</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Verify Network Name</h4>
                  <p className="text-gray-700">Confirm the official Wi-Fi name with staff. Beware of similar names with slight variations.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Look for Password Protection</h4>
                  <p className="text-gray-700">Prefer networks that require passwords, even if they're provided publicly.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Check for Captive Portals</h4>
                  <p className="text-gray-700">Legitimate networks often have login pages. Be suspicious of networks that connect instantly.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 font-semibold text-sm">⚠</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Avoid Generic Names</h4>
                  <p className="text-gray-700">Be wary of networks named "Free Wi-Fi," "Public Wi-Fi," or "Guest Network."</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Alternative Connection Methods</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobile Hotspot</h3>
              <p className="text-gray-700 text-sm mb-3">Use your phone's data plan to create a secure Wi-Fi hotspot for your devices.</p>
              <ul className="text-green-600 text-sm space-y-1">
                <li>✓ Uses cellular encryption</li>
                <li>✓ Complete control over network</li>
                <li>✓ No shared connection risks</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">USB Tethering</h3>
              <p className="text-gray-700 text-sm mb-3">Connect your laptop directly to your phone via USB cable for internet access.</p>
              <ul className="text-green-600 text-sm space-y-1">
                <li>✓ No Wi-Fi risks</li>
                <li>✓ Charges your phone</li>
                <li>✓ Stable connection</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Offline Mode</h3>
              <p className="text-gray-700 text-sm mb-3">Work offline and sync later when on a trusted network connection.</p>
              <ul className="text-green-600 text-sm space-y-1">
                <li>✓ Zero network risks</li>
                <li>✓ Better battery life</li>
                <li>✓ Increased productivity</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Emergency Response Plan</h2>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-yellow-800 mb-4">🚨 If You Suspect You've Been Compromised</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <span className="font-bold text-yellow-800">1.</span>
                <div>
                  <h4 className="font-semibold text-yellow-800">Disconnect Immediately</h4>
                  <p className="text-yellow-700 text-sm">Turn off Wi-Fi and disconnect from the network right away.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="font-bold text-yellow-800">2.</span>
                <div>
                  <h4 className="font-semibold text-yellow-800">Change Passwords</h4>
                  <p className="text-yellow-700 text-sm">Update passwords for any accounts accessed on the compromised network.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="font-bold text-yellow-800">3.</span>
                <div>
                  <h4 className="font-semibold text-yellow-800">Monitor Accounts</h4>
                  <p className="text-yellow-700 text-sm">Check bank statements and credit reports for unauthorized activity.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="font-bold text-yellow-800">4.</span>
                <div>
                  <h4 className="font-semibold text-yellow-800">Run Security Scans</h4>
                  <p className="text-yellow-700 text-sm">Perform full antivirus and malware scans on all devices used.</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What makes public Wi-Fi dangerous?</h3>
              <p className="text-gray-700">
                Public Wi-Fi networks are often unsecured, allowing hackers to intercept data, create fake networks, perform man-in-the-middle attacks, and steal personal information including passwords and financial data.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do I need a VPN on public Wi-Fi?</h3>
              <p className="text-gray-700">
                Yes, a VPN is essential on public Wi-Fi. It encrypts all your internet traffic, making it unreadable to hackers even if they intercept it. Choose a reputable VPN service with strong encryption.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What should I avoid doing on public Wi-Fi?</h3>
              <p className="text-gray-700">
                Avoid online banking, shopping, entering passwords, accessing sensitive work documents, or any activity involving personal or financial information unless using a secure VPN connection.
              </p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">🎯 Key Takeaways</h3>
            <ul className="text-green-700 space-y-1">
              <li>• Always use a reputable VPN on public Wi-Fi networks</li>
              <li>• Verify network names with venue staff before connecting</li>
              <li>• Only visit HTTPS websites for any sensitive activities</li>
              <li>• Consider using mobile hotspot instead of public Wi-Fi</li>
              <li>• Have an emergency response plan if compromised</li>
            </ul>
          </div>
        </div>
      </article>

      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-wrap gap-4">
          <Link href="/how-to/how-to-set-up-two-factor-authentication" className="text-pink-600 hover:text-pink-700 underline">
            Two-Factor Authentication
          </Link>
          <Link href="/how-to/how-to-secure-your-accounts-with-password-managers" className="text-pink-600 hover:text-pink-700 underline">
            Password Manager Security
          </Link>
          <Link href="/how-to/how-to-detect-skimmers-and-card-cloning" className="text-pink-600 hover:text-pink-700 underline">
            Detect Card Skimmers
          </Link>
          <Link href="/category/how-to" className="text-pink-600 hover:text-pink-700 underline">
            All How-To Guides
          </Link>
        </div>
      </footer>
    </div>
  );
}