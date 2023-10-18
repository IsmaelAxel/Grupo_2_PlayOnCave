const {validationResult} = require('express-validator')
const {existsSync, unlinkSync} = require('fs')
const db = require('../../database/models')
module.exports = (req,res) => {
    const errors = validationResult(req)
    if(errors.isEmpty()){
        const {title, categoryId, price, discount, description, minOs, minProcessor, minMemory, minGraphicsCard, minDisk, recommendedOs, recommendedProcessor, recommendedMemory, recommendedGraphicsCard, recommendedDisk} = req.body
        db.Products.create({
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

        })
        .then(product => {
            if(req.files.mainImage){
                db.Images.create({
                    file :  req.files.mainImage[0].filename,
                    main : true,
                    productId : product.id
                })
                    .then( () => {
                        if(req.files.images){
                           const images = req.files.images.map(({filename}) => {
                            return {
                                file: filename,
                                main : false,
                                productId : product.id
                            }
                           })

                           db.Images.bulkCreate(images,{
                            validate : true
                           }).then(result => console.log(result))
                    }
                })
            }
            return res.redirect('/users/admin')
        }).catch(error => console.log(error))
    }else{
        (req.files.MainImage && existsSync(`./public/images/products/${req.files.MainImage[0].filename }`)) && unlinkSync(`./public/images/products/${req.files.MainImage[0].filename }`);
        if(req.files.images) {
            req.files.images.forEach(file => {
                existsSync(`./public/images/products/${file.filename}`) && unlinkSync(`./public/images/products/${file.filename}`)
            })
        }
        db.Category.findAll()
        .then(category => {
            // return res.send(category)
            return res.render('productAdd',{
                category,
                errors: errors.mapped(),
                old: req.body
            })
        }).catch(error => console.log(error))
    }
}