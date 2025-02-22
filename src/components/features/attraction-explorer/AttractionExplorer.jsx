import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import { MapPin, Star } from 'lucide-react'; 

const AttractionExplorer = ({ latitude, longitude }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [attractions, setAttractions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch attractions based on search term and location
    const fetchAttractions = async () => {
      setLoading(true);
      setError(null);

      try {
        // **IMPORTANT**: 
        // 1. Replace with your actual API call
        // 2. Adjust the API endpoint and parameters as needed
        const response = await fetch(
          `https://api.example.com/attractions?q=${searchTerm}&lat=${latitude}&lon=${longitude}`
        ); 

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setAttractions(data); // Assuming the API returns an array of attractions
      } catch (error) {
        setError('Error fetching attractions. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    // Only fetch attractions if searchTerm, latitude, and longitude are available
    if (searchTerm && latitude && longitude) {
      fetchAttractions();
    } else {
      setAttractions([]); // Clear attractions if any of the required values are missing
    }
  }, [searchTerm, latitude, longitude]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Discover Nearby</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input 
          placeholder="Search for attractions, restaurants, etc." 
          className="mb-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
        />

        {loading && (
          <p>Loading attractions...</p>
        )}

        {error && (
          <p className="text-red-500">{error}</p>
        )}

        {!loading && !error && attractions.length === 0 && (
          <p>No attractions found.</p>
        )}

        <div className="space-y-4">
          {attractions.map((attraction, index) => (
            <div 
              key={index} 
              className="flex items-start border rounded-lg p-4 space-x-4 hover:bg-gray-50"
            >
              <div className="p-2 rounded-full bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">{attraction.name}</h4> 
                {attraction.rating && (
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-4 w-4 mr-1" /> 
                    <span>{attraction.rating}</span>
                  </div>
                )}
                <p className="text-sm text-gray-600">{attraction.address}</p> 
              </div>
            </div>
          ))}
        </div>
        {/* Add a "Load More" button if needed */}
        {attractions.length > 0 && (
          <div className="text-center">
            <Button variant="outline">Load More</Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
AttractionExplorer.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
};

export default AttractionExplorer;
