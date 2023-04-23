const sequelize = require('../config/connection');
const { User, Profile, Pet, Friend } = require('../models');

const userSeedData = require('./userSeedData.json');
const profileSeedData = require('./profileSeedData.json');
const petSeedData = require('./petSeedData.json');
const friendSeedData = require('./friendSeedData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    

    const users = await User.bulkCreate(userSeedData, {
        individualHooks: true,
        returning: true,
    });
    const pets = await Pet.bulkCreate(petSeedData, {
        returning: true,
    });
    for (const profile of profileSeedData) {
        const newProfile = await Profile.create({
            ...profile,
            user_id: users[Math.floor(Math.random() * users.length)].id,
            // pet_id: pets[Math.floor(Math.random() * pets.length)].id,
        });
    }
    const friend = await Friend.bulkCreate(friendSeedData, {
        returning: true,
    });
    

    // for (const friend of petSeedData) {
    //     const newFriend = await Friend.create({
    //         ...profiles,
    //         profile_id: friend[Math.floor(Math.random() * friend.length)].id,
    //     });
    // }

    process.exit(0);
};

seedDatabase();