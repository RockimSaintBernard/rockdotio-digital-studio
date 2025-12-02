import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/rockim-logo-white.png";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (isHomePage) {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // On non-home pages, always show scrolled style
  const showScrolledStyle = scrolled || !isHomePage;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      showScrolledStyle 
        ? "bg-background/95 backdrop-blur-md border-b border-border shadow-soft" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <Link 
            to="/"
            className="transition-all duration-300"
          >
            <img 
              src={logo} 
              alt="ROCK.IO Logo" 
              className={`h-8 transition-all duration-300 ${
                showScrolledStyle 
                  ? "brightness-100" 
                  : "brightness-100 drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]"
              }`}
            />
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/tools"
              className={`text-base font-semibold transition-colors ${
                showScrolledStyle ? "text-foreground/80 hover:text-primary" : "text-white/90 hover:text-white"
              } ${location.pathname === "/tools" ? "text-primary" : ""}`}
            >
              Tools
            </Link>
            <Link
              to="/projects"
              className={`text-base font-semibold transition-colors ${
                showScrolledStyle ? "text-foreground/80 hover:text-primary" : "text-white/90 hover:text-white"
              } ${location.pathname === "/projects" ? "text-primary" : ""}`}
            >
              Projects
            </Link>
            <Link
              to="/about"
              className={`text-base font-semibold transition-colors ${
                showScrolledStyle ? "text-foreground/80 hover:text-primary" : "text-white/90 hover:text-white"
              } ${location.pathname === "/about" ? "text-primary" : ""}`}
            >
              About
            </Link>
            <Button asChild size="sm">
              <Link to="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
