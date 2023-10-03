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
        gender: {
            type: Sequelize.STRING,
            allowNull: true
        },
        proifilePicture:{
            type: Sequelize.BLOB('long'),
            allowNull: true

        },
        bioPic: {
            type: Sequelize.BLOB('long'),
            allowNull: true
        },

    });
        return Profile;

};