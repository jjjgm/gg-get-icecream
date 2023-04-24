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

// // Define a Driver as having one License to create a foreign key in the `license` table
// Driver.hasOne(License, {
//   foreignKey: 'driver_id',
//   // When we delete a Driver, make sure to also delete the associated License.
//   onDelete: 'CASCADE',
// });

// // We can also define the association starting with License
// License.belongsTo(Driver, {
//   foreignKey: 'driver_id',
// });


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