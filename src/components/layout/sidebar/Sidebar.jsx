import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t bg-background py-6 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">AI Travel Planner</h3>
            <p className="text-sm text-muted-foreground">
              Plan your perfect trip with AI-powered recommendations and personalized itineraries.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/trip-planning" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Plan a Trip
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Explore Destinations
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                support@aitravelplanner.com
              </li>
              <li className="text-sm text-muted-foreground">
                1234 AI Street, San Francisco, CA 94103
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AI Travel Planner. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;