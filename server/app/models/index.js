const dbConfig = require("../config/db.config.js");
const fs = require("fs");

const Sequelize = require("sequelize");
const sequelize = new Sequelize({dialect: 'mysql',
host: 't2c-testdb.mysql.database.azure.com',
port: 3306,
username: 'jagz97',
password: 'Singhj97!',
database: 'testdb',
dialectOptions: {
  ssl: {
    ca: require('fs').readFileSync('/Users/jagjitsingh/Downloads/Senior_project/T2C_SeniorProject/server/DigiCertGlobalRootCA.crt (1).pem')
  }
},
pool: {
  max: 5,
  min: 0,
  acquire: 30000,
  idle: 10000
}


  
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.users = require("./users.models.js")(sequelize, Sequelize);

module.exports = db;