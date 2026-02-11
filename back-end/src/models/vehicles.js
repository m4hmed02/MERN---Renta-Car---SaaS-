const mongoose = require('mongoose')

const vehicleSchema = mongoose.Schema({
    name: String,
    brand: String,
    model: Number,
    year: Number,
    price: Number,
    description: String,
    image: {
        type: String,
        default: "default.png"
    },
    rating:{
        type: Number,
        default: "0"
    },
    reviews:{
        type: Number,
        default: "0"
    }

})

module.exports = mongoose.model("vehicle", vehicleSchema)