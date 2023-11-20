const multer = require('multer')
const path = require('path')
const { v4: uuidv4 } = require('uuid');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        return cb(null, './public/images/products')
    },
    filename: (req, file, cb) => {
        return cb(null,`${uuidv4()}_products_${path.extname(file.originalname)}`)
    }
})

const fileFilter = (req,file,cb) => {
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif|webp)$/)){
        
        if(file.fieldname === "mainImage"){
            req.fileValidatorError = {
                ...req.fileValidatorError,
                mainImage : "Solo se una imágen jpg|jpeg|png|gif|webp"
            }
        }

         if(file.fieldname === "images"){
            req.fileValidatorError = {
                ...req.fileValidatorError,
                images : "Solo se permiten imágenes jpg|jpeg|png|gif|webp"
            }
        }
      
        return cb(null, false, req.fileValidatorError)
    }

    return cb(null, true)
}

const upload = multer({
    storage,
    fileFilter
})
module.exports = upload