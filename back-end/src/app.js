const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const userRouter = require('./routes/user.routes')
const multerConfig = require('./utils/multerConfig')
const cookieParser = require('cookie-parser')
const vehicleRouter = require('./routes/vehicle.routes')
const bookingRouter = require('./routes/booking.route')
const paymentRouter = require('./routes/payment.route')

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))
app.use(express.json())
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "../public")))

app.use('/api/users', userRouter)
app.use('/api/vehicles', vehicleRouter)
app.use('/api/bookings', bookingRouter)
app.use('/api/payment', paymentRouter)

module.exports = app