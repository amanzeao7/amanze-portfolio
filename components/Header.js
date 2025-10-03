"use client"; // if using Next.js 13+ app directory

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Load dark mode from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("darkMode") === "true";
    setDarkMode(stored);
    if (stored) document.documentElement.classList.add("dark");
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
    document.documentElement.classList.toggle("dark", newMode);
  };

  // Scroll detection for active section (only on index page)
  useEffect(() => {
    if (router.pathname !== "/") return;

    const sections = ["about", "projects", "experience", "contact"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          if (scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [router.pathname]);

  // Scroll to section helper
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-4 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div className="text-lg font-semibold text-brand dark:text-white">Amanze</div>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-sm md:text-base">
          {router.pathname === "/" ? (
            <>
              <button
                onClick={() => scrollToSection("about")}
                className={`hover:text-brand ${activeSection === "about" ? "text-blue-500 font-semibold" : ""}`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className={`hover:text-brand ${activeSection === "projects" ? "text-blue-500 font-semibold" : ""}`}
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className={`hover:text-brand ${activeSection === "experience" ? "text-blue-500 font-semibold" : ""}`}
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`hover:text-brand ${activeSection === "contact" ? "text-blue-500 font-semibold" : ""}`}
              >
                Contact
              </button>
            </>
          ) : (
            // On other pages, navigate back to home with anchors
            <>
              <Link href="/#about" className="hover:text-brand">
                About
              </Link>
              <Link href="/#projects" className="hover:text-brand">
                Projects
              </Link>
              <Link href="/#experience" className="hover:text-brand">
                Experience
              </Link>
              <Link href="/#contact" className="hover:text-brand">
                Contact
              </Link>
            </>
          )}

          {/* Whisky Showcase */}
          <Link href="/showcase" className="hover:text-blue-500 font-semibold">
            Whisky Showcase
          </Link>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="px-3 py-1 border rounded text-sm text-gray-700 dark:text-gray-200"
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </nav>
      </div>
    </header>
  );
}
