const bcrypt = require('bcryptjs')
const { v4: uuidv4 } = require('uuid');
const {readJSON, writeJSON} = require('../../data')
const {validationResult} = require('express-validator')
const {existsSync, unlinkSync} = require('fs')
module.exports = (req,res) => {
    const errors = validationResult(req)
    if(errors.isEmpty()){
        const users = readJSON('users.json')
        console.log(users)
        users.push({
            id: uuidv4(),
            firstName: req.body.name.trim(),
            lastName: req.body.surname.trim(),
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
        return res.redirect('/users/login')
    }else{
        (req.file && existsSync(`./public/images/users/${req.file.filename}`) && unlinkSync(`./public/images/users/${req.file.filename}`)) 
        return res.render('register',{
            title: 'register',
            errors: errors.mapped(),
            old: req.body
        })
    }
}