const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.users = require("./users.models.js")(sequelize, Sequelize);
db.profile = require("./profile.models.js")(sequelize, Sequelize);
db.image = require("./image.models.js")(sequelize, Sequelize);
db.token = require("./token.models.js")(sequelize, Sequelize);

const Users = db.users;
const Profile = db.profile;
const Token = db.token;

//One-to-one relation of token and user
Token.belongsTo(Users, {foreignKey: 'userId'});


// Define associations for bioPic and ProfilePicture.
Profile.belongsTo(sequelize.models.Image, { foreignKey: 'bioPicId', as: 'bioPic' });
Profile.belongsTo(sequelize.models.Image, { foreignKey: 'profilePictureId', as: 'profilePicture' });


Users.associate = (models) => {
  Users.hasOne(models.Profile, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
  });
};

Profile.associate = (models) => {
  Profile.belongsTo(models.Users, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
  });
};


module.exports = db;