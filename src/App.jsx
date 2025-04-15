import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import About from './components/About';
import Projects from './components/Projects';
import TechStack from './components/Skills';
import Contact from './components/Contact';
import Achievements from './components/Achievements';
import Blog from './components/Blog';
import Navbar from './components/Navbar'; // New component

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* New: Sticky Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="px-6 py-12 space-y-16 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-xl transition-colors duration-300">
  <About />
  
</section>


        {/* Projects */}
        <Projects />

        {/* Tech Stack */}
        <TechStack />

        {/* Achievements */}
        <Achievements />

        {/* Contact */}
        <Contact />

        {/* Blog */}
        <Blog />
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto py-8 border-t border-gray-200 dark:border-gray-700 flex justify-between">
        <a
          href="/Sandesh-Khadka-copy.pdf"
          download
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg shadow transition"
        >
          Download CV
        </a>
        <p className="text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Sandesh Khadka
        </p>
      </footer>
    </div>
  );
}