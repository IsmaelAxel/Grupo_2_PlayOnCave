const { check, body } = require("express-validator");

module.exports = [
    check("avatar").notEmpty().withMessage("La imagen es obligatoria"),
    check("firstName").isLength({ min: 3, max: 50 }).withMessage("min 3 y max 50 caracteres")
        .notEmpty().withMessage("El nombre es obligatorio")
        .isAlpha("es-ES").withMessage("Solo letras"),
    check("lastName").isLength({ min: 3, max: 50 }).withMessage("min 3 y max 50 caracteres")
        .notEmpty().withMessage("El apellido es obligatorio")
        .isAlpha("es-ES").withMessage("Solo letras"),
    check("birthday").notEmpty().withMessage("La imagen es obligatoria"),
    check("address").notEmpty().withMessage("La direccion es obligatoria"),
    check("province").notEmpty().withMessage("La provincia es obligatoria"),
    check("city").notEmpty().withMessage("La ciudad es obligatoria")
];