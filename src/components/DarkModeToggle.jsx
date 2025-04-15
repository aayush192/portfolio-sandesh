import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="absolute top-2 right-6 z-50 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg transition hover:scale-110"
    >
      {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-indigo-600" />}
    </button>
  );
}
