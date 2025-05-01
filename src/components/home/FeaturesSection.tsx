import React from 'react';
import Container from '../ui/Container';
import { Shield, Award, Truck, Zap, BarChart, Users } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="flex items-center justify-center h-16 w-16 rounded-md bg-accent-500 text-white mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-primary-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Shield size={24} />,
      title: 'Premium Quality',
      description: 'All our products meet or exceed industry standards for strength and durability.',
    },
    {
      icon: <Award size={24} />,
      title: 'Certified Materials',
      description: 'Our materials are tested and certified to ensure consistent performance.',
    },
    {
      icon: <Truck size={24} />,
      title: 'Nationwide Delivery',
      description: 'Fast and reliable delivery to construction sites across the country.',
    },
    {
      icon: <Zap size={24} />,
      title: 'Innovation',
      description: 'Continuously improving our products with the latest manufacturing technologies.',
    },
    {
      icon: <BarChart size={24} />,
      title: 'Competitive Pricing',
      description: 'Direct factory pricing without compromising on quality or service.',
    },
    {
      icon: <Users size={24} />,
      title: 'Expert Support',
      description: 'Technical consultation and support from industry professionals.',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary-800 sm:text-4xl">
            Why Choose Shree Industry
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We provide industrial-grade metal products that set the standard for quality and reliability in the construction industry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturesSection;