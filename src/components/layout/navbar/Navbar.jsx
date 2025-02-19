import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/button';
import { UserCircle, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="border-b bg-background py-4 px-4 md:px-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-xl font-bold">
            AI Travel Planner
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/trip-planning" className="text-foreground hover:text-primary transition-colors">
            Plan a Trip
          </Link>
          <Link to="/destinations" className="text-foreground hover:text-primary transition-colors">
            Destinations
          </Link>
          <Link to="/about" className="text-foreground hover:text-primary transition-colors">
            About
          </Link>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
          <Link to="/profile">
            <Button variant="outline" size="icon">
              <UserCircle className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;