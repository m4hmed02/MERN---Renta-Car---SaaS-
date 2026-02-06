const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')
const avatarUpload = require('../utils/multerConfig')
const isLoggedIn = require('../middlewares/loginMiddleware')

router.post("/login", userController.login)
router.post("/register", avatarUpload.single("profilePic"), userController.register)
router.get("/logout", userController.logout)
router.get("/getUser",isLoggedIn , userController.getUserDetail)

module.exports = router