const db = require('../database/models')
const getAllProducts = async () => {
    try {
        const products = await db.Products.findAll({
            attributes: {
                exclude: ['created_at', 'updated_at', 'categoryId']
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
                    association: 'images',
                    attributes: ['id','file']
                }
        

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
                exclude: ['created_at', 'updated_at', 'categoryId']
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
                message: 'No hay pelicula con ese id'
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
module.exports = {
    getAllProducts,
    getProductId
}