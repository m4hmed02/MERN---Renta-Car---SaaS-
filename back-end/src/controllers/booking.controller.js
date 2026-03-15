const bookingModel = require('../models/booking')
const vehicleModel = require('../models/vehicles')

exports.createBooking = async (req, res) => {
    try {
        const { vehicleId, startDate, endDate } = req.body

        const vehicle = await vehicleModel.findById(vehicleId)

        if (!vehicle) {
            return res.status(404).json({
                success: false,
                message: 'Vehicle Not Found'
            })
        }

        const start = new Date(startDate)
        const end = new Date(endDate)
        const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24))

        if (days <= 0) {
            return res.status(404).json({
                success: false,
                message: 'End date must be after start date'
            })
        }

        const totalPrice = days * vehicle.price

        const booking = await bookingModel.create({
            user: req.user._id,
            vehicle: vehicleId,
            startDate,
            endDate,
            totalPrice,
            status: 'pending'
        })

        res.status(201).json({
            success: true,
            message: 'Booking created successfully',
            booking
        })
    } catch (e) {
        res.status(500).json({
            success: false,
            message: e.message
        })
    }
}

exports.getUserBookings = async (req, res) => {
    try {
        const bookings = await bookingModel.find({ user: req.user._id }).populate('vehicle')

        res.status(200).json({
            success: true,
            bookings
        })
    } catch (e) {
        res.status(500).json({
            success: false,
            message: e.message
        })
    }
}

exports.getAllBooking = async (req, res) => {
    try {
        const bookings = await bookingModel.find()
            .populate('user', 'name email')
            .populate('vehicle')

        res.status(200).json({
            success: true,
            bookings
        })
    } catch (e) {
        res.status(500).json({
            success: false,
            message: e.message
        })
    }
}

exports.updateBookingStatus = async (req, res) => {
    try {
        const { status } = req.body
        const { id } = req.params

        const allowedStatus = ['approved', 'cancelled']

        if (!allowedStatus.includes(status)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid Status'
            })
        }

        const booking = await bookingModel.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        )

        if (!booking) {
            return res.status(404).json({
                success: false,
                message: 'Booking not found!'
            })
        }

        res.status(200).json({
            success: true,
            message: `Booking ${status} Successfully`,
            booking
        })
    } catch (e) {
        res.status(500).json({
            success: false,
            message: e.message
        })
    }
}