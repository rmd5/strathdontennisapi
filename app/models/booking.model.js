const mongoose = require("mongoose");

const Booking = mongoose.model(
    "Booking",
    new mongoose.Schema({
        updatedAt: { type: Date, default: Date.now },
        name: String,
        date: Date,
        duration: Number
    })
);

module.exports = Booking;