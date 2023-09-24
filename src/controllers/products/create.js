const {writeJSON,readJSON} = require('../../data')
const { v4: uuidv4 } = require('uuid');
const {validationResult} = require('express-validator')
const {existsSync, unlinkSync} = require('fs')
module.exports = (req,res) => {
    const errors = validationResult(req)
    if(errors.isEmpty()){
        const products = readJSON('products.json')
        products.push({
            id: uuidv4(),
            title: req.body.title,
            category: req.body.category,
            price: +req.body.price,
            discount: +req.body.discount,
            MainImage : req.files.MainImage ? req.files.MainImage[0].filename : null,
            images : req.files.images ? req.files.images.map(image => image.filename) : [],
            description: req.body.description.trim(),
            reqRecommendedOs: req.body.reqRecommendedOs.trim(),
            reqMinOs: req.body.reqMinOs.trim(),
            reqRecommendedProcessor: req.body.reqRecommendedProcessor.trim(),
            reqMinProcessor: req.body.reqMinProcessor.trim(),
            reqRecommendedMemory: req.body.reqRecommendedMemory.trim(),
            reqMinMemory: req.body.reqMinMemory.trim(),
            reqRecommendedGraphicsCard: req.body.reqRecommendedGraphicsCard.trim(),
            reqMinGraphicsCard: req.body.reqMinGraphicsCard.trim(),
            reqRecommendedDisk: req.body.reqRecommendedDisk.trim(),
            reqMinDisk: req.body.reqMinDisk.trim()
        }
        )
        writeJSON(products, 'products.json')
        return res.redirect('/users/admin')
    }else{
        (req.files.MainImage && existsSync(`./public/images/products/${req.files.MainImage[0].filename }`)) && unlinkSync(`./public/images/products/${req.files.MainImage[0].filename }`);

        if(req.files.images) {
            req.files.images.forEach(file => {
                existsSync(`./public/images/products/${file.filename}`) && unlinkSync(`./public/images/products/${file.filename}`)
            })
        }
        return res.render('productAdd',{
            errors: errors.mapped(),
            old: req.body
        })
    }
    
   
    
}