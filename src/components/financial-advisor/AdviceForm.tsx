
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { DollarSign, Send } from "lucide-react";

interface AdviceFormProps {
  prompt: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  advice: string;
  isLoading: boolean;
  apiKey: string;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
}

const AdviceForm: React.FC<AdviceFormProps> = ({
  prompt,
  setPrompt,
  advice,
  isLoading,
  apiKey,
  handleSubmit,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-6 w-6 text-primary" />
            Ask a Financial Question
          </CardTitle>
          <CardDescription>
            Type your financial question and get instant advice
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Textarea
              placeholder="E.g., How should I prioritize my savings goals?"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="min-h-[120px] resize-none"
            />
            <Button 
              type="submit" 
              className="w-full rounded-full button-hover"
              disabled={isLoading || !prompt.trim() || !apiKey}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                  Thinking...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  Get Advice
                </span>
              )}
            </Button>
            {!apiKey && (
              <p className="text-amber-600 text-sm">
                Please enter your DeepSeek API key above to get personalized advice
              </p>
            )}
          </form>
        </CardContent>
        {advice && (
          <CardFooter className="flex flex-col items-start">
            <div className="bg-primary/5 p-4 rounded-lg w-full">
              <h3 className="font-semibold text-primary mb-2">Financial Advice</h3>
              <p className="text-gray-700">{advice}</p>
              <div className="mt-3 text-xs text-gray-500">
                Disclaimer: This is general advice. Consider consulting a professional financial advisor for personalized guidance.
              </div>
            </div>
          </CardFooter>
        )}
      </Card>
    </motion.div>
  );
};

export default AdviceForm;
