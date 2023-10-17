'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      discount: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
      recommendedOs: {
        type: Sequelize.STRING
      },
      minOs: {
        type: Sequelize.STRING
      },
      recommendedProcessor: {
        type: Sequelize.STRING
      },
      minProcessor: {
        type: Sequelize.STRING
      },
      recommendedMemory: {
        type: Sequelize.STRING
      },
      minMemory: {
        type: Sequelize.STRING
      },
      recommendedGraphicsCard: {
        type: Sequelize.STRING
      },
      minGraphicsCard: {
        type: Sequelize.STRING
      },
      recommendedDisk: {
        type: Sequelize.STRING
      },
      minDisk: {
        type: Sequelize.STRING
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:'Categories'
          }
        }
        
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};