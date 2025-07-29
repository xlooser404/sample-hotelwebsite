import { useParams } from 'react-router-dom';
import AnimatedSection from '../components/sections/AnimatedSection';

// Mock detailed room data (you can later move this to a JSON file or API)
const roomData = {
  1: {
    name: "Deluxe Room",
    category: "Standard",
    price: "$180/night",
    image: "/images/room1.jpg",
    gallery: [
      "/images/room1.jpg",
      "/images/gallery1.jpg",
      "/images/gallery2.jpg",
      "/images/gallery4.jpg",
    ],
    description: `
      The Deluxe Room is designed for comfort and serenity, offering a peaceful retreat after a day of exploration. 
      Floor-to-ceiling windows frame breathtaking mountain views, while natural materials and a neutral palette 
      create a calming atmosphere. Ideal for couples or solo travelers.
    `,
    features: [
      "King-size bed with luxury linens",
      "Private balcony with outdoor seating",
      "Ensuite bathroom with rainfall shower",
      "Free high-speed Wi-Fi",
      "Smart TV with streaming services",
      "Mini bar & in-room safe",
      "Air conditioning & heating",
      "Daily housekeeping",
    ],
    details: {
      size: "42 m²",
      capacity: "2 Guests",
      bed: "1 King Bed",
      view: "Mountain View",
      balcony: "Yes",
      accessibility: "No",
    },
  },
  2: {
    name: "Ocean Suite",
    category: "Suite",
    price: "$250/night",
    image: "/images/room2.jpg",
    gallery: [
      "/images/room2.jpg",
      "/images/gallery3.jpg",
      "/images/gallery5.jpg",
      "/images/hero2.jpg",
    ],
    description: `
      Wake up to the sound of waves in our Ocean Suite, featuring a spacious layout with a separate living area 
      and floor-to-ceiling glass doors that open to a private terrace. Perfect for romantic getaways or special occasions.
    `,
    features: [
      "King bed with premium mattress",
      "Private oceanfront terrace",
      "Spa-inspired bathroom with bathtub",
      "Nespresso machine & welcome amenities",
      "Robes and slippers provided",
      "Complimentary spa access",
      "Soundproof windows",
      "Work desk with ergonomic chair",
    ],
    details: {
      size: "55 m²",
      capacity: "2 Guests",
      bed: "1 King Bed",
      view: "Ocean View",
      balcony: "Yes (Oceanfront)",
      accessibility: "Yes (on request)",
    },
  },
  3: {
    name: "Forest Villa",
    category: "Villa",
    price: "$320/night",
    image: "/images/room3.jpg",
    gallery: [
      "/images/room3.jpg",
      "/images/gallery6.jpg",
      "/images/hero3.jpg",
      "/images/gallery1.jpg",
    ],
    description: `
      Nestled among the trees, our Forest Villa offers ultimate privacy and connection to nature. 
      With two bedrooms, a fully equipped kitchenette, and a spacious living area, it's perfect for families or small groups.
    `,
    features: [
      "Two separate bedrooms",
      "Full kitchenette (fridge, microwave, sink)",
      "Dining area & living room",
      "Private garden entrance",
      "Outdoor shower",
      "Fireplace",
      "Children-friendly amenities",
      "Eco-friendly toiletries",
    ],
    details: {
      size: "85 m²",
      capacity: "4 Guests",
      bed: "1 King + 2 Singles",
      view: "Forest & Garden",
      balcony: "Yes (Garden Access)",
      accessibility: "No",
    },
  },
};

export default function RoomDetailPage() {
  const { id } = useParams();
  const room = roomData[id];

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-xl text-gray-600">Room not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      {/* Hero Section */}
      <AnimatedSection delay={100}>
      <div
        className="h-96 md:h-[500px] w-full bg-cover bg-center rounded-b-3xl mb-10"
        style={{ backgroundImage: `url(${room.image})` }}
      ></div>

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10">
          <span className="text-sm uppercase tracking-wider text-gray-500">{room.category}</span>
          <h1 className="text-4xl font-light mt-1">{room.name}</h1>
          <p className="text-2xl font-light text-gray-700 mt-2">{room.price}</p>
        </div>

        {/* Gallery */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6">Room Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {room.gallery.map((img, idx) => (
              <div
                key={idx}
                className={`h-60 bg-cover bg-center rounded-lg ${
                  idx === 0 ? 'sm:col-span-2 h-80' : ''
                }`}
                style={{ backgroundImage: `url(${img})` }}
              ></div>
            ))}
          </div>
        </section>

        {/* Description */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6">About This Room</h2>
          <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
            {room.description.trim()}
          </p>
        </section>

        {/* Details Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6">Room Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(room.details).map(([key, value]) => (
              <div key={key} className="p-4 border border-gray-200 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <p className="mt-1 text-gray-900">{value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Amenities */}
        <section className="mb-16">
          <h2 className="text-2xl font-light mb-6">Amenities</h2>
          <ul className="space-y-3">
            {room.features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <div className="border-t pt-10 text-center">
          <button className="px-10 py-4 bg-gray-900 text-white font-light hover:bg-gray-800 transition-all duration-300 text-lg">
            Book This Room
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Free cancellation up to 48 hours before check-in
          </p>
        </div>
      </div>
      </AnimatedSection>
    </div>
    
  );
}