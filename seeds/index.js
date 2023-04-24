const sequelize = require('../config/connection');
const { Users, Dog, Messages } = require('../models');

const userSeedData = require('./mUsers.json');
const dogSeedData = require('./mDog.json');
const messagesSeedData = require('./mMessages.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });


    const users = await Users.bulkCreate(userSeedData, {
        individualHooks: true,
        returning: true,
    });
    const dog = await Dog.bulkCreate(dogSeedData, {
        returning: true,
    });

    const messages = await Messages.bulkCreate(messagesSeedData, {
        returning: true,
    });

    for (const friend of friendSeedData) {
        const newProfile = await Messages.create({
            ...friend,
            // profile_id: users[Math.floor(Math.random() * users.length)].id,
            // pet_id: pets[Math.floor(Math.random() * pets.length)].id,
        });
    }



    // for (const friend of petSeedData) {
    //     const newFriend = await Friend.create({
    //         ...profiles,
    //         profile_id: friend[Math.floor(Math.random() * friend.length)].id,
    //     });
    // }

    process.exit(0);
};

seedDatabase();