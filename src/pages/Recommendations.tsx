
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import RecommendationCard from "@/components/RecommendationCard";
import { getFundsByRiskProfile, Fund } from "@/utils/fundData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Share2, Download, BarChart2, AlertCircle } from "lucide-react";

const Recommendations = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [recommendedFunds, setRecommendedFunds] = useState<Fund[]>([]);
  const [loading, setLoading] = useState(true);
  
  const { riskProfile, totalScore, maxScore } = location.state || {
    riskProfile: "Moderate",
    totalScore: 20,
    maxScore: 40
  };
  
  const scorePercentage = Math.round((totalScore / maxScore) * 100);
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setRecommendedFunds(getFundsByRiskProfile(riskProfile));
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [riskProfile]);
  
  if (!location.state) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-32 pb-20">
          <div className="container px-4 md:px-6 max-w-3xl mx-auto text-center">
            <AlertCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h1 className="h2 mb-4">No Assessment Found</h1>
            <p className="text-muted-foreground text-lg mb-8">
              Please complete the questionnaire to receive personalized recommendations.
            </p>
            <Button
              size="lg"
              className="rounded-full px-8 shadow-subtle button-hover"
              onClick={() => navigate('/questionnaire')}
            >
              Take Assessment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </main>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-full h-[30%] bg-gradient-to-b from-blue-50/80 to-transparent -z-10" />
        
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
            <h1 className="h2 mb-4">Your Investment Recommendations</h1>
            <p className="text-muted-foreground text-lg mb-8">
              Based on your responses, we've identified the most suitable mutual funds for your 
              <span className="font-medium text-primary"> {riskProfile} </span>
              risk profile.
            </p>
          </div>
          
          <Card className="mb-10 overflow-hidden border-0 shadow-card animate-scale-in max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4 text-white">
              <h2 className="text-xl font-semibold">Your Investment Profile Summary</h2>
            </div>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Risk Profile</h3>
                  <p className="text-xl font-semibold">{riskProfile}</p>
                </div>
                <div className="text-center">
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Risk Score</h3>
                  <p className="text-xl font-semibold">{scorePercentage}%</p>
                </div>
                <div className="text-center">
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Recommended Strategy</h3>
                  <p className="text-xl font-semibold">
                    {riskProfile === "Conservative" && "Capital Preservation"}
                    {riskProfile === "Moderate" && "Balanced Growth"}
                    {riskProfile === "Growth" && "Long-term Growth"}
                    {riskProfile === "Aggressive" && "Maximum Growth"}
                  </p>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <h3 className="font-medium mb-2">Suggested Asset Allocation:</h3>
                
                <div className="bg-gray-100 rounded-lg p-4 flex items-center">
                  {riskProfile === "Conservative" && (
                    <div className="flex w-full h-6 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-full" style={{ width: "25%" }}></div>
                      <div className="bg-blue-300 h-full" style={{ width: "45%" }}></div>
                      <div className="bg-blue-200 h-full" style={{ width: "30%" }}></div>
                    </div>
                  )}
                  {riskProfile === "Moderate" && (
                    <div className="flex w-full h-6 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-full" style={{ width: "45%" }}></div>
                      <div className="bg-blue-300 h-full" style={{ width: "35%" }}></div>
                      <div className="bg-blue-200 h-full" style={{ width: "20%" }}></div>
                    </div>
                  )}
                  {riskProfile === "Growth" && (
                    <div className="flex w-full h-6 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-full" style={{ width: "65%" }}></div>
                      <div className="bg-blue-300 h-full" style={{ width: "25%" }}></div>
                      <div className="bg-blue-200 h-full" style={{ width: "10%" }}></div>
                    </div>
                  )}
                  {riskProfile === "Aggressive" && (
                    <div className="flex w-full h-6 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-full" style={{ width: "85%" }}></div>
                      <div className="bg-blue-300 h-full" style={{ width: "10%" }}></div>
                      <div className="bg-blue-200 h-full" style={{ width: "5%" }}></div>
                    </div>
                  )}
                </div>
                
                <div className="flex justify-between mt-2 text-sm">
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-1"></span>
                    <span>Equity</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-blue-300 rounded-full mr-1"></span>
                    <span>Debt</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-blue-200 rounded-full mr-1"></span>
                    <span>Cash/Liquid</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 mt-6 pt-4 border-t border-gray-100">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-1"
                >
                  <Download className="h-4 w-4" />
                  Download Report
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-1"
                >
                  <Share2 className="h-4 w-4" />
                  Share Results
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-1"
                  onClick={() => navigate('/questionnaire')}
                >
                  <BarChart2 className="h-4 w-4" />
                  Retake Assessment
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Recommended Funds for You</h2>
            <p className="text-muted-foreground mb-8">
              These funds are selected to match your {riskProfile.toLowerCase()} risk profile and financial goals.
            </p>
            
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((_, i) => (
                  <Card key={i} className="h-[400px] animate-pulse bg-gray-100 border-0"></Card>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {recommendedFunds.map((fund) => (
                  <div 
                    key={fund.id} 
                    className="animate-scale-in opacity-0" 
                    style={{ animationDelay: `${0.1 * (Number(fund.id.slice(-1)))}s`, animationFillMode: "forwards" }}
                  >
                    <RecommendationCard fund={fund} />
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="mt-12 bg-gray-50 p-6 rounded-lg border border-gray-100 max-w-3xl mx-auto">
            <h3 className="font-semibold mb-2">Important Disclaimer:</h3>
            <p className="text-sm text-muted-foreground">
              Mutual Fund investments are subject to market risks. Please read all scheme related documents carefully before investing. Past performance is not indicative of future returns. The recommendations provided are based on your risk profile assessment and should not be considered as financial advice.
            </p>
          </div>
        </div>
      </main>
      
      <footer className="bg-white border-t border-gray-100 py-6">
        <div className="container px-4 md:px-6 text-center text-sm text-muted-foreground">
          <p>© 2023 WealthGuide. SEBI Registration No: INZ000123456</p>
        </div>
      </footer>
    </div>
  );
};

export default Recommendations;
