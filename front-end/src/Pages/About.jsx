import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Users, Heart, Zap, Shield, Award, TrendingUp } from 'lucide-react'

const About = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />

            {/* Hero Section */}
            <section className="w-full bg-gradient-to-r from-gray-800 to-gray-700 text-white pt-32 pb-20 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-5xl font-bold mb-6">About Rental Car</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Your trusted platform for renting and listing quality vehicles. We connect vehicle owners with renters to make every journey memorable.
                    </p>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="w-full py-20 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Mission */}
                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
                            <div className="w-14 h-14 bg-black rounded-lg flex items-center justify-center mb-6">
                                <Heart className="w-7 h-7 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
                            <p className="text-gray-600 leading-relaxed">
                                To revolutionize vehicle rental by providing a seamless, transparent, and customer-focused platform that connects vehicle owners with travelers. We believe in making car rental accessible, affordable, and trustworthy for everyone.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
                            <div className="w-14 h-14 bg-black rounded-lg flex items-center justify-center mb-6">
                                <Zap className="w-7 h-7 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
                            <p className="text-gray-600 leading-relaxed">
                                To become the world's most trusted and innovative platform for vehicle rental, empowering both vehicle owners and renters with technology that makes every interaction smooth, secure, and rewarding.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="w-full py-20 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Our Impact</h2>

                    <div className="grid md:grid-cols-4 gap-8">
                        {/* Happy Users */}
                        <div className="text-center">
                            <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-10 h-10 text-black" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-800 mb-2">10K+</h3>
                            <p className="text-gray-600">Happy Users</p>
                        </div>

                        {/* Vehicles Listed */}
                        <div className="text-center">
                            <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <TrendingUp className="w-10 h-10 text-black" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-800 mb-2">5K+</h3>
                            <p className="text-gray-600">Vehicles Listed</p>
                        </div>

                        {/* Successful Rentals */}
                        <div className="text-center">
                            <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award className="w-10 h-10 text-black" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-800 mb-2">25K+</h3>
                            <p className="text-gray-600">Successful Rentals</p>
                        </div>

                        {/* Trusted Sellers */}
                        <div className="text-center">
                            <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-10 h-10 text-black" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-800 mb-2">2K+</h3>
                            <p className="text-gray-600">Trusted Sellers</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="w-full py-20 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Why Choose Us</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Trust & Security */}
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                                <Shield className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Trust & Security</h3>
                            <p className="text-gray-600">
                                All users are verified and vehicles are thoroughly inspected to ensure safe and reliable rentals.
                            </p>
                        </div>

                        {/* Affordable Prices */}
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                                <Zap className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Affordable Prices</h3>
                            <p className="text-gray-600">
                                Competitive pricing with transparent costs. No hidden charges, just honest and fair rates.
                            </p>
                        </div>

                        {/* 24/7 Support */}
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                                <Heart className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">24/7 Support</h3>
                            <p className="text-gray-600">
                                Our dedicated support team is always ready to assist you with any questions or concerns.
                            </p>
                        </div>

                        {/* Wide Selection */}
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                                <Award className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Wide Selection</h3>
                            <p className="text-gray-600">
                                Browse thousands of vehicles from budget-friendly to premium options for every need.
                            </p>
                        </div>

                        {/* Easy Booking */}
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                                <Zap className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Easy Booking</h3>
                            <p className="text-gray-600">
                                Simple and quick booking process. Reserve your car in minutes with just a few clicks.
                            </p>
                        </div>

                        {/* Community */}
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                                <Users className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Community</h3>
                            <p className="text-gray-600">
                                Join thousands of satisfied users who trust us for their rental needs every day.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default About
