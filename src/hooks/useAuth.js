import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in (using token in localStorage)
    const token = localStorage.getItem('auth_token');
    if (token) {
      // In a real app, you would validate the token with your backend
      try {
        const userData = JSON.parse(localStorage.getItem('user_data'));
        setUser(userData);
      } catch (error) {
        console.error('Error parsing user data', error);
        localStorage.removeItem('auth_token');
        localStorage.removeItem('user_data');
      }
    }
    setIsLoading(false);
  }, []);

  const login = (userData, token) => {
    localStorage.setItem('auth_token', token);
    localStorage.setItem('user_data', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_data');
    setUser(null);
    navigate('/');
  };

  return { user, isLoading, login, logout };
};