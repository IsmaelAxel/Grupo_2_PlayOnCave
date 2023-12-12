'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false,

      },
      surname: {
        type: Sequelize.STRING,
        allowNull:false,

      },
      email: {
        type: Sequelize.STRING,
        allowNull:false,

      },
      password: {
        type: Sequelize.STRING,
        

      },
      birthday: {
        type: Sequelize.DATE,
        
      },
      avatar:{
        type:Sequelize.STRING,
      },
      socialId:{
        type:Sequelize.STRING,
      },
      socialProvider:{
        type:Sequelize.STRING,
      },
      roleId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:{
            tableName:'Roles'
          }
        }
      },
      favorite_product_id: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:'Products'
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
    await queryInterface.dropTable('Users');
  }
};