
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-3 bg-white/80 backdrop-blur-md shadow-subtle"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2">
          <span className="text-xl font-semibold text-primary">WealthGuide</span>
        </NavLink>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `text-sm font-medium transition-colors ${
                isActive 
                  ? "text-primary underline-animation after:w-full" 
                  : "text-foreground/80 hover:text-foreground underline-animation"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/questionnaire" 
            className={({ isActive }) => 
              `text-sm font-medium transition-colors ${
                isActive 
                  ? "text-primary underline-animation after:w-full" 
                  : "text-foreground/80 hover:text-foreground underline-animation"
              }`
            }
          >
            Find Funds
          </NavLink>
          <NavLink 
            to="/sip-calculator" 
            className={({ isActive }) => 
              `text-sm font-medium transition-colors ${
                isActive 
                  ? "text-primary underline-animation after:w-full" 
                  : "text-foreground/80 hover:text-foreground underline-animation"
              }`
            }
          >
            SIP Calculator
          </NavLink>
          <NavLink 
            to="/financial-advisor" 
            className={({ isActive }) => 
              `text-sm font-medium transition-colors ${
                isActive 
                  ? "text-primary underline-animation after:w-full" 
                  : "text-foreground/80 hover:text-foreground underline-animation"
              }`
            }
          >
            AI Advisor
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `text-sm font-medium transition-colors ${
                isActive 
                  ? "text-primary underline-animation after:w-full" 
                  : "text-foreground/80 hover:text-foreground underline-animation"
              }`
            }
          >
            About
          </NavLink>
          <Button 
            variant="default" 
            size="sm" 
            className="ml-4 rounded-full px-6 shadow-none button-hover"
          >
            Get Started
          </Button>
        </nav>
        
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 animate-fade-in">
          <nav className="container flex flex-col py-4 gap-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-sm font-medium py-2 transition-colors ${
                  isActive ? "text-primary" : "text-foreground/80"
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/questionnaire" 
              className={({ isActive }) => 
                `text-sm font-medium py-2 transition-colors ${
                  isActive ? "text-primary" : "text-foreground/80"
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Find Funds
            </NavLink>
            <NavLink 
              to="/sip-calculator" 
              className={({ isActive }) => 
                `text-sm font-medium py-2 transition-colors ${
                  isActive ? "text-primary" : "text-foreground/80"
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              SIP Calculator
            </NavLink>
            <NavLink 
              to="/financial-advisor" 
              className={({ isActive }) => 
                `text-sm font-medium py-2 transition-colors ${
                  isActive ? "text-primary" : "text-foreground/80"
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              AI Advisor
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `text-sm font-medium py-2 transition-colors ${
                  isActive ? "text-primary" : "text-foreground/80"
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </NavLink>
            <Button 
              variant="default" 
              className="mt-2 rounded-full shadow-none w-full button-hover"
              onClick={() => {
                setMobileMenuOpen(false);
                window.location.href = "/questionnaire";
              }}
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
