const db = require("../models")
const Booking = db.booking

exports.create_booking = (req, res) => {
    const booking = new Booking({
        name: req.body.name,
        date: req.body.date,
        duration: req.body.duration
    });

    booking.save((err, booking) => {
        if (err) {
            res.send({ success: false, message: err })
            return
        }

        res.send({ success: true, message: "Booking created" })
    })
}

exports.get_all_bookings = (req, res) => {
    Booking.find({}, (err, bookings) => {
        if (err) {
            res.send({ success: false, message: err })
            return
        }

        if (bookings.length === 0) {
            res.send({ success: false, message: "No bookings found" })
            return
        }

        res.send({ success: true, data: bookings })
    })
}