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
        source: '/submit',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/culture',
        destination: '/category/culture',
        permanent: true,
      },
      {
        source: '/crypto',
        destination: '/category/crypto',
        permanent: true,
      },
      {
        source: '/funny',
        destination: '/category/funny',
        permanent: true,
      },
      {
        source: '/interesting',
        destination: '/category/interesting',
        permanent: true,
      },
      {
        source: '/music',
        destination: '/category/music',
        permanent: true,
      },
      {
        source: '/sports',
        destination: '/category/sports',
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
      {
        source: '/how-to/how-to-reduce-taxes-legally-credits-deductions',
        destination: '/how-to/how-to-reduce-taxes-legally-credits-and-deductions',
        permanent: true,
      },
      {
        source: '/how-to/how-to-maximize-rrsp-401-k-isa-tax-shelters',
        destination: '/how-to/how-to-maximize-rrsp-401k-isa-tax-shelters',
        permanent: true,
      },
      {
        source: '/how-to/how-to-roll-over-a-401-k-pension-when-you-change-jobs',
        destination: '/how-to/how-to-roll-over-a-401k-pension-when-you-change-jobs',
        permanent: true,
      },
      {
        source: '/how-to/how-to-invest-inside-a-tfsa-rrsp-401-k-ira',
        destination: '/how-to/how-to-invest-inside-a-tfsa-rrsp-401k-ira',
        permanent: true,
      },
      {
        source: '/how-to/how-to-shop-for-home-renters-insurance',
        destination: '/how-to/how-to-shop-for-home-and-renters-insurance',
        permanent: true,
      },
      {
        source: '/how-to/how-to-avoid-denied-claims-documentation-tips',
        destination: '/how-to/how-to-avoid-denied-claims',
        permanent: true,
      },
      {
        source: '/how-to/how-to-use-0-intro-apr-offers-safely',
        destination: '/how-to/how-to-use-a-balance-transfer-card-the-right-way',
        permanent: true,
      },
      {
        source: '/how-to/how-to-choose-the-right-business-structure-llc-corp-sole-prop',
        destination: '/how-to/how-to-choose-business-entity-llc-corp-sole-prop',
        permanent: true,
      },
      {
        source: '/how-to/handle-security-deposits-correctly',
        destination: '/how-to/how-to-handle-security-deposits-correctly',
        permanent: true,
      },
      {
        source: '/how-to/how-to-analyze-rental-property-deals',
        destination: '/how-to/how-to-analyze-a-rental-property-cap-rate-cash-on-cash',
        permanent: true,
      },
      {
        source: '/how-to/how-to-build-simple-website-that-converts',
        destination: '/how-to/how-to-build-a-simple-website-that-converts',
        permanent: true,
      },
      {
        source: '/how-to/how-to-calculate-rental-property-cash-flow-roi',
        destination: '/how-to/how-to-analyze-a-rental-property-cap-rate-cash-on-cash',
        permanent: true,
      },
      {
        source: '/how-to/how-to-choose-the-right-rewards-credit-card',
        destination: '/how-to/how-to-choose-your-first-credit-card',
        permanent: true,
      },
      {
        source: '/how-to/how-to-close-card-without-hurting-score',
        destination: '/how-to/how-to-close-a-card-without-hurting-your-score',
        permanent: true,
      },
      {
        source: '/how-to/how-to-downgrade-or-product-change-card',
        destination: '/how-to/how-to-downgrade-or-product-change-a-card',
        permanent: true,
      },
      {
        source: '/how-to/how-to-earn-credit-card-sign-up-bonuses-responsibly',
        destination: '/how-to/how-to-choose-your-first-credit-card',
        permanent: true,
      },
      {
        source: '/how-to/how-to-finance-investment-property',
        destination: '/how-to/how-to-finance-investment-properties-dscr-hard-money',
        permanent: true,
      },
      {
        source: '/how-to/how-to-protect-yourself-on-public-wi-fi',
        destination: '/how-to/how-to-protect-yourself-on-public-wifi',
        permanent: true,
      },
      {
        source: '/how-to/how-to-screen-tenants-avoid-problem-renters',
        destination: '/how-to/how-to-screen-tenants-legally-and-fairly',
        permanent: true,
      },
      {
        source: '/how-to/how-to-set-up-two-factor-authentication',
        destination: '/how-to/how-to-set-up-two-factor-authentication-correctly',
        permanent: true,
      },
      {
        source: '/how-to/landlord-taxes-deductions-filing',
        destination: '/how-to/how-to-prepare-for-landlord-taxes',
        permanent: true,
      },
      {
        source: '/how-to/reduce-vacancy-and-tenant-turnover',
        destination: '/how-to/how-to-reduce-vacancy-and-turnover',
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
