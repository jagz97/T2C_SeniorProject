'use strict';

module.exports = (sequelize, Sequelize) => {
    const Experience = sequelize.define("Experience", {
        description: {
            type: Sequelize.TEXT,
            allowNull: true
        },
        city_country: {
            type: Sequelize.STRING,
            allowNull: false
        },
        starRating: {
            type: Sequelize.DECIMAL(2,1), 
            allowNull: false,
            validate: {min: 0, max:5}
        },
        
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'users', 
                key: 'userId',
            }
        }
        ,
        hotelId: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: 'Hotels', 
                key: 'id', 
            }
        },
        restaurantId: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: 'Restaurants', 
                key: 'id', 
            }
        },
        attractionId: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: 'Attractions', 
                key: 'id', 
            }
        }
    });

    return Experience;
};
