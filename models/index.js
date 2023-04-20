const User = require('./User')
const Pet = require('./Pet')
const Friend = require('./Friend')
const Profile = require('./Profile')

Profile.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});


Pet.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Friend.belongsTo(Profile, {
    foreignKey: 'profile_id'
}
)

Profile.hasMany(Friend, {
    foreignKey: 'friend_id',
});





module.exports = { User, Profile, Pet, Friend }