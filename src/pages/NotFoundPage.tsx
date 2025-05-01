import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Page Not Found | Shree Industry';
  }, []);
  
  return (
    <div className="pt-20 min-h-screen flex items-center">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-accent-500 text-9xl font-bold">404</div>
          <h1 className="mt-4 text-3xl font-bold text-primary-800 sm:text-4xl">Page Not Found</h1>
          <p className="mt-6 text-lg text-gray-600">
            Sorry, we couldn't find the page you're looking for. The page might have been moved or deleted.
          </p>
          <div className="mt-10 flex justify-center space-x-4">
            <Link to="/">
              <Button variant="primary" size="lg">
                Go to Homepage
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="outline" size="lg">
                View Products
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NotFoundPage;