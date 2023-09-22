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
      .withMessage("Debe tener entre 4 y 20 caracteres"),
    check("category")
      .notEmpty()
      .withMessage("Es requerida"),
    check("price")
      .notEmpty()
      .withMessage("Es obligatorio")
      .isInt({
        gt: 1,
      })
      .withMessage("Debe ser positivo"),
    check("description").isLength({
      min: 20,
      max: 500,
    }).withMessage('Debe tener entre 20 y 500 caracteres'),
    body('MainImage')
      .custom(({req}) => {
        if(req.files.MainImage){
          return true
        }
        return false
      }).withMessage('Debes subir una imagen principal'),
    body('images')
      .custom(({req}) => {
        if(req.files.images){
          return true
        }
        return false
      }).withMessage('Debes subir imagenes secundarias'),
      check('reqMinOs').notEmpty().withMessage("Se espera un minimo de requisitos").bail()
    .isLength({
      min: 3,
      max: 50,
    }).withMessage("Se espera un minimo de 3 caracteres y un maximo 50 caracteres ").bail(),
    check('reqRecommendedOs').notEmpty().withMessage("Se espera un recomendado de requisitos").bail()
    .isLength({
      min: 3,
      max: 50,
    }).withMessage("Se espera un minimo de 3 caracteres y un maximo 50 caracteres ").bail(),
    check('reqRecommendedProcessor').notEmpty().withMessage("Se espera un recomendado de requisitos").bail()
    .isLength({
      min: 3,
      max: 50,
    }).withMessage("Se espera un minimo de 3 caracteres y un maximo 50 caracteres ").bail(),
    check('reqMinProcessor').notEmpty().withMessage("Se espera un minimo de requisitos").bail()
    .isLength({
      min: 3,
      max: 50,
    }).withMessage("Se espera un minimo de 3 caracteres y un maximo 50 caracteres ").bail(),
    check('reqRecommendedMemory').notEmpty().withMessage("Se espera un recomendado de requisitos").bail()
    .isLength({
      min: 3,
      max: 50,
    }).withMessage("Se espera un minimo de 3 caracteres y un maximo 50 caracteres ").bail(),
    check('reqMinMemory').notEmpty().withMessage("Se espera un minimo de requisitos").bail()
    .isLength({
      min: 3,
      max: 50,
    }).withMessage("Se espera un minimo de 3 caracteres y un maximo 50 caracteres ").bail(),
    check('reqRecommendedGraphicsCard').notEmpty().withMessage("Se espera un recomendado de requisitos").bail()
    .isLength({
      min: 3,
      max: 50,
    }).withMessage("Se espera un minimo de 3 caracteres y un maximo 50 caracteres ").bail(),
    check('reqMinGraphicsCard').notEmpty().withMessage("Se espera un minimo de requisitos").bail()
    .isLength({
      min: 3,
      max: 50,
    }).withMessage("Se espera un minimo de 3 caracteres y un maximo 50 caracteres ").bail(),
    check('reqRecommendedDisk').notEmpty().withMessage("Se espera un recomendado de requisitos").bail()
    .isLength({
      min: 3,
      max: 50,
    }).withMessage("Se espera un minimo de 3 caracteres y un maximo 50 caracteres ").bail(),
    check('reqMinDisk').notEmpty().withMessage("Se espera un minimo de requisitos").bail()
    .isLength({
      min: 3,
      max: 50,
    }).withMessage("Se espera un minimo de 3 caracteres y un maximo 50 caracteres ").bail(),
  ];
  