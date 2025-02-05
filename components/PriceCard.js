export default function PriceCard({ title, price, image, description }) {
  return (
    <div className="relative group border rounded-xl overflow-hidden shadow-lg bg-white transition-all transform hover:scale-105 hover:shadow-xl">
      
      {/* Image Section */}
      {image && (
        <div className="relative">
          <img src={image} alt={title} className="w-full h-56 object-cover group-hover:opacity-90 transition-opacity" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-40 group-hover:opacity-50"></div>
        </div>
      )}

      {/* Content Section */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        {description && <p className="text-sm text-gray-600 mt-2">{description}</p>}

        {/* Price Display */}
        {price && <p className="text-2xl font-semibold text-blue-600 mt-3">${price}</p>}

        {/* Included Services (Icons for better UI) */}
        <div className="flex justify-center space-x-3 text-gray-700 mt-3">
          <span className="flex items-center space-x-1">
            <span className="text-lg">🏨</span>
            <span className="text-sm">Hotel</span>
          </span>
          <span className="flex items-center space-x-1">
            <span className="text-lg">✈️</span>
            <span className="text-sm">Flight</span>
          </span>
          <span className="flex items-center space-x-1">
            <span className="text-lg">🍽</span>
            <span className="text-sm">Food</span>
          </span>
        </div>

        {/* Book Now Button */}
        <button
          type="button"
          className="mt-5 bg-blue-700 hover:bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-all hover:scale-105"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
