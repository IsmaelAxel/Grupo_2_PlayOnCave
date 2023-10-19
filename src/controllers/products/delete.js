const db = require('../../database/models');
module.exports = (req,res) => {
    db.Products.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        return res.redirect('/users/admin')
    })
    .catch(error => console.log(error))
}

// module.exports = (req,res) => {

//     const products = readJSON("products.json");

//     const productsModify = products.filter((product) => {
//       if (product.id === req.params.id) {
//           existsSync(`./public/images/products/${product.MainImage}`) &&
//           unlinkSync(`./public/images/products/${product.MainImage}`);
//       }
//       if (product.id === req.params.id) {
//         product.images.forEach(image => {
//           existsSync(`./public/images/products/${image}`) &&
//           unlinkSync(`./public/images/products/${image}`);
//         });
//       }
//       return product.id !== req.params.id;
//     })

//     writeJSON(productsModify, "products.json");

//     return res.redirect("/users/admin");
// }


