'use strict';

module.exports = (sequelize, Sequelize) => {
    const Attraction = sequelize.define("Attraction", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        location:{
            type: Sequelize.STRING,
            allowNull: false

        },
        description:{
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

    return Attraction;
};
