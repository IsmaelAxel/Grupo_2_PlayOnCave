const db = require('../database/models')
const getAllProducts = async () => {
    try {
        const products = await db.Products.findAll({
            attributes: {
                exclude: [ 'price', 'discount', 'recommendedOs', 'minOs','minProcessor', 'minMemory','recommendedGraphicsCard','recommendedMemory','minGraphicsCard','recommendedProcessor','recommendedDisk','minDisk','createdAt','updatedAt', 'categoryId']
            },
            include: [
                {
                    association: 'category',
                    attributes: ['name']
                },
                {
                    association: 'section',
                    attributes: ['name'],
                    through: {
                        attributes : []
                    }
                },
            ]
        });
        const count = await db.Products.count()
        return {
            products,
            count
        }
    } catch (error) {
        console.log(error)
        throw {
            status: 500,
            message: error.message
        }
    }
}
const getProductId = async(id) => {
    try{
        if(!id){
            throw{
                status: 400,
                message: 'ID inexistente'
            }
        }
        const product = await db.Products.findByPk(id,{
            attributes: {
                exclude: ['createdAt', 'createdAt', 'categoryId']
            },
            include: [
                {
                    association: 'category',
                    attributes: ['name']
                },
                {
                    association: 'section',
                    attributes: ['name'],
                    through: {
                        attributes : []
                    }
                },
                {
                    association: 'images'
                }
            ]
        })
        if(!product){
            throw{
                status: 400,
                message: 'No hay producto con ese id'
            }
        }
        return product
    }catch(error){
        console.log(error)
        throw {
            status: error.status || 500,
            message: error.message
        }
    }
}

const totalProductInDb = async (req,res)  => {
    try {
        const  total = await db.Products.count()
        return res.status(200).json({
            ok:true, 
            data : total
        })
    } catch (error) {
        return res.status(error.status || 500 ).json({
            ok: false,
            msg: error.message || 'upss error'
        })
    }
}


module.exports = {
    getAllProducts,
    getProductId,
    totalProductInDb
}