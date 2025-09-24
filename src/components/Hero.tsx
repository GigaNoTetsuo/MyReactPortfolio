import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, ArrowRight } from "lucide-react";
import heroAvatar from "@/assets/hero4.jpg";
import resume from "@/assets/obaid-sajjad.pdf";

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center hero-gradient relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-glow delay-1000" />
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                <span className="block">Obaid Sajjad</span>
                <span className="block text-gradient">AI Engineer</span>
              </h1>
              
              <div className="text-xl md:text-2xl text-white/80 font-medium">
                NLP • LLMs • Generative AI
              </div>
              
              <p className="text-lg text-white/70 leading-relaxed max-w-xl">
                Building AI Agents, Multilingual Systems, and Intelligent Automation for Real-World Impact.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="group bg-white text-primary hover:bg-white/90 shadow-accent dark:text-grey-900"
                onClick={() => scrollToSection("#projects")}
              >
                View Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 hover:border-white/40"
                onClick={() => scrollToSection("#contact")}
              >
                Hire Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/GigaNoTetsuo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors group"
              >
                <Github className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </a>
              
              <a
                href="https://linkedin.com/in/obaid-sajjad"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </a>
              
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors group"
              >
                <Download className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center animate-fade-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent-hover rounded-2xl blur-2xl opacity-30 animate-pulse-glow" />
              <img
                src={heroAvatar}
                alt="Obaid Sajjad - AI Engineer"
                className="relative w-80 h-80 object-cover rounded-2xl shadow-accent hover-scale"
              />
              {/* Tech Icons Floating */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent/20 backdrop-blur-sm rounded-xl flex items-center justify-center animate-slide-up delay-300">
                <span className="text-white font-bold">AI</span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-xl flex items-center justify-center animate-slide-up delay-500">
                <span className="text-white font-bold">ML</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};