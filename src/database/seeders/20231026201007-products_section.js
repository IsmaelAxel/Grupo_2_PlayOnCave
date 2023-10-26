'use strict';
const products_sectionJSON = require('../../data/products_section.json')
const products_sectionDB = products_sectionJSON.map(({productsId, sectionId}) => {
  return { 
    productsId,
    sectionId,
    createdAt: new Date(),
    updatedAt: new Date()
  }
})
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert(
      'products_sections',
      products_sectionDB,
      {}
      )
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products_sections', null, {});
  }
};
