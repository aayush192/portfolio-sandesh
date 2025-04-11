import React from "react";

export default function About() {
  return (
    <div className="md:w-1/2 space-y-6 px-6 py-8 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white rounded-xl shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
      <h2 className="text-4xl font-bold mb-4">About Me</h2>
      <p className="text-lg leading-relaxed mb-4">
        Hi, I'm <strong>Sandesh Khadka</strong> — a passionate and versatile developer specialized in frontend, backend, and app development. I recently graduated with a degree in <strong>BSc. CSIT</strong> and have since been working on turning ideas into responsive and interactive digital experiences.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        My frontend stack includes <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and modern libraries like <strong>React</strong> and <strong>Vue.js</strong>. On the backend, I work with <strong>Node.js</strong>, <strong>Express</strong>, and databases like <strong>MongoDB</strong> and <strong>MySQL</strong>. I'm also experienced in building cross-platform mobile apps using <strong>Flutter</strong> and <strong>React Native</strong>.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        I love clean, efficient code and continuously push myself to learn and improve. Whether it's a web app, a mobile solution, or a full-stack project — I'm all about delivering great user experiences.
      </p>
      <div className="flex items-center space-x-4 mt-6">
        <img 
          src="./san.jpeg" 
          alt="Sandesh Khadka"
          className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
        />
        <div>
          <h3 className="text-xl font-semibold">Sandesh Khadka</h3>
          <p className="text-sm">Frontend | Backend | App Developer</p>
        </div>
      </div>
    </div>
  );
}

