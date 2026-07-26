let bookingsController = require("../controller/bookingsController");
let express = require("express");
let router = express.Router();
router.post("/",bookingsController.createBooking);
router.post("/:userId",bookingsController.getMyBookings);
module.exports = router;