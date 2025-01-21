import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold">
          IITB GAMING
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/docs" className="text-secondary hover:text-primary transition-colors">
            Documentation
          </Link>
          <Link to="/showcase" className="text-secondary hover:text-primary transition-colors">
            Showcase
          </Link>
          <Link to="/community" className="text-secondary hover:text-primary transition-colors">
            Community
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:inline-flex">
            Developer Login
          </Button>
          <Button variant="ghost" className="hidden md:inline-flex">
            Regulator Login
          </Button>
          <Button className="text-white">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;