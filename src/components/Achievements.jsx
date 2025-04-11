import React from "react";
import { motion } from "framer-motion";

export default function Achievements() {
  const items = [
    {
      title: "Completed Bug Bounty",
      issuer: "Texes College",
      year: 2020,
    },
    {
      title: "Top 1 in National Level Hackathon",
      issuer: "CSIT Association",
      year: 2019,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <motion.h2
        className="text-4xl font-bold text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Achievements
      </motion.h2>

      <div className="space-y-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="text-sm text-gray-300 mt-1">
              {item.issuer} • {item.year}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
