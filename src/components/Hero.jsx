import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-abstract.jpg";
import { useTypingEffect } from "@/hooks/useTypingEffect";

const Hero = () => {
  const line1 = useTypingEffect("We help developers", 60, 300);
  const line2 = useTypingEffect("build and ship faster", 60, 1500);
  const line3 = useTypingEffect("like seasoned pros", 60, 2700);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Base Background */}
      <div className="absolute inset-0 bg-primary" />
      
      {/* Circuit Board SVG Animation */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.8)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>
        
        {/* Horizontal Circuit Lines */}
        <g className="animate-pulse" style={{ animationDuration: '3s' }}>
          <line x1="0" y1="20%" x2="30%" y2="20%" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
          <line x1="70%" y1="20%" x2="100%" y2="20%" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
          <line x1="0" y1="40%" x2="40%" y2="40%" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
          <line x1="60%" y1="40%" x2="100%" y2="40%" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
          <line x1="0" y1="60%" x2="25%" y2="60%" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
          <line x1="75%" y1="60%" x2="100%" y2="60%" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
          <line x1="0" y1="80%" x2="35%" y2="80%" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
          <line x1="65%" y1="80%" x2="100%" y2="80%" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
        </g>
        
        {/* Vertical Circuit Lines */}
        <g className="animate-pulse" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
          <line x1="15%" y1="0" x2="15%" y2="30%" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
          <line x1="15%" y1="70%" x2="15%" y2="100%" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
          <line x1="35%" y1="0" x2="35%" y2="40%" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
          <line x1="35%" y1="60%" x2="35%" y2="100%" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
          <line x1="65%" y1="0" x2="65%" y2="35%" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
          <line x1="65%" y1="65%" x2="65%" y2="100%" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
          <line x1="85%" y1="0" x2="85%" y2="25%" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
          <line x1="85%" y1="75%" x2="85%" y2="100%" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
        </g>
        
        {/* Circuit Nodes */}
        <g>
          <circle cx="15%" cy="20%" r="4" fill="rgba(255,255,255,0.6)" className="animate-pulse" style={{ animationDuration: '2s' }} />
          <circle cx="35%" cy="40%" r="4" fill="rgba(255,255,255,0.6)" className="animate-pulse" style={{ animationDuration: '2.5s' }} />
          <circle cx="65%" cy="60%" r="4" fill="rgba(255,255,255,0.6)" className="animate-pulse" style={{ animationDuration: '3s' }} />
          <circle cx="85%" cy="80%" r="4" fill="rgba(255,255,255,0.6)" className="animate-pulse" style={{ animationDuration: '2.2s' }} />
        </g>
      </svg>
      
      {/* Animated Energy Pulses */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white/60 shadow-[0_0_10px_2px_rgba(255,255,255,0.5)] animate-float"
            style={{
              left: `${(i % 4) * 25 + 10}%`,
              top: `${Math.floor(i / 4) * 50 + 20}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i}s`
            }}
          />
        ))}
      </div>
      
      {/* Subtle Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/50" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center pb-20">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-up">
          <p className="text-sm md:text-base text-white/80 uppercase tracking-[0.3em] font-medium">
            Modern Development Tools
          </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] text-white min-h-[300px] md:min-h-[400px]">
            <span className="block">
              {line1.displayedText}
              {!line1.isComplete && <span className="animate-pulse">|</span>}
            </span>
            <span className="block">
              {line2.displayedText}
              {line1.isComplete && !line2.isComplete && <span className="animate-pulse">|</span>}
            </span>
            <span className="block">
              {line3.displayedText}
              {line2.isComplete && !line3.isComplete && <span className="animate-pulse">|</span>}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Unlike bloated frameworks that drag projects out for months, ROCK.IO will elevate your development workflow in weeks—with clean code and scalable architecture that actually makes sense for modern applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 pb-4">
            <Button
              variant="default"
              size="lg"
              onClick={scrollToContact}
              className="group bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-6 shadow-strong hover:shadow-[0_25px_60px_-15px_rgba(0,51,204,0.35)] transition-all"
            >
              Start Building
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary font-bold text-lg px-8 py-6 transition-all"
            >
              View Tools
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors group cursor-pointer"
        aria-label="Scroll down"
      >
        <span className="text-sm font-medium uppercase tracking-wider">Scroll</span>
        <ChevronDown className="w-6 h-6 animate-bounce group-hover:animate-none" />
      </button>
    </section>
  );
};

export default Hero;
