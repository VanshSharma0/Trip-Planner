import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card';
import { fetchWeatherForecast } from '../../api/weather'; // Assuming you'll have a weather API

const WeatherForecast = ({ latitude, longitude }) => {
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getForecast = async () => {
      try {
        if (latitude && longitude) {
          const data = await fetchWeatherForecast(latitude, longitude);
          setForecast(data);
        }
      } catch (err) {
        setError('Error fetching weather data.');
      }
    };

    getForecast();
  }, [latitude, longitude]);

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Weather Forecast</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-red-500">Error: {error}</p> 
        </CardContent>
      </Card>
    );
  }

  if (!forecast) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Weather Forecast</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Loading weather information...</p>
        </CardContent>
      </Card>
    );
  }

  // **IMPORTANT**: Adjust this section based on the structure of the data
  // returned by your `fetchWeatherForecast` function.
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weather Forecast</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Example using placeholder data, replace with actual forecast */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {forecast.daily.map((day, index) => (
            <div key={index} className="border rounded-lg p-4">
              <p>{day.date}</p> {/* Adjust property names as needed */}
              <p>{day.temperature}°C</p> {/* Adjust property names as needed */}
              {/* ... other weather details */}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherForecast;

