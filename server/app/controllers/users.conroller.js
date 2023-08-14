const db = require("../models");
const Users = db.users;

const joi = require("joi");
const bcrypt = require("bcryptjs");
const config = require("../config/auth.config");
const Op = db.Sequelize.Op;

const jwt = require("jsonwebtoken");

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
        password: bcrypt.hashSync(req.body.password, 8)
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

    // const token = user.generateAuthToken();
    // res.header("x-auth-token", token).send(token);

       





};

exports.signin= async(req, res) => {



    try {
        const user = await Users.findOne({
          where: {
            username: req.body.username,
          },
        });
    
        if (!user) {
          return res.status(404).send({ message: "User Not found." });
        }
    
        const passwordIsValid = bcrypt.compareSync(
          req.body.password,
          user.password
        );
    
        if (!passwordIsValid) {
          return res.status(401).send({
            message: "Invalid Password!",
          });
        }
    
        const token = jwt.sign({ id: user.id },
                               config.secret,
                               {
                                algorithm: 'HS256',
                                allowInsecureKeySizes: true,
                                expiresIn: 86400, // 24 hours
                               });
    
    
        req.session.token = token;
    
        return res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email
        });
      } catch (error) {
        return res.status(500).send({ message: error.message });
      }

};

exports.signout = async (req, res) => {
    try {
      req.session = null;
      return res.status(200).send({
        message: "You've been signed out!"
      });
    } catch (err) {
      this.next(err);
    }
  };