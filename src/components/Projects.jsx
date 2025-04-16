import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    "title": "Food App",
    "description": "A food app that allows users to browse menus, place orders, and enjoy a seamless food delivery experience.",
    "tags": ["Flutter", "Node.js", "MongoDB"],
    "image": "./food-delivery.jpg",
    "github": "https://github.com/sandeshkhadka283/Food-App-UI/tree/main",
    "liveDemo": "#"
  }
  ,
  {
    "title": "Restaurant Management System",
    "description": "A platform to manage hotel billing processes, streamlining reservations, check-ins, check-outs, and invoice generation.",
    "tags": ["Flutter", "Node.js", "MongoDB"],
    "image": "./Hotel-Management-System.gif",
    "github": "https://github.com/sandeshkhadka283/restapp",
    "liveDemo": "#"
  }
  
  ,{
    "title": "GitHub Actions Flutter",
    "description": "Set up GitHub Actions jobs to automate the building of APKs, run tests, and generate bundle files as output.",
    "tags": ["Flutter", "GitHub Actions"],
    "image": "./git-flutter.png",
    "github": "https://github.com/sandeshkhadka283/githubactionsflutter-",
    "liveDemo": "."
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
      <div className="flex justify-center mt-6">
             <a
                href="https://github.com/sandeshkhadka283?tab=repositories" // 🔁 Replace with your actual GitHub URL
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition rounded-full"
            >
             <FiGithub className="text-lg" />
            View All Projects on GitHub
              </a>
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
