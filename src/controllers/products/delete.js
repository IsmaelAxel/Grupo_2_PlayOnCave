const db = require('../../database/models');
const {existsSync, unlinkSync} = require('fs')
module.exports = (req,res) => {
    db.Products_section.destroy({
        where:{
            productsId: req.params.id
        },
    })
    db.Images.findAll({
        where:{
            productId: req.params.id
        }
    }).then(images =>{
        images.forEach(image => {
            existsSync(`./public/images/products/${image.file}`) &&
            unlinkSync(`./public/images/products/${image.file}`);
        });
        db.Products.destroy({
            where: {
                id: req.params.id
            }
        }).then(() => {
            return res.redirect('/users/admin')
        })
    })
    .catch(error => console.log(error))
}



