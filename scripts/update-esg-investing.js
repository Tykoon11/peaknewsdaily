const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function updateESGInvestingGuide() {
  const content = `<div style="max-width: 1200px; margin: 0 auto; font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.7; color: #2c3e50;">

<h1 style="color: #2c3e50; font-size: 2.5rem; margin-bottom: 1rem; text-align: center;">ESG Investing Guide 2025: Complete Strategy for Sustainable and Socially Responsible Investing</h1>

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

<h2 style="color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 0.5rem;">Chapter 2: Step-by-Step ESG Portfolio Construction</h2>

<h3 style="color: #34495e;">Phase 1: Define Your ESG Investment Objectives</h3>

<div style="background: #fff3cd; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #ffc107; margin: 2rem 0;">
  <h4 style="color: #856404; margin-top: 0;">Step 1: Values Assessment Worksheet</h4>
  <p style="margin-bottom: 1rem;">Before selecting investments, clearly define your ESG priorities:</p>
  
  <div style="background: white; padding: 1rem; border-radius: 5px; margin: 1rem 0;">
    <h5 style="color: #495057; margin-top: 0;">Priority Ranking Exercise (Rate 1-5, 5 = Most Important)</h5>
    <ul style="margin: 0; padding-left: 1.5rem;">
      <li>Climate change mitigation and adaptation: ___</li>
      <li>Renewable energy transition: ___</li>
      <li>Social justice and equality: ___</li>
      <li>Labor rights and workplace conditions: ___</li>
      <li>Corporate governance and transparency: ___</li>
      <li>Community development and impact: ___</li>
      <li>Avoiding harmful industries (tobacco, weapons, etc.): ___</li>
      <li>Supporting innovation and technology: ___</li>
    </ul>
  </div>
</div>

<h4 style="color: #3498db;">Step 2: Set Financial and Impact Goals</h4>
<ul style="padding-left: 2rem;">
  <li><strong>Return Expectations:</strong> Target annual returns (typically 6-10% for diversified ESG portfolios)</li>
  <li><strong>Risk Tolerance:</strong> ESG portfolios can have different risk profiles than traditional portfolios</li>
  <li><strong>Impact Measurement:</strong> Define how you'll measure non-financial outcomes</li>
  <li><strong>Time Horizon:</strong> ESG investing often benefits from longer investment periods (10+ years)</li>
</ul>

<h3 style="color: #34495e;">Phase 2: ESG Research and Screening Process</h3>

<h4 style="color: #3498db;">Step 3: Understanding ESG Rating Systems</h4>

<table style="width: 100%; border-collapse: collapse; margin: 2rem 0; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
  <thead>
    <tr style="background: #34495e; color: white;">
      <th style="padding: 1rem; text-align: left; border: 1px solid #ddd;">ESG Rating Provider</th>
      <th style="padding: 1rem; text-align: left; border: 1px solid #ddd;">Scale</th>
      <th style="padding: 1rem; text-align: left; border: 1px solid #ddd;">Focus Areas</th>
      <th style="padding: 1rem; text-align: left; border: 1px solid #ddd;">Best For</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 1rem; border: 1px solid #ddd;"><strong>MSCI ESG Ratings</strong></td>
      <td style="padding: 1rem; border: 1px solid #ddd;">CCC to AAA</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Comprehensive ESG risk exposure</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Broad market screening</td>
    </tr>
    <tr>
      <td style="padding: 1rem; border: 1px solid #ddd;"><strong>Sustainalytics</strong></td>
      <td style="padding: 1rem; border: 1px solid #ddd;">0-40+ (lower is better)</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">ESG risk and controversy assessment</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Risk-focused analysis</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 1rem; border: 1px solid #ddd;"><strong>Refinitiv (S&P)</strong></td>
      <td style="padding: 1rem; border: 1px solid #ddd;">0-100</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">ESG performance and transparency</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Performance benchmarking</td>
    </tr>
    <tr>
      <td style="padding: 1rem; border: 1px solid #ddd;"><strong>Bloomberg ESG</strong></td>
      <td style="padding: 1rem; border: 1px solid #ddd;">0-10</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">ESG disclosure and governance</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Data-driven analysis</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 1rem; border: 1px solid #ddd;"><strong>ISS ESG</strong></td>
      <td style="padding: 1rem; border: 1px solid #ddd;">1-10</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Governance and shareholder rights</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Governance-focused investing</td>
    </tr>
  </tbody>
</table>

<h4 style="color: #3498db;">Step 4: ESG Screening Implementation Framework</h4>

<div style="background: #e8f5e8; padding: 2rem; border-radius: 10px; margin: 2rem 0;">
  <h5 style="color: #28a745; margin-top: 0;">The Three-Stage ESG Screening Process</h5>
  
  <div style="margin: 1.5rem 0;">
    <h6 style="color: #155724; margin-bottom: 0.5rem;">Stage 1: Exclusionary Screening (Negative Screening)</h6>
    <ul style="margin: 0.5rem 0; padding-left: 2rem;">
      <li>Exclude industries/companies that conflict with your values</li>
      <li>Common exclusions: tobacco, weapons, fossil fuels, gambling, adult entertainment</li>
      <li>Revenue thresholds: typically exclude companies with >5-10% revenue from prohibited activities</li>
    </ul>
  </div>
  
  <div style="margin: 1.5rem 0;">
    <h6 style="color: #155724; margin-bottom: 0.5rem;">Stage 2: Positive Screening (Best-in-Class Selection)</h6>
    <ul style="margin: 0.5rem 0; padding-left: 2rem;">
      <li>Rank remaining companies by ESG scores within each sector</li>
      <li>Select top 25-50% performers in each industry</li>
      <li>Consider ESG trend improvements, not just absolute scores</li>
    </ul>
  </div>
  
  <div style="margin: 1.5rem 0;">
    <h6 style="color: #155724; margin-bottom: 0.5rem;">Stage 3: ESG Integration and Financial Analysis</h6>
    <ul style="margin: 0.5rem 0; padding-left: 2rem;">
      <li>Combine ESG scores with traditional financial metrics</li>
      <li>Assess ESG-related financial risks and opportunities</li>
      <li>Consider forward-looking ESG initiatives and commitments</li>
    </ul>
  </div>
</div>

<h3 style="color: #34495e;">Phase 3: Portfolio Asset Allocation Strategy</h3>

<h4 style="color: #3498db;">Step 5: ESG Asset Allocation Framework</h4>

<div style="background: #f8f9fa; padding: 2rem; border-radius: 10px; margin: 2rem 0; border: 1px solid #dee2e6;">
  <h5 style="color: #495057; margin-top: 0;">Conservative ESG Portfolio (Age 55+)</h5>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin: 1rem 0;">
    <div>• 40% ESG-focused bond funds/ETFs</div>
    <div>• 25% Large-cap ESG equity funds</div>
    <div>• 15% International ESG funds</div>
    <div>• 10% ESG REITs and infrastructure</div>
    <div>• 5% Green bonds and impact investments</div>
    <div>• 5% Cash/money market ESG funds</div>
  </div>
  <p style="margin: 1rem 0 0 0;"><strong>Expected Annual Return:</strong> 6-8% | <strong>Risk Level:</strong> Low-Moderate</p>
</div>

<div style="background: #e8f4fd; padding: 2rem; border-radius: 10px; margin: 2rem 0; border: 1px solid #b8daff;">
  <h5 style="color: #495057; margin-top: 0;">Moderate ESG Portfolio (Age 35-54)</h5>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin: 1rem 0;">
    <div>• 30% Large-cap ESG equity funds</div>
    <div>• 25% ESG bond funds</div>
    <div>• 15% International/emerging market ESG</div>
    <div>• 10% Small/mid-cap ESG funds</div>
    <div>• 10% Thematic ESG investments</div>
    <div>• 5% ESG REITs</div>
    <div>• 5% Alternative ESG investments</div>
  </div>
  <p style="margin: 1rem 0 0 0;"><strong>Expected Annual Return:</strong> 7-9% | <strong>Risk Level:</strong> Moderate</p>
</div>

<div style="background: #fff3e0; padding: 2rem; border-radius: 10px; margin: 2rem 0; border: 1px solid #ffc947;">
  <h5 style="color: #495057; margin-top: 0;">Growth ESG Portfolio (Age 20-34)</h5>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin: 1rem 0;">
    <div>• 35% Large-cap ESG growth funds</div>
    <div>• 20% Small/mid-cap ESG funds</div>
    <div>• 15% International ESG funds</div>
    <div>• 10% Thematic ESG investments</div>
    <div>• 10% ESG bond funds</div>
    <div>• 5% Emerging market ESG</div>
    <div>• 5% Impact investing/alternatives</div>
  </div>
  <p style="margin: 1rem 0 0 0;"><strong>Expected Annual Return:</strong> 8-11% | <strong>Risk Level:</strong> Moderate-High</p>
</div>

<h2 style="color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 0.5rem;">Chapter 3: ESG Investment Vehicle Selection</h2>

<h3 style="color: #34495e;">Top ESG ETFs and Mutual Funds for 2025</h3>

<table style="width: 100%; border-collapse: collapse; margin: 2rem 0; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
  <thead>
    <tr style="background: #28a745; color: white;">
      <th style="padding: 1rem; text-align: left; border: 1px solid #ddd;">Fund Name</th>
      <th style="padding: 1rem; text-align: left; border: 1px solid #ddd;">Ticker</th>
      <th style="padding: 1rem; text-align: left; border: 1px solid #ddd;">Expense Ratio</th>
      <th style="padding: 1rem; text-align: left; border: 1px solid #ddd;">Focus</th>
      <th style="padding: 1rem; text-align: left; border: 1px solid #ddd;">AUM</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 1rem; border: 1px solid #ddd;">Vanguard ESG U.S. Stock ETF</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">ESGV</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">0.12%</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Broad U.S. ESG</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">$7.8B</td>
    </tr>
    <tr>
      <td style="padding: 1rem; border: 1px solid #ddd;">iShares MSCI ACWI ESG Select ETF</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">SUSA</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">0.25%</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Global ESG</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">$4.2B</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 1rem; border: 1px solid #ddd;">Invesco QQQ Trust ESG</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">QQQM</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">0.15%</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Tech ESG</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">$8.1B</td>
    </tr>
    <tr>
      <td style="padding: 1rem; border: 1px solid #ddd;">Vanguard ESG International Stock ETF</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">VSGX</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">0.12%</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">International ESG</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">$3.4B</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 1rem; border: 1px solid #ddd;">iShares Global Clean Energy ETF</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">ICLN</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">0.42%</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Clean Energy</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">$5.7B</td>
    </tr>
  </tbody>
</table>

<h3 style="color: #34495e;">Individual ESG Stock Selection Process</h3>

<h4 style="color: #3498db;">Step 6: ESG Stock Analysis Framework</h4>

<div style="background: #e8f4fd; padding: 2rem; border-radius: 10px; margin: 2rem 0;">
  <h5 style="color: #2980b9; margin-top: 0;">The IMPACT Stock Selection Model</h5>
  
  <div style="margin: 1.5rem 0;">
    <h6 style="color: #1f4e79;">I - Impact Measurement</h6>
    <ul style="margin: 0.5rem 0; padding-left: 2rem;">
      <li>Quantify positive environmental and social outcomes</li>
      <li>Track UN SDG (Sustainable Development Goals) alignment</li>
      <li>Measure carbon footprint and reduction targets</li>
    </ul>
  </div>
  
  <div style="margin: 1.5rem 0;">
    <h6 style="color: #1f4e79;">M - Management Quality Assessment</h6>
    <ul style="margin: 0.5rem 0; padding-left: 2rem;">
      <li>Board diversity and independence</li>
      <li>Executive compensation tied to ESG goals</li>
      <li>Transparency in ESG reporting and targets</li>
    </ul>
  </div>
  
  <div style="margin: 1.5rem 0;">
    <h6 style="color: #1f4e79;">P - Performance Track Record</h6>
    <ul style="margin: 0.5rem 0; padding-left: 2rem;">
      <li>Historical ESG score improvements</li>
      <li>Achievement of sustainability milestones</li>
      <li>Integration of ESG into business strategy</li>
    </ul>
  </div>
  
  <div style="margin: 1.5rem 0;">
    <h6 style="color: #1f4e79;">A - Alignment with Values</h6>
    <ul style="margin: 0.5rem 0; padding-left: 2rem;">
      <li>Consistency with personal ESG priorities</li>
      <li>Absence of conflicting business activities</li>
      <li>Positive contribution to society and environment</li>
    </ul>
  </div>
  
  <div style="margin: 1.5rem 0;">
    <h6 style="color: #1f4e79;">C - Competitive Financial Metrics</h6>
    <ul style="margin: 0.5rem 0; padding-left: 2rem;">
      <li>Revenue growth and profitability</li>
      <li>Debt-to-equity ratios and financial stability</li>
      <li>Return on equity and investment efficiency</li>
    </ul>
  </div>
  
  <div style="margin: 1.5rem 0;">
    <h6 style="color: #1f4e79;">T - Trend Analysis and Future Outlook</h6>
    <ul style="margin: 0.5rem 0; padding-left: 2rem;">
      <li>Industry transition toward sustainability</li>
      <li>Regulatory environment and policy support</li>
      <li>Innovation pipeline and R&D investments</li>
    </ul>
  </div>
</div>

<h4 style="color: #3498db;">Top ESG Stocks by Sector (2025 Recommendations)</h4>

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

<p>Green bonds are debt securities specifically earmarked to raise funds for climate and environmental projects. The global green bond market reached $500 billion in 2022 and is projected to exceed $1 trillion annually by 2025. These instruments provide steady income while supporting environmental initiatives.</p>

<h4 style="color: #3498db;">Types of Green Bonds</h4>

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

<h3 style="color: #34495e;">ESG Real Estate Investment (REITs)</h3>

<div style="background: #e8f5e8; padding: 2rem; border-radius: 10px; margin: 2rem 0;">
  <h4 style="color: #28a745; margin-top: 0;">Top ESG-Focused REITs for 2025</h4>
  
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem; margin: 1.5rem 0;">
    <div style="background: white; padding: 1rem; border-radius: 5px;">
      <h5 style="color: #2c3e50; margin-top: 0;">Prologis (PLD)</h5>
      <p style="margin: 0.5rem 0;"><strong>Focus:</strong> Sustainable logistics facilities</p>
      <p style="margin: 0.5rem 0;"><strong>ESG Initiatives:</strong> Carbon neutral by 2040, solar installations</p>
      <p style="margin: 0.5rem 0;"><strong>Dividend Yield:</strong> ~2.8%</p>
    </div>
    
    <div style="background: white; padding: 1rem; border-radius: 5px;">
      <h5 style="color: #2c3e50; margin-top: 0;">Alexandria Real Estate (ARE)</h5>
      <p style="margin: 0.5rem 0;"><strong>Focus:</strong> Life science real estate</p>
      <p style="margin: 0.5rem 0;"><strong>ESG Initiatives:</strong> LEED-certified buildings, energy efficiency</p>
      <p style="margin: 0.5rem 0;"><strong>Dividend Yield:</strong> ~3.2%</p>
    </div>
    
    <div style="background: white; padding: 1rem; border-radius: 5px;">
      <h5 style="color: #2c3e50; margin-top: 0;">Boston Properties (BXP)</h5>
      <p style="margin: 0.5rem 0;"><strong>Focus:</strong> Sustainable office buildings</p>
      <p style="margin: 0.5rem 0;"><strong>ESG Initiatives:</strong> Net-zero carbon by 2025</p>
      <p style="margin: 0.5rem 0;"><strong>Dividend Yield:</strong> ~3.8%</p>
    </div>
  </div>
</div>

<h2 style="color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 0.5rem;">Chapter 5: Performance Analysis and Risk Management</h2>

<h3 style="color: #34495e;">ESG Performance Metrics and Benchmarking</h3>

<h4 style="color: #3498db;">Financial Performance Comparison</h4>

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

<h4 style="color: #3498db;">Risk-Adjusted Returns Analysis</h4>

<div style="background: #fff3cd; padding: 2rem; border-radius: 10px; margin: 2rem 0; border-left: 4px solid #ffc107;">
  <h5 style="color: #856404; margin-top: 0;">Key Findings from 2024 ESG Performance Studies</h5>
  
  <ul style="margin: 1rem 0; padding-left: 2rem;">
    <li><strong>Lower Volatility:</strong> ESG portfolios showed 15% lower volatility during market downturns</li>
    <li><strong>Better Downside Protection:</strong> Maximum drawdowns were 2-3% smaller than traditional portfolios</li>
    <li><strong>Sharpe Ratio Advantage:</strong> ESG strategies achieved 0.1-0.2 higher risk-adjusted returns</li>
    <li><strong>Sector Resilience:</strong> ESG companies demonstrated stronger resilience during economic uncertainty</li>
  </ul>
  
  <p style="margin: 1rem 0 0 0;"><em>Source: Analysis of 500+ ESG funds and traditional benchmarks, 2020-2024 period</em></p>
</div>

<h3 style="color: #34495e;">ESG Risk Management Framework</h3>

<h4 style="color: #3498db;">Step 7: Implementing ESG Risk Controls</h4>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
  <div style="background: #fde8e8; padding: 1.5rem; border-radius: 8px; border: 1px solid #e74c3c;">
    <h5 style="color: #c0392b; margin-top: 0;">ESG-Specific Risks to Monitor</h5>
    <ul style="margin: 0; padding-left: 1.5rem;">
      <li>Greenwashing and ESG misrepresentation</li>
      <li>Regulatory changes affecting ESG standards</li>
      <li>ESG rating downgrades and methodology changes</li>
      <li>Transition risks in climate-sensitive industries</li>
      <li>Social license and reputational risks</li>
    </ul>
  </div>

  <div style="background: #e8f4fd; padding: 1.5rem; border-radius: 8px; border: 1px solid #3498db;">
    <h5 style="color: #2980b9; margin-top: 0;">Risk Mitigation Strategies</h5>
    <ul style="margin: 0; padding-left: 1.5rem;">
      <li>Diversification across ESG themes and geographies</li>
      <li>Regular ESG scoring updates and reviews</li>
      <li>Integration of multiple ESG rating providers</li>
      <li>Stress testing for climate scenarios</li>
      <li>Active engagement and proxy voting</li>
    </ul>
  </div>
</div>

<h2 style="color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 0.5rem;">Chapter 6: Tax Optimization and Retirement Integration</h2>

<h3 style="color: #34495e;">ESG Tax-Advantaged Strategies</h3>

<h4 style="color: #3498db;">Step 8: Tax-Efficient ESG Implementation</h4>

<div style="background: #f0f8ff; padding: 2rem; border-radius: 10px; margin: 2rem 0; border: 1px solid #4169e1;">
  <h5 style="color: #2c5aa0; margin-top: 0;">Account Placement Strategy for ESG Investments</h5>
  
  <div style="margin: 1.5rem 0;">
    <h6 style="color: #1e3a8a;">Taxable Accounts (Brokerage)</h6>
    <ul style="margin: 0.5rem 0; padding-left: 2rem;">
      <li>ESG ETFs with low turnover (tax-efficient)</li>
      <li>Individual ESG stocks for tax-loss harvesting</li>
      <li>Municipal green bonds (tax-free income)</li>
      <li>Foreign ESG funds (for tax credit benefits)</li>
    </ul>
  </div>
  
  <div style="margin: 1.5rem 0;">
    <h6 style="color: #1e3a8a;">Tax-Deferred Accounts (401k, Traditional IRA)</h6>
    <ul style="margin: 0.5rem 0; padding-left: 2rem;">
      <li>Actively managed ESG funds (higher turnover)</li>
      <li>Corporate green bonds (taxable interest)</li>
      <li>ESG REITs (non-qualified dividends)</li>
      <li>Alternative ESG investments</li>
    </ul>
  </div>
  
  <div style="margin: 1.5rem 0;">
    <h6 style="color: #1e3a8a;">Tax-Free Accounts (Roth IRA, Roth 401k)</h6>
    <ul style="margin: 0.5rem 0; padding-left: 2rem;">
      <li>High-growth ESG thematic funds</li>
      <li>Small-cap ESG funds</li>
      <li>International emerging market ESG</li>
      <li>ESG growth stocks with long-term potential</li>
    </ul>
  </div>
</div>

<h3 style="color: #34495e;">ESG in Retirement Planning</h3>

<table style="width: 100%; border-collapse: collapse; margin: 2rem 0; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
  <thead>
    <tr style="background: #8e44ad; color: white;">
      <th style="padding: 1rem; text-align: left; border: 1px solid #ddd;">Age Range</th>
      <th style="padding: 1rem; text-align: left; border: 1px solid #ddd;">ESG Focus</th>
      <th style="padding: 1rem; text-align: left; border: 1px solid #ddd;">Implementation Strategy</th>
      <th style="padding: 1rem; text-align: left; border: 1px solid #ddd;">Key Considerations</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 1rem; border: 1px solid #ddd;"><strong>20-30</strong></td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Growth + Innovation</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Aggressive ESG thematic investing</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Long-term compounding, emerging technologies</td>
    </tr>
    <tr>
      <td style="padding: 1rem; border: 1px solid #ddd;"><strong>30-40</strong></td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Balanced Growth</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Core ESG funds + selective thematics</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Family planning, mortgage considerations</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 1rem; border: 1px solid #ddd;"><strong>40-50</strong></td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Stability + Growth</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Large-cap ESG + green bonds</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Peak earning years, education costs</td>
    </tr>
    <tr>
      <td style="padding: 1rem; border: 1px solid #ddd;"><strong>50-60</strong></td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Income + Preservation</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">ESG dividend funds + municipal bonds</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Pre-retirement planning, catch-up contributions</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 1rem; border: 1px solid #ddd;"><strong>60+</strong></td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Income + Legacy</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Conservative ESG funds + impact bonds</td>
      <td style="padding: 1rem; border: 1px solid #ddd;">Withdrawal strategies, estate planning</td>
    </tr>
  </tbody>
</table>

<h2 style="color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 0.5rem;">Chapter 7: Advanced ESG Strategies and Future Trends</h2>

<h3 style="color: #34495e;">Impact Measurement and Reporting</h3>

<h4 style="color: #3498db;">Step 9: Creating Your ESG Impact Dashboard</h4>

<div style="background: #e8f5e8; padding: 2rem; border-radius: 10px; margin: 2rem 0;">
  <h5 style="color: #28a745; margin-top: 0;">Comprehensive ESG Impact Tracking Framework</h5>
  
  <div style="margin: 1.5rem 0;">
    <h6 style="color: #155724;">Environmental Impact Metrics</h6>
    <ul style="margin: 0.5rem 0; padding-left: 2rem;">
      <li>Carbon footprint reduction (tons CO2e avoided)</li>
      <li>Renewable energy generation supported (MWh)</li>
      <li>Water conservation impact (gallons saved)</li>
      <li>Waste reduction and recycling rates</li>
      <li>Biodiversity protection initiatives supported</li>
    </ul>
  </div>
  
  <div style="margin: 1.5rem 0;">
    <h6 style="color: #155724;">Social Impact Metrics</h6>
    <ul style="margin: 0.5rem 0; padding-left: 2rem;">
      <li>Jobs created in sustainable industries</li>
      <li>Access to healthcare and education improved</li>
      <li>Gender and racial diversity in leadership</li>
      <li>Community development projects funded</li>
      <li>Employee satisfaction and retention rates</li>
    </ul>
  </div>
  
  <div style="margin: 1.5rem 0;">
    <h6 style="color: #155724;">Governance Impact Metrics</h6>
    <ul style="margin: 0.5rem 0; padding-left: 2rem;">
      <li>Board independence and diversity scores</li>
      <li>Executive pay ratio improvements</li>
      <li>Transparency and disclosure ratings</li>
      <li>Anti-corruption and ethics programs</li>
      <li>Shareholder engagement effectiveness</li>
    </ul>
  </div>
</div>

<h3 style="color: #34495e;">Emerging ESG Investment Themes for 2025-2030</h3>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
  <div style="background: #f0f8ff; padding: 1.5rem; border-radius: 8px; border: 1px solid #4169e1;">
    <h5 style="color: #2c5aa0; margin-top: 0;">Climate Technology</h5>
    <ul style="margin: 0; padding-left: 1.5rem;">
      <li>Carbon capture and storage</li>
      <li>Green hydrogen production</li>
      <li>Advanced battery technology</li>
      <li>Climate adaptation infrastructure</li>
      <li>Sustainable agriculture tech</li>
    </ul>
  </div>

  <div style="background: #f8e8f8; padding: 1.5rem; border-radius: 8px; border: 1px solid #9b59b6;">
    <h5 style="color: #9b59b6; margin-top: 0;">Social Innovation</h5>
    <ul style="margin: 0; padding-left: 1.5rem;">
      <li>Affordable healthcare technology</li>
      <li>Financial inclusion platforms</li>
      <li>Educational technology access</li>
      <li>Aging population solutions</li>
      <li>Mental health and wellness</li>
    </ul>
  </div>

  <div style="background: #fef5e7; padding: 1.5rem; border-radius: 8px; border: 1px solid #f39c12;">
    <h5 style="color: #f39c12; margin-top: 0;">Circular Economy</h5>
    <ul style="margin: 0; padding-left: 1.5rem;">
      <li>Waste-to-energy technologies</li>
      <li>Sustainable packaging solutions</li>
      <li>Recycling and upcycling innovations</li>
      <li>Resource efficiency platforms</li>
      <li>Sharing economy infrastructure</li>
    </ul>
  </div>

  <div style="background: #edf2f7; padding: 1.5rem; border-radius: 8px; border: 1px solid #718096;">
    <h5 style="color: #718096; margin-top: 0;">Digital ESG Solutions</h5>
    <ul style="margin: 0; padding-left: 1.5rem;">
      <li>ESG data and analytics platforms</li>
      <li>Supply chain transparency tools</li>
      <li>Impact measurement technologies</li>
      <li>Blockchain for sustainability</li>
      <li>AI for environmental monitoring</li>
    </ul>
  </div>
</div>

<h2 style="color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 0.5rem;">Chapter 8: Implementation Roadmap and Action Plan</h2>

<h3 style="color: #34495e;">30-60-90 Day ESG Implementation Plan</h3>

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

<h3 style="color: #34495e;">Essential ESG Investing Resources</h3>

<div style="background: #f8f9fa; padding: 2rem; border-radius: 10px; margin: 2rem 0; border: 1px solid #dee2e6;">
  <h4 style="color: #495057; margin-top: 0;">Recommended ESG Research and Tools</h4>
  
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 1.5rem 0;">
    <div>
      <h5 style="color: #343a40;">Free ESG Resources</h5>
      <ul style="margin: 0; padding-left: 1.5rem;">
        <li>MSCI ESG Research & Ratings (limited free access)</li>
        <li>Sustainalytics ESG Risk Ratings</li>
        <li>CDP (formerly Carbon Disclosure Project)</li>
        <li>Global Reporting Initiative (GRI) Standards</li>
        <li>UN Global Compact database</li>
      </ul>
    </div>
    
    <div>
      <h5 style="color: #343a40;">Professional ESG Platforms</h5>
      <ul style="margin: 0; padding-left: 1.5rem;">
        <li>Bloomberg ESG Terminal</li>
        <li>Refinitiv (S&P) ESG Scores</li>
        <li>ISS ESG Solutions</li>
        <li>Morningstar Sustainalytics</li>
        <li>RepRisk ESG Analytics</li>
      </ul>
    </div>
    
    <div>
      <h5 style="color: #343a40;">Educational Resources</h5>
      <ul style="margin: 0; padding-left: 1.5rem;">
        <li>CFA Institute ESG Investing Course</li>
        <li>Principles for Responsible Investment (PRI)</li>
        <li>Global Sustainable Investment Alliance</li>
        <li>Climate Disclosure Standards Board</li>
        <li>International Integrated Reporting Council</li>
      </ul>
    </div>
  </div>
</div>

<h2 style="color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 0.5rem;">Conclusion: Building Your Sustainable Financial Future</h2>

<div style="background: linear-gradient(135deg, #28a745 0%, #20c997 100%); color: white; padding: 2rem; border-radius: 10px; margin: 2rem 0; text-align: center;">
  <h3 style="color: white; margin-bottom: 1rem;">Congratulations! You're Ready to Start Your ESG Investing Journey</h3>
  
  <p style="font-size: 1.1rem; margin: 1rem 0;">You now have the complete framework to build a portfolio that aligns with your values while pursuing competitive returns. ESG investing is not just about doing good—it's about building a resilient, future-focused investment strategy that can weather changing market conditions and regulatory environments.</p>
  
  <div style="background: rgba(255,255,255,0.1); padding: 1.5rem; border-radius: 8px; margin: 1.5rem 0;">
    <h4 style="color: white; margin-top: 0;">Your ESG Investing Success Checklist</h4>
    <div style="text-align: left; margin: 1rem 0;">
      <div style="margin: 0.5rem 0;">✓ Defined personal ESG investment values and priorities</div>
      <div style="margin: 0.5rem 0;">✓ Understood ESG screening methodologies and rating systems</div>
      <div style="margin: 0.5rem 0;">✓ Learned portfolio construction and asset allocation strategies</div>
      <div style="margin: 0.5rem 0;">✓ Identified top ESG ETFs, funds, and individual stocks</div>
      <div style="margin: 0.5rem 0;">✓ Explored green bonds and alternative ESG investments</div>
      <div style="margin: 0.5rem 0;">✓ Mastered performance analysis and risk management</div>
      <div style="margin: 0.5rem 0;">✓ Optimized tax efficiency and retirement integration</div>
      <div style="margin: 0.5rem 0;">✓ Created impact measurement and reporting framework</div>
      <div style="margin: 0.5rem 0;">✓ Developed 90-day implementation roadmap</div>
    </div>
  </div>
  
  <p style="margin: 1rem 0;">Remember: ESG investing is a long-term strategy that benefits from consistent application and regular review. Stay informed about evolving ESG standards, continue to align your investments with your values, and most importantly, maintain a diversified approach that balances impact with financial returns.</p>
</div>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #007bff; margin: 2rem 0;">
  <h4 style="color: #495057; margin-top: 0;">Next Steps Reminder</h4>
  <p style="margin-bottom: 1rem;">Start with small steps, build your knowledge continuously, and remember that every investment decision is an opportunity to support the kind of world you want to live in. The future of investing is sustainable—and you're now equipped to be part of that future.</p>
  
  <p style="margin: 0; font-style: italic;">Begin your ESG investing journey today, because the best time to align your investments with your values was yesterday—the second-best time is now.</p>
</div>

</div>
`;

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