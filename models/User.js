const sequelize = require('../config/connection');
const { Model , DataTypes } = require('sequelize')

const bcrypt = require('bcrypt');

class User extends Model {}

User.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            index: true,
            validate: {
                len: [4,12]
            }
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isAlphanumeric: true,
                min: 18
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len:[6]
            },
        },
    },
    {
    hooks: {
        beforeCreate: async (newUserData) => {
            newUserData.password = newUserData.password = await bcrypt.hash(newUserData.password, 10)
            return newUserData;
        },

        beforeUpdate: async (updatedUserData) => {
            updatedUserData.password = updatedUserData.password = await bcrypt.hash(updatedUserdata.password, 10);
            return updatedUserData;
        }
    },
    sequelize,
        timeStamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
)

module.exports = User;