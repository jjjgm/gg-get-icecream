const User = require('./User');
const Pet = require('./Pet');
const Friend = require('./Message');
const Profile = require('./Profile');

// KEY to link to USER
Profile.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Profile.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Pet.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Profile.hasOne(Pet,{
    foreignKey: 'pet_id',
}
    )

Friend.belongsTo(Profile,  {
    foreignKey: 'profile_id',
});

Profile.hasMany(Friend, {
    foreignKey: 'profile_id',
});

// User.hasMany(Friend, {
//     foreignKey: 'profile_id',
// });

module.exports = { User, Profile, Pet, Friend };
