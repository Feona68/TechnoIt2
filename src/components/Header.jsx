import React, { useState, useEffect } from "react";
import logo from "./logo.png"; // Import your logo

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  // Toggle Dark/Light Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  // Handle scroll background changes
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolling ? (darkMode ? "bg-gray-900" : "bg-white shadow-md") : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <a
            href="#home"
            className="text-gray-800 dark:text-gray-100 hover:text-blue-500 transition"
          >
            Home
          </a>
          <a
            href="#services"
            className="text-gray-800 dark:text-gray-100 hover:text-blue-500 transition"
          >
            Services
          </a>
          <div className="relative group">
            <button
              className="text-gray-800 dark:text-gray-100 hover:text-blue-500 transition focus:outline-none"
            >
              Menu
            </button>
            {/* Dropdown (visible on hover) */}
            <div
              className={`absolute right-0 mt-2 shadow-lg rounded-lg w-40 transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible ${
                darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-black"
              }`}
            >
              <a
                href="#about"
                className="block px-4 py-2 hover:text-blue-500 transition"
              >
                About
              </a>
              <a
                href="#pricing"
                className="block px-4 py-2 hover:text-blue-500 transition"
              >
                Pricing
              </a>
              <a
                href="#faq"
                className="block px-4 py-2 hover:text-blue-500 transition"
              >
                FAQ
              </a>
              <a
                href="#termsandconditions"
                className="block px-4 py-2 hover:text-blue-500 transition"
              >
                Terms & Conditions
              </a>
              <a
                href="#privacypolicy"
                className="block px-4 py-2 hover:text-blue-500 transition"
              >
                Privacy Policy
              </a>
            </div>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
            Get Quotes
          </button>
        </nav>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className={`h-6 w-6 rounded-full transition-all duration-300 ${
            darkMode ? "bg-yellow-400" : "bg-blue-600"
          }`}
          title="Toggle Dark Mode"
        ></button>
      </div>
    </header>
  );
};

export default Header;
