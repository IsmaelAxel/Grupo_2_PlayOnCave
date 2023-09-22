const { readJSON, writeJSON } = require("../../data");
const { unlinkSync, existsSync } = require("fs");
const {validationResult} = require('express-validator')

module.exports = (req, res) => {

    const products = readJSON('products.json');
    const { title, category, price, discount, description, reqRecommendedOs,
        reqMinOs, reqRecommendedProcessor, reqMinProcessor, reqRecommendedMemory, reqMinMemory,
        reqRecommendedGraphicsCard, reqMinGraphicsCard, reqRecommendedDisk, reqMinDisk } = req.body;
    const errors = validationResult(req)
    if(errors.isEmpty()){
        
       
    
        const productsModify = products.map(product => {
            if (product.id === req.params.id) {
                product.title = title.trim()
                product.category = category.trim()
                product.price = +price
                product.discount = +discount
    
                if (req.files['MainImage']) {
                    // Cambio aquí: Se verifica si hay un archivo 'MainImage' en req.files
                    const mainImageFile = req.files['MainImage'][0];
                    const imagePath = `./public/images/products/${product.MainImage}`;
    
                    if (existsSync(imagePath)) {
                        unlinkSync(imagePath);
                    }
    
                    product.MainImage = mainImageFile.filename;
                }
    
                if (req.files['images']) {
                    // Cambio aquí: Se verifica si hay archivos 'images' en req.files
                    const newImages = req.files['images'].map((file) => file.filename);
    
                    // Eliminar las imágenes antiguas
                    product.images.forEach((image) => {
                        const imagePath = `./public/images/products/${image}`;
                        if (existsSync(imagePath)) {
                            unlinkSync(imagePath);
                        }
                    });
    
                    product.images = newImages;
                }
    
                product.description = description.trim()
                product.reqRecommendedOs = reqRecommendedOs.trim()
                product.reqMinOs = reqMinOs.trim()
                product.reqRecommendedProcessor = reqRecommendedProcessor.trim()
                product.reqMinProcessor = reqMinProcessor.trim()
                product.reqRecommendedMemory = reqRecommendedMemory.trim()
                product.reqMinMemory = reqMinMemory.trim()
                product.reqRecommendedGraphicsCard = reqRecommendedGraphicsCard.trim()
                product.reqMinGraphicsCard = reqMinGraphicsCard.trim()
                product.reqRecommendedDisk = reqRecommendedDisk.trim()
                product.reqMinDisk = reqMinDisk.trim()
            }
    
            return product
        })
       
        writeJSON(productsModify, 'products.json')
        return res.redirect('/')


    }else{
        // const products = readJSON('products.json');
         const product = products.find(product => product.id === req.params.id)
         
        return res.render('productEdit',{
            
            errors: errors.mapped(),
            old: req.body,
            ...product
        })

    }

    
}