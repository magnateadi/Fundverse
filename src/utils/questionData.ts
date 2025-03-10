
export interface Question {
  id: number;
  text: string;
  options: {
    id: string;
    text: string;
    riskScore: number;
  }[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "How would you react if your investments dropped by 10% in value?",
    options: [
      { id: "1a", text: "Sell immediately to prevent further losses", riskScore: 1 },
      { id: "1b", text: "Sell a portion and keep the rest invested", riskScore: 2 },
      { id: "1c", text: "Do nothing and wait for recovery", riskScore: 3 },
      { id: "1d", text: "Buy more at the lower price", riskScore: 4 }
    ]
  },
  {
    id: 2,
    text: "How long do you plan to keep your money invested?",
    options: [
      { id: "2a", text: "Less than 1 year", riskScore: 1 },
      { id: "2b", text: "1-3 years", riskScore: 2 },
      { id: "2c", text: "3-7 years", riskScore: 3 },
      { id: "2d", text: "More than 7 years", riskScore: 4 }
    ]
  },
  {
    id: 3,
    text: "What is your primary investment goal?",
    options: [
      { id: "3a", text: "Preserving capital with minimal risk", riskScore: 1 },
      { id: "3b", text: "Generating steady income", riskScore: 2 },
      { id: "3c", text: "Achieving balanced growth", riskScore: 3 },
      { id: "3d", text: "Maximizing long-term growth potential", riskScore: 4 }
    ]
  },
  {
    id: 4,
    text: "How much financial knowledge and experience do you have?",
    options: [
      { id: "4a", text: "Very limited - I'm new to investing", riskScore: 1 },
      { id: "4b", text: "Basic - I understand fundamental concepts", riskScore: 2 },
      { id: "4c", text: "Moderate - I've invested before", riskScore: 3 },
      { id: "4d", text: "Advanced - I'm very experienced", riskScore: 4 }
    ]
  },
  {
    id: 5,
    text: "Which statement best describes your attitude towards investment risk?",
    options: [
      { id: "5a", text: "I'm very cautious and avoid risk", riskScore: 1 },
      { id: "5b", text: "I prefer security but can accept small fluctuations", riskScore: 2 },
      { id: "5c", text: "I can tolerate moderate ups and downs for better returns", riskScore: 3 },
      { id: "5d", text: "I accept substantial volatility for high growth potential", riskScore: 4 }
    ]
  },
  {
    id: 6,
    text: "How much of your total savings are you planning to invest?",
    options: [
      { id: "6a", text: "Less than 25%", riskScore: 4 },
      { id: "6b", text: "25-50%", riskScore: 3 },
      { id: "6c", text: "50-75%", riskScore: 2 },
      { id: "6d", text: "More than 75%", riskScore: 1 }
    ]
  },
  {
    id: 7,
    text: "Which scenario would you prefer for your investment returns over 5 years?",
    options: [
      { id: "7a", text: "Guaranteed 6% annual return", riskScore: 1 },
      { id: "7b", text: "Likely 8% return, but could be between 4-12%", riskScore: 2 },
      { id: "7c", text: "Likely 10% return, but could be between 0-20%", riskScore: 3 },
      { id: "7d", text: "Likely 12% return, but could be between -5% to 30%", riskScore: 4 }
    ]
  },
  {
    id: 8,
    text: "How would you react to unexpected expenses that require using some of your investments?",
    options: [
      { id: "8a", text: "I'd be very concerned as I need easy access to my money", riskScore: 1 },
      { id: "8b", text: "I'd be somewhat concerned but could manage", riskScore: 2 },
      { id: "8c", text: "I have other funds for emergencies", riskScore: 3 },
      { id: "8d", text: "No concern - my investments are separate from emergency funds", riskScore: 4 }
    ]
  },
  {
    id: 9,
    text: "Which of these investment approaches appeals to you most?",
    options: [
      { id: "9a", text: "Conservative: Focus on stability and income", riskScore: 1 },
      { id: "9b", text: "Moderate: Balance between stability and growth", riskScore: 2 },
      { id: "9c", text: "Growth: Focus on long-term capital appreciation", riskScore: 3 },
      { id: "9d", text: "Aggressive: Maximize growth potential with higher volatility", riskScore: 4 }
    ]
  },
  {
    id: 10,
    text: "What is your current financial situation?",
    options: [
      { id: "10a", text: "I have significant debt and limited savings", riskScore: 1 },
      { id: "10b", text: "I have some debt but am actively saving", riskScore: 2 },
      { id: "10c", text: "I have minimal debt and steady income", riskScore: 3 },
      { id: "10d", text: "I'm financially secure with substantial savings", riskScore: 4 }
    ]
  }
];

export const getRiskProfile = (totalScore: number): string => {
  const maxScore = 40; // 10 questions with max score of 4 each
  const percentage = (totalScore / maxScore) * 100;
  
  if (percentage < 25) return "Conservative";
  if (percentage < 50) return "Moderate";
  if (percentage < 75) return "Growth";
  return "Aggressive";
};
