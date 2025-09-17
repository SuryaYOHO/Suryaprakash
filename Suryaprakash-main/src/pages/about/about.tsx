// src/pages/about/About.tsx
import React from "react";

const About: React.FC = () => (
  <div className="p-6 space-y-4">
    <h1 className="text-2xl font-bold text-gray-900">About Our Institute</h1>
    <p className="text-gray-600">
      Welcome to <strong>ABC Institute</strong>, where we are committed to delivering quality education and fostering a culture of excellence. 
      Our aim is to empower students with knowledge, skills, and values that prepare them for future success.
    </p>

    <h2 className="text-xl font-semibold text-gray-800">Our Mission</h2>
    <p className="text-gray-600">
      To provide a supportive learning environment that encourages innovation, critical thinking, and personal growth.
    </p>

    <h2 className="text-xl font-semibold text-gray-800">Our Vision</h2>
    <p className="text-gray-600">
      To be a leading institute recognized for academic excellence, research, and community engagement.
    </p>

    <h2 className="text-xl font-semibold text-gray-800">Core Values</h2>
    <ul className="list-disc list-inside text-gray-600">
      <li>Integrity and honesty in all our actions</li>
      <li>Commitment to lifelong learning</li>
      <li>Fostering creativity and innovation</li>
      <li>Promoting inclusivity and diversity</li>
      <li>Encouraging collaboration and teamwork</li>
    </ul>
  </div>
);

export default About;
