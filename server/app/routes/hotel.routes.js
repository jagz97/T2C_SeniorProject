
const controller = require('../controllers/hotel.controller');
const {authJwt, upload} = require('../middleware');


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
        [authJwt.verifyToken],
        controller.createCheckout
    );

    app.post(
        "/api/successReservation",
        [authJwt.verifyToken],
        controller.handleSuccess
    );

    app.get(
        "/api/reservations",
        [authJwt.verifyToken],
        controller.getReservations
    );

    app.post(
        "/api/reservations/:id",
        [authJwt.verifyToken],
        controller.deleteReservation


    );
   


};
