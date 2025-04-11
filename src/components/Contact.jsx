import React from "react";
// components/Contact.jsx
export default function Contact() {
    return (
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold">Contact Me</h2>
        <form className="space-y-4 max-w-xl">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg border border-gray-300"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg border border-gray-300"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 rounded-lg border border-gray-300"
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    );
  }
  