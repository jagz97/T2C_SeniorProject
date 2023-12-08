const express = require('express');
const router = express.Router();
const db = require("../models");
const sequelize = require("sequelize");

// POST /api/preferences
// Create user preferences or update if already exists
exports.preferences = async function (req, res)  {
    try {
        const userId = req.id;
        const { gender, country, interest, bio } = req.body;

        // Check if the user exists
        const user = await db.users.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }

        // Check if preferences already exist for the user
        let userPreferences = await db.preferences.findOne({
            where: {
                userId: userId,
            },
        });

        // If preferences exist, update them; otherwise, create new preferences
        if (userPreferences) {
            userPreferences = await userPreferences.update({
                gender,
                country,
                interest,
                bio
            });
        } else {
            userPreferences = await db.preferences.create({
                userId,
                gender,
                country,
                interest,
                bio
            });
        }

        return res.status(201).json(userPreferences);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};




// GET /api/preferences/:userId
// Get user preferences
exports.getpreferences = async function (req, res){
    try {
        const userId = req.id;

        // Check if the user exists
        const user = await db.users.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }

        // Find user preferences
        const userPreferences = await db.preferences.findOne({ where: { userId } });
        if (!userPreferences) {
            return res.status(404).json({ error: 'User preferences not found.' });
        }

        return res.status(200).json(userPreferences);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}





exports.getUsersWithPreferences = async function (req, res) {
    try {
        const userId = req.id;

        // Check if the user exists
        const user = await db.users.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }

        // Find user preferences
        const userPreferences = await db.preferences.findOne({ where: { userId } });
        if (!userPreferences) {
            return res.status(404).json({ error: 'User preferences not found.' });
        }

        // Find users with the same preferences
        const matchedUsers = await db.users.findAll({
            attributes: ['userId', 'username'], // Select only the necessary fields
            include: [{
                model: db.preferences,
                as: 'userPreferences',
                attributes: ['userPreferenceId', 'userId', 'gender', 'country', 'interest','bio'], // Select only the necessary fields
                where: {
                    [sequelize.Op.or]: [ 
                        { gender: userPreferences.gender },
                        { country: userPreferences.country },
                        { interest: userPreferences.interest },
                    ],
                },
            }],
            where: {
                userId: { [sequelize.Op.ne]: userId }, // Exclude the current user
            },
        });

        return res.status(200).json(matchedUsers);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};







exports.matchUser = async function (req, res) {

    const user1Id = req.id;
    const user2Id = req.body.user2Id;

    const currentDate = new Date();
    if (!user1Id) {
        return res.status(404).json({ error: 'User not found.' });
    }

    try {
        const newMatchedUser = await db.matchedusers.create({
            user1Id: user1Id,
            user2Id: user2Id,
            matchDate: currentDate
        });
        
        const insertedRecord = await newMatchedUser.reload();
        return res.status(200).json(insertedRecord);
     
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }


};