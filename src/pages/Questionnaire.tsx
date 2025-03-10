
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { questions, getRiskProfile } from "@/utils/questionData";
import QuestionCard from "@/components/QuestionCard";
import ProgressBar from "@/components/ProgressBar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Answer {
  questionId: number;
  optionId: string;
  riskScore: number;
}

const Questionnaire = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [hasStarted, setHasStarted] = useState(false);
  
  const handleNext = (selectedOptionId: string, riskScore: number) => {
    const newAnswers = [...answers];
    const existingAnswerIndex = newAnswers.findIndex(
      (a) => a.questionId === questions[currentQuestionIndex].id
    );
    
    const answer: Answer = {
      questionId: questions[currentQuestionIndex].id,
      optionId: selectedOptionId,
      riskScore,
    };
    
    if (existingAnswerIndex >= 0) {
      newAnswers[existingAnswerIndex] = answer;
    } else {
      newAnswers.push(answer);
    }
    
    setAnswers(newAnswers);
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate risk profile
      const totalScore = newAnswers.reduce((sum, answer) => sum + answer.riskScore, 0);
      const riskProfile = getRiskProfile(totalScore);
      
      // Navigate to recommendations page with risk profile
      navigate("/recommendations", { 
        state: { 
          riskProfile,
          totalScore,
          maxScore: questions.length * 4
        } 
      });
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const handleStart = () => {
    setHasStarted(true);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-full h-[50%] bg-gradient-to-b from-blue-50/80 to-transparent -z-10" />
        <div className="absolute top-1/3 left-10 w-64 h-64 rounded-full bg-blue-100/50 blur-3xl -z-10" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-blue-50/50 blur-3xl -z-10" />
        
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          {!hasStarted ? (
            <div className="text-center animate-fade-in">
              <h1 className="h2 mb-6">Find Your Perfect Investment Match</h1>
              <p className="text-muted-foreground text-lg mb-8">
                Answer our quick questionnaire to receive personalized mutual fund recommendations 
                tailored to your financial goals and risk tolerance.
              </p>
              
              <div className="bg-white/80 backdrop-blur-md rounded-xl p-8 border border-gray-100 shadow-card mb-8">
                <h2 className="text-xl font-semibold mb-4">What to expect:</h2>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-blue-100 p-1 mt-0.5">
                      <div className="rounded-full w-4 h-4 bg-primary text-white flex items-center justify-center text-xs font-bold">1</div>
                    </div>
                    <span><span className="font-medium">10 simple questions</span> about your investment goals and risk tolerance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-blue-100 p-1 mt-0.5">
                      <div className="rounded-full w-4 h-4 bg-primary text-white flex items-center justify-center text-xs font-bold">2</div>
                    </div>
                    <span>Takes approximately <span className="font-medium">5 minutes</span> to complete</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-blue-100 p-1 mt-0.5">
                      <div className="rounded-full w-4 h-4 bg-primary text-white flex items-center justify-center text-xs font-bold">3</div>
                    </div>
                    <span>Receive <span className="font-medium">personalized fund recommendations</span> based on your profile</span>
                  </li>
                </ul>
              </div>
              
              <Button 
                size="lg" 
                className="rounded-full px-8 shadow-subtle button-hover"
                onClick={handleStart}
              >
                Start Questionnaire
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              <ProgressBar 
                currentStep={currentQuestionIndex + 1} 
                totalSteps={questions.length} 
              />
              
              <QuestionCard
                question={questions[currentQuestionIndex]}
                onNext={handleNext}
                onPrevious={handlePrevious}
                showPrevious={currentQuestionIndex > 0}
                isLast={currentQuestionIndex === questions.length - 1}
              />
            </div>
          )}
        </div>
      </main>
      
      <footer className="bg-white border-t border-gray-100 py-6">
        <div className="container px-4 md:px-6 text-center text-sm text-muted-foreground">
          <p>Your responses are confidential and will only be used to provide recommendations.</p>
        </div>
      </footer>
    </div>
  );
};

export default Questionnaire;
