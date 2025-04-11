import React from "react";
// components/Skills.jsx
// components/Skills.jsx
export default function Skills() {
    const frontendSkills = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'];
    const backendSkills = ['Node.js', 'Express', 'MongoDB'];
    const toolsSkills = ['Git', 'GitHub', 'VS Code', 'NPM'];
  
    return (
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold">Skills</h2>
  
        {/* Frontend Skills */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-800">Frontend</h3>
          <div className="flex flex-wrap gap-4">
            {frontendSkills.map(skill => (
              <span
                key={skill}
                className="px-6 py-2 bg-blue-200 rounded-full text-sm font-medium text-blue-800 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
  
        {/* Backend Skills */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-800">Backend</h3>
          <div className="flex flex-wrap gap-4">
            {backendSkills.map(skill => (
              <span
                key={skill}
                className="px-6 py-2 bg-green-200 rounded-full text-sm font-medium text-green-800 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
  
        {/* Tools Skills */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-800">Tools</h3>
          <div className="flex flex-wrap gap-4">
            {toolsSkills.map(skill => (
              <span
                key={skill}
                className="px-6 py-2 bg-yellow-200 rounded-full text-sm font-medium text-yellow-800 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  