const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require('../../database/models');
module.exports = (req, res) => {
    db.Products.findByPk(req.params.id, {
        include: ['images']
    })
        .then(product => {
            return res.render('productDetail', {
                ...product.dataValues,
                toThousand
            })
        })
        .catch(err => console.log(err))
}