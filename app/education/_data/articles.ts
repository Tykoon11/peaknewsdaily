export type PillarId =
  | 'risk-management'
  | 'strategy-entries'
  | 'execution'
  | 'systems-testing'
  | 'psychology-process'
  | 'crypto-safety'
  | 'markets-instruments'
  | 'broker-compliance';

export type Article = {
  title: string;
  slug: string;           // absolute path from /education e.g. '/education/risk-reward-expectancy'
  pillar: PillarId;
  status?: 'published' | 'draft';
  summary?: string;
  primaryKeyword?: string;
  related?: string[];     // slugs for internal links
};

export type Pillar = {
  id: PillarId;
  title: string;
  slug: string;           // '/education/<pillar>'
  intro: string;
};

export const PILLARS: Pillar[] = [
  { id:'risk-management', title:'Risk & Money Management', slug:'/education/risk-management', intro:'Size, stop, and survive. Tools and templates for durable risk.' },
  { id:'strategy-entries', title:'Strategy, Setups & Timing', slug:'/education/strategy-entries', intro:'From breakouts to mean reversion, with timing that fits you.' },
  { id:'execution', title:'Orders, Execution & Microstructure', slug:'/education/execution', intro:'Order types, slippage and tactics that reduce hidden costs.' },
  { id:'systems-testing', title:'Systems, Testing & Automation', slug:'/education/systems-testing', intro:'From backtests to live automation with guardrails.' },
  { id:'psychology-process', title:'Trader Psychology & Process', slug:'/education/psychology-process', intro:'Discipline, reviews and KPIs that compound skill.' },
  { id:'crypto-safety', title:'Crypto Safety, Custody & DeFi', slug:'/education/crypto-safety', intro:'Wallets, stablecoins, DeFi risks and secure ops.' },
  { id:'markets-instruments', title:'Instruments, Markets & Event Risk', slug:'/education/markets-instruments', intro:'Futures, options, ETFs and event-driven playbooks.' },
  { id:'broker-compliance', title:'Broker, Compliance & Taxes', slug:'/education/broker-compliance', intro:'Diligence, security and reporting basics.' },
];

