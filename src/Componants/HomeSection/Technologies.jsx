'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TechnologyCarousel = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const technologies = [
    { name: 'GraphQL', icon: '🔷', color: 'from-pink-500 to-purple-500' },
    { name: 'Java', icon: '☕', color: 'from-red-500 to-orange-500' },
    { name: 'Google Cloud', icon: '☁️', color: 'from-blue-400 to-blue-600' },
    { name: 'WordPress', icon: '🌐', color: 'from-blue-500 to-indigo-600' },
    { name: 'Shopify', icon: '🛍️', color: 'from-green-400 to-green-600' },
    { name: 'React', icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-green-700' },
    { name: 'Python', icon: '🐍', color: 'from-blue-500 to-yellow-500' },
    { name: 'MongoDB', icon: '🍃', color: 'from-green-600 to-green-800' },
    { name: 'AWS', icon: '☁️', color: 'from-orange-400 to-yellow-500' },
    { name: 'Flutter', icon: '📱', color: 'from-blue-400 to-cyan-400' },
    { name: 'Angular', icon: '🅰️', color: 'from-red-600 to-red-800' },
    { name: 'Vue.js', icon: '💚', color: 'from-green-400 to-teal-500' },
    { name: 'Docker', icon: '🐳', color: 'from-blue-500 to-blue-700' },
    { name: 'Kubernetes', icon: '☸️', color: 'from-blue-600 to-indigo-600' },
    { name: 'Firebase', icon: '🔥', color: 'from-yellow-400 to-orange-500' }
  ];

  // Duplicate technologies for seamless loop
  const extendedTechnologies = [...technologies, ...technologies];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 20);

    return () => clearInterval(intervalId);
  }, [isPaused]);

  const handleScroll = (direction) => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const scrollAmount = 300;
      scrollContainer.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div 
    className="w-full min-h-screen py-16 px-4 relative"
      style={{
        backgroundImage: 'url("/Hero.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            TECHNOLOGIES THAT WE MAJORLY USE FOR{' '}
            <span className="text-teal-600">WEBSITE & APP DEVELOPMENT</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Navigation Button */}
          <button
            onClick={() => handleScroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-teal-600 transition-colors" />
          </button>

          {/* Scrolling Container */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-hidden py-8 px-12"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {extendedTechnologies.map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 group cursor-pointer"
              >
                <div className={`w-32 h-32 bg-gradient-to-br ${tech.color} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-3 flex items-center justify-center relative overflow-hidden`}>
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  {/* Icon */}
                  <span className="text-6xl transform group-hover:rotate-12 transition-transform duration-500 relative z-10">
                    {tech.icon}
                  </span>
                </div>
                
                {/* Technology Name */}
                <p className="text-center mt-4 font-semibold text-gray-700 group-hover:text-teal-600 transition-colors duration-300">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>

          {/* Right Navigation Button */}
          <button
            onClick={() => handleScroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-teal-600 transition-colors" />
          </button>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-sm">
            Hover over the carousel to pause auto-scroll
          </p>
        </div>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default TechnologyCarousel;