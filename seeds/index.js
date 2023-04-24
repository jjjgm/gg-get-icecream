const sequelize = require('../config/connection');
const { User, Profile, Messages, Friend } = require('../models');

const userSeedData = require('./userSeedData.json');
const profileSeedData = require('./profileSeedData.json');
const friendSeedData = require('./friendSeedData.json');
const messagesSeedData = require('./messageSeedData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });


    const users = await User.bulkCreate(userSeedData, {
        individualHooks: true,
        returning: true,
    });
    const profile = await Profile.bulkCreate(profileSeedData, {
        returning: true,
    });

    const messages = await Messages.bulkCreate(messageSeedData, {
        returning: true,
    });

    for (const friend of friendSeedData) {
        const newProfile = await Friend.create({
            ...friend,
            profile_id: users[Math.floor(Math.random() * users.length)].id,
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