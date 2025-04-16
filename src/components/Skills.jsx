import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiDart,
  SiCplusplus,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiReact,
  SiVuedotjs,
  SiNodedotjs,
  SiExpress,
  SiFlutter,
  SiMongodb,
  SiGit,
  SiFirebase,
  SiPostman,
} from "react-icons/si";

// Tech categories
const techStack = {
  Languages: ["JavaScript", "Dart", "C++", "SQL"],
  Frontend: ["HTML", "CSS", "React", "Vue.js"],
  Backend: ["Node.js", "Express"],
  Mobile: ["Flutter", "React Native"],
  Database: ["MongoDB", "MySQL"],
  Tools: ["Git", "Firebase", "Postman", "VS Code"],
};

// Icons mapped to technologies
const techIcons = {
  JavaScript: <SiJavascript />,
  Dart: <SiDart />,
  "C++": <SiCplusplus />,
  SQL: <SiMysql />,
  HTML: <SiHtml5 />,
  CSS: <SiCss3 />,
  React: <SiReact />,
  "Vue.js": <SiVuedotjs />,
  "Node.js": <SiNodedotjs />,
  Express: <SiExpress />,
  Flutter: <SiFlutter />,
  "React Native": <SiReact />,
  MongoDB: <SiMongodb />,
  MySQL: <SiMysql />,
  Git: <SiGit />,
  Firebase: <SiFirebase />,
  Postman: <SiPostman />,
  "VS Code": <span className="text-lg">⚙️</span>,
};

export default function TechStack() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true); // Ensure the component is fully mounted
    }, 1000); // Timeout duration can be adjusted
    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="text-xl">Loading...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-24 transition-colors duration-300">
      <motion.h2
        className="text-3xl md:text-5xl font-extrabold text-center mb-20 tracking-tight"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-rose-500 dark:from-cyan-400 dark:to-rose-400">
          My Tech Stack
        </span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {Object.entries(techStack).map(([category, items], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            className={`tech-category ${isMounted ? "loaded" : ""} relative rounded-2xl p-6 border shadow-lg transition-all duration-300 backdrop-blur-sm bg-white/80 border-gray-200/50 hover:shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:bg-gray-800/50 dark:border-gray-700/50 dark:hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]`}
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-500/10 to-red-500/10 dark:from-cyan-500/10 dark:to-purple-500/10" />
            <h3 className="text-2xl font-bold mb-5 relative z-10 text-blue-600 dark:text-cyan-300">
              {category}
            </h3>

            <div className="grid grid-cols-2 gap-3 relative z-10">
              {items.map((item) => (
                <div
                  key={item}
                  className="tech-item flex items-center gap-3 p-3 rounded-xl border transition-all duration-200 bg-gray-100/50 border-gray-300/30 hover:border-blue-400/50 hover:bg-blue-200/10 dark:bg-gray-900/40 dark:border-gray-600/30 dark:hover:border-cyan-400/50 dark:hover:bg-cyan-500/10"
                >
                  <span className="text-xl text-blue-500 dark:text-cyan-400">
                    {techIcons[item] || <span className="text-red-400">❓</span>}
                  </span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
