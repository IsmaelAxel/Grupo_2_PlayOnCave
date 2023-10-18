const {check,body} = require("express-validator");
module.exports = [
    check("title")
      .notEmpty()
      .withMessage("Es obligatorio")
      .bail()
      .isLength({
        min: 4,
        max: 50,
      })
      .withMessage("Debe tener entre 4 y 20 caracteres")
      .matches(/^[a-zA-Z0-9\s]+$/).withMessage('El campo debe contener letras, números y espacios'),
    check("categoryId")
      .notEmpty()
      .withMessage("Es requerida"),
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
        lt: 100
      })
      .withMessage("el desucento tiene que ser un numero positivo y no tiene que ser el 100%"),
    check("description").isLength({
      min: 20,
      max: 500,
    }).withMessage('Debe tener entre 20 y 500 caracteres'),
    body('mainImage')
    .custom((value,{req}) => {
      if(req.params.id){
        return true
      }
      if(req.files.mainImage){
        return true
      }
      return false
    }).withMessage('Debes subir una imagen principal'),
    body('images')
    .custom((value,{req}) => {
      if(req.params.id){
        return true
      }
      if(req.files.images){
        return true
      }
      return false
    }).withMessage('Las imagenes secundarias son obligatorias'),
      check('minOs').notEmpty().withMessage("Se espera un minimo de requisitos").bail()
    .isLength({
      min: 3,
      max: 100,
    }).withMessage("Se espera un minimo de 3 caracteres y un maximo 100 caracteres ").bail()
    .matches(/^[a-zA-Z0-9\s]+$/).withMessage('El campo debe contener letras, números y espacios'),
    check('recommendedOs').notEmpty().withMessage("Se espera un recomendado de requisitos").bail()
    .isLength({
      min: 3,
      max: 100,
    }).withMessage("Se espera un minimo de 3 caracteres y un maximo 100 caracteres ").bail()
    .matches(/^[a-zA-Z0-9\s]+$/).withMessage('El campo debe contener letras, números y espacios'),
    check('recommendedProcessor').notEmpty().withMessage("Se espera un recomendado de requisitos").bail()
    .isLength({
      min: 3,
      max: 100,
    }).withMessage("Se espera un minimo de 3 caracteres y un maximo 100 caracteres ").bail()
    .matches(/^[a-zA-Z0-9\s]+$/).withMessage('El campo debe contener letras, números y espacios'),
    check('minProcessor').notEmpty().withMessage("Se espera un minimo de requisitos").bail()
    .isLength({
      min: 3,
      max: 100,
    }).withMessage("Se espera un minimo de 3 caracteres y un maximo 100 caracteres ").bail()
    .matches(/^[a-zA-Z0-9\s]+$/).withMessage('El campo debe contener letras, números y espacios'),
    check('recommendedMemory').notEmpty().withMessage("Se espera un recomendado de requisitos").bail()
    .isLength({
      min: 3,
      max: 100,
    }).withMessage("Se espera un minimo de 3 caracteres y un maximo 100 caracteres ").bail()
    .matches(/^[a-zA-Z0-9\s]+$/).withMessage('El campo debe contener letras, números y espacios'),
    check('minMemory').notEmpty().withMessage("Se espera un minimo de requisitos").bail()
    .isLength({
      min: 3,
      max: 100,
    }).withMessage("Se espera un minimo de 3 caracteres y un maximo 100 caracteres ").bail()
    .matches(/^[a-zA-Z0-9\s]+$/).withMessage('El campo debe contener letras, números y espacios'),
    check('recommendedGraphicsCard').notEmpty().withMessage("Se espera un recomendado de requisitos").bail()
    .isLength({
      min: 3,
      max: 100,
    }).withMessage("Se espera un minimo de 3 caracteres y un maximo 100 caracteres ").bail()
    .matches(/^[a-zA-Z0-9\s]+$/).withMessage('El campo debe contener letras, números y espacios'),
    check('minGraphicsCard').notEmpty().withMessage("Se espera un minimo de requisitos").bail()
    .isLength({
      min: 3,
      max: 100,
    }).withMessage("Se espera un minimo de 3 caracteres y un maximo 100 caracteres ").bail()
    .matches(/^[a-zA-Z0-9\s]+$/).withMessage('El campo debe contener letras, números y espacios'),
    check('recommendedDisk').notEmpty().withMessage("Se espera un recomendado de requisitos").bail()
    .isLength({
      min: 3,
      max: 100,
    }).withMessage("Se espera un minimo de 3 caracteres y un maximo 100 caracteres ").bail()
    .matches(/^[a-zA-Z0-9\s]+$/).withMessage('El campo debe contener letras, números y espacios'),
    check('minDisk').notEmpty().withMessage("Se espera un minimo de requisitos").bail()
    .isLength({
      min: 3,
      max: 100,
    }).withMessage("Se espera un minimo de 3 caracteres y un maximo 100 caracteres ").bail()
    .matches(/^[a-zA-Z0-9\s]+$/).withMessage('El campo debe contener letras, números y espacios'),
  ];
  