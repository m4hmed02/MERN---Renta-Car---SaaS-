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
        image,
        owner: req.user._id
    })

    try {
        await vehicle.save()
        res.status(200).json({
            success: true,
            message: "Vehicle add successfully"
        })
    } catch (e) {
        console.log("Unable to save vehicle", e.message)
        res.status(500).json({
            success: true,
            message: "Unable To Add Vehicle!"
        })
    }
}

exports.getVehicle = async (req, res) => {
    let vehicles = await vehicleModel.find()

    try {
        res.status(200).json({
            success: true,
            vehicles,
            message: "Successfully Fetched Vehicles!"
        })
    } catch (e) {
        res.status(500).json({
            success: false,
            message: "Unsuccessfully Fetched Vehicles!"
        })
    }
}

exports.getVehicleById = async (req, res) => {

    const { id } = req.params

    try {
        let vehicle = await vehicleModel.findOne({ _id: id })
        
        res.status(200).json({
            success: true,
            message: "Vehicle Found!",
            data: vehicle
        })
    } catch (e) {

        console.log("Unable to find vehicle!", e.message)

        res.status(500).json({
            success: false,
            message: "Vehicle Not Found!",
        })
    }

}

exports.addVehicleRating = async (req, res) => {

    const { id } = req.params
    const { rating } = req.body
 
    try{

        const vehicle = await vehicleModel.findByIdAndUpdate(
            {_id: id},
            {rating: rating},
            {new: true}
        )

        console.log(vehicle)

        

    }catch(e){

        console.log('Unable to add Rating ! ', e.message)
        res.status.json({
            success: false,
            message: "Unable to update the rating"
        })

    }

}