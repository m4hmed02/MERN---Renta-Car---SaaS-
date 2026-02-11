const express = require('express')
const router = express.Router()
const vehicleController = require('../controllers/vehicle.controller')
const vehicleImagesUpload = require('../utils/multerConfig')
const isLogggedIn = require('../middlewares/loginMiddleware')

router.post('/addVehicle',vehicleImagesUpload.single('image') , vehicleController.addVehicle)
router.get('/getVehicles', isLogggedIn, vehicleController.getVehicle)


module.exports = router