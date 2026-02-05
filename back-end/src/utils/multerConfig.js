const multer = require('multer')
const path = require('path')
const crypto = require('crypto')

// disk storage for the avatar
const userAvatarStorage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, path.join(__dirname, '..', '..', 'public', 'userAvatars'))
    },
    filename: function(req, file ,cb){
        crypto.randomBytes(12, function(err, name){
            const fn = name.toString('hex') + path.extname(file.originalname)
            cb(null, fn)
        })
    }
})
const avatarUpload = multer({ storage: userAvatarStorage })

// export upload variable
module.exports = avatarUpload