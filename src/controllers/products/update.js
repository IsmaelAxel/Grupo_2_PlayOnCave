const { unlinkSync, existsSync } = require("fs");
const {validationResult} = require('express-validator')
const db = require("../../database/models");

module.exports = (req, res) => {

    
    const {title, categoryId, price, discount, description, minOs, minProcessor, minMemory, minGraphicsCard, minDisk, recommendedOs, recommendedProcessor, recommendedMemory, recommendedGraphicsCard, recommendedDisk} = req.body
    const errors = validationResult(req)
    if(errors.isEmpty()){
        
        db.Products.findByPk(req.params.id,{
            include:['images']
          })
          .then(product => {
            db.Products.update({
                title: title.trim(),
                categoryId,
                price,
                discount: discount || 0,
                description: description.trim(),
                minOs: minOs.trim(),
                minProcessor: minProcessor.trim(),
                minMemory: minMemory.trim(),
                minGraphicsCard: minGraphicsCard.trim(),
                minDisk: minDisk.trim(),
                recommendedOs: recommendedOs.trim(),
                recommendedProcessor: recommendedProcessor.trim(),
                recommendedMemory: recommendedMemory.trim(),
                recommendedGraphicsCard: recommendedGraphicsCard.trim(),
                recommendedDisk: recommendedDisk.trim()
            },{
                where:{
                id:req.params.id
                }
              }).then(() =>{
                if (req.files.mainImage) {
                    
                    existsSync(`./public/images/products/${product.images.find(image=>image.main).file}`) && 
                    unlinkSync(`./public/images/products/${product.images.find(image=>image.main).file}`)   
               db.Images.destroy({
                where:{
                    productId: req.params.id,
                    main: true
                }
               }).then(() => {
                db.Images.create({
                    file :  req.files.mainImage[0].filename,
                    main : true,
                    productId : req.params.id
                })
               })
                }
                if (req.files.images) {
                    product.images.filter(image => !image.main).forEach((image)=>{
                        existsSync(`./public/images/products/${image.file}`) && 
                        unlinkSync(`./public/images/products/${image.file}`)
                      })
                      db.Images.destroy({
                        where:{
                            productId: req.params.id,
                            main: false
                        }
                      })
                      .then(() => {
                        const images = req.files.images.map(({filename}) => {
                            return {
                                file:filename ,
                                main:false,
                                productId: req.params.id
                            }
                        })
                        db.Images.bulkCreate(images,{
                            validate : true
                        }).then(result=> console.log(result))
                      })
                }

              } ).catch(error=> console.log(error))
                    .finally(()=> {
                return res.redirect("/users/admin")
                 })
          })
       
    }else{
        const category =  db.Category.findAll({
            order: ['name']
        })
        const products = db.Products.findByPk(req.params.id,{
            include:{
                all: true
           }
        })
       
        Promise.all([category,products])
    
        .then(([category,products])=> {
            return res.render('productEdit',{
                category,
                ...products?.dataValues,
                errors: errors.mapped() 
            })
        })
        .catch(error => console.log(error));
    }

    
}