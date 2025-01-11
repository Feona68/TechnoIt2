// Services.jsx
import React from 'react';

const services = [
  { title: 'Application Design', description: 'Lorem ipsum dolor sit amet.' },
  { title: 'Web Hosting', description: 'Lorem ipsum dolor sit amet.' },
  { title: 'Social Media', description: 'Lorem ipsum dolor sit amet.' },
  { title: 'SEO Optimization', description: 'Lorem ipsum dolor sit amet.' },
  { title: 'Cloud Server', description: 'Lorem ipsum dolor sit amet.' },
  { title: 'Data Security', description: 'Lorem ipsum dolor sit amet.' },
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="mt-4 text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
