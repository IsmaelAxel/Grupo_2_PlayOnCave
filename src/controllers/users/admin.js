const db = require('../../database/models');
const paginate = require('express-paginate');

module.exports = async (req, res) => {
    try {
        const count = await db.Products.count();

        const pagesCount = Math.ceil(count / req.query.limit);

        const products = await db.Products.findAll({
            include: ['category', 'images'],
            limit: req.query.limit,
            offset: req.skip
        });

        const categories = await db.Category.findAll();
        const users = await db.Users.findAll();

        return res.render('admin', {
            products,
            categories,
            users,
            pages: paginate.getArrayPages(req)(pagesCount, pagesCount, req.query.page),
            pagesCount,
            currentPage: req.query.page
        });
       
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            ok: false,
            status: error.status || 500,
            message: error.message || 'upss, error'
        })
    }
};
