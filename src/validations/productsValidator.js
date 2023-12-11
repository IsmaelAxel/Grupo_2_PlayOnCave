const { check, body } = require("express-validator");
module.exports = [
  check("title")
    .trim()
    .notEmpty()
    .withMessage("Es obligatorio")
    .bail()
    .isLength({
      min: 4,
      max: 50,
    })
    .withMessage("Debe tener entre 4 y 20 caracteres")
    .matches(/^[a-zA-Z0-9\s:'Δ]+$/ )
    .withMessage("El campo debe contener letras, números y espacios"),
  check("categoryId").notEmpty().withMessage("Es requerida"),
  check("price")
    .notEmpty()
    .withMessage("Es obligatorio")
    .isInt({
      gt: 1,
    })
    .withMessage("Debe ser positivo"),
  check("discount")
    .isInt({
      gt: -1,
      lt: 100,
    })
    .withMessage(
      "el desucento tiene que ser un numero positivo y no tiene que ser el 100%"
    ),
  check("description")
    .trim()
    .isLength({
      min: 20,
      max: 1000,
    })
    .withMessage("Debe tener entre 20 y 1000 caracteres")
    .matches(/^[a-zA-Z0-9\s\/(),|\-.áéíóúÁÉÍÓÚñÑ':]+$/u)
    .withMessage("El campo solo acepta estos caracteres especiales: ' , ', ' / ', ' | ', ' - ', ' ( ) ' , ' . ' , y tíldes"),
  body("mainImage")
    .custom((value, {req}) => {
        if (req.files.mainImage[0]) {
          return true;
        }else{
          console.log(req.files)
          return false;
        }
    }).withMessage("Debes subir una imagen principal")
    .bail()
    .custom((value, { req }) => {
      let mimeTypeFile = req.files.mainImage[0].mimetype
      if (mimeTypeFile === "image/jpeg" || mimeTypeFile === "image/png" || mimeTypeFile === "image/webp") {
        return true
      }else{
        existsSync(`./public/images/products/${req.files.mainImage[0].filename}`) && unlinkSync(`./public/images/products/${req.files.mainImage[0].filename}`)
        return false;
      }
    }).withMessage("Tipo de archivo incompatible"),
  body("images")
    .custom((value, { req }) => {
      if (!req.files.images) {
        return false;
      }else{
        return true;
      }
    }).withMessage("Debes subir imagenes secundarias")
    .bail()
    .custom((value, {req}) => {
      if(req.files.images.length !== 5){
        req.files.images.forEach(file => {
          existsSync(`./public/images/products/${file.filename}`) && unlinkSync(`./public/images/products/${file.filename}`)
        });
        return false
      }else{
        return true
      }
    }).withMessage("Tenes que subir 5 imagenes")
    .bail()
    .custom((value, {req})=>{
      let mimetypeFilesImages = req.files.images
      let mimetypeFilesImagesValidates = []
      for (let i = 0; i < req.files.images.length; i++) {
        if(mimetypeFilesImages[i].mimetype === "image/jpeg" || mimetypeFilesImages[i].mimetype === "image/png" || mimetypeFilesImages[i].mimetype === "image/webp"){
          mimetypeFilesImagesValidates.push(mimetypeFilesImages[i].mimetype)
        }
      }
      if(mimetypeFilesImagesValidates.length === 5){
        return true
      }else{
        req.files.images.forEach(file => {
          existsSync(`./public/images/products/${file.filename}`) && unlinkSync(`./public/images/products/${file.filename}`)
        });
        return false
      }
    }).withMessage("Tipo de archivo incompatible")
    .bail(),
  check("minOs")
    .trim()
    .notEmpty()
    .withMessage("Se espera un minimo de requisitos")
    .bail()
    .isLength({
      min: 3,
      max: 100,
    })
    .withMessage(
      "Se espera un minimo de 3 caracteres y un maximo 100 caracteres "
    )
    .bail()
    .matches(/^[a-zA-Z0-9\s/(),|.|-]+$/)
    .withMessage("El campo solo acepta estos caracteres especiales: ' / ', ' | ', ' - ', ' ( ) ', ' . ' y ' , '"),
  check("recommendedOs")
    .trim()
    .notEmpty()
    .withMessage("Se espera un recomendado de requisitos")
    .bail()
    .isLength({
      min: 3,
      max: 100,
    })
    .withMessage(
      "Se espera un minimo de 3 caracteres y un maximo 100 caracteres "
    )
    .bail()
    .matches(/^[a-zA-Z0-9\s/(),|.|-]+$/)
    .withMessage("El campo solo acepta estos caracteres especiales: ' / ', ' | ', ' - ', ' ( ) ', ' . ' y ' , '"),
  check("recommendedProcessor")
    .trim()
    .notEmpty()
    .withMessage("Se espera un recomendado de requisitos")
    .bail()
    .isLength({
      min: 3,
      max: 100,
    })
    .withMessage(
      "Se espera un minimo de 3 caracteres y un maximo 100 caracteres "
    )
    .bail()
    .matches(/^[a-zA-Z0-9\s/(),|.|-]+$/)
    .withMessage("El campo solo acepta estos caracteres especiales: ' / ', ' | ', ' - ', ' ( ) ', ' . ' y ' , '"),
  check("minProcessor")
    .trim()
    .notEmpty()
    .withMessage("Se espera un minimo de requisitos")
    .bail()
    .isLength({
      min: 3,
      max: 100,
    })
    .withMessage(
      "Se espera un minimo de 3 caracteres y un maximo 100 caracteres "
    )
    .bail()
    .matches(/^[a-zA-Z0-9\s/(),|.|-]+$/)
    .withMessage("El campo solo acepta estos caracteres especiales: ' / ', ' | ', ' - ', ' ( ) ', ' . ' y ' , '"),
  check("recommendedMemory")
    .trim()
    .notEmpty()
    .withMessage("Se espera un recomendado de requisitos")
    .bail()
    .isLength({
      min: 3,
      max: 100,
    })
    .withMessage(
      "Se espera un minimo de 3 caracteres y un maximo 100 caracteres "
    )
    .bail()
    .matches(/^[a-zA-Z0-9\s/(),|.|-]+$/)
    .withMessage("El campo solo acepta estos caracteres especiales: ' / ', ' | ', ' - ', ' ( ) ', ' . ' y ' , '"),
  check("minMemory")
    .trim()
    .notEmpty()
    .withMessage("Se espera un minimo de requisitos")
    .bail()
    .isLength({
      min: 3,
      max: 100,
    })
    .withMessage(
      "Se espera un minimo de 3 caracteres y un maximo 100 caracteres "
    )
    .bail()
    .matches(/^[a-zA-Z0-9\s/(),|.|-]+$/)
    .withMessage("El campo solo acepta estos caracteres especiales: ' / ', ' | ', ' - ', ' ( ) ', ' . ' y ' , '"),
  check("recommendedGraphicsCard")
    .trim()
    .notEmpty()
    .withMessage("Se espera un recomendado de requisitos")
    .bail()
    .isLength({
      min: 3,
      max: 100,
    })
    .withMessage(
      "Se espera un minimo de 3 caracteres y un maximo 100 caracteres "
    )
    .bail()
    .matches(/^[a-zA-Z0-9\s/(),|.|-]+$/)
    .withMessage("El campo solo acepta estos caracteres especiales: ' / ', ' | ', ' - ', ' ( ) ', ' . ' y ' , '"),
  check("minGraphicsCard")
    .trim()
    .notEmpty()
    .withMessage("Se espera un minimo de requisitos")
    .bail()
    .isLength({
      min: 3,
      max: 100,
    })
    .withMessage(
      "Se espera un minimo de 3 caracteres y un maximo 100 caracteres "
    )
    .bail()
    .matches(/^[a-zA-Z0-9\s/(),|.|-]+$/)
    .withMessage("El campo solo acepta estos caracteres especiales: ' / ', ' | ', ' - ', ' ( ) ', ' . ' y ' , '"),
  check("recommendedDisk")
    .trim()
    .notEmpty()
    .withMessage("Se espera un recomendado de requisitos")
    .bail()
    .isLength({
      min: 3,
      max: 100,
    })
    .withMessage(
      "Se espera un minimo de 3 caracteres y un maximo 100 caracteres "
    )
    .bail()
    .matches(/^[a-zA-Z0-9\s/(),|.|-]+$/)
    .withMessage("El campo solo acepta estos caracteres especiales: ' / ', ' | ', ' - ', ' ( ) ', ' . ' y ' , '"),
  check("minDisk")
    .trim()
    .notEmpty()
    .withMessage("Se espera un minimo de requisitos")
    .bail()
    .isLength({
      min: 3,
      max: 100,
    })
    .withMessage(
      "Se espera un minimo de 3 caracteres y un maximo 100 caracteres "
    )
    .bail()
    .matches(/^[a-zA-Z0-9\s/(),|.|-]+$/)
    .withMessage("El campo solo acepta estos caracteres especiales: ' / ', ' | ', ' - ', ' ( ) ', ' . ' y ' , '"),
  check("sectionId").notEmpty().withMessage("Es requerida"),
];
