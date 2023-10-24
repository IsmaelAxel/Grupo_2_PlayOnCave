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
        type: Sequelize.STRING,
        allowNull:false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull:false

      },
      discount: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT,
        allowNull:false

      },
      recommendedOs: {
        type: Sequelize.STRING,
        allowNull:false

      },
      minOs: {
        type: Sequelize.STRING,
        allowNull:false

      },
      recommendedProcessor: {
        type: Sequelize.STRING,
        allowNull:false

      },
      minProcessor: {
        type: Sequelize.STRING,
        allowNull:false

      },
      recommendedMemory: {
        type: Sequelize.STRING,
        allowNull:false

      },
      minMemory: {
        type: Sequelize.STRING,
        allowNull:false

      },
      recommendedGraphicsCard: {
        type: Sequelize.STRING,
        allowNull:false

      },
      minGraphicsCard: {
        type: Sequelize.STRING,
        allowNull:false

      },
      recommendedDisk: {
        type: Sequelize.STRING,
        allowNull:false

      },
      minDisk: {
        type: Sequelize.STRING,
        allowNull:false

      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull:false,
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