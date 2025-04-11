import React from "react";
// components/Blog.jsx
export default function Blog() {
    const posts = [
      {
        title: "How I Built an Amazon Clone",
        summary: "A breakdown of the UI structure, challenges, and tools I used.",
        link: "#",
      },
    ];
  
    return (
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold">Blog</h2>
        <ul className="space-y-4">
          {posts.map((post, index) => (
            <li key={index} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">{post.title}</h3>
              <p className="text-gray-600">{post.summary}</p>
              <a href={post.link} className="text-indigo-600 hover:underline">
                Read more →
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  