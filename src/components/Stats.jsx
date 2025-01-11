// Stats.jsx
import React from 'react';

const stats = [
  { value: 232, label: 'Happy Clients' },
  { value: 521, label: 'Completed Projects' },
  { value: 453, label: 'Hours of Support' },
];

const Stats = () => {
  return (
    <section className="bg-blue-900 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 text-center gap-8">
        {stats.map((stat, index) => (
          <div key={index}>
            <h3 className="text-4xl font-bold">{stat.value}</h3>
            <p className="mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
