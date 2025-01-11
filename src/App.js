// App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Stats from './components/Stats';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      {/* Header Section */}
      <Header />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Services Section */}
      <Services />
      
      {/* Why Choose Us Section */}
      <WhyChooseUs />
      
      {/* Stats Section */}
      <Stats />
      
      {/* Contact Form Section */}
      <ContactForm />
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default App;
