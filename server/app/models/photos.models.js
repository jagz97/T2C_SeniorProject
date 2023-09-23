'use strict';
const Sequelize = require('sequelize');
const User = require('../models/users.models'); // Adjust the path accordingly

module.exports = (sequelize) => {
    const Photo = sequelize.define("photos", {
        photoId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        imageUrl: {
            type: Sequelize.STRING
        },
        location: {
            type: Sequelize.STRING
        },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references:{
                model: 'users',
                key: 'userId'
            }
        }
    });

    Photo.associate = function(models){
        Photo.belongsTo(models.User, {foreignKey: 'userId'});
        User.hasMany(Photo, {foreignKey: 'userId'});
    };

  

    return Photo;
};


