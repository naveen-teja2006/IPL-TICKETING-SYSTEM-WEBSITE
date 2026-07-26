let matchController = require("../controller/matchesController");
let seatController = require("../controller/seatsController");
let express = require("express");
let router = express.Router();
router.get("/",matchController.getAllMatches)
router.get("/:id",matchController.getAllMatchesById);
router.get("/:id/seats",seatController.getAllSeatsById);
module.exports = router;