const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require('../../database/models');
module.exports = (req, res) => {
  
    const productsFeatured = db.Products.findAll({
        include : ['images'],
        where: {
            categoryId: 1
        }
    });
    const productsNewReleases = db.Products.findAll({
        include : ['images'],
        where: {
            categoryId: 2
        }
    });
    const productsBestSellers = db.Products.findAll({
        include : ['images'],
        where: {
            categoryId: 3
        }
    });
    const platforms = db.Section.findAll({
        include: ['products']
    })
    Promise.all([productsFeatured, productsNewReleases, productsBestSellers,platforms])
        .then(([productsFeatured, productsNewReleases, productsBestSellers, platforms]) => {
            return res.render('index', {
                productsFeatured,
                productsNewReleases,
                productsBestSellers,
                platforms,
                toThousand
            })
        })
        .catch(err => console.log(err))
}

