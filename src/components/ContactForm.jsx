// ContactForm.jsx
import React from 'react';

const ContactForm = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">Contact Us</h2>
        <form className="mt-8 space-y-6 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 border rounded focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border rounded focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-3 border rounded focus:outline-none"
          ></textarea>
          <button className="w-full bg-blue-700 text-white py-3 rounded hover:bg-blue-800">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
