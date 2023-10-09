const db = require("../models");
const Users = db.users;
const Token = db.token;

const mailConfig = require("../config/mail.config.js");
const bcrypt = require("bcrypt");
const config = require("../config/auth.config");
const crypto = require("crypto");
const nodemailer = require('nodemailer');

const clientURL = 'http://localhost:3000';

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
        password: req.body.password
    };

    // save user to database
    Users.create(user)
    .then(data => {
        res.send(data);
        console.log(data);
        console.log(data.dataValues);
        console.log(data.dataValues.userId);
        console.log(data.dataValues.username);
        console.log(data.dataValues.email);
    })
    .catch(err => {
        res.status(500).json(err);
        console.log(err);
    });


};

exports.signin= async(req, res) => {



    try {
        const user = await Users.findOne({
          where: {
            email: req.body.email,
          },
        });
    
        if (!user) {
          return res.status(404).send({ message: "User Not found." });
        }
    
        const passwordIsValid = bcrypt.compareSync(
          req.body.password,
          user.password
        );
        const lastLoggedIn = await user.lastLoggedIn;
        // Determine firstTimeLogin based on lastLoggedIn
        const firstTimeLogin = lastLoggedIn === null ? true : false;


        user.lastLoggedIn = new Date();
        await user.save();

        if (!passwordIsValid) {
          return res.status(401).send({
            message: "Invalid Password!",
          });
        }
    
        const token = jwt.sign({ id: user.userId },
                               config.secret,
                               {
                                algorithm: 'HS256',
                                allowInsecureKeySizes: true,
                                expiresIn: 86400, // 24 hours
                               });
                           
        return res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          accesstoken: token,
          firsTimeLogin: firstTimeLogin
        });
      } catch (error) {
        return res.status(500).send({ message: error.message });
      }

      

};



exports.signout = async (req, res) => {
    try {
      req.id = null;
      return res.status(200).send({
        message: "You've been signed out!"
      });
    } catch (err) {
      this.next(err);
    }
  };



exports.requestPasswordReset = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await Users.findOne({ where: { email } });
    
 
    if (!user) throw new Error("Email does not exist");


    const existingToken = await Token.findOne({ where: { userId: user.userId } });

    if (existingToken) await existingToken.destroy();

    const resetToken = crypto.randomBytes(32).toString("hex");
    const hash = bcrypt.hashSync(resetToken, 10);

    await Token.create({
      userId: user.userId,
      token: hash,
      createdAt: Date.now(),
    });

    const link = `${clientURL}/passwordReset?token=${resetToken}&id=${user.userId}`;


    const transporter = nodemailer.createTransport({
      service: mailConfig.SERVICE,
      auth: {
        user: mailConfig.USER,
        pass: mailConfig.PASS
      }
    });
    
    const mailOptions = {
      from: 'jagjit.saini2019@gmail.com',
      to: user.email,
      subject: 'T2C Password Reset Link',
      text: 'Copy and Paste the password reset link to reset your password',
      html:'Click the link to reset your password: '+ link
    
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
     console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
        
      }
    });

    res.status(200).send({ link });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};



exports.resetPassword = async (req, res) => {
  try {
    const { userId, token, password } = req.body;
    const passwordResetToken = await Token.findOne({ where: { userId } });

    if (!passwordResetToken) {
      throw new Error("Invalid or expired password reset token");
    }

    const isValid = await bcrypt.compare(token, passwordResetToken.token);

    if (!isValid) {
      throw new Error("Invalid or expired password reset token");
    }
    const user = await Users.findByPk(userId);
    const hash = await bcrypt.hash(password, 10);
  

    await Users.update(
      { password: hash },
      { where: { userId: userId } }
    );

   

    const transporter = nodemailer.createTransport({
      service: mailConfig.SERVICE,
      auth: {
        user: mailConfig.USER,
        pass: mailConfig.PASS
      }
    });
    
    const mailOptions =  {
      from: 'jagjit.saini2019@gmail.com',
      to: user.email,
      subject: 'T2C Password Reset Successfull',
      text: 'Successful password reset',
      html: '<p> Your Passwords have been reset successfully</p>'
    
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
     console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
        
      }
    });

    await passwordResetToken.destroy();

    res.status(200).send({ message: "Password reset was successful" });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};
