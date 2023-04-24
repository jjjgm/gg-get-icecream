const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Dog extends Model {}

Dog.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    breed: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'Dog'
  }
);

module.exports = Dog;
