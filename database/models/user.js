'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  }
  
  User.init({
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: {
      type: DataTypes.ENUM('comprador', 'administrador'),
      allowNull: false,
      defaultValue: 'comprador'
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  
  return User;
};
