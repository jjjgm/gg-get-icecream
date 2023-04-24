const sequelize = require('../config/connection');
const { User, Pet, Message } = require('../models');


const userData = require('./userSeed.json');
const messageData = require('./messageSeed.json');
const petData = require('./petSeed.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    for (const pet of petData) {
        const newPet = await Pet.create({ 
        ...pet,
        user_id: users[Math.floor(Math.random() * users.length)].id,
    });
}
const messages = await Message.bulkCreate(messageData, {
    returning: true,
});

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
    

