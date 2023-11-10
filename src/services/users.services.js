const db = require('../database/models')
const getAllUsers = async () => {
    try {
        const users = await db.Users.findAll({
            attributes:{
                exclude:['surname','password','birthday','avatar','roleId','favorite_product_id','createdAt','updatedAt']
            }
        })
        const count = await db.Users.count()
        return {
            users,
            count
        }
    } catch (error) {
        console.log(error)
        return res.status(error.status || 500).json({
            ok: false,
            status: error.status || 500,
            error: error.message || 'ERROR EN EL SERVICIO'
        })
    }
}
const getUserId = async (id) => {
    try {
        if(!id){
            throw{
                status: 400,
                message: 'ID inexistente'
            }
        }
        const user = await db.Users.findByPk(id,{
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'password','roleId','favorite_product_id']
            },
        })
        if(!user){
            throw{
                status: 400,
                message: 'No hay usuario con ese id'
            }
        }
        return user
    } catch (error) {
        console.log(error)
        return res.status(error.status || 500).json({
            ok: false,
            status: error.status || 500,
            error: error.message || 'ERROR EN EL SERVICIO'
        })
    }
}
module.exports = {
    getAllUsers,
    getUserId
}