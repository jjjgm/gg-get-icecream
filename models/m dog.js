// models/dogs.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Dog = sequelize.define('Dog', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  breed: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Dog;
