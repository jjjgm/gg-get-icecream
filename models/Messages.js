const sequelize = require('../config/connection');
const { Model , DataTypes } = require('sequelize')


class Messages extends Model {}

Messages.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        conversation: {
            type: DataTypes.STRING,
            allowNull: false,
            index: true,
        },
        profile_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            references: {
                model: 'profile',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'messages',
    });

    module.exports = Messages;