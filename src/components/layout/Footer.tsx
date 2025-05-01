import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center">
              <Logo />
              <span className="ml-2 text-xl font-bold">Shree Industry</span>
            </div>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Premium metal products for construction and industrial use. Built with strength, durability, and reliability at our core.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-accent-400 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-400 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-400 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-400 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-accent-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-accent-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-accent-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Product Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-300 hover:text-accent-400 transition-colors">
                  Steel Rods
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-accent-400 transition-colors">
                  Metal Sheets
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-accent-400 transition-colors">
                  Iron Bars
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-accent-400 transition-colors">
                  Structural Beams
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-accent-400 transition-colors">
                  Construction Metals
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 text-accent-400 shrink-0 mt-1" size={18} />
                <span className="text-gray-300">123 Industrial Area, Mumbai, Maharashtra 400001, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-accent-400 shrink-0" size={18} />
                <span className="text-gray-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-accent-400 shrink-0" size={18} />
                <span className="text-gray-300">info@shreeindustry.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              &copy; {currentYear} Shree Industry. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-accent-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-accent-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;