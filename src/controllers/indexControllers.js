const {writeJSON,readJSON} = require('../data/index');
const produductRead=readJSON('products.json');
module.exports ={
    index:(req, res) => {
    return res.render('index',{
    productsFeatured:produductRead.filter(product=>product.category==='featured'),
    productsNewReleases:produductRead.filter(product=>product.category==='new releases'),
    productsBestSellers:produductRead.filter(product=>product.category==='best sellers')})
    }
}

