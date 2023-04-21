const User = require('./User');
const Pet = require('./Pet');
const Friend = require('./Friend');
const Profile = require('./Profile');

User.hasMany(Friend, {
  foreignKey: 'user_id',
});

Profile.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Pet.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Profile.hasMany(Pet, {
  foreignKey: 'profile_id'
});

Profile.hasMany(Friend, {
  foreignKey: 'profile_id',
});

Friend.belongsTo(Profile, {
  through: 'displayName', 
  foreignKey: 'profile_id',
});

module.exports = { User, Profile, Pet, Friend };
