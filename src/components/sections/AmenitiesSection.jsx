const amenities = [
  { icon: "🏊", label: "Infinity Pool" },
  { icon: "🧖", label: "Spa & Wellness" },
  { icon: "🍽️", label: "Organic Dining" },
  { icon: "🚶", label: "Nature Trails" },
  { icon: "🧘", label: "Yoga Pavilion" },
  { icon: "🍷", label: "Wine Terrace" },
];

export default function AmenitiesSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-12">Luxury Amenities</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {amenities.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300"
            >
              <span className="text-4xl mb-3">{item.icon}</span>
              <span className="text-gray-800 font-light">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}