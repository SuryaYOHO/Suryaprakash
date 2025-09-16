// src/pages/students/Students.tsx
import React from "react";

const Students: React.FC = () => (
  <div className="p-6 space-y-6">
    <h1 className="text-2xl font-bold text-gray-900">Student Management</h1>
    <p className="text-gray-600">
      Manage all student information, enrollment, and academic records.
    </p>

    {/* Student List */}
    <div className="bg-white rounded-lg p-6 shadow border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Student List</h2>
      <p className="text-gray-600 mb-4">View and search all enrolled students.</p>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">ID</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Name</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Class</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Attendance</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Grades</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-200">
              <td className="px-4 py-2 text-sm text-gray-700">101</td>
              <td className="px-4 py-2 text-sm text-gray-700">John Doe</td>
              <td className="px-4 py-2 text-sm text-gray-700">Grade 10</td>
              <td className="px-4 py-2 text-sm text-gray-700">95%</td>
              <td className="px-4 py-2 text-sm text-gray-700">A</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="px-4 py-2 text-sm text-gray-700">102</td>
              <td className="px-4 py-2 text-sm text-gray-700">Jane Smith</td>
              <td className="px-4 py-2 text-sm text-gray-700">Grade 12</td>
              <td className="px-4 py-2 text-sm text-gray-700">89%</td>
              <td className="px-4 py-2 text-sm text-gray-700">B+</td>
            </tr>
            {/* Add more students dynamically later */}
          </tbody>
        </table>
      </div>
    </div>

    {/* Add New Student */}
    <div className="bg-white rounded-lg p-6 shadow border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Add New Student</h2>
      <p className="text-gray-600 mb-4">Register new students into the system.</p>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Student Name"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          type="text"
          placeholder="Class/Grade"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Add Student
        </button>
      </form>
    </div>
  </div>
);

export default Students;
