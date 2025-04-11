import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <motion.h2
        className="text-4xl font-bold text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 s bg-clip-text mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h2>

      <motion.form
        className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg p-8 space-y-6 transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg bg-white/80 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-lg bg-white/80 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <textarea
          rows="4"
          placeholder="Your Message"
          className="w-full p-3 rounded-lg bg-white/80 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        ></textarea>
       <button
  type="submit"
  className="w-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white py-3 rounded-lg font-semibold opacity-80 hover:bg-gradient-to-r hover:from-pink-700 hover:to-indigo-700 transition-all duration-1000"
>
  Send Message
</button>

      </motion.form>
    </div>
  );
}
