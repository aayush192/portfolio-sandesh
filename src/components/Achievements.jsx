import React from "react";
// components/Achievements.jsx
export default function Achievements() {
    const items = [
      {
        title: "Completed JavaScript Bootcamp",
        issuer: "Udemy",
        year: 2024,
      },
      {
        title: "Top 5 in Intercollege Coding Challenge",
        issuer: "CSIT Association",
        year: 2023,
      },
    ];
  
    return (
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold">Achievements</h2>
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={index} className="bg-white p-4 rounded-xl shadow-md">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.issuer} • {item.year}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  