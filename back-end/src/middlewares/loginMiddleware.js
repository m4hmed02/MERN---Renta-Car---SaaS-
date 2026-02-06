const jwt = require('jsonwebtoken')

let isLoggedIn = function (req, res, next) {

    let token = req.cookies.token
    console.log(token)
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Unsuccessfully! User LogIn"
        })
    }else{
        let decode = jwt.verify(token, process.env.Jwt_secret)
        req.user = decode
        next()
    }
}

module.exports = isLoggedIn