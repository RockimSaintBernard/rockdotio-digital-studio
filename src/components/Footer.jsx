import { Link } from "react-router-dom";
import logoBlue from "@/assets/rockim-logo-blue.jpg";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link 
            to="/"
            className="flex items-center"
          >
            <img 
              src={logoBlue}
              alt="ROCK.IO Logo" 
              className="h-20 md:h-24"
            />
          </Link>
          
          <div className="text-sm text-muted-foreground">
            © 2024 ROCK.IO. All rights reserved.
          </div>
          
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms
            </a>
            <Link
              to="/contact"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
