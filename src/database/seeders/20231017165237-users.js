'use strict';
const usersJSON=require('../../data/users.json')


const usersDB=usersJSON.map(({firstName,lastName,email,password,rol,avatar,birthday,address,city,province})=>{
  
  return{
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

  }
})


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Users',usersDB, {});
    
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Users', null, {});
  }
};
