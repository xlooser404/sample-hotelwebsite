import { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import AnimatedSection from "../components/sections/AnimatedSection";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger fade-in animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />
         <AnimatedSection delay={100}>
      <section
        className={`pt-24 md:pt-32 lg:pt-40 px-6 sm:px-12 lg:px-24 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-6">
            Welcome to <span className="font-medium">Lume Hotel</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            A sanctuary of calm, style, and timeless hospitality — where modern luxury meets warm comfort.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-6 sm:px-12 lg:px-24 py-16 md:py-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <h2 className="text-3xl font-light text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Founded in 2010, Lume Hotel began as a dream to create a space where travelers could feel both inspired and at peace.
              Nestled in the heart of the city yet surrounded by nature, our boutique hotel blends minimalist Scandinavian design with local craftsmanship.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every detail — from the hand-selected linens to the curated art collection — is chosen to elevate your stay into a true experience.
            </p>
          </div>
          <div
            className={`overflow-hidden rounded-2xl shadow-lg transform transition-all duration-1000 delay-500 ${
              isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            <img
              src="/images/hero1.jpg"
              alt="Lume Hotel Interior"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white px-6 sm:px-12 lg:px-24 py-16">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-light text-gray-800">Our Values</h2>
          <p className="text-gray-600 mt-4">What drives us every day.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Elegance",
              description: "Clean lines, natural materials, and thoughtful design create spaces that inspire serenity.",
            },
            {
              title: "Warmth",
              description: "Luxury means nothing without kindness. Our staff treats every guest like family.",
            },
            {
              title: "Sustainability",
              description: "We partner with local artisans and use eco-friendly practices to protect our environment.",
            },
          ].map((value, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg bg-gray-50 transform transition-all duration-700 delay-${
                300 + index * 100
              } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
            >
              <h3 className="text-xl font-medium text-gray-800 mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 sm:px-12 lg:px-24 py-20 text-center">
        <div
          className={`max-w-3xl mx-auto transform transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6">
            Experience the Lume Difference
          </h2>
          <p className="text-gray-600 mb-8">
            Whether you're here for a weekend escape or an extended stay, we're dedicated to making your visit unforgettable.
          </p>
          <a
            href="/rooms"
            className="inline-block px-8 py-3 bg-gray-900 text-white font-light rounded-md hover:bg-gray-800 transition"
          >
            Explore Our Rooms
          </a>
        </div>
      </section>
      </AnimatedSection>
    </div>
    

  );
}