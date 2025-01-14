import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/themeContext";

const ContactForm = () => {
  const { darkMode } = useTheme();
  const formRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has occurred

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true); // Set to true when the animation starts
        }
      },
      { threshold: 0.5 }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, [hasAnimated]); // Dependency ensures it stops observing once animated

  return (
    <section
      className={`py-16 px-4 sm:px-8 ${
        darkMode ? "bg-gray-800" : "bg-gray-50"
      } ${hasAnimated ? "animate-slide-in" : ""}`}
      ref={formRef}
    >
      <div className="container mx-auto">
        {/* Title and Subtitle */}
        <div className="text-center">
          <h2
            className={`text-3xl sm:text-4xl font-normal text-transparent bg-clip-text ${
              darkMode
                ? "bg-gradient-to-r from-gray-400 to-blue-600"
                : "bg-gradient-to-r from-gray-700 to-blue-400"
            }`}
          >
            Contact Us
          </h2>
          <p className={`mt-4 ${darkMode ? "text-white" : "text-black"}`}>
            Lorem ipsum dolor sit amet.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between mt-8 gap-8">
          {/* Left side - Address and Contact Info */}
          <div className={`lg:w-1/2 ${darkMode ? "text-white" : "text-black"}`}>
            <div className="mt-8">
              <h3 className="text-xl font-semibold">Address:</h3>
              <p>11 West Town</p>
              <p>PBo 12345, United States</p>

              <h3 className="text-xl font-semibold mt-4">Phone:</h3>
              <p>+1 1234 56 789</p>
              <p>+1 1234 56 780</p>

              <h3 className="text-xl font-semibold mt-4">Email:</h3>
              <p>info@example.com</p>
              <p>email@example.com</p>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className={`lg:w-1/2 ${darkMode ? "text-white" : "text-black"}`}>
            <form className="mt-8 space-y-6 max-w-lg mx-auto lg:mx-0">
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="w-full sm:w-1/2">
                  <input
                    type="text"
                    placeholder="Name*"
                    className={`w-full px-6 py-3 border rounded-full focus:outline-none ${
                      darkMode ? "bg-gray-700 text-white" : "bg-white"
                    }`}
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <input
                    type="email"
                    placeholder="Email*"
                    className={`w-full px-6 py-3 border rounded-full focus:outline-none ${
                      darkMode ? "bg-gray-700 text-white" : "bg-white"
                    }`}
                  />
                </div>
              </div>

              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Subject"
                  className={`w-full px-6 py-3 border rounded-full focus:outline-none ${
                    darkMode ? "bg-gray-700 text-white" : "bg-white"
                  }`}
                />
              </div>

              <div className="mt-4">
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className={`w-full px-6 py-3 border rounded-xl focus:outline-none ${
                    darkMode ? "bg-gray-700 text-white" : "bg-lightGray"
                  }`}
                ></textarea>
              </div>

              <button
                className={`w-full py-2 rounded-full ${
                  darkMode ? "bg-blue-600" : "bg-blue-700"
                } text-white hover:bg-blue-800`}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-lightGray {
          background-color: #f3f4f6;
        }

        @keyframes slideIn {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slide-in {
          animation: slideIn 1s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ContactForm;
