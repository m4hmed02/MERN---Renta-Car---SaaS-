import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Search } from 'lucide-react'
import ItemCard from '../Components/cards/ItemCard'
import { useState, useEffect, useRef } from 'react'

const BrowseCars = () => {

    const [vehicles, setvehicles] = useState([])
    const [filteredVehicle, setfilteredVehicle] = useState([])
    const [filterKeyword, setfilterKeyword] = useState(null)

    const brandRef = useRef(null)
    const priceRef = useRef(null)
    const yearRef = useRef(null)


    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 30 }, (_, i) => currentYear - i);

    const brands = [
        "Toyota", "Honda", "Ford", "Chevrolet", "Nissan", "BMW", "Mercedes-Benz",
        "Audi", "Volkswagen", "Hyundai", "Kia", "Subaru", "Mazda", "Dodge",
        "Jeep", "Lexus", "GMC", "Cadillac", "Acura", "Infiniti"
    ];

    useEffect(() => {
        const fetchVehicles = async () => {
            let res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/vehicles/getVehicles`, {
                credentials: "include"
            })

            let data = await res.json()
            setvehicles(data.vehicles)
            setfilteredVehicle(data.vehicles)
        }
        fetchVehicles()
    }, [])

    const handleFilterSearchChange = (e) => {
        setfilterKeyword(e.target.value)
    }

    const handleFilterSearch = () => {

        if (!filterKeyword) {
            return
        }

        const filtered = vehicles.filter(vehicle =>
            Object.values(vehicle).some(value =>
                String(value).toLowerCase().includes(filterKeyword.toLowerCase())
            )
        )
        setfilteredVehicle(filtered)
    }

    const handleChangeByTag = (e) => {
        console.log(e.target.value)
    }

    const handleClearFilter = () => {
        console.log("function called ")
        if(brandRef.current.value == "all" && yearRef.current.value == "all" && priceRef.current.value == "all"){
            return
        }else{
            console.log(brandRef.current.value, yearRef.current.value, priceRef.current.value)
        }
    }

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
                                onChange={handleFilterSearchChange}
                                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                            />
                            <button
                                onClick={handleFilterSearch}
                                className="absolute right-1 top-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition font-semibold"
                            >
                                Search
                            </button>
                        </div>
                    </div>

                    {/* Filters */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {/* Brand Filter */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Brand</label>
                            <select
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                onChange={handleChangeByTag}
                                ref={brandRef}
                            >
                                <option value="all">All Brands</option>
                                {brands.map(brand => (
                                    <option
                                        key={brand}
                                        value={brand}
                                        name={brand}
                                    >
                                        {brand}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Price Range Filter */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Price per Day</label>
                            <select
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                onChange={handleChangeByTag}
                                ref={priceRef}
                            >
                                <option value="all">All Prices</option>
                                <option value="0-50">$0 - $50</option>
                                <option value="50-100">$50 - $100</option>
                                <option value="100+">$100+</option>
                            </select>
                        </div>

                        {/* Year Filter */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Year</label>
                            <select
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                onChange={handleChangeByTag}
                                ref={yearRef}
                            >

                                <option value="all">All Years</option>
                                {years.map(year => (
                                    <option
                                        key={year}
                                        value={year}
                                        name={year}
                                    >
                                        {year}
                                    </option>
                                ))}

                            </select>
                        </div>

                        {/* Clear Filters */}
                        <div className="flex items-end">
                            <button
                                className="w-full px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition font-semibold"
                                onClick={handleClearFilter}
                            >
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
                            filteredVehicle.map(vehicle => (
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
