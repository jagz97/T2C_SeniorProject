
const controller = require('../controllers/hotel.controller');



module.exports = function (app) {
    app.use(function (req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "authorization, Origin, Content-Type, Accept"
    );
    next();
    });

    app.post(
    "/api/hotels_search_city_name",
    controller.hotelSearhCityName
    );

    app.post(
        "/api/hotelDetails",
        controller.getHotelDetails
    );

    app.post(
        "/api/createCheckout",
        controller.createCheckout
    )


};
