import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Amazon Clone",
    description: "A full UI replica of Amazon built using HTML, CSS, and JavaScript.",
    image: "https://via.placeholder.com/400x200",
    github: "https://github.com/your-username/amazon-clone",
  },
  {
    title: "Todo App",
    description: "A task manager app built to practice JavaScript DOM manipulation.",
    image: "https://via.placeholder.com/400x200",
    github: "https://github.com/your-username/todo-app",
  },
];

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <motion.h2
        className="text-4xl font-bold text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
         My Projects
      </motion.h2>

      <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm text-blue-400 hover:underline"
              >
                🔗 View on GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
