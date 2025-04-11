import React from "react";
// components/Projects.jsx
// components/Projects.jsx
export default function Projects() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-semibold">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
          <img 
            src="https://via.placeholder.com/400x200" 
            alt="Amazon Clone" 
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold">Amazon Clone</h3>
          <p className="text-gray-600 mb-4">A full UI replica of Amazon built using HTML, CSS, and JavaScript.</p>
          <a 
            href="https://github.com/your-username/amazon-clone" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            View on GitHub
          </a>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
          <img 
            src="https://via.placeholder.com/400x200" 
            alt="Todo App" 
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold">Todo App</h3>
          <p className="text-gray-600 mb-4">A task manager app built to practice JavaScript DOM manipulation.</p>
          <a 
            href="https://github.com/your-username/todo-app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            View on GitHub
          </a>
        </div>

        {/* Add more projects with similar structure */}
      </div>
    </div>
  );
}
