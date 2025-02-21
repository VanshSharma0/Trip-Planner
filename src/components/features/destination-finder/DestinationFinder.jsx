import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';
import { Slider } from '../../ui/slider';
import { Globe, Sun, Snowflake, DollarSign } from 'lucide-react';

const DestinationFinder = () => {
  const [preferences, setPreferences] = useState({
    budget: 2000,
    season: 'summer',
    activityLevel: 'moderate',
    duration: 7,
    travelStyle: 'balanced'
  });

  const [suggestions, setSuggestions] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would integrate with your AI service
    // For now, we'll simulate a response
    setSuggestions([
      {
        name: "Barcelona, Spain",
        description: "Perfect for summer travel with a mix of culture, beaches, and vibrant city life.",
        matchScore: 95,
        highlights: ["Gothic Quarter", "Beach Activities", "Food Scene"],
        estimatedCost: 1800
      },
      // Add more destinations...
    ]);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Find Your Perfect Destination</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label>Budget per person (USD)</Label>
              <div className="flex items-center space-x-4">
                <DollarSign className="h-4 w-4" />
                <Slider
                  min={500}
                  max={10000}
                  step={100}
                  value={[preferences.budget]}
                  onValueChange={([value]) => setPreferences({...preferences, budget: value})}
                />
                <span className="min-w-[60px]">${preferences.budget}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Preferred Season</Label>
                <div className="flex space-x-2">
                  <Button
                    type="button"
                    variant={preferences.season === 'summer' ? 'default' : 'outline'}
                    onClick={() => setPreferences({...preferences, season: 'summer'})}
                  >
                    <Sun className="h-4 w-4 mr-2" />
                    Summer
                  </Button>
                  <Button
                    type="button"
                    variant={preferences.season === 'winter' ? 'default' : 'outline'}
                    onClick={() => setPreferences({...preferences, season: 'winter'})}
                  >
                    <Snowflake className="h-4 w-4 mr-2" />
                    Winter
                  </Button>
                </div>
              </div>

              {/* Add more preference controls */}
            </div>

            <Button type="submit" className="w-full">
              <Globe className="h-4 w-4 mr-2" />
              Find Destinations
            </Button>
          </form>
        </CardContent>
      </Card>

      {suggestions && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Recommended Destinations</h3>
          {suggestions.map((destination, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-semibold">{destination.name}</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {destination.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-primary">
                      {destination.matchScore}% match
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Est. ${destination.estimatedCost}
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-sm font-medium">Highlights:</div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {destination.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-secondary rounded-full text-xs"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default DestinationFinder;