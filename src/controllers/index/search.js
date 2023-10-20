const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const { Op } = require('sequelize')
const db = require('../../database/models');
module.exports = (req, res) => {
    db.Products.findAll({
        include: ['images'],
        where: {
            [Op.or]: [
                {
                    title: {
                        [Op.substring]: req.query.keywords
                    }
                },
                {
                    description: {
                        [Op.substring]: req.query.keywords
                    }
                }
            ]
        }
    })
        .then(results => {
            return res.render('searchBar', {
                results,
                toThousand,
                keywords: req.query.keywords
            })
        })
        .catch(err => console.log(err))
}

