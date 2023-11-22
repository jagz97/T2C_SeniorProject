'use strict';

module.exports = (sequelize, DataTypes) => {
    const Like = sequelize.define("Like", {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    Like.associate = (models) => {
        Like.belongsTo(models.Post, {
            foreignKey: 'postId',
            onDelete: 'CASCADE',
        });
    };

    return Like;
};