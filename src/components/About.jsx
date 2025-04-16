import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cyan-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900" />

      <motion.div
        className="relative bg-white/90 dark:bg-gray-800/90 border border-gray-100 dark:border-gray-700 backdrop-blur-xl rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 lg:p-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-10 lg:gap-12">
          {/* Text Section - Order changes on mobile */}
          <div className={`w-full ${isMobile ? 'order-2' : 'lg:w-3/5'} space-y-4 sm:space-y-6 text-center lg:text-left`}>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-500 to-rose-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              About Me
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
            Hey there!  I'm <span className="font-semibold text-indigo-600 dark:text-indigo-400">Sandesh Khadka</span>,  a passionate full-stack and app developer with a <span className="font-semibold">BSc. CSIT</span> background.  I love crafting seamless digital experiences, whether it's a sleek mobile app or a powerful web application.
            </motion.p>

            {/* Extra Info */}
            {(isExpanded || !isMobile) && (
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  My stack includes <span className="font-semibold">HTML</span>, <span className="font-semibold">CSS</span>, <span className="font-semibold">JavaScript</span>, <span className="font-semibold">React</span>, <span className="font-semibold">Node.js</span>, <span className="font-semibold">MongoDB</span>, <span className="font-semibold">MySQL</span>, and <span className="font-semibold">Flutter</span>.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  I love writing clean, scalable code and solving real-world challenges.
                </p>
              </motion.div>
            )}

            {/* Show More Button (Mobile Only) */}
            {isMobile && (
              <div className="pt-2">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="px-5 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl font-medium shadow transition-all text-sm sm:text-base"
                >
                  {isExpanded ? "Show Less" : "Show More"}
                </button>
              </div>
            )}

            {/* Contact Button - Hidden on mobile when collapsed */}
            {(!isMobile || isExpanded) && (
              <motion.div
                className={`pt-4 ${isMobile ? 'text-center' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <a
                  href="#contact"
                  className="inline-block px-5 py-2 sm:px-6 sm:py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-xl shadow transition-all text-sm sm:text-base"
                >
                  Get in Touch
                </a>
              </motion.div>
            )}
          </div>

          {/* Image Section - Now properly sized for mobile */}
          <motion.div
            className={`${isMobile ? 'order-1 w-3/4 mx-auto mb-6' : 'lg:w-2/5 w-full max-w-sm'} relative`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="group relative rounded-2xl overflow-hidden shadow-lg border-2 border-cyan-100 dark:border-cyan-700 aspect-square">
              <img
                src="./san.jpeg"
                alt="Sandesh Khadka"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}