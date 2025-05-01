import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-primary-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="mt-1 block text-accent-400 text-base font-semibold tracking-wide uppercase">
              Premier Metal Manufacturers
            </div>
            <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              Building <span className="text-accent-400">Stronger</span> Foundations
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Premium quality metal products for construction and industrial applications. 
              Engineered for strength, durability, and performance in the most demanding environments.
            </p>
            
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link to="/products">
                  <Button variant="primary" size="lg" className="flex items-center">
                    Explore Products
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Link to="/contact">
                  <Button variant="outline" size="lg">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-primary-800 rounded-lg overflow-hidden">
                <img 
                  className="w-full object-cover h-64 lg:h-full opacity-80 mix-blend-overlay"
                  src="https://images.pexels.com/photos/162568/oil-pump-jack-sunset-clouds-silhouette-162568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Industrial metal production" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-transparent to-transparent opacity-90"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-accent-500 bg-opacity-75">
                      <svg className="h-12 w-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </span>
                    <p className="mt-4 text-lg font-medium text-white">
                      Watch Our Process
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;