
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

import ApiKeyInput from "@/components/financial-advisor/ApiKeyInput";
import AdviceForm from "@/components/financial-advisor/AdviceForm";
import PopularQuestions from "@/components/financial-advisor/PopularQuestions";
import { callDeepSeekAPI, getFallbackResponse, getSpecificFallbackResponse } from "@/utils/deepseekApi";

const FinancialAdvisor = () => {
  const [prompt, setPrompt] = useState("");
  const [advice, setAdvice] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [recentQuestions, setRecentQuestions] = useState<string[]>([
    "How much should I save monthly?",
    "Is it good time to invest in equity?",
    "How to start an emergency fund?",
  ]);

  // Load API key from localStorage on component mount
  useEffect(() => {
    const savedApiKey = localStorage.getItem("deepseek_api_key");
    if (savedApiKey) {
      setApiKey(savedApiKey);
    }
  }, []);

  // Save API key to localStorage when it changes
  useEffect(() => {
    if (apiKey) {
      localStorage.setItem("sk-e1d31f1786064c82b4c7faaf1a3e775d", apiKey);
    }
  }, [apiKey]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!prompt.trim()) return;
    
    setIsLoading(true);
    
    try {
      // First try to get a response from the DeepSeek API
      const apiResponse = await callDeepSeekAPI(prompt, apiKey);
      setAdvice(apiResponse);

      // Add to recent questions if not already there
      if (!recentQuestions.includes(prompt)) {
        setRecentQuestions(prev => [prompt, ...prev.slice(0, 2)]);
      }
    } catch (error) {
      // Fallback to rule-based responses if API fails
      toast.error("Unable to connect to advisor service. Using fallback responses.");
      
      // Use fallback response utility
      const response = getFallbackResponse(prompt);
      setAdvice(response);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    setPrompt(question);
    // Auto-submit the suggested question
    setIsLoading(true);
    
    callDeepSeekAPI(question, apiKey)
      .then(response => {
        setAdvice(response);
        setIsLoading(false);
      })
      .catch(error => {
        // Fallback to predefined responses
        const response = getSpecificFallbackResponse(question);
        setAdvice(response);
        setIsLoading(false);
        toast.error("Unable to connect to advisor service. Using fallback responses.");
      });
  };

  return (
    <div className="container mx-auto py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h1 className="text-4xl font-bold text-primary mb-4">Financial Advisor</h1>
          <p className="text-xl text-gray-600">
            Get personalized financial advice based on your questions
          </p>
        </motion.div>

        <ApiKeyInput apiKey={apiKey} setApiKey={setApiKey} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <AdviceForm
              prompt={prompt}
              setPrompt={setPrompt}
              advice={advice}
              isLoading={isLoading}
              apiKey={apiKey}
              handleSubmit={handleSubmit}
            />
          </div>
          
          <div className="md:col-span-1">
            <PopularQuestions
              recentQuestions={recentQuestions}
              handleSuggestedQuestion={handleSuggestedQuestion}
              apiKey={apiKey}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialAdvisor;
