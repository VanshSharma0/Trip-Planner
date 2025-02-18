import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/main-layout/MainLayout';
import HomePage from './pages/home/HomePage';
import TripPlanningPage from './pages/trip-planning/TripPlanningPage';
import ItineraryPage from './pages/itinerary/ItineraryPage';
import DestinationsPage from './pages/destinations/DestinationsPage';
import ProfilePage from './pages/profile/ProfilePage';
import AuthPage from './pages/auth/AuthPage';
import SettingsPage from './pages/settings/SettingsPage';
import AboutPage from './pages/about/AboutPage';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="trip-planning" element={<TripPlanningPage />} />
          <Route path="itinerary/:tripId" element={<ItineraryPage />} />
          <Route path="destinations" element={<DestinationsPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;