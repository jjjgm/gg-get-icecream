const sequelize = require('../config/connection.js');
const { User, Message, Dog } = require('../models');

const userData = require('./userSeedData.json');
const messageData = require('./messageSeedData.json');
const dogData = require('./dogSeedData.json');
// const friendSeedData = require('./friendSeedData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });


    const users = await User.bulkCreate(userData, {
        // individualHooks: true,
        returning: true,
    });

    const dogs = await Dog.bulkCreate(dogData, {
        returning: true,
    });

    const messages = await Message.bulkCreate(messageData, {
        returning: true,
    });



    process.exit(0);
};

seedDatabase();