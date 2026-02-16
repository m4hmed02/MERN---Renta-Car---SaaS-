const mongoose = require('mongoose')

const vehicleSchema = mongoose.Schema({
    name: String,
    brand: String,
    model: String,
    year: Number,
    price: Number,
    description: String,
    owner : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        require: true
    },
    image: {
        type: String,
        default: "default.png"
    },
    rating:{
        type: Number,
        default: 0
    },
    reviews:{
        type: Number,
        default: 0
    }

})

module.exports = mongoose.model("vehicle", vehicleSchema)