export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-2xl font-light">Lume Hotel</h3>
        <p className="text-gray-400 mt-2">Where calm meets elegance.</p>
        
        <div className="mt-8 flex justify-center space-x-6 text-gray-400">
          <a href="#" className="hover:text-white transition">Instagram</a>
          <a href="#" className="hover:text-white transition">Facebook</a>
          <a href="#" className="hover:text-white transition">Privacy</a>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Lume Hotel. All rights reserved.
        </div>
      </div>
    </footer>
  );
}