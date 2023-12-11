const db = require("../../database/models")

module.exports = (req, res) => {

    const categories =  db.Category.findAll()
    

    const products = db.Products.findByPk(req.params.id,{
        include : {
            all : true
        }
    })

    const sections = db.Section.findAll({
        order: ['name']
    });
  
    Promise.all([categories,products,sections])

    .then(([categories,products,sections])=> {

        // return res.send(category)
    //    return res.send(products.section)
    console.log("Products data:", products);
        return res.render('productEdit',{
            categories,
            products: products ? products.dataValues : null,
            sections
        })
    })
    .catch(error => console.log(error));
   
}