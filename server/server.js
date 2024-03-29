const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");


global.__basedir = __dirname;

const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
  credentials: true 
};

app.use(cors(corsOptions));



// parse requests of content-type - application/json
app.use(express.json());




// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(
//   cookieSession({
//     name: "t2c-session",
//     keys: ["COOKIE_SECRET"], // should use as secret environment variable
//     httpOnly: true,
//     sameSite: 'strict'
//   })
// );

let dotenv = require('dotenv').config()
console.log(dotenv);


const db = require("./app/models");
db.sequelize.sync({force: false})
  .then(() => {
    console.log("Drop and re-sync db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});


require("./app/routes/turorial.routes")(app);
require("./app/routes/users.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/profile.routes")(app);
require("./app/routes/hotel.routes")(app);
require("./app/routes/posts.routes.js")(app);
require("./app/routes/experience.routes.js")(app);
require("./app/routes/matching.routes.js")(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = app;