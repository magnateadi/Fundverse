
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Question } from "@/utils/questionData";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface QuestionCardProps {
  question: Question;
  onNext: (selectedOptionId: string, riskScore: number) => void;
  onPrevious: () => void;
  showPrevious: boolean;
  isLast: boolean;
}

const QuestionCard = ({
  question,
  onNext,
  onPrevious,
  showPrevious,
  isLast
}: QuestionCardProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Animation effect when the component mounts
  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);
    return () => clearTimeout(timer);
  }, [question.id]);
  
  const handleNext = () => {
    if (selectedOption) {
      const option = question.options.find(opt => opt.id === selectedOption);
      if (option) {
        onNext(selectedOption, option.riskScore);
      }
    }
  };
  
  return (
    <Card 
      className={`border-0 shadow-card overflow-hidden transition-all duration-500 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <CardContent className="p-8">
        <h2 className="text-2xl font-semibold mb-6">{question.text}</h2>
        
        <RadioGroup 
          value={selectedOption || ""} 
          onValueChange={setSelectedOption}
          className="space-y-4"
        >
          {question.options.map((option) => (
            <div 
              key={option.id}
              className="flex items-center space-x-3 p-4 rounded-lg border border-gray-100 transition-all hover:border-primary/30 hover:bg-primary/5"
            >
              <RadioGroupItem 
                value={option.id} 
                id={option.id} 
                className="text-primary"
              />
              <Label 
                htmlFor={option.id} 
                className="flex-1 cursor-pointer font-medium"
              >
                {option.text}
              </Label>
            </div>
          ))}
        </RadioGroup>
        
        <div className="flex justify-between mt-8">
          {showPrevious ? (
            <Button
              variant="outline"
              onClick={onPrevious}
              className="flex items-center gap-1 rounded-full px-5"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
          ) : (
            <div></div>
          )}
          
          <Button
            onClick={handleNext}
            disabled={!selectedOption}
            className="flex items-center gap-1 rounded-full px-5 button-hover"
          >
            {isLast ? "See Results" : "Next"}
            {!isLast && <ChevronRight className="h-4 w-4" />}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
