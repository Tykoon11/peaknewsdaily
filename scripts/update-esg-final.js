const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function updateESGInvestingGuide() {
  const content = `<div style="max-width: 1200px; margin: 0 auto; font-family: Arial, sans-serif; line-height: 1.7; color: #2c3e50;">

<h1 style="color: #2c3e50; font-size: 2.2rem; margin-bottom: 1rem; text-align: center;">ESG Investing Guide 2025: Complete Strategy for Sustainable Investing</h1>

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 2rem; border-radius: 10px; margin: 2rem 0; text-align: center;">
  <h2 style="color: white; margin-bottom: 1rem;">Master ESG Investing: Values-Based Screening to Impact Measurement</h2>
  <p style="font-size: 1.1rem; margin: 0;">Learn to align investments with values while achieving competitive returns in sustainable finance</p>
</div>

<div style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #28a745; margin: 2rem 0;">
  <h3 style="color: #28a745; margin-top: 0;">What You'll Learn</h3>
  <ul style="margin: 0; padding-left: 1.5rem;">
    <li>ESG criteria and sustainable investing frameworks</li>
    <li>Step-by-step ESG portfolio construction</li>
    <li>ESG ETFs, mutual funds, and stock selection</li>
    <li>Performance analysis and risk management</li>
    <li>Green bonds and alternative ESG investments</li>
    <li>Tax optimization and retirement integration</li>
  </ul>
</div>

<h2 style="color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 0.5rem;">Understanding ESG Investing</h2>

<p>Environmental, Social, and Governance (ESG) investing integrates sustainability factors into investment decisions. ESG investing has evolved from niche to mainstream, with global ESG assets reaching $35 trillion in 2022 and projected to exceed $50 trillion by 2025.</p>

<h3 style="color: #34495e;">The Three Pillars of ESG</h3>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
  <div style="background: #e8f5e8; padding: 1.5rem; border-radius: 8px;">
    <h4 style="color: #28a745; margin-top: 0;">Environmental (E)</h4>
    <ul style="margin: 0; padding-left: 1.5rem;">
      <li>Climate change and carbon footprint</li>
      <li>Renewable energy and clean technology</li>
      <li>Resource depletion and waste management</li>
      <li>Water scarcity and conservation</li>
    </ul>
  </div>

  <div style="background: #e8f4fd; padding: 1.5rem; border-radius: 8px;">
    <h4 style="color: #3498db; margin-top: 0;">Social (S)</h4>
    <ul style="margin: 0; padding-left: 1.5rem;">
      <li>Employee relations and workplace safety</li>
      <li>Diversity, equity, and inclusion</li>
      <li>Human rights and labor standards</li>
      <li>Community engagement and development</li>
    </ul>
  </div>

  <div style="background: #fff3e0; padding: 1.5rem; border-radius: 8px;">
    <h4 style="color: #f39c12; margin-top: 0;">Governance (G)</h4>
    <ul style="margin: 0; padding-left: 1.5rem;">
      <li>Board composition and independence</li>
      <li>Executive compensation alignment</li>
      <li>Business ethics and anti-corruption</li>
      <li>Shareholder rights and transparency</li>
    </ul>
  </div>
</div>

<h3 style="color: #34495e;">ESG Investment Strategies</h3>

<table style="width: 100%; border-collapse: collapse; margin: 2rem 0; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
  <thead>
    <tr style="background: #34495e; color: white;">
      <th style="padding: 1rem; text-align: left;">Strategy</th>
      <th style="padding: 1rem; text-align: left;">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 1rem;"><strong>Negative Screening</strong></td>
      <td style="padding: 1rem;">Excluding harmful sectors (tobacco, weapons, fossil fuels)</td>
    </tr>
    <tr>
      <td style="padding: 1rem;"><strong>Best-in-Class</strong></td>
      <td style="padding: 1rem;">Selecting top ESG performers within sectors</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 1rem;"><strong>ESG Integration</strong></td>
      <td style="padding: 1rem;">Incorporating ESG factors into financial analysis</td>
    </tr>
    <tr>
      <td style="padding: 1rem;"><strong>Thematic Investing</strong></td>
      <td style="padding: 1rem;">Focusing on sustainability themes (clean energy, water)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 1rem;"><strong>Impact Investing</strong></td>
      <td style="padding: 1rem;">Investments made to generate positive impact</td>
    </tr>
  </tbody>
</table>

<h2 style="color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 0.5rem;">ESG Portfolio Construction</h2>

<div style="background: #fff3cd; padding: 1.5rem; border-radius: 8px; margin: 2rem 0;">
  <h4 style="color: #856404; margin-top: 0;">Step 1: Values Assessment</h4>
  <p>Rate your ESG priorities (1-5 scale):</p>
  <ul style="margin: 1rem 0; padding-left: 1.5rem;">
    <li>Climate change mitigation</li>
    <li>Social justice and equality</li>
    <li>Corporate governance</li>
    <li>Avoiding harmful industries</li>
  </ul>
</div>

<h4 style="color: #3498db;">ESG Asset Allocation by Age</h4>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
  <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px;">
    <h5 style="margin-top: 0;">Conservative (55+)</h5>
    <ul style="margin: 1rem 0; padding-left: 1.5rem;">
      <li>40% ESG bond funds</li>
      <li>35% Large-cap ESG equity</li>
      <li>15% International ESG</li>
      <li>10% ESG REITs</li>
    </ul>
    <p style="margin: 0;"><strong>Return:</strong> 6-8% | <strong>Risk:</strong> Low-Moderate</p>
  </div>

  <div style="background: #e8f4fd; padding: 1.5rem; border-radius: 8px;">
    <h5 style="margin-top: 0;">Moderate (35-54)</h5>
    <ul style="margin: 1rem 0; padding-left: 1.5rem;">
      <li>50% Large-cap ESG equity</li>
      <li>25% ESG bonds</li>
      <li>15% International ESG</li>
      <li>10% Small/mid-cap ESG</li>
    </ul>
    <p style="margin: 0;"><strong>Return:</strong> 7-9% | <strong>Risk:</strong> Moderate</p>
  </div>

  <div style="background: #fff3e0; padding: 1.5rem; border-radius: 8px;">
    <h5 style="margin-top: 0;">Growth (20-34)</h5>
    <ul style="margin: 1rem 0; padding-left: 1.5rem;">
      <li>60% Large/small-cap ESG</li>
      <li>25% International ESG</li>
      <li>15% ESG bonds</li>
    </ul>
    <p style="margin: 0;"><strong>Return:</strong> 8-11% | <strong>Risk:</strong> Moderate-High</p>
  </div>
</div>

<h2 style="color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 0.5rem;">Top ESG Investment Options 2025</h2>

<h3 style="color: #34495e;">Best ESG ETFs</h3>

<table style="width: 100%; border-collapse: collapse; margin: 2rem 0; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
  <thead>
    <tr style="background: #28a745; color: white;">
      <th style="padding: 1rem; text-align: left;">Fund</th>
      <th style="padding: 1rem; text-align: left;">Ticker</th>
      <th style="padding: 1rem; text-align: left;">Expense</th>
      <th style="padding: 1rem; text-align: left;">Focus</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 1rem;">Vanguard ESG U.S. Stock ETF</td>
      <td style="padding: 1rem;">ESGV</td>
      <td style="padding: 1rem;">0.12%</td>
      <td style="padding: 1rem;">Broad U.S. ESG</td>
    </tr>
    <tr>
      <td style="padding: 1rem;">iShares MSCI ACWI ESG Select</td>
      <td style="padding: 1rem;">SUSA</td>
      <td style="padding: 1rem;">0.25%</td>
      <td style="padding: 1rem;">Global ESG</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 1rem;">iShares Global Clean Energy</td>
      <td style="padding: 1rem;">ICLN</td>
      <td style="padding: 1rem;">0.42%</td>
      <td style="padding: 1rem;">Clean Energy</td>
    </tr>
  </tbody>
</table>

<h3 style="color: #34495e;">Top ESG Stocks by Sector</h3>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
  <div style="background: #e8f5e8; padding: 1rem; border-radius: 8px;">
    <h5 style="color: #28a745; margin-top: 0;">Technology</h5>
    <ul style="margin: 0; padding-left: 1.5rem;">
      <li>Microsoft (MSFT)</li>
      <li>Apple (AAPL)</li>
      <li>NVIDIA (NVDA)</li>
      <li>Salesforce (CRM)</li>
    </ul>
  </div>

  <div style="background: #e8f4fd; padding: 1rem; border-radius: 8px;">
    <h5 style="color: #3498db; margin-top: 0;">Renewable Energy</h5>
    <ul style="margin: 0; padding-left: 1.5rem;">
      <li>NextEra Energy (NEE)</li>
      <li>First Solar (FSLR)</li>
      <li>Brookfield Renewable (BEP)</li>
    </ul>
  </div>

  <div style="background: #fff3e0; padding: 1rem; border-radius: 8px;">
    <h5 style="color: #f39c12; margin-top: 0;">Healthcare</h5>
    <ul style="margin: 0; padding-left: 1.5rem;">
      <li>Johnson & Johnson (JNJ)</li>
      <li>Novo Nordisk (NVO)</li>
      <li>Merck (MRK)</li>
    </ul>
  </div>

  <div style="background: #f8e8f8; padding: 1rem; border-radius: 8px;">
    <h5 style="color: #9b59b6; margin-top: 0;">Consumer Goods</h5>
    <ul style="margin: 0; padding-left: 1.5rem;">
      <li>Unilever (UL)</li>
      <li>Procter & Gamble (PG)</li>
      <li>Nike (NKE)</li>
    </ul>
  </div>
</div>

<h2 style="color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 0.5rem;">Green Bonds & Alternative ESG</h2>

<p>Green bonds fund climate and environmental projects. The market reached $500 billion in 2022 and is projected to exceed $1 trillion by 2025.</p>

<table style="width: 100%; border-collapse: collapse; margin: 2rem 0; background: white;">
  <thead>
    <tr style="background: #27ae60; color: white;">
      <th style="padding: 1rem; text-align: left;">Bond Type</th>
      <th style="padding: 1rem; text-align: left;">Issuer</th>
      <th style="padding: 1rem; text-align: left;">Yield</th>
      <th style="padding: 1rem; text-align: left;">Risk</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 1rem;">Sovereign Green Bonds</td>
      <td style="padding: 1rem;">Governments</td>
      <td style="padding: 1rem;">2-4%</td>
      <td style="padding: 1rem;">Low</td>
    </tr>
    <tr>
      <td style="padding: 1rem;">Corporate Green Bonds</td>
      <td style="padding: 1rem;">Corporations</td>
      <td style="padding: 1rem;">3-6%</td>
      <td style="padding: 1rem;">Medium</td>
    </tr>
  </tbody>
</table>

<h3 style="color: #34495e;">Top ESG REITs</h3>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin: 2rem 0;">
  <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
    <h5 style="color: #2c3e50; margin-top: 0;">Prologis (PLD)</h5>
    <p style="margin: 0.5rem 0;"><strong>Focus:</strong> Sustainable logistics</p>
    <p style="margin: 0.5rem 0;"><strong>Yield:</strong> ~2.8%</p>
  </div>
  
  <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
    <h5 style="color: #2c3e50; margin-top: 0;">Alexandria RE (ARE)</h5>
    <p style="margin: 0.5rem 0;"><strong>Focus:</strong> Life science real estate</p>
    <p style="margin: 0.5rem 0;"><strong>Yield:</strong> ~3.2%</p>
  </div>
</div>

<h2 style="color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 0.5rem;">Performance & Risk Management</h2>

<table style="width: 100%; border-collapse: collapse; margin: 2rem 0; background: white;">
  <thead>
    <tr style="background: #e74c3c; color: white;">
      <th style="padding: 1rem; text-align: left;">Period</th>
      <th style="padding: 1rem; text-align: left;">ESG Portfolios</th>
      <th style="padding: 1rem; text-align: left;">Traditional</th>
      <th style="padding: 1rem; text-align: left;">Difference</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 1rem;">2024</td>
      <td style="padding: 1rem;">+11.2%</td>
      <td style="padding: 1rem;">+10.8%</td>
      <td style="padding: 1rem;">+0.4%</td>
    </tr>
    <tr>
      <td style="padding: 1rem;">5 Years</td>
      <td style="padding: 1rem;">+9.8%</td>
      <td style="padding: 1rem;">+9.2%</td>
      <td style="padding: 1rem;">+0.6%</td>
    </tr>
  </tbody>
</table>

<div style="background: #fff3cd; padding: 1.5rem; border-radius: 8px; margin: 2rem 0;">
  <h4 style="color: #856404; margin-top: 0;">Key Performance Insights</h4>
  <ul style="margin: 1rem 0; padding-left: 2rem;">
    <li><strong>Lower Volatility:</strong> 15% lower volatility during downturns</li>
    <li><strong>Better Protection:</strong> 2-3% smaller maximum drawdowns</li>
    <li><strong>Higher Sharpe Ratio:</strong> 0.1-0.2 better risk-adjusted returns</li>
  </ul>
</div>

<h2 style="color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 0.5rem;">Implementation Strategy</h2>

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 2rem; border-radius: 10px; margin: 2rem 0;">
  <h4 style="color: white; margin-top: 0;">90-Day ESG Action Plan</h4>
  
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 1rem 0;">
    <div style="background: rgba(255,255,255,0.1); padding: 1rem; border-radius: 5px;">
      <h5 style="color: white; margin-top: 0;">Days 1-30</h5>
      <ul style="margin: 0; padding-left: 1.5rem; color: white;">
        <li>Values assessment</li>
        <li>Set ESG goals</li>
        <li>Start with core ESG ETFs</li>
      </ul>
    </div>
    
    <div style="background: rgba(255,255,255,0.1); padding: 1rem; border-radius: 5px;">
      <h5 style="color: white; margin-top: 0;">Days 31-60</h5>
      <ul style="margin: 0; padding-left: 1.5rem; color: white;">
        <li>Diversify ESG themes</li>
        <li>Add international exposure</li>
        <li>Implement green bonds</li>
      </ul>
    </div>
    
    <div style="background: rgba(255,255,255,0.1); padding: 1rem; border-radius: 5px;">
      <h5 style="color: white; margin-top: 0;">Days 61-90</h5>
      <ul style="margin: 0; padding-left: 1.5rem; color: white;">
        <li>Add individual stocks</li>
        <li>Optimize taxes</li>
        <li>Measure impact</li>
      </ul>
    </div>
  </div>
</div>

<h3 style="color: #34495e;">Tax-Efficient Account Placement</h3>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin: 2rem 0;">
  <div style="background: #f0f8ff; padding: 1rem; border-radius: 8px;">
    <h5 style="color: #2c5aa0; margin-top: 0;">Taxable Accounts</h5>
    <ul style="margin: 0; padding-left: 1.5rem;">
      <li>Low-turnover ESG ETFs</li>
      <li>Municipal green bonds</li>
      <li>Individual ESG stocks</li>
    </ul>
  </div>
  
  <div style="background: #e8f5e8; padding: 1rem; border-radius: 8px;">
    <h5 style="color: #155724; margin-top: 0;">Tax-Free (Roth)</h5>
    <ul style="margin: 0; padding-left: 1.5rem;">
      <li>High-growth ESG funds</li>
      <li>Small-cap ESG</li>
      <li>Emerging market ESG</li>
    </ul>
  </div>
</div>

<h2 style="color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 0.5rem;">Conclusion</h2>

<div style="background: linear-gradient(135deg, #28a745 0%, #20c997 100%); color: white; padding: 2rem; border-radius: 10px; margin: 2rem 0; text-align: center;">
  <h3 style="color: white; margin-bottom: 1rem;">Start Your ESG Journey Today</h3>
  
  <p style="font-size: 1.1rem; margin: 1rem 0;">ESG investing combines competitive returns with positive impact. With $50+ trillion expected in global ESG assets by 2025, you're joining a movement reshaping finance.</p>
  
  <div style="background: rgba(255,255,255,0.1); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
    <h4 style="color: white; margin-top: 0;">Your ESG Success Framework</h4>
    <div style="text-align: left; margin: 1rem 0;">
      <div style="margin: 0.5rem 0;">✓ Values-based investment strategy</div>
      <div style="margin: 0.5rem 0;">✓ ESG screening and analysis</div>
      <div style="margin: 0.5rem 0;">✓ Portfolio construction principles</div>
      <div style="margin: 0.5rem 0;">✓ Top ESG investments identified</div>
      <div style="margin: 0.5rem 0;">✓ 90-day action plan ready</div>
    </div>
  </div>
  
  <p style="margin: 1rem 0;">Start small, think long-term, and let your investments be a force for positive change while building wealth.</p>
</div>

</div>`;

  try {
    const result = await prisma.post.update({
      where: { id: 'cmkh4d4ye000g41shttzac4n5' },
      data: {
        content: content,
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