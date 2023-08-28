
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const { writeJSON, readJSON } = require('../data/index');
const productRead = readJSON('products.json');

module.exports = {
    /*  index: (req, res) => {
     return res.render('index',);
     }, */
    productCart: (req, res) => {
        return res.render('productCart');
    },
    productDetail: (req, res) => {

        const product = productRead.find(product => product.id === req.params.id)
        console.log(product);
        return res.render('productDetail', {
            ...product,
            toThousand
        })

    },
    productEdit: require('./products/edit'),
    productAdd: (req, res) => {
        return res.render('productAdd');
    },
    productUpdate: require('./products/update'),
    productCreate: require('./products/create'),

}