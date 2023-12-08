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
    upload.fields([
        { name: 'experiencePic', maxCount: 1 }, // Specify the file field name and the maximum number of files
        { name: 'city_country' }, // Specify a field named 'key1' (you can add more as needed)
        { name: 'starRating' }, // Specify a field named 'key2' (you can add more as needed)
        {name: 'hotelName'},
        {name: 'restaurantName'},
        {name: 'restaurantCuisine'},
        {name: 'hotelLocation'},
        {name: 'hotelRatings'},
        {name: 'restaurantLocation'},
        {name: 'restaurantRatings'},
        {name: 'attractionName'},
        {name: 'attractionLocation'},
        {name: 'attractionDescription'},
        {name: 'attractionRatings'},
    ]),
    controller.createExperience
    );

    app.get(
        "/api/profile/experiences",
        [authJwt.verifyToken],
        controller.getExperience
    );

    app.get(
        "/api/profile/experience/:userId",
        [authJwt.verifyToken],
        controller.getExperience
    );

    

    app.get('/api/profile/experiences/:experienceId',
        
        controller.getExperienceById
    
    );





};
