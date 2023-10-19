const db = require('../../database/models')
module.exports = (req,res) => {
    const products = db.Products.findAll({
        include: ['category','images']
    })
    const categories = db.Category.findAll()
    const users = db.Users.findAll()
    Promise.all([products, categories,users])
    .then(([products,categories,users])=>{
        return res.render('admin',{
            products,
            categories,
            users
        })
    })
}