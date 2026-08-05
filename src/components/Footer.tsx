import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import brainLogo from "@/assets/digital-brain-logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-card text-foreground border-t border-border/80 relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-accent/5 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto container-padding py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {/* Brand Section */}
            <div className="sm:col-span-2 space-y-5">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden shadow-[0_0_15px_hsl(var(--accent)/0.4)] border border-accent/40 flex items-center justify-center bg-card">
                  <img src={brainLogo} alt="Obaid Sajjad AI" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-bold text-foreground">Obaid Sajjad</div>
                  <div className="text-xs text-muted-foreground font-medium">AI & Digital Solutions Consultant</div>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm max-w-md">
                Engineering production-ready AI systems, multi-agent frameworks, custom LLM fine-tuning, 
                and scalable digital products for businesses and startups worldwide.
              </p>

              {/* Social Links */}
              <div className="flex space-x-3 pt-1">
                {[
                  { icon: Github, href: "https://github.com/GigaNoTetsuo", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com/in/obaid-sajjad", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:obaidsajjad321@gmail.com", label: "Email" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 bg-secondary hover:bg-accent hover:text-accent-foreground rounded-lg flex items-center justify-center transition-colors border border-border/60 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-3.5">
              <h3 className="text-xs sm:text-sm font-bold text-foreground uppercase tracking-wider">Navigation</h3>
              <nav className="space-y-2">
                {[
                  { name: "Home", href: "#hero" },
                  { name: "Solutions", href: "#services" },
                  { name: "Case Studies", href: "#projects" },
                  { name: "Skills & Tech", href: "#skills" },
                  { name: "About", href: "#about" },
                  { name: "Contact", href: "#contact" },
                ].map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-xs text-muted-foreground hover:text-accent transition-colors font-medium"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div className="space-y-3.5">
              <h3 className="text-xs sm:text-sm font-bold text-foreground uppercase tracking-wider">Core Solutions</h3>
              <nav className="space-y-2">
                {[
                  "AI Agents & Workflows",
                  "Enterprise RAG Search", 
                  "Custom LLM Fine-Tuning",
                  "AI Mobile & Web Apps",
                  "Cloud Computing & AWS",
                  "AI Strategy & Advisory"
                ].map((service) => (
                  <div key={service} className="text-xs text-muted-foreground font-medium">
                    {service}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/60">
          <div className="container mx-auto container-padding py-5 sm:py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div className="text-[11px] sm:text-xs text-muted-foreground">
                © {currentYear} Obaid Sajjad. All rights reserved. • Respected NDA & Strict Privacy.
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-xs text-muted-foreground hover:text-accent hover:bg-secondary group"
              >
                Back to Top
                <ArrowUp className="w-3.5 h-3.5 ml-1.5 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};