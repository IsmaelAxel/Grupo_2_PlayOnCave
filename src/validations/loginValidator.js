const { check, body } = require("express-validator");
const { readJSON } = require("../data");
const { compareSync } = require("bcryptjs");
module.exports = [
  check("email")
    .notEmpty()
    .withMessage("El email es obligatorio")
    .isEmail()
    .withMessage("Formato inválido"),
  body("password")
    .custom((value, {req}) => {
        const users = readJSON('users.json');
        const user = users.find(user => user.email === req.body.email);
        console.log(user);
    
        if(!user){
          console.log("ERROR: El usuario no existe :(");
          return false
      }else {

        if(value == user.password){
        
          return true
      } else {

          if(!compareSync(value, user.password)){
              console.log("ERROR: La contraseña es incorrecta");
              return false
          }
         
      }}
      return true
    }).withMessage('Credenciales inválidas')

];