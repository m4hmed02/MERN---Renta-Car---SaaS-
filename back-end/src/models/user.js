const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String,
    profilePic: {
        type: String,
        default: "default.png"
    }
})

module.exports = mongoose.model('user', userSchema)