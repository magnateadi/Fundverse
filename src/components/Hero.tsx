
import { ArrowRight, BarChart2, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-[70%] bg-gradient-to-b from-blue-50/80 to-transparent -z-10" />
      
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto stagger-animation">
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-600 mb-6 animate-fade-in">
            <span className="font-medium">Licensed Mutual Fund Distributor</span>
          </div>
          
          <h1 className="h1 mb-6 text-center max-w-2xl">
            Find the perfect mutual funds, 
            <span className="text-primary"> tailored just for you</span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-xl text-center">
            Our intelligent platform analyzes your preferences to recommend the ideal investment options, 
            making mutual fund investing simple and personalized.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 mb-16">
            <Button 
              size="lg" 
              className="rounded-full px-8 shadow-subtle button-hover"
              onClick={() => navigate('/questionnaire')}
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8 shadow-none border-blue-200 button-hover"
            >
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card className="glass-card border-0 shadow-card animate-slide-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <BarChart2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Personalized Analysis</h3>
              <p className="text-muted-foreground text-sm">
                Advanced questionnaire that understands your unique financial profile
              </p>
            </CardContent>
          </Card>
          
          <Card className="glass-card border-0 shadow-card animate-slide-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Curated Recommendations</h3>
              <p className="text-muted-foreground text-sm">
                Expertly selected funds from top AMCs tailored to your risk profile
              </p>
            </CardContent>
          </Card>
          
          <Card className="glass-card border-0 shadow-card animate-slide-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Security & Compliance</h3>
              <p className="text-muted-foreground text-sm">
                SEBI-registered platform with bank-grade security for your investments
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;
