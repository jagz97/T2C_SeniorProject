'use strict';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
          email: {
            type: Sequelize.STRING,
            allowNull: false
          },
          username: {
            type: Sequelize.STRING,
            allowNull: false
          },
          password: {
            type: Sequelize.STRING,
            allowNull: false
          }}
          , {
            timestamps: false,
            hooks: {
              beforeCreate: (user, options) => {
                user.password = bcrypt.hashSync(user.password, 10);
               
              }
            }
        });

        


       
        
      return Users;
    };