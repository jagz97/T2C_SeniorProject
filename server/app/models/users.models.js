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
        
        photoId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'photos', 
                key: 'photoId' 
            }
        },
        firstName: {
            type: Sequelize.STRING,
            allowNull: true
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: true
        },
        age: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        gender: {
            type: Sequelize.STRING,
            allowNull: true
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
        },
        bioPic: {
            type: Sequelize.STRING,
            allowNull: true
        },
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
