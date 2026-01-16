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
        "How to spot and avoid bank scams and phishing"
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
        "How to calculate car affordability (rules of thumb)",
        "How to get the best auto loan rate",
        "How to lease vs finance a car (which is cheaper?)",
        "How to refinance your car loan to lower payments",
        "How to negotiate a car price (dealer scripts)",
        "How to buy a used car without getting ripped off",
        "How to trade in a car with negative equity",
        "How to insure a new car for less",
        "How to sell your car privately for top dollar",
        "How to get out of a bad car loan"
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
        "How to place your first stock trade (market vs limit)",
        "How to use stop-loss and take-profit orders",
        "How to read candlestick charts (for beginners)",
        "How to scan for high-probability stock setups",
        "How to trade earnings season safely",
        "How to manage risk per trade (position sizing)",
        "How to avoid pattern day trader (PDT) violations",
        "How to trade ETFs vs individual stocks",
        "How to backtest a trading strategy properly",
        "How to build a trading journal that improves results"
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
        "How to start trading forex (complete beginner guide)",
        "How to read currency pairs and pips",
        "How to size a forex position properly",
        "How to set realistic profit targets in forex",
        "How to choose a regulated forex broker",
        "How to avoid over-leveraging in FX",
        "How to trade news events without getting whipsawed",
        "How to build a simple forex strategy (rules + examples)",
        "How to use MT4/MT5 indicators responsibly",
        "How to manage overnight swap/financing costs"
      ]
    },
    {
      title: "Crypto & Web3",
      icon: "₿",
      color: "bg-orange-600",
      guides: [
        "How to buy Bitcoin safely (step by step)",
        "How to choose a crypto exchange (security checklist)",
        "How to set up a hardware wallet (cold storage)",
        "How to avoid crypto rug pulls and scams",
        "How to stake crypto and understand APY risk",
        "How to use DeFi safely (wallet hygiene)",
        "How to bridge tokens across chains without losing funds",
        "How to report crypto taxes (cost basis methods)",
        "How to recover from a lost seed phrase (what's possible)",
        "How to mint an NFT responsibly (fees & rights)"
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
      color: "bg-violet-600",
      guides: [
        "How to apply for student loans without overborrowing",
        "How to choose federal vs private student loans",
        "How to consolidate or refinance student debt",
        "How to qualify for loan forgiveness programs",
        "How to make payments while in school (and why)",
        "How to pick a repayment plan that fits your budget",
        "How to avoid default and get back in good standing",
        "How to appeal a financial aid decision",
        "How to use scholarships and grants strategically",
        "How to build credit while in college"
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
    <>
      {/* Premium How-To Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 dark:from-gray-900 dark:via-slate-800 dark:to-gray-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20 dark:opacity-30">
          <div className="absolute top-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-purple-400 to-indigo-500 dark:from-blue-400 dark:to-indigo-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/2 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-indigo-400 to-purple-500 dark:from-purple-400 dark:to-blue-500 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-1/2 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-blue-400 to-purple-500 dark:from-emerald-400 dark:to-teal-500 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] sm:bg-[size:32px_32px]"></div>
        
        <div className="relative container mx-auto px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-5xl mx-auto text-center">
            {/* How-To Badge */}
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs sm:text-sm font-medium mb-6 sm:mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse mr-2 sm:mr-3"></div>
              EDUCATION CENTER • 215 GUIDES • FREE CONTENT
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-indigo-200 leading-tight">
              Complete Financial How-To Guide
            </h1>
            
            <p className="text-base sm:text-xl lg:text-2xl text-purple-100/80 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              Step-by-step guides covering everything from budgeting basics to advanced 
              trading strategies. Your comprehensive resource for financial education and 
              practical money management.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12">
              <div className="relative bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 shadow-2xl shadow-purple-500/10">
                <div className="text-xl sm:text-3xl font-black text-white mb-1">{sections.length}</div>
                <div className="text-purple-200/80 font-medium text-xs sm:text-sm">Categories</div>
              </div>
              
              <div className="relative bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 shadow-2xl shadow-indigo-500/10">
                <div className="text-xl sm:text-3xl font-black text-indigo-400 mb-1">
                  {sections.reduce((total, section) => total + section.guides.length, 0)}
                </div>
                <div className="text-purple-200/80 font-medium text-xs sm:text-sm">How-To Guides</div>
              </div>
              
              <div className="relative bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 shadow-2xl shadow-orange-500/10">
                <div className="text-xl sm:text-3xl font-black text-orange-400 mb-1">100%</div>
                <div className="text-purple-200/80 font-medium text-xs sm:text-sm">Free Content</div>
              </div>
              
              <div className="relative bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 shadow-2xl shadow-purple-500/10">
                <div className="text-xl sm:text-3xl font-black text-purple-400 mb-1">2025</div>
                <div className="text-purple-200/80 font-medium text-xs sm:text-sm">Up to Date</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">

      {/* Table of Contents */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Quick Navigation</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {sections.map((section, index) => (
            <a 
              key={index}
              href={`#${createSlug(section.title)}`}
              className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md dark:hover:shadow-lg transition-all duration-200 group"
            >
              <div className={`w-8 h-8 ${section.color} rounded-lg flex items-center justify-center text-white text-sm font-semibold`}>
                {section.icon}
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {section.title}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {section.guides.length} guides
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Sections */}
      {sections.map((section, sectionIndex) => (
        <section key={sectionIndex} id={createSlug(section.title)} className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className={`w-12 h-12 ${section.color} rounded-xl flex items-center justify-center text-white text-xl`}>
              {section.icon}
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{section.title}</h2>
              <p className="text-gray-600 dark:text-gray-300">{section.guides.length} comprehensive guides</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {section.guides.map((guide, guideIndex) => (
              <Link
                key={guideIndex}
                href={`/how-to/${createSlug(guide)}`}
                className="group p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md dark:hover:shadow-lg transition-all duration-200 hover:border-blue-300 dark:hover:border-blue-600"
              >
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-blue-100 dark:group-hover:bg-blue-900 transition-colors">
                    <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full group-hover:bg-blue-500 dark:group-hover:bg-blue-400 transition-colors"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                      {guide}
                    </h3>
                  </div>
                  <div className="text-gray-400 dark:text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <div className="mt-20 text-center p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:bg-gradient-to-r dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Can't Find What You're Looking For?</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          We're constantly adding new how-to guides based on community feedback. 
          Let us know what financial topics you'd like us to cover next.
        </p>
        <Link 
          href="/submit" 
          className="inline-flex items-center gap-2 bg-blue-600 dark:bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors font-medium"
        >
          Suggest a Topic
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </Link>
      </div>
        </div>
      </main>
    </>
  )
}