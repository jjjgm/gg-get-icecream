// const User = require('./users');
// const Dog = require('./dogs');
// const Messages = require('./messages');



// // KEY to link to USER
// Profile.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE',
// });

// //LINKS FRIEND TO PROFILE
// Friend.belongsTo(Profile,  {
//     foreignKey: 'profile_id',
// });

// Profile.hasMany(Friend, {
//     foreignKey: 'profile_id',
// });


// Profile.hasMany(Friend, {
//     foreignKey: 'profile_id',
// });

// // Messages.belongsToMany(Profile, {
// //     through: Friend}
// //     )


// module.exports = { User, Profile, Friend, Messages };
