const userModel = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// for user login
exports.login = async (req, res) => {

    const { email, password } = req.body

    let User = await userModel.findOne({ email })

    if (!User) return res.status(401).json({ success: false, message: "No User found" })

    const token = jwt.sign({ email: email }, process.env.Jwt_secret)

    try {

        bcrypt.compare(password, User.password, function (err, result) {
            if (result) {
                res.cookie("token", token)

                res.status(200).json({
                    success: true,
                    message: "User LoggedIn Successfully!"
                })

            } else {
                res.status(401).json({
                    success: true,
                    message: "Unsuccessfully! User LogIn"
                })
            }
        })



    }
    catch (e) {
        console.log("Login Server Error Message: ", e.message)
        res.status(401).json({
            success: true,
            message: "Unsuccessfully! User LogIn"
        })
    }

}

//for user Logout
exports.logout = (req, res) => {
    res.cookie(token, "")
}

//for user registeration
exports.register = (req, res) => {

    const { name, email, password, role } = req.body
    const profilePic = req.file.filename

    try {

        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, async function (err, hash) {

                let User = new userModel({
                    name,
                    email,
                    password: hash,
                    role,
                    profilePic
                })
                await User.save()
            })
        })

        res.status(200).json({
            success: true,
            message: "User Registered Successfully!"
        })

    } catch (e) {
        console.log("Registration Server Error Message: ", e.message)
    }

}

exports.getUserDetail = async (req, res) => {

    let userData = await userModel.findOne({email: req.user.email})

    res.status(200).json({
        success: true,
        userData
    })
}