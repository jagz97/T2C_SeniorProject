'use strict';

module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define("Post", {
        caption: {
            type: Sequelize.STRING,
            allowNull: false
        },
        date: {
            type: Sequelize.DATE,
            allowNull: false
        },
        country: {
            type: Sequelize.STRING,
            allowNull: false
        },
        city: {
            type: Sequelize.STRING,
            allowNull: false
        },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'users', // This should match the table name in your Users model
                key: 'userId',
            }
        },
        postPicId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'Images', // This should match the table name in your Image model
                key: 'id',
            }
        }
    });

    return Post;
};
