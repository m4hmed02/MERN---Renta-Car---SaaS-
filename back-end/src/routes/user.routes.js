const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')
const avatarUpload = require('../utils/multerConfig')


router.post("/login", userController.login)
router.post("/register", avatarUpload.single("profilePic"), userController.register)

module.exports = router