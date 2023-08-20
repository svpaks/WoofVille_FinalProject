const router = require("express").Router();
const Booking = require("../models/Booking");

router.post("/", async (req, res) => {
    const newBooking = new Booking(req.body);
    try {
        const savedBooking = await newBooking.save();
        res.status(200).json(savedBooking);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/", async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.delete("/:id", async (req, res) => {
     const booking = await Booking.findById(req.params.id);
     try {
        const result = await Booking.deleteOne({ _id: req.params.id });
        if (result.deletedCount === 0) {
            return res.status(404).json("Booking not found");
        }

        res.status(200).json("Booking has been deleted...");
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
