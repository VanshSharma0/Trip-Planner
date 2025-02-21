import { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card';
import { Button } from '../../ui/button';
import { Clock, MapPin, DollarSign, Utensils, Car, Hotel } from 'lucide-react';

const ItineraryDay = ({ day, activities }) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Day {day}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start space-x-4 p-3 rounded-lg bg-secondary/20">
              <div className="p-2 rounded-full bg-primary/10">
                {activity.type === 'attraction' && <MapPin className="h-5 w-5 text-primary" />}
                {activity.type === 'food' && <Utensils className="h-5 w-5 text-primary" />}
                {activity.type === 'transport' && <Car className="h-5 w-5 text-primary" />}
                {activity.type === 'accommodation' && <Hotel className="h-5 w-5 text-primary" />}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{activity.name}</h4>
                  <span className="text-sm text-muted-foreground flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {activity.time}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{activity.description}</p>
                <div className="flex items-center mt-2 text-sm">
                  <DollarSign className="h-4 w-4 mr-1" />
                  <span>Estimated cost: ${activity.cost}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

// Define prop types for ItineraryDay
ItineraryDay.propTypes = {
  day: PropTypes.number.isRequired,
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['attraction', 'food', 'transport', 'accommodation']).isRequired,
      name: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      cost: PropTypes.number.isRequired,
    })
  ).isRequired,
};

const ItineraryBuilder = ({ tripData }) => {
  const [isCustomizing, setIsCustomizing] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Your Itinerary</h2>
        <Button
          variant="outline"
          onClick={() => setIsCustomizing(!isCustomizing)}
        >
          {isCustomizing ? 'Save Changes' : 'Customize Itinerary'}
        </Button>
      </div>

      {tripData.days.map((day, index) => (
        <ItineraryDay
          key={index}
          day={index + 1}
          activities={day.activities}
        />
      ))}

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Trip Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p><strong>Total Duration:</strong> {tripData.days.length} days</p>
              <p><strong>Total Cost:</strong> ${tripData.totalCost}</p>
              <p><strong>Accommodation:</strong> {tripData.accommodation}</p>
              <p><strong>Transportation:</strong> {tripData.transportation}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// Define prop types for ItineraryBuilder
ItineraryBuilder.propTypes = {
  tripData: PropTypes.shape({
    days: PropTypes.arrayOf(
      PropTypes.shape({
        activities: PropTypes.array.isRequired,
      })
    ).isRequired,
    totalCost: PropTypes.number.isRequired,
    accommodation: PropTypes.string.isRequired,
    transportation: PropTypes.string.isRequired,
  }).isRequired,
};

export default ItineraryBuilder;
