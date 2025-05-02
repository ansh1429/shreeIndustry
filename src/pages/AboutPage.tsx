import React, { useEffect } from "react";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import {
  Building,
  Users,
  Target,
  BarChart,
  Shield,
  Award,
  Check,
} from "lucide-react";

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = "About Us | Shree Industry";
  }, []);

  return (
    <div className="pt-20 animate-fade-in">
      {/* Hero Banner */}
      <div className="relative bg-primary-800 py-16">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <img
            src="https://images.pexels.com/photos/2265629/pexels-photo-2265629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Factory"
            className="w-full h-full object-cover"
          />
        </div>
        <Container>
          <div className="relative text-center">
            <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              About Shree Industry
            </h1>
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
              A leader in manufacturing high-quality metal products since 1995
            </p>
          </div>
        </Container>
      </div>

      {/* Our Story */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-800 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded in 1995, Shree Industry began as a small-scale
                  manufacturer of basic construction materials in Mumbai. With a
                  vision to provide high-quality metal products at competitive
                  prices, our founder Mr. Rajesh Agarwal established the company
                  with just 10 employees and a small factory.
                </p>
                <p>
                  Over the decades, we have grown into one of India's leading
                  manufacturers of premium metal products for the construction
                  industry. Our state-of-the-art manufacturing facilities now
                  span over 50,000 square feet and employ more than 500 skilled
                  workers and professionals.
                </p>
                <p>
                  Today, Shree Industry is recognized nationwide for our
                  commitment to quality, innovation, and customer satisfaction.
                  We continue to invest in the latest manufacturing technologies
                  and quality control processes to ensure our products meet the
                  highest standards in the industry.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Factory floor"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">
              Mission & Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guiding principles that drive our operations and future goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-accent-100 p-4 rounded-full mb-6">
                <Target className="h-12 w-12 text-accent-600" />
              </div>
              <h3 className="text-2xl font-bold text-primary-800 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700">
                To manufacture and supply high-quality metal products that meet
                or exceed industry standards, while maintaining competitive
                pricing and excellent customer service. We strive to contribute
                to the growth of India's infrastructure by providing reliable
                construction materials that ensure safety and durability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-accent-100 p-4 rounded-full mb-6">
                <BarChart className="h-12 w-12 text-accent-600" />
              </div>
              <h3 className="text-2xl font-bold text-primary-800 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700">
                To be recognized as India's premier manufacturer of metal
                products for construction, known for unwavering quality,
                innovation, and customer satisfaction. We aim to expand our
                product range and market presence while maintaining our
                commitment to sustainable manufacturing practices and social
                responsibility.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Core Values */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every aspect of our business
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Shield className="h-12 w-12 text-accent-500 mb-4" />
              <h3 className="text-xl font-bold text-primary-800 mb-2">
                Quality
              </h3>
              <p className="text-gray-700">
                We never compromise on the quality of our products. Every item
                undergoes rigorous testing to ensure it meets the highest
                standards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Award className="h-12 w-12 text-accent-500 mb-4" />
              <h3 className="text-xl font-bold text-primary-800 mb-2">
                Integrity
              </h3>
              <p className="text-gray-700">
                We conduct our business with honesty, transparency, and ethical
                practices, building trust with our customers, partners, and
                employees.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="h-12 w-12 text-accent-500 mb-4" />
              <h3 className="text-xl font-bold text-primary-800 mb-2">
                Customer Focus
              </h3>
              <p className="text-gray-700">
                We prioritize understanding and meeting our customers' needs,
                providing excellent service and support at every step.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Building className="h-12 w-12 text-accent-500 mb-4" />
              <h3 className="text-xl font-bold text-primary-800 mb-2">
                Innovation
              </h3>
              <p className="text-gray-700">
                We continuously improve our products and processes, investing in
                technology and research to stay ahead in the industry.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <svg
                className="h-12 w-12 text-accent-500 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                ></path>
              </svg>
              <h3 className="text-xl font-bold text-primary-800 mb-2">
                Sustainability
              </h3>
              <p className="text-gray-700">
                We are committed to environmentally responsible manufacturing
                practices and minimizing our ecological footprint.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <svg
                className="h-12 w-12 text-accent-500 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
              <h3 className="text-xl font-bold text-primary-800 mb-2">
                Social Responsibility
              </h3>
              <p className="text-gray-700">
                We believe in giving back to the community and supporting the
                welfare of our employees and society at large.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Manufacturing Facilities */}
      <Section className="bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">
              Our Manufacturing Facility in Gujarat
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art production plants equipped with advanced
              technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1267346/pexels-photo-1267346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Factory interior"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Our headquarters and main production facility spans 30,000 sq
                  ft with advanced steel processing equipment.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <Check
                      className="text-accent-500 mr-2 shrink-0 mt-1"
                      size={16}
                    />
                    <span>Steel rod manufacturing</span>
                  </li>
                  <li className="flex items-start">
                    <Check
                      className="text-accent-500 mr-2 shrink-0 mt-1"
                      size={16}
                    />
                    <span>Metal sheet production</span>
                  </li>
                  <li className="flex items-start">
                    <Check
                      className="text-accent-500 mr-2 shrink-0 mt-1"
                      size={16}
                    />
                    <span>Quality testing lab</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://cdn.pixabay.com/photo/2019/04/27/21/57/pipes-4161383_1280.jpg"
                alt="Factory machines"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Our specialized facility for structural beams and heavy-duty
                  construction materials.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <Check
                      className="text-accent-500 mr-2 shrink-0 mt-1"
                      size={16}
                    />
                    <span>I-beam production</span>
                  </li>
                  <li className="flex items-start">
                    <Check
                      className="text-accent-500 mr-2 shrink-0 mt-1"
                      size={16}
                    />
                    <span>Angle and channel manufacturing</span>
                  </li>
                  <li className="flex items-start">
                    <Check
                      className="text-accent-500 mr-2 shrink-0 mt-1"
                      size={16}
                    />
                    <span>Advanced welding facility</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.pexels.com/photos/162568/oil-pump-jack-sunset-clouds-silhouette-162568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Factory exterior"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Our newest facility focusing on specialized metal products and
                  custom orders.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <Check
                      className="text-accent-500 mr-2 shrink-0 mt-1"
                      size={16}
                    />
                    <span>Custom metal fabrication</span>
                  </li>
                  <li className="flex items-start">
                    <Check
                      className="text-accent-500 mr-2 shrink-0 mt-1"
                      size={16}
                    />
                    <span>Corrosion-resistant coatings</span>
                  </li>
                  <li className="flex items-start">
                    <Check
                      className="text-accent-500 mr-2 shrink-0 mt-1"
                      size={16}
                    />
                    <span>R&D department</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default AboutPage;
