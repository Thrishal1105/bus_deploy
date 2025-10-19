import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    
    { label: "How It Works", href: "#how-it-works" },
    { label: "Tech Stack", href: "#tech-stack" },
    { label: "Features", href: "#features" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-card"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            {/* <div className="p-2 rounded-lg bg-gradient-hero">
              <Download className="w-5 h-5 text-primary-foreground" />
            </div> */}
            <MapPin className={cn("w-8 h-8 transition-colors", isScrolled ? "text-black" : "text-white")} />
            <span className={cn("font-bold text-2xl transition-colors", isScrolled ? "text-black" : "text-white")}>Bus Tracker</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isScrolled 
                    ? "text-black hover:text-gray-700" 
                    : "text-white hover:text-gray-200"
                }`}
              >
                {item.label}
              </a>
            ))}
            <Button size="sm" className="bg-accent hover:bg-accent-glow text-accent-foreground">
              <a href="/app-release.apk" download="BusTracker.apk">
                Download
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium transition-colors px-4 py-2 ${
                    isScrolled 
                      ? "text-black hover:text-gray-700" 
                      : "text-white hover:text-gray-200"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-4">
                <Button className="w-full bg-accent hover:bg-accent-glow text-accent-foreground">
                  Download
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
