
const { verifySignUp } = require("../middleware");
module.exports = app => {
    const users = require("../controllers/users.conroller.js");
    var router = require("express").Router();
   
    

   
    router.post(
        "/auth/signup",
        [
          verifySignUp.checkDuplicateUsernameOrEmail
        ],
        users.register
      );
      router.post("/auth/signin", users.signin);

      router.post("/auth/signout", users.signout);

    app.use('/api/users', router);
};


