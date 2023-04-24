// const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

const User = require('./users');
const Message = require('./messages');
const Dog = require('./dog');

Dog.belongsToMany(User, {
  through: {
    model: Message,
    unique: false,
  foreignKey: 'user_id'
  }
});

User.belongsToMany(Dog, {
  through: {
    model: Message,
    unique: false,
    foreignKey: 'user_id'
  }
});


// Message.belongsToMany(User, {
//   foreignKey: 'user_id'
// });

// User.belongsToMany(Dog, {
//   through: {
//     model: Message,
//     unique: false,
//     foreignKey: 'user_id'
//   }
// });


module.exports = { User, Message, Dog };