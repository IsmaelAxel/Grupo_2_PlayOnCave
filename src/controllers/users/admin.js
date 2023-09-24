const {readJSON } = require('../../data');
module.exports = (req,res)  => {
    const products = readJSON('products.json');
    const users = readJSON('users.json');
    return res.render('admin', {
        products,
        users
    })
}