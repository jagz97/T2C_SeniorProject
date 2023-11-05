'use strict';

module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define("Post", {
        caption: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users', // This should match the table name in your Users model
                key: 'userId',
            }
        },
        postPicId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Images', // This should match the table name in your Image model
                key: 'id',
            }
        }
    });

    return Post;
};
