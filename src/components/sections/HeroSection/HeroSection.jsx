import React from 'react';
import Card from '../../ui/Card';

const HeroSection = () => {
  const stats = [
    {
      number: "2,500+",
      title: "Premium Products",
      description: "Providing best-in-class products to meet your needs at competitive rates"
    },
    {
      number: "500+",
      title: "Distributors", 
      description: "Successfully operating their own business in their designated locations"
    },
    {
      number: "15+",
      title: "Years of experience",
      description: "Proven expertise in providing high-quality products and services"
    },
    {
      number: "1,000+",
      title: "Satisfied Clients",
      description: "Trusted by diverse clients for our reliable services and outstanding value"
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              number={stat.number}
              title={stat.title}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
