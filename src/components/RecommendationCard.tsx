
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart2, TrendingUp, Shield, Info, ExternalLink } from "lucide-react";
import { Fund } from "@/utils/fundData";
import { useState } from "react";

interface RecommendationCardProps {
  fund: Fund;
}

const RecommendationCard = ({ fund }: RecommendationCardProps) => {
  const [showDetails, setShowDetails] = useState(false);
  
  const getReturnColorClass = (returnValue: number) => {
    if (returnValue >= 15) return "text-green-600";
    if (returnValue >= 10) return "text-green-500";
    if (returnValue >= 5) return "text-blue-500";
    return "text-blue-400";
  };
  
  return (
    <Card className="border border-gray-100 overflow-hidden shadow-subtle hover:shadow-card transition-all duration-300 h-full flex flex-col">
      <CardHeader className="p-6 pb-0 flex flex-row justify-between items-start">
        <div>
          <div className="inline-flex px-2 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600 mb-2">
            {fund.category}
          </div>
          <h3 className="text-xl font-semibold">{fund.name}</h3>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${
          fund.riskLevel === "Conservative" ? "bg-blue-50 text-blue-600" :
          fund.riskLevel === "Moderate" ? "bg-green-50 text-green-600" :
          fund.riskLevel === "Growth" ? "bg-amber-50 text-amber-600" :
          "bg-orange-50 text-orange-600"
        }`}>
          {fund.riskLevel}
        </div>
      </CardHeader>
      
      <CardContent className="p-6 flex-grow">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-1">1Y Return</p>
            <p className={`font-semibold ${getReturnColorClass(fund.oneYearReturn)}`}>
              {fund.oneYearReturn.toFixed(1)}%
            </p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-1">3Y Return</p>
            <p className={`font-semibold ${getReturnColorClass(fund.threeYearReturn)}`}>
              {fund.threeYearReturn.toFixed(1)}%
            </p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-1">5Y Return</p>
            <p className={`font-semibold ${getReturnColorClass(fund.fiveYearReturn)}`}>
              {fund.fiveYearReturn.toFixed(1)}%
            </p>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">Min Investment</span>
            <span className="text-sm font-medium">₹{fund.minInvestment.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">Expense Ratio</span>
            <span className="text-sm font-medium">{fund.expenseRatio.toFixed(2)}%</span>
          </div>
        </div>
        
        {showDetails && (
          <div className="mt-4 pt-4 border-t border-gray-100 animate-fade-in">
            <p className="text-sm text-gray-600 mb-3">{fund.description}</p>
            
            <div className="mt-3">
              <p className="text-xs font-medium text-gray-500 mb-2">Suitable for:</p>
              <div className="flex flex-wrap gap-2">
                {fund.suitableFor.map((item, index) => (
                  <span 
                    key={index} 
                    className="text-xs px-2 py-1 bg-gray-100 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="p-6 pt-0 flex flex-col gap-3">
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full justify-center text-primary border-primary/30 hover:bg-primary/5"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Hide Details" : "View Details"}
          <Info className="ml-1 h-4 w-4" />
        </Button>
        
        <Button 
          className="w-full justify-center rounded-full button-hover"
          onClick={() => {
            window.open("https://forms.google.com/mutual-fund-investment", "_blank");
          }}
        >
          Invest Now
          <ExternalLink className="ml-1 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RecommendationCard;
