// src/components/Sidebar.tsx
import React from "react";
import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiLayers,
  FiTag,
  FiUser,
  FiUsers,
  FiCheckSquare,
  FiCreditCard,
  FiInfo,
  FiMail,
  FiBarChart2,
  FiBookOpen,
  FiLogOut,
  FiMenu,
} from "react-icons/fi";
import { motion } from "framer-motion";

interface SidebarProps {
  isOpen: boolean;
  toggle: () => void;
}

const menuItems = [
  { icon: <FiUser />, label: "Profile", path: "/profile" },
  { icon: <FiHome />, label: "Dashboard", path: "/dashboard" },
  { icon: <FiTag />, label: "Offers", path: "/offers" },
 { icon: <FiLayers />, label: "Projects", path: "/projects" },
  { icon: <FiUsers />, label: "Team", path: "/team" },
  { icon: <FiCheckSquare />, label: "Attendance", path: "/attendance" },
  { icon: <FiCreditCard />, label: "Payments", path: "/payments" },
  { icon: <FiInfo />, label: "About", path: "/about" },
  { icon: <FiMail />, label: "Contact", path: "/contact" },
  { icon: <FiBarChart2 />, label: "Analytics", path: "/analytics" },
  { icon: <FiBookOpen />, label: "Student Management", path: "/students" },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggle }) => {
  return (
    <motion.aside
      className="flex flex-col h-screen shadow-xl bg-gray-100 relative"
      animate={{ width: isOpen ? 200 : 80 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      initial={false}
    >
      {/* Logo */}
      <motion.div
        className="flex items-center justify-center m-4 rounded-lg bg-gray-200 shadow-md h-12 overflow-hidden"
        animate={{ width: isOpen ? 150 : 48 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9wOYE0tPgXR94Lp46wwENKOU7m6PSutO0_A&s"
          alt="Logo"
          className="object-contain w-40 h-15"
        />
      </motion.div>

      {/* Toggle button */}
      <div className="flex justify-start px-3 mb-2">
        <button
          onClick={toggle}
          className="flex items-center justify-center h-10 w-10 rounded-lg bg-gray-300 shadow hover:bg-gray-400"
        >
          <FiMenu size={18} className="text-gray-800" />
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-3 space-y-2 overflow-y-auto">
        <style>{`nav::-webkit-scrollbar { display: none; }`}</style>
        {menuItems.map((item) => (
          <NavLink
            to={item.path}
            key={item.label}
            className={({ isActive }) =>
              `flex items-center rounded-lg px-5 py-2 transition-all duration-150 shadow-sm ${
                isActive
                  ? "bg-gray-300 text-gray-900 font-semibold"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900"
              }`
            }
          >
            <span className="text-base">{item.icon}</span>
            <motion.span
              className="ml-2 text-sm whitespace-nowrap"
              animate={{ opacity: isOpen ? 1 : 0, width: isOpen ? "auto" : 0 }}
              transition={{ duration: 0.18 }}
            >
              {item.label}
            </motion.span>
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="mt-auto px-3 pb-5">
        <button
          onClick={() => console.log("Logout clicked")}
          className="flex items-center rounded-lg px-3 py-2 w-full cursor-pointer transition-all duration-150 shadow-md bg-red-500 text-white hover:bg-red-600"
        >
          <FiLogOut className="text-base" />
          <motion.span
            className="ml-2 text-sm"
            animate={{ opacity: isOpen ? 1 : 0, width: isOpen ? "auto" : 0 }}
            transition={{ duration: 0.18 }}
          >
            Logout
          </motion.span>
        </button>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
