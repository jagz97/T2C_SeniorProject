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
db.posts = require("./posts.models.js")(sequelize, Sequelize);
db.likes = require("./like.models.js")(sequelize,Sequelize);
db.comments = require("./comment.models.js")(sequelize, Sequelize);
db.experience = require("./experiences.models.js")(sequelize, Sequelize);
db.hotel = require("./hotels.models.js")(sequelize,Sequelize);
db.restaurant = require("./restaurants.models.js")(sequelize,Sequelize);
db.attraction = require("./attractions.models.js")(sequelize,Sequelize);




const Experience = db.experience;
const Hotel = db.hotel;
const Restaurant = db.restaurant;
const Attraction = db.attraction;
const Comments = db.comments;
const Likes = db.likes;
const Users = db.users;
const Profile = db.profile;
const Token = db.token;
const Post = db.posts;
const Image = db.image;


Experience.belongsTo(Users, { foreignKey: 'userId' });
Users.hasMany(Experience, {foreignKey: 'userId', as: 'experiences', });


// associations for Experience, Hotel, Restaurant, and Attraction
Experience.belongsTo(Hotel, { foreignKey: 'hotelId', as: 'hotel' });
Experience.belongsTo(Restaurant, { foreignKey: 'restaurantId', as: 'restaurant' });
Experience.belongsTo(Attraction, { foreignKey: 'attractionId', as: 'attraction' });

Hotel.hasMany(Experience, { foreignKey: 'hotelId', as: 'experiences' });
Restaurant.hasMany(Experience, { foreignKey: 'restaurantId', as: 'experiences' });
Attraction.hasMany(Experience, { foreignKey: 'attractionId', as: 'experiences' });



//post associations for user

Post.hasMany(Comments, { foreignKey: 'postId' });
Users.hasMany(Comments, { foreignKey: 'userId' });

// association to get the comments of a post
Comments.belongsTo(Post, { foreignKey: 'postId' });
Comments.belongsTo(Users, { foreignKey: 'userId' });


// Define associations
Post.hasMany(Likes, { foreignKey: 'postId' });
Users.hasMany(Likes, { foreignKey: 'userId' });

// reverse association to get the likes of a post
Likes.belongsTo(Post, { foreignKey: 'postId' });



// Define associations
Post.hasMany(Likes, { foreignKey: 'postId' });
Users.hasMany(Likes, { foreignKey: 'userId' });

// reverse association to get the likes of a post
Likes.belongsTo(Post, { foreignKey: 'postId' });



//One-to-one relation of token and user
Token.belongsTo(Users, {foreignKey: 'userId'});

Post.belongsTo(Users, { foreignKey: 'userId' });
Post.belongsTo(Image, { foreignKey: 'postPicId', as: 'postPic' });

Users.hasMany(Post, { foreignKey: 'userId' });


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