import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/mainlayout";
import Dashboard from "./pages/dashboard/dashboard";
import Profile from "./pages/profile/profile";
import Projects from "./pages/project/project";
import Team from "./pages/team";
import Offerpage from "./pages/offers/offerpage";
import Attendance from "./pages/attendence";
import Payments from "./pages/payments";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Analytics from "./pages/analytics";
import Students from "./pages/students";


const App: React.FC = () => {
  return (
    <Routes>
      {/* MainLayout contains Sidebar + Navbar and an Outlet */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="projects" element={<Projects />} />
        <Route path="offers" element={<Offerpage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="team" element={<Team />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="payments" element={<Payments />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="students" element={<Students />} />
      </Route>
    </Routes>
  );
};

export default App;
