const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require('../../database/models');
module.exports = (req,res) => {
   db.Section.findByPk(req.params.id,{
    include: {
        model: db.Products,
        as: "products",
        include: {
          model: db.Images,
          as: "images"
        }
      }
   })
   .then(section => {
    console.log(section.products)
    return res.render('platforms',{
        section,
        toThousand
    })
   })
}