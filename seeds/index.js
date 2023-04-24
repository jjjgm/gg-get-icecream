const sequelize = require('../config/connection');
const { User } = require('../models');
const { Pet } = require('../models/Pet');
const { Message } = require('../models/Message');

const userSeedData = require('./userSeed.json');
const messageSeedData = require('./messageSeed.json');
const petSeedData = require('./petSeed.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    process.exit(0);
};

seedDatabase();

    // const users = await User.bulkCreate(userSeedData, {
    //     individualHooks: true,
    //     returning: true,
    // });
    // const pets = await Pet.bulkCreate(petSeedData, {
    //     returning: true,
    // });
    // for (const profile of profileSeedData) {
    //     const newProfile = await Profile.create({
    //         ...profile,
    //         user_id: users[Math.floor(Math.random() * users.length)].id,
    //         // pet_id: pets[Math.floor(Math.random() * pets.length)].id,
    //     });
    // }
    // const friend = await Friend.bulkCreate(friendSeedData, {
    //     returning: true,
    // });
    

