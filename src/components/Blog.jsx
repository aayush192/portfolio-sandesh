import React from "react";
import { motion } from "framer-motion";
import { FaRegEdit } from "react-icons/fa";

export default function Blog() {
  const posts = [
    {
      title: "How I Built a TrHunt Game",
      summary: "A breakdown of the UI structure, challenges, and tools I used.",
      link: "https://github.com/aayush192/trhunt",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-l from-cyan-500 to-rose-500 dark:from-cyan-500 dark:to-rose-800 mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Blog
        </motion.h2>

        <div id="blog" className="space-y-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              className="relative group bg-white/80 dark:bg-gray-800/50 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl z-0" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <FaRegEdit className="text-indigo-600 dark:text-indigo-400 text-xl" />
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {post.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {post.summary}
                </p>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                >
                  Read more →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
