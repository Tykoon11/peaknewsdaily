import Link from 'next/link'

export default function HowToPage() {
  const sections = [
    {
      title: "Budgeting & Saving",
      icon: "💰",
      color: "bg-green-500",
      guides: [
        "How to build a monthly budget that actually works",
        "How to use the 50/30/20 rule to budget",
        "How to budget with irregular income (freelancers & gig workers)",
        "How to track expenses automatically without spreadsheets",
        "How to create a zero-based budget step by step",
        "How to pay yourself first and automate savings",
        "How to build a 3–6 month emergency fund fast",
        "How to save money on a low income (practical steps)",
        "How to stop living paycheck to paycheck",
        "How to set SMART financial goals (templates + examples)",
        "How to use sinking funds for big purchases",
        "How to negotiate bills and subscriptions (scripts)"
      ]
    },
    {
      title: "Banking & Accounts",
      icon: "🏦",
      color: "bg-blue-500",
      guides: [
        "How to choose the best checking account with no fees",
        "How to open a high-yield savings account online",
        "How to switch banks without missing payments",
        "How to set up direct deposit and automatic transfers",
        "How to avoid overdraft fees legally",
        "How to open a business bank account (requirements)",
        "How to reconcile your bank statement like a pro",
        "How to set up joint accounts safely",
        "How to use credit unions vs banks (pros & cons)",
        "How to spot and avoid bank scams & phishing"
      ]
    },
    {
      title: "Credit Scores & Reports",
      icon: "📊",
      color: "bg-purple-500",
      guides: [
        "How to check your credit score for free",
        "How to read your credit report (line by line)",
        "How to dispute credit report errors and win",
        "How to build credit from scratch (fastest methods)",
        "How to improve your credit score in 30–90 days",
        "How to lower credit utilization the smart way",
        "How to remove late payments from your report",
        "How to handle collections and charge-offs",
        "How to get a secured credit card and upgrade later",
        "How to freeze your credit to prevent fraud"
      ]
    },
    {
      title: "Loans & Debt",
      icon: "💳",
      color: "bg-red-500",
      guides: [
        "How to use the debt snowball vs avalanche method",
        "How to consolidate credit card debt (options compared)",
        "How to get a personal loan at the best rate",
        "How to negotiate with creditors for a lower payoff",
        "How to calculate APR vs interest rate (and why it matters)",
        "How to avoid predatory payday loans",
        "How to refinance high-interest debt safely",
        "How to get out of debt on a low income",
        "How to settle debt without wrecking your credit",
        "How to use a balance transfer card the right way"
      ]
    },
    {
      title: "Mortgages & Real Estate",
      icon: "🏠",
      color: "bg-orange-500",
      guides: [
        "How to calculate your mortgage payment (PITI explained)",
        "How to get pre-approved for a mortgage",
        "How to choose fixed vs variable/adjustable rates",
        "How to buy a house with bad credit (realistic plan)",
        "How to save for a down payment fast",
        "How to avoid PMI or remove it early",
        "How to refinance your mortgage (break-even analysis)",
        "How to compare lenders and lock your rate",
        "How to buy your first rental property (beginner guide)",
        "How to house hack to live for less"
      ]
    },
    {
      title: "Car Buying & Auto Loans",
      icon: "🚗",
      color: "bg-gray-600",
      guides: [
        "Car Affordability Calculator Rules",
        "Get Best Auto Loan Rate",
        "Lease vs Finance Cheaper",
        "Refinance Car Loan Lower Payment",
        "Negotiate Car Price Scripts",
        "Buy Used Car Checklist",
        "Trade In Negative Equity",
        "Insure New Car for Less",
        "Sell Car Privately Top Dollar",
        "Get Out of Bad Car Loan",
        "Avoid Bank Scams Phishing Car Buying"
      ]
    },
    {
      title: "Investing Basics",
      icon: "📈",
      color: "bg-green-600",
      guides: [
        "How to start investing with $100 (step by step)",
        "How to choose a brokerage account (checklist)",
        "How to pick ETFs for beginners",
        "How to build a simple three-fund portfolio",
        "How to understand risk tolerance vs capacity",
        "How to dollar-cost average (and when not to)",
        "How to rebalance your portfolio automatically",
        "How to avoid common beginner investing mistakes",
        "How to read an expense ratio (and why fees kill returns)",
        "How to invest for the long term (evidence-based)"
      ]
    },
    {
      title: "Stock & ETF Trading",
      icon: "📊",
      color: "bg-blue-600",
      guides: [
        "Place Your First Stock Trade",
        "Use Stop Loss and Take Profit",
        "Read Candlestick Charts",
        "Scan for High Probability Setups",
        "Trade Earnings Season Safely",
        "Manage Risk Per Trade",
        "Avoid PDT Violations",
        "Trade ETFs vs Stocks",
        "Backtest Trading Strategy",
        "Build a Trading Journal"
      ]
    },
    {
      title: "Options, Futures & Advanced",
      icon: "⚡",
      color: "bg-yellow-600",
      guides: [
        "How to trade covered calls for monthly income",
        "How to use cash-secured puts to buy stocks cheaper",
        "How to set up a protective put (hedging 101)",
        "How to read an option chain (delta, theta, IV)",
        "How to avoid assignment risk on options",
        "How to roll options positions (when and why)",
        "How to trade futures with proper margin management",
        "How to understand leverage and not blow up",
        "How to calculate risk/reward on advanced trades",
        "How to choose an options broker (fees & tools)"
      ]
    },
    {
      title: "Forex & CFD Trading",
      icon: "💱",
      color: "bg-indigo-500",
      guides: [
        "Start Trading Forex Complete Beginner Guide",
        "Read Currency Pairs and Pips",
        "Size a Forex Position Properly",
        "Set Realistic Profit Targets in Forex",
        "Choose a Regulated Forex Broker",
        "Avoid Over Leveraging in FX",
        "Trade News Events Without Getting Whipsawed",
        "Build a Simple Forex Strategy",
        "Use MT4 MT5 Indicators Responsibly",
        "Manage Overnight Swap Financing Costs",
        "Avoid Bank Scams and Phishing Forex"
      ]
    },
    {
      title: "Crypto & Web3",
      icon: "₿",
      color: "bg-orange-600",
      guides: [
        "Buy Bitcoin Safely Step by Step",
        "Choose Crypto Exchange Security Checklist",
        "Setup Hardware Wallet Cold Storage",
        "Avoid Crypto Rug Pulls Scams",
        "Stake Crypto APY Risk",
        "Use DeFi Safely Wallet Hygiene",
        "Bridge Tokens Safely Cross Chain",
        "Report Crypto Taxes Cost Basis",
        "Recover Lost Seed Phrase What Possible",
        "Mint NFT Responsibly Fees Rights",
        "Avoid Bank Scams and Phishing"
      ]
    },
    {
      title: "Brokers & Exchanges",
      icon: "🏛️",
      color: "bg-slate-600",
      guides: [
        "How to choose a stock broker (fees, tools, support)",
        "How to transfer your brokerage account (ACAT guide)",
        "How to verify if a broker is regulated",
        "How to lower trading commissions and hidden fees",
        "How to enable margin (and when you shouldn't)",
        "How to set up paper trading to practice",
        "How to use Level 2 quotes and time & sales",
        "How to export account statements for taxes",
        "How to set up two-factor authentication correctly",
        "How to file complaints against a broker"
      ]
    },
    {
      title: "Taxes & Accounting",
      icon: "📋",
      color: "bg-emerald-600",
      guides: [
        "How to file your taxes online (checklist)",
        "How to choose standard vs itemized deductions",
        "How to track investment cost basis accurately",
        "How to reduce taxes legally (credits & deductions)",
        "How to handle side-hustle taxes (self-employment)",
        "How to file amended returns if you made a mistake",
        "How to estimate quarterly taxes and avoid penalties",
        "How to maximize RRSP/401(k)/ISA tax shelters",
        "How to claim home-office deductions properly",
        "How to find a good CPA or tax preparer"
      ]
    },
    {
      title: "Retirement & Pensions",
      icon: "🏖️",
      color: "bg-teal-600",
      guides: [
        "How to calculate your retirement number",
        "How to choose between Roth vs Traditional contributions",
        "How to roll over a 401(k)/pension when you change jobs",
        "How to invest inside a TFSA/RRSP/401(k)/IRA",
        "How to create a retirement income withdrawal plan",
        "How to avoid early withdrawal penalties",
        "How to execute a backdoor Roth (step by step)",
        "How to coordinate CPP/SSA/State pensions with savings",
        "How to ladder bonds or GICs for steady income",
        "How to avoid sequence-of-returns risk"
      ]
    },
    {
      title: "Insurance",
      icon: "🛡️",
      color: "bg-cyan-600",
      guides: [
        "How to choose the right life insurance (term vs whole)",
        "How to calculate how much life insurance you need",
        "How to lower auto insurance premiums",
        "How to shop for home/renters insurance",
        "How to pick health insurance plans (HMO vs PPO)",
        "How to file an insurance claim correctly",
        "How to avoid denied claims (documentation tips)",
        "How to choose disability insurance (own-occ vs any-occ)",
        "How to bundle policies for discounts",
        "How to compare deductibles vs premiums"
      ]
    },
    {
      title: "Student Loans & Education",
      icon: "🎓",
      color: "bg-gradient-to-br from-violet-500 to-purple-600",
      description: "Master your education financing with comprehensive guides on loans, aid, and smart borrowing strategies",
      guides: [
        {
          title: "How to apply for student loans without overborrowing",
          description: "Smart borrowing strategies to minimize debt while covering education costs",
          difficulty: "Beginner",
          readTime: "8 min"
        },
        {
          title: "How to choose federal vs private student loans",
          description: "Compare interest rates, repayment options, and benefits to make the right choice",
          difficulty: "Beginner",
          readTime: "10 min"
        },
        {
          title: "How to consolidate or refinance student debt",
          description: "Lower payments and interest rates through consolidation and refinancing",
          difficulty: "Intermediate",
          readTime: "12 min"
        },
        {
          title: "How to qualify for loan forgiveness programs",
          description: "Navigate PSLF, teacher forgiveness, and other debt relief programs",
          difficulty: "Advanced",
          readTime: "15 min"
        },
        {
          title: "How to make payments while in school (and why)",
          description: "Reduce future interest burden with strategic in-school payments",
          difficulty: "Beginner",
          readTime: "6 min"
        },
        {
          title: "How to pick a repayment plan that fits your budget",
          description: "Choose between standard, income-driven, and graduated repayment plans",
          difficulty: "Intermediate",
          readTime: "10 min"
        },
        {
          title: "How to avoid default and get back in good standing",
          description: "Prevent default consequences and rehabilitate defaulted loans",
          difficulty: "Advanced",
          readTime: "14 min"
        },
        {
          title: "How to appeal a financial aid decision",
          description: "Successfully appeal aid decisions and maximize your financial assistance",
          difficulty: "Intermediate",
          readTime: "8 min"
        },
        {
          title: "How to use scholarships and grants strategically",
          description: "Find, apply for, and manage free money for education expenses",
          difficulty: "Beginner",
          readTime: "12 min"
        },
        {
          title: "How to build credit while in college",
          description: "Establish and improve credit history as a student for future financial success",
          difficulty: "Beginner",
          readTime: "9 min"
        }
      ]
    },
    {
      title: "Credit Cards & Rewards",
      icon: "💎",
      color: "bg-pink-600",
      guides: [
        "How to choose your first credit card",
        "How to meet a signup bonus without overspending",
        "How to maximize travel points (transfer partners)",
        "How to avoid interest and late fees entirely",
        "How to use 0% intro APR offers safely",
        "How to downgrade or product-change a card",
        "How to redeem points for the highest value",
        "How to do manufactured spending (risks explained)",
        "How to get a credit limit increase responsibly",
        "How to close a card without hurting your score"
      ]
    },
    {
      title: "Business & Startup Finance",
      icon: "🚀",
      color: "bg-rose-600",
      guides: [
        "How to write a simple business budget",
        "How to forecast cash flow (templates)",
        "How to choose the right business structure (LLC, corp, sole prop)",
        "How to get startup funding (grants, loans, investors)",
        "How to manage accounts receivable and avoid late payers",
        "How to set prices and calculate break-even",
        "How to build a business credit profile",
        "How to pay yourself as a business owner",
        "How to choose accounting software for your business",
        "How to prepare for a bank loan interview"
      ]
    },
    {
      title: "Side Hustles & Income",
      icon: "💼",
      color: "bg-amber-600",
      guides: [
        "How to start a profitable side hustle with $0",
        "How to price freelance services (hourly vs value-based)",
        "How to send invoices that get paid fast",
        "How to track income and expenses for a side gig",
        "How to save for taxes as a freelancer",
        "How to scale a side hustle into a business",
        "How to open a separate bank account for your hustle",
        "How to build a simple website that converts",
        "How to find clients without paid ads",
        "How to avoid side-hustle burnout financially"
      ]
    },
    {
      title: "Fraud, Security & Recovery",
      icon: "🔒",
      color: "bg-red-600",
      guides: [
        "How to spot investment scams and Ponzi schemes",
        "How to secure your accounts with password managers",
        "How to recover from identity theft step by step",
        "How to report fraud to your bank and authorities",
        "How to verify crypto projects and smart contracts",
        "How to use virtual cards for safer online shopping",
        "How to protect yourself on public Wi-Fi",
        "How to detect skimmers and card cloning",
        "How to set up alerts for unusual transactions",
        "How to create a financial emergency plan"
      ]
    },
    {
      title: "Real Estate Investing & Landlording",
      icon: "🏘️",
      color: "bg-stone-600",
      guides: [
        "How to analyze a rental property (cap rate & cash-on-cash)",
        "How to screen tenants legally and fairly",
        "How to write a rock-solid lease agreement",
        "How to estimate rehab/renovation costs accurately",
        "How to use BRRRR (buy-rehab-rent-refinance-repeat)",
        "How to finance investment properties (DSCR, hard money)",
        "How to manage rentals remotely (systems & tools)",
        "How to reduce vacancy and turnover",
        "How to handle security deposits correctly",
        "How to prepare for landlord taxes"
      ]
    }
  ]

  // Helper function to create URL-friendly slugs
  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
  }

  return (
    <main className="container py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Complete Financial How-To Guide
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Step-by-step guides covering everything from budgeting basics to advanced trading strategies. 
          Your comprehensive resource for financial education and practical money management.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
          <div className="text-2xl font-bold text-blue-600">{sections.length}</div>
          <div className="text-sm text-gray-600">Categories</div>
        </div>
        <div className="text-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
          <div className="text-2xl font-bold text-green-600">{sections.reduce((total, section) => total + section.guides.length, 0)}</div>
          <div className="text-sm text-gray-600">How-To Guides</div>
        </div>
        <div className="text-center p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg">
          <div className="text-2xl font-bold text-orange-600">100%</div>
          <div className="text-sm text-gray-600">Free Content</div>
        </div>
        <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
          <div className="text-2xl font-bold text-purple-600">2025</div>
          <div className="text-sm text-gray-600">Up to Date</div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Quick Navigation</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {sections.map((section, index) => (
            <a 
              key={index}
              href={`#${createSlug(section.title)}`}
              className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-all duration-200 group"
            >
              <div className={`w-8 h-8 ${section.color} rounded-lg flex items-center justify-center text-white text-sm font-semibold`}>
                {section.icon}
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium group-hover:text-blue-600 transition-colors">
                  {section.title}
                </div>
                <div className="text-xs text-gray-500">
                  {section.guides.length} guides
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Sections */}
      {sections.map((section, sectionIndex) => (
        <section key={sectionIndex} id={createSlug(section.title)} className="mb-20">
          {/* Section Header */}
          <div className="flex items-start gap-6 mb-10">
            <div className={`w-16 h-16 ${section.color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg`}>
              {section.icon}
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                {section.title}
              </h2>
              {section.description ? (
                <p className="text-lg text-gray-600 mb-2">{section.description}</p>
              ) : null}
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  {typeof section.guides[0] === 'object' ? section.guides.length : section.guides.length} comprehensive guides
                </span>
              </div>
            </div>
          </div>

          {/* Enhanced Student Loans Section */}
          {section.title === "Student Loans & Education" ? (
            <div className="space-y-6">
              {/* Featured Guide */}
              <div className="bg-gradient-to-r from-violet-50 via-purple-50 to-indigo-50 rounded-2xl p-8 border border-violet-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Most Popular Guide</h3>
                    <h4 className="text-lg font-semibold text-violet-700 mb-3">How to choose federal vs private student loans</h4>
                    <p className="text-gray-600 mb-4">Compare interest rates, repayment options, and benefits to make the right choice for your education financing.</p>
                    <Link href="/how-to/how-to-choose-federal-vs-private-student-loans" 
                          className="inline-flex items-center gap-2 bg-violet-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-violet-700 transition-colors">
                      Start Reading
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Guide Categories */}
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Beginner Guides */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-green-600 text-sm font-semibold">★</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Beginner Guides</h3>
                  </div>
                  <div className="space-y-4">
                    {section.guides.filter((guide) => typeof guide === 'object' && guide.difficulty === 'Beginner').map((guide, guideIndex) => (
                      <Link
                        key={guideIndex}
                        href={`/how-to/${createSlug(guide.title)}`}
                        className="group block p-4 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors border border-transparent hover:border-green-200"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors mb-2 leading-snug">
                              {guide.title}
                            </h4>
                            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                              {guide.description}
                            </p>
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                              <span className="flex items-center gap-1">
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                                {guide.readTime}
                              </span>
                              <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                                {guide.difficulty}
                              </span>
                            </div>
                          </div>
                          <div className="text-gray-400 group-hover:text-green-500 transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Advanced Guides */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                      <span className="text-red-600 text-sm font-semibold">◆</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Intermediate & Advanced</h3>
                  </div>
                  <div className="space-y-4">
                    {section.guides.filter((guide) => typeof guide === 'object' && (guide.difficulty === 'Intermediate' || guide.difficulty === 'Advanced')).map((guide, guideIndex) => (
                      <Link
                        key={guideIndex}
                        href={`/how-to/${createSlug(guide.title)}`}
                        className="group block p-4 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors border border-transparent hover:border-orange-200"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 group-hover:text-orange-700 transition-colors mb-2 leading-snug">
                              {guide.title}
                            </h4>
                            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                              {guide.description}
                            </p>
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                              <span className="flex items-center gap-1">
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                                {guide.readTime}
                              </span>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                guide.difficulty === 'Advanced' 
                                  ? 'bg-red-100 text-red-700' 
                                  : 'bg-yellow-100 text-yellow-700'
                              }`}>
                                {guide.difficulty}
                              </span>
                            </div>
                          </div>
                          <div className="text-gray-400 group-hover:text-orange-500 transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Standard Grid Layout for Other Sections */
            <div className="grid md:grid-cols-2 gap-4">
              {section.guides.map((guide, guideIndex) => (
                <Link
                  key={guideIndex}
                  href={`/how-to/${createSlug(typeof guide === 'string' ? guide : guide.title)}`}
                  className="group p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-all duration-200 hover:border-blue-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-blue-100 transition-colors">
                      <div className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-blue-500 transition-colors"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">
                        {typeof guide === 'string' ? guide : guide.title}
                      </h3>
                    </div>
                    <div className="text-gray-400 group-hover:text-blue-500 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      ))}

      {/* Bottom CTA */}
      <div className="mt-20 text-center p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
        <h2 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          We're constantly adding new how-to guides based on community feedback. 
          Let us know what financial topics you'd like us to cover next.
        </p>
        <Link 
          href="/submit" 
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Suggest a Topic
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </Link>
      </div>
    </main>
  )
}