import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce site with React, Node.js, and Stripe integration. Features product filtering, cart system, and user authentication.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    github: "#",
    liveDemo: "#"
  },
  {
    title: "Task Management App",
    description: "Kanban-style task manager with drag-and-drop functionality. Supports team collaboration and real-time updates.",
    tags: ["React", "Firebase", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    github: "#",
    liveDemo: "#"
  },
  {
    title: "AI Image Generator",
    description: "Web app that generates custom artwork using OpenAI's DALL-E API. Users can download and share creations.",
    tags: ["Next.js", "OpenAI API", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1677442135136-760c813a743a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    github: "#",
    liveDemo: "#"
  }
];


export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleProjects = isMobile && !showAll ? projects.slice(0, 1) : projects;

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
      <motion.h2
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-rose-500">My Projects</span>
      </motion.h2>

      <motion.p 
        className="text-center text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        Here are some of my featured projects. Each one was built to solve real problems and showcase different technical skills.
      </motion.p>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>

      {/* Show More / Show Less button */}
      {isMobile && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
}

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
    className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
  >
    <div className="relative h-48 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <div className="flex gap-3 flex-wrap">
          {project.tags.map((tag, i) => (
            <span 
              key={i}
              className="text-xs font-medium px-2 py-1 bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>

    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
      
      <div className="flex gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          aria-label="GitHub Repository"
        >
          <FiGithub className="text-lg" /> Code
        </a>
        <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          aria-label="Live Demo"
        >
          <FiExternalLink className="text-lg" /> Live Demo
        </a>
      </div>
    </div>
  </motion.div>
);
