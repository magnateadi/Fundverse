
import { useState, useEffect } from "react";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  animated?: boolean;
}

const ProgressBar = ({
  currentStep,
  totalSteps,
  animated = true
}: ProgressBarProps) => {
  const [width, setWidth] = useState(0);
  const progress = (currentStep / totalSteps) * 100;
  
  useEffect(() => {
    if (animated) {
      // Start with current width and animate to new width
      const timer = setTimeout(() => {
        setWidth(progress);
      }, 10);
      return () => clearTimeout(timer);
    } else {
      setWidth(progress);
    }
  }, [progress, animated]);

  return (
    <div className="w-full">
      <div className="flex justify-between mb-1 text-xs text-gray-500">
        <span>Question {currentStep} of {totalSteps}</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
