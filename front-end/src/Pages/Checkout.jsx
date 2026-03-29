import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Load Stripe outside of components to avoid recreating Stripe object on every render.
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_placeholder');

// Stripe Payment Form Component
const PaymentForm = ({ booking, onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/payment/create-intent`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({ bookingId: booking._id })
        });
        const data = await res.json();
        if (data.success) {
          setClientSecret(data.clientSecret);
        } else {
          setError(data.message || 'Failed to initialize payment');
        }
      } catch (err) {
        setError('An error occurred initializing payment.');
      }
    };
    fetchClientSecret();
  }, [booking._id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements || !clientSecret) return;

    setProcessing(true);
    setError(null);

    const cardElement = elements.getElement(CardElement);

    const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: { card: cardElement }
    });

    if (stripeError) {
      setError(stripeError.message);
      setProcessing(false);
    } else if (paymentIntent.status === 'succeeded') {
      try {
        const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/payment/confirm`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({
            bookingId: booking._id,
            paymentIntentId: paymentIntent.id
          })
        });
        const data = await res.json();
        
        if (data.success) {
          onSuccess(data.booking);
        } else {
          setError(data.message || 'Payment confirmation failed');
        }
      } catch (err) {
        setError('Error confirming payment with server');
      }
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
      <h3 className="text-xl font-bold text-gray-800">Enter Payment Details</h3>
      <div className="p-4 border border-gray-300 rounded-lg bg-gray-50">
        <CardElement options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': { color: '#aab7c4' },
            },
            invalid: { color: '#9e2146' },
          },
        }} />
      </div>
      {error && <div className="text-red-500 text-sm font-semibold">{error}</div>}
      <button 
        type="submit" 
        disabled={!stripe || processing || !clientSecret}
        className="px-8 py-4 bg-linear-to-r from-gray-900 to-black text-white rounded-lg font-bold text-lg cursor-pointer transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {processing ? 'Processing...' : `Pay $${booking.totalPrice}`}
      </button>
    </form>
  );
};

const Checkout = () => {
  const { bookingId } = useParams();
  const navigate = useNavigate();

  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookingDetails = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/bookings/my-booking`, {
          credentials: 'include'
        });
        const result = await res.json();
        if (result.success) {
          const foundBooking = result.bookings.find(b => b._id === bookingId);
          if (foundBooking) {
            setBooking(foundBooking);
          } else {
            setError('Booking not found in your account.');
          }
        } else {
          setError('Failed to fetch bookings');
        }
      } catch (err) {
        setError('Error connecting to the server.');
      } finally {
        setLoading(false);
      }
    };

    fetchBookingDetails();
  }, [bookingId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-xl font-bold">Loading Checkout...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!booking) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-xl text-red-500 font-bold">{error || "Booking not found"}</p>
        </div>
        <Footer />
      </div>
    );
  }

  const { vehicle } = booking;

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto px-4 lg:px-6 bg-gray-50 min-h-screen py-24 sm:py-32">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          
          <div className="grid md:grid-cols-2">
            {/* Left side: Booking Summary */}
            <div className="bg-gray-900 text-white p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">Final Checkout</h2>
                <p className="text-gray-400 mb-8">Secure your rental booking.</p>
                
                <div className="w-full h-48 bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center mb-6">
                   {vehicle?.image ? (
                     <img src={`${import.meta.env.VITE_SERVER_URL}/vehicleImages/${vehicle.image}`} alt={vehicle.name} className="w-full h-full object-cover" />
                   ) : (
                     <span className="text-gray-500">No Image</span>
                   )}
                </div>
                
                <h3 className="text-2xl font-bold mb-1">{vehicle?.name || 'Vehicle'}</h3>
                <p className="text-gray-400 mb-8">{new Date(booking.startDate).toLocaleDateString()} to {new Date(booking.endDate).toLocaleDateString()}</p>
              </div>

              <div className="flex justify-between items-center py-4 border-t border-gray-700 mt-auto">
                <span className="text-white font-bold text-xl">Total Output</span>
                <span className="font-bold text-3xl text-green-400">${booking.totalPrice}</span>
              </div>
            </div>

            {/* Right side: Payment Area */}
            <div className="p-8">
              {booking.status === 'approved' ? (
                // State 3: Approved / Pay Now
                <div className="flex flex-col h-full justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-green-100 text-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Booking Approved!</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Complete your payment securely via Stripe below to finalize the rental.</p>
                  
                  <Elements stripe={stripePromise}>
                    <PaymentForm 
                      booking={booking} 
                      onSuccess={(updatedBooking) => setBooking(updatedBooking)} 
                    />
                  </Elements>
                </div>
              ) : booking.status === 'paid' ? (
                // State 4: Paid
                <div className="flex flex-col items-center justify-center h-full text-center py-10">
                  <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-200">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">Payment Successful!</h3>
                  <p className="text-gray-600 mb-8">
                    You have successfully finalized your booking for the {vehicle?.name}. Enjoy your ride!
                  </p>
                  <button 
                    onClick={() => navigate('/cart')}
                    className="px-8 py-3 bg-gray-900 text-white rounded-lg font-bold"
                  >
                    Return to Cart
                  </button>
                </div>
              ) : (
                // Other states (pending, cancelled, etc)
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Status: {booking.status}</h3>
                  <p className="text-gray-600">This booking is not available for payment at this time.</p>
                  <button onClick={() => navigate('/cart')} className="mt-6 px-6 py-2 border rounded-lg hover:bg-gray-100">Back to Cart</button>
                </div>
              )}
            </div>
          </div>
          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
