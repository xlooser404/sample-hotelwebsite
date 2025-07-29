export default function RoomsSection() {
  const rooms = [
    {
      name: "Deluxe Room",
      price: "$180/night",
      image: "/images/room1.jpg",
      desc: "Spacious room with king bed and city view.",
    },
    {
      name: "Ocean Suite",
      price: "$250/night",
      image: "/images/room2.jpg",
      desc: "Private balcony with panoramic ocean views.",
    },
    {
      name: "Family Villa",
      price: "$320/night",
      image: "/images/room3.jpg",
      desc: "Two bedrooms, full kitchen, and garden access.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-light text-center mb-12">Our Rooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-medium">{room.name}</h3>
                <p className="text-gray-600 mt-1">{room.desc}</p>
                <p className="mt-4 text-lg font-semibold">{room.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}