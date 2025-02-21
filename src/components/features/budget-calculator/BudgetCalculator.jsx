import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';
import { Button } from '../../ui/button';
import { Slider } from '../../ui/slider';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip
} from 'recharts';

const COLORS = ['#2563eb', '#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe'];

const BudgetCalculator = () => {
  const [tripDetails, setTripDetails] = useState({
    duration: 7,
    travelers: 2,
    accommodation: 100,
    transportation: 500,
    activities: 300,
    food: 50,
    miscellaneous: 200
  });

  const calculateTotal = () => {
    const daily = tripDetails.food;
    const fixed = tripDetails.transportation + tripDetails.miscellaneous;
    const accommodationTotal = tripDetails.accommodation * tripDetails.duration;
    const activitiesTotal = tripDetails.activities;
    const foodTotal = daily * tripDetails.duration * tripDetails.travelers;

    return fixed + accommodationTotal + activitiesTotal + foodTotal;
  };

  const chartData = [
    { name: 'Accommodation', value: tripDetails.accommodation * tripDetails.duration },
    { name: 'Transportation', value: tripDetails.transportation },
    { name: 'Activities', value: tripDetails.activities },
    { name: 'Food', value: tripDetails.food * tripDetails.duration * tripDetails.travelers },
    { name: 'Miscellaneous', value: tripDetails.miscellaneous }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Trip Budget Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label>Duration (days)</Label>
                <Slider
                  min={1}
                  max={30}
                  value={[tripDetails.duration]}
                  onValueChange={([value]) => 
                    setTripDetails({...tripDetails, duration: value})
                  }
                />
                <span className="text-sm text-muted-foreground">
                  {tripDetails.duration} days
                </span>
              </div>

              <div>
                <Label>Number of Travelers</Label>
                <Slider
                  min={1}
                  max={10}
                  value={[tripDetails.travelers]}
                  onValueChange={([value]) => 
                    setTripDetails({...tripDetails, travelers: value})
                  }
                />
                <span className="text-sm text-muted-foreground">
                  {tripDetails.travelers} travelers
                </span>
              </div>

              <div>
                <Label>Daily Accommodation Budget</Label>
                <Input
                  type="number"
                  value={tripDetails.accommodation}
                  onChange={(e) => 
                    setTripDetails({
                      ...tripDetails,
                      accommodation: parseInt(e.target.value) || 0
                    })
                  }
                  prefix="$"
                />
              </div>

              {/* Add more input fields for other categories */}
            </div>

            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                  >
                    {chartData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={COLORS[index % COLORS.length]} 
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="mt-6 p-4 bg-secondary rounded-lg">
            <div className="text-center">
              <div className="text-sm text-muted-foreground">
                Estimated Total Budget
              </div>
              <div className="text-3xl font-bold">
                ${calculateTotal().toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                ${(calculateTotal() / tripDetails.travelers).toLocaleString()} per person
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BudgetCalculator;