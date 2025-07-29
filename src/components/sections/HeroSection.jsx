import { useState, useEffect } from "react";
import { heroSlides } from "../../utils/data";

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-1000 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {heroSlides.map((slide) => (
          <div
            key={slide.id}
            className="w-full flex-shrink-0 relative"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div
              className="absolute inset-0 bg-black/40"
              aria-hidden="true"
            ></div>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 lg:px-24 text-white">
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-3 drop-shadow-md animate-fade-in"
                style={{ animationDelay: "0.3s" }}
              >
                {slide.title}
              </h1>
              <p
                className="text-lg sm:text-xl max-w-lg drop-shadow"
                style={{ animationDelay: "0.6s" }}
              >
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}