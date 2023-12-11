const {getAllProducts, getProductId} = require('../../services/products.services')
const createError = require('http-errors')
module.exports = {
    allProducts: async (req,res) => {
        try {
            const { products, count } = await getAllProducts();
            return res.status(200).json({
            ok: true,
            totalProducts: count,
            products: products.map(product => {
                return {
                ...product.dataValues,
                section: product.section.map(section => section.name), // Aquí se obtiene solo los nombres de las secciones
                detail: `${req.protocol}://${req.get('host')}/api/products/${product.id}`,
                };
            }),
        });
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
            const productWithRelations = {
                ...product.dataValues,
                section: product.section.map(section => section.name),
                images: product.images.map(image => `${req.protocol}://${req.get('host')}/images/products/${image.file}`)
            }
            return res.status(200).json({
                ok: true,
                data: productWithRelations
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