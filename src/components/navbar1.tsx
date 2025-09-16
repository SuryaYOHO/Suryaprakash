import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FiBell,
  FiMessageSquare,
  FiChevronDown,
  FiSearch,
  FiUser,
  FiSettings,
  FiFilter,
} from "react-icons/fi";

interface NavbarProps {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ sidebarOpen }) => {
  const sidebarWidth = sidebarOpen ? 210 : 80;

  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const profileRef = useRef<HTMLDivElement | null>(null);

  // Close profile dropdown if click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.header
      className="bg-white shadow-lg h-16 flex items-center justify-between px-4 fixed top-0 z-20"
      style={{ left: sidebarWidth }}
      animate={{
        left: sidebarWidth,
        width: `calc(100% - ${sidebarWidth}px)`,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Left: Search + Filter */}
      <div className="flex items-center flex-1 max-w-md space-x-3">
        {/* Search */}
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="text-gray-400" size={18} />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-xl bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Filter */}
        <div className="relative">
          <button
            onClick={() => {
              setShowFilters((prev) => !prev);
              setShowMessages(false);
              setShowNotifications(false);
              setShowProfileMenu(false);
            }}
            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200"
          >
            <FiFilter />
          </button>
          {showFilters && (
            <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg p-3 z-30">
              <p className="text-sm font-semibold text-gray-700">Filters</p>
              <div className="mt-2 space-y-2 text-sm text-gray-600">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Students</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Teachers</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Courses</span>
                </label>
                <button className="w-full mt-3 bg-blue-500 text-white py-1.5 rounded-lg hover:bg-blue-600">
                  Apply Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right: Notifications, Messages, Profile (same as before) */}
      <div className="flex items-center space-x-4 relative">
        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => {
              setShowNotifications((prev) => !prev);
              setShowMessages(false);
              setShowProfileMenu(false);
              setShowFilters(false);
            }}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
          >
            <FiBell />
          </button>
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg p-3 z-30">
              <p className="text-sm font-semibold text-gray-700">Notifications</p>
              <ul className="mt-2 space-y-2 text-sm text-gray-600">
                <li>📢 New project assigned</li>
                <li>✅ Task completed</li>
                <li>⚡ Server restarted</li>
              </ul>
            </div>
          )}
        </div>

        {/* Messages */}
        <div className="relative">
          <button
            onClick={() => {
              setShowMessages((prev) => !prev);
              setShowNotifications(false);
              setShowProfileMenu(false);
              setShowFilters(false);
            }}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
          >
            <FiMessageSquare />
          </button>
          {showMessages && (
            <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg p-3 z-30">
              <p className="text-sm font-semibold text-gray-700">Messages</p>
              <ul className="mt-2 space-y-2 text-sm text-gray-600">
                <li>💬 John: "Meeting at 3 PM?"</li>
                <li>💬 Sarah: "Update on project..."</li>
                <li>💬 Admin: "System maintenance"</li>
              </ul>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="h-6 border-l border-gray-200" />

        {/* Profile */}
        <div className="relative" ref={profileRef}>
          <div
            className="flex items-center cursor-pointer"
            onClick={() => {
              setShowProfileMenu((prev) => !prev);
              setShowMessages(false);
              setShowNotifications(false);
              setShowFilters(false);
            }}
          >
            <div className="w-9 h-9 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
              JD
            </div>
            <div className="ml-2 hidden sm:block">
              <p className="text-sm font-medium text-gray-800">John Doe</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
            <FiChevronDown className="ml-2 text-gray-400" />
          </div>

          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-30">
              <ul className="py-2 text-sm text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 flex items-center space-x-2 cursor-pointer">
                  <FiUser /> <span>Profile</span>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 flex items-center space-x-2 cursor-pointer">
                  <FiSettings /> <span>Settings</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
