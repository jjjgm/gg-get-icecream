const sequelize = require('../config/connection');
const { User, Dog, Messages } = require('../models');

const userSeedData = require('./Users.json');
const dogSeedData = require('./Dogs.json');
const messagesSeedData = require('./Messages.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });


    const users = await User.bulkCreate(userSeedData, {
        individualHooks: true,
        returning: true,
    });
    const dog = await Dog.bulkCreate(dogSeedData, {
        returning: true,
    });

    const messages = await Messages.bulkCreate(messagesSeedData, {
        returning: true,
    });

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