'use strict';

module.exports = (sequelize, Sequelize) => {
    const Profile = sequelize.define("Profile", {
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
        bio: {
            type: Sequelize.TEXT,
            allowNull: true
        },
        gender: {
            type: Sequelize.STRING,
            allowNull: true
        },
        userId: {
            type: Sequelize.INTEGER, 
            allowNull: false, 
            references: {
                model: 'users', 
                key: 'userId', 
            },
        },
        // Add bioPic and ProfilePicture fields with associations to the Image model.
        bioPicId: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: 'Images',
                key: 'id', //Image model has a primary key named 'id'.
            },
        },
        profilePictureId: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: 'Images',
                key: 'id', //Image model has a primary key named 'id'.
            },
        },
    });



    return Profile;
};
