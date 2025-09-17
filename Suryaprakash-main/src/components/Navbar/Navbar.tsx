import React, { useState, useEffect } from "react";
import { COLORS, FONTS } from "@/constants/Uiconstants";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        backgroundColor: COLORS.navbar,
        color: COLORS.white,
        padding: "0.75rem 1.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "64px",
        boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.15)" : "none",
        zIndex: 1000,
        transition: "all 0.3s ease-in-out",
        transform: scrolled ? "translateY(0)" : "translateY(0)",
      }}
    >
      {/* Left Section - Logo / Brand */}
      <div 
        style={{ 
          ...FONTS.header, 
          color: COLORS.textPrimary, 
          fontSize: "20px",
          transition: "all 0.3s ease",
          transform: scrolled ? "scale(1)" : "scale(1.05)"
        }}
      >
        INSTITUTE app
      </div>

      {/* Right Section - Navigation / Profile */}
      <div
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          backgroundColor: COLORS.accent,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "14px",
          fontWeight: 600,
          color: COLORS.white,
          cursor: "pointer",
          transition: "all 0.3s ease",
          transform: "scale(1)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        icon
      </div>
    </nav>
  );
};

export default Navbar;