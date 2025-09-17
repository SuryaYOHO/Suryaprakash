import React from "react";
import { COLORS } from "../../constants/Uiconstants";
const Task: React.FC = () => {
  return (
    <div>
      <h1 style={{ color: COLORS.primary }}>Task</h1>
      <p style={{ color: COLORS.textPrimary }}>Manage your tasks here</p>
    </div>
  );
};

export default Task;
