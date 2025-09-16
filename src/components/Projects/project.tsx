import React from "react";
import { COLORS } from "../../constants/Uiconstants";

const Projects: React.FC = () => {
  // Example data: courses or student projects
  const courses = [
    { name: "Mathematics 101", students: 40, status: "Ongoing" },
    { name: "Physics Lab", students: 25, status: "Ongoing" },
    { name: "Computer Science Project", students: 12, status: "Completed" },
    { name: "Chemistry Assignment", students: 30, status: "Pending" },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 style={{ color: COLORS.primary }} className="text-2xl font-bold">
        Courses & Projects
      </h1>
      <p style={{ color: COLORS.textPrimary }} className="text-sm">
        Manage all courses, assignments, and student projects here
      </p>

      {/* Courses / Projects List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
          >
            <h2 className="text-lg font-semibold text-gray-900">{course.name}</h2>
            <p className="text-sm text-gray-500">Students Enrolled: {course.students}</p>
            <p
              className={`mt-2 inline-block px-2 py-1 text-xs font-medium rounded-full ${
                course.status === "Ongoing"
                  ? "bg-green-100 text-green-700"
                  : course.status === "Completed"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {course.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
