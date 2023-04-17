const db = require("../models");
const Users = db.users;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const joi = require("joi");


const Op = db.Sequelize.Op;

exports.register = async (req, res) => {
    if(!req.body.email ||!req.body.password)
    return res.status(400).json({error: "Please provide email and password"});


    const userFound = await Users.findOne({
        where: {
            email: req.body.email
        }
    });
    if(userFound) return res.status(400).json({error: "User already exists"});

    const user = {
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    };

    // save user to database
    Users.create(user)
    .then(data => {
        res.send(data);
        console.log(data);
        console.log(data.dataValues);
        console.log(data.dataValues.id);
        console.log(data.dataValues.username);
        console.log(data.dataValues.email);
    })
    .catch(err => {
        res.status(500).json(err);
        console.log(err);
    });
    
       





};


