const { authJwt, upload } = require('../middleware');
const controller = require('../controllers/experiences.controller');



module.exports = function (app) {
    app.use(function (req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "authorization, Origin, Content-Type, Accept"
    );
    next();
    });

    app.post(
    "/api/profile/createExperience",
    [authJwt.verifyToken],
    controller.createExperience
    );

    app.get(
        "/api/profile/experiences",
        controller.getExperience
    );





};
