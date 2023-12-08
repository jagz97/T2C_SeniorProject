'use strict';

module.exports = (sequelize, Sequelize) => {
    const TravelPreferences = sequelize.define("travelPreferences", {
        preferenceId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        preferredDestination: {
            type: Sequelize.STRING,
            allowNull: true
        },
        travelFrequency: {
            type: Sequelize.ENUM('Rarely', 'Occasionally', 'Frequently'),
            allowNull: true
        },
        travelBudget: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        
        // Add more fields as needed
    }, {
        timestamps: false
    });

    return TravelPreferences;
};
