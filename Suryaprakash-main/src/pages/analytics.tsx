// src/pages/analytics/Analytics.tsx
import React from "react";

const Analytics: React.FC = () => (
  <div className="p-6 space-y-6">
    <h1 className="text-2xl font-bold text-gray-900">Institute Analytics</h1>
    <p className="text-gray-600">
      Monitor important institute metrics and performance indicators.
    </p>

    {/* Attendance Analytics */}
    <div className="bg-white rounded-lg p-6 shadow border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Attendance Overview</h2>
      <p className="text-gray-600">Track student attendance trends for the current semester.</p>
      <div className="mt-4 h-40 bg-gray-100 flex items-center justify-center">
        <span className="text-gray-400">Attendance Chart Placeholder</span>
      </div>
    </div>

    {/* Enrollment Analytics */}
    <div className="bg-white rounded-lg p-6 shadow border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Course Enrollments</h2>
      <p className="text-gray-600">See how many students are enrolled in each course.</p>
      <div className="mt-4 h-40 bg-gray-100 flex items-center justify-center">
        <span className="text-gray-400">Enrollment Chart Placeholder</span>
      </div>
    </div>

    {/* Exam Results Analytics */}
    <div className="bg-white rounded-lg p-6 shadow border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Exam Performance</h2>
      <p className="text-gray-600">Analyze students' exam performance and grade distributions.</p>
      <div className="mt-4 h-40 bg-gray-100 flex items-center justify-center">
        <span className="text-gray-400">Exam Results Chart Placeholder</span>
      </div>
    </div>
  </div>
);

export default Analytics;
