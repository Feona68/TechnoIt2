import React from 'react';
import heroImage from './hero-bg.png'; // Adjust the path if necessary

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center text-white py-20 min-h-screen flex items-center justify-end"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="w-1/2 p-12 text-left"> {/* Left-align the text */}
        <h1 className="text-5xl font-bold">
          Delivering Superior Services     <span className="text-blue-500">IT Solutions</span>
        </h1>
        <p className="text-lg mt-4">
        You can easily change any design to your own. It is also highly customizable SEO friendly template.
        </p>
        <div className="mt-6 flex justify-start space-x-4">
          <button className="bg-blue-700 px-8 py-4 rounded-full hover:bg-blue-800">Get Quotes</button>
          <button className="bg-blue-700 border border-blue-700 px-8 py-4 rounded-full hover:bg-blue-800 hover:border-blue-800">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
