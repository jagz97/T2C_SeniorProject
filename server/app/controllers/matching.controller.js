const express = require('express');
const router = express.Router();
const db = require("../models");
const sequelize = require("sequelize");

// POST /api/preferences
// Create user preferences or update if already exists
exports.preferences = async function (req, res)  {
    try {
        const userId = req.id;
        const { gender, country, interest } = req.body;

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
            });
        } else {
            userPreferences = await db.preferences.create({
                userId,
                gender,
                country,
                interest,
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



// GET /api/matchedUsers/:userId
// Display users with the same preferences
exports.getUsersWithPreferences = async function(req, res) {
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
            include: [{
                model: db.preferences,
                as: 'userPreferences',
                where: {
                    gender: userPreferences.gender,
                    country: userPreferences.country,
                    interest: userPreferences.interest,
                },
                
            }
        ],
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







