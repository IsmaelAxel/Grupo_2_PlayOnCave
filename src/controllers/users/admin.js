const db = require('../../database/models');
const paginate = require('express-paginate');
const { Op } = require("sequelize");

module.exports = async (req, res) => {
    try {
        const keyword = req.query.keywords; // Cambié 'keyword' a 'keywords' para que coincida con el nombre del campo en el formulario.

        if (keyword) {
            const products = await db.Products.findAll({
                where: {
                    title: {
                        [Op.substring]: keyword
                    }
                },
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
                pages: paginate.getArrayPages(req)(1, 1, req.query.page),
                paginate,
                currentPage: req.query.page,
                result: 1
            });
        }

        // Tu código existente para la paginación y recuperación de todos los productos.
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
            message: error.message || 'Ups, ocurrió un error'
        });
    }
};
