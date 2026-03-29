const Stripe = require('stripe')
const stripe = () => new Stripe(process.env.STRIPE_SECRET_KEY)
const bookingModel = require('../models/booking')

exports.createPaymentIntent = async (req, res) => {
    try {

        const { bookingId } = req.body

        const booking = await bookingModel.findById(bookingId)

        // Yeh line add karo temporarily
        console.log('Booking:', booking)
        console.log('req.user:', req.user)

        if (!booking) {
            return res.status(404).json({
                success: false,
                message: 'Booking not found'
            })
        }

        if (booking.status !== 'approved') {
            return res.status(400).json({
                success: false,
                message: 'Booking is not approved yet'
            })
        }

        if (booking.user.toString() !== req.user._id.toString()) {
            return res.status(403).json({
                success: false,
                message: 'Not authorized'
            })
        }

        const paymentIntent = await stripe().paymentIntents.create({
            amount: booking.totalPrice * 100, // doller to cents
            currency: 'usd',
            metadata: {
                bookingId,
                userId: req.user._id.toString()
            }
        })

        res.status(200).json({
            success: true,
            clientSecret: paymentIntent.client_secret
        })

    } catch (e) {
        res.status(500).json({
            success: false,
            message: e.message
        })
    }
}

exports.confirmPayment = async (req, res) => {
    try {
        const { bookingId, paymentIntentId } = req.body

        const paymentIntent = await stripe().paymentIntents.retrieve(paymentIntentId)

        if (paymentIntent.status !== 'succeeded') {
            return res.status(400).json({
                success: false,
                message: 'Payment not successfull'
            })
        }

        const updatedBooking = await bookingModel.findByIdAndUpdate(
            bookingId,
            {
                status: 'paid',
                paymentIntentId: paymentIntentId,
                paidAt: new Date()
            },
            { new: true }

        )
        res.status(200).json({
            success: true,
            message: 'Payment confirmed! Booking is paid.',
            booking: updatedBooking
        })
    } catch (e) {
        res.status(500).json({
            success: false,
            message: e.message
        })
    }
}