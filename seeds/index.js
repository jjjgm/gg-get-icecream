const sequelize = require('../config/connection');

const { Users } = require('../models/user');
const { Dog } = require('../models/dogs.js');
const { Messages } = require('../models/messages.js');

// const userSeedData = require('./Users.json');
const userSeedData = require('./Users.json');
const dogSeedData = require('./Dogs.json');
const messageSeedData = require('./Messages.json');

// const messagesSeedData = require('./Messages.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });


    // const dogs = await Dog.bulkCreate(dogSeedData, {
    //     returning: true,
    // });

    // for (const dog of dogSeedData) {
    //     await Dog.create({
    //         ...dog,
    //           user: users[Math.floor(Math.random() * users.length)].id,
    //     });
    // }

    // const dog = await Dog.bulkCreate(dogSeedData, {
    //     returning: true,
    // });

    // const messages = await Messages.bulkCreate(messagesSeedData, {
    //     returning: true,
    // });





    // for (const friend of friendSeedData) {
    //     const newProfile = await Messages.create({
    //         ...friend,
    // profile_id: users[Math.floor(Math.random() * users.length)].id,
    //         // pet_id: pets[Math.floor(Math.random() * pets.length)].id,
    //     });
    // }



    // for (const friend of petSeedData) {
    //     const newFriend = await Friend.create({
    //         ...profiles,
    //         profile_id: friend[Math.floor(Math.random() * friend.length)].id,
    //     });
    // }

    process.exit(0);
};

seedDatabase();