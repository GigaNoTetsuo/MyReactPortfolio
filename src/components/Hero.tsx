import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Download, ArrowRight, MessageSquare, Sparkles } from "lucide-react";
import { ParticlesBackground } from "./ParticlesBackground";
import heroSolutions from "@/assets/hero-solutions.png";
import resume from "@/assets/obaid-sajjad.pdf";

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center hero-gradient relative overflow-hidden py-10 sm:py-16 lg:py-0">
      {/* Animated Dots & Lines Network Canvas */}
      <ParticlesBackground />

      {/* Background Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-transparent to-accent/5 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-glow delay-1000 pointer-events-none" />

      <div className="container mx-auto container-padding relative z-10 pt-12 sm:pt-20 lg:pt-0 pb-6 lg:pb-0">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-left">
            <div className="space-y-3.5 sm:space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white/90 text-xs sm:text-sm font-medium border border-white/15">
                <Sparkles className="w-4 h-4 text-accent animate-pulse" />
                <span>AI & Digital Solutions Architect</span>
              </div>

              <h1 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                <span className="block text-gradient">Engineering Intelligent Solutions</span>
                <span className="block text-xl sm:text-2xl md:text-3xl text-white/90 font-normal mt-1">for Businesses & Startups</span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed max-w-xl">
                Engineering <strong>ethical, trustworthy, and secure AI systems</strong> for businesses and startups. 
                Your <strong>data privacy, IP protection, and enterprise security</strong> are our top priorities.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <Badge className="bg-white/15 hover:bg-white/25 text-white border-none py-1 px-2.5 sm:px-3 text-[11px] sm:text-xs">
                AI Agents & LangGraph
              </Badge>
              <Badge className="bg-white/15 hover:bg-white/25 text-white border-none py-1 px-2.5 sm:px-3 text-[11px] sm:text-xs">
                LLM Fine-Tuning & RAG
              </Badge>
              <Badge className="bg-white/15 hover:bg-white/25 text-white border-none py-1 px-2.5 sm:px-3 text-[11px] sm:text-xs">
                Mobile & Web Apps
              </Badge>
              <Badge className="bg-white/15 hover:bg-white/25 text-white border-none py-1 px-2.5 sm:px-3 text-[11px] sm:text-xs">
                Cloud Computing & AWS
              </Badge>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-1">
              <Button 
                size="lg" 
                className="w-full sm:w-auto group bg-accent text-accent-foreground font-bold hover:bg-accent-hover shadow-[0_0_25px_hsl(var(--accent)/0.4)] border border-accent/40 transition-all duration-300 hover:scale-105"
                onClick={() => scrollToSection("#contact")}
              >
                <MessageSquare className="w-4 h-4 mr-2 text-accent-foreground" />
                Start a Project / Consultation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="w-full sm:w-auto border-border/80 bg-secondary/60 text-foreground font-semibold hover:bg-accent/20 hover:text-accent hover:border-accent/60 transition-all duration-300"
                onClick={() => scrollToSection("#services")}
              >
                Explore Solutions
              </Button>
            </div>

            {/* Social Links & Resume */}
            <div className="flex items-center space-x-3 sm:space-x-4 pt-1">
              <a
                href="https://github.com/GigaNoTetsuo"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors group"
              >
                <Github className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </a>
              
              <a
                href="https://linkedin.com/in/obaid-sajjad"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </a>
              
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                title="Download Capability Deck / CV"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors group"
              >
                <Download className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Hero Image / Visual Badge (Zoomed for Mobile Fill) */}
          <div className="flex justify-center animate-fade-in-right pt-2 lg:pt-0">
            <div className="relative w-full flex justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-accent-hover/20 rounded-3xl blur-2xl opacity-60 animate-pulse-glow" />
              <img
                src={heroSolutions}
                alt="AI & Digital Solutions Architecture"
                className="relative w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[440px] md:max-w-[480px] h-auto object-contain rounded-2xl shadow-accent hover-scale border border-white/10 bg-card/40 backdrop-blur-sm p-2"
              />
              {/* Floating Solution Badges */}
              <div className="absolute -top-3 left-1 sm:-top-4 sm:-left-4 bg-background/90 backdrop-blur-md px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl border border-border shadow-lg animate-slide-up delay-300">
                <div className="text-[11px] sm:text-xs font-bold text-accent">Production Ready</div>
                <div className="text-[9px] sm:text-[10px] text-muted-foreground">AI Pipelines & Agents</div>
              </div>
              <div className="absolute -bottom-3 right-1 sm:-bottom-4 sm:-right-4 bg-background/90 backdrop-blur-md px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl border border-border shadow-lg animate-slide-up delay-500">
                <div className="text-[11px] sm:text-xs font-bold text-success">End-to-End Delivery</div>
                <div className="text-[9px] sm:text-[10px] text-muted-foreground">Web, Mobile & Cloud</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};