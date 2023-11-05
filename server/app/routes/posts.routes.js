const {authJwt, upload} = require('../middleware');
const createPost = require('../controllers/posts.contoller');

module.exports = function (app) {
    app.use(function (req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "authorization, Origin, Content-Type, Accept"
    );
    next();
    });

    app.post(
    "/api/posts/createPost",
    [authJwt.verifyToken],
    upload.fields([
        { name: 'postPic', maxCount: 1 }, // Specify the file field name and the maximum number of files
        { name: 'caption' }, // Specify a field named 'key1' (you can add more as needed)
        { name: 'country' }, // Specify a field named 'key2' (you can add more as needed)
        {name: 'city'}
    ]),
    createPost.post
    );


//gets all posts sorted by date in descending order
    app.get(
        "/api/posts/getAllPosts",
        [authJwt.verifyToken],
        createPost.getPostsByUserId

    );












};