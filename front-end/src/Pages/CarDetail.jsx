import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Star } from "lucide-react"
import CommentCard from "../Components/cards/CommentCard"

const CarDetail = () => {

  const { id } = useParams()
  const navigate = useNavigate()

  const [vehicle, setVehicle] = useState({})
  const [comment, setComment] = useState("")
  const [reviews, setreviews] = useState([])
  
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [error, setError] = useState(null)
  const [bookingLoading, setBookingLoading] = useState(false)

  useEffect(() => {
    const fetchVehicle = async () => {
      let res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/vehicles/getVehiclesById/${id}`, {
        credentials: 'include'
      })

      let result = await res.json()
      setVehicle(result.data)
    }

    const fetchReviews = async () => {
      let res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/vehicles/getVehicleReviews/${id}`, {
        credentials: 'include'
      })

      let result = await res.json()
      setreviews(result.reviews)
      console.log(result.reviews)
    }

    fetchVehicle();
    fetchReviews()
  }, [id]);

  // This is will be used for updaing vehicle rating
  const handleRating = async (starValue) => {
    let res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/vehicles/addRating/${id}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        rating: starValue
      })
    })

    let result = await res.json()
    console.log(result)
  }


  const commentHandleChange = (e) => {
    setComment(e.target.value)
  }

  const commentSubmit = async () => {

    if (!comment) {
      alert("Please enter a comment")
      return
    }
    let res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/vehicles/addComment`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        vehicleId: id,
        comment
      })
    })

    let result = await res.json()
    console.log(result)
    setComment("")
  }

  const handleBookingSubmit = async () => {
    setError(null);
    if (!startDate || !endDate) {
      setError('Please select both start and end dates.');
      return;
    }
    const start = new Date(startDate);
    const end = new Date(endDate);
    if (start >= end) {
      setError('End date must be after start date.');
      return;
    }

    setBookingLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/bookings/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          vehicleId: id,
          startDate,
          endDate
        })
      });
      
      const result = await res.json();
      if (result.success) {
        navigate('/cart');
      } else {
        setError(result.message || 'Failed to create booking');
      }
    } catch (err) {
      setError('An error occurred while booking');
    } finally {
      setBookingLoading(false);
    }
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

            {/* Booking Dates Form */}
            <div className="flex flex-col gap-4 mt-2">
              <h3 className="font-bold text-gray-900 text-lg">Select Rental Dates</h3>
              {error && <div className="text-red-500 text-sm font-semibold">{error}</div>}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Start Date</label>
                  <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">End Date</label>
                  <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black" />
                </div>
              </div>
            </div>

            <button 
              onClick={handleBookingSubmit}
              disabled={bookingLoading}
              className="px-8 py-3 sm:py-4 bg-linear-to-r from-gray-900 to-black text-white rounded-lg font-bold text-base sm:text-lg cursor-pointer transition-all duration-300 uppercase tracking-wider hover:shadow-lg disabled:opacity-50 hover:-translate-y-1 active:translate-y-0">
              {bookingLoading ? 'Requesting...' : 'Add to Cart / Book Now'}
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
                onClick={() => handleRating(star)}
              >
                <span className="text-2xl sm:text-3xl text-amber-400">★</span>
                <span className="uppercase tracking-wider">{star}</span>

              </button>
            ))}

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 bg-gray-50 rounded-lg">

            <div className="flex justify-between items-center p-2 sm:p-3">
              <span className="text-gray-600 font-semibold text-sm sm:text-base">Average Rating:</span>
              <span className="text-black font-bold text-lg sm:text-2xl">

              </span>
            </div>

            <div className="flex justify-between items-center p-2 sm:p-3">
              <span className="text-gray-600 font-semibold text-sm sm:text-base">Total Reviews:</span>
              <span className="text-black font-bold text-lg sm:text-2xl">84</span>
            </div>

          </div>

          <div className="mt-4 p-4 bg-gray-50 rounded-lg border-2 border-gray-200 text-center">
            <h3 className="text-sm sm:text-base font-semibold text-gray-700">Your Rating</h3>

            <div className="flex items-center justify-center gap-2 mt-2">
              {
                [...Array(5)].map((_, i) => {
                  return (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${i < vehicle.rating ? 'fill-yellow-400 stroke-yellow-400' : 'stroke-gray-300'}`}
                    />
                  )
                })
              }

            </div>
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
              onChange={commentHandleChange}
              value={comment}
            ></textarea>

            <button
              className="mt-3 px-6 sm:px-8 py-2 sm:py-3 bg-green-500 text-white rounded-lg font-bold text-sm sm:text-base cursor-pointer transition-all duration-300 uppercase tracking-wider hover:bg-green-600 hover:-translate-y-1 active:translate-y-0"
              onClick={commentSubmit}
            >
              Submit Review
            </button>
          </div>

          {/* Comments List */}
          <div className="flex flex-col gap-5">

            {
              reviews.map((review) => (
                <CommentCard
                  key={review._id}
                  comment={review.comment}
                  time={review.createdAt}
                  userId={review.userId}
                />
              ))
            }


          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CarDetail
