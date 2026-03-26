/** @type {import('next').NextConfig} */

const duplicateHowToRedirects = [
  ['how-to-avoid-pdt-violations', 'avoid-pdt-violations'],
  ['how-to-backtest-trading-strategy', 'backtest-trading-strategy'],
  ['how-to-finance-investment-properties-dscr-hard-money', 'finance-investment-properties-dscr-hard-money'],
  ['how-to-manage-risk-per-trade', 'manage-risk-per-trade'],
  ['how-to-place-your-first-stock-trade', 'place-your-first-stock-trade'],
  ['how-to-read-candlestick-charts', 'read-candlestick-charts'],
  ['how-to-scan-for-high-probability-setups', 'scan-for-high-probability-setups'],
  ['how-to-send-invoices-that-get-paid-fast', 'send-invoices-that-get-paid-fast'],
  ['how-to-start-a-profitable-side-hustle-with-0', 'start-a-profitable-side-hustle-with-0'],
  ['how-to-stop-living-paycheck-to-paycheck', 'stop-living-paycheck-to-paycheck'],
  ['how-to-trade-earnings-season-safely', 'trade-earnings-season-safely'],
  ['how-to-trade-etfs-vs-stocks', 'trade-etfs-vs-stocks'],
  ['how-to-use-stop-loss-and-take-profit', 'use-stop-loss-and-take-profit'],
];

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/privacy',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/investing',
        destination: '/category/investing',
        permanent: true,
      },
      {
        source: '/news-sitemap.xml',
        destination: '/sitemap.xml',
        permanent: true,
      },
      {
        source: '/how-to/how-to-track-income-and-expenses-for-side-gig',
        destination: '/how-to/how-to-track-income-and-expenses-for-a-side-gig',
        permanent: true,
      },
      {
        source: '/how-to/how-to-scale-side-hustle-into-business',
        destination: '/how-to/how-to-scale-a-side-hustle-into-a-business',
        permanent: true,
      },
      {
        source: '/how-to/how-to-get-a-credit-limit-increase-responsibly',
        destination: '/how-to/how-to-get-credit-limit-increase-responsibly',
        permanent: true,
      },
      {
        source: '/how-to/how-to-open-separate-bank-account-for-hustle',
        destination: '/how-to/how-to-open-a-separate-bank-account-for-your-hustle',
        permanent: true,
      },
      {
        source: '/how-to/how-to-consolidate-or-refinance-student-debt',
        destination: '/how-to/how-to-choose-federal-vs-private-student-loans',
        permanent: true,
      },
      ...duplicateHowToRedirects.map(([from, to]) => ({
        source: `/how-to/${from}`,
        destination: `/how-to/${to}`,
        permanent: true,
      })),
    ];
  },
};

module.exports = nextConfig;
