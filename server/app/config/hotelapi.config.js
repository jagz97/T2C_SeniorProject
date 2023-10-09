const dotenv = require('dotenv');
dotenv.config()

module.exports = {
    URL_PREFIX: 'https://apidojo-booking-v1.p.rapidapi.com',  
    API_KEY: process.env.API_KEY,
    HOST: process.env.HOST
};

