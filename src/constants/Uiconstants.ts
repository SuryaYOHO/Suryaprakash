
export const COLORS = {
  primary: "#123456",
  primaryLight: "#abcdef",
  secondary: "#789abc",
  accent: "#fedcba",
  navbar: "#111111",
  sidebar: "#222222",
  footer: "#333333",
  textPrimary: "#444444",
  textSecondary: "#555555",
  textDisabled: "#666666",
  border: "#777777",
  white: "#ffffff",
  success: "#00ff00",
  danger: "#ff0000",
  warning: "#ffff00",
  background: "#f0f0f0", // <--- add this line
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
