import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

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
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary to-accent/20" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary-hover/20 rounded-full blur-3xl" />
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto container-padding py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-lg">O</span>
                </div>
                <div>
                  <div className="text-xl font-bold">Obaid Sajjad</div>
                  <div className="text-primary-foreground/80">AI Engineer</div>
                </div>
              </div>
              
              <p className="text-primary-foreground/80 leading-relaxed max-w-md">
                Building intelligent solutions with cutting-edge AI technology. 
                Specializing in NLP, LLMs, and automation systems that drive real-world impact.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
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
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <nav className="space-y-3">
                {[
                  { name: "About", href: "#about" },
                  { name: "Services", href: "#services" },
                  { name: "Projects", href: "#projects" },
                  { name: "Experience", href: "#experience" },
                ].map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Services</h3>
              <nav className="space-y-3">
                {[
                  "AI Solutions",
                  "LLM Development", 
                  "Mobile Apps",
                  "Data Analytics",
                  "Automation",
                  "Consulting"
                ].map((service) => (
                  <div key={service} className="text-primary-foreground/80">
                    {service}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto container-padding py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-primary-foreground/80 text-sm">
                © {currentYear} Obaid Sajjad. All rights reserved.
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-primary-foreground/80 hover:text-accent hover:bg-white/10 group"
              >
                Back to Top
                <ArrowUp className="w-4 h-4 ml-2 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};