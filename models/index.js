const User = require('./users');
const Message = require('./messages');
const Dog = require('./dog');

User.hasMany(Message, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Message.belongsTo(User, {
  foreignKey: 'user_id'
});
User.hasMany(Dog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Dog.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Message, Dog };