import React from "react";
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

const techStack = {
  Languages: ["JavaScript", "Dart", "C++", "SQL"],
  Frontend: ["HTML", "CSS", "React", "Vue.js"],
  Backend: ["Node.js", "Express"],
  Mobile: ["Flutter", "React Native"],
  Database: ["MongoDB", "MySQL"],
  Tools: ["Git", "Firebase", "Postman", "VS Code"],
};

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
};

export default function TechStack() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <motion.h2
        className="text-5xl font-bold text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text mb-16"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        🚀 My Tech Stack
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {Object.entries(techStack).map(([category, items], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl border border-white/10 p-6 hover:-translate-y-2 transform transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {items.map((item, i) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium backdrop-blur-md border border-white/20 hover:bg-white/30 transition-all"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <span className="text-lg">{techIcons[item] || "⚙️"}</span>
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
