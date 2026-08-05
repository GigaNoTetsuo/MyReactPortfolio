import { useState, useEffect, useRef } from "react";
import { Brain, Bot, ShieldCheck, Lightbulb, Sparkles, Lock, FileCheck, Flame } from "lucide-react";

export const Philosophy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="philosophy" ref={sectionRef} className="py-20 bg-background relative overflow-hidden border-y border-border/50">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-accent/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto container-padding relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <div className="inline-flex items-center space-x-2 bg-accent/10 px-3.5 py-1.5 rounded-full text-accent text-xs font-semibold mb-4 border border-accent/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Philosophy</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
            Human Ambition, <span className="text-gradient">Amplified by AI.</span>
          </h2>
          <div className="w-20 h-1 accent-gradient rounded-full mx-auto" />
        </div>

        {/* Sleek Visual Equation Layout (Horizontal Orientation Preserved on Mobile) */}
        <div className="max-w-5xl mx-auto mb-14 relative overflow-hidden">
          
          {/* Background Connecting Line */}
          <div className="absolute top-12 sm:top-14 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent hidden md:block z-0" />

          <div className="flex flex-row items-center justify-start md:justify-between gap-3 sm:gap-5 overflow-x-auto pb-4 pt-2 relative z-10 scrollbar-none">
            
            {/* Tile 1: Human Intelligence */}
            <div 
              style={{ transitionDelay: '100ms' }}
              className={`flex flex-col items-center flex-shrink-0 group transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl sm:rounded-3xl bg-secondary/80 flex items-center justify-center shadow-lg group-hover:bg-secondary transition-all duration-300 relative">
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Brain className="w-8 h-8 sm:w-10 sm:h-10 text-accent/80 group-hover:text-accent group-hover:scale-110 transition-all duration-300" strokeWidth={1.5} />
              </div>
              <div className="mt-2.5 text-center">
                <span className="text-[10px] sm:text-xs font-bold tracking-widest text-muted-foreground uppercase block">
                  Human
                </span>
                <span className="text-[10px] sm:text-xs font-bold tracking-widest text-muted-foreground uppercase block">
                  Intelligence
                </span>
              </div>
            </div>

            {/* Operator + */}
            <div 
              style={{ transitionDelay: '500ms' }}
              className={`h-24 sm:h-28 md:h-32 flex items-center justify-center text-lg sm:text-xl font-bold text-muted-foreground/80 flex-shrink-0 transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
            >
              +
            </div>

            {/* Tile 2: Artificial Intelligence */}
            <div 
              style={{ transitionDelay: '900ms' }}
              className={`flex flex-col items-center flex-shrink-0 group transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl sm:rounded-3xl bg-secondary/80 flex items-center justify-center shadow-lg group-hover:bg-secondary transition-all duration-300 relative">
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Bot className="w-8 h-8 sm:w-10 sm:h-10 text-accent/80 group-hover:text-accent group-hover:scale-110 transition-all duration-300" strokeWidth={1.5} />
              </div>
              <div className="mt-2.5 text-center">
                <span className="text-[10px] sm:text-xs font-bold tracking-widest text-muted-foreground uppercase block">
                  Artificial
                </span>
                <span className="text-[10px] sm:text-xs font-bold tracking-widest text-muted-foreground uppercase block">
                  Intelligence
                </span>
              </div>
            </div>

            {/* Operator + */}
            <div 
              style={{ transitionDelay: '1300ms' }}
              className={`h-24 sm:h-28 md:h-32 flex items-center justify-center text-lg sm:text-xl font-bold text-muted-foreground/80 flex-shrink-0 transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
            >
              +
            </div>

            {/* Tile 3: AI Firewall */}
            <div 
              style={{ transitionDelay: '1700ms' }}
              className={`flex flex-col items-center flex-shrink-0 group transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl sm:rounded-3xl bg-secondary/80 flex items-center justify-center shadow-lg group-hover:bg-secondary transition-all duration-300 relative">
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Flame className="w-8 h-8 sm:w-10 sm:h-10 text-accent/80 group-hover:text-accent group-hover:scale-110 transition-all duration-300" strokeWidth={1.5} />
              </div>
              <div className="mt-2.5 text-center">
                <span className="text-[10px] sm:text-xs font-bold tracking-widest text-muted-foreground uppercase block">
                  AI
                </span>
                <span className="text-[10px] sm:text-xs font-bold tracking-widest text-muted-foreground uppercase block">
                  Firewall
                </span>
              </div>
            </div>

            {/* Operator = */}
            <div 
              style={{ transitionDelay: '2100ms' }}
              className={`h-24 sm:h-28 md:h-32 flex items-center justify-center text-lg sm:text-xl font-bold text-accent/90 flex-shrink-0 transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
            >
              =
            </div>

            {/* Tile 4: Potential Amplified (Continuously Radiating Shining Lightbulb Outcome) */}
            <div 
              style={{ transitionDelay: '2500ms' }}
              className={`flex flex-col items-center flex-shrink-0 group cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-12 scale-90'}`}
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl sm:rounded-3xl bg-secondary flex items-center justify-center relative overflow-hidden shadow-[0_0_30px_rgba(245,158,11,0.3)] border border-amber-400/50 group-hover:scale-110 group-hover:shadow-[0_0_50px_rgba(245,158,11,0.6)] group-hover:border-amber-400 transition-all duration-500">
                {/* Radiating Light Ray Beams */}
                <div className="absolute inset-0 flex items-center justify-center animate-spin pointer-events-none" style={{ animationDuration: '25s' }}>
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                    <div 
                      key={i} 
                      className="absolute w-0.5 h-14 sm:h-16 bg-gradient-to-t from-transparent via-amber-400/70 to-transparent rounded-full"
                      style={{ transform: `rotate(${deg}deg)` }}
                    />
                  ))}
                </div>

                {/* Glowing Background Pulse */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-amber-400/15 opacity-60 group-hover:opacity-100 animate-pulse pointer-events-none" />

                {/* Shining Lightbulb Icon */}
                <Lightbulb className="w-9 h-9 sm:w-11 sm:h-11 text-amber-300 drop-shadow-[0_0_18px_#f59e0b] group-hover:scale-125 transition-all duration-500 relative z-10 animate-pulse" strokeWidth={1.5} />
              </div>
              <div className="mt-2.5 text-center">
                <span className="text-[10px] sm:text-xs font-bold tracking-widest text-amber-400 uppercase block">
                  Potential
                </span>
                <span className="text-[10px] sm:text-xs font-bold tracking-widest text-amber-400 uppercase block">
                  Amplified
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Security & Ethics Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="inline-flex items-center space-x-2 bg-secondary/60 px-4 py-2 rounded-xl border border-border/80 text-xs font-medium text-foreground">
            <Lock className="w-4 h-4 text-accent" />
            <span>Strict NDA & Data Privacy Guarantee</span>
          </div>

          <div className="inline-flex items-center space-x-2 bg-secondary/60 px-4 py-2 rounded-xl border border-border/80 text-xs font-medium text-foreground">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span>Ethical AI Guardrails & Safety Filters</span>
          </div>

          <div className="inline-flex items-center space-x-2 bg-secondary/60 px-4 py-2 rounded-xl border border-border/80 text-xs font-medium text-foreground">
            <FileCheck className="w-4 h-4 text-accent" />
            <span>100% Full IP & Code Ownership</span>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center">
          <p className="text-xl md:text-2xl font-medium text-foreground/90 leading-relaxed max-w-2xl mx-auto">
            My mission is to empower teams with <span className="font-bold text-foreground underline decoration-accent decoration-2 underline-offset-4">safe, ethical, and trustworthy AI.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
