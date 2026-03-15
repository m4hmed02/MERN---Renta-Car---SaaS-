import { Star, Heart, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'


const ItemCard = (props) => {

  const { user } = useContext(AuthContext)


  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all overflow-hidden">

      {console.log(props)}

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
          <span className="text-sm text-gray-600">({props.rating})</span>
        </div>

        {/* Price and Button */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-gray-800">${props.price}</p>
            <p className="text-xs text-gray-600">per day</p>
          </div>

          {
            user.role === 'admin' ?
              <span className='flex items-center gap-3' >

                <Trash2 size={24} className='text-red-600 hover:text-red-800 cursor-pointer transition' />

                <button
                  className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-900 transition font-semibold text-sm">
                  Mark as Rented
                </button>

              </span>
              :
              <Link
                to={`/car-detail/${props.id}`}
                className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-900 transition font-semibold text-sm">
                Book Now
              </Link>

          }
        </div>
      </div>
    </div>
  )
}

export default ItemCard
