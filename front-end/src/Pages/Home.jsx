import {useState} from 'react'
import Header from '../Components/Header'
import ItemCard from '../Components/cards/ItemCard'
import Footer from '../Components/Footer'
import TestimonialCard from '../Components/cards/TestimonialCard'
import LoginForm from '../Components/LoginForm'

const Home = () => {

  return (
    <div className='w-full overflow-x-hidden'>

      <Header  currentPage="/"/>


      <section className='w-full relative'>
        <img className='' src="/main.png" alt="" />

        <div className="absolute top-50 translate-y-[-50] left-50 translate-x-[-50] flex flex-col gap-8">

          <div className='flex flex-col gap-3'>

            <p className='text-sm'>
              Find car for sale and rent near you
            </p>

            <div className="font-bold text-5xl">
              <div>4,675 Vehicles</div>
              <div>Available</div>
            </div>

          </div>

          <div className="buttons text-sm">
            <button className='bg-blue-600 text-white px-5 py-3 rounded-lg mr-3'>View All Cars</button>
            <button className='bg-white text-black px-5 py-3 rounded-lg border'>Become a Seller</button>
          </div>

          <div className="flex flex-col gap-3 text-sm">

            <p className=''>Browse by Featured Model</p>

            <div className="icons flex gap-2">

              <div className="icon flex gap-1 border border-[#E9E9E9] rounded-full px-3 py-1">
                <img src="/suv.svg" alt="" />
                <span>SUV</span>
              </div>

              <div className="icon flex gap-1 border border-[#E9E9E9] rounded-full px-3 py-1">
                <img src="/sedan.svg" alt="" />
                <span>Sedan</span>
              </div>

              <div className="icon flex gap-1 border border-[#E9E9E9] rounded-full px-3 py-1">
                <img src="/hatchback.svg" alt="" />
                <span>Hatchback</span>
              </div>

              <div className="icon flex gap-1 border border-[#E9E9E9] rounded-full px-3 py-1">
                <img src="/coupe.svg" alt="" />
                <span>Coupe</span>
              </div>

              <div className="icon flex gap-1 border border-[#E9E9E9] rounded-full px-3 py-1">
                <img src="/hybrid.svg" alt="" />
                <span>Hybrid</span>
              </div>

            </div>


          </div>

        </div>


      </section>


      <section className="w-[80%] mx-auto my-15">

        <div className="title text-2xl font-semibold mb-6">
          <span>Explore Our Premium Brands</span>
        </div>

        <div className="brands flex gap-2 text-sm">

          <div className="brand w-full flex flex-col items-center border border-[#E9E9E9] rounded-lg p-4">
            <img src="/brands/audi.svg" alt="" />
            <span>Audi</span>
          </div>

          <div className="brand w-full flex flex-col items-center border border-[#E9E9E9] rounded-lg p-4">
            <img src="/brands/bmw.svg" alt="" />
            <span>BMW</span>
          </div>

          <div className="brand w-full flex flex-col items-center border border-[#E9E9E9] rounded-lg p-4">
            <img src="/brands/ford.svg" alt="" />
            <span>Ford</span>
          </div>

          <div className="brand w-full flex flex-col items-center border border-[#E9E9E9] rounded-lg p-4">
            <img src="/brands/mercedies.svg" alt="" />
            <span>Mercedies Benz</span>
          </div>

          <div className="brand w-full flex flex-col items-center border border-[#E9E9E9] rounded-lg p-4">
            <img src="/brands/pougeot.svg" alt="" />
            <span>Pougeot</span>
          </div>

          <div className="brand w-full flex flex-col items-center border border-[#E9E9E9] rounded-lg p-4">
            <img src="/brands/volkswagen.svg" alt="" />
            <span>Volkswagen</span>
          </div>


        </div>


      </section>


      <section className="w-[80%] mx-auto my-15">

        <div className="title text-2xl font-semibold mb-6">
          Our Services
        </div>

        <div className='flex gap-5'>

          <div className="card w-full border border-[#E9E9E9] rounded-lg p-4 flex flex-col justify-between gap-1">
            <img className='rounded-sm w-full' src="/images/car1.svg" alt="" />

            <div className="title">
              Car Listing & Availability Management
            </div>

            <p className='text-sm text-black/50'>
              Easily list your cars for rent or sale with our user-friendly platform that allows you to manage availability and pricing in real-time.
            </p>

            <button className="border border-blue-600 w-full rounded-lg p-2 text-blue-600">
              View
            </button>

          </div>

          <div className="card w-full border border-[#E9E9E9] rounded-lg p-4 flex flex-col justify-between gap-1">
            <img className='rounded-sm w-full' src="/images/car2.svg" alt="" />
            <div className="title">
              Online Booking & Payments
            </div>

            <p className='text-sm text-black/50'>
              Our secure online booking system allows customers to reserve vehicles and make payments seamlessly, enhancing their overall experience.
            </p>

            <button className="border border-blue-600 w-full rounded-lg p-2 text-blue-600">
              View
            </button>

          </div>

          <div className="card w-full border border-[#E9E9E9] rounded-lg p-4 flex flex-col justify-between gap-1">
            <img className='rounded-sm w-full' src="/images/car3.svg" alt="" />
            <div className="title">
              User & Owner Dashboard
            </div>

            <p className='text-sm text-black/50'>
              Our intuitive dashboards provide both users and car owners with easy access to manage bookings, view transaction history, and update personal information.
            </p>

            <button className="border border-blue-600 w-full rounded-lg p-2 text-blue-600">
              View
            </button>

          </div>


        </div>


      </section>


      <section className="mt-15 relative">

        <div className="bgcontainer h-full w-[35%] rounded-tr-2xl bg-[#FAFBFD] absolute top-0 left-0 z-0">

        </div>

        <div className="mainContent flex relative z-10  gap-5 w-full mt-30 mr-30 ml-30 p-15">

          <div className="left w-[80%]">
            <video className='rounded-lg ' src="/Videos/Car.mp4"  muted></video>
          </div>

          <div className="right w-full flex flex-col justify-center gap-5">
            <div className='text-2xl font-semibold'>
              <div>Get A Fair Price For Cars</div>
              <div>Buy From Us Today</div>
            </div>

            <p className='text-sm wrap-break-word w-[75%] '>
              We are committed to providing our customers with exceptional service,
              competitive pricing, and a wide range of.
            </p>

            <div className='flex flex-col gap-1 text-sm font-semibold'>

              <div className="flex gap-2 items-center">
                <div className='bg-[#FAFBFD] rounded-full p-2'>
                  <img src="/tick.svg" alt="" />
                </div>
                <span>We are the UK’s largest provider, with more patrols in more places</span>
              </div>

              <div className="flex gap-2 items-center">
                <div className='bg-[#FAFBFD] rounded-full p-2'>
                  <img src="/tick.svg" alt="" />
                </div>
                <span>You get 24/7 roadside assistance</span>
              </div>

              <div className="flex gap-2 items-center">
                <div className='bg-[#FAFBFD] rounded-full p-2'>
                  <img src="/tick.svg" alt="" />
                </div>
                <span>We fix 4 out of 5 cars at the roadside</span>
              </div>

            </div>

            <button className="bg-blue-600 text-white w-fit px-5 py-3 rounded-lg">
              Get Started
            </button>

          </div>

        </div>

      </section>

      <section className="w-[70%] mx-auto flex items-center justify-evenly p-10">

        <div className='flex flex-col items-center'>
          <span className='font-semibold text-2xl'>
            835
          </span>
          <span className='text-sm'>
            Cars For Sale
          </span>
        </div>
        <div className='flex flex-col items-center'>
          <span className='font-semibold text-2xl'>
            768
          </span>
          <span className='text-sm'>
            Dealer Review
          </span>
        </div>
        <div className='flex flex-col items-center'>
          <span className='font-semibold text-2xl'>
            100
          </span>
          <span className='text-sm'>
            Visitor Per Day
          </span>
        </div>
        <div className='flex flex-col items-center'>
          <span className='font-semibold text-2xl'>
            230
          </span>
          <span className='text-sm'>
            Verified Dealer
          </span>
        </div>
      </section>

      <hr className='border border-[#E9E9E9]' />

      <section className="featuredListing w-[80%] mx-auto my-15 flex flex-col gap-8">

        <div className="title">
          <span className='font-semibold text-2xl'>
            Featured Listing
          </span>
        </div>

        <div className="items flex gap-5">
          <ItemCard imgSrc="/images/rangRover.svg" title="Rang Rover" owner="Malak Sab" price="412000" />
          <ItemCard imgSrc="/images/rangRover.svg" title="Rang Rover" owner="Malak Sab" price="412000" />
          <ItemCard imgSrc="/images/rangRover.svg" title="Rang Rover" owner="Malak Sab" price="412000" />
          <ItemCard imgSrc="/images/rangRover.svg" title="Rang Rover" owner="Malak Sab" price="412000" />
        </div>

        <div className="buttons flex gap-2">

          <span className='border border-[#E9E9E9] py-3 px-5 rounded-full'>
            <img src="/icons/leftArrow.svg" alt="" />
          </span>
          <span className='border border-[#E9E9E9] py-3 px-5 rounded-full'>
            <img src="/icons/rightArrow.svg" alt="" />
          </span>

        </div>

      </section>


      <section className='w-[90%] mx-auto flex flex-col gap-15 bg-[#050B20] text-white rounded-2xl p-25'>

        <div className="top flex items-center justify-between">

          <div className="left flex gap-5 items-center">

            <div className="icon">
              <img src="/icons/SearchIcon.svg" alt="" />
            </div>

            <div className="text flex flex-col gap-2">
              <div className="title text-4xl font-semibold">
                Search over 150,000 vehicles
              </div>
              <div className="text-sm w-[60%] wrap-break-word">
                Choose from thousands of trusted used cars and vans across
                the UK, from our national network of vetted dealers.
              </div>
            </div>

          </div>

          <div className="right flex gap-2">

            <button className='bg-blue-600 text-white px-5 py-3 rounded-lg '>Search Cars</button>
            <button className='bg-blue-600 text-white px-5 py-3 rounded-lg '>Other Vehicles</button>

          </div>

        </div>

        <div className="bottom flex flex-col gap-3 text-sm">

          <p className=''>Or browse by type:</p>

          <div className="icons flex gap-2">

            <div className="icon flex gap-1 border border-[#E9E9E9] rounded-lg p-3">
              <span>Automatic Cars</span>
            </div>

            <div className="icon flex gap-1 border border-[#E9E9E9] rounded-lg p-3">
              <span>SUV's</span>
            </div>

            <div className="icon flex gap-1 border border-[#E9E9E9] rounded-lg p-3">
              <span>Electrics Cars</span>
            </div>

            <div className="icon flex gap-1 border border-[#E9E9E9] rounded-lg p-3">
              <span>New in Stock</span>
            </div>

            <div className="icon flex gap-1 border border-[#E9E9E9] rounded-lg p-3">
              <span>Petrol</span>
            </div>

            <div className="icon flex gap-1 border border-[#E9E9E9] rounded-lg p-3">
              <span>Diesel</span>
            </div>

          </div>


        </div>

      </section>

      <section className="w-[80%] mx-auto my-15">

        <div className="title text-2xl font-semibold mb-10 text-center">
          Why Choose Us?
        </div>

        <div className='flex gap-5'>

          <div className="card w-full flex flex-col items-center text-center">
            <div className="icon mb-4">
              <img src="/icons/fast.svg" alt="Fast Service" />
            </div>
            <div className="title font-semibold mb-2">
              Fast & Easy Service
            </div>
            <p className='text-sm text-black/60'>
              Get your perfect car in minutes with our streamlined booking process.
            </p>
          </div>

          <div className="card w-full flex flex-col items-center text-center">
            <div className="icon mb-4">
              <img src="/icons/verified.svg" alt="Verified Vehicles" />
            </div>
            <div className="title font-semibold mb-2">
              Verified Vehicles
            </div>
            <p className='text-sm text-black/60'>
              All our vehicles are thoroughly inspected and certified for quality and safety.
            </p>
          </div>

          <div className="card w-full flex flex-col items-center text-center">
            <div className="icon mb-4">
              <img src="/icons/support.svg" alt="24/7 Support" />
            </div>
            <div className="title font-semibold mb-2">
              24/7 Support
            </div>
            <p className='text-sm text-black/60'>
              Our dedicated team is available round the clock to assist you anytime.
            </p>
          </div>

          <div className="card w-full flex flex-col items-center text-center">
            <div className="icon mb-4">
              <img src="/icons/affordable.svg" alt="Affordable Pricing" />
            </div>
            <div className="title font-semibold mb-2">
              Affordable Pricing
            </div>
            <p className='text-sm text-black/60'>
              Competitive rates and flexible payment options to suit your budget.
            </p>
          </div>

        </div>

      </section>

      <section className='w-[90%] mx-auto flex flex-col gap-15 bg-[#F9FBFC] rounded-2xl p-25'>

        <div className="title text-2xl font-semibold">
          What our customers say
        </div>

        <div className="testimonials flex gap-5">

          <TestimonialCard
            username="Leslie Alexander"
            comment="Great Work"
            disc="“Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs.”"
          />
          <TestimonialCard
            username="Leslie Alexander"
            comment="Great Work"
            disc="“Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs.”"
          />
          <TestimonialCard
            username="Leslie Alexander"
            comment="Great Work"
            disc="“Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs.”"
          />



        </div>

        <div className="buttons flex gap-2">

          <span className='border border-[#E9E9E9] py-3 px-5 rounded-full'>
            <img src="/icons/leftArrow.svg" alt="" />
          </span>
          <span className='border border-[#E9E9E9] py-3 px-5 rounded-full'>
            <img src="/icons/rightArrow.svg" alt="" />
          </span>

        </div>


      </section>

      <LoginForm showLoginForm />

      <Footer />

    </div>

  )
}

export default Home