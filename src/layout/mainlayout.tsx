import React, { useState } from "react";
import Sidebar from "../components/sidebar1";
import Navbar from "../components/navbar1";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // must match Sidebar's animate width values (px)
  const sidebarWidth = isSidebarOpen ? 20 : 20;

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggle={() => setIsSidebarOpen(s => !s)} />

      {/* Main area */}
      <div
        className="flex-1 flex flex-col   transition-all duration-300"
        style={{ marginLeft: sidebarWidth  }}
      >
        <Navbar sidebarOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(s => !s)} />

        {/* content area (below fixed navbar) */}
        <main className="flex-1 p-4  mt-16 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
