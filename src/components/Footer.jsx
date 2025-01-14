import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/logo.png";
import heroBg from "../assets/hero-bg.png";
import { useTheme } from "../context/themeContext"; // Importing the useTheme hook

const Footer = () => {
  const { darkMode } = useTheme(); // Accessing darkMode from context

  return (
    <footer
      className="relative bg-cover bg-center text-white py-16 px-4 sm:px-8"
      style={{
        backgroundImage: `url(${heroBg})`, // Background image
      }}
    >
      {/* Black translucent overlay with dynamic opacity based on dark mode */}
      <div
        className={`absolute inset-0 ${
          darkMode ? "bg-black/80" : "bg-black/40"
        }`} // Darker in dark mode, lighter in light mode
        style={{
          backgroundColor: darkMode ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.4)", // Fallback for transparency
        }}
      ></div>

      <div className="relative container mx-auto">
        {/* Footer Sections Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
          {/* First Section - Logo, Description, and Follow Us */}
          <div className="space-y-4">
            <img src={logo} alt="TechnoIT Logo" className="mb-4" />
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Consequuntur adipisicing elit. Lorem ipsum dolor sit amet.
            </p>
            <p className="text-2xl text-blue-400 cursor-pointer">Follow Us</p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="hover:text-blue-500 transition duration-300"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="hover:text-blue-500 transition duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="#"
                className="hover:text-blue-500 transition duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="hover:text-blue-500 transition duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>

          {/* Second Section - Services */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-blue-400">Services</h3>
            <p>Web Design</p>
            <p>App Development</p>
            <p>Cloud Services</p>
            <p>Domain and Hosting</p>
            <p>SEO Optimization</p>
            <p>Social Media</p>
          </div>

          {/* Third Section - Information */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-blue-400">Information</h3>
            <p>About</p>
            <p>Pricing</p>
            <p>Team</p>
            <p>Portfolio</p>
            <p>FAQs</p>
            <p>Blogs</p>
            <p>Blog Details</p>
            <p>Coming Soon</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>

          {/* Fourth Section - Contact Info and Newsletter */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-blue-400">Contacts</h3>
            <p>101 West Town, PBO 12345, United States</p>
            <p>+1 1234 56 789</p>
            <p>contact@example.com</p>

            {/* Newsletter Section */}
            <h3 className="text-xl font-semibold text-blue-400 mt-4">
              Newsletter
            </h3>
            <p>
              Don't miss to subscribe to our new feeds, kindly fill the form
              below.
            </p>
            <div className="mt-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-6 py-3 rounded-full border border-gray-500 bg-black/50 text-white focus:outline-none placeholder-gray-400"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="relative text-center mt-8 text-gray-400 text-sm sm:text-base">
        <p>© TechnoIT 2023 - Designed by ZThemes</p>
      </div>
    </footer>
  );
};

export default Footer;
