import React from "react";
// components/About.jsx
export default function About() {
  return (
    <div className="md:w-1/2 space-y-6 px-6 py-8 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white rounded-xl shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
      <h2 className="text-4xl font-bold mb-4">About Me</h2>
      <p className="text-lg leading-relaxed mb-4">
        Hi, I'm Aayush Khadka, a passionate <strong>BSc CSIT</strong> student focusing on web development and building meaningful user experiences. With a strong foundation in frontend technologies like <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>, I’m now diving into backend technologies like <strong>Node.js</strong>.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        I believe in clean, efficient code and continuous learning. I strive to create beautiful, responsive, and interactive web applications that provide an outstanding user experience.
      </p>
      <div className="flex items-center space-x-4 mt-6">
        <img 
          src="./san.jpeg" 
          alt="Aayush Khadka"
          className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
        />
        <div>
          <h3 className="text-xl font-semibold">Aayush Khadka</h3>
          <p className="text-sm">Frontend Developer | Node.js Enthusiast</p>
        </div>
      </div>
    </div>
  );
}
