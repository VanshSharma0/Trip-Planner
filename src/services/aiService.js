import axios from 'axios';

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const BASE_URL = 'https://api.openai.com/v1';

const aiService = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`
  }
});

export const generateTripPlan = async (destination, startDate, endDate, budget, interests) => {
  try {
    const response = await aiService.post('/chat/completions', {
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are an expert travel planner with deep knowledge of destinations worldwide.'
        },
        {
          role: 'user',
          content: `Create a detailed travel itinerary for ${destination} from ${startDate} to ${endDate} with a budget of $${budget}. Consider these interests: ${interests}. Include daily activities, recommended accommodations, local transportation, and estimated costs.`
        }
      ],
      temperature: 0.7
    });
    
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error generating trip plan:', error);
    throw error;
  }
};

export default aiService;