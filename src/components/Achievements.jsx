import React from "react";
import { motion } from "framer-motion";

export default function Achievements() {
  const achievements = [
    {
      title: "Completed Bug Bounty",
      issuer: "Texes College",
      year: 2020,
      icon: "🏆",
    },
    {
      title: "Top 1 in National Level Hackathon",
      issuer: "CSIT Association",
      year: 2019,
      icon: "🥇",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      scale: 1.03,
      boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block mb-3 text-sm md:text-base font-semibold tracking-wider text-cyan-600 uppercase dark:text-cyan-400">
            My Honors
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-cyan-500 to-rose-500 text-transparent bg-clip-text">
              Achievements
            </span>
          </h2>
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Recognitions and awards that highlight my dedication and expertise.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8 cursor-pointer overflow-hidden group transition-all duration-300 border border-gray-200 dark:border-gray-700"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative flex items-start gap-4 md:gap-6">
                <span className="text-4xl">{item.icon}</span>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-sm md:text-base text-gray-500 dark:text-gray-400">
                      {item.issuer}
                    </span>
                    <span className="text-gray-400 dark:text-gray-500">•</span>
                    <span className="text-sm md:text-base text-cyan-600 dark:text-cyan-400 font-medium">
                      {item.year}
                    </span>
                  </div>
                </div>
              </div>

              {/* Subtle glow effect */}
              <div className="absolute -z-10 inset-0 bg-cyan-400/10 dark:bg-cyan-500/10 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}