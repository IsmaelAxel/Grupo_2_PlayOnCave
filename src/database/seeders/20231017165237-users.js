'use strict';
const usersJSON=require('../../data/users.json')
const db = require('../models')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await Promise.all(usersJSON.map(async ({id,firstName,lastName,email,password,rol,avatar,birthday,address,city,province})=>{

        const users = await db.Users.create ({
          id,
          name:firstName,
          surname:lastName,
          email,
          password,
          birthday:null,
          avatar,
          roleId:rol==='admin'?1:2,
          favorite_product_id:null,
          createdAt:new Date(),
          updatedAt:new Date()
      
        })
      const AddressesSeeders = [
        {
          address: address,
          city, 
          province,
          userId: users.id
        }
      ];
      await db.Addresses.bulkCreate(AddressesSeeders);
      return users
    }))
  },

  async down (queryInterface, Sequelize) {
    await Users.destroy({
      where: {},
      cascade: true, 
    });
    console.log('Usuarios y direcciones eliminadas correctamente');
  }
};
