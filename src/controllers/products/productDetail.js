const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const {readJSON } = require('../../data');
const productRead = readJSON('products.json');
module.exports = (req, res) => {
    const product = productRead.find(product => product.id === req.params.id)
    console.log(product);
    return res.render('productDetail', {
        ...product,
        toThousand
    })
}