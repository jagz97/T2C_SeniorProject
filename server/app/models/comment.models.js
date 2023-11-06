// comments.model.js
'use strict';

module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define("Comment", {
    postId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Posts', // References the Posts table
        key: 'id',
      },
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'users', // References the Users table
        key: 'userId',
      },
    },
    text: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  });

  return Comment;
};
