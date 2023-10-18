const db = require('../../database/models')
module.exports = (req, res) => {
    db.Category.findAll()
    .then(category => {
        // return res.send(category)
        return res.render('productAdd',{
            category
        })
    }).catch(error => console.log(error))
}