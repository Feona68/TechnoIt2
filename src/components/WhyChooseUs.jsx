// WhyChooseUs.jsx
import React from 'react';

const reasons = [
  'Experience',
  'Products',
  'Approach',
  'Pricing',
  'Delivery',
  'Support',
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Why Choose Us</h2>
        <p className="mt-4 text-gray-600">Lorem ipsum dolor sit amet.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="p-6 shadow-lg rounded-lg">
              <h3 className="text-lg font-semibold">{reason}</h3>
              <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
