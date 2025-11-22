import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-abstract.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-[hsl(220_85%_50%)] to-[hsl(220_80%_45%)]">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[hsl(var(--primary-glow))] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <img
          src={heroImage}
          alt="Abstract technology background"
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center pt-20">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-up">
          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight text-white drop-shadow-2xl">
            Build. Ship. Scale.
            <span className="block mt-4 text-white/95">
              Your Code, Elevated
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-medium drop-shadow-lg">
            Modern development tools and services built by developers, for developers. Ship faster with clean code and scalable architecture.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              variant="default"
              size="lg"
              onClick={scrollToContact}
              className="group bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-6 shadow-strong"
            >
              Start Building
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold text-lg px-8 py-6"
            >
              View Tools
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />
      
      {/* Floating Code Blocks Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 text-white/10 font-mono text-sm animate-fade-in">{'<dev>'}</div>
        <div className="absolute top-40 right-20 text-white/10 font-mono text-sm animate-fade-in" style={{ animationDelay: '0.5s' }}>{'</>'}</div>
        <div className="absolute bottom-40 left-1/4 text-white/10 font-mono text-sm animate-fade-in" style={{ animationDelay: '1s' }}>{'{ }'}</div>
      </div>
    </section>
  );
};

export default Hero;
