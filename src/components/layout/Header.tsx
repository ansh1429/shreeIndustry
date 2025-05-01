import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "../ui/Logo";

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary-800 shadow-lg py-3"
          : "bg-primary-800 shadow-lg py-3"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Logo />
            <span className="ml-2 text-xl font-bold text-white">
              Shree Industry
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-white hover:text-accent-300 transition-colors ${
                  isActive ? "font-medium text-accent-400" : ""
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `text-white hover:text-accent-300 transition-colors ${
                  isActive ? "font-medium text-accent-400" : ""
                }`
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-white hover:text-accent-300 transition-colors ${
                  isActive ? "font-medium text-accent-400" : ""
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-white hover:text-accent-300 transition-colors ${
                  isActive ? "font-medium text-accent-400" : ""
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-primary-800 shadow-lg transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="flex flex-col p-4 space-y-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-white py-2 px-4 hover:bg-primary-700 rounded transition-colors ${
                isActive ? "bg-primary-700 font-medium" : ""
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `text-white py-2 px-4 hover:bg-primary-700 rounded transition-colors ${
                isActive ? "bg-primary-700 font-medium" : ""
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-white py-2 px-4 hover:bg-primary-700 rounded transition-colors ${
                isActive ? "bg-primary-700 font-medium" : ""
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-white py-2 px-4 hover:bg-primary-700 rounded transition-colors ${
                isActive ? "bg-primary-700 font-medium" : ""
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
