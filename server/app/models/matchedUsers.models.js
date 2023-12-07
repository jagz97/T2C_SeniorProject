// models/matchedUsers.js
'use strict';
module.exports = (sequelize, Sequelize) => {
    const MatchedUsers = sequelize.define("matchedUsers", {
        matchedUserId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user1Id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'userId'
            }
        },
        user2Id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'userId'
            }
        },
        // Add additional fields as needed
        matchDate: {
            type: Sequelize.DATE,
            allowNull: false
        }
    }, {
        timestamps: false
    });

    return MatchedUsers;
};
