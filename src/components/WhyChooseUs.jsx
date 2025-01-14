import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/themeContext'; // Import the ThemeContext
import featuresImage from '../assets/features.jpg'; // Center image
import icon1 from '../assets/icon-1.svg';
import icon2 from '../assets/icon-2.svg';
import icon3 from '../assets/icon-3.svg';
import icon4 from '../assets/icon-4.svg';
import icon5 from '../assets/icon-5.svg';
import icon6 from '../assets/icon-6.svg';

// Map each reason to its corresponding icon
const reasons = [
  { title: 'Experience', icon: icon1 },
  { title: 'Products', icon: icon2 },
  { title: 'Approach', icon: icon3 },
  { title: 'Pricing', icon: icon4 },
  { title: 'Delivery', icon: icon5 },
  { title: 'Support', icon: icon6 },
];

const WhyChooseUs = () => {
  const { darkMode } = useTheme(); // Access darkMode from context
  const [isVisible, setIsVisible] = useState(false);
  const [inView, setInView] = useState(false); // Track if section is in view

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true); // Set to true when the section is in view
        } else {
          setInView(false); // Reset when the section is out of view
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('#why-choose-us');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="why-choose-us"
      className={`py-16 overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
    >
      <div className="container mx-auto text-center">
        <h2
          className={`text-4xl font-normal text-transparent bg-clip-text bg-gradient-to-r ${darkMode ? 'from-gray-400 to-blue-600' : 'from-gray-600 to-blue-500'}`}
        >
          Why Choose Us
        </h2>
        <p
          className={`mt-4 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${darkMode ? 'text-white' : 'text-gray-600'}`}
        >
          Lorem ipsum dolor sit amet.
        </p>
        <div
          className={`mt-12 flex flex-col lg:flex-row items-center justify-center gap-12 transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* Left Reasons */}
          <div className="flex flex-col space-y-8 w-full lg:w-1/3">
            {reasons.slice(0, 3).map((reason, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg flex items-center justify-end text-right transition-all duration-700 delay-${400 + index * 100} ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} ${darkMode ? 'bg-black text-white shadow-lg shadow-blue-500' : 'bg-gray-50 text-gray-800 shadow-lg shadow-gray-400'}`}
              >
                <div className="mr-4">
                  <h3 className="text-lg font-semibold">{reason.title}</h3>
                  <p className="mt-2">{darkMode ? 'Lorem ipsum dolor sit amet.' : 'Lorem ipsum dolor sit amet.'}</p>
                </div>
                <img
                  src={reason.icon}
                  alt={reason.title}
                  className="h-12 w-12"
                />
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div
            className={`w-64 h-64 transition-all duration-700 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <img
              src={featuresImage}
              alt="Features"
              className="w-full h-full object-cover rounded-full shadow-lg"
            />
          </div>

          {/* Right Reasons */}
          <div className="flex flex-col space-y-8 w-full lg:w-1/3">
            {reasons.slice(3).map((reason, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg flex items-center justify-start text-left transition-all duration-700 delay-${600 + index * 100} ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} ${darkMode ? 'bg-black text-white shadow-lg shadow-blue-500' : 'bg-gray-50 text-gray-800 shadow-lg shadow-gray-400'}`}
              >
                <img
                  src={reason.icon}
                  alt={reason.title}
                  className="h-12 w-12 mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">{reason.title}</h3>
                  <p className="mt-2">{darkMode ? 'Lorem ipsum dolor sit amet.' : 'Lorem ipsum dolor sit amet.'}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
