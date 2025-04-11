import { useState, useEffect } from 'react';
import About from './components/About';
import Projects from './components/Projects';
import TechStack from './components/Skills';
import ProfileImage from './components/ProfileImage';
import Contact from './components/Contact';
import Achievements from './components/Achievements';
import Blog from './components/Blog';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Apply/remove 'dark' class to <html> on toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-12 space-y-16">
      {/* Top bar with buttons */}
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a
          href="/Sandesh-Khadka-copy.pdf"
          download
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition duration-300"
        >
          Download CV
        </a>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-800 dark:bg-white dark:text-gray-900 text-white font-semibold py-2 px-4 rounded-lg shadow transition duration-300"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      {/* Sections */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto gap-12 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white p-8 rounded-xl shadow-lg">
        <About />
        <ProfileImage />
      </section>

      <section className="max-w-6xl mx-auto bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white p-8 rounded-xl shadow-lg">
        <Projects />
      </section>

      <section className="max-w-6xl mx-auto bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white p-8 rounded-xl shadow-lg">
        <TechStack />
      </section>

      <section className="max-w-6xl mx-auto bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white p-8 rounded-xl shadow-lg">
        <Achievements />
      </section>

      <section className="max-w-6xl mx-auto bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white p-8 rounded-xl shadow-lg">
        <Contact />
      </section>

      <section className="max-w-6xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        <Blog />
      </section>
    </div>
  );
}
