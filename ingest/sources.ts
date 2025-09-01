// ingest/sources.ts
export type FeedDef = {
  name: string;
  url: string;
  topic: 'investing' | 'trading' | 'crypto' | 'news';
};

// All free/public feeds for trading & investing content
export const FEEDS: FeedDef[] = [
  // Finance/Markets (general)
  { name: 'Reuters Markets', url: 'https://feeds.reuters.com/reuters/marketsNews', topic: 'news' },
  { name: 'CNBC Markets', url: 'https://www.cnbc.com/id/100003114/device/rss/rss.html', topic: 'news' },
  { name: 'Yahoo Finance Top', url: 'https://feeds.finance.yahoo.com/rss/2.0/headline?s=^GSPC&region=US&lang=en-US', topic: 'news' },

  // Canada / Regulatory (for Canadian focus)
  { name: 'Bank of Canada', url: 'https://www.bankofcanada.ca/feeds/news/', topic: 'investing' },
  { name: 'Ontario Securities Commission', url: 'https://www.osc.ca/en/news-events/news/rss.xml', topic: 'investing' },
  
  // Crypto (industry + policy)
  { name: 'CoinDesk', url: 'https://www.coindesk.com/arc/outboundfeeds/rss/', topic: 'crypto' },
  { name: 'Cointelegraph', url: 'https://cointelegraph.com/rss', topic: 'crypto' },
  { name: 'Binance Blog', url: 'https://www.binance.com/en/blog/rss', topic: 'crypto' },
  { name: 'Coinbase Blog', url: 'https://www.coinbase.com/blog/rss', topic: 'crypto' },
  { name: 'Ethereum Foundation Blog', url: 'https://blog.ethereum.org/feed.xml', topic: 'crypto' },
  { name: 'Kraken Blog', url: 'https://blog.kraken.com/feed', topic: 'crypto' },

  // Trading focused sources
  { name: 'Investopedia Markets', url: 'https://www.investopedia.com/markets/rss', topic: 'trading' },
  { name: 'MarketWatch', url: 'https://feeds.content.dowjones.io/public/rss/mw_topstories', topic: 'trading' },
];