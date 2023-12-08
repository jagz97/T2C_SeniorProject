'use strict';

module.exports = (sequelize, Sequelize) => {
  const Matched = sequelize.define('matched', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
  
    matchDate: {
        type: Sequelize.DATE,
        allowNull: false
    },
   
  });

  return Matched;
};