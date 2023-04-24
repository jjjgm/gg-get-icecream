const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./users');

class Message extends Model {}

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

Message.belongsTo(User);
User.hasMany(Message);

module.exports = Message;
