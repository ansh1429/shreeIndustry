import React from 'react';
import Container from '../ui/Container';
import { StarIcon } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  company: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, company, rating }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md relative">
      <div className="absolute -top-4 left-8 w-8 h-8 bg-accent-500 rotate-45 transform"></div>
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon
            key={i}
            size={18}
            className={`${
              i < rating ? 'text-accent-500 fill-accent-500' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <p className="text-gray-700 italic mb-6">{quote}</p>
      <div>
        <p className="font-semibold text-primary-800">{author}</p>
        <p className="text-gray-500 text-sm">{company}</p>
      </div>
    </div>
  );
};

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Shree Industry's steel rods have been our go-to choice for all major construction projects. The consistent quality and on-time delivery give us confidence in our builds.",
      author: "Rajesh Patel",
      company: "Patel Construction Ltd.",
      rating: 5
    },
    {
      quote: "We've been using their structural beams for three years now and have never had a quality issue. Their technical team provides excellent support when needed.",
      author: "Amit Sharma",
      company: "Modern Structures Inc.",
      rating: 5
    },
    {
      quote: "The metal sheets we purchase from Shree Industry are consistently high quality. Their competitive pricing and reliable delivery schedule have made them our preferred supplier.",
      author: "Priya Desai",
      company: "Desai Developers",
      rating: 4
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-800 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We take pride in the relationships we build with our clients and the quality we deliver to their projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              company={testimonial.company}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TestimonialSection;