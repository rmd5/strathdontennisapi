const controller = require("../controllers/booking.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post(
        "/create_booking",
        controller.create_booking
    );

    app.get(
        "/get_all_bookings",
        controller.get_all_bookings
    );
};