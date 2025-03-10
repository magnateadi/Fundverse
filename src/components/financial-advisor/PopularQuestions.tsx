
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PiggyBank } from "lucide-react";

interface PopularQuestionsProps {
  recentQuestions: string[];
  handleSuggestedQuestion: (question: string) => void;
  apiKey: string;
}

const PopularQuestions: React.FC<PopularQuestionsProps> = ({
  recentQuestions,
  handleSuggestedQuestion,
  apiKey,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PiggyBank className="h-5 w-5 text-primary" />
            Popular Questions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {recentQuestions.map((question, index) => (
            <Button
              key={index}
              variant="outline"
              className="w-full justify-start text-left h-auto py-3 border-gray-200"
              onClick={() => handleSuggestedQuestion(question)}
              disabled={!apiKey}
            >
              {question}
            </Button>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PopularQuestions;
