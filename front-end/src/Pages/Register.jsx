import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Car, Mail, Lock, User } from 'lucide-react'

const Register = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "customer",
        profilePic: null
    })

    const handleChange = (e) => {
        const { name, value, files } = e.target

        if (name == "profilePic") {
            setFormData({ ...formData, [name]: files[0] })
        } else {
            setFormData({ ...formData, [name]: value })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (formData.password === formData.confirmPassword) {

            const data = new FormData()
            data.append("name", formData.name)
            data.append("email", formData.email)
            data.append("password", formData.password)
            data.append("role", formData.role)
            data.append("profilePic", formData.profilePic)

            try {
                let result = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/users/register`, {
                    "method": "POST",
                    body: data
                })
                let res = await result.json()
                console.log(res)
            } catch (e) {
                console.log("Unable to Register User!")
            }

        } else {
            console.log("Password Should be same")
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shadow-lg">
                        <Car className="w-7 h-7 text-white" />
                    </div>
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 tracking-tight">
                    Create your account
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Join our platform to rent or list your cars
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow-xl sm:rounded-xl sm:px-10 border border-gray-100">
                    <form onSubmit={handleSubmit} encType='multipart/form-data' className="space-y-5">

                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="focus:ring-black focus:border-black block w-full pl-10 sm:text-sm border-gray-300 rounded-lg py-2.5 border"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="focus:ring-black focus:border-black block w-full pl-10 sm:text-sm border-gray-300 rounded-lg py-2.5 border"
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="focus:ring-black focus:border-black block w-full pl-10 sm:text-sm border-gray-300 rounded-lg py-2.5 border"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                                Confirm Password
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="focus:ring-black focus:border-black block w-full pl-10 sm:text-sm border-gray-300 rounded-lg py-2.5 border"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                                Account Type
                            </label>
                            <div className="mt-1">
                                <select
                                    id="role"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    className="block w-full pl-3 pr-10 py-2.5 text-base border-gray-300 focus:outline-none focus:ring-black focus:border-black sm:text-sm rounded-lg border bg-white"
                                >
                                    <option value="customer">Customer</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="profilePic" className="block text-sm font-medium text-gray-700">
                                Profile Photo (Optional)
                            </label>
                            <div className="mt-1 flex items-center">
                                <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100 shrink-0 shadow-sm border border-gray-200">
                                    <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </span>
                                <div className="ml-4 flex rounded-md shadow-sm w-full">
                                    <input
                                        type="file"
                                        id="profilePic"
                                        name="profilePic"
                                        onChange={handleChange}
                                        className="w-full text-sm text-gray-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-l-md file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200 transition-colors border border-gray-200 rounded-r-lg bg-gray-50"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="pt-2">
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors"
                            >
                                Register Now
                            </button>
                        </div>

                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">
                                    Already have an account?
                                </span>
                            </div>
                        </div>

                        <div className="mt-6">
                            <Link
                                to="/login"
                                className="w-full flex justify-center py-2.5 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors"
                            >
                                Log in instead
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Register
