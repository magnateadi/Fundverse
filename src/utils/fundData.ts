
export interface Fund {
  id: string;
  name: string;
  category: string;
  riskLevel: string;
  expenseRatio: number;
  minInvestment: number;
  oneYearReturn: number;
  threeYearReturn: number;
  fiveYearReturn: number;
  description: string;
  suitableFor: string[];
}

export const funds: Fund[] = [
  // Conservative Funds
  {
    id: "cf1",
    name: "BlueSky Liquid Fund",
    category: "Liquid",
    riskLevel: "Conservative",
    expenseRatio: 0.18,
    minInvestment: 500,
    oneYearReturn: 4.2,
    threeYearReturn: 4.5,
    fiveYearReturn: 5.1,
    description: "A low-risk fund investing in very short-term money market instruments, ideal for parking funds temporarily with high liquidity.",
    suitableFor: ["Short-term investors", "Emergency funds", "Risk-averse investors"]
  },
  {
    id: "cf2",
    name: "Horizon Ultra Short Duration Fund",
    category: "Ultra Short Duration",
    riskLevel: "Conservative",
    expenseRatio: 0.25,
    minInvestment: 1000,
    oneYearReturn: 5.1,
    threeYearReturn: 5.4,
    fiveYearReturn: 5.9,
    description: "Focuses on short-term debt instruments with maturity below 1 year, offering slightly better returns than liquid funds with minimal volatility.",
    suitableFor: ["Conservative investors", "Short-term goals", "Beginners"]
  },
  {
    id: "cf3",
    name: "EverGreen Banking & PSU Debt Fund",
    category: "Banking & PSU Debt",
    riskLevel: "Conservative",
    expenseRatio: 0.32,
    minInvestment: 1000,
    oneYearReturn: 5.8,
    threeYearReturn: 6.1,
    fiveYearReturn: 6.7,
    description: "Invests in high-quality debt securities issued by banks and public sector undertakings, offering stability and reasonable returns.",
    suitableFor: ["Conservative investors", "Medium-term goals", "Safety-oriented investors"]
  },
  
  // Moderate Funds
  {
    id: "mf1",
    name: "Pioneer Corporate Bond Fund",
    category: "Corporate Bond",
    riskLevel: "Moderate",
    expenseRatio: 0.42,
    minInvestment: 5000,
    oneYearReturn: 7.3,
    threeYearReturn: 7.8,
    fiveYearReturn: 8.2,
    description: "Invests primarily in high-quality corporate bonds, balancing reasonable yields with controlled credit risk.",
    suitableFor: ["Moderate risk takers", "Income seekers", "3-5 year horizon investors"]
  },
  {
    id: "mf2",
    name: "Ascent Balanced Advantage Fund",
    category: "Balanced Advantage",
    riskLevel: "Moderate",
    expenseRatio: 0.78,
    minInvestment: 5000,
    oneYearReturn: 9.1,
    threeYearReturn: 10.5,
    fiveYearReturn: 11.2,
    description: "Dynamically manages allocation between equity and debt based on market valuations, offering a balanced approach to growth and stability.",
    suitableFor: ["Balanced investors", "First-time equity investors", "Long-term savers"]
  },
  {
    id: "mf3",
    name: "Equinox Equity Savings Fund",
    category: "Equity Savings",
    riskLevel: "Moderate",
    expenseRatio: 0.85,
    minInvestment: 5000,
    oneYearReturn: 8.7,
    threeYearReturn: 9.8,
    fiveYearReturn: 10.5,
    description: "Invests in a mix of equity, arbitrage opportunities and debt securities, aiming for moderate returns with lower volatility than pure equity funds.",
    suitableFor: ["Conservative equity entrants", "Tax-efficiency seekers", "Medium-term investors"]
  },
  
  // Growth Funds
  {
    id: "gf1",
    name: "Meridian Large Cap Fund",
    category: "Large Cap Equity",
    riskLevel: "Growth",
    expenseRatio: 1.02,
    minInvestment: 5000,
    oneYearReturn: 12.5,
    threeYearReturn: 14.2,
    fiveYearReturn: 15.1,
    description: "Invests in established, blue-chip companies with large market capitalization, offering relatively stable growth with moderate risk.",
    suitableFor: ["Growth-oriented investors", "First-time equity investors", "Long-term wealth creators"]
  },
  {
    id: "gf2",
    name: "Zenith Multi Cap Fund",
    category: "Multi Cap Equity",
    riskLevel: "Growth",
    expenseRatio: 1.12,
    minInvestment: 5000,
    oneYearReturn: 14.3,
    threeYearReturn: 15.8,
    fiveYearReturn: 16.4,
    description: "Invests across large, mid, and small-cap stocks, providing diversified exposure to the entire market cap spectrum for balanced growth.",
    suitableFor: ["Diversification seekers", "Growth investors", "Long-term horizon investors"]
  },
  {
    id: "gf3",
    name: "Quantum Index Fund",
    category: "Index Fund",
    riskLevel: "Growth",
    expenseRatio: 0.25,
    minInvestment: 1000,
    oneYearReturn: 11.8,
    threeYearReturn: 13.5,
    fiveYearReturn: 14.2,
    description: "Passively tracks a major market index, offering market returns at very low expense ratios without active management bias.",
    suitableFor: ["Cost-conscious investors", "Passive investment believers", "First-time equity entrants"]
  },
  
  // Aggressive Funds
  {
    id: "af1",
    name: "Pinnacle Mid Cap Fund",
    category: "Mid Cap Equity",
    riskLevel: "Aggressive",
    expenseRatio: 1.25,
    minInvestment: 5000,
    oneYearReturn: 17.2,
    threeYearReturn: 18.5,
    fiveYearReturn: 19.3,
    description: "Focuses on medium-sized companies with high growth potential, offering higher returns with increased volatility compared to large caps.",
    suitableFor: ["Growth seekers", "Risk-tolerant investors", "Long-term investors"]
  },
  {
    id: "af2",
    name: "Velocity Small Cap Fund",
    category: "Small Cap Equity",
    riskLevel: "Aggressive",
    expenseRatio: 1.35,
    minInvestment: 5000,
    oneYearReturn: 19.5,
    threeYearReturn: 21.2,
    fiveYearReturn: 22.8,
    description: "Invests in small, emerging companies with significant growth potential, offering high return possibilities with corresponding higher risk.",
    suitableFor: ["Aggressive investors", "High growth seekers", "Very long-term investors"]
  },
  {
    id: "af3",
    name: "Global Frontier Technology Fund",
    category: "Sectoral - Technology",
    riskLevel: "Aggressive",
    expenseRatio: 1.45,
    minInvestment: 5000,
    oneYearReturn: 22.3,
    threeYearReturn: 24.1,
    fiveYearReturn: 25.5,
    description: "Concentrates investments in technology sector companies, offering focused exposure to this high-growth area with significant volatility.",
    suitableFor: ["Tech-focused investors", "Sector enthusiasts", "High-risk tolerance investors"]
  }
];

export const getFundsByRiskProfile = (riskProfile: string): Fund[] => {
  return funds.filter(fund => fund.riskLevel === riskProfile);
};
