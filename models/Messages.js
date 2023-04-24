// models/messages.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

const Message = sequelize.define('Message',
{
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});
//   sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'message',
// });

module.exports = Message;
