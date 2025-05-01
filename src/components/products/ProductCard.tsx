import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../data/types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
        <div className="relative h-56 overflow-hidden">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-0 right-0 bg-accent-500 text-white py-1 px-3 text-sm font-semibold rounded-bl-lg">
            {product.category}
          </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold text-primary-800 mb-2 group-hover:text-accent-500 transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-2">
            {product.shortDescription}
          </p>
          <div className="flex items-center justify-between mt-auto">
            <span className="text-accent-600 font-bold">
              ₹{product.price.toLocaleString()}/{product.unit}
            </span>
            <span className={`text-sm font-medium px-2 py-1 rounded ${
              product.inStock 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;