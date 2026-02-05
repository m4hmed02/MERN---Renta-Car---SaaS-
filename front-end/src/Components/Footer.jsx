import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='w-full bg-[#050B20] text-white mt-20'>
      
      {/* Top Border */}
      <div className='h-px bg-blue-600'></div>

      {/* Main Footer Content */}
      <div className='w-[90%] mx-auto py-20'>
        <div className='grid grid-cols-5 gap-10'>

          {/* Company Column */}
          <div className='flex flex-col gap-4'>
            <h3 className='font-semibold text-lg'>Company</h3>
            <div className='flex flex-col gap-3 text-sm text-gray-300'>
              <Link to='#' className='hover:text-blue-600 transition'>About Us</Link>
              <Link to='#' className='hover:text-blue-600 transition'>Blog</Link>
              <Link to='#' className='hover:text-blue-600 transition'>Services</Link>
              <Link to='#' className='hover:text-blue-600 transition'>FAQs</Link>
              <Link to='#' className='hover:text-blue-600 transition'>Terms</Link>
              <Link to='#' className='hover:text-blue-600 transition'>Contact Us</Link>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className='flex flex-col gap-4'>
            <h3 className='font-semibold text-lg'>Quick Links</h3>
            <div className='flex flex-col gap-3 text-sm text-gray-300'>
              <Link to='#' className='hover:text-blue-600 transition'>Get in Touch</Link>
              <Link to='#' className='hover:text-blue-600 transition'>Help center</Link>
              <Link to='#' className='hover:text-blue-600 transition'>Live chat</Link>
              <Link to='#' className='hover:text-blue-600 transition'>How it works</Link>
            </div>
          </div>

          {/* Our Brands Column */}
          <div className='flex flex-col gap-4'>
            <h3 className='font-semibold text-lg'>Our Brands</h3>
            <div className='flex flex-col gap-3 text-sm text-gray-300'>
              <Link to='#' className='hover:text-blue-600 transition'>Toyota</Link>
              <Link to='#' className='hover:text-blue-600 transition'>Porsche</Link>
              <Link to='#' className='hover:text-blue-600 transition'>Audi</Link>
              <Link to='#' className='hover:text-blue-600 transition'>BMW</Link>
              <Link to='#' className='hover:text-blue-600 transition'>Ford</Link>
              <Link to='#' className='hover:text-blue-600 transition'>Nissan</Link>
              <Link to='#' className='hover:text-blue-600 transition'>Peugeot</Link>
              <Link to='#' className='hover:text-blue-600 transition'>Volkswagen</Link>
            </div>
          </div>

          {/* Vehicles Type Column */}
          <div className='flex flex-col gap-4'>
            <h3 className='font-semibold text-lg'>Vehicles Type</h3>
            <div className='flex flex-col gap-3 text-sm text-gray-300'>
              <Link to='#' className='hover:text-blue-600 transition'>Sedan</Link>
              <Link to='#' className='hover:text-blue-600 transition'>Hatchback</Link>
              <Link to='#' className='hover:text-blue-600 transition'>SUV</Link>
              <Link to='#' className='hover:text-blue-600 transition'>Hybrid</Link>
              <Link to='#' className='hover:text-blue-600 transition'>Electric</Link>
              <Link to='#' className='hover:text-blue-600 transition'>Coupe</Link>
              <Link to='#' className='hover:text-blue-600 transition'>Truck</Link>
              <Link to='#' className='hover:text-blue-600 transition'>Convertible</Link>
            </div>
          </div>

          {/* Mobile App Column */}
          <div className='flex flex-col gap-4'>
            <h3 className='font-semibold text-lg'>Our Mobile App</h3>
            
            {/* App Download Buttons */}
            <div className='flex flex-col gap-3'>
              <button className='bg-gray-900 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-200 transition text-sm'>
                <img src='/icons/ios.svg' alt='Apple' className='w-5 h-5' />
                <div className='flex flex-col text-left'>
                  <span className='text-xs'>Download on the</span>
                  <span className='font-semibold'>Apple Store</span>
                </div>
              </button>

              <button className='bg-gray-900 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-200 transition text-sm'>
                <img src='/icons/play.svg' alt='Google Play' className='w-5 h-5' />
                <div className='flex flex-col text-left'>
                  <span className='text-xs'>Get it on</span>
                  <span className='font-semibold'>Google Play</span>
                </div>
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className='w-[90%] mx-auto py-6 flex justify-between items-center text-sm text-gray-400 border-t border-gray-700'>
        <p>© 2025 example.com. All rights reserved.</p>
        <div className='flex gap-4'>
          <Link to='#' className='hover:text-blue-600 transition'>Terms & Conditions</Link>
          <span>•</span>
          <Link to='#' className='hover:text-blue-600 transition'>Privacy Notice</Link>
        </div>
      </div>

    </footer>
  )
}

export default Footer
