import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { saveTrip, getUserTrips } from '../services/api';

const useTripStore = create(
  persist(
    (set, get) => ({
      trips: [],
      currentTrip: null,
      isLoading: false,
      error: null,
      
      // Fetch user trips
      fetchTrips: async () => {
        set({ isLoading: true, error: null });
        try {
          const response = await getUserTrips();
          set({ trips: response.data, isLoading: false });
        } catch (error) {
          set({ error: error.message, isLoading: false });
        }
      },
      
      // Save a new trip
      createTrip: async (tripData) => {
        set({ isLoading: true, error: null });
        try {
          const response = await saveTrip(tripData);
          set(state => ({ 
            trips: [...state.trips, response.data],
            currentTrip: response.data,
            isLoading: false 
          }));
          return response.data;
        } catch (error) {
          set({ error: error.message, isLoading: false });
          throw error;
        }
      },
      
      // Set current trip for editing
      setCurrentTrip: (tripId) => {
        const trip = get().trips.find(t => t.id === tripId);
        set({ currentTrip: trip || null });
      },
      
      // Clear current trip
      clearCurrentTrip: () => set({ currentTrip: null }),
    }),
    {
      name: 'trip-storage',
      getStorage: () => localStorage,
    }
  )
);

export default useTripStore;