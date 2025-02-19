import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

const api = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Add a request interceptor for authentication
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const saveTrip = async (tripData) => {
  return api.post('/trips', tripData);
};

export const getUserTrips = async () => {
  return api.get('/trips');
};

export const getTripById = async (tripId) => {
  return api.get(`/trips/${tripId}`);
};

export default api;