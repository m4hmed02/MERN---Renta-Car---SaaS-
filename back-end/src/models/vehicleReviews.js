const mongoose = require('mongoose')

let vehicleReviewSchema = new mongoose.Schema({
    vehicleId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'vehicle',
        require: true
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user',
        require: true,
    },
    comment: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('vehicleReview', vehicleReviewSchema)