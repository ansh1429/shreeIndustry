import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import { ArrowRight } from 'lucide-react';
import { getAllCategories } from '../../data/products';

const CategoryCard: React.FC<{ category: string; index: number }> = ({ category, index }) => {
  // List of background images for different categories
  const backgrounds = [
    'https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/259988/pexels-photo-259988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/2308757/pexels-photo-2308757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/2760242/pexels-photo-2760242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  ];
  
  // Use modulo to cycle through the backgrounds
  const backgroundImage = backgrounds[index % backgrounds.length];
  
  return (
    <Link 
      to="/products"
      className="group relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="absolute inset-0 bg-primary-900 opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
      <img 
        src={backgroundImage} 
        alt={category} 
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3 className="text-2xl font-semibold text-white mb-2">{category}</h3>
        <div className="flex items-center text-accent-300 transition-transform duration-300 transform translate-x-0 group-hover:translate-x-2">
          <span className="mr-2">Explore</span>
          <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  );
};

const CategorySection: React.FC = () => {
  const categories = getAllCategories();
  
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-800 sm:text-4xl">
            Our Product Categories
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of metal products designed for various construction and industrial applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={category} category={category} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategorySection;