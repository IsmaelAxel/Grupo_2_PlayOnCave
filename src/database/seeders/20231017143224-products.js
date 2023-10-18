'use strict';
const productsJSON= require('../../data/products.json');

const productsDB=productsJSON.map(({title,category,price,discount,description,reqRecommendedOs,reqMinOs,reqRecommendedProcessor,reqMinProcessor,
  reqRecommendedMemory,reqMinMemory,reqRecommendedGraphicsCard,reqMinGraphicsCard,reqRecommendedDisk,reqMinDisk})=>{
  return{
  title,
  price,
  discount,
  description,
  recommendedOs:reqRecommendedOs,
  minOs:reqMinOs,
  recommendedProcessor:reqRecommendedProcessor,
  minProcessor:reqMinProcessor,
  recommendedMemory:reqRecommendedMemory,
  minMemory:reqMinMemory,
  recommendedGraphicsCard:reqRecommendedGraphicsCard,
  minGraphicsCard:reqMinGraphicsCard,
  recommendedDisk:reqRecommendedDisk,
  minDisk:reqMinDisk,
  categoryId:category==="featured"?1:(category==="new releases"?2:3),
  createdAt:new Date(),
  updatedAt:new Date()
} 
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Products', 
    productsDB, {}); 
    
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Categories', null, {});
    
  }
};
