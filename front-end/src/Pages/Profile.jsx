import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Mail, MapPin, Phone, Edit2, LogOut, User, Star } from 'lucide-react'

const Profile = () => {
    const { user, logout } = useContext(AuthContext)
    const [isEditing, setIsEditing] = useState(false)

    const isSeller = user?.role === "Seller"

    const handleLogout = () => {
        logout()
        window.location.href = "/"
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />

            <div className="flex-grow py-12 px-4 pt-32">
                <div className="max-w-4xl mx-auto">

                    {/* Profile Card */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">

                        {/* Header Background Banner */}
                        <div className="h-32 bg-gradient-to-r from-gray-800 to-gray-600"></div>

                        {/* Profile Content */}
                        <div className="px-8 pb-8">

                            {/* Avatar and Basic Info */}
                            <div className="flex flex-col items-center -mt-16 mb-8">
                                {/* Avatar */}
                                <div className="relative mb-4">
                                    <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg bg-gray-200 flex items-center justify-center overflow-hidden">
                                        {user?.profilePic && user?.profilePic !== "default.png" ? (
                                            <img
                                                src={`${import.meta.env.VITE_SERVER_URL}/userAvatars/${user.profilePic}`}
                                                alt={user?.name}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <User className="w-16 h-16 text-gray-400" />
                                        )}
                                    </div>
                                </div>

                                {/* Name and Role */}
                                <div className="text-center">
                                    <h1 className="text-3xl font-bold text-gray-800 mb-2">{user?.name || "User Name"}</h1>

                                    {/* Role Badge */}
                                    <div className="inline-block">
                                        <span className={`px-4 py-1 rounded-full text-sm font-semibold text-white ${
                                            isSeller ? 'bg-green-500' : 'bg-black'
                                        }`}>
                                            {isSeller ? 'Seller' : 'Buyer'}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="border-t border-gray-200 my-8"></div>

                            {/* Profile Information Section */}
                            <div className="grid md:grid-cols-2 gap-8 mb-8">

                                {/* Left Column - Contact Info */}
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-800 mb-6">Contact Information</h2>

                                    {/* Email */}
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-200">
                                            <Mail className="w-5 h-5 text-black" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600 mb-1">Email Address</p>
                                            <p className="text-gray-800 font-medium">{user?.email || "Not provided"}</p>
                                        </div>
                                    </div>

                                    {/* Phone (Optional - customize as needed) */}
                                    <div className="flex items-start gap-4">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-green-100">
                                            <Phone className="w-5 h-5 text-green-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600 mb-1">Phone Number</p>
                                            <p className="text-gray-800 font-medium">Not provided</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column - Account Info */}
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-800 mb-6">Account Information</h2>

                                    {/* Account Type */}
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-purple-100">
                                            <User className="w-5 h-5 text-purple-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600 mb-1">Account Type</p>
                                            <p className="text-gray-800 font-medium">
                                                {isSeller ? 'Seller Account' : 'Buyer Account'}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Member Since */}
                                    <div className="flex items-start gap-4">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-orange-100">
                                            <Star className="w-5 h-5 text-orange-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600 mb-1">Member Since</p>
                                            <p className="text-gray-800 font-medium">2024</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Divider */}
                            <div className="border-t border-gray-200 my-8"></div>

                            {/* Seller Stats Section (Only for Sellers) */}
                            {isSeller && (
                                <>
                                    <div className="mb-8">
                                        <h2 className="text-xl font-semibold text-gray-800 mb-6">Seller Statistics</h2>

                                        <div className="grid md:grid-cols-3 gap-6">
                                            {/* Total Vehicles */}
                                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
                                                <p className="text-sm text-blue-600 font-semibold mb-2">Total Vehicles</p>
                                                <p className="text-3xl font-bold text-blue-800">0</p>
                                                <p className="text-xs text-blue-600 mt-2">Active listings</p>
                                            </div>

                                            {/* Total Rentals */}
                                            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border border-green-200">
                                                <p className="text-sm text-green-600 font-semibold mb-2">Total Rentals</p>
                                                <p className="text-3xl font-bold text-green-800">0</p>
                                                <p className="text-xs text-green-600 mt-2">Completed bookings</p>
                                            </div>

                                            {/* Rating */}
                                            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-6 border border-yellow-200">
                                                <p className="text-sm text-yellow-600 font-semibold mb-2">Rating</p>
                                                <p className="text-3xl font-bold text-yellow-800">4.8</p>
                                                <p className="text-xs text-yellow-600 mt-2">Based on reviews</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Divider */}
                                    <div className="border-t border-gray-200 my-8"></div>
                                </>
                            )}

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => setIsEditing(!isEditing)}
                                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold"
                                >
                                    <Edit2 className="w-5 h-5" />
                                    Edit Profile
                                </button>

                                {isSeller && (
                                    <button
                                        onClick={() => window.location.href = '/addcar'}
                                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
                                    >
                                        <span>+</span>
                                        Add Vehicle
                                    </button>
                                )}

                                <button
                                    onClick={handleLogout}
                                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
                                >
                                    <LogOut className="w-5 h-5" />
                                    Logout
                                </button>
                            </div>

                            {/* Edit Profile Section */}
                            {isEditing && (
                                <div className="mt-8 pt-8 border-t border-gray-200">
                                    <h2 className="text-xl font-semibold text-gray-800 mb-6">Edit Profile</h2>
                                    <p className="text-gray-600 text-center py-4">Edit functionality coming soon...</p>
                                </div>
                            )}

                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Profile
