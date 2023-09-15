const { check, body } = require("express-validator");

module.exports = [
    check("name").isLength({ min: 3, max: 50 }).withMessage("min 3 y max 50 caracteres")
        .notEmpty().withMessage("El nombre es obligatorio")
        .isAlpha("es-ES").withMessage("Solo letras"),
    check("surname").isLength({ min: 3, max: 50 }).withMessage("min 3 y max 50 caracteres")
        .notEmpty().withMessage("El apellido es obligatorio")
        .isAlpha("es-ES").withMessage("Solo letras"),
    check("address").isLength({ min: 3, max: 50 }).withMessage("min 3 y max 50 caracteres")
        .notEmpty().withMessage("La direccion es obligatoria")
        .isAlphanumeric("es-ES").withMessage("Solo letras y numeros"),
    check("province").notEmpty().withMessage("La provincia es obligatoria"),
    check("city").notEmpty().withMessage("La ciudad es obligatoria")
];