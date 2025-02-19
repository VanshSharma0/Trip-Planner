import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import TripPlannerForm from '../../components/features/trip-planner/TripPlannerForm';

const TripPlanningPage = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPlan, setGeneratedPlan] = useState(null);

  const handlePlanGeneration = (planData) => {
    setIsGenerating(true);
    // This would typically be an API call to your AI service
    setTimeout(() => {
      setGeneratedPlan({
        destination: planData.destination,
        dates: `${planData.startDate?.toLocaleDateString()} - ${planData.endDate?.toLocaleDateString()}`,
        summary: "Your personalized trip plan has been generated!",
        // This would be populated with real AI-generated content
        itinerary: []
      });
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="container mx-auto py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Plan Your Perfect Trip</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Trip Details</CardTitle>
          </CardHeader>
          <CardContent>
            <TripPlannerForm onSubmit={handlePlanGeneration} isLoading={isGenerating} />
          </CardContent>
        </Card>

        {generatedPlan && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Your Trip to {generatedPlan.destination}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p><strong>Dates:</strong> {generatedPlan.dates}</p>
                <p>{generatedPlan.summary}</p>
                {/* Here you would render the AI-generated itinerary */}
                <p className="text-muted-foreground">
                  Your full itinerary has been generated! You can now customize it or save it to your account.
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default TripPlanningPage;