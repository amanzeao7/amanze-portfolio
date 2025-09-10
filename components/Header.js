import { useState, useEffect } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="py-6 flex items-center justify-between">
      {/* Logo */}
      <div className="text-lg font-semibold text-brand dark:text-white">Amanze</div>

      {/* Navigation + toggle button container */}
      <div className="flex items-center gap-4">
        <nav className="space-x-6 text-sm text-gray-600 hidden md:flex dark:text-gray-300">
          <a href="#about" className="hover:text-brand">About</a>
          <a href="#projects" className="hover:text-brand">Projects</a>
          <a href="#experience" className="hover:text-brand">Experience</a>
          <a href="#contact" className="hover:text-brand">Contact</a>
        </nav>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-1 border rounded text-sm text-gray-700 dark:text-gray-200"
        >
          {darkMode ? "Light" : "Dark"}
        </button>
      </div>
    </header>
  );
}
