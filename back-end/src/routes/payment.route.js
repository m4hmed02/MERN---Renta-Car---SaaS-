const express = require('express')
const router = express.Router()
const isLoggedIn = require('../middlewares/loginMiddleware')
const paymentController = require('../controllers/payment.controller')

// User payment will be start from here
router.post('/payment-intent', isLoggedIn, paymentController.createPaymentIntent)

// User will confirm the payment
router.post('/confirm', isLoggedIn,)

module.exports = router