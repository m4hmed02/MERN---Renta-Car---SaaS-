import { Car, Calendar, DollarSign, Users, TrendingUp, AlertCircle, Package } from 'lucide-react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

export function Dashboard() {
    return (
        <>

            <Header />
            <div className="relative top-25 min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-8 px-4">
                <div className="max-w-7xl mx-auto">

                    <div className="mb-8">
                        <h1 className="text-4xl font-bold text-gray-900 mb-2">
                            Welcome back, Ahmed! 👋
                        </h1>
                        <p className="text-gray-600">
                            Ahmed Rentals • PRO Plan
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

                        <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-blue-500">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-blue-100 rounded-xl">
                                    <Car className="size-6 text-blue-600" />
                                </div>
                                <span className="text-sm text-green-600 font-semibold">+12%</span>
                            </div>
                            <h3 className="text-gray-600 text-sm font-medium mb-1">Total Fleet</h3>
                            <p className="text-3xl font-bold text-gray-900">24</p>
                            <p className="text-xs text-gray-500 mt-2">18 available now</p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-green-500">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-green-100 rounded-xl">
                                    <Calendar className="size-6 text-green-600" />
                                </div>
                                <span className="text-sm text-green-600 font-semibold">+8%</span>
                            </div>
                            <h3 className="text-gray-600 text-sm font-medium mb-1">Active Bookings</h3>
                            <p className="text-3xl font-bold text-gray-900">12</p>
                            <p className="text-xs text-gray-500 mt-2">3 pending approval</p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-purple-500">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-purple-100 rounded-xl">
                                    <DollarSign className="size-6 text-purple-600" />
                                </div>
                                <span className="text-sm text-green-600 font-semibold">+23%</span>
                            </div>
                            <h3 className="text-gray-600 text-sm font-medium mb-1">Monthly Revenue</h3>
                            <p className="text-3xl font-bold text-gray-900">$8,500</p>
                            <p className="text-xs text-gray-500 mt-2">Total: $12,000</p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-amber-500">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-amber-100 rounded-xl">
                                    <Users className="size-6 text-amber-600" />
                                </div>
                                <span className="text-sm text-green-600 font-semibold">+15%</span>
                            </div>
                            <h3 className="text-gray-600 text-sm font-medium mb-1">Total Customers</h3>
                            <p className="text-3xl font-bold text-gray-900">248</p>
                            <p className="text-xs text-gray-500 mt-2">32 new this month</p>
                        </div>
                    </div>

                    {/* Content Grid */}
                    <div className="grid lg:grid-cols-3 gap-6">

                        {/* Recent Bookings */}
                        <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                    <Calendar className="size-5" />
                                    Recent Bookings
                                </h2>
                                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                                    View All
                                </button>
                            </div>

                            <div className="space-y-4">

                                <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors">
                                    <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                                        <Car className="size-8 text-gray-600" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-900">Toyota Corolla</h3>
                                        <p className="text-sm text-gray-600">John Doe</p>
                                        <p className="text-xs text-gray-500">Mar 10 - Mar 15</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold text-gray-900">$450</p>
                                        <span className="inline-block px-2 py-1 rounded-full text-xs font-medium mt-1 bg-green-100 text-green-700">
                                            confirmed
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="space-y-6">

                            {/* Quick Actions */}
                            <div className="bg-white rounded-2xl shadow-lg p-6">
                                <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
                                <div className="space-y-3">
                                    <button className="w-full flex items-center gap-3 p-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors">
                                        <Package className="size-5" />
                                        Add New Vehicle
                                    </button>
                                    <button className="w-full flex items-center gap-3 p-3 rounded-lg border-2 border-gray-200 hover:bg-gray-50 transition-colors">
                                        <Calendar className="size-5 text-gray-700" />
                                        Manage Bookings
                                    </button>
                                    <button className="w-full flex items-center gap-3 p-3 rounded-lg border-2 border-gray-200 hover:bg-gray-50 transition-colors">
                                        <TrendingUp className="size-5 text-gray-700" />
                                        View Analytics
                                    </button>
                                </div>
                            </div>

                            {/* Alerts */}
                            <div className="bg-linear-to-br from-red-50 to-orange-50 border border-red-200 rounded-2xl p-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <AlertCircle className="size-5 text-red-600" />
                                    <h3 className="font-bold text-gray-900">Alerts</h3>
                                </div>
                                <div className="space-y-3">
                                    <div className="bg-white/80 p-3 rounded-lg">
                                        <p className="text-sm font-medium text-gray-900">2 vehicles need maintenance</p>
                                        <p className="text-xs text-gray-600 mt-1">Schedule service soon</p>
                                    </div>
                                    <div className="bg-white/80 p-3 rounded-lg">
                                        <p className="text-sm font-medium text-gray-900">3 pending bookings</p>
                                        <p className="text-xs text-gray-600 mt-1">Requires your approval</p>
                                    </div>
                                </div>
                            </div>

                            {/* Subscription */}
                            <div className="bg-linear-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white">
                                <h3 className="font-bold mb-2">Your Plan</h3>
                                <p className="text-2xl font-bold mb-1">PRO</p>
                                <p className="text-sm text-gray-400 mb-4">Next billing: March 23, 2026</p>
                                <button className="w-full bg-white text-gray-900 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium text-sm">
                                    Manage Subscription
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}