const user = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// for user login
exports.login = async (req, res) => {
    console.log("login hit")

    const {email, password} = req.body

    const token = jwt.sign({email: req.body.email}, process.env.Jwt_secret)

    console.log(token)
    try {

        res.cookie("token", token)

        res.status(200).json({
            success: true,
            message: "User LoggedIn Successfully!"
        })
    }
    catch (e) {
        console.log("Login Server Error Message: ", e.message)
    }
}

//for user registeration
exports.register =  (req, res) => {

    const { name, email, password, role } = req.body
    const profilePic = req.file.filename

    try {

        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash("plainPass", salt, async function (err, hash) {

                let User = new user({
                    name,
                    email,
                    password: hash,
                    role,
                    profilePic
                })
                console.log(User)
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