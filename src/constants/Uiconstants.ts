
export const COLORS = {
  primary: "#0D9488",
  primaryLight: "#CCFBF1",
  secondary: "#7C3AED",
  accent: "#F59E0B",
  background: "#f8f9fa", // ✅ Make sure this exists
  

  // Unique updated backgrounds
  navbar: "#ccfbf1", // Light Teal
  sidebar: "#FDF4FF",  // Light Lavender

  footer: "#E2E8F0",
  textPrimary: "#374151",
  textSecondary: "#6B7280",
  textDisabled: "#9CA3AF",
  border: "#E5E7EB",
  white: "#FFFFFF",

  success: "#16A34A",
  danger: "#DC2626",
  warning: "#FACC15",
};





export const FONTS = {
  // Main heading (pages, dashboard titles)
  header: {
    fontFamily: "'Inter', sans-serif", 
    fontWeight: 600,
    fontSize: "28px",
    color: COLORS.primary,
  },

  // Sub-header (section titles, modal headers)
  subHeader: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
    fontSize: "20px",
    color: COLORS.textPrimary,
  },

  // Card title
  cardHeader: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
    fontSize: "16px",
    color: COLORS.textPrimary,
  },

  // Card subtitle
  cardSubHeader: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 400,
    fontSize: "14px",
    color: COLORS.textSecondary,
  },

  // Paragraph text
  paragraph: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 400,
    fontSize: "14px",
    color: COLORS.textPrimary,
  },

  // Muted text / helper text
  subParagraph: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 300,
    fontSize: "13px",
    color: COLORS.textSecondary,
  },

  // Highlighted description text
  description: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 400,
    fontSize: "13px",
    color: COLORS.danger,
  },

  // Table headers
  tableHeader: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 600,
    fontSize: "14px",
    color: COLORS.textPrimary,
  },
};
