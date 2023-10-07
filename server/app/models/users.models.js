'use strict';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
        userId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        timestamps: false,
        hooks: {
            beforeCreate: (user, options) => {
                user.password = bcrypt.hashSync(user.password, 10);
            }
        }
    });

    return Users;
};
