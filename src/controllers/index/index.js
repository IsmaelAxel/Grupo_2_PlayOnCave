const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require('../../database/models');
module.exports = (req, res) => {
    const productsFeatured = db.Products.findAll({
        where: {
            categoryId: 1
        }
    });
    const productsNewReleases = db.Products.findAll({
        where: {
            categoryId: 2
        }
    });
    const productsBestSellers = db.Products.findAll({
        where: {
            categoryId: 3
        }
    });
    Promise.all([productsFeatured, productsNewReleases, productsBestSellers])
        .then(([productsFeatured, productsNewReleases, productsBestSellers]) => {
            return res.render('index', {
                productsFeatured,
                productsNewReleases,
                productsBestSellers,
                toThousand
            })
        })
        .catch(err => console.log(err))
}

