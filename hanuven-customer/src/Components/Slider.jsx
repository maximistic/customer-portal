import { useState } from 'react';
import slider1 from '../Components/Assets/slider1.jpg';
import slider2 from '../Components/Assets/slider2.jpg';
import slider3 from '../Components/Assets/slider3.jpg';
import slider4 from '../Components/Assets/slider4.jpg';

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [slider1, slider2, slider3, slider4];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative overflow-hidden h-640">
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className="min-w-full h-640 object-cover"
          />
        ))}
      </div>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
}

export default Slider;
