const db = require('../database/models')
const { Op } = require("sequelize")
const getAllProducts = async (limit, offset, keyword) => {

    const options = keyword ? {
        where: {
            title: {
                [Op.substring]: keyword
            }
        }
    } : null;
    try {
        const products = await db.Products.findAll({
            limit,
            offset,
            attributes: {
                exclude: ['price', 'discount', 'recommendedOs', 'minOs', 'minProcessor', 'minMemory', 'recommendedGraphicsCard', 'recommendedMemory', 'minGraphicsCard', 'recommendedProcessor', 'recommendedDisk', 'minDisk', 'createdAt', 'updatedAt', 'categoryId']
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
                        attributes: []
                    }
                },
            ],
            ...options
        });
        const count = await db.Products.count({
            ...options
        })
        console.log('<<<<<<<<<', count);
        const countSections = await db.Section.count()
        return {
            products,
            count,
            countSections

        }
    } catch (error) {
        console.log(error)
        throw {
            status: 500,
            message: error.message
        }
    }
}
const getProductId = async (id) => {
    try {
        if (!id) {
            throw {
                status: 400,
                message: 'ID inexistente'
            }
        }
        const product = await db.Products.findByPk(id, {
            attributes: {
                exclude: ['recommendedOs', 'minOs', 'minProcessor', 'minMemory', 'recommendedGraphicsCard', 'recommendedMemory', 'minGraphicsCard', 'recommendedProcessor', 'recommendedDisk', 'minDisk', 'createdAt', 'updatedAt','categoryId']
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
                        attributes: []
                    }
                },
                {
                    association: 'images'
                }
            ]
        })
        if (!product) {
            throw {
                status: 400,
                message: 'No hay producto con ese id'
            }
        }
        return product
    } catch (error) {
        console.log(error)
        throw {
            status: error.status || 500,
            message: error.message
        }
    }
}

const storeProduct = async (dataProducts, category) => {
    try {
        const newProducts = await db.Products.create(dataProducts);
        if (category) {
            const categoryDB = category.map((category) => {
                return {
                    productsId: newProducts.id,
                    categoryId: category,
                };
            });
            await db.Category.bulkCreate(categoryDB, {
                validate: true,
            });
        }
        return await getProductId(newProducts.id);
    } catch (error) {
        console.log(error);
        throw {
            status: error.status || 500,
            message: error.message || "ERROR en servicio",
        };
    }
};

const updateProduct = async (id, dataProduct) => {
    try {
        const { title, price, discount, category } = dataProduct;
        console.log("Product ID:", id);
        console.log("Data received:", dataProduct);

        const product = await db.Products.findByPk(id, {
            attributes: {
                exclude: ['recommendedOs', 'minOs', 'minProcessor', 'minMemory', 'recommendedGraphicsCard', 'recommendedMemory', 'minGraphicsCard', 'recommendedProcessor', 'recommendedDisk', 'minDisk', 'createdAt', 'updatedAt','categoryId']
            },
            include: [
                {
                    association: "category",
                    attributes: ["name"],
                },
            ],
        });

        if (!product) {
            throw {
                status: 400,
                message: "No hay una película con ese ID",
            };
        }
        product.title = title?.trim() || product.title;
        product.price = price || product.price;
        product.discount = discount || product.discount;
        product.category = category || product.category;
        await product.save();

        await product.reload();
        console.log("Product updated successfully:", product);
        return product;
    } catch (error) {
        console.log(error);
        throw {
            status: error.status || 500,
            message: error.message || "upss, error",
        };
    }
};

const deleteProduct = async (id) => {
    try {
        if (isNaN(id)) {
            throw {
                status: 404,
                message: "Id corrupto",
            };
        }
        const Product = await db.Products.findByPk(id);
        if (!Product) {
            throw {
                status: 404,
                message: "No hay una peliculas con ese Id",
            };
        }
        await db.Products.destroy({
            where: {
                productId: id,
            },
        });

        await Product.destroy();
        return null;
    } catch (error) {
        console.log(error);
        throw {
            status: error.status || 500,
            message: error.message || "upss, error",
        };
    }
};


module.exports = {
    getAllProducts,
    getProductId,
    storeProduct,
    updateProduct,
    deleteProduct,
}