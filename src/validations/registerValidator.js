const { check, body } = require("express-validator");
const db = require('../database/models');
module.exports = [
  check("name")
    .isLength({
      min: 3,
    })
    .withMessage("El nombre es obligatorio")
    .isAlpha("es-ES", {
      ignore: " "
    })
    .withMessage("Solo letras"),
  check("surname")
    .isLength({
      min: 3,
    })
    .withMessage("El apellido es obligatorio")
    .isAlpha("es-ES")
    .withMessage("Solo letras"),
  body("email")
    .notEmpty()
    .withMessage("El email es obligatorio")
    .isEmail()
    .withMessage("Formato inválido")
    .custom((value, { req }) => {

      return db.Users.findOne({
        where: {
          email: value
        }
      }).then(user => {
        if (user) {
          return Promise.reject()
        }
      }).catch((error) => {
        console.log(error);
        return Promise.reject('El email ya se encuentra registrado')
      })
    })
    .withMessage("El email ya se encuentra registrado"),
  check("password")
    .isLength({
      min: 6,
      max: 12,
    })
    .withMessage("la contraseña tiene que tener entre 6 y 12 caracteres"),
  body('password2')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        return false
      }
      return true
    }).withMessage('Las contraseñas no coinciden'),
    
];