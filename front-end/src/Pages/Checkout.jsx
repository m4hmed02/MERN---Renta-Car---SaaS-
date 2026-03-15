import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { CreditCard, Calendar, ShieldCheck } from 'lucide-react'

const Checkout = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-50 min-h-screen py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Checkout</h1>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">Complete your booking securely below.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12">
            
            {/* Left Column: Billing & Payment */}
            <div className="w-full lg:w-2/3 space-y-8">
              
              {/* Personal Details Form */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="bg-black text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span>
                  Personal Details
                </h2>
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-5" onSubmit={e => e.preventDefault()}>
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-gray-700">First Name</label>
                    <input type="text" placeholder="John" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-gray-700">Last Name</label>
                    <input type="text" placeholder="Doe" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" />
                  </div>
                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="text-sm font-semibold text-gray-700">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                    <input type="tel" placeholder="+1 (555) 000-0000" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-gray-700">City</label>
                    <input type="text" placeholder="New York" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" />
                  </div>
                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="text-sm font-semibold text-gray-700">Address Line</label>
                    <input type="text" placeholder="123 Main Street, Apt 4B" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" />
                  </div>
                </form>
              </div>

              {/* Booking Details */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="bg-black text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span>
                  Booking Details
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="p-4 border border-gray-200 rounded-xl bg-gray-50 flex items-start gap-4">
                    <Calendar className="text-gray-400 mt-1 w-6 h-6" />
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Pick-up Date</p>
                      <p className="font-bold text-gray-900 mt-1">Oct 24, 2026</p>
                      <p className="text-sm text-gray-600">10:00 AM</p>
                    </div>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-xl bg-gray-50 flex items-start gap-4">
                    <Calendar className="text-gray-400 mt-1 w-6 h-6" />
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Drop-off Date</p>
                      <p className="font-bold text-gray-900 mt-1">Oct 27, 2026</p>
                      <p className="text-sm text-gray-600">10:00 AM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="bg-black text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">3</span>
                  Payment Method
                </h2>

                <div className="space-y-4">
                  {/* Credit Card Option */}
                  <label className="flex items-center justify-between p-4 border-2 border-black rounded-xl cursor-pointer bg-gray-50 transition-all">
                    <div className="flex items-center gap-3">
                      <input type="radio" name="payment" defaultChecked className="w-5 h-5 accent-black cursor-pointer" />
                      <span className="font-semibold text-gray-900">Credit Card</span>
                    </div>
                    <CreditCard className="text-gray-700 w-6 h-6" />
                  </label>

                  {/* PayPal Option */}
                  <label className="flex items-center justify-between p-4 border-2 border-transparent hover:border-gray-200 rounded-xl cursor-pointer bg-white transition-all">
                    <div className="flex items-center gap-3">
                      <input type="radio" name="payment" className="w-5 h-5 accent-black cursor-pointer" />
                      <span className="font-semibold text-gray-600">PayPal</span>
                    </div>
                    <span className="font-bold text-blue-800 italic text-xl">PayPal</span>
                  </label>
                </div>

                {/* Card Details Form (mock) */}
                <div className="mt-6 space-y-5 border-t border-gray-100 pt-6">
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-gray-700">Card Number</label>
                    <div className="relative">
                      <input type="text" placeholder="0000 0000 0000 0000" className="w-full p-3 pl-10 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all font-mono" />
                      <CreditCard className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-gray-700">Expiration Date</label>
                      <input type="text" placeholder="MM/YY" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all font-mono" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-gray-700">CVC</label>
                      <input type="text" placeholder="123" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all font-mono" />
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column: Order Summary */}
            <div className="w-full lg:w-1/3">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 sticky top-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

                {/* Car Preview (Mock) */}
                <div className="flex gap-4 items-center pb-6 border-b border-gray-100 mb-6">
                  <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden shrink-0 border border-gray-200">
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-xs text-gray-500 text-center p-2">
                       Car Image
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Audi RS7 Sportback</h3>
                    <p className="text-sm text-gray-500">2023 Model • Automatic</p>
                    <div className="mt-2 inline-flex items-center gap-1.5 bg-gray-100 px-2.5 py-1 rounded-md text-xs font-semibold text-gray-700">
                      <ShieldCheck className="w-3.5 h-3.5 text-green-600" /> Insured
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-6 text-sm">
                  <div className="flex justify-between items-center text-gray-600">
                    <span>Rental Fee (3 Days)</span>
                    <span className="font-medium text-gray-900">$450.00</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-600">
                    <span>Delivery Charge</span>
                    <span className="font-medium text-gray-900">$20.00</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-600">
                    <span>Taxes & Fees</span>
                    <span className="font-medium text-gray-900">$47.00</span>
                  </div>
                  
                  {/* Coupon Code mock */}
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex gap-2">
                      <input type="text" placeholder="Promo Code" className="w-full p-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:outline-none focus:border-black" />
                      <button className="px-4 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-semibold transition-colors">Apply</button>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200 mb-8">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-sm text-gray-500 font-medium mb-1">Total Amount</p>
                      <p className="text-3xl font-extrabold text-gray-900">$517.00</p>
                    </div>
                  </div>
                </div>

                <button className="w-full py-4 sm:py-4.5 bg-gray-900 hover:bg-black text-white rounded-xl font-bold text-base sm:text-lg cursor-pointer transition-all duration-300 uppercase tracking-wide shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-0.5 active:translate-y-0 relative overflow-hidden group">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Confirm & Pay
                  </span>
                </button>

                <p className="text-xs text-center text-gray-500 mt-4 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-green-600" />
                  Payments are secure and encrypted
                </p>

              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Checkout