import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { getProductById, products } from '../data/products';
import { ArrowLeft, Truck, Shield, Award, Check } from 'lucide-react';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = id ? getProductById(id) : null;
  
  // For suggested products
  const [suggestedProducts, setSuggestedProducts] = useState([]);
  
  useEffect(() => {
    // If product exists, set the page title
    if (product) {
      document.title = `${product.name} | Shree Industry`;
      
      // Get suggested products from the same category
      const sameCategoryProducts = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 3);
        
      setSuggestedProducts(sameCategoryProducts);
    } else if (id) {
      // If ID is provided but product not found, redirect to products page
      navigate('/products');
    }
  }, [product, id, navigate]);
  
  if (!product) {
    return (
      <div className="pt-24 py-12 text-center">
        <Container>
          <p className="text-xl text-gray-600">Product not found.</p>
          <Link to="/products" className="mt-4 inline-block">
            <Button variant="primary">Back to Products</Button>
          </Link>
        </Container>
      </div>
    );
  }
  
  return (
    <div className="pt-20 animate-fade-in">
      <Section>
        <Container>
          <div className="mb-6">
            <Link to="/products" className="flex items-center text-accent-600 hover:text-accent-700 transition-colors">
              <ArrowLeft size={16} className="mr-2" />
              Back to Products
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 lg:p-8">
              {/* Product Image */}
              <div className="rounded-lg overflow-hidden bg-gray-100">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Product Info */}
              <div>
                <span className="inline-block px-3 py-1 bg-accent-100 text-accent-800 rounded-full text-sm font-medium mb-4">
                  {product.category}
                </span>
                <h1 className="text-3xl font-bold text-primary-800 mb-4">{product.name}</h1>
                
                <div className="mb-6">
                  <p className="text-2xl font-bold text-accent-600">
                    ₹{product.price.toLocaleString()}/{product.unit}
                  </p>
                  <span className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-medium ${
                    product.inStock 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
                
                <div className="mb-8">
                  <p className="text-gray-700 leading-relaxed">{product.description}</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center text-gray-700">
                    <Truck size={20} className="text-accent-500 mr-2" />
                    <span>Fast Nationwide Delivery</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Shield size={20} className="text-accent-500 mr-2" />
                    <span>Quality Guarantee</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Award size={20} className="text-accent-500 mr-2" />
                    <span>Industry Certified</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Check size={20} className="text-accent-500 mr-2" />
                    <span>Bulk Discounts Available</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="primary" size="lg" fullWidth>
                    Request Quote
                  </Button>
                  <Link to="/contact">
                    <Button variant="outline" size="lg" fullWidth>
                      Contact Sales
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Specifications Section */}
          <div className="mt-12 bg-white rounded-lg shadow-md p-6 lg:p-8">
            <h2 className="text-2xl font-bold text-primary-800 mb-6">Product Specifications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="border-b border-gray-200 pb-3">
                  <span className="text-gray-600 text-sm">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                  <p className="font-medium text-primary-800">{value}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Features & Applications */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
              <h2 className="text-2xl font-bold text-primary-800 mb-6">Features</h2>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-accent-500 mr-2 shrink-0 mt-1" size={18} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
              <h2 className="text-2xl font-bold text-primary-800 mb-6">Applications</h2>
              <ul className="space-y-3">
                {product.applications.map((application, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-accent-500 mr-2 shrink-0 mt-1" size={18} />
                    <span className="text-gray-700">{application}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Suggested Products */}
          {suggestedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-primary-800 mb-8">You May Also Like</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {suggestedProducts.map((product) => (
                  <Link key={product.id} to={`/products/${product.id}`} className="group">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={product.imageUrl} 
                          alt={product.name} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-primary-800 group-hover:text-accent-500 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-accent-600 font-bold mt-1">
                          ₹{product.price.toLocaleString()}/{product.unit}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Container>
      </Section>
    </div>
  );
};

export default ProductDetailPage;