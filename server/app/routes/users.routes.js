module.exports = app => {
    const users = require("../controllers/users.conroller.js");
    var router = require("express").Router();
    
    router.post('/register', users.register);

    // router.post('/login', users.login);

    // router.use(users.validateToken);

    // router.get('/getUsers', users.getUsers);

    app.use('/api/users', router);
};


