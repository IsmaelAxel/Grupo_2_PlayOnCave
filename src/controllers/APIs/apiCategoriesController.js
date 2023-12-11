
const { getAllCategory } = require('../../services/categories.services');
const db = require('../../database/models')
module.exports = {
    allCategories: async (req, res) => {
        try {
            const { categories } = await getAllCategory()
            return res.status(200).json({
                ok: true,
                meta: {
                    total: categories.length
                },
                data: categories
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                status: error.status || 500,
                message: error.message || 'upss, error'
            })
        }
    }
}