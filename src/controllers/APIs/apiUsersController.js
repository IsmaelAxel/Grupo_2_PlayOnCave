const { getAllUsers, getUserId } = require('../../services/users.services')
const db = require('../../database/models')
module.exports = {
    allUsers: async (req,res) => {
        try{
            const {users, count} = await getAllUsers()
            return res.status(200).json({
                ok: true,
                totalUsers: count,
                users: users.map(user => {
                    return {
                        ...user.dataValues,
                        detail: `${req.protocol}://${req.get('host')}/api/users/${user.id}`
                    }
                })
                
            })
        }catch(error){
            console.log(error)
            return res.status(error.status || 500).json({
                ok: false,
                status: error.status || 500,
                error: error.message || 'ERROR EN EL SERVICIO'
            })
        }
    },
    idUser: async(req,res) => {
        try {
            const user = await getUserId(req.params.id)
            return res.status(200).json({
                ok: true,
                data: {
                    ...user.dataValues,
                    avatar: `${req.protocol}://${req.get('host')}/images/users/${user.avatar}`
                }
                
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
    checkEmail : async (req,res) => {
        const email = req.query.email;
        try {
            const user = await db.Users.findOne({
                where : {
                    email
                }
            })
            return res.status(200).json({
                ok : true,
                data : user ? true : false
            })
        } catch (error) {
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || "Upss, hubo un error"
            })
        }
    
    }
}