const db = require('../database/models')


const getAllCategory = async () => {
    try {
        const categories = await db.Category.findAll({
            order: [['name', 'ASC']]
        });
        return {
            categories,
            
        };
    } catch (error) {
        console.log(error);
        throw {
            status: error.status || 500,
            message: error.message || 'ERROR en servicio',
        };
    }
};


module.exports = {
  
    getAllCategory
}