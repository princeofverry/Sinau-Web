// src/components/SliderTestimoni.js
import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";

const testimoniData = [
  {
    id: 1,
    nama: "Wisnu Parichjata",
    testimoni: "Kerenn bangetsss",
    rating: 5,
    gambar: "wisnu.jpg",
  },
  {
    id: 2,
    nama: "John Tor",
    testimoni: "Kelazzz cuyy",
    rating: 4,
    gambar: "robot.jpg",
  },
  {
    id: 3,
    nama: "Gary",
    testimoni: "Seru banget deh!",
    rating: 5,
    gambar: "gary.jpg",
  },
  // Tambahkan data testimoni sesuai kebutuhan
];

const SliderTestimoni = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlideActive, setAutoSlideActive] = useState(true);

  const nextTestimoni = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimoniData.length);
    stopAutoSlide();
  };

  const prevTestimoni = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimoniData.length) % testimoniData.length
    );
    stopAutoSlide();
  };

  const autoSlide = useRef();

  const startAutoSlide = () => {
    autoSlide.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimoniData.length);
    }, 3000); // Ganti 5000 dengan interval yang diinginkan (dalam milidetik)
  };

  const stopAutoSlide = () => {
    clearInterval(autoSlide.current);
  };

  useEffect(() => {
    if (autoSlideActive) {
      startAutoSlide();
    }
    return () => {
      stopAutoSlide();
    };
  }, [autoSlideActive]);

  const props = useSpring({
    opacity: 1,
    transform: `translateX(-${currentIndex * 100}%)`,
    config: { duration: 500 },
  });

  return (
    <div className="w-full max-w-lg mx-auto relative overflow-hidden bg-[#2C3361]">
      <animated.div
        style={{ ...props, display: "flex", transition: "transform 0.5s" }}
        onMouseEnter={() => setAutoSlideActive(false)}
        onMouseLeave={() => setAutoSlideActive(true)}
      >
        {testimoniData.map((testimoni, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <div className="absolute inset-0 bg-opacity-50 rounded-lg"></div>
            <div className="relative p-6 bg-white rounded-lg shadow-md flex items-center">
              <img
                src={testimoni.gambar}
                alt={testimoni.nama}
                className="mb-4 rounded-full object-cover mr-4 hover:scale-105 transition duration-300"
                style={{ width: "180px", height: "180px" }}
              />
              <div>
                <h2 className="text-2xl font-semibold mb-2">
                  {testimoni.nama}
                </h2>
                <p className="text-gray-700 mb-2">{testimoni.testimoni}</p>
                <div className="flex items-center">
                  <div className="text-yellow-300 flex">
                    {[...Array(testimoni.rating)].map((_, index) => (
                      <img
                        key={index}
                        className="h-5 w-5 fill-current mr-1"
                        width="48"
                        height="48"
                        src="https://img.icons8.com/color/48/filled-star--v1.png"
                        alt="filled-star--v1"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </animated.div>
      {/* matiin button */}
      <div className="text-white">
        <button
          onClick={prevTestimoni}
          className="text-gray-600 text-2xl absolute top-1/2 left-0 transform -translate-y-1/2 px-2 py-2 hover:text-gray-800 cursor-pointer"
          disabled={currentIndex === 0}
        >
          &lt;
        </button>
        <button
          onClick={nextTestimoni}
          className="text-gray-600 text-2xl absolute top-1/2 right-0 transform -translate-y-1/2 px-2 py-2 hover:text-gray-800 cursor-pointer"
          disabled={currentIndex === testimoniData.length - 1}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default SliderTestimoni;
