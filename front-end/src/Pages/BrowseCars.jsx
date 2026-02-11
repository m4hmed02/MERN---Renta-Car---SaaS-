import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Search } from 'lucide-react'
import ItemCard from '../Components/cards/ItemCard'
import { useState, useEffect } from 'react'

const BrowseCars = () => {

    const [vehicles, setvehicles] = useState([])

    useEffect(() => {
        const fetchVehicles = async () => {
            let res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/vehicles/getVehicles`, {
                credentials: "include"
            })

            let data = await res.json()
            setvehicles(data)
        }
        fetchVehicles()
    }, [])


    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />

            {/* Hero Section */}
            <section className="w-full bg-gradient-to-r from-gray-800 to-gray-700 text-white pt-32 pb-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Browse Our Fleet</h1>
                    <p className="text-gray-300 text-lg">Find the perfect vehicle for your needs</p>
                </div>
            </section>

            {/* Search and Filters Section */}
            <section className="w-full bg-white px-4 py-8 border-b border-gray-200">
                <div className="max-w-6xl mx-auto">
                    {/* Search Bar */}
                    <div className="mb-6">
                        <div className="relative">
                            <Search className="absolute left-4 top-3 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search by car name, brand, or model..."
                                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>
                    </div>

                    {/* Filters */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {/* Brand Filter */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Brand</label>
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black">
                                <option value="">All Brands</option>
                            </select>
                        </div>

                        {/* Price Range Filter */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Price per Day</label>
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black">
                                <option value="all">All Prices</option>
                                <option value="0-50">$0 - $50</option>
                                <option value="50-100">$50 - $100</option>
                                <option value="100+">$100+</option>
                            </select>
                        </div>

                        {/* Year Filter */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Year</label>
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black">
                                <option value="">All Years</option>
                            </select>
                        </div>

                        {/* Clear Filters */}
                        <div className="flex items-end">
                            <button className="w-full px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition font-semibold">
                                Clear Filters
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results Count */}
            <section className="w-full bg-white px-4 py-4 border-b border-gray-200">
                <div className="max-w-6xl mx-auto">
                    <p className="text-sm text-gray-600">
                        Showing <span className="font-semibold">{vehicles.length}</span> vehicles
                    </p>
                </div>
            </section>

            {/* Vehicles Grid */}
            <section className="w-full px-4 py-12 flex-grow">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                        {
                            vehicles.map(vehicle => (
                                <ItemCard
                                    key={vehicle._id}
                                    image={vehicle.image}
                                    name={vehicle.name}
                                    brand={vehicle.brand}
                                    model={vehicle.model}
                                    year={vehicle.year}
                                    description={vehicle.description}
                                    rating={vehicle.rating}
                                    reviews={vehicle.reviews}
                                    price={vehicle.price}
                                />
                            ))
                        }

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default BrowseCars
