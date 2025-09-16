import React, { useState } from "react";
import { NavLink } from "react-router-dom"; 
import { COLORS, FONTS } from "@/constants/Uiconstants";
import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  Settings,
} from "lucide-react";

const Sidebar: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const menuItems = [
    { label: "Dashboard", icon: <LayoutDashboard size={18} />, path: "/" },
    { label: "Projects", icon: <FolderKanban size={18} />, path: "/projects" },
    { label: "Tasks", icon: <CheckSquare size={18} />, path: "/tasks" },
    { label: "Settings", icon: <Settings size={18} />, path: "/settings" },
  ];

  return (
    <aside
      style={{
        backgroundColor: COLORS.sidebar,
        width: "240px",
        height: "100vh",
        position: "fixed",
        top: "64px",
        left: 0,
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "2px 0 6px rgba(0,0,0,0.05)",
        fontWeight: 500,
        transition: "transform 0.3s ease-in-out",
      }}
    >
      {/* Menu Section */}
      <nav>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {menuItems.map((item, index) => (
            <li key={index} style={{ marginBottom: "0.75rem" }}>
              <NavLink
                to={item.path}
                style={({ isActive }) => ({
                  ...FONTS.paragraph,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  textDecoration: "none",
                  padding: "0.6rem 0.8rem",
                  borderRadius: "8px",
                  backgroundColor: isActive 
                    ? COLORS.primary 
                    : hoveredItem === index 
                      ? COLORS.primaryLight 
                      : "transparent",
                  color: isActive 
                    ? COLORS.white 
                    : hoveredItem === index 
                      ? COLORS.primary 
                      : COLORS.textPrimary,
                  transition: "all 0.2s ease-in-out",
                  transform: hoveredItem === index ? "translateX(5px)" : "translateX(0)",
                })}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span
                  style={{
                    transition: "transform 0.2s ease",
                    transform: hoveredItem === index ? "scale(1.1)" : "scale(1)",
                  }}
                >
                  {item.icon}
                </span>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer inside Sidebar */}
      <div
        style={{
          ...FONTS.subParagraph,
          fontSize: "12px",
          color: COLORS.textSecondary,
          textAlign: "center",
          opacity: 0.7,
          transition: "opacity 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = "1";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = "0.7";
        }}
      >
        © 2025 Task Manager
      </div>
    </aside>
  );
};

export default Sidebar;