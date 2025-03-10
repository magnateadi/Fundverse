import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

interface SipResult {
  investedAmount: number;
  estimatedReturns: number;
  totalValue: number;
  monthlyData: { month: number; investedAmount: number; totalValue: number }[];
}

const SipCalculator = () => {
  const [monthlyAmount, setMonthlyAmount] = useState<number>(5000);
  const [duration, setDuration] = useState<number>(5); // years
  const [interestRate, setInterestRate] = useState<number>(12); // annual return %
  const [result, setResult] = useState<SipResult | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    calculateSIP();
  }, [monthlyAmount, duration, interestRate]);

  const calculateSIP = () => {
    // Formula used: M × {[(1 + r)^n - 1] / r} × (1 + r)
    // Where M is the monthly investment, r is the monthly interest rate, and n is the number of months

    try {
      const monthlyRate = interestRate / 100 / 12;
      const months = duration * 12;
      
      const investedAmount = monthlyAmount * months;
      
      // Calculate the future value
      const futureValue = monthlyAmount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
      const estimatedReturns = futureValue - investedAmount;
      
      // Generate monthly data for the chart
      const monthlyData = [];
      let runningInvestment = 0;
      let runningValue = 0;
      
      for (let i = 1; i <= months; i++) {
        runningInvestment += monthlyAmount;
        runningValue = monthlyAmount * ((Math.pow(1 + monthlyRate, i) - 1) / monthlyRate) * (1 + monthlyRate);
        
        // Add data points at regular intervals to keep chart readable
        if (i % Math.max(1, Math.floor(months / 20)) === 0 || i === months) {
          monthlyData.push({
            month: i,
            investedAmount: Math.round(runningInvestment),
            totalValue: Math.round(runningValue)
          });
        }
      }
      
      setResult({
        investedAmount,
        estimatedReturns: Math.round(estimatedReturns),
        totalValue: Math.round(futureValue),
        monthlyData
      });
    } catch (error) {
      toast({
        title: "Calculation Error",
        description: "There was an error calculating your SIP returns. Please check your inputs.",
        variant: "destructive"
      });
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="h2 mb-3">SIP Calculator</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Calculate the potential returns on your Systematic Investment Plan (SIP) and 
              plan your financial future with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <Card className="lg:col-span-5 shadow-lg">
              <CardHeader>
                <CardTitle>Calculate Your SIP Returns</CardTitle>
                <CardDescription>
                  Adjust the parameters to see how your investment could grow over time
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="monthlyAmount">Monthly Investment</Label>
                    <span className="text-sm font-medium">₹{monthlyAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Slider 
                      id="monthlyAmount"
                      min={500} 
                      max={100000} 
                      step={500} 
                      value={[monthlyAmount]} 
                      onValueChange={(values) => setMonthlyAmount(values[0])}
                      className="flex-1"
                    />
                    <Input
                      type="number"
                      value={monthlyAmount}
                      onChange={(e) => setMonthlyAmount(Number(e.target.value))}
                      className="w-24"
                      min={500}
                      max={100000}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="duration">Investment Duration</Label>
                    <span className="text-sm font-medium">{duration} years</span>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Slider 
                      id="duration"
                      min={1} 
                      max={30} 
                      step={1} 
                      value={[duration]} 
                      onValueChange={(values) => setDuration(values[0])}
                      className="flex-1"
                    />
                    <Input
                      type="number"
                      value={duration}
                      onChange={(e) => setDuration(Number(e.target.value))}
                      className="w-24"
                      min={1}
                      max={30}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="interestRate">Expected Annual Return</Label>
                    <span className="text-sm font-medium">{interestRate}%</span>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Slider 
                      id="interestRate"
                      min={1} 
                      max={30} 
                      step={0.5} 
                      value={[interestRate]} 
                      onValueChange={(values) => setInterestRate(values[0])}
                      className="flex-1"
                    />
                    <Input
                      type="number"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-24"
                      min={1}
                      max={30}
                      step={0.5}
                    />
                  </div>
                </div>

                <Button 
                  className="w-full mt-4" 
                  size="lg"
                  onClick={calculateSIP}
                >
                  Calculate
                </Button>
              </CardContent>
            </Card>

            <Card className="lg:col-span-7 shadow-lg">
              <CardHeader>
                <CardTitle>SIP Investment Growth</CardTitle>
                <CardDescription>
                  Visualize how your investment will grow over time
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {result && (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 bg-secondary rounded-lg text-center">
                        <p className="text-sm text-muted-foreground mb-1">Invested Amount</p>
                        <p className="font-semibold text-lg">{formatCurrency(result.investedAmount)}</p>
                      </div>
                      <div className="p-4 bg-secondary rounded-lg text-center">
                        <p className="text-sm text-muted-foreground mb-1">Est. Returns</p>
                        <p className="font-semibold text-lg text-primary">{formatCurrency(result.estimatedReturns)}</p>
                      </div>
                      <div className="p-4 bg-primary/10 rounded-lg text-center">
                        <p className="text-sm text-muted-foreground mb-1">Total Value</p>
                        <p className="font-semibold text-lg text-primary">{formatCurrency(result.totalValue)}</p>
                      </div>
                    </div>

                    <div className="h-64 md:h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                          data={result.monthlyData}
                          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis 
                            dataKey="month" 
                            tickFormatter={(value) => {
                              if (duration > 10) {
                                return `${Math.floor(value/12)}y`;
                              }
                              return `${value}m`;
                            }}
                          />
                          <YAxis 
                            tickFormatter={(value) => {
                              if (value >= 10000000) return `${(value/10000000).toFixed(1)}Cr`;
                              if (value >= 100000) return `${(value/100000).toFixed(1)}L`;
                              if (value >= 1000) return `${(value/1000).toFixed(1)}K`;
                              return value;
                            }}
                          />
                          <Tooltip 
                            formatter={(value) => [formatCurrency(Number(value)), '']}
                            labelFormatter={(label) => {
                              const years = Math.floor(label / 12);
                              const months = label % 12;
                              return `${years > 0 ? `${years} year${years > 1 ? 's' : ''}` : ''} ${months > 0 ? `${months} month${months > 1 ? 's' : ''}` : ''}`;
                            }}
                          />
                          <Area 
                            type="monotone" 
                            dataKey="investedAmount" 
                            stackId="1"
                            stroke="#9CA3AF" 
                            fill="#E5E7EB" 
                            name="Invested Amount"
                          />
                          <Area 
                            type="monotone" 
                            dataKey="totalValue" 
                            stackId="2"
                            stroke="var(--primary)" 
                            fill="var(--primary)" 
                            fillOpacity={0.3}
                            name="Total Value"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-secondary/50 rounded-lg p-6 max-w-3xl mx-auto">
            <h3 className="text-lg font-medium mb-3">About Systematic Investment Plans (SIPs)</h3>
            <p className="text-muted-foreground mb-4">
              A Systematic Investment Plan (SIP) allows you to invest a fixed amount regularly in a mutual fund scheme. 
              This calculator helps you estimate the returns on your SIP investments based on the expected rate of return.
            </p>
            <div className="text-sm text-muted-foreground">
              <p className="mb-2">
                <strong>Note:</strong> The calculations provided are for illustrative purposes only. 
                Actual returns will depend on market conditions and fund performance.
              </p>
              <p>
                The calculator uses the formula: M × {"{[(1 + r)^n - 1] / r} × (1 + r)"}, where M is the monthly 
                investment amount, r is the monthly interest rate, and n is the number of months.
              </p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default SipCalculator;
