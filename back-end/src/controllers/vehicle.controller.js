const vehicleModel = require('../models/vehicles')
const vehicleReviewModel = require('../models/vehicleReviews')

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

    const oldVehicle = await vehicleModel.findOne({ _id: id })

    try {

        if (oldVehicle.rating === rating || oldVehicle.rating > 5 || oldVehicle.rating < 1) {
            console.log("noting")
            return res.status(200).json({
                success: true,
                message: "Successfully Updated the Vehicle Rating!"
            })
        }

        const vehicle = await vehicleModel.findByIdAndUpdate(
            id,
            { rating: rating },
            { new: true }
        )

        res.status(200).json({
            success: true,
            message: "Successfully Updated the Vehicle Rating!"
        })
    } catch (e) {

        console.log('Unable to add Rating ! ', e.message)
        res.status(400).json({
            success: false,
            message: "Unable to update the rating"
        })
    }
}


// for comment section
exports.addVehicleComment = async (req, res) => {

    const { vehicleId, comment } = req.body

    let userId = req.user._id

    console.log(vehicleId, comment, userId)

    try {
        let vehicleReview = new vehicleReviewModel({
            vehicleId,
            comment,
            userId
        })

        await vehicleReview.save()

        res.status(200).json({
            success: true,
            message: "Successfully Added the Vehicle Comment!"
        })
    } catch (e) {
        console.log('Unable to add Comment ! ', e.message)
        res.status(400).json({
            success: false,
            message: "Unable to add the comment"
        })
    }
}

exports.getVehicleReviews = (req, res) => {
    const userId = req.user._id
    console.log(userId)
}