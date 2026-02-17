import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const CarDetail = () => {

  const { id } = useParams()

  const [vehicle, setVehicle] = useState([])

  const fetchVehicle = async () => {
    let res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/vehicles/getVehiclesById/${id}`, {
      credentials: 'include'
    })

    let result = await res.json()
    setVehicle(result.data)
  }

  useEffect(() => {
    fetchVehicle()
  }, [])

  const handleReview = async () => {


    let result = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/vehicles/addRating/${id}`,{
      method: PUT,
      headers:{
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({

      })
    })

  }

  return (
    <>
      <Header />

      <div className="max-w-6xl mx-auto px-4 lg:px-6 bg-gray-50 min-h-screen py-6 sm:py-8">
        {/* Car Image and Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 bg-white p-6 sm:p-8 rounded-lg shadow-md my-30">

          {/* Left Section Car Image */}
          <div className="flex items-center justify-center">
            <div className="w-full aspect-video sm:aspect-square lg:aspect-auto lg:h-80 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center border-2 border-gray-200">
              <img src={`${import.meta.env.VITE_SERVER_URL}/vehicleImages/${vehicle.image}`} alt="car" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Section Car Details */}
          <div className="flex flex-col justify-start gap-5 sm:gap-6">

            <div className="pb-5 border-b-2 border-gray-100">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{vehicle.name}</h1>
              <p className="text-lg sm:text-xl text-gray-600 font-medium">{vehicle.brand}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border-l-4 border-black">
                <span className="font-semibold text-gray-600 text-sm sm:text-base">Price:</span>
                <span className="font-bold text-gray-900 text-base sm:text-lg">{vehicle.price} /hr</span>
              </div>

              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border-l-4 border-black">
                <span className="font-semibold text-gray-600 text-sm sm:text-base">Year:</span>
                <span className="font-bold text-gray-900 text-base sm:text-lg">{vehicle.year}</span>
              </div>

              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border-l-4 border-black">
                <span className="font-semibold text-gray-600 text-sm sm:text-base">Model:</span>
                <span className="font-bold text-gray-900 text-base sm:text-lg">{vehicle.model}</span>
              </div>


            </div>

            <div className="p-5 bg-gray-50 rounded-lg border-l-4 border-black">
              <h3 className="font-bold text-gray-900 mb-2 text-base sm:text-lg">Description</h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {vehicle.description}
              </p>
            </div>

            <button className="px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-900 to-black text-white rounded-lg font-bold text-base sm:text-lg cursor-pointer transition-all duration-300 uppercase tracking-wider hover:shadow-lg hover:-translate-y-1 active:translate-y-0">
              Book Now
            </button>
          </div>
        </div>

        {/* Review Section */}
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Ratings & Reviews</h2>
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-8">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                className="flex flex-col items-center gap-2 bg-gray-100 border-2 border-gray-300 px-4 sm:px-6 py-3 sm:py-4 rounded-lg cursor-pointer transition-all duration-300 font-semibold text-gray-600 text-xs sm:text-sm min-w-16 sm:min-w-20 hover:bg-amber-100 hover:border-amber-400 hover:-translate-y-1 active:translate-y-0"
                onClick={handleReview}
              >
                <span className="text-2xl sm:text-3xl text-amber-400">★</span>
                <span className="uppercase tracking-wider">{star}</span>

              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-center p-2 sm:p-3">
              <span className="text-gray-600 font-semibold text-sm sm:text-base">Average Rating:</span>
              <span className="text-black font-bold text-lg sm:text-2xl">4.5 ★</span>
            </div>
            <div className="flex justify-between items-center p-2 sm:p-3">
              <span className="text-gray-600 font-semibold text-sm sm:text-base">Total Reviews:</span>
              <span className="text-black font-bold text-lg sm:text-2xl">84</span>
            </div>
          </div>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg border-2 border-gray-200 text-center">
            <h3 className="text-sm sm:text-base font-semibold text-gray-700">Your Rating</h3>
            <div className="flex items-center justify-center gap-2 mt-2">
              <span className="text-amber-400 text-lg sm:text-xl">★ ★ ★ ★ ☆</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">Current user's rating will appear here. (UI only — logic not implemented)</p>
          </div>
        </div>

        {/* Comments Section */}
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Customer Reviews</h2>

          {/* Add Comment Form */}
          <div className="mb-10 p-6 sm:p-8 bg-gray-50 rounded-lg border-2 border-gray-200">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Leave a Review</h3>
            <textarea
              className="w-full p-3 sm:p-4 border-2 border-gray-300 rounded-lg text-sm sm:text-base font-inherit resize-none text-gray-900 transition-all duration-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              placeholder="Share your experience with this car..."
              rows="5"
            ></textarea>
            <button className="mt-3 px-6 sm:px-8 py-2 sm:py-3 bg-green-500 text-white rounded-lg font-bold text-sm sm:text-base cursor-pointer transition-all duration-300 uppercase tracking-wider hover:bg-green-600 hover:-translate-y-1 active:translate-y-0">
              Submit Review
            </button>
          </div>

          {/* Comments List */}
          <div className="flex flex-col gap-5">
            {/* Single Comment */}
            <div className="p-5 sm:p-6 bg-gray-50 rounded-lg border-l-4 border-blue-500 transition-all duration-300 hover:shadow-md">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                <div className="flex gap-3 sm:gap-4 items-start">
                  <img
                    src="https://via.placeholder.com/40x40?text=User"
                    alt="user"
                    className="w-10 h-10 rounded-full object-cover bg-gray-300 flex-shrink-0"
                  />
                  <div>
                    <h4 className="m-0 text-base sm:text-lg font-bold text-gray-900">John Doe</h4>
                    <span className="block text-xs sm:text-sm text-gray-500 mt-1">2 days ago</span>
                  </div>
                </div>
                <div className="flex gap-1">
                  <span className="text-base sm:text-lg text-amber-400 tracking-wider">★★★★★</span>
                </div>
              </div>
              <p className="m-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                Excellent car! Very comfortable and smooth ride. Highly recommended for anyone looking for a reliable vehicle.
              </p>
            </div>

            {/* Single Comment */}
            <div className="p-5 sm:p-6 bg-gray-50 rounded-lg border-l-4 border-blue-500 transition-all duration-300 hover:shadow-md">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                <div className="flex gap-3 sm:gap-4 items-start">
                  <img
                    src="https://via.placeholder.com/40x40?text=User"
                    alt="user"
                    className="w-10 h-10 rounded-full object-cover bg-gray-300 flex-shrink-0"
                  />
                  <div>
                    <h4 className="m-0 text-base sm:text-lg font-bold text-gray-900">Jane Smith</h4>
                    <span className="block text-xs sm:text-sm text-gray-500 mt-1">1 week ago</span>
                  </div>
                </div>
                <div className="flex gap-1">
                  <span className="text-base sm:text-lg text-amber-400 tracking-wider">★★★★☆</span>
                </div>
              </div>
              <p className="m-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                Great performance and fuel efficiency. The interior could be more spacious, but overall a good choice.
              </p>
            </div>

            {/* Single Comment */}
            <div className="p-5 sm:p-6 bg-gray-50 rounded-lg border-l-4 border-blue-500 transition-all duration-300 hover:shadow-md">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                <div className="flex gap-3 sm:gap-4 items-start">
                  <img
                    src="https://via.placeholder.com/40x40?text=User"
                    alt="user"
                    className="w-10 h-10 rounded-full object-cover bg-gray-300 flex-shrink-0"
                  />
                  <div>
                    <h4 className="m-0 text-base sm:text-lg font-bold text-gray-900">Michael Johnson</h4>
                    <span className="block text-xs sm:text-sm text-gray-500 mt-1">2 weeks ago</span>
                  </div>
                </div>
                <div className="flex gap-1">
                  <span className="text-base sm:text-lg text-amber-400 tracking-wider">★★★★★</span>
                </div>
              </div>
              <p className="m-0 text-sm sm:text-base text-gray-700 leading-relaxed">
                Best investment! Purchased 6 months ago and haven't had any issues. Customer service is also fantastic.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CarDetail
