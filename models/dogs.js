// models/dogs.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

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
  // sequelize,
  //   timestamps: false,
  //   freezeTableName: true,
  //   underscored: true,
  //   modelName: 'dog',
});

module.exports = Dog;
