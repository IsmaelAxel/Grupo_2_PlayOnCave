const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const { writeJSON, readJSON } = require('../data/index');
const productRead = readJSON('products.json');

module.exports = {
    login: (req, res) => {
        return res.render('login');
    },
    register: require('./users/register'),
    processRegister: require('./users/processRegister'),
    admin : (req,res)  => {

        const products = readJSON('products.json');
        return res.render('admin', {
            products,
            
        })
    },
    users: (req,res)  => {

        return res.render('users');


    }

 }