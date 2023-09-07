const bcrypt = require('bcryptjs')
const { v4: uuidv4 } = require('uuid');
const {readJSON, writeJSON} = require('../../data')
const {validationResult} = require('express-validator')
module.exports = (req,res) => {
    const errors = validationResult(req)
    if(errors.isEmpty()){
        const users = readJSON('users.json')
        console.log(users)
        users.push({
            id: uuidv4(),
            firstname: req.body.name.trim(),
            lastname: req.body.surname.trim(),
            email: req.body.email,
            password : bcrypt.hashSync(req.body.password,10),
            rol : 'user',
            avatar : req.file ? req.file.filename : null,
            birthday : null,
            address : null,
            city : null,
            province : null
        })
        writeJSON(users, 'users.json')
        return res.redirect('/')
    }else{
        return res.render('register',{
            title: 'register',
            errors: errors.mapped(),
            old: req.body
        })
    }
}