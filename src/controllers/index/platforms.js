const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require('../../database/models');
module.exports = (req,res) => {
   const section = db.Section.findByPk(req.params.id,{
    include: {
        model: db.Products,
        as: "products",
        include: {
          model: db.Images,
          as: "images"
        }
      }
   })
   const platforms = db.Section.findAll({
    include: ['products']
})
  Promise.all([section, platforms])
   .then(([section, platforms]) => {
    console.log(section.products)
    return res.render('platforms',{
        section,
        platforms,
        toThousand
    })
   })
}