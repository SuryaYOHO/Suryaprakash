// src/pages/Team.tsx
import React from "react";

const Team: React.FC = () => {
  const staffMembers = [
    {
      name: "Dr. Ananya Sharma",
      role: "Principal",
      email: "ananya.sharma@institute.edu",
      phone: "+91 98765 43210",
    },
    {
      name: "Mr. Rajesh Kumar",
      role: "Head of Administration",
      email: "rajesh.kumar@institute.edu",
      phone: "+91 91234 56789",
    },
    {
      name: "Ms. Priya Singh",
      role: "Academic Coordinator",
      email: "priya.singh@institute.edu",
      phone: "+91 99887 66554",
    },
    {
      name: "Dr. Karthik Rao",
      role: "Senior Lecturer - Science Department",
      email: "karthik.rao@institute.edu",
      phone: "+91 98765 12345",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Our Team</h1>
      <p className="text-gray-600">
        Meet the dedicated faculty and staff who make learning at our institute exceptional.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {staffMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
          >
            <h2 className="text-lg font-semibold text-gray-900">{member.name}</h2>
            <p className="text-sm text-gray-600">{member.role}</p>
            <p className="text-xs text-gray-500 mt-2">Email: {member.email}</p>
            <p className="text-xs text-gray-500">Phone: {member.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
