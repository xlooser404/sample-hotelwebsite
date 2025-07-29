const images = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.jpg",
];

export default function GallerySection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-12">Photo Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="aspect-square bg-cover bg-center rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 transform hover:scale-[1.02]"
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}