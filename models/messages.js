const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
class Message extends Model{};
/* const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js'); */

Message.init(
  {
    text: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'Message'
  }
);

module.exports = Message;
