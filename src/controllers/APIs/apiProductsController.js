const {getAllProducts, getProductId} = require('../../services/products.services')
const createError = require('http-errors')
module.exports = {
    allProducts: async (req,res) => {
        try {
            const {products} = await getAllProducts()
            return res.status(200).json({
                ok: true,
                data: products.map(product=> {
                    return {
                            ...product.dataValues,
                            url : `${req.protocol}://${req.get('host')}/products/productDetail/${product.id}`
                    }
                })
            })
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok: false,
                status: error.status || 500,
                error: error.message || 'ERROR EN EL SERVICIO'
            })
        }
    },
    idProducts: async(req,res) => {
        try{
            const product = await getProductId(req.params.id)
            const productWithImages = {
                ...product.dataValues,
                images: product.images.map(image => `${req.protocol}://${req.get('host')}/images/products/${image.file}`)
            }
            return res.status(200).json({
                ok: true,
                data: productWithImages
            })
        }catch(error){
            console.log(error)
            return res.status(error.status || 500).json({
                ok: false,
                status: error.status || 500,
                error: error.message || 'ERROR EN EL SERVICIO'
            })
        }
    }
}