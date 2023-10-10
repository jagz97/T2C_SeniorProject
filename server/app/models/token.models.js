'use strict';

module.exports = (sequelize, Sequelize) => {
    const Token = sequelize.define("token", {
        userId: {
          type: Sequelize.INTEGER, 
          allowNull: false,
          references: {
            model: 'users',
            key: 'userId',
          },
        },
        token: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: sequelize.literal('CURRENT_TIMESTAMP'), 
        },
      }, {
        // Define additional options for model here
       
      });

    return Token;
};
