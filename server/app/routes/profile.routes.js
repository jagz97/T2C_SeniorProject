const { authJwt } = require('../middleware');
const controller = require ('../controllers/profile.controller');


module.exports = function (app) {

    app.use(function (req, res, next) {
        
     res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
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
    

    

};    