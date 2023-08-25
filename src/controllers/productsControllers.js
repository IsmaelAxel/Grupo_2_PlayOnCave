 const {readJSON, writeJSON} = require('../data')
// const { v4: uuidv4 } = require('uuid');
module.exports = {
   /*  index: (req, res) => {
    return res.render('index',);
    }, */
    productCart: (req, res) => {
        return res.render('productCart');
    },
    productDetail: (req, res) => {
        return res.render('productDetail');
    },
    productEdit: (req, res) => {
        return res.render('productEdit');
    },
    productAdd: (req, res) => {
        return res.render('productAdd');
    },
    productCreate: require('./products/create'),

}