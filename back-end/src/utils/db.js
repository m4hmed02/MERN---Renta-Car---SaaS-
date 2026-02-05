const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.Mongo_URI)
        console.log("DB Connected Successfully")
    }catch(e){
        console.log("Unable to connect to DB", e.message)
    }
}

module.exports = connectDB