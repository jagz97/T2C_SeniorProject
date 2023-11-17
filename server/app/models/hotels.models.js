'use strict';

module.exports = (sequelize, Sequelize) => {
    const Hotel = sequelize.define("Hotel", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        location:{
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


        // Add other fields for hotel details (e.g., location, star rating, etc.)
    });

    return Hotel;
};
