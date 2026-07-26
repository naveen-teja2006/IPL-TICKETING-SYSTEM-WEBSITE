const db = require("../config/db");
// INSERT BOOKING
async function createBooking(userId, matchId, seatId) {
    let sql1 = "INSERT INTO Bookings(user_id,match_id,seat_id) VALUES(?,?,?) "
    const [result] = await db.promise().query(sql1, [userId, matchId, seatId]);
    return result;
}
// UPDATE SEAT
async function bookSeat(seatId) {
    let sql2 = "UPDATE Seats SET status = 'already booked' WHERE id =  ? AND status = 'available' ";
    let [result] = await db.promise().query(sql2, [seatId]);
    return result;
};

// Add Bookings
async function getMyBookings(userId) {
const sql3 = `SELECT b.id,
b.booking_time,
m.team1,
m.team2,
m.venue,
m.match_date,
m.price,
m.poster,
s.seat_number
FROM Bookings b
JOIN Matches m
ON b.match_id = m.id
JOIN Seats s
ON b.seat_id = s.id
WHERE b.user_id = ${userId}
ORDER BY b.booking_time DESC`;
    let [results] = await db.promise().query(sql3, [userId]);
    return results;
};
module.exports = { createBooking, bookSeat, getMyBookings };