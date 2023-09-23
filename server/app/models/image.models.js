'use strict';
const Sequelize = require('sequelize');
const User = require('./users.models'); // Adjust the path accordingly

module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define("image", {
      type: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },
      data: {
        type: DataTypes.BLOB("long"),
      },
    });
  
    return Image;
  };


