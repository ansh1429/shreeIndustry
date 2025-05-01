import React, { useEffect, useState } from 'react';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import ProductGrid from '../components/products/ProductGrid';
import { products, getAllCategories } from '../data/products';

const ProductsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const categories = getAllCategories();
  
  // Filter products based on active category
  const filteredProducts = activeCategory
    ? products.filter(product => product.category === activeCategory)
    : products;
  
  useEffect(() => {
    document.title = 'Products | Shree Industry';
  }, []);
  
  return (
    <div className="pt-20 animate-fade-in">
      {/* Hero Banner */}
      <div className="relative bg-primary-800 py-16">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <img
            src="https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <Container>
          <div className="relative text-center">
            <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Our Product Range
            </h1>
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive selection of high-quality metal products for all your construction needs.
            </p>
          </div>
        </Container>
      </div>
      
      <Section>
        <Container>
          {/* Category Filter */}
          <div className="mb-10">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeCategory === null
                    ? 'bg-accent-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                All Products
              </button>
              
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    activeCategory === category
                      ? 'bg-accent-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Listing */}
          <div className="animate-slide-up">
            {filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} />
            ) : (
              <div className="text-center py-8">
                <p className="text-xl text-gray-600">No products found in this category.</p>
              </div>
            )}
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default ProductsPage;