import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import brainLogo from "@/assets/digital-brain-logo.png";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("dark");
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "Solutions", href: "#services" },
    { name: "Case Studies", href: "#projects" },
    { name: "Skills & Tech", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-elegant border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between h-16">
          {/* Digital Brain Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection("#hero")}>
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-[0_0_15px_hsl(var(--accent)/0.4)] border border-accent/40 flex items-center justify-center bg-card">
              <img src={brainLogo} alt="Obaid Sajjad AI" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground leading-none">Obaid Sajjad</span>
              <span className="text-[10px] text-muted-foreground font-medium">AI & Digital Solutions</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-accent transition-colors duration-300 font-medium text-sm"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Book Consultation CTA */}
          <div className="flex items-center space-x-3">
            <Button
              size="sm"
              className="hidden sm:inline-flex bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm text-xs font-semibold"
              onClick={() => scrollToSection("#contact")}
            >
              Book Consultation
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-9 h-9 p-0"
            >
              {isMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border shadow-elegant">
            <nav className="flex flex-col py-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left px-6 py-3 text-muted-foreground hover:text-accent hover:bg-accent-light/10 transition-all duration-300"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};