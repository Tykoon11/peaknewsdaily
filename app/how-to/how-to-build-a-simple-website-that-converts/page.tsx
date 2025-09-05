import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Build a Simple Website That Converts - Professional Web Presence Guide',
  description: 'Create a professional website that attracts clients and converts visitors into customers. Learn essential pages, design principles, and conversion optimization.',
}

export default function BuildSimpleWebsiteConverts() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="mb-8">
        <Link href="/category/how-to" className="text-pink-600 hover:text-pink-700 text-sm font-medium">
          ← Back to How-To Guides
        </Link>
      </nav>

      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How to Build a Simple Website That Converts
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Create a professional website that establishes credibility, showcases your expertise, 
            and converts visitors into paying clients without technical complexity or huge budgets.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <div className="bg-pink-50 border-l-4 border-pink-500 p-6 mb-8">
            <h2 className="text-lg font-semibold text-pink-800 mb-2">Professional Impact</h2>
            <p className="text-pink-700 mb-0">
              81% of consumers research businesses online before making purchasing decisions. A 
              professional website increases perceived credibility by 75% and can generate 24/7 
              leads while you sleep. Your website is your most powerful sales tool.
            </p>
          </div>

          <h2>The High-Converting Website Blueprint</h2>
          
          <h3>1. Essential Pages Every Converting Website Needs</h3>
          <p>
            <strong>Focus on five core pages that drive conversions.</strong> More pages don't 
            equal better results. Each page should have a specific purpose and guide visitors 
            toward taking action.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-4">The Five-Page Converting Website Structure:</h4>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                <strong>Homepage:</strong> Clear value proposition, social proof, call-to-action
              </div>
              <div className="bg-white p-4 rounded border-l-4 border-green-500">
                <strong>About Page:</strong> Your story, credentials, why clients should trust you
              </div>
              <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                <strong>Services Page:</strong> What you offer, pricing (if applicable), process
              </div>
              <div className="bg-white p-4 rounded border-l-4 border-orange-500">
                <strong>Portfolio/Case Studies:</strong> Proof of results, client testimonials
              </div>
              <div className="bg-white p-4 rounded border-l-4 border-red-500">
                <strong>Contact Page:</strong> Multiple ways to reach you, clear next steps
              </div>
            </div>
          </div>

          <h3>2. Platform Selection: Simple vs. Powerful</h3>

          <p>
            <strong>Choose platforms that balance ease-of-use with professional appearance.</strong> 
            You don't need custom coding - modern website builders create professional results 
            in hours, not months.
          </p>

          <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg my-6">
            <h4 className="font-semibold text-blue-800 mb-3">Best Platforms by Business Type:</h4>
            
            <div className="space-y-4">
              <div>
                <strong className="text-blue-800">Service Businesses (Consultants, Freelancers):</strong>
                <ul className="text-blue-700 mt-2 space-y-1">
                  <li><strong>Squarespace ($12-18/month):</strong> Beautiful templates, easy customization</li>
                  <li><strong>Webflow ($12-36/month):</strong> Professional design control, no coding needed</li>
                  <li><strong>WordPress with Elementor ($5-25/month):</strong> Most flexible, slight learning curve</li>
                </ul>
              </div>
              
              <div>
                <strong className="text-blue-800">Product/E-commerce Businesses:</strong>
                <ul className="text-blue-700 mt-2 space-y-1">
                  <li><strong>Shopify ($29-79/month):</strong> Complete e-commerce solution</li>
                  <li><strong>Wix ($14-39/month):</strong> User-friendly with good e-commerce features</li>
                  <li><strong>Square Online (Free-$29/month):</strong> Integrated with Square payments</li>
                </ul>
              </div>
              
              <div>
                <strong className="text-blue-800">Budget-Conscious Startups:</strong>
                <ul className="text-blue-700 mt-2 space-y-1">
                  <li><strong>Carrd ($9/year):</strong> Single-page sites, perfect for simple needs</li>
                  <li><strong>GitHub Pages (Free):</strong> For tech-savvy users, custom domain available</li>
                  <li><strong>Wix (Free tier):</strong> Limited but functional, upgrade as you grow</li>
                </ul>
              </div>
            </div>
          </div>

          <h3>3. Homepage That Converts in 8 Seconds</h3>

          <p>
            <strong>Visitors decide whether to stay or leave within 8 seconds.</strong> Your 
            homepage must immediately communicate what you do, who you help, and why they should care.
          </p>

          <h4>The Perfect Homepage Formula:</h4>

          <div className="space-y-4 my-6">
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <strong>Hero Section (Above the Fold):</strong>
              <ul className="mt-2 space-y-1 text-sm">
                <li>Clear headline stating what you do + who you help</li>
                <li>Subheading explaining the main benefit</li>
                <li>Professional photo or relevant hero image</li>
                <li>Primary call-to-action button</li>
                <li>Trust indicators (certifications, client logos)</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <strong>Social Proof Section:</strong>
              <ul className="mt-2 space-y-1 text-sm">
                <li>Client testimonials with photos and full names</li>
                <li>Results/numbers (clients served, revenue generated)</li>
                <li>Client logos or case study previews</li>
                <li>Industry awards or certifications</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
              <strong>Services Overview:</strong>
              <ul className="mt-2 space-y-1 text-sm">
                <li>3-4 main services with brief descriptions</li>
                <li>Icons or images for visual appeal</li>
                <li>Link to detailed services page</li>
                <li>Process overview (how you work with clients)</li>
              </ul>
            </div>
          </div>

          <h4>Headline Formulas That Work:</h4>
          <div className="bg-gray-50 p-4 rounded-lg my-6">
            <ul className="space-y-2">
              <li><strong>"I help [target audience] [achieve specific result] without [common obstacle]"</strong></li>
              <li><strong>"The [Service] That [Specific Benefit] for [Target Market]"</strong></li>
              <li><strong>"Get [Desired Outcome] in [Time Frame] or [Guarantee]"</strong></li>
            </ul>
            
            <div className="mt-4 pt-4 border-t">
              <strong>Examples:</strong>
              <ul className="mt-2 space-y-1 text-sm text-gray-600">
                <li>"I help small businesses double their revenue without increasing ad spend"</li>
                <li>"The marketing consultant that generates 300% ROI for SaaS companies"</li>
                <li>"Get your website redesigned in 2 weeks or your money back"</li>
              </ul>
            </div>
          </div>

          <h3>4. About Page That Builds Trust</h3>

          <p>
            <strong>Your About page is often the second-most visited page.</strong> Don't make it 
            about you - make it about how your background helps solve their problems.
          </p>

          <h4>Trust-Building About Page Structure:</h4>

          <div className="space-y-4 my-6">
            <div className="border-l-4 border-yellow-500 pl-4">
              <strong>Opening Hook:</strong> Start with the problem you solve or transformation you provide
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <strong>Your Origin Story:</strong> What led you to this work, personal connection to the problem
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <strong>Credentials & Proof:</strong> Relevant experience, education, certifications, results
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <strong>Personal Touch:</strong> Interests, values, photo that shows personality
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <strong>Call-to-Action:</strong> Next step for interested prospects
            </div>
          </div>

          <h3>5. Services Page That Sells</h3>

          <p>
            Present your services as solutions to specific problems, not just lists of what you do. 
            Focus on outcomes and benefits rather than features and processes.
          </p>

          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg my-6">
            <h4 className="font-semibold text-yellow-800 mb-3">Service Description Formula:</h4>
            <div className="text-yellow-700 space-y-3">
              <div><strong>Problem Statement:</strong> "Many businesses struggle with..."</div>
              <div><strong>Solution Overview:</strong> "My [service] helps you..."</div>
              <div><strong>Process:</strong> "Here's how we'll work together..."</div>
              <div><strong>Outcomes:</strong> "You'll get/achieve..."</div>
              <div><strong>Investment:</strong> "Starting at $X" or "Let's discuss your needs"</div>
              <div><strong>Next Step:</strong> Clear call-to-action button</div>
            </div>
          </div>

          <h4>Pricing Strategy Options:</h4>
          <ul>
            <li><strong>Display pricing:</strong> If standardized services, builds trust and pre-qualifies</li>
            <li><strong>Starting at pricing:</strong> "Projects starting at $2,500" gives ballpark</li>
            <li><strong>Custom pricing:</strong> "Let's discuss your specific needs" for complex projects</li>
            <li><strong>Value-based messaging:</strong> Focus on ROI and outcomes rather than hourly rates</li>
          </ul>

          <h3>6. Portfolio/Case Studies That Prove Results</h3>

          <p>
            <strong>Show, don't just tell.</strong> Case studies are your most powerful conversion 
            tool because they provide social proof and demonstrate tangible results.
          </p>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6">
            <h4 className="font-semibent text-green-800 mb-3">Case Study Template:</h4>
            <div className="space-y-3 text-green-700">
              <div><strong>Client & Challenge:</strong> "Company X was struggling with Y problem"</div>
              <div><strong>Solution:</strong> "We implemented Z strategy/solution"</div>
              <div><strong>Process:</strong> "Here's what we did step-by-step"</div>
              <div><strong>Results:</strong> "This led to [specific, measurable outcomes]"</div>
              <div><strong>Testimonial:</strong> Direct quote from satisfied client</div>
            </div>
          </div>

          <h4>When You Don't Have Case Studies Yet:</h4>
          <ul>
            <li><strong>Personal projects:</strong> Document your own business improvements</li>
            <li><strong>Pro bono work:</strong> Offer free services to build portfolio</li>
            <li><strong>Before/after examples:</strong> Show transformation in any form</li>
            <li><strong>Process documentation:</strong> Show your methodology and approach</li>
            <li><strong>Skills demonstration:</strong> Create samples that showcase abilities</li>
          </ul>

          <h3>7. Contact Page That Converts</h3>

          <p>
            <strong>Make it ridiculously easy to contact you.</strong> Remove friction and provide 
            multiple contact options to match different communication preferences.
          </p>

          <h4>Essential Contact Page Elements:</h4>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="bg-gray-50 p-4 rounded">
              <h5 className="font-semibold mb-2">Multiple Contact Methods:</h5>
              <ul className="text-sm space-y-1">
                <li>Contact form (most important)</li>
                <li>Direct email address</li>
                <li>Phone number (if you answer)</li>
                <li>Calendar booking link</li>
                <li>Physical address (if relevant)</li>
                <li>Social media links</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded">
              <h5 className="font-semibold mb-2">Clear Expectations:</h5>
              <ul className="text-sm space-y-1">
                <li>Response time commitment</li>
                <li>What information to include</li>
                <li>What happens after they contact you</li>
                <li>Best times to reach you</li>
                <li>Project minimums (if applicable)</li>
              </ul>
            </div>
          </div>

          <h3>8. Design Principles That Convert</h3>

          <p>
            <strong>Good design isn't about looking pretty - it's about guiding visitors toward action.</strong> 
            Follow proven principles that increase conversions.
          </p>

          <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg my-6">
            <h4 className="font-semibold text-blue-800 mb-3">Conversion-Focused Design Rules:</h4>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <strong className="text-blue-800">Visual Hierarchy:</strong>
                <ul className="text-blue-700 mt-2 space-y-1">
                  <li>Most important elements are largest/boldest</li>
                  <li>Use white space to focus attention</li>
                  <li>Consistent heading sizes and spacing</li>
                  <li>Guide eyes toward call-to-action buttons</li>
                </ul>
              </div>
              
              <div>
                <strong className="text-blue-800">Trust & Credibility:</strong>
                <ul className="text-blue-700 mt-2 space-y-1">
                  <li>Professional photography</li>
                  <li>Consistent branding and colors</li>
                  <li>No typos or broken links</li>
                  <li>Mobile-responsive design</li>
                </ul>
              </div>
            </div>
          </div>

          <h4>Color Psychology for Conversions:</h4>
          <div className="space-y-2 my-6">
            <div className="bg-blue-100 p-3 rounded">
              <strong>Blue:</strong> Trust, reliability, professionalism (finance, healthcare, tech)
            </div>
            <div className="bg-green-100 p-3 rounded">
              <strong>Green:</strong> Growth, success, money (business, finance, environmental)
            </div>
            <div className="bg-orange-100 p-3 rounded">
              <strong>Orange:</strong> Energy, enthusiasm, call-to-action buttons
            </div>
            <div className="bg-purple-100 p-3 rounded">
              <strong>Purple:</strong> Creativity, luxury, innovation (design, beauty, premium services)
            </div>
          </div>

          <h3>9. Website Speed and Technical Optimization</h3>

          <p>
            <strong>Page speed directly impacts conversions.</strong> A one-second delay in load time 
            can reduce conversions by 7%. Optimize for speed from day one.
          </p>

          <h4>Speed Optimization Checklist:</h4>
          <ul>
            <li><strong>Optimize images:</strong> Compress photos, use appropriate formats (WebP when possible)</li>
            <li><strong>Choose fast hosting:</strong> Avoid cheap shared hosting for business sites</li>
            <li><strong>Minimize plugins:</strong> Only use essential functionality</li>
            <li><strong>Use content delivery networks (CDN):</strong> Cloudflare offers free CDN services</li>
            <li><strong>Regular updates:</strong> Keep platform and plugins updated for performance</li>
          </ul>

          <h4>Mobile Optimization (Essential):</h4>
          <ul>
            <li><strong>Responsive design:</strong> Site adapts to all screen sizes</li>
            <li><strong>Touch-friendly buttons:</strong> Minimum 44px touch targets</li>
            <li><strong>Fast loading:</strong> Mobile users are less patient</li>
            <li><strong>Simplified navigation:</strong> Easy thumb navigation</li>
            <li><strong>Readable text:</strong> No zooming required to read content</li>
          </ul>

          <h3>10. Lead Generation and Analytics Setup</h3>

          <p>
            <strong>Your website should generate leads while you sleep.</strong> Implement systems 
            to capture visitor information and track what's working.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-4">Essential Lead Generation Tools:</h4>
            
            <div className="space-y-4">
              <div>
                <strong>Contact Forms:</strong> Multiple forms throughout site, not just contact page
              </div>
              
              <div>
                <strong>Lead Magnets:</strong> Free resources in exchange for email addresses
                <ul className="mt-2 space-y-1 text-sm">
                  <li>Checklists, templates, guides</li>
                  <li>Free consultations or audits</li>
                  <li>Email courses or newsletters</li>
                  <li>Industry reports or case studies</li>
                </ul>
              </div>
              
              <div>
                <strong>Calendar Booking:</strong> Calendly, Acuity, or similar for easy scheduling
              </div>
              
              <div>
                <strong>Live Chat:</strong> Respond to questions in real-time (Intercom, Drift, or free options)
              </div>
            </div>
          </div>

          <h4>Analytics and Tracking Setup:</h4>
          <div className="space-y-2 my-6">
            <div className="bg-gray-100 p-3 rounded">
              <strong>Google Analytics:</strong> Track visitors, page views, bounce rates, conversions
            </div>
            <div className="bg-gray-100 p-3 rounded">
              <strong>Google Search Console:</strong> Monitor search performance and technical issues
            </div>
            <div className="bg-gray-100 p-3 rounded">
              <strong>Heat Mapping:</strong> Hotjar or Microsoft Clarity show user behavior
            </div>
            <div className="bg-gray-100 p-3 rounded">
              <strong>Conversion Tracking:</strong> Monitor contact form submissions, downloads, bookings
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
            <h3 className="text-lg font-semibold text-green-800 mb-2">Your 30-Day Website Launch Plan</h3>
            <div className="space-y-4">
              <div>
                <strong className="text-green-800">Week 1: Foundation</strong>
                <ul className="text-green-700 mt-2 space-y-1">
                  <li>Choose platform and purchase domain/hosting</li>
                  <li>Write all website copy focusing on benefits and outcomes</li>
                  <li>Gather photos, testimonials, and portfolio pieces</li>
                  <li>Set up basic brand colors and style guide</li>
                </ul>
              </div>
              
              <div>
                <strong className="text-green-800">Week 2: Build</strong>
                <ul className="text-green-700 mt-2 space-y-1">
                  <li>Create homepage with strong value proposition</li>
                  <li>Build about, services, and contact pages</li>
                  <li>Add portfolio/case studies section</li>
                  <li>Optimize for mobile devices</li>
                </ul>
              </div>
              
              <div>
                <strong className="text-green-800">Week 3: Optimize</strong>
                <ul className="text-green-700 mt-2 space-y-1">
                  <li>Test site speed and fix issues</li>
                  <li>Set up contact forms and analytics</li>
                  <li>Proofread all content thoroughly</li>
                  <li>Add lead magnets and conversion elements</li>
                </ul>
              </div>
              
              <div>
                <strong className="text-green-800">Week 4: Launch</strong>
                <ul className="text-green-700 mt-2 space-y-1">
                  <li>Final testing across devices and browsers</li>
                  <li>Submit to Google Search Console</li>
                  <li>Share with network and collect feedback</li>
                  <li>Plan ongoing content and optimization strategy</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-lg font-medium text-gray-800 mt-8">
            Remember: Your website is never "done" - it's a living tool that should evolve based on 
            user behavior and feedback. Start with these fundamentals, then continuously improve 
            based on what your analytics and visitors tell you.
          </p>
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Related Side Hustle Guides</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/how-to/how-to-find-clients-without-paid-ads" className="text-pink-600 hover:text-pink-700 hover:underline">
              → How to Find Clients Without Paid Ads
            </Link>
            <Link href="/how-to/how-to-scale-a-side-hustle-into-a-business" className="text-pink-600 hover:text-pink-700 hover:underline">
              → How to Scale a Side Hustle Into a Business
            </Link>
            <Link href="/how-to/how-to-send-invoices-that-get-paid-fast" className="text-pink-600 hover:text-pink-700 hover:underline">
              → How to Send Invoices That Get Paid Fast
            </Link>
            <Link href="/how-to/how-to-start-a-profitable-side-hustle-with-0" className="text-pink-600 hover:text-pink-700 hover:underline">
              → How to Start a Profitable Side Hustle With $0
            </Link>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">How much should I spend on a website?</h3>
              <p className="text-gray-700">
                For most service businesses, $200-500 annually covers domain, hosting, and a 
                professional platform like Squarespace. Avoid expensive custom development 
                until you're generating consistent revenue and know exactly what you need.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Do I need a blog to rank in Google?</h3>
              <p className="text-gray-700">
                A blog helps with SEO but isn't essential for local service businesses. Focus 
                on creating great service pages with local keywords, getting Google My Business 
                reviews, and building local citations first. Add a blog when you have time to 
                maintain it consistently.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Should I show my pricing on my website?</h3>
              <p className="text-gray-700">
                It depends on your business model. Show pricing if you have standardized services 
                - it builds trust and pre-qualifies prospects. Use "starting at" pricing for 
                custom work, or focus on value and outcomes rather than specific prices.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">How do I write website copy that converts?</h3>
              <p className="text-gray-700">
                Focus on benefits, not features. Use "you" language and speak directly to your 
                ideal client's problems and desired outcomes. Include social proof and specific 
                results whenever possible. Keep sentences short and use bullet points for 
                easy scanning.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">How long does it take to build a professional website?</h3>
              <p className="text-gray-700">
                Using modern website builders, you can create a professional site in 2-4 weeks 
                working part-time. The key is having your content (copy, images, testimonials) 
                prepared before you start building. Writing good copy often takes longer than 
                the actual website construction.
              </p>
            </div>
          </div>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How much should I spend on a website?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "For most service businesses, $200-500 annually covers domain, hosting, and a professional platform like Squarespace. Avoid expensive custom development until you're generating consistent revenue and know exactly what you need."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do I need a blog to rank in Google?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "A blog helps with SEO but isn't essential for local service businesses. Focus on creating great service pages with local keywords, getting Google My Business reviews, and building local citations first. Add a blog when you have time to maintain it consistently."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Should I show my pricing on my website?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "It depends on your business model. Show pricing if you have standardized services - it builds trust and pre-qualifies prospects. Use 'starting at' pricing for custom work, or focus on value and outcomes rather than specific prices."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do I write website copy that converts?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Focus on benefits, not features. Use 'you' language and speak directly to your ideal client's problems and desired outcomes. Include social proof and specific results whenever possible. Keep sentences short and use bullet points for easy scanning."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How long does it take to build a professional website?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Using modern website builders, you can create a professional site in 2-4 weeks working part-time. The key is having your content (copy, images, testimonials) prepared before you start building. Writing good copy often takes longer than the actual website construction."
                    }
                  }
                ]
              })
            }}
          />
        </section>
      </article>
    </div>
  )
}