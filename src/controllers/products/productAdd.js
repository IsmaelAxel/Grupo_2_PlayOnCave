const db = require('../../database/models')
module.exports = (req, res) => {
  
    const category = db.Category.findAll({
        order: ['name']
    });

    const sections = db.Section.findAll({
        order: ['name']
    });

    Promise.all([category,sections])
    .then(([category,sections]) => {
        return res.render('productAdd',{
            category,
            sections      
        }) 
    }).catch(error => console.log(error))
}