'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Section extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Section.belongsToMany(models.Products,{
        as: 'products',
        through: 'products_sections',
        foreignKey: 'sectionId',
        otherKey: 'productsId'
    })
    }
  }
  Section.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Section',
  });
  return Section;
};