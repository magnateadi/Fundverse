
export const callDeepSeekAPI = async (userPrompt: string, apiKey: string) => {
  if (!apiKey) {
    throw new Error("API key not provided");
  }

  try {
    const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          {
            role: "system",
            content: "You are a professional financial advisor. Provide clear, concise, and practical financial advice that is appropriate for general audiences. Focus on personal finance topics like saving, investing, debt management, retirement planning, and budgeting. Your advice should be balanced and educational, avoiding extreme positions."
          },
          {
            role: "user",
            content: userPrompt
          }
        ],
        temperature: 0.7,
        max_tokens: 500
      }),
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Error calling DeepSeek API:", error);
    throw error;
  }
};

export const getFallbackResponse = (prompt: string): string => {
  const promptLower = prompt.toLowerCase();
  
  if (promptLower.includes("save") || promptLower.includes("saving")) {
    return "As a general rule, aim to save at least 20% of your income. Start with building an emergency fund that covers 3-6 months of expenses, then focus on retirement and other financial goals.";
  } else if (promptLower.includes("invest") || promptLower.includes("investment")) {
    return "The best time to invest is when you're financially ready, regardless of market conditions. Focus on your risk tolerance, investment horizon, and diversification. For beginners, consider starting with index funds and gradually building your portfolio.";
  } else if (promptLower.includes("debt") || promptLower.includes("loan")) {
    return "Focus on high-interest debt first. Consider the debt avalanche method (highest interest first) or debt snowball method (smallest balance first). Ensure you're making minimum payments on all debts while focusing extra payments on priority debt.";
  } else if (promptLower.includes("retire") || promptLower.includes("retirement")) {
    return "Start saving for retirement as early as possible. A good guideline is to save 15% of your income for retirement. Consider tax-advantaged retirement accounts and diversify your investments based on your age and risk tolerance.";
  } else if (promptLower.includes("emergency fund") || promptLower.includes("emergency savings")) {
    return "An emergency fund should cover 3-6 months of essential expenses. Keep it in a high-yield savings account for easy access. Start with a small goal of ₹10,000, then gradually build it up over time.";
  } else {
    return "Financial planning is highly personal. Consider your income, expenses, financial goals, and risk tolerance when making financial decisions. It's often beneficial to focus on building an emergency fund, paying off high-interest debt, and investing for long-term goals like retirement.";
  }
};

export const getSpecificFallbackResponse = (question: string): string => {
  if (question === "How much should I save monthly?") {
    return "A good rule of thumb is to follow the 50/30/20 rule: 50% for needs, 30% for wants, and 20% for savings and debt repayment. Adjust these percentages based on your personal situation and financial goals.";
  } else if (question === "Is it good time to invest in equity?") {
    return "Timing the market is difficult even for professionals. Instead, consider dollar-cost averaging by investing fixed amounts regularly regardless of market conditions. This approach reduces the impact of market volatility on your overall investment.";
  } else if (question === "How to start an emergency fund?") {
    return "Start small with a goal of ₹10,000. Set up automatic transfers to a high-yield savings account. Aim to eventually build it to cover 3-6 months of essential expenses. Keep this money easily accessible but separate from your regular checking account.";
  }
  return "";
};
