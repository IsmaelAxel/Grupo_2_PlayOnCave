'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Products.belongsTo(models.Category,{
        as : 'category',
        foreignKey : 'categoryId'
      });
      Products.hasMany(models.Images,{
        as: 'images',
        foreignKey: 'productId',
      })
    }
  }
  Products.init({
    title: DataTypes.STRING,
    price: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    recommendedOs: DataTypes.STRING,
    minOs: DataTypes.STRING,
    recommendedProcessor: DataTypes.STRING,
    minProcessor: DataTypes.STRING,
    recommendedMemory: DataTypes.STRING,
    minMemory: DataTypes.STRING,
    recommendedGraphicsCard: DataTypes.STRING,
    minGraphicsCard: DataTypes.STRING,
    recommendedDisk: DataTypes.STRING,
    minDisk: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};