
import React from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ApiKeyInputProps {
  apiKey: string;
  setApiKey: React.Dispatch<React.SetStateAction<string>>;
}

const ApiKeyInput: React.FC<ApiKeyInputProps> = ({ apiKey, setApiKey }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mb-6"
    >
      <Card className="shadow-sm border-primary/20">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">DeepSeek API Key</CardTitle>
          <CardDescription>
            Enter your API key to enable personalized financial advice
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input 
              type="password" 
              value={apiKey} 
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Enter your DeepSeek API key"
              className="flex-1"
            />
            <Button
              onClick={() => {
                if (apiKey) {
                  toast.success("API key saved successfully!");
                } else {
                  toast.error("Please enter a valid API key");
                }
              }}
              variant="outline"
            >
              Save Key
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Your API key is stored locally in your browser and not sent to our servers.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ApiKeyInput;
