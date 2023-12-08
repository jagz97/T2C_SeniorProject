// models/userPreferences.js
'use strict';
module.exports = (sequelize, Sequelize) => {
    const UserPreferences = sequelize.define("userPreferences", {
        userPreferenceId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'userId'
            }
        },
        bio:{
            type: Sequelize.TEXT,
            allowNull: true,
        },
        gender: {
            type: Sequelize.STRING,
            allowNull: true
        },
        country: {
            type: Sequelize.STRING,
            allowNull: true
        },
        
        interest: {
            type: Sequelize.STRING,
            allowNull: true
        }
    }, {
        timestamps: false
    });

    return UserPreferences;
};
