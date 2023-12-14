const {getAllProducts, getProductId} = require('../../services/products.services')
const paginate = require('express-paginate')
const createError = require('http-errors')
module.exports = {
    allProducts: async (req,res) => {
        const {keyword} = req.query
        try {
            const { products, count, countSections } = await getAllProducts(req.query.limit, req.skip,keyword);
            const pagesCount = Math.ceil(count / req.query.limit)
            const currentPage = req.query.page
            const pages = paginate.getArrayPages(req)(pagesCount, pagesCount, currentPage)
           

            return res.status(200).json({
                
            ok: true,
            meta: {
                pagesCount,
                currentPage,  
                pages
            }, 
            totalProducts: count,
            totalSections: countSections,
            products: products.map(product => {
                return {
                ...product.dataValues,
                section: product.section.map(section => section.name), 
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