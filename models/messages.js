// models/messages.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Messages extends Model {}

Messages.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dogId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'dog',
      id: 'id'
    }
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'user',
      id: 'id'
    }
  }
},
{
  sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'messages',
});

module.exports = Messages;
