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
      ...duplicateHowToRedirects.map(([from, to]) => ({
        source: `/how-to/${from}`,
        destination: `/how-to/${to}`,
        permanent: true,
      })),
    ];
  },
};

module.exports = nextConfig;
