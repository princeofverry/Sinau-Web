'use client'
import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
        onClick={prevImage}
      >
        Previous
      </button>
      <img
        className="max-w-[400px]"
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2"
        onClick={nextImage}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
