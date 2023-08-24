const {readJSON, writeJSON} = require('../data')
const { v4: uuidv4 } = require('uuid');
module.exports = {
    productCart: (req, res) => {
        return res.render('productCart');
    },
    productDetail: (req, res) => {
        return res.render('productDetail');
    },
    productEdit: (req, res) => {
        return res.render('productEdit');
    },
    productAdd: (req, res) => {
        return res.render('productAdd');
    },
    productCreate: (req,res) => {
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
        return res.redirect('/')
       
		
    }

}