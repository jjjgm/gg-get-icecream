const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});

module.exports = User;