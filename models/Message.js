const sequelize = require('../config/connection');
const { Model , DataTypes } = require('sequelize');


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