import { Link } from "react-router-dom"
import { useState, useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Menu, X } from "lucide-react"

const Header = () => {

    const { isLoggedIn, user, logout } = useContext(AuthContext)
    const [profileDropdown, setprofileDropdown] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const handleProfileDropdown = () => {
        setprofileDropdown(!profileDropdown)
    }

    const handleLogout = () => {
        logout()
        window.location.href = "/"
    }

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setMobileMenuOpen(false)
    }

    return (
        <nav className="absolute w-full z-20 bg-black/95 text-white text-sm">

            {/* Main Header */}
            <div className="flex items-center justify-between p-4 md:p-6">

                {/* Logo */}
                <div className="font-bold text-xl">
                    Rental Car
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">

                    <div className="links flex gap-6">
                        <Link to="/" className="hover:text-gray-300 transition">Home</Link>
                        <Link to="/about" className="hover:text-gray-300 transition">About</Link>
                        <Link to="/contact" className="hover:text-gray-300 transition">Contact Us</Link>
                        <Link to="/browse" className="hover:text-gray-300 transition">Browse Cars</Link>
                        {
                            isLoggedIn ?
                                <Link to="/profile" className="hover:text-gray-300 transition">Profile</Link> : <></>
                        }

                        {
                            isLoggedIn && user?.role === "Seller" ?
                                <Link to="/addcar" className="hover:text-gray-300 transition">Add Car</Link>
                                : <></>
                        }
                    </div>

                </div>

                {/* Right Section - Desktop */}
                <div className="hidden md:flex items-center">
                    {
                        isLoggedIn ? (
                            <div className="relative">
                                <button
                                    onClick={handleProfileDropdown}
                                    className="flex items-center gap-2 text-white bg-white/15 px-4 py-2 rounded-lg cursor-pointer hover:bg-white/10 transition"
                                >
                                    <img
                                        src={`${import.meta.env.VITE_SERVER_URL}/userAvatars/${user?.profilePic}`}
                                        alt="Profile"
                                        className="w-8 h-8 rounded-full object-cover border border-white"
                                    />
                                    <span>Hey, {user?.name}</span>
                                </button>

                                {/* Desktop Dropdown Menu */}
                                {profileDropdown && (
                                    <div className="absolute right-0 mt-2 w-48 bg-black/95 border border-white/20 rounded-lg shadow-lg overflow-hidden">
                                        <Link
                                            to="/profile"
                                            onClick={() => setprofileDropdown(false)}
                                            className="block px-4 py-2 hover:bg-white/10 transition"
                                        >
                                            Profile
                                        </Link>
                                        <Link
                                            to="/about"
                                            onClick={() => setprofileDropdown(false)}
                                            className="block px-4 py-2 hover:bg-white/10 transition"
                                        >
                                            About
                                        </Link>
                                        <Link
                                            to="/contact"
                                            onClick={() => setprofileDropdown(false)}
                                            className="block px-4 py-2 hover:bg-white/10 transition"
                                        >
                                            Contact Us
                                        </Link>
                                        <button
                                            onClick={() => {
                                                setprofileDropdown(false)
                                                handleLogout()
                                            }}
                                            className="w-full text-left px-4 py-2 hover:bg-white/10 transition text-red-400 font-semibold"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <button className="flex items-center gap-1 border border-white rounded-lg px-3 py-2 cursor-pointer hover:bg-white/15 transition">
                                <img src="/profile.svg" alt="Sign In" className="w-4 h-4" />
                                <span>SignIn</span>
                            </button>
                        )
                    }
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center gap-4">
                    {isLoggedIn && (
                        <div className="relative">
                            <button
                                onClick={handleProfileDropdown}
                                className="flex items-center gap-1 text-white bg-white/15 px-2 py-1 rounded-lg hover:bg-white/10 transition"
                            >
                                <img
                                    src={`${import.meta.env.VITE_SERVER_URL}/userAvatars/${user?.profilePic}`}
                                    alt="Profile"
                                    className="w-6 h-6 rounded-full object-cover border border-white"
                                />
                            </button>

                            {/* Mobile Dropdown Menu */}
                            {profileDropdown && (
                                <div className="absolute right-0 mt-2 w-40 bg-black/95 border border-white/20 rounded-lg shadow-lg overflow-hidden">
                                    <Link
                                        to="/profile"
                                        onClick={() => setprofileDropdown(false)}
                                        className="block px-3 py-2 text-sm hover:bg-white/10 transition"
                                    >
                                        Profile
                                    </Link>
                                    <Link
                                        to="/about"
                                        onClick={() => setprofileDropdown(false)}
                                        className="block px-3 py-2 text-sm hover:bg-white/10 transition"
                                    >
                                        About
                                    </Link>
                                    <Link
                                        to="/contact"
                                        onClick={() => setprofileDropdown(false)}
                                        className="block px-3 py-2 text-sm hover:bg-white/10 transition"
                                    >
                                        Contact
                                    </Link>
                                    <button
                                        onClick={() => {
                                            setprofileDropdown(false)
                                            handleLogout()
                                        }}
                                        className="w-full text-left px-3 py-2 text-sm hover:bg-white/10 transition text-red-400 font-semibold"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    <button
                        onClick={toggleMobileMenu}
                        className="text-white hover:bg-white/10 p-1 rounded-lg transition"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

            </div>

            {/* Mobile Navigation Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-black/90 border-t border-white/10">
                    <div className="flex flex-col gap-1 p-4">
                        <Link
                            to="/"
                            onClick={closeMobileMenu}
                            className="px-4 py-2 hover:bg-white/10 rounded-lg transition"
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            onClick={closeMobileMenu}
                            className="px-4 py-2 hover:bg-white/10 rounded-lg transition"
                        >
                            About
                        </Link>
                        <Link
                            to="/contact"
                            onClick={closeMobileMenu}
                            className="px-4 py-2 hover:bg-white/10 rounded-lg transition"
                        >
                            Contact Us
                        </Link>
                        <Link
                            to="/browse"
                            onClick={closeMobileMenu}
                            className="px-4 py-2 hover:bg-white/10 rounded-lg transition"
                        >
                            Browse Cars
                        </Link>
                        {isLoggedIn ? (
                            <>
                                <Link
                                    to="/profile"
                                    onClick={closeMobileMenu}
                                    className="px-4 py-2 hover:bg-white/10 rounded-lg transition"
                                >
                                    Profile
                                </Link>
                                {user?.role === "Seller" && (
                                    <Link
                                        to="/addcar"
                                        onClick={closeMobileMenu}
                                        className="px-4 py-2 hover:bg-white/10 rounded-lg transition"
                                    >
                                        Add Car
                                    </Link>
                                )}
                            </>
                        ) : (
                            <button className="px-4 py-2 hover:bg-white/10 rounded-lg transition text-left">
                                SignIn
                            </button>
                        )}
                    </div>
                </div>
            )}

        </nav>
    )
}

export default Header
