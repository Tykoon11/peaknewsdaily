import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Detect Skimmers and Card Cloning | Complete Protection Guide',
  description: 'Protect yourself from card skimmers and cloning devices. Learn to identify suspicious ATMs, gas pumps, and payment terminals to prevent financial fraud.',
  keywords: 'card skimmers, ATM security, credit card cloning, payment fraud prevention, skimmer detection, card reader security',
};

export default function HowToDetectSkimmersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a card skimmer and how does it work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A card skimmer is a device placed over legitimate card readers to steal credit and debit card information. It captures magnetic stripe data when you swipe your card, while a hidden camera or fake keypad records your PIN."
        }
      },
      {
        "@type": "Question", 
        "name": "Where are skimmers most commonly found?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Skimmers are most commonly found on ATMs, gas station pumps, point-of-sale terminals in restaurants and retail stores, and public card readers in tourist areas or less secure locations."
        }
      },
      {
        "@type": "Question",
        "name": "How can I tell if a card reader has been tampered with?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Look for loose parts, unusual bulk or thickness, misaligned components, different colors or materials, sticky tape or glue residue, and wiggle the card reader gently to check if it's securely attached."
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
          <span className="text-pink-600">Skimmer Detection</span>
        </div>
      </nav>

      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How to Detect Skimmers and Card Cloning: Complete Protection Guide
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Learn to identify and avoid card skimmers before they steal your financial information. Master visual inspection techniques and secure payment practices.
          </p>
        </header>

        <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-red-800 mb-2">🚨 Critical Alert</h2>
          <p className="text-red-700">
            Card skimming is a billion-dollar crime affecting millions of consumers annually. A few seconds of inspection can save you from months of financial recovery.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Card Skimmers</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">How Skimming Attacks Work</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Device Installation</h4>
                  <p className="text-gray-700">Criminals install skimming devices over legitimate card readers, usually taking only seconds to attach.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Data Capture</h4>
                  <p className="text-gray-700">The skimmer reads your card's magnetic stripe data while a camera or fake keypad captures your PIN.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Data Extraction</h4>
                  <p className="text-gray-700">Criminals return to collect the device and sell or use your stolen card information.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold text-sm">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Fraudulent Use</h4>
                  <p className="text-gray-700">Your cloned card information is used for unauthorized purchases or cash withdrawals.</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">High-Risk Locations</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Primary Target Locations</h3>
              <ul className="space-y-2 text-gray-700">
                <li>🏧 <strong>ATMs:</strong> Especially standalone machines in dark or isolated areas</li>
                <li>⛽ <strong>Gas stations:</strong> Pay-at-pump terminals are frequent targets</li>
                <li>🏪 <strong>Convenience stores:</strong> High-traffic, lower-security environments</li>
                <li>🏖️ <strong>Tourist areas:</strong> Visitors are less familiar with local machines</li>
                <li>🍴 <strong>Restaurants:</strong> Handheld card readers taken away from your sight</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Lower Risk Alternatives</h3>
              <ul className="space-y-2 text-green-700">
                <li>✅ Bank-operated ATMs inside branches</li>
                <li>✅ Payment terminals at major retailers</li>
                <li>✅ Contactless payment methods</li>
                <li>✅ Mobile payment apps</li>
                <li>✅ Chip-and-PIN transactions</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Visual Inspection Techniques</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Look-Test: What to Examine</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-red-600 mb-2">🚩 Red Flags to Watch For</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Parts that look newer or different colors</li>
                  <li>• Bulk or thickness where there shouldn't be</li>
                  <li>• Misaligned or crooked components</li>
                  <li>• Loose or wobbly card readers</li>
                  <li>• Tape, glue residue, or scratches</li>
                  <li>• Different materials or textures</li>
                  <li>• Unusual lights or sounds</li>
                  <li>• Obstructed security cameras</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-600 mb-2">✅ Signs of Legitimate Devices</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Consistent colors and materials</li>
                  <li>• Smooth, professional construction</li>
                  <li>• Properly aligned components</li>
                  <li>• Secure attachment to main unit</li>
                  <li>• Official bank or company branding</li>
                  <li>• Clear security camera visibility</li>
                  <li>• No additional wires or devices</li>
                  <li>• Matching wear patterns</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Touch Test: Physical Inspection</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Safe Physical Examination Steps</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Wiggle the Card Reader</h4>
                  <p className="text-gray-700 mb-2">Gently try to move the card slot. Legitimate readers are firmly attached.</p>
                  <p className="text-sm text-yellow-700 bg-yellow-50 p-2 rounded">⚠️ Don't force or damage the equipment</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Check the Keypad</h4>
                  <p className="text-gray-700 mb-2">Press buttons to ensure they feel normal and aren't spongy or raised.</p>
                  <p className="text-sm text-yellow-700 bg-yellow-50 p-2 rounded">⚠️ Be subtle to avoid alerting potential criminals</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Examine Edges and Seams</h4>
                  <p className="text-gray-700 mb-2">Look for gaps, adhesive residue, or misaligned parts around the card slot.</p>
                  <p className="text-sm text-yellow-700 bg-yellow-50 p-2 rounded">⚠️ Use your phone's flashlight if needed</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Compare Similar Machines</h4>
                  <p className="text-gray-700 mb-2">If multiple machines are available, compare their appearance for consistency.</p>
                  <p className="text-sm text-yellow-700 bg-yellow-50 p-2 rounded">⚠️ Use the machine that looks most like the others</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Hidden Camera Detection</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Spotting PIN-Capture Devices</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Camera Hiding Spots</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Fake brochure holders</li>
                  <li>• Modified light fixtures</li>
                  <li>• Pinhole cameras in walls</li>
                  <li>• Attached to nearby objects</li>
                  <li>• Hidden in fake panels</li>
                  <li>• Mounted on false ceilings</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Detection Methods</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Look for tiny holes or lenses</li>
                  <li>• Check for unusual attachments</li>
                  <li>• Notice items that seem out of place</li>
                  <li>• Use your phone's flashlight to spot reflections</li>
                  <li>• Look for small LED indicator lights</li>
                  <li>• Check angles that can see the keypad</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Safe Payment Practices</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Protective Behaviors</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Cover Your PIN</h4>
                  <p className="text-gray-700">Always shield the keypad with your hand or body when entering your PIN.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Use Contactless When Possible</h4>
                  <p className="text-gray-700">Tap payments, mobile wallets, and chip cards are much safer than magnetic stripe transactions.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Choose Secure Locations</h4>
                  <p className="text-gray-700">Prefer bank ATMs over standalone machines, and well-lit, high-traffic areas.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Monitor Transactions</h4>
                  <p className="text-gray-700">Check your accounts regularly and set up transaction alerts for immediate notification.</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Modern Skimming Techniques</h2>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-yellow-800 mb-4">⚠️ Advanced Threats to Know</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Shimming Devices</h4>
                <p className="text-yellow-600 text-sm mb-3">Ultra-thin devices inserted directly into chip card slots that are nearly impossible to detect visually.</p>
                
                <h4 className="font-semibold text-yellow-700 mb-2">Bluetooth Skimmers</h4>
                <p className="text-yellow-600 text-sm">Wireless devices that transmit stolen data remotely, eliminating the need for criminals to return.</p>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-700 mb-2">Deep Insert Skimmers</h4>
                <p className="text-yellow-600 text-sm mb-3">Devices placed deep inside the card reader slot, making them extremely difficult to detect.</p>
                
                <h4 className="font-semibold text-yellow-700 mb-2">Handheld Skimmers</h4>
                <p className="text-yellow-600 text-sm">Portable devices used by dishonest employees in restaurants or retail stores.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">What to Do if You Find a Skimmer</h2>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-red-800 mb-4">🚨 Immediate Action Steps</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <span className="font-bold text-red-800">1.</span>
                <div>
                  <h4 className="font-semibold text-red-800">Don't Use the Machine</h4>
                  <p className="text-red-700 text-sm">Step away immediately and don't insert your card.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="font-bold text-red-800">2.</span>
                <div>
                  <h4 className="font-semibold text-red-800">Alert Others</h4>
                  <p className="text-red-700 text-sm">Warn nearby people not to use the compromised machine.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="font-bold text-red-800">3.</span>
                <div>
                  <h4 className="font-semibold text-red-800">Report to Authorities</h4>
                  <p className="text-red-700 text-sm">Contact local police and the business owner or bank immediately.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="font-bold text-red-800">4.</span>
                <div>
                  <h4 className="font-semibold text-red-800">Document Evidence</h4>
                  <p className="text-red-700 text-sm">Take photos (safely) and note the location and time for authorities.</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Technology Solutions</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobile Apps</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Bluetooth scanner apps</li>
                <li>• Hidden camera detectors</li>
                <li>• Bank's official ATM locators</li>
                <li>• Transaction monitoring apps</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Account Protections</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Real-time transaction alerts</li>
                <li>• Spending limit controls</li>
                <li>• Geographic restrictions</li>
                <li>• Temporary card freezing</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Payment Alternatives</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Apple Pay / Google Pay</li>
                <li>• Virtual credit card numbers</li>
                <li>• RFID-blocking wallets</li>
                <li>• Cash for high-risk locations</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What is a card skimmer and how does it work?</h3>
              <p className="text-gray-700">
                A card skimmer is a device placed over legitimate card readers to steal credit and debit card information. It captures magnetic stripe data when you swipe your card, while a hidden camera or fake keypad records your PIN.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Where are skimmers most commonly found?</h3>
              <p className="text-gray-700">
                Skimmers are most commonly found on ATMs, gas station pumps, point-of-sale terminals in restaurants and retail stores, and public card readers in tourist areas or less secure locations.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How can I tell if a card reader has been tampered with?</h3>
              <p className="text-gray-700">
                Look for loose parts, unusual bulk or thickness, misaligned components, different colors or materials, sticky tape or glue residue, and wiggle the card reader gently to check if it's securely attached.
              </p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">🎯 Key Takeaways</h3>
            <ul className="text-green-700 space-y-1">
              <li>• Always inspect card readers before use - look and touch</li>
              <li>• Cover your PIN entry with your hand or body</li>
              <li>• Use contactless payments whenever possible</li>
              <li>• Choose bank ATMs over standalone machines</li>
              <li>• Monitor your accounts regularly with transaction alerts</li>
            </ul>
          </div>
        </div>
      </article>

      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-wrap gap-4">
          <Link href="/how-to/how-to-use-virtual-cards-for-safer-online-shopping" className="text-pink-600 hover:text-pink-700 underline">
            Virtual Card Safety
          </Link>
          <Link href="/how-to/how-to-set-up-alerts-for-unusual-transactions" className="text-pink-600 hover:text-pink-700 underline">
            Transaction Alerts Setup
          </Link>
          <Link href="/how-to/how-to-protect-yourself-on-public-wifi" className="text-pink-600 hover:text-pink-700 underline">
            Public Wi-Fi Security
          </Link>
          <Link href="/category/how-to" className="text-pink-600 hover:text-pink-700 underline">
            All How-To Guides
          </Link>
        </div>
      </footer>
    </div>
  );
}