// --- Articles registry (stubs; content later). Include the 3 existing + the new ones.
export const ARTICLES: Article[] = [
  // EXISTING (do not duplicate if already present in site)
  { title:'Crypto Wallets: Custodial vs Non-Custodial vs Hardware', slug:'/education/crypto-wallets-custody', pillar:'crypto-safety', status:'published' },
  { title:'Position Sizing 101: How Much to Risk Per Trade', slug:'/education/position-sizing-101', pillar:'risk-management', status:'published' },
  { title:'Welcome to PeakNewsDaily: Your Trading & Investing Hub', slug:'/education/welcome', pillar:'risk-management', status:'published' },

  // RISK & MONEY MANAGEMENT
  { title:'Risk–Reward Ratio Explained: Trade Expectancy the Pro Way', slug:'/education/risk-reward-expectancy', pillar:'risk-management' , status:'published' },
  { title:'Stop-Loss Mastery: Fixed, ATR, and Trailing Stops Compared', slug:'/education/stop-loss-fixed-vs-trailing', pillar:'risk-management' , status:'published' },
  { title:'ATR for Position Sizing', slug:'/education/atr-position-sizing', pillar:'risk-management' , status:'published' },
  { title:'Kelly Criterion (Safely): Fractional Kelly for Real Traders', slug:'/education/kelly-criterion-trading', pillar:'risk-management' },
  { title:'Position Sizing with Correlation: Don\'t Double-Count Risk', slug:'/education/position-sizing-correlation', pillar:'risk-management' },
  { title:'Position Sizing for Small Accounts: Staying Power First', slug:'/education/position-sizing-small-accounts', pillar:'risk-management' },
  { title:'Drawdown Management: Cutting Heat Without Killing Edge', slug:'/education/drawdown-management', pillar:'risk-management' },
  { title:'Building Your First Trading Plan (Free Template)', slug:'/education/trading-plan-template', pillar:'risk-management' },
  { title:'Trading Journal That Actually Improves Results (Templates)', slug:'/education/trading-journal-templates', pillar:'risk-management' },
  { title:'KPI Dashboard for Traders: From PnL to Process Metrics', slug:'/education/trader-kpis-dashboard', pillar:'risk-management' },

  // STRATEGY, SETUPS & TIMING
  { title:'Breakout vs Pullback Entries: Timing Your Trigger', slug:'/education/breakout-vs-pullback', pillar:'strategy-entries' },
  { title:'Trend Following vs Mean Reversion: Pick a Side (or Blend)', slug:'/education/trend-vs-mean-reversion', pillar:'strategy-entries' },
  { title:'Mean Reversion Tools: RSI, Bollinger, and K-Period Lows', slug:'/education/mean-reversion-indicators', pillar:'strategy-entries' },
  { title:'Trend Tools: Moving Averages, Donchian, and ADX Filters', slug:'/education/trend-trading-indicators', pillar:'strategy-entries' },
  { title:'Multi-Timeframe Analysis: Align Entries Without Paralysis', slug:'/education/multi-timeframe-analysis', pillar:'strategy-entries' },
  { title:'Support & Resistance: From Lines to Supply–Demand Zones', slug:'/education/support-resistance-zones', pillar:'strategy-entries' },
  { title:'Evidence-Based Candlesticks: Patterns That Actually Help', slug:'/education/candlestick-patterns-that-work', pillar:'strategy-entries' },
  { title:'Gap Trading: Types of Gaps, Stats & Risk Controls', slug:'/education/gap-trading-strategies', pillar:'strategy-entries' },
  { title:'Building a High-Signal Watchlist & Screener Criteria', slug:'/education/trading-watchlist-screener', pillar:'strategy-entries' },
  { title:'Volume & Market Profile Basics: Reading the Auction', slug:'/education/volume-market-profile-basics', pillar:'strategy-entries' },
  { title:'Swing Trading Around Earnings: Risk-Smart Playbook', slug:'/education/earnings-swing-trading', pillar:'strategy-entries' },
  { title:'Forex Session Profiles: London, NY, Asia & Volatility Windows', slug:'/education/forex-sessions-volatility', pillar:'strategy-entries' },

  // EXECUTION
  { title:'Order Types 101: Market, Limit, Stop, and Stop-Limit', slug:'/education/market-vs-limit-order', pillar:'execution' },
  { title:'Liquidity, Spread & Slippage: The Hidden Cost of Trading', slug:'/education/liquidity-spread-slippage', pillar:'execution' },
  { title:'Advanced Crypto Orders: OCO, TWAP, Iceberg & More', slug:'/education/advanced-crypto-order-types', pillar:'execution' },

  // SYSTEMS & AUTOMATION
  { title:'Backtesting vs Forward Testing: Avoid the Overfit Trap', slug:'/education/backtesting-vs-forward-testing', pillar:'systems-testing' },
  { title:'From Rules to Code: Automating a Strategy the Right Way', slug:'/education/automated-trading-blueprint', pillar:'systems-testing' },

  // PSYCHOLOGY & PROCESS
  { title:'Trader Psychology: FOMO, Loss Aversion & Discipline', slug:'/education/trading-psychology-discipline', pillar:'psychology-process' },

  // CRYPTO SAFETY
  { title:'Stablecoins Safely: Custody, Depegs & On/Off-Ramp Tactics', slug:'/education/stablecoins-safety', pillar:'crypto-safety' },
  { title:'DeFi Yield Without the Burn: APY Math & Impermanent Loss', slug:'/education/defi-yield-impermanent-loss', pillar:'crypto-safety' },
  { title:'Crypto Security for Traders: Keys, 2FA, and Whitelists', slug:'/education/crypto-security-traders', pillar:'crypto-safety' },

  // MARKETS & INSTRUMENTS
  { title:'Futures/CFD Margin 101: Leverage Without Blowing Up', slug:'/education/futures-cfd-margin-risk', pillar:'markets-instruments' },
  { title:'Protective Puts & Simple Options Hedges for Equity Traders', slug:'/education/protective-put-hedging', pillar:'markets-instruments' },
  { title:'ETF vs Single-Stock Trading: Liquidity, Taxes, and Risk', slug:'/education/etf-vs-stocks-trading', pillar:'markets-instruments' },
  { title:'News Trading Safely: Economic Calendars, Spreads & Spikes', slug:'/education/news-trading-guide', pillar:'markets-instruments' },

  // BROKER & COMPLIANCE
  { title:'Broker & Exchange Due Diligence: A Security Checklist', slug:'/education/broker-exchange-due-diligence', pillar:'broker-compliance' },
  { title:'Taxes for Traders: Records, Wash Sales & Cost Basis 101', slug:'/education/taxes-for-traders-basics', pillar:'broker-compliance' },
];