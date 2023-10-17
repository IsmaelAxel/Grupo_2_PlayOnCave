const { check, body } = require("express-validator");

module.exports = [
    check("firstName").isLength({ min: 3, max: 50 }).withMessage("min 3 y max 50 caracteres")
    .matches(/^[a-zA-Z\s]+$/).withMessage('El campo debe contener solo letras y espacios'),
    check("lastName").isLength({ min: 3, max: 50 }).withMessage("min 3 y max 50 caracteres")
    .matches(/^[a-zA-Z\s]+$/).withMessage('El campo debe contener solo letras y espacios'),
    check("address").isLength({ max: 50 }).withMessage("max 50 caracteres")
];