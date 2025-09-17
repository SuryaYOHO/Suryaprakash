// src/routes/AppRoutes.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";

import Profile from "../pages/profile/profile";
import Courses from "../pages/courses/courses";
import About from "../pages/about/about";
import Projects from "../pages/project/project";
import Tasks from "../pages/task/task";
import Team from "../pages/team";
import Offerpage from "../pages/offers/offerpage";






const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Dashboard */}
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Other pages */}
      <Route path="/projects" element={<Projects />} />
      
      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/task" element={<Tasks />} />
      <Route path="/team" element={<Team />} />
        <Route path="/offers" element={<Offerpage />} />

      {/* 404 fallback */}
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
};

export default AppRoutes;
