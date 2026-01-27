const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function updateESGInvestingGuide() {
  const content = `<div style="max-width: 1200px; margin: 0 auto; font-family: Arial, sans-serif; line-height: 1.7; color: #2c3e50;">

<h1 style="color: #2c3e50; font-size: 2.2rem; margin-bottom: 1rem; text-align: center;">ESG Investing Guide 2025: Complete Strategy for Sustainable Investing</h1>

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 2rem; border-radius: 10px; margin: 2rem 0; text-align: center;">
  <h2 style="color: white; margin-bottom: 1rem;">Master ESG Investing: From Values-Based Screening to Impact Measurement</h2>
  <p style="font-size: 1.1rem; margin: 0;">Learn how to align your investments with your values while achieving competitive returns in the growing sustainable finance market</p>
</div>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #28a745; margin: 2rem 0;">
  <h3 style="color: #28a745; margin-top: 0;">What You'll Learn in This Comprehensive Guide</h3>
  <ul style="margin: 0; padding-left: 1.5rem;">
    <li>Understanding ESG criteria and sustainable investing frameworks</li>
    <li>Step-by-step ESG portfolio construction and asset allocation</li>
    <li>ESG screening methodologies and impact measurement</li>
    <li>ESG ETFs, mutual funds, and direct stock selection strategies</li>
    <li>Performance analysis and risk management in ESG investing</li>
    <li>Green bonds, sustainable REITs, and alternative ESG investments</li>
    <li>Tax implications and ESG integration with retirement planning</li>
    <li>Future trends and regulatory developments in sustainable finance</li>
  </ul>
</div>

<h2 style="color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 0.5rem;">Chapter 1: Understanding ESG Investing Fundamentals</h2>

<h3 style="color: #34495e;">What is ESG Investing?</h3>
<p>Environmental, Social, and Governance (ESG) investing integrates sustainability factors into investment decision-making processes. This approach considers not only financial returns but also the positive impact investments can have on society and the environment. ESG investing has evolved from a niche strategy to a mainstream investment approach, with global ESG assets under management reaching $35 trillion in 2022 and projected to exceed $50 trillion by 2025.</p>

<h4 style="color: #3498db;">The Three Pillars of ESG</h4>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
  <div style="background: #e8f5e8; padding: 1.5rem; border-radius: 8px; border: 1px solid #28a745;">
    <h4 style="color: #28a745; margin-top: 0;">Environmental (E)</h4>
    <ul style="margin: 0; padding-left: 1.5rem;">
      <li>Climate change and carbon footprint</li>
      <li>Resource depletion and waste management</li>
      <li>Pollution and environmental degradation</li>
      <li>Renewable energy and clean technology</li>
      <li>Biodiversity and ecosystem protection</li>
      <li>Water scarcity and conservation</li>
    </ul>
  </div>

  <div style="background: #e8f4fd; padding: 1.5rem; border-radius: 8px; border: 1px solid #3498db;">
    <h4 style="color: #3498db; margin-top: 0;">Social (S)</h4>
    <ul style="margin: 0; padding-left: 1.5rem;">
      <li>Employee relations and workplace safety</li>
      <li>Diversity, equity, and inclusion</li>
      <li>Human rights and labor standards</li>
      <li>Community engagement and development</li>
      <li>Consumer protection and product safety</li>
      <li>Supply chain management</li>
    </ul>
  </div>

  <div style="background: #fff3e0; padding: 1.5rem; border-radius: 8px; border: 1px solid #f39c12;">
    <h4 style="color: #f39c12; margin-top: 0;">Governance (G)</h4>
    <ul style="margin: 0; padding-left: 1.5rem;">
      <li>Board composition and independence</li>
      <li>Executive compensation alignment</li>
      <li>Audit and risk management</li>
      <li>Shareholder rights and transparency</li>
      <li>Business ethics and anti-corruption</li>
      <li>Cybersecurity and data privacy</li>
    </ul>
  </div>
</div>

<h3 style="color: #34495e;">Types of ESG Investment Strategies</h3>

<table style="width: 100%; border-collapse: collapse; margin: 2rem 0; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
  <thead>
    <tr style="background: #34495e; color: white;">
      <th style="padding: 1rem; text-align: left; border: 1px solid #ddd;">Strategy</th>
      <th style="padding: 1rem; text-align: left; border: 1px solid #ddd;">Description</th>
      <th style="padding: 1rem; text-align: left; border: 1px solid #ddd;">Implementation</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 1rem; border: 1px solid #ddd;"><strong>Negative/Exclusionary Screening</strong></td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Excluding sectors or companies that don't meet ESG criteria</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Avoid tobacco, weapons, fossil fuels, gambling</td>
    </tr>
    <tr>
      <td style="padding: 1rem; border: 1px solid #ddd;"><strong>Positive/Best-in-Class Screening</strong></td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Selecting companies with superior ESG performance within sectors</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Choose top ESG performers in each industry</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 1rem; border: 1px solid #ddd;"><strong>ESG Integration</strong></td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Incorporating ESG factors into traditional financial analysis</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Weight ESG scores alongside financial metrics</td>
    </tr>
    <tr>
      <td style="padding: 1rem; border: 1px solid #ddd;"><strong>Thematic Investing</strong></td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Focusing on specific sustainability themes</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Clean energy, water, sustainable agriculture</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 1rem; border: 1px solid #ddd;"><strong>Impact Investing</strong></td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Investments made with intention to generate positive impact</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Microfinance, social bonds, green infrastructure</td>
    </tr>
    <tr>
      <td style="padding: 1rem; border: 1px solid #ddd;"><strong>Shareholder Engagement</strong></td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Using ownership rights to influence corporate behavior</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Proxy voting, shareholder resolutions</td>
    </tr>
  </tbody>
</table>

<h2 style="color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 0.5rem;">Chapter 2: ESG Portfolio Construction Strategy</h2>

<h3 style="color: #34495e;">Step-by-Step ESG Portfolio Building</h3>

<div style="background: #fff3cd; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #ffc107; margin: 2rem 0;">
  <h4 style="color: #856404; margin-top: 0;">Step 1: Values Assessment</h4>
  <p>Define your ESG priorities by ranking importance (1-5 scale):</p>
  <ul style="margin: 1rem 0; padding-left: 1.5rem;">
    <li>Climate change mitigation and adaptation</li>
    <li>Renewable energy transition</li>
    <li>Social justice and equality</li>
    <li>Labor rights and workplace conditions</li>
    <li>Corporate governance and transparency</li>
    <li>Community development and impact</li>
    <li>Avoiding harmful industries</li>
    <li>Supporting innovation and technology</li>
  </ul>
</div>

<h4 style="color: #3498db;">Step 2: ESG Asset Allocation Framework</h4>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
  <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px; border: 1px solid #dee2e6;">
    <h5 style="color: #495057; margin-top: 0;">Conservative ESG Portfolio (Age 55+)</h5>
    <ul style="margin: 1rem 0; padding-left: 1.5rem;">
      <li>40% ESG-focused bond funds/ETFs</li>
      <li>25% Large-cap ESG equity funds</li>
      <li>15% International ESG funds</li>
      <li>10% ESG REITs and infrastructure</li>
      <li>5% Green bonds and impact investments</li>
      <li>5% Cash/money market ESG funds</li>
    </ul>
    <p style="margin: 0;"><strong>Expected Return:</strong> 6-8% | <strong>Risk:</strong> Low-Moderate</p>
  </div>

  <div style="background: #e8f4fd; padding: 1.5rem; border-radius: 8px; border: 1px solid #b8daff;">
    <h5 style="color: #495057; margin-top: 0;">Moderate ESG Portfolio (Age 35-54)</h5>
    <ul style="margin: 1rem 0; padding-left: 1.5rem;">
      <li>30% Large-cap ESG equity funds</li>
      <li>25% ESG bond funds</li>
      <li>15% International/emerging market ESG</li>
      <li>10% Small/mid-cap ESG funds</li>
      <li>10% Thematic ESG investments</li>
      <li>5% ESG REITs</li>
      <li>5% Alternative ESG investments</li>
    </ul>
    <p style="margin: 0;"><strong>Expected Return:</strong> 7-9% | <strong>Risk:</strong> Moderate</p>
  </div>

  <div style="background: #fff3e0; padding: 1.5rem; border-radius: 8px; border: 1px solid #ffc947;">
    <h5 style="color: #495057; margin-top: 0;">Growth ESG Portfolio (Age 20-34)</h5>
    <ul style="margin: 1rem 0; padding-left: 1.5rem;">
      <li>35% Large-cap ESG growth funds</li>
      <li>20% Small/mid-cap ESG funds</li>
      <li>15% International ESG funds</li>
      <li>10% Thematic ESG investments</li>
      <li>10% ESG bond funds</li>
      <li>5% Emerging market ESG</li>
      <li>5% Impact investing/alternatives</li>
    </ul>
    <p style="margin: 0;"><strong>Expected Return:</strong> 8-11% | <strong>Risk:</strong> Moderate-High</p>
  </div>
</div>

<h2 style="color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 0.5rem;">Chapter 3: Top ESG Investment Options for 2025</h2>

<h3 style="color: #34495e;">Best ESG ETFs and Mutual Funds</h3>

<table style="width: 100%; border-collapse: collapse; margin: 2rem 0; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
  <thead>
    <tr style="background: #28a745; color: white;">
      <th style="padding: 1rem; text-align: left; border: 1px solid #ddd;">Fund Name</th>
      <th style="padding: 1rem; text-align: left; border: 1px solid #ddd;">Ticker</th>
      <th style="padding: 1rem; text-align: left; border: 1px solid #ddd;">Expense Ratio</th>
      <th style="padding: 1rem; text-align: left; border: 1px solid #ddd;">Focus</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 1rem; border: 1px solid #ddd;">Vanguard ESG U.S. Stock ETF</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">ESGV</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">0.12%</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Broad U.S. ESG</td>
    </tr>
    <tr>
      <td style="padding: 1rem; border: 1px solid #ddd;">iShares MSCI ACWI ESG Select ETF</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">SUSA</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">0.25%</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Global ESG</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 1rem; border: 1px solid #ddd;">Vanguard ESG International Stock ETF</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">VSGX</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">0.12%</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">International ESG</td>
    </tr>
    <tr>
      <td style="padding: 1rem; border: 1px solid #ddd;">iShares Global Clean Energy ETF</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">ICLN</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">0.42%</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Clean Energy</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 1rem; border: 1px solid #ddd;">Invesco QQQ Trust ESG</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">QQQM</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">0.15%</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Tech ESG</td>
    </tr>
  </tbody>
</table>

<h3 style="color: #34495e;">Top ESG Stocks by Sector (2025 Recommendations)</h3>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
  <div style="background: #e8f5e8; padding: 1.5rem; border-radius: 8px; border: 1px solid #28a745;">
    <h5 style="color: #28a745; margin-top: 0;">Technology & Innovation</h5>
    <ul style="margin: 0; padding-left: 1.5rem;">
      <li>Microsoft (MSFT) - Carbon negative by 2030</li>
      <li>Apple (AAPL) - 100% renewable energy</li>
      <li>NVIDIA (NVDA) - AI for sustainability</li>
      <li>Salesforce (CRM) - Net-zero emissions</li>
    </ul>
  </div>

  <div style="background: #e8f4fd; padding: 1.5rem; border-radius: 8px; border: 1px solid #3498db;">
    <h5 style="color: #3498db; margin-top: 0;">Renewable Energy</h5>
    <ul style="margin: 0; padding-left: 1.5rem;">
      <li>NextEra Energy (NEE) - Wind/solar leader</li>
      <li>First Solar (FSLR) - Solar technology</li>
      <li>Vestas Wind Systems (VWS.CO) - Wind turbines</li>
      <li>Brookfield Renewable (BEP) - Clean energy infrastructure</li>
    </ul>
  </div>

  <div style="background: #fff3e0; padding: 1.5rem; border-radius: 8px; border: 1px solid #f39c12;">
    <h5 style="color: #f39c12; margin-top: 0;">Healthcare & Pharmaceuticals</h5>
    <ul style="margin: 0; padding-left: 1.5rem;">
      <li>Johnson & Johnson (JNJ) - Global health access</li>
      <li>Novo Nordisk (NVO) - Diabetes care leadership</li>
      <li>Merck (MRK) - Access to medicine programs</li>
      <li>Roche (RHHBY) - Personalized healthcare</li>
    </ul>
  </div>

  <div style="background: #f8e8f8; padding: 1.5rem; border-radius: 8px; border: 1px solid #9b59b6;">
    <h5 style="color: #9b59b6; margin-top: 0;">Consumer Goods</h5>
    <ul style="margin: 0; padding-left: 1.5rem;">
      <li>Unilever (UL) - Sustainable brands</li>
      <li>Procter & Gamble (PG) - Environmental initiatives</li>
      <li>Nestle (NSRGY) - Water stewardship</li>
      <li>Nike (NKE) - Sustainable materials</li>
    </ul>
  </div>
</div>

<h2 style="color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 0.5rem;">Chapter 4: Green Bonds and Alternative ESG Investments</h2>

<h3 style="color: #34495e;">Understanding Green Bonds</h3>
<p>Green bonds are debt securities specifically earmarked to raise funds for climate and environmental projects. The global green bond market reached $500 billion in 2022 and is projected to exceed $1 trillion annually by 2025.</p>

<table style="width: 100%; border-collapse: collapse; margin: 2rem 0; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
  <thead>
    <tr style="background: #27ae60; color: white;">
      <th style="padding: 1rem; text-align: left; border: 1px solid #ddd;">Bond Type</th>
      <th style="padding: 1rem; text-align: left; border: 1px solid #ddd;">Issuer</th>
      <th style="padding: 1rem; text-align: left; border: 1px solid #ddd;">Typical Yield</th>
      <th style="padding: 1rem; text-align: left; border: 1px solid #ddd;">Risk Level</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 1rem; border: 1px solid #ddd;"><strong>Sovereign Green Bonds</strong></td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Governments</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">2-4%</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Low</td>
    </tr>
    <tr>
      <td style="padding: 1rem; border: 1px solid #ddd;"><strong>Corporate Green Bonds</strong></td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Corporations</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">3-6%</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Medium</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 1rem; border: 1px solid #ddd;"><strong>Municipal Green Bonds</strong></td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Cities/States</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">3-5%</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Low-Medium</td>
    </tr>
    <tr>
      <td style="padding: 1rem; border: 1px solid #ddd;"><strong>Supranational Green Bonds</strong></td>
      <td style="padding: 1rem; border: 1px solid #ddd;">International Organizations</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">2-4%</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Low</td>
    </tr>
  </tbody>
</table>

<h3 style="color: #34495e;">Top ESG-Focused REITs for 2025</h3>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem; margin: 2rem 0;">
  <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
    <h5 style="color: #2c3e50; margin-top: 0;">Prologis (PLD)</h5>
    <p style="margin: 0.5rem 0;"><strong>Focus:</strong> Sustainable logistics facilities</p>
    <p style="margin: 0.5rem 0;"><strong>ESG Initiatives:</strong> Carbon neutral by 2040, solar installations</p>
    <p style="margin: 0.5rem 0;"><strong>Dividend Yield:</strong> ~2.8%</p>
  </div>
  
  <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
    <h5 style="color: #2c3e50; margin-top: 0;">Alexandria Real Estate (ARE)</h5>
    <p style="margin: 0.5rem 0;"><strong>Focus:</strong> Life science real estate</p>
    <p style="margin: 0.5rem 0;"><strong>ESG Initiatives:</strong> LEED-certified buildings, energy efficiency</p>
    <p style="margin: 0.5rem 0;"><strong>Dividend Yield:</strong> ~3.2%</p>
  </div>
  
  <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
    <h5 style="color: #2c3e50; margin-top: 0;">Boston Properties (BXP)</h5>
    <p style="margin: 0.5rem 0;"><strong>Focus:</strong> Sustainable office buildings</p>
    <p style="margin: 0.5rem 0;"><strong>ESG Initiatives:</strong> Net-zero carbon by 2025</p>
    <p style="margin: 0.5rem 0;"><strong>Dividend Yield:</strong> ~3.8%</p>
  </div>
</div>

<h2 style="color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 0.5rem;">Chapter 5: Performance Analysis and Risk Management</h2>

<h3 style="color: #34495e;">ESG vs Traditional Portfolio Performance</h3>

<table style="width: 100%; border-collapse: collapse; margin: 2rem 0; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
  <thead>
    <tr style="background: #e74c3c; color: white;">
      <th style="padding: 1rem; text-align: left; border: 1px solid #ddd;">Time Period</th>
      <th style="padding: 1rem; text-align: left; border: 1px solid #ddd;">ESG Portfolios</th>
      <th style="padding: 1rem; text-align: left; border: 1px solid #ddd;">Traditional Portfolios</th>
      <th style="padding: 1rem; text-align: left; border: 1px solid #ddd;">Difference</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 1rem; border: 1px solid #ddd;"><strong>1 Year (2024)</strong></td>
      <td style="padding: 1rem; border: 1px solid #ddd;">+11.2%</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">+10.8%</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">+0.4%</td>
    </tr>
    <tr>
      <td style="padding: 1rem; border: 1px solid #ddd;"><strong>3 Years (2022-2024)</strong></td>
      <td style="padding: 1rem; border: 1px solid #ddd;">+8.7% (annualized)</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">+8.3% (annualized)</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">+0.4%</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 1rem; border: 1px solid #ddd;"><strong>5 Years (2020-2024)</strong></td>
      <td style="padding: 1rem; border: 1px solid #ddd;">+9.8% (annualized)</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">+9.2% (annualized)</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">+0.6%</td>
    </tr>
    <tr>
      <td style="padding: 1rem; border: 1px solid #ddd;"><strong>10 Years (2015-2024)</strong></td>
      <td style="padding: 1rem; border: 1px solid #ddd;">+11.3% (annualized)</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">+10.9% (annualized)</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">+0.4%</td>
    </tr>
  </tbody>
</table>

<div style="background: #fff3cd; padding: 2rem; border-radius: 10px; margin: 2rem 0; border-left: 4px solid #ffc107;">
  <h4 style="color: #856404; margin-top: 0;">Key Performance Insights</h4>
  <ul style="margin: 1rem 0; padding-left: 2rem;">
    <li><strong>Lower Volatility:</strong> ESG portfolios showed 15% lower volatility during market downturns</li>
    <li><strong>Better Downside Protection:</strong> Maximum drawdowns were 2-3% smaller than traditional portfolios</li>
    <li><strong>Sharpe Ratio Advantage:</strong> ESG strategies achieved 0.1-0.2 higher risk-adjusted returns</li>
    <li><strong>Sector Resilience:</strong> ESG companies demonstrated stronger resilience during economic uncertainty</li>
  </ul>
</div>

<h2 style="color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 0.5rem;">Chapter 6: Tax Optimization and Implementation Strategy</h2>

<h3 style="color: #34495e;">Tax-Efficient ESG Account Placement</h3>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
  <div style="background: #f0f8ff; padding: 1.5rem; border-radius: 8px; border: 1px solid #4169e1;">
    <h5 style="color: #2c5aa0; margin-top: 0;">Taxable Accounts (Brokerage)</h5>
    <ul style="margin: 0; padding-left: 1.5rem;">
      <li>ESG ETFs with low turnover (tax-efficient)</li>
      <li>Individual ESG stocks for tax-loss harvesting</li>
      <li>Municipal green bonds (tax-free income)</li>
      <li>Foreign ESG funds (for tax credit benefits)</li>
    </ul>
  </div>
  
  <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px; border: 1px solid #6c757d;">
    <h5 style="color: #495057; margin-top: 0;">Tax-Deferred (401k, Traditional IRA)</h5>
    <ul style="margin: 0; padding-left: 1.5rem;">
      <li>Actively managed ESG funds (higher turnover)</li>
      <li>Corporate green bonds (taxable interest)</li>
      <li>ESG REITs (non-qualified dividends)</li>
      <li>Alternative ESG investments</li>
    </ul>
  </div>
  
  <div style="background: #e8f5e8; padding: 1.5rem; border-radius: 8px; border: 1px solid #28a745;">
    <h5 style="color: #155724; margin-top: 0;">Tax-Free (Roth IRA, Roth 401k)</h5>
    <ul style="margin: 0; padding-left: 1.5rem;">
      <li>High-growth ESG thematic funds</li>
      <li>Small-cap ESG funds</li>
      <li>International emerging market ESG</li>
      <li>ESG growth stocks with long-term potential</li>
    </ul>
  </div>
</div>

<h3 style="color: #34495e;">90-Day ESG Implementation Plan</h3>

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 2rem; border-radius: 10px; margin: 2rem 0;">
  <h4 style="color: white; margin-top: 0;">Your Complete ESG Investing Action Plan</h4>
  
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin: 1.5rem 0;">
    <div style="background: rgba(255,255,255,0.1); padding: 1.5rem; border-radius: 8px;">
      <h5 style="color: white; margin-top: 0;">Days 1-30: Foundation</h5>
      <ul style="margin: 0; padding-left: 1.5rem; color: white;">
        <li>Complete values assessment</li>
        <li>Set ESG investment goals</li>
        <li>Research ESG rating providers</li>
        <li>Open ESG-focused brokerage account</li>
        <li>Begin with 1-2 core ESG ETFs</li>
      </ul>
    </div>
    
    <div style="background: rgba(255,255,255,0.1); padding: 1.5rem; border-radius: 8px;">
      <h5 style="color: white; margin-top: 0;">Days 31-60: Expansion</h5>
      <ul style="margin: 0; padding-left: 1.5rem; color: white;">
        <li>Diversify across ESG themes</li>
        <li>Add international ESG exposure</li>
        <li>Implement green bond allocation</li>
        <li>Set up impact tracking system</li>
        <li>Review and rebalance quarterly</li>
      </ul>
    </div>
    
    <div style="background: rgba(255,255,255,0.1); padding: 1.5rem; border-radius: 8px;">
      <h5 style="color: white; margin-top: 0;">Days 61-90: Optimization</h5>
      <ul style="margin: 0; padding-left: 1.5rem; color: white;">
        <li>Add individual ESG stock picks</li>
        <li>Implement tax optimization</li>
        <li>Engage in shareholder advocacy</li>
        <li>Measure impact outcomes</li>
        <li>Plan for long-term growth</li>
      </ul>
    </div>
  </div>
</div>

<h2 style="color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 0.5rem;">Conclusion: Building Your Sustainable Financial Future</h2>

<div style="background: linear-gradient(135deg, #28a745 0%, #20c997 100%); color: white; padding: 2rem; border-radius: 10px; margin: 2rem 0; text-align: center;">
  <h3 style="color: white; margin-bottom: 1rem;">Start Your ESG Investing Journey Today</h3>
  
  <p style="font-size: 1.1rem; margin: 1rem 0;">ESG investing represents the future of finance, combining competitive returns with positive impact. By following this comprehensive guide, you're equipped to build a portfolio that reflects your values while achieving your financial goals.</p>
  
  <div style="background: rgba(255,255,255,0.1); padding: 1.5rem; border-radius: 8px; margin: 1.5rem 0;">
    <h4 style="color: white; margin-top: 0;">Your ESG Success Framework</h4>
    <div style="text-align: left; margin: 1rem 0;">
      <div style="margin: 0.5rem 0;">✓ Values-based investment strategy defined</div>
      <div style="margin: 0.5rem 0;">✓ ESG screening and analysis mastered</div>
      <div style="margin: 0.5rem 0;">✓ Portfolio construction principles understood</div>
      <div style="margin: 0.5rem 0;">✓ Top ESG investments identified</div>
      <div style="margin: 0.5rem 0;">✓ Risk management and performance tracking established</div>
      <div style="margin: 0.5rem 0;">✓ Tax optimization strategies implemented</div>
      <div style="margin: 0.5rem 0;">✓ 90-day action plan ready for execution</div>
    </div>
  </div>
  
  <p style="margin: 1rem 0;">Remember: sustainable investing is a journey, not a destination. Stay informed, regularly review your portfolio, and continue aligning your investments with your evolving values and financial objectives.</p>
</div>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #007bff; margin: 2rem 0;">
  <h4 style="color: #495057; margin-top: 0;">Final Thoughts</h4>
  <p style="margin: 0;">ESG investing has matured into a powerful strategy that no longer requires sacrificing returns for values. With $50+ trillion expected in global ESG assets by 2025, you're joining a movement that's reshaping how capital flows toward companies building a sustainable future. Start small, think long-term, and let your investments be a force for positive change while building your wealth.</p>
</div>

</div>`;

  try {
    const result = await prisma.post.update({
      where: { id: 'cmkh4d4ye000g41shttzac4n5' },
      data: {
        content: content,
        excerpt: 'Complete guide to ESG investing in 2025. Learn sustainable and socially responsible investing strategies, from values-based screening to impact measurement, with step-by-step portfolio construction and performance analysis.',
        updatedAt: new Date()
      }
    });
    
    console.log('ESG Investing Guide updated successfully!');
    console.log('Post ID:', result.id);
    console.log('Updated at:', result.updatedAt);
  } catch (error) {
    console.error('Error updating ESG Investing Guide:', error);
  } finally {
    await prisma.$disconnect();
  }
}

updateESGInvestingGuide();