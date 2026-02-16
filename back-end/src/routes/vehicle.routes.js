const express = require('express')
const router = express.Router()
const vehicleController = require('../controllers/vehicle.controller')
const vehicleImagesUpload = require('../utils/multerConfig')
const isLogggedIn = require('../middlewares/loginMiddleware')

router.post('/addVehicle',isLogggedIn, vehicleImagesUpload.single('image'), vehicleController.addVehicle)
router.get('/getVehicles', vehicleController.getVehicle)
router.get('/getVehiclesById/:id',isLogggedIn ,vehicleController.getVehicleById)


module.exports = router