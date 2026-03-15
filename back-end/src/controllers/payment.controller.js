const Stripe = require('stripe')
const stripe = new Stripe(process.env.STRIPE_SECERET_KEY)
const bookingModel = require('../models/booking')

exports.createPaymentIntent = async (req, res) => {
    try {

        const { bookingId } = req.body

        const booking = await bookingModel.findById(bookingId)

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

        const paymentIntent = await stripe.paymentIntent.create({
            ammount: booking.totalPrice * 100, // doller to cents
            currency: 'usd',
            metadata: {
                bookingId,
                userId: req.user.id.toString()
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