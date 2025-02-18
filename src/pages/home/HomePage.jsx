import { Button } from '../../components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center space-y-12 py-12">
        <h1 className="text-4xl md:text-6xl font-bold text-center">Plan Your Dream Trip with AI</h1>
        <p className="text-xl text-muted-foreground text-center max-w-2xl">
          Let our AI help you create the perfect travel itinerary, find hidden gems, 
          and optimize your budget for an unforgettable experience.
        </p>
        <Link to="/trip-planning">
          <Button size="lg" className="gap-2">
            Get Started <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;