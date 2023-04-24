// models/index.js
const Dog = require('./dogs');
const User = require('./users');
const Message = require('./messages');

// Define model associations
User.hasMany(Dog);

Dog.belongsTo(User);

User.hasMany(Message);

Message.belongsTo(User);

// Export models and sequelize instance
module.exports = { Dog, User, Message};
