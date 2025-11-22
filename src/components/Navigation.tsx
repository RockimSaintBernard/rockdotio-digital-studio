import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-background/95 backdrop-blur-md border-b border-border shadow-soft" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className={`text-3xl font-extrabold tracking-tight transition-all duration-300 ${
            scrolled 
              ? "bg-gradient-to-r from-primary to-[hsl(var(--primary-glow))] bg-clip-text text-transparent" 
              : "text-white drop-shadow-lg"
          }`}>
            ROCK.IO
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className={`text-base font-semibold transition-colors ${
                scrolled ? "text-foreground/80 hover:text-primary" : "text-white/90 hover:text-white"
              }`}
            >
              Tools
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`text-base font-semibold transition-colors ${
                scrolled ? "text-foreground/80 hover:text-primary" : "text-white/90 hover:text-white"
              }`}
            >
              About
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              size="sm"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
