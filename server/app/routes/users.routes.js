
const { verifySignUp } = require("../middleware");
module.exports = app => {
    const users = require("../controllers/users.conroller.js");
    var router = require("express").Router();

    app.use(function(req, res, next) {

      res.header(
        "Access-Control-Allow-Headers", 
        "authoriztion, Origin, Content-Type, Accept"
        );

        next();
    
    });
   
    

   
    router.post(
        "/auth/signup",
        [
          verifySignUp.checkDuplicateUsernameOrEmail
        ],
        users.register
      );
      router.post("/auth/signin", users.signin);

      router.post("/auth/signout", users.signout);

      router.post("/auth/requestReset", users.requestPasswordReset);
      router.post("/auth/resetPassword", users.resetPassword);

    app.use('/api/users', router);
};

