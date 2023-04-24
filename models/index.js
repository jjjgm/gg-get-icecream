const User = require('./User');
const Profile = require('./Profile');
const Messages = require('./Messages');
const Friend = require('./Friend');


// KEY to link to USER
Profile.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

//LINKS FRIEND TO PROFILE
Friend.belongsTo(Profile,  {
    foreignKey: 'profile_id',
});

Profile.hasMany(Friend, {
    foreignKey: 'profile_id',
});


Profile.hasMany(Friend, {
    foreignKey: 'profile_id',
});

// Messages.belongsToMany(Profile, {
//     through: Friend}
//     )


module.exports = { User, Profile, Friend, Messages };
