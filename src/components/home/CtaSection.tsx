import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Container from '../ui/Container';

const CtaSection: React.FC = () => {
  return (
    <section className="bg-primary-800 py-16">
      <Container>
        <div className="bg-gradient-to-r from-primary-900 to-primary-700 rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">Ready to start your project?</span>
                <span className="block text-accent-400">Get in touch with our experts today.</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-gray-300">
                Whether you're planning a residential building or a major infrastructure project, our team is ready to help you select the right materials and solutions.
              </p>
            </div>
            <div className="mt-8 flex lg:mt-0 lg:ml-8">
              <div className="inline-flex rounded-md shadow">
                <Link to="/contact">
                  <Button variant="primary" size="lg">
                    Contact Us
                  </Button>
                </Link>
              </div>
              <div className="ml-4 inline-flex">
                <Link to="/products">
                  <Button variant="outline" size="lg">
                    View Products
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CtaSection;