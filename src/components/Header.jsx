import React, { useState, useEffect } from "react";
import { FaMoon, FaSun, FaChevronDown, FaBars } from "react-icons/fa"; // Import FaBars for the hamburger menu
import logo from "../assets/logo.png"; // Import your logo
import { useTheme } from "../context/themeContext"; // Import the ThemeContext
import { Link } from "react-router-dom"; // Import Link for routing

const Header = () => {
  const { darkMode, handleToggle } = useTheme(); // Use the darkMode and handleToggle from context
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Track if menu is open on smaller screens

  // Handle scroll background changes
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolling
          ? darkMode
            ? "bg-gray-900"
            : "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </div>

        {/* Navigation (For larger screens) */}
        <nav
          className={`hidden md:flex space-x-6 items-center ${
            scrolling
              ? darkMode
                ? "text-white"
                : "text-black"
              : "text-white"
          }`}
        >
          <Link to="/" className="hover:text-blue-500 transition">
            Home
          </Link>
          <Link to="/services" className="hover:text-blue-500 transition">
            Services
          </Link>
          <div className="relative group">
            <button
              className="flex items-center space-x-2 hover:text-blue-500 transition focus:outline-none"
            >
              <span>Menu</span>
              <FaChevronDown className="text-sm" />
            </button>
            {/* Dropdown Menu */}
            <div
              className={`absolute right-0 mt-2 shadow-lg rounded-lg w-40 transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
              }`}
            >
              <Link
                to="/about"
                className="block px-4 py-2 hover:text-blue-500 transition"
              >
                About
              </Link>
              <Link
                to="/faq"
                className="block px-4 py-2 hover:text-blue-500 transition"
              >
                FAQ
              </Link>
              <Link
                to="/termsandconditions"
                className="block px-4 py-2 hover:text-blue-500 transition"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/privacypolicy"
                className="block px-4 py-2 hover:text-blue-500 transition"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
            LogIn/SignUp
          </button>
        </nav>

        {/* Mobile Menu Button (Hamburger) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)} // Toggle menu visibility
          className="md:hidden text-white"
          aria-label="Toggle Navigation"
        >
          <FaBars className="text-xl" />
        </button>

        {/* Dark Mode Toggle */}
        <button
          onClick={handleToggle} // Use the handleToggle from context
          className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 transition-all duration-300"
          title="Toggle Dark Mode"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? (
            <FaSun className="text-yellow-400 text-xl" />
          ) : (
            <FaMoon className="text-gray-700 dark:text-gray-300 text-xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu (When menuOpen is true) */}
      {menuOpen && (
        <div
          className={`md:hidden bg-${darkMode ? "gray-800" : "white"} text-${
            darkMode ? "white" : "black"
          } space-y-4 p-4`}
        >
          <Link to="/" className="block hover:text-blue-500 transition">
            Home
          </Link>
          <Link to="/services" className="block hover:text-blue-500 transition">
            Services
          </Link>
          <Link to="/about" className="block hover:text-blue-500 transition">
            About
          </Link>
          <Link to="/faq" className="block hover:text-blue-500 transition">
            FAQ
          </Link>
          <Link to="/termsandconditions" className="block hover:text-blue-500 transition">
            Terms & Conditions
          </Link>
          <Link to="/privacypolicy" className="block hover:text-blue-500 transition">
            Privacy Policy
          </Link>
          <button className="block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
            LogIn/SignUp
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
