const {check,body} = require("express-validator");
module.exports = [
    check("title")
      .notEmpty()
      .withMessage("Es obligatorio")
      .bail()
      .isLength({
        min: 4,
        max: 100,
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
      check('reqMinOs').notEmpty().withMessage("Se espera un minimo de requisitos").bail()
    .isLength({
      min: 3,
      max: 100,
    }).withMessage("Se espera entre 20 y 100 caracteres").bail(),
    check('reqRecommendedOs').notEmpty().withMessage("Se espera un recomendado de requisitos").bail()
    .isLength({
      min: 3,
      max: 100,
    }).withMessage("Se espera entre 20 y 100 caracteres").bail(),
    check('reqRecommendedProcessor').notEmpty().withMessage("Se espera un recomendado de requisitos").bail()
    .isLength({
      min: 3,
      max: 100,
    }).withMessage("Se espera entre 20 y 100 caracteres").bail(),
    check('reqMinProcessor').notEmpty().withMessage("Se espera un minimo de requisitos").bail()
    .isLength({
      min: 3,
      max: 100,
    }).withMessage("Se espera entre 20 y 100 caracteres").bail(),
    check('reqRecommendedMemory').notEmpty().withMessage("Se espera un recomendado de requisitos").bail()
    .isLength({
      min: 3,
      max: 100,
    }).withMessage("Se espera entre 20 y 100 caracteres").bail(),
    check('reqMinMemory').notEmpty().withMessage("Se espera un minimo de requisitos").bail()
    .isLength({
      min: 3,
      max: 100,
    }).withMessage("Se espera entre 20 y 100 caracteres").bail(),
    check('reqRecommendedGraphicsCard').notEmpty().withMessage("Se espera un recomendado de requisitos").bail()
    .isLength({
      min: 3,
      max: 100,
    }).withMessage("Se espera entre 20 y 100 caracteres").bail(),
    check('reqMinGraphicsCard').notEmpty().withMessage("Se espera un minimo de requisitos").bail()
    .isLength({
      min: 3,
      max: 100,
    }).withMessage("Se espera entre 20 y 100 caracteres").bail(),
    check('reqRecommendedDisk').notEmpty().withMessage("Se espera un recomendado de requisitos").bail()
    .isLength({
      min: 3,
      max: 100,
    }).withMessage("Se espera entre 20 y 100 caracteres").bail(),
    check('reqMinDisk').notEmpty().withMessage("Se espera un minimo de requisitos").bail()
    .isLength({
      min: 3,
      max: 100,
    }).withMessage("Se espera entre 20 y 100 caracteres").bail(),
  ];
  