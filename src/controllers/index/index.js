const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const {readJSON} = require('../../data');
const productRead=readJSON('products.json');
module.exports = (req, res) => {
    return res.render('index',{
    productsFeatured:productRead.filter(product=>product.category==='featured'),
    productsNewReleases:productRead.filter(product=>product.category==='new releases'),
    productsBestSellers:productRead.filter(product=>product.category==='best sellers'),
    toThousand})

}