const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
// const User = require('./users');
// const Dog = require('./dog');

const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

Message.init(
  {
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
    modelName: 'dog',
  }
);

Message.belongsTo(User);
User.hasMany(Message);

module.exports = Message;
