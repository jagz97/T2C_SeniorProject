'use strict';

module.exports = (sequelize, Sequelize) => {
    const Reservations = sequelize.define("Reservations", {
        reservationId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        hotelName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        },
        checkInDate: {
            type: Sequelize.DATE,
            allowNull: false
        },
        duration: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        guests: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        price: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        imageUrl:{
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
        }    
    });



    return Reservations ;
};