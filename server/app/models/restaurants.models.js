'use strict';

module.exports = (sequelize, Sequelize) => {
    const Restaurant = sequelize.define("Restaurant", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        location:{
            type: Sequelize.STRING,
            allowNull: false

        },
        cuisine:{
            type: Sequelize.STRING,
            allowNull: false
        },
        rating: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        comment: {
            type: Sequelize.TEXT,
            allowNull: true
        }

        
    });


    return Restaurant;
};
