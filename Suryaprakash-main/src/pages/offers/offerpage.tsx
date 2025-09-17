// src/pages/Offerpage.tsx
import React from "react";

const Offerpage: React.FC = () => {
  const offers = [
    {
      title: "Early Bird Scholarship",
      description: "Get 20% off if you enroll before September 30th.",
      validity: "Valid until 30 Sep 2025",
    },
    {
      title: "Group Enrollment Discount",
      description: "Enroll 3 or more students together and get 15% off each.",
      validity: "Ongoing",
    },
    {
      title: "Summer Workshop Offer",
      description: "Free course materials for students joining summer workshops.",
      validity: "Valid for July-August 2025",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Special Offers</h1>
      <p className="text-gray-600">
        Check out the latest offers and discounts for students and courses.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
          >
            <h2 className="text-lg font-semibold text-gray-900">{offer.title}</h2>
            <p className="text-sm text-gray-600 mt-1">{offer.description}</p>
            <p className="text-xs text-gray-500 mt-2">{offer.validity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offerpage;
