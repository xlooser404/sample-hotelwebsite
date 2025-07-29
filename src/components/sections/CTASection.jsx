import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section
      className="py-24 px-6 text-center text-white relative"
      style={{
        backgroundImage: "url('/images/cta-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative max-w-3xl mx-auto z-10">
        <h2 className="text-4xl md:text-5xl font-light mb-6">Ready to Unwind?</h2>
        <p className="text-lg mb-8 opacity-90">
          Reserve your stay at Lume Hotel and experience the perfect balance of nature and comfort.
        </p>
        <Link
          to="/booking"
          className="inline-block px-10 py-4 bg-gray-900 hover:bg-white hover:text-gray-900 text-white font-light transition-all duration-300"
        >
          Book Now
        </Link>
      </div>
    </section>
  );
}