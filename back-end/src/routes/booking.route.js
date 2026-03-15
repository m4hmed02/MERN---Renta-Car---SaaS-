const express = require('express')
const router = express.Router()
const isLoggedIn = require('../middlewares/loginMiddleware')
const bookingControllers = require('../controllers/booking.controller')

// user routes
router.post('/create', isLoggedIn, bookingControllers.createBooking)
router.get('/my-booking', isLoggedIn, bookingControllers.getUserBookings)


// admin Routes
router.get('/all', isLoggedIn, bookingControllers.getAllBooking)
router.put('/:id/status', isLoggedIn, bookingControllers.updateBookingStatus)

module.exports = router