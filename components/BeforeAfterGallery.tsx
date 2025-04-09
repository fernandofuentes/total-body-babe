'use client';
import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const beforeAfterImages = [
  {
    before: '/images/before-1.png',
    after: '/images/after-1.png',
    treatment: 'Body Contouring',
    description: 'Results after 6 weeks of our signature body sculpting treatment',
  },
  {
    before: '/images/before-2.png',
    after: '/images/after-2.png',
    treatment: 'Brazilian Lymphatic Drainage',
    description: 'Transformation after 4 sessions of lymphatic drainage',
  },
  {
    before: '/images/before-3.png',
    after: '/images/after-3.png',
    treatment: 'Fat Slayer',
    description: 'Amazing results after completing our Fat Slayer program',
  },
];

const BeforeAfterGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === beforeAfterImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? beforeAfterImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Real Results, Real Transformations
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Our clients&apos; journeys speak volumes. From dramatic before-and-after
            transformations to boosted confidence and renewed energy, our
            non-invasive treatments have changed lives. Browse our gallery to
            see authentic results and hear inspiring testimonials from
            individuals just like you who have experienced the Total Body Babe
            difference. We believe that real beauty comes from results you can
            see and feel—and our success stories are our proudest achievement.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Before Image */}
            <div className="relative">
              <Image
                src={beforeAfterImages[currentIndex].before}
                alt="Before treatment"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
              />
              <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full">
                Before
              </div>
            </div>

            {/* After Image */}
            <div className="relative">
              <Image
                src={beforeAfterImages[currentIndex].after}
                alt="After treatment"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
              />
              <div className="absolute top-4 left-4 bg-primary bg-opacity-90 text-white px-4 py-2 rounded-full">
                After
              </div>
            </div>
          </div>

          {/* Treatment Info */}
          <div className="text-center mt-8">
            <h3 className="text-2xl font-semibold mb-2">
              {beforeAfterImages[currentIndex].treatment}
            </h3>
            <p className="text-gray-600">
              {beforeAfterImages[currentIndex].description}
            </p>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {beforeAfterImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;