const { check, body } = require("express-validator");

module.exports = [
    check("name").isLength({ min: 3, max: 50 }).withMessage("min 3 y max 50 caracteres")
    .matches(/^[a-zA-Z\s]+$/).withMessage('El campo debe contener solo letras y espacios'),
    check("surname").isLength({ min: 3, max: 50 }).withMessage("min 3 y max 50 caracteres")
    .matches(/^[a-zA-Z\s]+$/).withMessage('El campo debe contener solo letras y espacios'),
    
];