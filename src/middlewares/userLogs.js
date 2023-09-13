const {appendFileSync}=require('fs');

const { request } = require("../app");

const userLogs = (req,res,next) =>{
appendFileSync('./src/logs/userLogs.txt','El usuario ingreso a la ruta:'+req.url+'\n')
  next () 

}
module.exports = userLogs