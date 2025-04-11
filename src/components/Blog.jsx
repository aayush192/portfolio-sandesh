import React from "react";
import { motion } from "framer-motion";
import { FaRegEdit } from "react-icons/fa";  // Pen icon for blog posts

export default function Blog() {
  const posts = [
    {
      title: "How I Built a TrHunt game",
      summary: "A breakdown of the UI structure, challenges, and tools I used.",
      link: "https://github.com/aayush192/trhunt",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 bg-gradient-to-br from-indigo-100 to-pink-100 rounded-xl">
      <motion.h2
        className="text-4xl font-bold text-center bg-gradient-to-r from-indigo-600 to-pink-600 text-transparent bg-clip-text mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
       Blog
      </motion.h2>

      <div className="space-y-6">
        {posts.map((post, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 backdrop-blur-lg border border-gray-300 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="flex items-center gap-2">
              <FaRegEdit className="text-indigo-600 dark:text-indigo-400 text-xl" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{post.title}</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{post.summary}</p>
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800 mt-4 block text-lg font-medium"
            >
              Read more →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
