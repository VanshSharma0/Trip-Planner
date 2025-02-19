import { Button } from '../../components/ui/button';
import { Link } from 'react-router-dom';
import { PlaneTakeoff, MapPin, Calendar, Sparkles } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center p-6 border rounded-lg bg-card">
    <div className="p-3 rounded-full bg-primary/10 mb-4">
      <Icon className="h-6 w-6 text-primary" />
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-center text-muted-foreground">{description}</p>
  </div>
);

const HomePage = () => {
  const features = [
    {
      icon: PlaneTakeoff,
      title: "AI-Powered Trip Planning",
      description: "Get personalized trip recommendations based on your preferences and budget."
    },
    {
      icon: Calendar,
      title: "Smart Itineraries",
      description: "Generate detailed day-by-day itineraries with activities, restaurants, and attractions."
    },
    {
      icon: MapPin,
      title: "Destination Discovery",
      description: "Discover hidden gems and popular spots tailored to your travel style."
    },
    {
      icon: Sparkles,
      title: "Budget Optimization",
      description: "Maximize your experience while keeping costs within your desired budget."
    }
  ];

  return (
    <div className="container mx-auto py-12">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center space-y-6 py-12">
        <h1 className="text-4xl md:text-6xl font-bold">
          Plan Your Dream Trip with AI
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Let our AI help you create the perfect travel itinerary, find hidden gems, 
          and optimize your budget for an unforgettable experience.
        </p>
        <Link to="/trip-planning">
          <Button size="lg">Start Planning</Button>
        </Link>
      </div>

      {/* Features Section */}
      <div className="mt-20">
        <h2 className="text-3xl font-semibold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-20 bg-primary/5 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to plan your next adventure?</h2>
        <p className="text-muted-foreground mb-6">
          Create your first AI-powered travel itinerary in minutes.
        </p>
        <Link to="/trip-planning">
          <Button>Get Started</Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;