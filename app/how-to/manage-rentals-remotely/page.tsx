import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Remote Landlording: Systems to Run Rentals Anywhere',
  description: 'Set up software, vendors, and SOPs to manage properties remotely with speed and accountability from any location.',
  keywords: 'remote landlording, property management systems, SOPs, virtual property management, rental automation, landlord technology',
};

export default function ManageRentalsRemotelyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can tenants self-show properties safely?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, with ID verification, one-time access codes, and exterior cameras facing public areas (where legal). Use smart lockboxes and require pre-qualification before showing."
        }
      },
      {
        "@type": "Question", 
        "name": "What property management software is best for remote landlords?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Popular options include Buildium, AppFolio, RentSpree, and TurboTenant. Choose based on portfolio size, feature needs, and integration capabilities."
        }
      },
      {
        "@type": "Question",
        "name": "How do you handle maintenance requests remotely?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Use tenant portals for request submission, triage scripts for prioritization, preferred vendor networks for execution, and photo proof for completion verification."
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
          <span className="text-pink-600">Remote Property Management</span>
        </div>
      </nav>

      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Remote Landlording: Systems to Run Rentals Anywhere
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Build a bulletproof remote property management system with technology, processes, and local teams that deliver professional results from anywhere in the world.
          </p>
        </header>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">🌍 Remote Management Benefits</h2>
          <p className="text-blue-700">
            Remote property management enables geographic diversification, time freedom, and scalable systems. With proper setup, you can manage properties as effectively from across the country as from across the street.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Tech Stack & SOPs</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Remote Management Systems</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">🏠 Leasing & Tenant Management</h4>
                <ul className="text-blue-800 text-sm space-y-1 mb-4">
                  <li>• <strong>Virtual tours:</strong> 3D walkthroughs, video tours, high-quality photos</li>
                  <li>• <strong>Online applications:</strong> Digital screening and document collection</li>
                  <li>• <strong>E-signatures:</strong> Remote lease execution and addenda</li>
                  <li>• <strong>Self-showings:</strong> Smart lockboxes with one-time codes</li>
                  <li>• <strong>Digital onboarding:</strong> Welcome packets and orientation videos</li>
                </ul>
                
                <h4 className="font-semibold text-green-900 mb-3">💰 Payments & Financial Management</h4>
                <ul className="text-green-800 text-sm space-y-1">
                  <li>• <strong>Online rent collection:</strong> Auto-pay and multiple payment options</li>
                  <li>• <strong>Automated late fees:</strong> System-generated charges and notices</li>
                  <li>• <strong>Digital receipts:</strong> Instant confirmation and record keeping</li>
                  <li>• <strong>Expense tracking:</strong> Receipt scanning and categorization</li>
                  <li>• <strong>Owner distributions:</strong> Automated monthly statements</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-purple-900 mb-3">🔧 Maintenance & Operations</h4>
                <ul className="text-purple-800 text-sm space-y-1 mb-4">
                  <li>• <strong>Tenant portal:</strong> 24/7 maintenance request submission</li>
                  <li>• <strong>Triage scripts:</strong> Automated prioritization and routing</li>
                  <li>• <strong>Vendor dispatch:</strong> Automatic job assignment and tracking</li>
                  <li>• <strong>Photo documentation:</strong> Before/during/after work photos</li>
                  <li>• <strong>Completion verification:</strong> Digital sign-offs and billing</li>
                </ul>
                
                <h4 className="font-semibold text-orange-900 mb-3">📊 Inspections & Monitoring</h4>
                <ul className="text-orange-800 text-sm space-y-1">
                  <li>• <strong>Move-in/out checklists:</strong> Timestamped photo documentation</li>
                  <li>• <strong>Annual inspections:</strong> Scheduled walkthroughs with reports</li>
                  <li>• <strong>Smart home monitoring:</strong> Temperature, moisture, security alerts</li>
                  <li>• <strong>Preventive maintenance:</strong> Scheduled reminders and tasks</li>
                  <li>• <strong>Compliance tracking:</strong> Permits, insurance, safety inspections</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Building Your Local Team</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Essential Team Members & Vendors</h3>
            
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">🛠️ Core Maintenance Team</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-blue-800 mb-1"><strong>Handyman/General Contractor:</strong></p>
                    <ul className="text-blue-700 space-y-1">
                      <li>• Licensed, bonded, and insured</li>
                      <li>• Can handle multiple trade types</li>
                      <li>• Available for emergency calls</li>
                      <li>• Provides detailed work estimates</li>
                      <li>• Communicates via text/email</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-blue-800 mb-1"><strong>Specialized Trades:</strong></p>
                    <ul className="text-blue-700 space-y-1">
                      <li>• Licensed plumber (24/7 availability)</li>
                      <li>• Electrician (code compliance focus)</li>
                      <li>• HVAC technician (preventive maintenance)</li>
                      <li>• Roofing contractor (emergency repairs)</li>
                      <li>• Appliance repair specialists</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">🏠 Property Services</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-green-800 mb-1"><strong>Cleaning & Maintenance:</strong></p>
                    <ul className="text-green-700 space-y-1">
                      <li>• Move-out deep cleaning service</li>
                      <li>• Regular maintenance cleaner</li>
                      <li>• Landscaping and lawn care</li>
                      <li>• Snow removal (climate dependent)</li>
                      <li>• Pressure washing service</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-green-800 mb-1"><strong>Security & Access:</strong></p>
                    <ul className="text-green-700 space-y-1">
                      <li>• Locksmith for rekeying/emergencies</li>
                      <li>• Security system monitoring</li>
                      <li>• Key management service</li>
                      <li>• Property inspector for walkthroughs</li>
                      <li>• Photography service for marketing</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-2">⚖️ Professional Services</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-purple-800 mb-1"><strong>Legal & Financial:</strong></p>
                    <ul className="text-purple-700 space-y-1">
                      <li>• Real estate attorney (evictions, disputes)</li>
                      <li>• Accountant familiar with rentals</li>
                      <li>• Insurance agent for claims</li>
                      <li>• Property tax consultant</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-purple-800 mb-1"><strong>Market Experts:</strong></p>
                    <ul className="text-purple-700 space-y-1">
                      <li>• Real estate agent (market knowledge)</li>
                      <li>• Property appraiser</li>
                      <li>• Local investor network contacts</li>
                      <li>• Property management consultant</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Communication Systems & SOPs</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Streamlined Communication Workflows</h3>
            
            <div className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-semibold text-yellow-900 mb-2">📧 Central Communication Hub</h4>
                <div className="text-sm text-yellow-800">
                  <p className="mb-2">Use one shared inbox/system for all property-related communications:</p>
                  <ul className="space-y-1">
                    <li>• Dedicated email address (properties@yourcompany.com)</li>
                    <li>• Property management software messaging center</li>
                    <li>• Centralized phone number with call routing</li>
                    <li>• Team access to all communications</li>
                    <li>• Auto-responses for common questions</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">⏱️ Response Time Standards (SLAs)</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h5 className="font-semibold text-blue-800 mb-1">🚨 Emergency (1 hour)</h5>
                    <ul className="text-blue-700 space-y-1">
                      <li>• No heat/AC (extreme weather)</li>
                      <li>• Water leaks or flooding</li>
                      <li>• Electrical hazards</li>
                      <li>• Security breaches</li>
                      <li>• Gas leaks</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-800 mb-1">⚡ Urgent (4-8 hours)</h5>
                    <ul className="text-blue-700 space-y-1">
                      <li>• Plumbing issues</li>
                      <li>• Appliance failures</li>
                      <li>• Lock-outs</li>
                      <li>• Minor electrical problems</li>
                      <li>• HVAC malfunctions</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-800 mb-1">📅 Routine (24-48 hours)</h5>
                    <ul className="text-blue-700 space-y-1">
                      <li>• Cosmetic issues</li>
                      <li>• Non-essential repairs</li>
                      <li>• General inquiries</li>
                      <li>• Preventive maintenance</li>
                      <li>• Administrative requests</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">📝 Documentation Requirements</h4>
                <div className="text-sm text-green-800">
                  <ul className="space-y-1">
                    <li>• Every interaction logged with date/time stamps</li>
                    <li>• Photos required for all work orders and inspections</li>
                    <li>• Vendor estimates pre-approved for jobs >$200</li>
                    <li>• Completion photos and receipts for all work</li>
                    <li>• Monthly summary reports for owners</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Technology Solutions & Software</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Essential Software Stack</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">🏠 Property Management Platforms</h4>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded">
                    <h5 className="font-semibold text-blue-800 mb-1">Enterprise (50+ units)</h5>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• AppFolio - Full-featured</li>
                      <li>• Buildium - Scalable</li>
                      <li>• Yardi Breeze - Professional</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded">
                    <h5 className="font-semibold text-green-800 mb-1">Small-Medium (5-50 units)</h5>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• RentSpree - User-friendly</li>
                      <li>• TurboTenant - Budget option</li>
                      <li>• Rentals.com - Marketing focus</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 p-3 rounded">
                    <h5 className="font-semibold text-purple-800 mb-1">DIY/Small (1-5 units)</h5>
                    <ul className="text-purple-700 text-sm space-y-1">
                      <li>• Avail - Simple and free</li>
                      <li>• Zillow Rental Manager</li>
                      <li>• Cozy (now Apartments.com)</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-green-900 mb-3">💰 Financial Management</h4>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded">
                    <h5 className="font-semibold text-green-800 mb-1">Accounting Software</h5>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• QuickBooks Online</li>
                      <li>• Xero (international)</li>
                      <li>• FreshBooks (simple)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-50 p-3 rounded">
                    <h5 className="font-semibold text-yellow-800 mb-1">Payment Processing</h5>
                    <ul className="text-yellow-700 text-sm space-y-1">
                      <li>• Stripe/PayPal integration</li>
                      <li>• ACH bank transfers</li>
                      <li>• Credit card processing</li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-50 p-3 rounded">
                    <h5 className="font-semibold text-orange-800 mb-1">Expense Tracking</h5>
                    <ul className="text-orange-700 text-sm space-y-1">
                      <li>• Receipt scanning apps</li>
                      <li>• Mileage tracking</li>
                      <li>• Automated categorization</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-purple-900 mb-3">🔧 Operations & Maintenance</h4>
                <div className="space-y-3">
                  <div className="bg-purple-50 p-3 rounded">
                    <h5 className="font-semibold text-purple-800 mb-1">Smart Home Tech</h5>
                    <ul className="text-purple-700 text-sm space-y-1">
                      <li>• Smart thermostats</li>
                      <li>• Water leak sensors</li>
                      <li>• Smart locks/keypads</li>
                      <li>• Security cameras</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 p-3 rounded">
                    <h5 className="font-semibold text-red-800 mb-1">Maintenance Apps</h5>
                    <ul className="text-red-700 text-sm space-y-1">
                      <li>• TaskRabbit/Handy</li>
                      <li>• Thumbtack contractor network</li>
                      <li>• Local service platforms</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded">
                    <h5 className="font-semibold text-blue-800 mb-1">Communication Tools</h5>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• Slack/Microsoft Teams</li>
                      <li>• Google Voice numbers</li>
                      <li>• Video calling platforms</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Performance Metrics</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Metrics to Monitor Remotely</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">📊 Operational Metrics</h4>
                <div className="bg-blue-50 p-3 rounded mb-3">
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• <strong>Response time:</strong> Average time to acknowledge requests</li>
                    <li>• <strong>Resolution time:</strong> Days to complete work orders</li>
                    <li>• <strong>Tenant satisfaction:</strong> Survey scores and retention rates</li>
                    <li>• <strong>Vendor performance:</strong> Quality scores and timeliness</li>
                    <li>• <strong>Preventive maintenance:</strong> Completion rate of scheduled tasks</li>
                  </ul>
                </div>
                
                <h4 className="font-semibold text-green-900 mb-3">💰 Financial Metrics</h4>
                <div className="bg-green-50 p-3 rounded">
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>• <strong>Collection rate:</strong> Percentage of rent collected on time</li>
                    <li>• <strong>Delinquency rate:</strong> Percentage of tenants behind on rent</li>
                    <li>• <strong>Operating expense ratio:</strong> OpEx as percentage of income</li>
                    <li>• <strong>Maintenance cost per unit:</strong> Monthly average spending</li>
                    <li>• <strong>Vacancy rate:</strong> Percentage of units vacant</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-purple-900 mb-3">🏠 Property Performance</h4>
                <div className="bg-purple-50 p-3 rounded mb-3">
                  <ul className="text-purple-800 text-sm space-y-1">
                    <li>• <strong>Days on market:</strong> Time to lease vacant units</li>
                    <li>• <strong>Lease renewal rate:</strong> Percentage of tenants renewing</li>
                    <li>• <strong>Turnover costs:</strong> Average cost per unit turn</li>
                    <li>• <strong>Rent growth:</strong> Year-over-year rent increases</li>
                    <li>• <strong>Inspection scores:</strong> Property condition ratings</li>
                  </ul>
                </div>
                
                <h4 className="font-semibold text-orange-900 mb-3">📈 Growth Metrics</h4>
                <div className="bg-orange-50 p-3 rounded">
                  <ul className="text-orange-800 text-sm space-y-1">
                    <li>• <strong>Portfolio NOI:</strong> Net operating income growth</li>
                    <li>• <strong>Property values:</strong> Estimated appreciation</li>
                    <li>• <strong>Cash flow per unit:</strong> Monthly net income</li>
                    <li>• <strong>ROI/CoC return:</strong> Return on invested capital</li>
                    <li>• <strong>Scalability metrics:</strong> Properties managed per hour</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Remote Management Challenges</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Challenges & Solutions</h3>
            
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-900 mb-2">🚧 Challenge: Emergency Response Times</h4>
                <p className="text-red-800 text-sm mb-2">
                  <strong>Problem:</strong> Can't physically respond to emergencies immediately.
                </p>
                <div className="text-red-700 text-sm">
                  <p className="font-semibold mb-1">Solutions:</strong>
                  <ul className="space-y-1">
                    <li>• Maintain 24/7 emergency contractor relationships</li>
                    <li>• Pre-authorize emergency spending limits</li>
                    <li>• Install smart home monitoring systems</li>
                    <li>• Create detailed emergency response protocols</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-semibold text-yellow-900 mb-2">🚧 Challenge: Vendor Management & Quality Control</h4>
                <p className="text-yellow-800 text-sm mb-2">
                  <strong>Problem:</strong> Difficult to verify work quality and prevent overcharging.
                </p>
                <div className="text-yellow-700 text-sm">
                  <p className="font-semibold mb-1">Solutions:</p>
                  <ul className="space-y-1">
                    <li>• Require before/during/after photos for all work</li>
                    <li>• Establish spending limits requiring approval</li>
                    <li>• Build relationships with multiple vendors per trade</li>
                    <li>• Conduct periodic quality inspections</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">🚧 Challenge: Local Market Knowledge</h4>
                <p className="text-blue-800 text-sm mb-2">
                  <strong>Problem:</strong> Missing local trends, regulations, and market changes.
                </p>
                <div className="text-blue-700 text-sm">
                  <p className="font-semibold mb-1">Solutions:</p>
                  <ul className="space-y-1">
                    <li>• Join local real estate investor groups online</li>
                    <li>• Maintain relationships with local agents</li>
                    <li>• Subscribe to local news and market reports</li>
                    <li>• Schedule periodic market visits</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Can tenants self-show properties safely?</h3>
              <p className="text-gray-700">
                Yes, with ID verification, one-time access codes, and exterior cameras facing public areas (where legal). Use smart lockboxes and require pre-qualification before showing.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What property management software is best for remote landlords?</h3>
              <p className="text-gray-700">
                Popular options include Buildium, AppFolio, RentSpree, and TurboTenant. Choose based on portfolio size, feature needs, and integration capabilities.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How do you handle maintenance requests remotely?</h3>
              <p className="text-gray-700">
                Use tenant portals for request submission, triage scripts for prioritization, preferred vendor networks for execution, and photo proof for completion verification.
              </p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">🎯 Key Takeaways</h3>
            <ul className="text-green-700 space-y-1">
              <li>• Invest heavily in technology and automation systems</li>
              <li>• Build reliable local vendor networks before you need them</li>
              <li>• Establish clear SOPs and response time standards</li>
              <li>• Use photos and documentation for all work and inspections</li>
              <li>• Monitor key metrics to ensure performance doesn't suffer</li>
            </ul>
          </div>
        </div>
      </article>

      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-wrap gap-4">
          <Link href="/how-to/reduce-vacancy-and-tenant-turnover" className="text-pink-600 hover:text-pink-700 underline">
            Reduce Vacancy & Turnover
          </Link>
          <Link href="/how-to/legal-fair-tenant-screening" className="text-pink-600 hover:text-pink-700 underline">
            Legal Tenant Screening
          </Link>
          <Link href="/how-to/handle-security-deposits-correctly" className="text-pink-600 hover:text-pink-700 underline">
            Security Deposits Guide
          </Link>
          <Link href="/category/how-to" className="text-pink-600 hover:text-pink-700 underline">
            All How-To Guides
          </Link>
        </div>
      </footer>
    </div>
  );
}