// const User = require('./users');
// const Dog = require('./dogs');
// const Messages = require('./messages');

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// // KEY to link to USER
// Profile.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE',
// });
db.User = new (require('./users'))(sequelize, Sequelize);
db.Message = new (require('./messages'))(sequelize, Sequelize);
db.Dog = new (require('./dog'))(sequelize, Sequelize);

// //LINKS FRIEND TO PROFILE
// Friend.belongsTo(Profile,  {
//     foreignKey: 'profile_id',
// });

// Profile.hasMany(Friend, {
//     foreignKey: 'profile_id',
// });
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});


// Profile.hasMany(Friend, {
//     foreignKey: 'profile_id',
// });

// // Messages.belongsToMany(Profile, {
// //     through: Friend}
// //     )


// module.exports = { User, Profile, Friend, Messages };
module.exports = db;
