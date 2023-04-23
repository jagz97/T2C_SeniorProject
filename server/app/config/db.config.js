module.exports = {
    HOST: "t2c-testdb.mysql.database.azure.com",
    USER: "jagz97",
    PASSWORD: "Singhj97!",
    DB: "testdb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };