const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// const User = require('./users');
// const Dog = require('./dog');

class Message extends Model { }

Message.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'message',
  }
);

module.exports = Message;
