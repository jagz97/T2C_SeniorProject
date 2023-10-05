const { authJwt, upload } = require('../middleware');
const controller = require('../controllers/profile.controller');



module.exports = function (app) {
    app.use(function (req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "authorization, Origin, Content-Type, Accept"
    );
    next();
    });

    app.post(
    "/api/profile/createProfile",
    [authJwt.verifyToken],
    controller.createProfile
    );

    app.get(
    '/api/profile/getProfile',
    [authJwt.verifyToken],
    controller.getUserProfile
    );

    app.post("/api/profile/updateProfilePic",
    [authJwt.verifyToken],
    upload.single('profilePic',), 
    controller.updateProfilePicture
    );

    app.get("/api/profile/getprofilePicture",
    [authJwt.verifyToken], 
    controller.getProfilePic
    );

    app.post("/api/profile/updateBioPic",
    [authJwt.verifyToken],
    upload.single('bioPic'),
    controller.updateBioPic
    );
    
    app.get("/api/profile/getBioPiC",
    [authJwt.verifyToken], 
    controller.getBioPic
    );






};
