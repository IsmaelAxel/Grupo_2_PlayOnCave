const { check, body } = require("express-validator");

module.exports = [
    check("firstName").isLength({ min: 3, max: 50 }).withMessage("min 3 y max 50 caracteres")
        .isAlphanumeric("es-ES", {
            ignore: " "
        }).withMessage("Solo letras"),
    check("lastName").isLength({ min: 3, max: 50 }).withMessage("min 3 y max 50 caracteres")
        .isAlphanumeric("es-ES", {
            ignore: " "
        }).withMessage("Solo letras"),
    check("address").isLength({ max: 50 }).withMessage("max 50 caracteres")
];