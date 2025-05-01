import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import CategorySection from '../components/home/CategorySection';
import TestimonialSection from '../components/home/TestimonialSection';
import CtaSection from '../components/home/CtaSection';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Shree Industry | Premium Metal Products';
  }, []);

  return (
    <div className="animate-fade-in">
      <HeroSection />
      <FeaturesSection />
      <CategorySection />
      <TestimonialSection />
      <CtaSection />
    </div>
  );
};

export default HomePage;