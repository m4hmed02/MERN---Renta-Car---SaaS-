import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { ShoppingCart, Calendar, Clock, CheckCircle, XCircle } from 'lucide-react';

const Cart = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchMyBookings = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/bookings/my-booking`, {
        credentials: 'include'
      });
      const data = await res.json();
      if (data.success) {
        setBookings(data.bookings);
      } else {
        setError(data.message || 'Failed to fetch cart items');
      }
    } catch (err) {
      setError('An error occurred loading your cart');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyBookings();
  }, []);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'pending':
        return (
          <span className="flex items-center gap-1 text-sm font-bold bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
            <Clock className="w-4 h-4" /> Pending Approval
          </span>
        );
      case 'approved':
        return (
          <span className="flex items-center gap-1 text-sm font-bold bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
            <CheckCircle className="w-4 h-4" /> Approved - Ready to Pay
          </span>
        );
      case 'paid':
        return (
          <span className="flex items-center gap-1 text-sm font-bold bg-green-100 text-green-600 px-3 py-1 rounded-full">
            <CheckCircle className="w-4 h-4" /> Paid & Confirmed
          </span>
        );
      case 'cancelled':
        return (
          <span className="flex items-center gap-1 text-sm font-bold bg-red-100 text-red-600 px-3 py-1 rounded-full">
            <XCircle className="w-4 h-4" /> Cancelled
          </span>
        );
      default:
        return (
          <span className="flex items-center gap-1 text-sm font-bold bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
            Unknown Status
          </span>
        );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-12 pt-32">
        <div className="flex items-center gap-3 mb-8">
          <ShoppingCart className="w-8 h-8 text-gray-900" />
          <h1 className="text-3xl font-bold text-gray-900">My Cart & Bookings</h1>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {bookings.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingCart className="w-10 h-10 text-gray-400" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Looks like you haven't booked any vehicles yet.</p>
            <button 
              onClick={() => navigate('/browse')}
              className="px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Browse Cars
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {bookings.slice().reverse().map((booking) => (
              <div key={booking._id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col md:flex-row">
                
                {/* Vehicle Image */}
                <div className="w-full md:w-64 h-48 md:h-auto bg-gray-100 shrink-0">
                  {booking.vehicle?.image ? (
                    <img 
                      src={`${import.meta.env.VITE_SERVER_URL}/vehicleImages/${booking.vehicle.image}`} 
                      alt={booking.vehicle.name} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
                  )}
                </div>

                {/* Booking Details */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{booking.vehicle?.name || 'Unknown Vehicle'}</h3>
                        <p className="text-gray-500">{booking.vehicle?.brand} • {booking.vehicle?.year}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gray-900">${booking.totalPrice}</p>
                        <p className="text-sm text-gray-500">Total Price</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 mb-6">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-5 h-5 text-gray-400" />
                        <span className="text-sm font-medium">
                          {new Date(booking.startDate).toLocaleDateString()} - {new Date(booking.endDate).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions & Status */}
                  <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-gray-100 gap-4">
                    <div>
                      {getStatusBadge(booking.status)}
                    </div>
                    
                    <button
                      onClick={() => navigate(`/checkout/${booking._id}`)}
                      disabled={booking.status !== 'approved'}
                      className={`px-8 py-3 rounded-lg font-bold transition-all duration-300 w-full sm:w-auto ${
                        booking.status === 'approved' 
                          ? 'bg-linear-to-r from-gray-900 to-black text-white hover:shadow-lg hover:-translate-y-1' 
                          : booking.status === 'paid'
                          ? 'bg-green-500 text-white cursor-not-allowed opacity-50 hidden'
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {booking.status === 'pending' ? 'Waiting for Approval...' : 'Proceed to Checkout →'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
