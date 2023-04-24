// models/index.js

const { Sequelize } = require('sequelize');

// Load database configuration from environment variables
const {
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_DIALECT,
} = process.env;

// Create a new Sequelize instance with the database configuration
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
});

// // Load models
const Dog = require('./dogs');
const User = require('./users');
const Message = require('./messages');

// Define model associations
User.hasMany(Dog);
Dog.belongsTo(User);
User.hasMany(Message);
Message.belongsTo(User);

// Export models and sequelize instance
module.exports = { Dog, User, Message, sequelize };
