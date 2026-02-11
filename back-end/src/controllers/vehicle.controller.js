const vehicleModel = require('../models/vehicles')

exports.addVehicle = async (req, res) => {

    const { name, brand, model, year, price, description } = req.body
    const image = req.file.filename

    let vehicle = new vehicleModel({
        name,
        brand,
        model,
        year,
        price,
        description,
        image
    })

    try {
        await vehicle.save()
        res.status(200).json({
            success: true,
            message: "Vehicle add successfully"
        })
    } catch (e) {
        console.log("Unable to save vehicle", e.message)
        res.status(401).json({
            success: true,
            message: "Unable To Add Vehicle!"
        })
    }
}

exports.getVehicle = async (req, res) => {
    let vehicles = await vehicleModel.find()

    try {
        res.send(vehicles)
        res.status(200).json({
            success: true,
            message: "Successfully Fetched Vehicles!"
        })
    } catch (e) {
        res.status(401).json({
            success: false,
            message: "Unsuccessfully Fetched Vehicles!"
        })
    }
}