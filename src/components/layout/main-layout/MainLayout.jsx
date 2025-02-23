import React, { useState } from 'react';
import { Outlet } from 'react-router-dom'; 
import Navbar from './Navbar'; 
import Footer from './Footer'; 
import Sidebar from './Sidebar'; 

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100"> 
      {/* Sidebar (Mobile-first, hidden by default on larger screens) */}
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden"> 
        <Navbar toggleSidebar={toggleSidebar} />
        <main className="flex-1 overflow-y-auto p-6"> {/* Adjust padding as needed */}
          <Outlet /> {/* This renders the child routes */}
        </main>
        <Footer /> 
      </div>
    </div>
  );
};

export default MainLayout;
