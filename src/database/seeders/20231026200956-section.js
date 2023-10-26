'use strict';
const sectionJSON = require('../../data/sections.json')
const sectionDB = sectionJSON.map(({name, image})=> {
    return {
      name,
      image,
      createdAt: new Date(),
      updatedAt: new Date()
    }
})
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert(
        "sections",
        sectionDB,
        {}
      )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sections', null, {});
  }
};
