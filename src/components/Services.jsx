import React, { useEffect, useState } from "react";
import { useTheme } from "../context/themeContext"; // Import the ThemeContext
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import icon4 from "../assets/icon4.svg";
import icon5 from "../assets/icon5.svg";
import icon6 from "../assets/icon6.svg";

const services = [
  { title: "Application Design", description: "A web application, commonly known as a web app, serves as a digital tool residing within web browsers, aiding users in accomplishing diverse tasks. It functions on a web server, promptly responding to client requests in the established “client-server model”.", icon: icon1 },
  { title: "Web Hosting", description: "Lorem ipsum dolor sit amet.", icon: icon2 },
  { title: "Social Media", description: "Lorem ipsum dolor sit amet.", icon: icon3 },
  { title: "SEO Optimization", description: "SEO stands for search engine optimization. It is the process of making your website more visible in search engines like Google without paying for ads. SEO is sometimes called SEO marketing, SEO optimization, or organic search marketing. It can help you earn organic (unpaid) rankings like this: As a result, you can gain ", icon: icon4 },
  { title: "Cloud Server", description: "Lorem ipsum dolor sit amet.", icon: icon5 },
  { title: "Data Security", description: "Lorem ipsum dolor sit amet.", icon: icon6 },
];

const Services = () => {
  const { darkMode } = useTheme(); // Access darkMode from context
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          } else {
            setInView(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    const sectionElement = document.querySelector("#services-section");
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  return (
    <section
      id="services-section"
      className={`py-16 px-4 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`w-full aspect-square p-6 text-center transform transition-transform duration-300 hover:scale-105 ${
              inView ? "animate-slide-up" : ""
            } ${
              darkMode
                ? "bg-black text-white shadow-lg shadow-blue-500"
                : "bg-white text-gray-800 shadow-lg shadow-gray-400"
            }`}
          >
            <img
              src={service.icon}
              alt={service.title}
              className="h-16 w-16 mx-auto mb-4"
            />
            <h3 className="text-lg md:text-xl font-semibold">{service.title}</h3>
            <p className="mt-4 text-sm md:text-base">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Add animation styles */}
      <style>{`
        @keyframes slideUp {
          0% {
            transform: translateY(50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slideUp 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Services;
