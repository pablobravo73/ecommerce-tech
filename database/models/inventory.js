'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inventory extends Model {
    static associate(models) {
      // Definir las relaciones con otros modelos si es necesario
      Inventory.belongsTo(models.User, { foreignKey: 'userId' }); // Relación de muchos a uno con el modelo User
    }
  };
  Inventory.init({
    productName: DataTypes.STRING,
    sku: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    image: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Inventory',
  });
  return Inventory;
};
