
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, PieChart, Clock, BarChart, ArrowRight, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <PieChart className="h-6 w-6 text-primary" />,
      title: "Risk Assessment",
      description: "Our smart questionnaire evaluates your risk tolerance with precision",
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Time Horizon Analysis",
      description: "We match funds to your specific investment timeframe for optimal results",
    },
    {
      icon: <BarChart className="h-6 w-6 text-primary" />,
      title: "Goal-Based Matching",
      description: "Receive recommendations aligned perfectly with your financial objectives",
    },
  ];

  const testimonials = [
    {
      quote: "This platform made investing so approachable. I was intimidated by mutual funds before, but now I feel confident about my investment choices.",
      author: "Priya S.",
      role: "Software Engineer",
    },
    {
      quote: "The questionnaire was intuitive and the recommendations were spot-on for my financial goals. Highly recommended for first-time investors.",
      author: "Rahul M.",
      role: "Recent Graduate",
    },
    {
      quote: "I appreciate how transparent and straightforward everything is. No complex jargon, just clear guidance on what funds match my needs.",
      author: "Ananya K.",
      role: "Marketing Professional",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* How It Works Section */}
        <section className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="h2 mb-4">Simplified Investment Process</h2>
              <p className="text-muted-foreground text-lg">
                Three easy steps to find your perfect mutual fund match
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border border-gray-100 overflow-hidden shadow-subtle hover:shadow-card transition-shadow duration-300">
                <div className="bg-blue-50 p-4 border-b border-blue-100">
                  <span className="inline-block rounded-full bg-primary w-8 h-8 text-white font-medium flex items-center justify-center">1</span>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Complete Assessment</h3>
                  <p className="text-muted-foreground mb-4">
                    Answer our carefully designed questions to help us understand your investor profile
                  </p>
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent"
                    onClick={() => navigate('/questionnaire')}
                  >
                    Start Now <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-100 overflow-hidden shadow-subtle hover:shadow-card transition-shadow duration-300">
                <div className="bg-blue-50 p-4 border-b border-blue-100">
                  <span className="inline-block rounded-full bg-primary w-8 h-8 text-white font-medium flex items-center justify-center">2</span>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Receive Recommendations</h3>
                  <p className="text-muted-foreground mb-4">
                    Get personalized mutual fund suggestions based on your unique financial profile
                  </p>
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent"
                  >
                    How It Works <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-100 overflow-hidden shadow-subtle hover:shadow-card transition-shadow duration-300">
                <div className="bg-blue-50 p-4 border-b border-blue-100">
                  <span className="inline-block rounded-full bg-primary w-8 h-8 text-white font-medium flex items-center justify-center">3</span>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Start Investing</h3>
                  <p className="text-muted-foreground mb-4">
                    Complete your KYC and begin your investment journey with confidence
                  </p>
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent"
                  >
                    Learn More <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="h2 mb-6">Advanced Analysis, Simple Experience</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Our platform combines sophisticated financial analysis with an intuitive user experience,
                  making mutual fund investing accessible for everyone.
                </p>
                
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="rounded-full bg-blue-100 p-2 mt-1">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className="mt-8 rounded-full px-6 shadow-subtle button-hover"
                  onClick={() => navigate('/questionnaire')}
                >
                  Start Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="relative lg:h-[480px] rounded-lg overflow-hidden shadow-elevated">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 h-full w-full p-8 flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 w-full max-w-md text-white">
                    <h3 className="text-2xl font-semibold mb-6">Your Investment Profile</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-center">
                        <span>Risk Tolerance</span>
                        <div className="w-32 h-2 bg-white/20 rounded-full overflow-hidden">
                          <div className="h-full bg-white rounded-full" style={{ width: '60%' }}></div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span>Time Horizon</span>
                        <div className="w-32 h-2 bg-white/20 rounded-full overflow-hidden">
                          <div className="h-full bg-white rounded-full" style={{ width: '80%' }}></div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span>Investment Goals</span>
                        <div className="w-32 h-2 bg-white/20 rounded-full overflow-hidden">
                          <div className="h-full bg-white rounded-full" style={{ width: '70%' }}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>Balanced risk profile</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>Long-term growth focused</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>Retirement planning priority</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="h2 mb-4">What Our Users Say</h2>
              <p className="text-muted-foreground text-lg">
                Join thousands of satisfied investors who've found their perfect match
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-card">
                  <CardContent className="p-8">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 text-yellow-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                    <p className="text-foreground mb-6 italic">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">Ready to find your perfect investment match?</h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Take our sophisticated questionnaire and receive personalized mutual fund recommendations in minutes
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                className="rounded-full px-8 text-blue-700 button-hover"
                onClick={() => navigate('/questionnaire')}
              >
                Start Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">WealthGuide</h3>
              <p className="text-muted-foreground text-sm">
                Simplifying mutual fund investments with personalized recommendations
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
                <li><a href="/questionnaire" className="text-muted-foreground hover:text-primary transition-colors">Find Funds</a></li>
                <li><a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Disclaimers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-muted-foreground">support@wealthguide.com</li>
                <li className="text-muted-foreground">+91 98765 43210</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2023 WealthGuide. All rights reserved. SEBI Registration No: INZ000123456
            </p>
            <p className="text-xs text-muted-foreground mt-2 md:mt-0">
              Mutual Fund investments are subject to market risks. Please read all scheme related documents carefully before investing.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
