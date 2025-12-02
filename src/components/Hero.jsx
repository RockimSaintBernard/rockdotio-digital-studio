import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-abstract.jpg";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { useState, useEffect } from "react";

const Hero = () => {
  const line1 = useTypingEffect("We help developers", 60, 300);
  const line2 = useTypingEffect("build and ship faster", 60, 1500);
  const line3 = useTypingEffect("like seasoned pros", 60, 2700);
  
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Base Background */}
      <div className="absolute inset-0 bg-primary" />
      
      {/* Detailed Circuit Board SVG Pattern - Slowest layer */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-30 transition-transform duration-0" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <defs>
          <pattern id="circuitPattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            {/* Horizontal parallel traces */}
            <g className="animate-pulse" style={{ animationDuration: '4s', animationDelay: '0s' }}>
              <line x1="0" y1="30" x2="60" y2="30" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
              <line x1="0" y1="33" x2="60" y2="33" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
              <line x1="0" y1="36" x2="60" y2="36" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
            </g>
            
            <g className="animate-pulse" style={{ animationDuration: '5s', animationDelay: '0.5s' }}>
              <line x1="140" y1="30" x2="200" y2="30" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
              <line x1="140" y1="33" x2="200" y2="33" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
              <line x1="140" y1="36" x2="200" y2="36" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
            </g>
            
            {/* Vertical parallel traces */}
            <g className="animate-pulse" style={{ animationDuration: '4.5s', animationDelay: '1s' }}>
              <line x1="100" y1="0" x2="100" y2="50" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
              <line x1="103" y1="0" x2="103" y2="50" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
              <line x1="106" y1="0" x2="106" y2="50" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
            </g>
            
            <g className="animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '1.5s' }}>
              <line x1="100" y1="150" x2="100" y2="200" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
              <line x1="103" y1="150" x2="103" y2="200" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
              <line x1="106" y1="150" x2="106" y2="200" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
            </g>
            
            {/* Curved connections */}
            <path d="M 60 33 Q 80 33 100 50" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" 
                  className="animate-pulse" style={{ animationDuration: '3s', animationDelay: '2s' }} />
            <path d="M 100 50 Q 120 50 140 33" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none"
                  className="animate-pulse" style={{ animationDuration: '3s', animationDelay: '2s' }} />
            
            {/* Circuit pads */}
            <circle cx="60" cy="33" r="3" fill="rgba(255,255,255,0.5)" 
                    className="animate-pulse" style={{ animationDuration: '2s', animationDelay: '0s' }} />
            <circle cx="140" cy="33" r="3" fill="rgba(255,255,255,0.5)"
                    className="animate-pulse" style={{ animationDuration: '2s', animationDelay: '1s' }} />
            <circle cx="100" cy="50" r="3" fill="rgba(255,255,255,0.5)"
                    className="animate-pulse" style={{ animationDuration: '2s', animationDelay: '2s' }} />
            <circle cx="100" cy="150" r="3" fill="rgba(255,255,255,0.5)"
                    className="animate-pulse" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
          </pattern>
          
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.8)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            <animate attributeName="x1" from="-100%" to="100%" dur="3s" repeatCount="indefinite" />
            <animate attributeName="x2" from="0%" to="200%" dur="3s" repeatCount="indefinite" />
          </linearGradient>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#circuitPattern)" />
        
        {/* Animated data flow lines */}
        <g opacity="0.6">
          <line x1="0" y1="20%" x2="100%" y2="20%" stroke="url(#flowGradient)" strokeWidth="2" />
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="url(#flowGradient)" strokeWidth="2" 
                style={{ animationDelay: '1s' }} />
          <line x1="0" y1="80%" x2="100%" y2="80%" stroke="url(#flowGradient)" strokeWidth="2"
                style={{ animationDelay: '2s' }} />
        </g>
      </svg>
      
      {/* Additional Circuit Layer with Different Pattern - Medium speed layer */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-20 transition-transform duration-0" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <defs>
          <pattern id="circuitPattern2" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
            <g className="animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}>
              <line x1="50" y1="150" x2="150" y2="150" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
              <line x1="50" y1="154" x2="150" y2="154" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
              <line x1="200" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
              <line x1="200" y1="154" x2="300" y2="154" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
            </g>
            <g className="animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }}>
              <line x1="150" y1="50" x2="150" y2="120" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
              <line x1="154" y1="50" x2="154" y2="120" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
              <line x1="150" y1="180" x2="150" y2="250" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
              <line x1="154" y1="180" x2="154" y2="250" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
            </g>
            <path d="M 150 120 Q 175 135 200 150" stroke="rgba(255,255,255,0.4)" strokeWidth="2" fill="none" />
            <circle cx="150" cy="150" r="5" fill="rgba(255,255,255,0.6)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuitPattern2)" />
      </svg>
      
      {/* Animated Signal Pulses - Fastest layer */}
      <div 
        className="absolute inset-0 overflow-hidden transition-transform duration-0"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-white/70 shadow-[0_0_15px_3px_rgba(255,255,255,0.6)] animate-float"
            style={{
              left: `${(i % 4) * 25 + Math.random() * 15}%`,
              top: `${Math.floor(i / 4) * 33 + Math.random() * 20}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${5 + (i % 3) * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/50" />

      {/* Content - Stays fixed (no parallax) */}
      <div 
        className="container mx-auto px-6 relative z-10 text-center pb-20"
      >
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
