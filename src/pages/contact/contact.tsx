// src/pages/contact/Contact.tsx
import React from "react";

const Contact: React.FC = () => (
  <div className="p-6 space-y-4">
    <h1 className="text-2xl font-bold text-gray-900">Contact Us</h1>
    <p className="text-gray-600">
      Have questions or need more information? Reach out to us through any of the following channels.
    </p>

    <div className="space-y-2">
      <p><strong>Address:</strong> 123 Education Lane, Knowledge City, State, 12345</p>
      <p><strong>Phone:</strong> +91 98765 43210</p>
      <p><strong>Email:</strong> info@abcinstitute.edu</p>
      <p><strong>Website:</strong> www.abcinstitute.edu</p>
    </div>

    <div className="mt-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Send us a message</h2>
      <form className="space-y-3 max-w-md">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          placeholder="Your Message"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows={4}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
);

export default Contact;
