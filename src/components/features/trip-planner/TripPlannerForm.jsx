import { useState } from 'react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';
import { Calendar } from '../../ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/popover';
import { Calendar as CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';

const TripPlannerForm = () => {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [budget, setBudget] = useState('');
  const [interests, setInterests] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add AI trip planning logic here
    console.log({ destination, startDate, endDate, budget, interests });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="destination">Where do you want to go?</Label>
        <Input 
          id="destination" 
          placeholder="Enter a city, country, or region" 
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Start Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start text-left">
                {startDate ? format(startDate, 'PPP') : (
                  <span className="text-muted-foreground">Pick a start date</span>
                )}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={startDate}
                onSelect={setStartDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label>End Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start text-left">
                {endDate ? format(endDate, 'PPP') : (
                  <span className="text-muted-foreground">Pick an end date</span>
                )}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={endDate}
                onSelect={setEndDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="budget">What's your budget?</Label>
        <Input
          id="budget"
          type="number"
          placeholder="Enter amount in USD"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="interests">What are your interests?</Label>
        <Input
          id="interests"
          placeholder="E.g., museums, beaches, hiking, food"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
        />
      </div>

      <Button type="submit" className="w-full">Generate Trip Plan</Button>
    </form>
  );
};

export default TripPlannerForm;