const sequelize = require('../config/connection');
const { Model , DataTypes } = require('sequelize');
const User = require('./User');


class Message extends Model { }

Message.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: 'User',
                key: 'id'
            }
        },
        pet_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: 'Pet',
                key: 'id'
            }
        }
        },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'message',
        }
);

module.exports = Message