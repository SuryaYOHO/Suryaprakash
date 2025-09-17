// src/pages/attendance/Attendance.tsx
import React from "react";

const Attendance: React.FC = () => {
  const attendanceRecords = [
    { date: "2025-09-01", subject: "Mathematics", status: "Present" },
    { date: "2025-09-02", subject: "Physics", status: "Absent" },
    { date: "2025-09-03", subject: "Chemistry", status: "Present" },
    { date: "2025-09-04", subject: "English", status: "Present" },
    { date: "2025-09-05", subject: "History", status: "Absent" },
  ];

  const totalDays = attendanceRecords.length;
  const presentDays = attendanceRecords.filter(r => r.status === "Present").length;
  const attendancePercentage = ((presentDays / totalDays) * 100).toFixed(2);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Attendance</h1>
      <p className="text-gray-600">
        Track your attendance for each subject and overall percentage.
      </p>

      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Overall Attendance</h2>
        <p className="text-gray-700">
          Present: {presentDays} / {totalDays} days
        </p>
        <p className="text-gray-700">Attendance Percentage: {attendancePercentage}%</p>
      </div>

      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Attendance Records</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Date</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Subject</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {attendanceRecords.map((record, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2 text-sm text-gray-600">{record.date}</td>
                  <td className="px-4 py-2 text-sm text-gray-600">{record.subject}</td>
                  <td
                    className={`px-4 py-2 text-sm font-medium ${
                      record.status === "Present" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {record.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
