const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        require: true
    },
    vehicle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'vehicle',
        requrie: true
    },
    startDate: {
        type: Date,
        require: true
    },
    endDate: {
        type: Date,
        require: true,
    },
    totalPrice: {
        type: Number,
        require: true
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'paid', 'cancelled'],
        require: true,
    },

    paymentIntentId: {
        type: String,
        default: null
    },
    paidAt: {
        type: Date,
        default: null,
    },
})

module.exports = mongoose.model('booking', bookingSchema)