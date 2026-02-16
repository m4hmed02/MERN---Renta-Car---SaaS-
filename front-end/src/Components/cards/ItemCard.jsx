import { Star, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

const ItemCard = (props) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all overflow-hidden">

      <div className="relative h-48 bg-gray-200 overflow-hidden">
        <img
          src={`${import.meta.env.VITE_SERVER_URL}/vehicleImages/${props.image}`}
          alt={props.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform"
        />
        {/* Like Button */}
        <button className="absolute top-3 right-3 bg-white rounded-full p-2 hover:bg-gray-100 transition">
          <Heart className="w-5 h-5 text-gray-400" />
        </button>
      </div>


      <div className="p-4">
        {/* Name */}
        <h3 className="text-lg font-bold text-gray-800 mb-1">{props.name}</h3>

        {/* Brand & Model */}
        <p className="text-sm text-gray-600 mb-3">
          {props.brand} • {props.model} • {props.year}
        </p>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {props.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.floor(props.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">({props.reviews})</span>
        </div>

        {/* Price and Button */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-gray-800">${props.price}</p>
            <p className="text-xs text-gray-600">per day</p>
          </div>
          <Link
            to={`/car-detail/${props.id}`}
            className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition font-semibold text-sm">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ItemCard
