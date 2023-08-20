const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(      
    {
        category: {
            type: String,
            required: true,
        },
        date_start: {
            type: Date,
            required: true,
        },
        date_end: {
            type: Date,
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Booking", BookingSchema);