"use client"
import React, { useState } from 'react';

const SliderCarousel = ({ items, slideCount = 1 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + slideCount) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - slideCount < 0
        ? items.length - slideCount
        : prevIndex - slideCount
    );
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform transform"
        style={{
          transform: `translateX(-${currentIndex * (100 / slideCount)}%)`,
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0"
            style={{ width: `${100 / slideCount}%` }}
          >
            <div className="bg-gray-200 h-40 p-4 m-2 rounded-lg">
              {item}
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
        onClick={nextSlide}
      >
        &gt;
      </button>
    </div>
  );
};

export default SliderCarousel;
