const { validationResult } = require("express-validator")
const {readJSON} =require("../../data")


module.exports = (req,res) => {

    const errors = validationResult(req)
    if (errors.isEmpty()) {
        const users = readJSON('users.json')
        const {id,firstName,rol} = users.find(user => user.email === req.body.email)
        req.session.userLogin = {
            id,
            
            firstName,
            rol,
        }
        
       return res.redirect("/")
    } else{
        return res.render('login',{
            title: 'login',
            errors: errors.mapped(),
            old: req.body
        })
    }
}