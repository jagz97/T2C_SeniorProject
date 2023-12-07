const {authJwt, upload} = require('../middleware');
const controller = require('../controllers/matching.controller.js');


module.exports = function (app) {
    app.use(function (req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "authorization, Origin, Content-Type, Accept"
    );
    next();
    });


//gets all posts sorted by date in descending order
    app.post(
        "/api/createPreferences",
        [authJwt.verifyToken],
        controller.preferences

    );

    app.get(
        "/api/getPreferences",
        [authJwt.verifyToken],
        controller.getpreferences

    );

    app.get("/api/getUsersWithSameInterest",
        [authJwt.verifyToken],
        controller.getUsersWithPreferences
    );

    

   












};