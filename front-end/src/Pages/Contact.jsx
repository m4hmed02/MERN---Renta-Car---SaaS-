import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        setSubmitted(true)
        setTimeout(() => {
            setFormData({ name: '', email: '', subject: '', message: '' })
            setSubmitted(false)
        }, 3000)
    }

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />

            {/* Hero Section */}
            <section className="w-full bg-gradient-to-r from-gray-800 to-gray-700 text-white pt-32 pb-20 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Have questions or feedback? We'd love to hear from you. Contact us anytime and we'll get back to you as soon as possible.
                    </p>
                </div>
            </section>

            {/* Contact Information Cards */}
            <section className="w-full py-20 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-6 mb-20">
                        {/* Email */}
                        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
                            <div className="w-14 h-14 bg-black rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Mail className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mb-2">Email</h3>
                            <p className="text-gray-600 text-sm">support@rentalcar.com</p>
                            <p className="text-gray-600 text-sm">info@rentalcar.com</p>
                        </div>

                        {/* Phone */}
                        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
                            <div className="w-14 h-14 bg-black rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Phone className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mb-2">Phone</h3>
                            <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
                            <p className="text-gray-600 text-sm">+1 (555) 987-6543</p>
                        </div>

                        {/* Address */}
                        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
                            <div className="w-14 h-14 bg-black rounded-lg flex items-center justify-center mx-auto mb-4">
                                <MapPin className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mb-2">Address</h3>
                            <p className="text-gray-600 text-sm">123 Rental Street</p>
                            <p className="text-gray-600 text-sm">New York, NY 10001</p>
                        </div>

                        {/* Hours */}
                        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
                            <div className="w-14 h-14 bg-black rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Clock className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mb-2">Hours</h3>
                            <p className="text-gray-600 text-sm">Mon - Fri: 9AM - 6PM</p>
                            <p className="text-gray-600 text-sm">Sat - Sun: 10AM - 4PM</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form & Map Section */}
            <section className="w-full py-20 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-8">Send us a Message</h2>

                            {submitted && (
                                <div className="p-6 bg-green-50 border border-green-200 rounded-lg mb-8 text-center">
                                    <div className="text-green-600 mb-2 text-3xl">✓</div>
                                    <h3 className="text-lg text-green-800 font-semibold mb-2">Message Sent Successfully!</h3>
                                    <p className="text-green-700 text-sm">Thank you for reaching out. We'll get back to you soon.</p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                        placeholder="John Doe"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                {/* Subject */}
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                        placeholder="How can we help?"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                        placeholder="Tell us more about your inquiry..."
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                                >
                                    <Send className="w-5 h-5" />
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Information Section */}
                        <div className="flex flex-col justify-center">
                            <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Contact Us?</h2>

                            <div className="space-y-6">
                                {/* Customer Support */}
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-2">Customer Support</h3>
                                        <p className="text-gray-600">
                                            For any issues with your rental or account, our support team is here to help.
                                        </p>
                                    </div>
                                </div>

                                {/* Report Issues */}
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                                        <AlertCircle className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-2">Report Issues</h3>
                                        <p className="text-gray-600">
                                            Encountered a problem? Let us know and we'll resolve it quickly.
                                        </p>
                                    </div>
                                </div>

                                {/* Business Inquiries */}
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-2">Business Inquiries</h3>
                                        <p className="text-gray-600">
                                            Interested in partnerships? Reach out to our business development team.
                                        </p>
                                    </div>
                                </div>

                                {/* Feedback */}
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Heart className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-2">Share Feedback</h3>
                                        <p className="text-gray-600">
                                            Your feedback helps us improve. We'd love to hear your suggestions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="w-full py-20 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Frequently Asked Questions</h2>

                    <div className="space-y-6">
                        {/* FAQ Item 1 */}
                        <details className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition group">
                            <summary className="flex items-center justify-between font-semibold text-gray-800">
                                <span>How do I rent a vehicle?</span>
                                <span className="text-black group-open:rotate-180 transition">▼</span>
                            </summary>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                Browse our available vehicles, select the one you want, choose your rental dates, and complete the booking process. You'll receive a confirmation via email.
                            </p>
                        </details>

                        {/* FAQ Item 2 */}
                        <details className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition group">
                            <summary className="flex items-center justify-between font-semibold text-gray-800">
                                <span>What are the payment methods?</span>
                                <span className="text-black group-open:rotate-180 transition">▼</span>
                            </summary>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                We accept credit cards, debit cards, and digital wallets. All transactions are secure and encrypted.
                            </p>
                        </details>

                        {/* FAQ Item 3 */}
                        <details className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition group">
                            <summary className="flex items-center justify-between font-semibold text-gray-800">
                                <span>Can I cancel my reservation?</span>
                                <span className="text-black group-open:rotate-180 transition">▼</span>
                            </summary>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                Yes, cancellations are allowed up to 24 hours before the rental start date for a full refund.
                            </p>
                        </details>

                        {/* FAQ Item 4 */}
                        <details className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition group">
                            <summary className="flex items-center justify-between font-semibold text-gray-800">
                                <span>Is insurance included?</span>
                                <span className="text-black group-open:rotate-180 transition">▼</span>
                            </summary>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                Basic insurance is included in all rentals. You can opt for additional coverage during the booking process.
                            </p>
                        </details>

                        {/* FAQ Item 5 */}
                        <details className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition group">
                            <summary className="flex items-center justify-between font-semibold text-gray-800">
                                <span>How do I list my vehicle?</span>
                                <span className="text-black group-open:rotate-180 transition">▼</span>
                            </summary>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                Sign up as a seller, complete your profile, add your vehicle details and photos, and start earning from day one.
                            </p>
                        </details>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

// AlertCircle import
const AlertCircle = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
)

// Heart import (fallback)
const Heart = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
)

export default Contact
