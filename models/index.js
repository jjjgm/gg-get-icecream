const User = require('./User');
const Pet = require('./Pet');
const Message = require('./Message');

// KEY to link to USER
// Profile.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE',
// });

// Profile.belongsTo(User, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE',
// });

Pet.belongsToMany(User, {
    through: {
        model: Message,
        unique: false,
        foreignKey: 'user_id'
    },
    as: 'pet_friendship',
});

User.belongsToMany(Pet, {
    through: {
        model: Message,
        unique: false,
        foreignKey: 'user_id'
    },
    as: 'user_messages'
    
});

module.exports = { User, Pet, Message };

// User.hasOne(Pet, {
//     foreignKey: 'pet_id',
// });

// Profile.hasMany(Friend, {
//     foreignKey: 'profile_id',
// });

// Friend.belongsTo(Profile,  {
//     foreignKey: 'profile_id',
// });

// Profile.hasMany(Friend, {
//     foreignKey: 'profile_id',
// });

// User.hasMany(Friend, {
//     foreignKey: 'profile_id',
// });


