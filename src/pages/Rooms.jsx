import { Link } from 'react-router-dom';
import AnimatedSection from '../components/sections/AnimatedSection';

// You can move this to `utils/data.js` if not already there
const rooms = [
  {
    id: 1,
    name: "Deluxe Room",
    type: "standard",
    price: "$180/night",
    image: "/images/room1.jpg",
    features: ["King Bed", "Mountain View", "Free Wi-Fi", "Balcony"],
    desc: "Spacious room with modern furnishings and panoramic views.",
  },
  {
    id: 2,
    name: "Ocean Suite",
    type: "suite",
    price: "$250/night",
    image: "/images/room2.jpg",
    features: ["Private Balcony", "Ocean View", "Spa Access", "King Bed"],
    desc: "Luxurious suite with direct ocean access and sunset views.",
  },
  {
    id: 3,
    name: "Forest Villa",
    type: "villa",
    price: "$320/night",
    image: "/images/room3.jpg",
    features: ["Two Bedrooms", "Garden Access", "Kitchenette", "Living Room"],
    desc: "Private villa nestled in the forest, perfect for families.",
  },
];

export default function Rooms() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      {/* Header */}
      <AnimatedSection delay={100}>
      <div className="px-6 max-w-6xl mx-auto mb-12">
        <h1 className="text-4xl font-light">Our Rooms</h1>
        <p className="text-gray-600 mt-4 max-w-2xl">
          Choose from our thoughtfully designed accommodations, each offering comfort, 
          elegance, and a connection to nature.
        </p>
      </div>

      {/* Rooms Grid */}
      <div className="px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="flex flex-col rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Image */}
              <div
                className="h-56 bg-cover bg-center"
                style={{ backgroundImage: `url(${room.image})` }}
              ></div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div>
                  <h3 className="text-xl font-medium">{room.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{room.desc}</p>

                  {/* Features */}
                  <ul className="mt-4 space-y-1">
                    {room.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-700 text-sm flex items-center">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price & Button */}
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-900">{room.price}</span>
                  <Link
                    to={`/rooms/${room.id}`}
                    className="px-5 py-2 border border-gray-900 text-gray-900 text-sm font-light hover:bg-gray-900 hover:text-white transition-all duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </AnimatedSection>
    </div>
  );
}