'use strict';
const productsJSON = require('../../data/products.json');
const db = require('../models')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Promise.all(productsJSON.map(async ({ title, category, price, discount, description, reqRecommendedOs, reqMinOs, reqRecommendedProcessor, reqMinProcessor, reqRecommendedMemory, reqMinMemory, reqRecommendedGraphicsCard, reqMinGraphicsCard, reqRecommendedDisk, reqMinDisk, MainImage, images }) => {
      const product = await db.Products.create({
        title,
        price,
        discount,
        description,
        recommendedOs: reqRecommendedOs,
        minOs: reqMinOs,
        recommendedProcessor: reqRecommendedProcessor,
        minProcessor: reqMinProcessor,
        recommendedMemory: reqRecommendedMemory,
        minMemory: reqMinMemory,
        recommendedGraphicsCard: reqRecommendedGraphicsCard,
        minGraphicsCard: reqMinGraphicsCard,
        recommendedDisk: reqRecommendedDisk,
        minDisk: reqMinDisk,
        categoryId: category === "featured" ? 1 : (category === "new releases" ? 2 : 3),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      const imagesSeeders = [
        {
          file: MainImage,
          main: true, 
          productId: product.id,
        },
        ...images.map((image) => ({
          file: image,
          main: false,
          productId: product.id,
        })),
      ];
      await db.Images.bulkCreate(imagesSeeders);
      return product;
    }));
  },

  async down(queryInterface, Sequelize) {
    await Products.destroy({
      where: {},
      cascade: true, 
    });
    console.log('Productos e imagenes eliminadas correctamente');
  },
};
