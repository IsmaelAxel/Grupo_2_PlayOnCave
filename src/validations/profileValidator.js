const moment = require("moment");
const { check, body } = require("express-validator");
const db = require('../database/models');

module.exports = [
  check("name")
    .trim()
    .notEmpty()
    .isLength({
      min: 2,
    })
    .withMessage("El nombre es obligatorio")
    .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/u)
    .withMessage("El campo debe contener letras y espacios"),
  check("surname")
    .trim()
    .notEmpty()
    .isLength({
      min: 2,
    })
    .withMessage("El apellido es obligatorio")
    .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/u)
    .withMessage("El campo debe contener letras y espacios"),

    check("birthday")
    .notEmpty().withMessage("Ingrese la fecha de nacimiento")
    .custom((value) => {
      const birthDate = moment(value);
      const currentDate = moment();

      if (birthDate.isAfter(currentDate)) {
        throw new Error("La fecha debe ser anterior a la actual");
      }
      return true;
    })
    .custom((value) => {
      const birthDate = moment(value);
      const minDate = moment().subtract(120, 'years');

      if (birthDate.isBefore(minDate)) {
        throw new Error("Tan viejo/a sos??");
      }

      return true;
    })
];
