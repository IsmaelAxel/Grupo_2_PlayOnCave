const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        return cb(null, './public/images/users')
    },
    filename: (req, file, cb) => {
        return cb(null, file.originalname + `${Date.now()}_products_${path.extname(file.originalname)}`)
    }
})
const uploadUser = multer({
    storage
})
module.exports = uploadUser