import { useEffect, useState } from "react";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (e.g., fetch data, assets, etc.)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show loader for 2 seconds (adjust as needed)

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null; // Hide loader after timeout

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      {/* Logo */}
      <div className="text-center opacity-0 animate-fade-in">
        <span className="text-4xl sm:text-5xl font-bold text-gray-900">Lume</span>
        <span className="text-sm sm:text-base uppercase tracking-wider ml-1 text-gray-600">Hotel</span>
      </div>

      {/* Optional: Subtle dot loading animation */}
      <div className="flex space-x-1 mt-6 opacity-0 animate-fade-in-delay">
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>

      {/* Add styles via style tag or Tailwind */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-delay {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animate-fade-in-delay {
          animation: fade-in-delay 0.8s 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}