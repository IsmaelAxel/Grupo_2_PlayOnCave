const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const { writeJSON, readJSON } = require('../data/index');
const productRead = readJSON('products.json');

module.exports = {
    login:require('./users/login') ,
    processLogin:require('./users/processLogin'),
    
    register: require('./users/register'),
    processRegister: require('./users/processRegister'),
    
    admin : (req,res)  => {

        const products = readJSON('products.json');
        const users = readJSON('users.json');
        return res.render('admin', {
            products,
            users
            
        })
    },
    users: (req,res)  => {

        return res.render('users');


    },
    profile: require("./users/profile"),
    updateProfile: require("./users/updateProfile"),
    logout:require('./users/logOut')

 }