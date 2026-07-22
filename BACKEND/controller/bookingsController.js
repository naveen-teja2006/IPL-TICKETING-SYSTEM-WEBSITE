const bookingsModel = require("../model/bookingsModel");
async function createBooking(req, res) {
    try {
        const { userId, matchId, seatIds } = req.body;
        if (!userId || !matchId || !seatIds) {
            return res.status(400).json({ message: "All Fields Are Required" });
        }
        for (let seatId of seatIds) {
            // Book Seat
            let seatResult = await bookingsModel.bookSeat(seatId);
            if (seatResult.affectedRows == 0) {
                return res.status(400).json({ message: "Seat Already Booked" });
            }
            // Create Booking
            await bookingsModel.createBooking(userId, matchId, seatId);
        }
        return res.status(201).json({ success: true, message: "Booking Successful" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}
// Get All my Bookings
async function getMyBookings(req, res) {
    let { userId } = req.params;
    try {
        const bookings = await bookingsModel.getMyBookings(userId);
        return res.status(200).json(bookings);
    }
    catch (error) {
        return res.status(500).json("Internal Server Error");
    }
}
module.exports = { createBooking , getMyBookings};