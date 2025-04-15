import React from "react";
import { motion } from "framer-motion";
import { FiSend, FiMail, FiUser, FiMessageSquare, FiPhone } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter, FaDiscord } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="inline-block mb-3 text-sm md:text-base font-semibold tracking-wider text-cyan-600 uppercase dark:text-cyan-400">
            Let's Connect
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-cyan-500 to-rose-500 text-transparent bg-clip-text">
              Get In Touch
            </span>
          </h2>
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Whether you have a project in mind or just want to say hello, I'd love to hear from you.
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"
        >
          {/* Contact Info */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 text-transparent bg-clip-text">
                Contact Information
              </h3>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
                Feel free to reach out through any of these channels. I typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="p-2 md:p-3 rounded-xl bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 dark:text-cyan-300">
                  <FiMail className="text-xl md:text-2xl" />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-gray-800 dark:text-white">Email Me</h4>
                  <a 
                    href="mailto:you@example.com" 
                    className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 transition-colors text-sm md:text-base"
                  >
                    ksandesh283@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="p-2 md:p-3 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300">
                  <FiPhone className="text-xl md:text-2xl" />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-gray-800 dark:text-white">Call Me</h4>
                  <a 
                    href="tel:+1234567890" 
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors text-sm md:text-base"
                  >
                    +977 9861343700
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="p-2 md:p-3 rounded-xl bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300">
                  <FaDiscord className="text-xl md:text-2xl" />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-gray-800 dark:text-white">Discord</h4>
                  <span className="text-purple-600 dark:text-purple-400 text-sm md:text-base">
                    username#1234
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2 md:pt-4">
              <h4 className="text-base md:text-lg font-semibold text-gray-800 dark:text-white mb-3 md:mb-4">
                Follow me on
              </h4>
              <div className="flex gap-3 md:gap-4">
                <motion.a 
                  href="https://github.com/sandeshkhadka283" 
                  aria-label="GitHub"
                  whileHover={{ y: -3 }}
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white p-2 md:p-3 rounded-xl bg-gray-100 dark:bg-gray-700/50"
                >
                  <FaGithub size={20} className="md:w-6 md:h-6" />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/sandeshkhadka936" 
                  aria-label="LinkedIn"
                  whileHover={{ y: -3 }}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 p-2 md:p-3 rounded-xl bg-blue-100/50 dark:bg-blue-900/20"
                >
                  <FaLinkedin size={20} className="md:w-6 md:h-6" />
                </motion.a>
                <motion.a 
                  href="/" 
                  aria-label="Twitter"
                  whileHover={{ y: -3 }}
                  className="text-sky-500 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 p-2 md:p-3 rounded-xl bg-sky-100/50 dark:bg-sky-900/20"
                >
                  <FaTwitter size={20} className="md:w-6 md:h-6" />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Contact Form - Always appears first on mobile */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 border border-gray-200 dark:border-gray-700 order-1 lg:order-2">
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 text-transparent bg-clip-text mb-6 md:mb-8">
              Send a Message
            </h3>
            
            <form className="space-y-4 md:space-y-6">
              <div className="space-y-4 md:space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    className="block w-full pl-10 pr-4 py-2 md:py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition text-sm md:text-base"
                  />
                </div>

                {/* Email Field */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    className="block w-full pl-10 pr-4 py-2 md:py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition text-sm md:text-base"
                  />
                </div>

                {/* Message Field */}
                <div className="relative">
                  <div className="absolute top-2 md:top-3 left-3">
                    <FiMessageSquare className="h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                  </div>
                  <textarea
                    rows="4"
                    required
                    placeholder="Your Message"
                    className="block w-full pl-10 pr-4 py-2 md:py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition text-sm md:text-base"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex justify-center items-center gap-2 md:gap-3 bg-gradient-to-r from-cyan-500 to-rose-400 hover:from-cyan-600 hover:to-rose-600 text-white font-medium md:font-semibold py-3 md:py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl active:shadow-md text-sm md:text-base"
              >
                <FiSend className="text-lg" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}